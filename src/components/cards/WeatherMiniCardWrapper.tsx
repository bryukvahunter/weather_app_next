import { weatherIcons } from "@/shared/data/weatherIcons.data";
import { DailyWeatherData } from "@/shared/types/weatherData.types";
import { formatTemp } from "@/utils/helpers";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import MiniCard from "./MiniCard";

interface Props {
  data: DailyWeatherData;
}
const convertToSec = 1000;

export default function WeatherMiniCardWrapper({ data }: Props) {
  const icon = weatherIcons[data.weather[0].icon];
  const date = format(data.dt * convertToSec, "EEEE, d MMMM", { locale: ru });
  const temp = formatTemp(Math.round(data.temp.day));
  const feelsLike = formatTemp(Math.round(data.feels_like.day));
  const description = data.weather[0].description;
  return (
    <MiniCard
      title={date}
      icon={icon}
      temp={temp}
      feelsLike={feelsLike}
      description={description}
    />
  );
}
