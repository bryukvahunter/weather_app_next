import { getCurrentWeather } from "@/services/api/requests";
import FavoriteCitiesPreview from "@/components/preview_page/favorite_cities_preview/FavoriteCitiesPreview";
import RandomCityWeather from "@/components/preview_page/RandomCityWeather";
import { getRandomCity } from "@/utils/randomCityGenerate";
import { randomCities } from "@/shared/data/randomCities.data";

export default async function Home() {
  const city = await getCurrentWeather(getRandomCity(randomCities));

  return (
    <div>
      <main className="flex w-full max-w-6xl flex-col items-center gap-[32px]">
        <RandomCityWeather city={city} />
        <FavoriteCitiesPreview />
      </main>
    </div>
  );
}
