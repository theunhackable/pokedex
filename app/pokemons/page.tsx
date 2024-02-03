import Pokemons from "@/components/pokemon/Pokemons";

type PokemonsPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};
const PokemonsPage = async () => {
  
  const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=649`;
  let res: null | any = null;
  let err: null | string = null;
  try {
    res = await fetch(url, { method: "GET" });
  } catch (e: any) {
    err += e.message;
  }
  if (err) {
    return (
      <div className="max-w-[1000px] mx-auto my-10  bg-red-200 border-red-500 dark:border-red-50 rounded-lg border-2 px-5 py-2">
        <p className="text-red-800 text-center">
          Error occured. Please try again.
        </p>
        <p className="text-red-800 text-center">Details: {err}</p>
      </div>
    );
  }
  const json = await res.json();
  let pokemons = json.results ?? [];
  
  pokemons =
    pokemons !== null
      ? pokemons.map((pokemon: any, ind: number) => {
          const {url, name} =  pokemon
          const splitted = url.split('/')
          const id = splitted[splitted.length - 2] 
          return { id, ...pokemon };
        })
      : null;
  return (
    <div className="mx-auto my-5 max-w-[1000px]">
      <Pokemons pokemons={pokemons} />
    </div>
  );
};

export default PokemonsPage;
