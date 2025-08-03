"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const [cityName, setCityName] = useState("");

  const router = useRouter();

  function handleSearchCity(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search/${cityName}`);
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
      <button
        type="submit"
        className="rounded-full bg-white/30 px-3 py-1 text-sm transition hover:bg-white/40"
      >
        Go
      </button>
    </form>
  );
}
