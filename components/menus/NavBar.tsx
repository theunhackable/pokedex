import React from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import SearchBar from "../SearchBar";
import PokeBallLogo from "../icons/PokeBallLogo";
import Link from "next/link";

export const NavBar = () => {
  return (
    <header className="sticky top-0 p-5 bg-primary-red text-white z-50">
      <nav className="flex items-center justify-between">
        <Link href='/' className="flex items-center gap-1">
          <PokeBallLogo className="h-7 w-7" />
          <h1 className="text-2xl font-bold">
            Pokédex
          </h1>
        </Link>
        <div className="flex items-center gap-5">
        <div>
          <Link href='/pokemons'>Pokemons </Link>
        </div>
        <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};
