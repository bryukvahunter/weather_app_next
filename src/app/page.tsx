import { getCurrentWeather } from "@/api/request";
import FavoriteCitiesPreview from "@/components/favorite_cities_preview/FavoriteCitiesPreview";
import Header from "@/components/header/Header";
import RandomCityWeather from "@/components/random_city_weather/RandomCityWeather";

export default async function Home() {
  const city = await getCurrentWeather("Moscow");

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between gap-8 p-3 pb-10 font-sans">
      <Header />
      <main className="flex w-full max-w-6xl flex-col items-center gap-[32px]">
        <RandomCityWeather city={city} />

        <FavoriteCitiesPreview />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        © 2025 @NE_UNIVAEM. All rights reserved.
      </footer>
    </div>
  );
}
