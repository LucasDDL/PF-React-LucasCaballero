import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';


export default function ItemDetailContainer() {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const productDocument = doc(db, 'products', itemId);

        getDoc(productDocument)
            .then(queryDocumentSnapshot => {

                const fileds = queryDocumentSnapshot.data()
                const queryProduct = { id: queryDocumentSnapshot.id, ...fileds }
                setProduct(queryProduct)
            })
            .catch(error => {
                showNotification('error', 'hubo un error')
            })
            .finally(setLoading(false))

    }, [itemId])

    if (loading) {
        return (
            <h1>La página está cargando</h1>
        )
    }

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