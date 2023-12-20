import { useState } from 'react'
import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'



function App() {
  const [itemsOnCart, setItemsOnCart] = useState(0);

  const handleAdd = (count) => {
    setItemsOnCart(itemsOnCart + count);

  }

  return (
    <>
      <Navbar itemsOnCart={itemsOnCart} />
      <ItemListContainer greeting={'Bienvenidos a Merceria 13'} />
      <ItemCount initial={1} stock={10} onAdd={handleAdd} />
    </>
  )
}

export default App
