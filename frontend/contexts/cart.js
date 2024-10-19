import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const isItemInCart = state.cart.some(
        (cartItem) => cartItem._id === item._id
      );

      if (isItemInCart) {
        return state;
      }

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
