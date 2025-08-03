import { instance } from "./instance";
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
const days = 5;

export async function getWeather(cityName: string, endpoint: string) {
  try {
    const response = await instance(endpoint, {
      params: {
        lang: "ru",
        q: cityName,
        appid: process.env.NEXT_PUBLIC_OPENWEATHER_KEY,
        units: "metric",
        cnt: days,
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
