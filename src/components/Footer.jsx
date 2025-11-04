import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center bg-gray-800 text-gray-300'>
      <div className='grid grid-col-1 md:grid-cols-3 gap-4 p-5'>
        <div>
          <h3 className='text-white'>NOX CLOTHING</h3>
          <p>Contemporary clothing designed for comfort and style. Sustainable materials, ethical production.</p>
        </div>
        <div>
          <h3 className='text-white'>SHOP</h3>
          <ul>
            <li className='my-2'><Link>All products</Link></li>
            <li className='my-2'><Link>{`Women's Collection`}</Link></li>
            <li className='my-2'><Link>{`Men's Collection`}</Link></li>
          </ul>
        </div>
        <div>
            <h3 className='text-white'>CONTACT US</h3>
            <p>jowebdev5021@gmail.com</p>
          </div>
      </div>
      <div className='border-t border-gray-500 w-[80%] text-center'>
        <p className='text-center p-10'> &copy; {new Date().getFullYear()} Nox Clothing. All rights reserved.</p>
      </div>
    </footer>
  )
}
