import RandomCityWeather from "@/components/random_city_weather/RandomCityWeather";

export default function City() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between gap-8 p-3 pb-10 font-sans">
      <main className="flex w-full max-w-6xl flex-col items-center gap-[32px]">
        <RandomCityWeather />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        © 2025 @NE_UNIVAEM. All rights reserved.
      </footer>
    </div>
  );
}
