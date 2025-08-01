"use client";
import MiniCard from "@/components/cards/MiniCard";
import FavoriteCitiesCard from "./FavoriteCitiesCard";
import { favoriteCities } from "@/shared/data/favoriteCities.data";
import { useFavoriteStore } from "@/store/useFavorites";

export default function FavoriteCitiesPreview() {
  const favorites = useFavoriteStore((state) => state.favorites);
  console.log(favorites);

  return (
    <section className="w-full max-w-6xl rounded-2xl bg-gradient-to-r from-[#4A90E2] to-[#A266DD] px-10 py-8 shadow-lg">
      <div className="flex justify-between gap-4">
        {/* {favorites.map((city) => {
          return <MiniCard key={city.id} data={city} />;
        })} */}
      </div>
    </section>
  );
}
