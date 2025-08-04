import Image from "next/image";
import FavoriteButton from "../common/FavoriteButton";
import { CurrentWeatherData } from "@/shared/types/weatherData.types";
import { weatherIcons } from "@/shared/data/weatherIcons.data";
import { formatCapitalLetter, formatTemp } from "@/utils/helpers";

interface Props {
  city: CurrentWeatherData;
}

export default function PreviewCard({ city }: Props) {
  const { main, name, weather } = city;
  const icon = weatherIcons[weather[0].icon];

  return (
    <div className="dark:to-[#002e78]p-8 relative flex w-full flex-col items-center justify-around gap-4 rounded-2xl bg-gradient-to-r from-[#4A90E2] to-[#A266DD] p-6 font-sans text-white shadow-md md:h-[200px] md:flex-row dark:from-[#160524]">
      <div className="text-center md:text-left">
        <h1 className="mb-3 text-3xl font-medium md:text-[50px]">{name}</h1>

        <div className="flex items-start gap-6">
          <div className="flex items-start">
            <span className="text-[56px] leading-none font-normal">
              {formatTemp(Math.round(main.temp))}°
            </span>
          </div>

          <div>
            <p className="text-2xl font-medium">
              {formatCapitalLetter(weather[0].description)}
            </p>
            <p className="text-base text-white/70">
              Ощущается как {formatTemp(Math.round(main.feels_like))}°
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-[100px] w-[120px] md:h-[150px] md:w-[200px]">
        <Image
          src={icon}
          alt="Weather Illustration"
          sizes="200px"
          fill
          className="object-contain"
        />
      </div>

      <FavoriteButton city={city} />
    </div>
  );
}
