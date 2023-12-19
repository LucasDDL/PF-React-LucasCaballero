import React from 'react'
import carrito from '../img/carrito.png'
import styled from 'styled-components'

export default function CartWidget() {
  return (
    <CartContainer>
      <img className='carrito' src={carrito} alt="carrito" />
      <p>5</p>

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