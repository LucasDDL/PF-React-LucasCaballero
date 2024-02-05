import React from 'react'
import styled from 'styled-components'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../services/firebase/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { Snackbar } from '@mui/material'




export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (categoryId) {
            document.title = `Bokita Store: ${categoryId}`
        }
        return () => {
            document.title = 'Bokita Store'
        }
    })

    useEffect(() => {
        const productsCollection = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
        getDocs(productsCollection)
            .then(querySnapshot => {
                const queryProducts = querySnapshot.docs.map(doc => {
                    const fields = doc.data()

                    return { id: doc.id, ...fields }
                })
                setProducts(queryProducts);
            })
            .catch(error => {
                return (
                    <Snackbar
                        open={true}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Note archived"
                        action={action}
                    />
                )
            })
            .finally(setLoading(false))
    }, [categoryId])

    if (loading) {
        return (
            <h1>La página está cargando</h1>
        )
    }

    return (

        <ItemListCont>
            <h1>
                {
                    categoryId ? `Catalogo de ${categoryId}` : 'Catalogo de Istrumentos Musicales'
                }
            </h1>
            <ItemList products={products} />
        </ItemListCont>
    )
}

const ItemListCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px 0px;
font-size: xx-large;
color: blueviolet;

`