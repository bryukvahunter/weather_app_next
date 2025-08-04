import React from "react";
import Logo from "./header_components/Logo";
import Search from "./header_components/Search";
import NowDate from "./header_components/NowDate";
import ThemeChanger from "./header_components/ThemeChanger";
import OpenFavoriteButton from "./header_components/OpenFavoriteButton";

export default function Header() {
  return (
    <header className="flex w-full max-w-7xl items-center justify-between gap-6 rounded-2xl bg-white/10 px-6 py-4 text-white shadow-md backdrop-blur-sm">
      <Logo />
      <Search />
      <NowDate />
      <ThemeChanger />
      <OpenFavoriteButton />
    </header>
  );
}
