"use client";
import { useEffect, useState } from "react";
import PokemonIntroCard from "./PokemonIntroCard";
import Link from "next/link";
import SearchBar from "../SearchBar";
import { Button } from "../ui/button";

const Pokemons = ({ pokemons }: { pokemons: any[] }) => {
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  const [offset, setOffset] = useState(0);
  const [limit, SetLimit] = useState(20);
  const [search, setSearch] = useState("");
  const [displayPokemons, setDisplayPokemons] = useState([] as any);
  // pagenate the filtered pokemons

  function searchByPokemonName(query: string) {
    if (query === "") {
      setFilteredPokemons(pokemons);
    } else {
      const regex = new RegExp(query, "i");

      const filtered = pokemons.filter((pokemon) => regex.test(pokemon.name));
      setFilteredPokemons((prev) => filtered);
      setOffset(() => 0)
    }
  }
  useEffect(() => {
    searchByPokemonName(search);
  }, [search]);

  useEffect(() => {
    const startIndex = offset,
      endIndex = offset + limit;
    const displayPokemons = filteredPokemons.slice(startIndex, endIndex);
    setDisplayPokemons(() => displayPokemons);
  }, [offset, limit, filteredPokemons]);

  return (
    <>
    <div className="ml-5">

      <SearchBar setSearch={setSearch} />
    </div>
      <div className=" my-10 flex gap-1 sm:gap-5 items-center justify-center flex-wrap">
        {displayPokemons.length ? (
          displayPokemons?.map((pokemon: any) => (
            <Link key={pokemon.id} href={`pokemons/${pokemon.id}`}>
            <PokemonIntroCard
              id={pokemon.id}
              name={pokemon.name}
            />
            </Link>
          ))
        ) : (
          <>No results to show.</>
        )}
      </div>
      <div className="flex items-center gap-5 justify-center mt-8">
        <Button
          className="bg-primary-red hover:bg-primary-red/80 dark:text-white"
          onClick={() => {
            setOffset((prev) => prev - limit);
          }}
          disabled={offset - limit < 0 || filteredPokemons.length === 0}
        >
          Previous
        </Button>
        showing {(offset/limit) + 1} / {Math.ceil(filteredPokemons.length/limit)} 
        <Button
          className="bg-primary-red hover:bg-primary-red/90 dark:text-white"

          onClick={() => {
            setOffset((prev) => prev + 20);
          }}
          disabled={offset + limit > 649 || filteredPokemons.length < offset + limit}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Pokemons;
