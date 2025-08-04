import { getWeather } from "@/services/api/requests";
import FavoriteCitiesPreview from "@/components/favorites_preview/FavoriteCitiesPreview";
import { randomCities } from "@/shared/data/randomCities.data";
import PreviewCard from "@/components/cards/PreviewCard";
import Link from "next/link";
import { ENDPOINTS } from "@/services/api/constants";
import { getRandomCity } from "@/utils/helpers";

export default async function Home() {
  const city = await getWeather(getRandomCity(randomCities), ENDPOINTS.CURRENT);

  return (
    <div className="w-full px-4">
      <main className="mx-auto flex max-w-6xl flex-col items-center gap-8 py-3">
        <Link
          href={`/search/${city.name}`}
          className="flex w-full items-center justify-center"
        >
          <PreviewCard city={city} />
        </Link>
        <FavoriteCitiesPreview />
      </main>
    </div>
  );
}
