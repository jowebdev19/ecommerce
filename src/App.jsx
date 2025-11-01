import { useState, useEffect } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
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
      <Footer/>
    </>
  )
}

export default App
