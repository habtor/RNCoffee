import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      // Check if the item already exists in the cart
      const isItemInCart = state.cart.some(
        (cartItem) => cartItem._id === item._id
      );

      // If the item exists, return the same state without adding the item
      if (isItemInCart) {
        return state;
      }

      // If the item doesn't exist, add it to the cart
      return {
        cart: [...state.cart, item],
      };
    }),
  
  removeFromCart: (item) =>
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem._id !== item._id),
    })),
  clearCart: () => set({ cart: [] }),
}));
