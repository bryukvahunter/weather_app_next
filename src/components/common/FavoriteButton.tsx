"use client";
import { CurrentWeatherData } from "@/shared/types/weatherData.types";
import { useFavoriteStore } from "@/store/useFavorites";
import Image from "next/image";

interface Props {
  city: CurrentWeatherData;
}

export default function FavoriteButton({ city }: Props) {
  const toggle = useFavoriteStore((state) => state.toggle);
  const favorites = useFavoriteStore((state) => state.favorites);
  console.log(favorites);
  const isFavorite = city.name in favorites;

  function onToggle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    toggle(city.name, city);
  }

  return (
    <button
      aria-label="Add to favorites"
      className="absolute top-4 right-4 p-1 transition-transform hover:scale-110"
      onClick={onToggle}
    >
      <Image
        src={isFavorite ? "/heart-like-solid.svg" : "/heart-like.svg"}
        alt="like"
        width={30}
        height={30}
      />
    </button>
  );
}
