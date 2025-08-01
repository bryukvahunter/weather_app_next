import { getCurrentWeather } from "@/services/api/requests";
import { CurrentWeatherData } from "@/shared/types/weatherData.types";

import { create } from "zustand";

type ResponseData = CurrentWeatherData | null;

interface CurrenaWeatherState {
  city: string;
  weatherData: ResponseData;
  errors: string;
}

interface CurrentWeatherStore extends CurrenaWeatherState {
  updateCity: (newCity: string) => void;
  getCurrentData: (cityName: string) => void;
}

const initialState: CurrenaWeatherState = {
  city: "",
  weatherData: null,
  errors: "",
};

export const useCurrentWeatherStore = create<CurrentWeatherStore>((set) => ({
  ...initialState,

  updateCity: (newCity: string) =>
    set((state: CurrenaWeatherState) => ({ ...state, city: newCity })),

  getCurrentData: async (cityName: string) => {
    try {
      const response = await getCurrentWeather(cityName);

      if ("error" in response) {
        set({ errors: response.error.message, weatherData: null });
      } else set({ weatherData: response, errors: "" });

      setTimeout(() => {
        set({ errors: "" });
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  },
}));
