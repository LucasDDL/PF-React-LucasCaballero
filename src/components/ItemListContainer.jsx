import React from 'react'
import styled from 'styled-components'

export default function ItemListContainer({ greeting }) {
    return (

        <ItemListStyled>
            {greeting}
        </ItemListStyled>
    )
}

const ItemListStyled = styled.div`
display: flex;

justify-content: center;
align-items: center;
margin-top: 20px;
font-size: xx-large;
color: blueviolet;

`