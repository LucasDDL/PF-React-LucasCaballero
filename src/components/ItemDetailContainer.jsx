import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getProductById } from '../asyncMock'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'


export default function ItemDetailContainer() {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <ItemDetailContainerDiv>
            <ItemDetail {...product} />
        </ItemDetailContainerDiv>
    )
}

const ItemDetailContainerDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
font-size: xx-large;
color: blueviolet;

`