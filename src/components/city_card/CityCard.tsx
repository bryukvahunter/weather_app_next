import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../common/FavoriteButton";
import { CurrentWeatherData } from "@/shared/types/weatherData.types";
import { weatherIcons } from "@/shared/data/weatherIcons.data";

interface Props {
  city: CurrentWeatherData;
}

export default function CityCard({ city }: Props) {
  const { main, name, weather } = city;
  const icon = weatherIcons[weather[0].icon];

  return (
    <Link
      href={`/favorite/${name}`}
      className="relative flex h-[200px] w-full max-w-5xl items-center justify-around rounded-2xl bg-gradient-to-r from-[#4A90E2] to-[#A266DD] p-8 font-sans text-white shadow-md"
    >
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="text-sm opacity-80">заглушка2</p>
        </div>

        <p className="text-sm">заглушка3</p>

        <div className="flex items-start gap-6">
          <div className="flex items-start">
            <span className="text-6xl font-bold">{main.temp}</span>
            <Image src="/degrees.svg" alt="degrees" width={20} height={20} />
          </div>

          <div>
            <p className="text-lg font-medium">{weather[0].description}</p>
            <p className="text-sm opacity-80">{main.feels_like}</p>
          </div>
        </div>
      </div>

      <div className="relative h-[150px] w-[200px]">
        <Image
          src={icon}
          alt="Weather Illustration"
          fill
          className="object-contain"
        />
      </div>

      <FavoriteButton cityName={city.name} />
    </Link>
  );
}
