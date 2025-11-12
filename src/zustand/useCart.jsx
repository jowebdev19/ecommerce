import {create} from 'zustand'

export const useCart = create((set) => ({
    cart: [],
    addToCart: (newItem) => 
        set((state) => {
            const inCart = state.cart.some((item) => item.product.id === newItem.id)

            if (inCart === false){
                return ({cart: [...state.cart, {product: newItem, quantity: 1}]})
            }  else {
                return ({cart: state.cart.map((item) => {
                    if (item.product.id === newItem.id){
                       return {...item, quantity: item.quantity + 1}
                    }  else { 
                        return item
                    }
                })
            })
        }
    }
        ),
    removeFromCart: (id) => {
        set((state) => ({cart: state.cart.filter((item) => {
            if (item.id !== id){
                return item
            }
        })}))
    }
}))