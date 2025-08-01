interface CloudsData {
  all: number;
}

interface CoordData {
  lon: number;
  lat: number;
}

interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
}

interface SysData {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface WeatherData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface WindData {
  speed: number;
  deg: number;
}

export interface CurrentWeatherData {
  base: string;
  clouds: CloudsData;
  cod: number;
  coord: CoordData;
  dt: number;
  id: number;
  main: MainData;
  name: string;
  sys: SysData;
  timezone: number;
  visibility: number;
  weather: WeatherData[];
  wind: WindData;
}
