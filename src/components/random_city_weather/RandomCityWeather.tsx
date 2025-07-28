"use cient";

import Image from "next/image";

export default function RandomCityWeather({ info }) {
  return (
    <div className="flex h-[200px] w-full max-w-5xl items-center justify-around rounded-2xl bg-gradient-to-r from-[#4A90E2] to-[#A266DD] p-8 font-sans text-white shadow-md">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{info.name}</h1>
          <p className="text-sm opacity-80">{info.cord}</p>
        </div>

        <p className="text-sm">{info.date}</p>

        <div className="flex items-start gap-6">
          <div className="flex items-start">
            <span className="text-6xl font-bold">{info.temp}</span>
            <Image src="/degrees.svg" alt="degrees" width={20} height={20} />
          </div>

          <div>
            <p className="text-lg font-medium">{info.visibility}</p>
            <p className="text-sm opacity-80">{info.feels_like}</p>
          </div>
        </div>
      </div>

      <div className="relative h-[150px] w-[200px]">
        <Image
          src="/random_city_img.png"
          alt="Weather Illustration"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
