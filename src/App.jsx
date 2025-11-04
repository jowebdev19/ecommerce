import { useState, useEffect } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const [cartState, setCartState] = useState()
  const queryClient = new QueryClient()

  
  useEffect(() => {
   
  },[])

  return (
    <>
      <Header/>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route element={<Shop/>} path='/shop'/>
        </Routes>
      </QueryClientProvider>
      <Footer/>
    </>
  )
}

export default App
