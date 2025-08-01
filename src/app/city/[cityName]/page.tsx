import FullCard from "@/components/cards/FullCard";
import { getCurrentWeather } from "@/services/api/requests";
import { notFound } from "next/navigation";

export default async function CityPage({ params }) {
  const name = await params;

  const response = await getCurrentWeather(name.cityName);

  if (!response || "error" in response) {
    notFound();
  }

  return <FullCard city={response} />;
}
