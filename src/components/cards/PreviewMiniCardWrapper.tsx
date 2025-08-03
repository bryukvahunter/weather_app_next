import { weatherIcons } from "@/shared/data/weatherIcons.data";
import { CurrentWeatherData } from "@/shared/types/weatherData.types";
import { formatCapitalLetter, formatTemp } from "@/utils/helpers";
import MiniCard from "./MiniCard";

interface Props {
  data: CurrentWeatherData;
}

export default function PreviewMiniCardWrapper({ data }: Props) {
  const icon = weatherIcons[data.weather[0].icon];
  const description = formatCapitalLetter(data.weather[0].description);
  const temp = formatTemp(Math.round(data.main.temp));
  const feelsLike = formatTemp(Math.round(data.main.feels_like));

  return (
    <MiniCard
      title={data.name}
      icon={icon}
      temp={temp}
      feelsLike={feelsLike}
      description={description}
    />
  );
}
