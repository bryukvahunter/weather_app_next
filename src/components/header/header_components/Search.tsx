"use client";

import { getCurrentWeather } from "@/services/api/requests";
import { useCurrentWeatherStore } from "@/store/currentWeather";
import { useRouter } from "next/navigation";
import { FormEvent, useActionState, useState } from "react";

const initialState = {
  message: "",
};

export default function Search() {
  const [cityName, setCityName] = useState("");
  const getWeather = useCurrentWeatherStore((state) => state.getCurrentData);
  const error = useCurrentWeatherStore((state) => state.errors);

  const router = useRouter();

  const [state, formAction, pending] = useActionState(
    getCurrentWeather,
    initialState,
  );

  function handleSearchCity(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // getWeather(cityName);

    router.push(`/city/${cityName}`);
    setCityName("");
  }

  return (
    <form
      onSubmit={handleSearchCity}
      className="w-[400px] items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-sm"
    >
      <input
        type="text"
        placeholder="Search city..."
        className="w-80 bg-transparent text-sm placeholder-white/60 outline-none"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      {/* {error && <p>ОШИБ ОЧКА</p>} */}
      {state?.message && <p aria-live="polite">{state.message}</p>}
      <button
        type="submit"
        className="rounded-full bg-white/30 px-3 py-1 text-sm transition hover:bg-white/40"
      >
        Go
      </button>
    </form>
  );
}
