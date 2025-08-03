import { CurrentWeatherData } from "@/shared/types/weatherData.types";
import { create } from "zustand";

type FavoritesState = Record<string, CurrentWeatherData>;

interface FavoriteStore {
  favorites: FavoritesState;
  add: (cityName: string, response: CurrentWeatherData) => void;
  isFavorite: (cityName: string) => boolean;
  remove: (cityName: string) => void;
  toggle: (cityName: string, response: CurrentWeatherData) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favorites: {},

  add: (cityName, response) => {
    const favorites = get().favorites;
    set({ favorites: { ...favorites, [cityName]: response } });
  },

  isFavorite: (cityName) => {
    const favorites = get().favorites;
    const isFavorite = cityName in favorites;
    return isFavorite;
  },

  remove: (cityName) =>
    set((state) => {
      const prev = { ...state.favorites };
      delete prev[cityName];

      return { favorites: prev };
    }),

  toggle: (cityName, response) => {
    if (get().isFavorite(cityName)) {
      get().remove(cityName);
    } else {
      get().add(cityName, response);
    }
  },
}));
