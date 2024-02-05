import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';


export default function ItemDetail({ id, name, price, category, img, stock, description }) {

    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useCart()

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const objProduct = {
            id,
            name,
            price,
            quantity
        }
        addItem(objProduct);
    }


    return (
        <ItemDetailArticle >
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <button><Link to={'/cart'}>Terminar compra</Link></button>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </ItemDetailArticle>
    )
}

const ItemDetailArticle = styled.article`
display: flex;
flex-direction: column;
background-color: #5e04c4af;
color: #dbc270;
border: black solid 2px;
max-width: 470px;
h2 {
    text-align: center;
}
picture {
    display: flex;
    justify-content: center;
    
}

footer {
    text-align: center;
    
    button{
    
        background-color: lightgray;
        border: none;
        padding: 10px;
        margin: 5px;
        cursor: pointer;
    
         &:hover {
        background-color: gray;
        }
        a{
            text-decoration: none;
        }
    }
}
`
