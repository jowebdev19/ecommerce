import React from 'react'
import CartItem from '../components/CartItem'
import { useCart } from '../zustand/useCart'
import { useNavigate } from 'react-router-dom'

export default function CartPage() {
  const navigate = useNavigate()
  const cart = useCart((state) => state.cart)
  const totalPrice = () => {
    let price = 0 

    //formatter to use for USD currency
    const narrowFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'narrowSymbol'
    })
    /// get price of item, multiply it by quantity, add to price
    cart.items.forEach((item) => {
      price += (item.quantity * item.product.price)
    })

    return narrowFormatter.format(price)
  }
  console.log(cart)
  return (
    <div className='bg-amber-500 flex justify-center items-center'>
      <div className='bg-white w-[60%] m-10 flex flex-col justify-center items-center'>
        {
          cart.items.length > 0 ? cart.items.map((item) => {
            return <CartItem key={item.id} product={item}/>
          }) : <div className='flex flex-col justify-center items-center p-[200px]'>
              <p className='text-xl mb-3'>No items in your shopping cart</p>
              <button className='text-blue-500 text-lg hover:underline hover:cursor-pointer' onClick={() => navigate('/shop')}>Go to shop</button>
            </div>
        }
        <p className='text-2xl'>Total Price: {totalPrice()}</p>
        <button className='bg-amber-500 text-white p-2 m-3 rounded text-2xl cursor-pointer'>Checkout</button>
      </div>
    </div>
  )
}
