import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const [mobileMenu, setMobileMenu] = useState('hidden')

  const handleMenuClick = () => {
    mobileMenu === 'hidden' ? setMobileMenu('block') : setMobileMenu('hidden')
  }

  return (
    <div className='relative flex flex-row justify-between items-center p-5'>
      <div className={`fixed z-10 top-0 left-0 w-full h-full ${mobileMenu} bg-white/90`}>
        <ul className='h-full w-full' onClick={handleMenuClick}>
          <li className='text-center hover:cursor-pointer text-3xl border-b-1 p-3 w-full hover:bg-gray-300'><Link>Home</Link></li>
          <li className='text-center hover:cursor-pointer text-3xl border-b-1 p-3 w-full hover:bg-gray-300'><Link>Shop</Link></li>
          <li className='text-center hover:cursor-pointer text-3xl border-b-1 p-3 w-full hover:bg-gray-300'><Link>Contact Us</Link></li>
          <li onClick={handleMenuClick} className='text-red-600 text-center hover:cursor-pointer text-3xl  p-3 w-full hover:bg-gray-300'>Close</li>
        </ul>
      </div>
        <span className='text-3xl font-sans font-light tracking tracking-widest hover:cursor-pointer' onClick={() => navigate('/')}>Nox Clothing</span>
        <Menu onClick={handleMenuClick} className='block md:hidden hover:cursor-pointer' size={35}/>         
        <nav className='hidden md:block'>
          <Link className='nav-link'>Home</Link>
          <Link className='nav-link' to='/shop'>Shop</Link>
          <Link className='nav-link'>Contact Us</Link>
        </nav>
        <button className='relative w-[24px]'>
          <ShoppingBag className='mr-10 hover:cursor-pointer'/>
          <span className='absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>{0}</span>
        </button>
    </div>
  )
}
