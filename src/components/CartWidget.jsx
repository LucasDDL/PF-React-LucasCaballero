import React from 'react'
import carrito from '../img/carrito.png'
import styled from 'styled-components'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function CartWidget() {
  const { totalQuantity } = useCart()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/cart')
  }

  return (
    <CartContainer onClick={handleClick}>
      <img className='carrito' src={carrito} alt="carrito" />
      <p>{totalQuantity}</p>

    </CartContainer>
  )
}

const CartContainer = styled.button`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 0 12px;
gap: 10px;
border-radius: 8px;
border: none;

.carrito {
  width: 50px;
}

`