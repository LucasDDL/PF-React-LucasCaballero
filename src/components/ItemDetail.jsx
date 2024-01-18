import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
export default function ItemDetail({ id, name, price, category, img, stock, description }) {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
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
                        <Link to={'/cart'}>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </ItemDetailArticle>
    )
}

const ItemDetailArticle = styled.article`

`
