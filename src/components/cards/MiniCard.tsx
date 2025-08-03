import Image from "next/image";
import React from "react";

type TitleData = string | number;

interface Props {
  title: TitleData;
  icon: string;
  temp: string;
  feelsLike: string;
  description: string;
}

export default function MiniCard({
  title,
  icon,
  temp,
  feelsLike,
  description,
}: Props) {
  return (
    <div className="flex h-[235px] w-[200px] flex-col items-center rounded-xl bg-white/10 px-6 py-4 text-center text-white backdrop-blur-sm">
      <h2 className="mb-2 text-lg font-medium capitalize">{title}</h2>

      <Image
        src={icon}
        alt="weather_icon"
        width={60}
        height={60}
        className="mb-3"
        style={{ height: "auto", width: "auto" }}
      />
      <div className="mb-2 flex justify-center gap-3 text-sm">
        <span>{temp}°</span>
        <span>{feelsLike}°</span>
      </div>
      <div className="text-sm capitalize opacity-80">{description}</div>
    </div>
  );
}
