import { randomCities } from "@/shared/data/randomCities.data";

export function converToLocal(dt: number, timezone: number) {
  const clean = new Date().getTimezoneOffset() * 60;
  const local = new Date((dt + clean + timezone) * 1000);

  const format = new Intl.DateTimeFormat("ru", {
    timeStyle: "short",
  }).format(local);

  return format;
}

export function formatTemp(temp: number) {
  return temp > 0 ? `+${temp}` : `${temp}`;
}

export function getRandomCity(arr: string[]) {
  const city = arr[Math.floor(Math.random() * randomCities.length)];
  return city;
}

export function formatCapitalLetter(str: string) {
  const capitalLetter = str.charAt(0).toUpperCase();
  const wordPart = str.slice(1);

  return capitalLetter + wordPart;
}
