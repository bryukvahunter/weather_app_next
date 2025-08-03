import FullCard from "@/components/cards/FullCard";
import BackHomeButton from "@/components/common/BackHomeButton";
import { ENDPOINTS } from "@/services/api/constants";
import { getWeather } from "@/services/api/requests";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    cityName: string;
  }>;
}

export default async function CityPage({ params }: Props) {
  const dynamicParams = await params;
  const decodeName = decodeURIComponent(dynamicParams.cityName);

  const current = await getWeather(decodeName, ENDPOINTS.CURRENT);
  const forecast = await getWeather(decodeName, ENDPOINTS.FORECAST);

  const errorCurrent = !current || "error" in current;
  const errorForecast = !forecast || "error" in forecast;

  if (errorCurrent || errorForecast) {
    notFound();
  }

  return (
    <div className="relative flex w-full flex-col items-center px-2 pt-3 pb-5">
      <BackHomeButton path="/" />
      <FullCard currentData={current} forecastData={forecast} />
    </div>
  );
}
