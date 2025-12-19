import React from 'react'
import { useCart } from '../zustand/useCart'
import { useNavigate } from 'react-router-dom'

export default function CartItem({product}) {
  const navigate = useNavigate()
  const item = product.product
  const addToCart = useCart((state) => state.addToCart)
  const removeFromCart = useCart((state) => state.removeFromCart)
  const deleteFromCart = useCart((state) => state.deleteFromCart)
  const priceFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'narrowSymbol'
    })
  return (
    <div className='bg-white w-[100%]'>
        <div className='flex flex-row justify-between items-center p-4'>
          <div className='flex flex-row items-center'>
            <img src={item.image} className='w-[25%]' alt="" />
            <span className='px-5 text-xl'>
              <button className='hover:cursor-pointer hover:text-blue-500 hover:underline' onClick={() => navigate(`/Product/${item.id}`, {state: item})}>{item.title}</button>
              <p className='text-green-500 text-lg'>in stock</p>
            </span>
          </div>
          <p className='text-2xl mr-5'>{priceFormatter.format(item.price)}</p>
        </div>
        <div className='flex flex-row justify-around items-center'>
          <div className='flex flex-row justify-center items-center'>
            <p className='mr-5'>Quantity:</p>
            <button className='text-red-500 text-2xl hover:cursor-pointer' onClick={() => removeFromCart(product)}>-</button>
            <p className='p-1 border-1 border-gray-400 m-3'>{product.quantity}</p>
            <button className='text-green-400 text-2xl hover:cursor-pointer' onClick={() => addToCart(item)}>+</button>
          </div>

          <button className='text-red-500 hover:cursor-pointer' onClick={() => deleteFromCart(product)}>Remove</button>
        </div>
    </div>
  )
}
