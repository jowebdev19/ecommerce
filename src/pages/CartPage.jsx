import React from 'react'
import CartItem from '../components/CartItem'
import { useCart } from '../zustand/useCart'

export default function CartPage() {
  const cart = useCart((state) => state.cart)
  const totalPrice = () => {
    let price = 0 
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
            return <CartItem id={item.id} product={item}/>
          }) : <p className='text-xl p-[200px]'>No items in your shopping cart</p>
        }
        <p>Total Price: {totalPrice()}</p>
        <button className='bg-amber-500 text-white p-2 m-3 rounded text-2xl cursor-pointer'>Checkout</button>
      </div>
    </div>
  )
}
