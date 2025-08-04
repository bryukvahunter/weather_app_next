import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  theme: "light" | "dark";
  change: () => void;
}

const initialState = "light";

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: initialState,

      change: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    { name: "weather_theme" },
  ),
);
