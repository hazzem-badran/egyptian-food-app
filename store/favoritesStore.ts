// store/favoritesStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FavoritesState } from "@/types/favoritesStore.types";

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (item) => {
        const { favorites } = get();
        const exists = favorites.some(
          (fav) => fav.id === item.id && fav.category === item.category
        );

        if (exists) {
          // إزالة من المفضلة
          set({
            favorites: favorites.filter(
              (fav) => !(fav.id === item.id && fav.category === item.category)
            ),
          });
        } else {
          // إضافة للمفضلة
          set({ favorites: [...favorites, item] });
        }
      },

      isFavorite: (id, category) =>
        get().favorites.some(
          (fav) => fav.id === id && fav.category === category
        ),

      // دالة مسح جميع المفضلات
      clearAllFavorites: () => {
        set({ favorites: [] });
      },
    }),
    {
      name: "favorites-storage", // اسم التخزين المحلي
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
