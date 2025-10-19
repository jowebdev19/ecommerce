import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-row justify-between items-center p-5'>
      <span className='text-3xl font-sans font-light tracking tracking-widest hover:cursor-pointer' onClick={() => navigate('/')}>Nox Clothing</span>
      <nav >
        <Link className='nav-link'>Home</Link>
        <Link className='nav-link'>Shop</Link>
        <Link className='nav-link'>Contact Us</Link>
      </nav>
      <button className='relative'>
        <ShoppingBag className='mr-10 hover:cursor-pointer'/>
        <span>{}</span>
      </button>
    </div>
  )
}
