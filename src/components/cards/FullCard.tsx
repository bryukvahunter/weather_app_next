"use client";

import Image from "next/image";
import React from "react";
import FavoriteButton from "../common/FavoriteButton";
import {
  CurrentWeatherData,
  ForecastWeatherData,
} from "@/shared/types/weatherData.types";
import { weatherIcons } from "@/shared/data/weatherIcons.data";
import {
  formatTemp,
  converToLocal,
  formatCapitalLetter,
} from "@/utils/helpers";
import WeatherMiniCardWrapper from "./WeatherMiniCardWrapper";

interface Props {
  currentData: CurrentWeatherData;
  forecastData: ForecastWeatherData;
}

const convertPressure = 0.75006375541921;

export default function FullCard({ currentData, forecastData }: Props) {
  const icon = weatherIcons[currentData.weather[0].icon];

  const localSunrise = converToLocal(
    currentData.sys.sunrise,
    currentData.timezone,
  );

  const localSunset = converToLocal(
    currentData.sys.sunset,
    currentData.timezone,
  );

  return (
    <div className="relative flex w-full max-w-5xl flex-col rounded-3xl bg-gradient-to-r from-[#4A90E2] to-[#A266DD] p-8 text-white shadow-lg dark:from-[#160524] dark:to-[#002e78]">
      <div className="flex w-full flex-col items-center justify-around gap-8 md:flex-row md:items-center">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-[50px] leading-[1] font-medium">
              {currentData.name}
            </h1>
          </div>

          <div className="flex items-start gap-6">
            <div className="text-[56px] leading-none font-normal">
              {formatTemp(Math.round(currentData.main.temp))}°
            </div>

            <div>
              <p className="text-2xl font-medium">
                {formatCapitalLetter(currentData.weather[0].description)}
              </p>
              <p className="text-base text-white/70">
                Ощущается как {}
                {formatTemp(Math.round(currentData.main.feels_like))}°
              </p>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-6 text-sm text-white/80">
            <div className="flex flex-col">
              <span className="text-xl tracking-wide uppercase">Ветер</span>
              <span className="text-center">{currentData.wind.speed} м/с</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl tracking-wide uppercase">Влажность</span>
              <span className="text-center">{currentData.main.humidity}%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl tracking-wide uppercase">Давление</span>
              <span className="text-center">
                {Math.round(currentData.main.pressure * convertPressure)} мм рт.
                ст.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 self-end text-base text-white/80">
          <div className="flex items-center gap-3">
            <Image src={"/sunrise.svg"} alt="sunrise" width={40} height={40} />
            <div className="flex flex-col">
              <span className="text-xl tracking-wide text-white/70 uppercase">
                Рассвет
              </span>
              <span className="text-lg font-semibold">{localSunrise}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Image src={"/sunset.svg"} alt="sunrise" width={40} height={40} />
            <div className="flex flex-col">
              <span className="text-xl tracking-wide text-white/70 uppercase">
                Закат
              </span>
              <span className="text-lg font-semibold">{localSunset}</span>
            </div>
          </div>
        </div>

        <div className="relative h-[180px] w-[200px] self-center">
          <Image
            src={icon}
            alt="Weather Illustration"
            fill
            sizes="200px"
            className="object-contain"
          />
        </div>
      </div>

      <FavoriteButton city={currentData} />

      <div className="mt-5 flex justify-between gap-4 overflow-x-auto">
        {forecastData.list.map((data) => (
          <WeatherMiniCardWrapper key={data.dt} data={data} />
        ))}
      </div>
    </div>
  );
}
