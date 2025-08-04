"use client";

import { useThemeStore } from "@/store/theme";
import React from "react";

export default function ThemeChanger() {
  const storeData = useThemeStore((state) => state.theme);
  const change = useThemeStore((state) => state.change);
  console.log(storeData);
  function toggleTheme() {
    change();
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggleTheme}
        className={`relative h-6 w-12 rounded-full p-1 transition-colors duration-300 ${
          storeData === "light" ? "bg-[#A7C8F2]" : "bg-[#5C3B85]"
        }`}
      >
        <div
          className={`dark:bg-purple h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
            storeData === "dark" ? "translate-x-6" : ""
          }`}
        />
      </button>
      <span className="w-16 text-sm text-white/80">
        {storeData === "light" ? "Sunny!" : "Cloudy!"}
      </span>
    </div>
  );
}
