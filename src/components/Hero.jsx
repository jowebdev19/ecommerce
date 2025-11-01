import React from 'react'

export default function Hero() {
  return (
    <section className='hidden md:flex relative flex-row justify-evenly items-center w-full'>
      <img className='w-full' src='/heroimglarge.webp'/>
        <div className='flex justify-evenly items-center flex-row absolute w-full'>
            <span>&nbsp;</span>
            <div className='flex flex-col justify-center'>
               <h2 className='"text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wider"'>New Season Collection</h2>  
               <p className="text-white text-lg mb-8 max-w-lg mx-auto lg:mx-0">Discover the latest trends and elevate your style with our new arrivals. Quality clothing designed for everyday comfort.</p>   
               <div className="hero-btns">
                  <button className='bg-white text-gray-800 px-8 py-3 rounded-none hover:bg-gray-800 hover:text-white transition duration-300 font-medium tracking-wide hover:cursor-pointer'>Shop Now</button>
               </div>    
            </div>
        </div>
    </section>
  )
}
