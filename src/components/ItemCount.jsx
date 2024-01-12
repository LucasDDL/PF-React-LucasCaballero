import React, { useState } from 'react'
import styled from 'styled-components'



export default function ItemCount({ initial, stock }) {

    const [count, setCount] = useState(initial);

    const incrementCount = () => {
        if (count < stock) {

            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > 1) {

            setCount(count - 1)
        }
    }



    return (
        <ItemCountDiv>
            <div className='controls'>
                <Button onClick={incrementCount}>+</Button>
                <h4>{count}</h4>
                <Button onClick={decrement}>-</Button>
            </div>
            <div>
                <Button disabled={!stock}>
                    Agregar al carrito
                </Button>
            </div>
        </ItemCountDiv>
    )
}

const ItemCountDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .controls {
    display: flex;
    align-items: center;
  }
`;

const Button = styled.button`
  background-color: lightgray;
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;