import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import ItemCount from './ItemCount';
export default function ItemDetail({ id, name, price, category, img, stock, description }) {



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
                <ItemCount initial={1} stock={10} />
            </footer>
        </ItemDetailArticle>
    )
}

const ItemDetailArticle = styled.article`

`
