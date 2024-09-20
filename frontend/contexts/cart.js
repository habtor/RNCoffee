import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
  removeFromCart: (item) =>
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.id !== item.id),
    })),
  clearCart: () => set({ cart: [] }),
}));
