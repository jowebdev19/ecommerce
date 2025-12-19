import React from 'react'
import { useCart } from '../zustand/useCart'

export default function CartItem({product}) {
  const item = product.product
  const addToCart = useCart((state) => state.addToCart)
  const removeFromCart = useCart((state) => state.removeFromCart)
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
              {item.title}
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

          <button className='text-red-500'>Remove</button>
        </div>
    </div>
  )
}
