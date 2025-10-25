import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    addToCart: () => {},
    getProductQuantity: () => {},
    removeFromCart: () => {},
    removeOneFromCart: () => {},
    getTotalCost: () => {}
})

export function CardProvider({children}){

    const [cartProducts, setCartProducts] = useState([])

    function getProductQuantity(id){
       const quantity = cartProducts.find((item) => item.itemInfo.id === id)?.quantity

       if (quantity === 0){
        return 0
       } 
    
       return quantity
    }
    
    function addToCart(product){ //should only accept object of api-item
        const quantity = getProductQuantity(product.id) //or product.itemInfo.id if not working

        if (quantity === 0){ //none in cart so far
            setCartProducts(
                [...cartProducts, 
                    {
                        itemInfo: product,
                        quantity: 1,
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(item => 
                    item.itemInfo.id === product.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                )
            )
        }
    }

    function removeFromCart(){

    }


    function removeOneFromCart(){

    }


    function getTotalCost(){

    }


    const contextValue = {
        items: cartProducts,
        addToCart,
        getProductQuantity,
        removeFromCart,
        removeOneFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}