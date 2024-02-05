import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { Button, TextField } from '@mui/material';


export default function OrderForm({ onCreate }) {
    const [userData, setUserData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
        telefono: ''
    })

    const userDataChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({
            userData
        });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <TextField
                name='nombre'
                required
                id="nombre"
                label='Nombre'
                value={userData.nombre}
                onChange={(e) => userDataChange(e)}
                placeholder='Ingrese Nombre'
            />
            <TextField
                required
                name='apellido'
                id='apellido'
                label='Apellido'
                value={userData.apellido}
                onChange={(e) => userDataChange(e)}
                placeholder='Ingrese Apellido'
            />
            <TextField
                required
                name='email'
                id='email'
                label='Email'
                value={userData.email}
                onChange={(e) => userDataChange(e)}
                type='email'
                placeholder='Ingrese email'
            />
            <TextField
                required
                name='direccion'
                id='direccion'
                label='Dirección'
                value={userData.direccion}
                onChange={(e) => userDataChange(e)}
                placeholder='Ingrese dirección'
            />
            <TextField
                required
                name='telefono'
                id='telefono'
                label='Teléfono'
                value={userData.telefono}
                onChange={(e) => userDataChange(e)}
                placeholder='Ingrese Teléfono'
            />
            <Button color='primary' variant='contained' type="submit" >Generar orden</Button>
        </Form>

    )
}

const Form = styled.form`
display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

`