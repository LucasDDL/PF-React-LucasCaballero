import React from 'react'
import styled from 'styled-components'
import Logo from '../img/descarga.webp'
import CartWidget from './CartWidget'

export default function Navbar(props) {
    return (

        <NavContainer>
            <img src={Logo} alt="Logo de Mercria 13" />
            <div>
                <a href="">Bazar</a>
                <a href="">Ropa</a>
                <a href="">Material Escolar</a>
                <a href="">Juguetes</a>
            </div>
            <CartWidget />
        </NavContainer>

    )
}

const NavContainer = styled.nav`
box-sizing: border-box;
padding: 20px;
font-weight: bold;
background-color:  #c4043c;
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
            color: white;
            font-weight: bolder;
            font-size: 30px;
            cursor: pointer;
            &:hover {
                color: #5e04c4af;
                background-color: white;
            }
    }
          

}

`

