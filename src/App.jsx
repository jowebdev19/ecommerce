import { useState, useEffect } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
function App() {

  const [cartState, setCartState] = useState()

  
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('cartState')) === null){
      setCartState({
        items: [],
        amount: 0
      })
    } else {
      setCartState(JSON.parse(localStorage.getItem('cartState')))
    }
  },[])

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('cartState')) !== null){
      localStorage.setItem('cartState', JSON.stringify(cartState))
    }
  }, [cartState])


  return (
    <>
      <Header/>
      <button onClick={() => localStorage.setItem('cartState', null)}>Reset</button>
      <button onClick={() => setCartState({items: [], amount: cartState?.amount + 1})}>Add</button>
      <button onClick={() => setCartState({items: [], amount: cartState?.amount - 1})}>minus</button>

      <Routes>
        <Route index element></Route>
      </Routes>
    </>
  )
}

export default App
