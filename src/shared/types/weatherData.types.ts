interface CloudsData {
  all: number;
}

interface CoordData {
  lon: number;
  lat: number;
}

interface MainData {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_min: number;
  temp_max: number;
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

interface CityData {
  coord: CoordData;
  country: string;
  id: number;
  name: string;
  population: number;
  timezone: number;
}

interface DailyFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

interface DailyTemp {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
}

export interface DailyWeatherData {
  clouds: number;
  deg: number;
  dt: number;
  feels_like: DailyFeelsLike;
  gust: number;
  humidity: number;
  pop: number;
  pressure: number;
  rain: number;
  speed: number;
  sunrise: number;
  sunset: number;
  temp: DailyTemp;
  weather: WeatherData[];
}

export interface ForecastWeatherData {
  city: CityData;
  cnt: number;
  cod: string;
  list: DailyWeatherData[];
  message: number;
}
