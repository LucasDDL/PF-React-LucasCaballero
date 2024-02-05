import React from 'react'
import styled from 'styled-components'
import { useCart } from '../context/CartContext'

export default function CartItem({ id, price, name, quantity }) {
  const { removeItem } = useCart()

  const removeItemHandler = () => {
    removeItem(id)
  }

  return (
    <Div>
      <h2>{name}</h2>
      <p>Cantidad: {quantity}</p>
      <p>Precio x cantidad: ${price}</p>
      <p>Subtotal: ${price * quantity}</p>
      <button onClick={removeItemHandler}>X</button>
    </Div>
  )
}

const Div = styled.div`
display: flex;
height: 50px;
justify-content: space-around;
align-items: center;
background-color: #ec9d64;
gap: 10px;
margin: 10px;
text-justify: distribute;
`