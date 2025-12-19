import { create } from "zustand";

export const useCart = create((set) => ({
  cart: {
    items: [],
    quantity: 0,
  },
  addToCart: (newItem) =>
    set((state) => {
      const inCart = state.cart.items.some(
        (item) => item.product.id === newItem.id
      );
      state.cart.quantity++;
      console.log(state.cart.quantity);

      if (inCart === false) {
        return {
          cart: {
            ...state.cart,
            items: [...state.cart.items, { product: newItem, quantity: 1 }],
          },
        };
      } else {
        return {
          cart: {
            ...state.cart,
            items: state.cart.items.map((item) => {
              if (item.product.id === newItem.id) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return item;
              }
            }),
          },
        };
      }
    }),
  removeFromCart: (item) => {
    set((state) => {
      if (item.quantity === 1){
        return ({
          cart: {
            quantity: state.cart.quantity - state.cart.items.find((element) => element.product.id === item.product.id).quantity,
            items: state.cart.items.filter((element) => {
              if (item.product.id !== element.product.id) {
                return item;
              }
            }),
          },
        });
      } else {
        return ({
          cart: {
            quantity: state.cart.quantity - 1,
            items: state.cart.items.map((product) => {
              if (product.product.id === item.product.id){
                return {
                  ...product,
                  quantity: product.quantity - 1,
                }
              } else {
                return product
              }
            })
          }
        })
      }



      
      // return ({
      //   cart: {
      //     quantity: state.cart.quantity - state.cart.items.find((element) => element.product.id === id).quantity,
      //     items: state.cart.items.filter((item) => {
      //       if (item.product.id !== id) {
      //         return item;
      //       }
      //     }),
      //   },
      // });
    });
  },
  deleteFromCart: (item) => {
    set((state) => {
      return({
        cart: {
            quantity: state.cart.quantity - state.cart.items.find((element) => element.product.id === item.product.id).quantity,
            items: state.cart.items.filter((element) => {
              if (item.product.id !== element.product.id) {
                return item;
              }
            }),
          },
      })
    })
  }
}));
