import React from 'react'
import styled from 'styled-components'
import Item from './Item'




export default function ItemList({ products }) {
    return (
        <ItemListDiv>
            {products.map(product => <Item key={product.id}  {...product} />)}
        </ItemListDiv>
    )
}

const ItemListDiv = styled.div`
display: flex;
width: 100vw;
justify-content: space-evenly;
margin: 20px 0px;
`