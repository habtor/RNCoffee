import { create } from "zustand";

export const useFav = create((set) => ({
  fav: [],
  addToFav: (item) =>
    set((state) => {
      const isItemInFav = state.fav.some((FavItem) => FavItem._id === item._id);

      if (isItemInFav) {
        return state;
      }

      return {
        fav: [...state.fav, item],
      };
    }),

  removeFromFav: (item) =>
    set((state) => ({
      fav: state.fav.filter((FavItem) => FavItem._id !== item._id),
    })),
  clearfav: () => set({ fav: [] }),
}));
