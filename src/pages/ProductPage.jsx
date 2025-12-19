import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ProductPage() {
  const location = useLocation()
  const data = location.state
  const navigate = useNavigate()
  const priceFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'narrowSymbol'
    })

  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center'>
        <div className='w-[50%]'>

          <div>
            <h1 className='text-amber-400 text-5xl text-center'>{data.title}</h1>
            <div className='flex flex-col justify-between md:justify-evenly items-center my-6'>
              <span className='text-3xl '>{priceFormatter.format(data.price)}</span>
              <span className='text-xl text-gray-700 hover:underline hover:cursor-pointer' onClick={() => navigate('/shop', {state: data.category})}>{data.category}</span>
            </div>
          </div>

          <div className='text-center'>
            <p className='text-xl my-5'>{data.description}</p>
            <button className='bg-amber-400 hover:cursor-pointer text-black p-2 text-xl'>Add to Cart</button>
          </div>
        </div>

        <div>
          <img className='m-6 h-[374px] w-[336px] md:w-auto md:h-auto'src={data.image} alt={data.title} />
        </div>

    </div>
  )
}
