import { useContext } from 'react'
import { React, createContext, useState } from 'react'
import Alert from '../notifications/Alert';

export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [open, setOpen] = useState(false)

    const addItem = (productToAdd) => {
        if (!IsInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            return (
                setOpen(true)
            )
        }
    }

    const IsInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity
        })
        return total
    }
    const totalQuantity = getTotalQuantity()


    const getTotalPrice = () => {
        let total = 0
        cart.forEach(prod => {
            total += (prod.price * prod.quantity)
        })
        return total
    }
    const totalPrice = getTotalPrice()

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, clearCart, totalPrice, getTotalQuantity }}>
            {children}
            <Alert open={open} setOpen={setOpen} message={'Este item ya esta en el carrito'} />
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}