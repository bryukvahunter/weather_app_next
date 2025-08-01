import { getCurrentWeather } from "@/services/api/requests";

export default async function CityPageTest({ params }) {
  const name = await params;
  const city = await getCurrentWeather(name.cityName);

  return (
    <div className="relative flex h-[200px] w-full max-w-5xl items-center justify-around rounded-2xl bg-gradient-to-r from-[#4A90E2] to-[#A266DD] p-8 font-sans text-white shadow-md">
      <h1 className="text-2xl font-semibold">{city.name}</h1>
    </div>
  );
}
