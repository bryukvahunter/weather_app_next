import FavoriteCitiesCard from "./FavoriteCitiesCard";

const favoriteCities = [
  {
    name: "Cairo",
    cord: "31.2497 , 31.2497",
    date: Date.now(),
    temp: "+31.2",
    visibility: "Clear sky",
    feels_like: "+33.2°",
  },
  {
    name: "Saint Petersburg",
    cord: "11.2337 , 35.2497",
    date: Date.now(),
    temp: "+21.2",
    visibility: "Sunny",
    feels_like: "+23.2°",
  },
  {
    name: "Dudinka",
    cord: "133.5234 , 331.1117",
    date: Date.now(),
    temp: "+12",
    visibility: "Cloudy",
    feels_like: "+15°",
  },
  {
    name: "Volokolamsk",
    cord: "15.5235 , 17.4324",
    date: Date.now(),
    temp: "+27.3",
    visibility: "Clear sky",
    feels_like: "+29.5°",
  },
  {
    name: "Tashkent",
    cord: "61.5521 , 66.6341",
    date: Date.now(),
    temp: "+41.1",
    visibility: "Sunny",
    feels_like: "+45.2°",
  },
];

export default function FavoriteCitiesPreview() {
  return (
    <section className="w-full max-w-6xl rounded-2xl bg-gradient-to-r from-[#4A90E2] to-[#A266DD] px-10 py-8 shadow-lg">
      <div className="flex justify-between gap-4">
        {favoriteCities.map((city) => {
          return <FavoriteCitiesCard city={city} />;
        })}
      </div>
    </section>
  );
}
