"use client";

import { useFavoriteStore } from "@/store/useFavorites";
import PreviewCard from "../cards/PreviewCard";
import Link from "next/link";

export default function FavoriteList() {
  const favorites = useFavoriteStore((state) => state.favorites);
  const favoritesArr = Object.entries(favorites);

  return (
    <div className="flex w-full flex-col items-center gap-5 p-3">
      {favoritesArr.map(([city, response]) => (
        <Link
          href={`/search/${city}`}
          key={city}
          className="flex w-full justify-center"
        >
          <PreviewCard city={response} />
        </Link>
      ))}
    </div>
  );
}
