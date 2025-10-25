import React from 'react'

export default function Categories() {
    const categories = [
    {
      id: 1,
      name: "Women's Collection",
      image:
        'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80',
      link: '/collections/women',
    },
    {
      id: 2,
      name: "Men's Collection",
      image:
        'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      link: '/collections/men',
    },
    {
      id: 3,
      name: 'Accessories',
      image:
        'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      link: '/collections/accessories',
    },
  ]
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <h2 className='text-3xl font-light tracking-wider text-gray-800 mb-2'>Shop by Categories</h2>
        <div className='w-24 h-1 bg-amber-400'></div>
        <div className='mt-10 flex flex-row justify-center items-center'>
            {
                categories.map((category) => {
                   return <span className='relative flex justify-center items-center w-1/3'>
                        <img src={category.image} alt={category.name} />
                        <div className='bg-white opacity-70 absolute'>
                            <h2>{category.name}</h2>
                            <p className='text-amber-300'>Shop Now</p>
                        </div>
                    </span>
                })
            }
        </div>
    </div>
  )
}
