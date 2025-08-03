"use client";

import { useFavoriteStore } from "@/store/useFavorites";
import PreviewCityCard from "../cards/PreviewMiniCardWrapper";
import Link from "next/link";

export default function FavoriteCitiesPreview() {
  const favorites = useFavoriteStore((state) => state.favorites);
  const favoritesArr = Object.entries(favorites);

  if (favoritesArr.length === 0) {
    return null;
  }

  return (
    <section className="w-full rounded-2xl bg-gradient-to-r from-[#4A90E2] to-[#A266DD] px-6 py-8 shadow-lg md:max-w-6xl">
      <div className="flex justify-center gap-4">
        {favoritesArr.slice(0, 5).map(([city, response]) => (
          <Link key={city} href={`/search/${city}`}>
            <PreviewCityCard data={response} />
          </Link>
        ))}
      </div>
    </section>
  );
}
