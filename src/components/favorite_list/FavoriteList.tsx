"use client";

import { useFavoriteStore } from "@/store/useFavorites";
import CityCard from "../city_card/CityCard";
import { getCurrentWeather } from "@/services/api/requests";
import { useEffect, useState } from "react";

export default function FavoriteList() {
  const favorites = useFavoriteStore((state) => state.favorites);
  const [weatherData, setWeatherData] = useState([]);

  async function getPromiseAll() {
    const datas = await Promise.all(
      favorites.map((city) => getCurrentWeather(city)),
    );
    setWeatherData(datas);
  }

  useEffect(() => {
    getPromiseAll();
  }, [favorites]);

  return (
    <div className="flex flex-col items-center gap-5 p-3">
      {weatherData.map((city) => (
        <CityCard key={city.name} city={city} />
      ))}
    </div>
  );
}
