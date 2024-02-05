
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartProvider from './context/CartContext'
import NotificationProvider from './notifications/NotificationService'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {



  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider >
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
