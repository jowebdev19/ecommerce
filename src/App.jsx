import { useState, useEffect } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Home from './pages/Home'
function App() {

  const [cartState, setCartState] = useState()

  
  useEffect(() => {
   
  },[])

  return (
    <>
      <Header/>
  
      <Routes>
        <Route index element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
