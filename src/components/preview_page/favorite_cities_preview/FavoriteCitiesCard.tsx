import { CityData } from "@/shared/types/favoriteCities.types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  city: CityData;
}

export default function FavoriteCitiesCard({ city }: Props) {
  return (
    <Link
      href={`/city/${city.name}`}
      className="flex w-[200px] flex-col items-center rounded-xl bg-white/10 px-6 py-4 text-center text-white backdrop-blur-sm"
    >
      <h2 className="mb-2 text-lg font-medium">{city.name}</h2>
      <Image
        src="/sunny_icon.png"
        alt="sunny_icon"
        width={80}
        height={80}
        className="mb-3"
      />
      <div className="mb-2 flex justify-center gap-3 text-sm">
        <span>{city.temp}</span>
        <span>{city.feels_like}</span>
      </div>
      <div className="text-sm opacity-80">{city.visibility}</div>
    </Link>
  );
}
