import { instance } from "./instance";
import { ENDPOINTS } from "./constants";
import { CurrentWeatherData } from "@/shared/types/weatherData.types";
import axios from "axios";

const errorMessages: Record<string, string> = {
  404: "Город не найден",
  401: "Неверный ключ",
  500: "Ошибка на сервере",
};

interface ErrorDescription {
  status: number | undefined;
  message: string;
}
interface ErrorData {
  error: ErrorDescription;
}

const unknownStatusCode = 0;

export async function getCurrentWeather(cityName: CurrentWeatherData["name"]) {
  try {
    const response = await instance(ENDPOINTS.CURRENT, {
      params: {
        lang: "en",
        q: cityName,
        appid: process.env.NEXT_PUBLIC_OPENWEATHER_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);

    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message =
        errorMessages[status || unknownStatusCode] || "Неизвестная ошибка";

      const errorData: ErrorData = {
        error: {
          status,
          message,
        },
      };

      return errorData;
    }
    throw Error;
  }
}

export async function getForecastWeather(cityName: CurrentWeatherData["name"]) {
  try {
    const response = await instance(ENDPOINTS.FORECAST, {
      params: {
        lang: "en",
        q: cityName,
        appid: process.env.NEXT_PUBLIC_OPENWEATHER_KEY,
        units: "metric",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
