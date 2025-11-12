import React, { useEffect, useState } from 'react'
import Products from '../components/Products'
import { useLocation } from 'react-router-dom'

export default function Shop() {
    const location = useLocation()
    const [productFilter, setProductFilter] = useState('All')

    function handleChange(event){
      setProductFilter(event.target.value)
    }

    useEffect(() => {
      if (location.state){
        setProductFilter(location.state)
      }
    }, [])

  return (
    <div className='flex justify-center items-center flex-col py-10'>
        <h1 className='text-2xl'>{productFilter.toUpperCase()}</h1>
        <div className="w-24 h-1 bg-amber-400 mb-5"></div>
        <div className='flex flex-row justify-center items-center m-5'>
          <label className='m-3' htmlFor="select-choice">Filter:</label>
          <div>
            <select defaultValue={productFilter} className='border-1' name="select-choice" onChange={() => handleChange(event)} id="select-choice">
              <option value="All">All products</option>
              <option value={`men's clothing`}>{`Men's clothing`}</option>
              <option value={`women's clothing`}>{`Women's clothing`}</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
        </div>
        <Products filter={productFilter}/>
    </div>
  )
}
