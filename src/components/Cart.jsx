import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import styled from 'styled-components'

export default function Cart() {
    const { cart, addItem, getTotalQuantity, clearCart, totalPrice } = useCart()

    if (getTotalQuantity() === 0) {
        return (
            <Div>
                <h1>Carrito vacio</h1>
                <Link to={'/'}>Volver</Link>
            </Div>
        )
    }

    return (
        <Div>
            {cart.map(item => <CartItem key={item.id} {...item} />)}
            <h3>Total de la comprasss: ${totalPrice}</h3>
            <button className='limpiar-carrito' onClick={clearCart}>Limpiar carrito</button>
            <Link className='checkout' to={'/checkout'}>Checkout</Link>


        </Div>
    )
}

const Div = styled.div`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
.limpiar-carrito{
    align-self: center;
}
.checkout {
    text-decoration: none ;

}

`