import React from 'react'

export default function CartItem({product}) {
  const item = product.product
  console.log(product)
  return (
    <div className='bg-white w-[400px]'>
        <div className='border-2 flex flex-row justify-between items-center'>
          <div className='flex flex-row justify-center items-center'>
            <img src={item.image} className='w-[60px]' alt="" />
            <span className='px-5 text-sm'>
              {item.title}
              <p className='text-green-500'>in stock</p>
            </span>
          </div>
          <p>${item.price}</p>
        </div>
        <div></div>
    </div>
  )
}
