import { CurrentWeatherData } from "@/shared/types/weatherData.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  data: CurrentWeatherData;
}

export default function MiniCard({ data }: Props) {
  return (
    <Link
      href={`/city/${data.name}`}
      className="flex w-[200px] flex-col items-center rounded-xl bg-white/10 px-6 py-4 text-center text-white backdrop-blur-sm"
    >
      <h2 className="mb-2 text-lg font-medium">{data.name}</h2>
      <Image
        src="/sunny_icon.png"
        alt="sunny_icon"
        width={80}
        height={80}
        className="mb-3"
      />
      <div className="mb-2 flex justify-center gap-3 text-sm">
        <span>{data.temp}</span>
        <span>{data.feels_like}</span>
      </div>
      <div className="text-sm opacity-80">{data.visibility}</div>
    </Link>
  );
}
