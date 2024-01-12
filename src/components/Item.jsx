import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Item({ id, name, img, price, stock }) {


    return (
        <Article>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible {stock}
                </p>
            </section>
            <footer>
                <Link className='ver-detalle' to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </Article>
    )
}

const Article = styled.article`
background-color: #dbc270;
border: solid 2px;

h2 {
   text-align: center;
}
footer {
    text-align: center;
    .ver-detalle {
        border-radius: 4px;
        text-align: center;
        text-decoration: none;
        color: #dbc270;
        background-color:   #5e04c4af;
        font-weight: bolder;
        font-size: 30px;
        border: solid;
        
        cursor: pointer;
        &:hover {
            color: #5e04c4af;
            background-color: white;
        }
}

    
}
`
