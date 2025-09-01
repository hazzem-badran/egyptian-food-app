export type FavoriteItem = {
  id: number;
  category: string;
};

export type FavoritesState = {
  favorites: FavoriteItem[];
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: number, category: string) => boolean;
  clearAllFavorites: () => void;
};