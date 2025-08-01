import { randomCities } from "@/shared/data/randomCities.data";

export function getRandomCity(arr: string[]) {
  const city = arr[Math.floor(Math.random() * randomCities.length)];
  return city;
}
