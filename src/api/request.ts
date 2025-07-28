import { API, apiKey } from "./constants";

function getUrl(serverUrl, cityName, apiKey) {
  return `${serverUrl}?lang=en&q=${cityName}&appid=${apiKey}&units=metric`;
}

export async function getCurrentWeather(cityName) {
  try {
    const response = await fetch(getUrl(API.CURRENT_WEATHER, cityName, apiKey));
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
