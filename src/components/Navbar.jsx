import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../img/descarga.webp'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {



    return (
        <NavContainer>
            <Link to={'/'}>
                <img src={Logo} alt="Logo de Mercria 13" />
            </Link>
            <div>
                <NavLink to={'/category/Guitarras'} >Guitarras</NavLink>
                <NavLink to={'/category/Baterias'} >Baterias</NavLink>
                <NavLink to={'/category/Bajos'} >Bajos</NavLink>
            </div>
            <CartWidget />
        </NavContainer>

    )
}

const NavContainer = styled.nav`
box-sizing: border-box;
padding: 20px;
font-weight: bold;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 24%, rgba(255,0,0,1) 81%, rgba(251,214,68,1) 93%);
display: flex;
align-items: center;
justify-content: space-between;
width: 100vw;

img {
    width: 100px;
    cursor: pointer;
}
div {
    
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin: 0 55px;
    
    a {
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

