import React, { useEffect, useState } from 'react'
import OrderForm from './OrderForm'
import styled from 'styled-components'
import { useCart } from '../context/CartContext'
import { serverTimestamp, collection, addDoc, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'
import Alert from '../notifications/Alert'

export default function Checkout() {
    const { cart, totalPrice, clearCart } = useCart()
    const [open, setOpen] = useState(false)

    const createOrder = async ({ userData }) => {
        const order = {
            buyer: userData,
            items: cart,
            total: totalPrice,
            date: serverTimestamp()
        };

        const batch = writeBatch(db);
        const outOfStock = []
        const ids = cart.map(prod => prod.id);
        const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids));
        const querySnapshot = await getDocs(productsCollection)
        const { docs } = querySnapshot

        docs.forEach(doc => {
            const fields = doc.data()
            const stockDb = fields.stock

            const productsOnCart = cart.find(prod => prod.id === doc.id)
            const productQuantity = productsOnCart.quantity

            if (stockDb >= productQuantity) {
                batch.update(doc.ref, { stock: stockDb - productQuantity })
            } else {
                outOfStock.push({ id: doc.id, ...fields })
            }

        })

        if (outOfStock.length === 0) {
            batch.commit()
            await addDoc(collection(db, 'ORDERS'), order);
        } else {
            setOpen(true)
        }
        clearCart();
    }


    return (
        <Div>
            <h1>Checkout</h1>
            <OrderForm onCreate={createOrder} />
            <Alert open={open} setOpen={setOpen} message={'No hay stock de todos los items'} />
        </Div>
    )
}

const Div = styled.div`
display: flex;
flex-direction: column;
border: solid black;
border-radius: 10px;
margin: 20px auto;
width: 80vw;
padding-bottom: 15px;

h1 {
    align-self: center;
}


`