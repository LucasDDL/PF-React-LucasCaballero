import React from 'react'
import styled from 'styled-components'
import { getProduct, getProductsByCategory } from '../asyncMock'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


export default function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProduct

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])


    return (

        <ItemListCont>
            <h1>
                {greeting}
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