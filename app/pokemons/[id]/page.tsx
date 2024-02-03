import { ArrowLeft, ChevronLeft, ChevronRight, RulerIcon, Scale3DIcon, ScaleIcon, WeightIcon } from "lucide-react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { redirect } from "next/navigation";

interface TypesColors {
  [key: string]: string[];
}

export function generateStaticParams() {
  const ids = []
  for(let i = 1; i <=649; ++ i){
    ids.push({id: i.toString()})
  }
  return ids
}

const PokemonDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params ?? 1;
  if(Number(id) > 649) redirect('/pokemons/649')
  const typesColors: TypesColors = {
    bug: ["bg-bug", "bg-bug/50", "bg-bug/20"],
    dark: ["bg-dark", "bg-dark/50", "bg-dark/20"],
    dragon: ["bg-dragon", "bg-dragon/50", "bg-dragon/20"],
    electric: ["bg-electric", "bg-electric/50", "bg-electric/20"],
    fairy: ["bg-fairy", "bg-fairy/50", "bg-fairy/20"],
    fighting: ["bg-fighting", "bg-fighting/50", "bg-fighting/20"],
    fire: ["bg-fire", "bg-fire/50", "bg-fire/20"],
    flying: ["bg-flying", "bg-flying/50", "bg-flying/20"],
    ghost: ["bg-ghost", "bg-ghost/50", "bg-ghost/20"],
    normal: ["bg-normal", "bg-normal/50", "bg-normal/20"],
    grass: ["bg-grass", "bg-grass/50", "bg-grass/20"],
    ground: ["bg-ground", "bg-ground/50", "bg-ground/20"],
    ice: ["bg-ice", "bg-ice/50", "bg-ice/20"],
    poison: ["bg-poison", "bg-poison/50", "bg-poison/20"],
    psychic: ["bg-psychic", "bg-psychic/50", "bg-psychic/20"],
    rock: ["bg-rock", "bg-rock/50", "bg-rock/20"],
    steel: ["bg-steel", "bg-steel/50", "bg-steel/20"],
    water: ["bg-water", "bg-water/50", "bg-water/20"],
  };
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  let res = null,
    err = null;
  try {
    res = await fetch(url);
  } catch (e: any) {
    err = e.message;
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
  const { name, weight, height, types, abilities, stats } = await res?.json();
  const hp = stats[0].base_stat,
    attack = stats[1].base_stat,
    defense = stats[2].base_stat,
    specialAttack = stats[3].base_stat,
    specialDefense = stats[4].base_stat,
    speed = stats[4].base_stat;

  const baseType = types.length === 1 ? types[0].type.name: types[1].type.name  ;
  const baseColor = typesColors[baseType];

  const imageUrl = (Number(id) <= 649 ? `https://raw.githubusercontent.com/PokeAPI/sprites/ffcfbee3af68e186b6dc815316d39eb420b2e5f4/sprites/pokemon/other/dream-world/${id}.svg` :`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`)

  return (
    <main className={`flex flex-col px-2`}>
      <div
        className={`max-w-[900px] w-full mx-auto my-2 sm:my-5 rounded-xl shadow-lg bg-white  dark:bg-black`}
      >
        <div className="px-4 py-8 h-[40vh] sm:min-h-[25rem]">
          <header className="flex items-center gap-5 justify-between">
            <Link href="/pokemons">
              <ArrowLeft size={35} />
            </Link>
            <h1 className="text-3xl sm:text-4xl text-grayscale-dark-bg dark:text-white font-extrabold capitalize">
              {name}
            </h1>
            <p className="text-sm font-extrabold">#{id}</p>
          </header>

          <div className=" relative">
            <div className="absolute  w-full self-center  flex justify-between items-center my-1">
              {id !== "1" ? (
                <Link href={`/pokemons/${Number(id) - 1}`}>
                  <ChevronLeft size={50} />
                </Link>
              ) : (
                <ChevronLeft
                  size={50}
                  className="text-gray-200 dark:text-slate-700 hover:cursor-not-allowed"
                />
              )}

              <Image
                className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]"
                alt={name}
                width={75}
                height={75}
                src={imageUrl}
                priority
              />
              {id !== "649" ? (
                <Link href={`/pokemons/${Number(id) + 1}`}>
                  <ChevronRight size={50} />
                </Link>
              ) : (
                <ChevronRight
                  size={50}
                  className="text-gray-200 dark:text-slate-700 hover:cursor-not-allowed"
                />
              )}
            </div>
          </div>
        </div>
        <div className={`${baseColor[2]} dark:bg-grayscale-dark rounded-xl py-2 sm:py-10 px-5`}>
          <div className="flex items-center justify-center gap-5 my-5">
            {types.map((t: any) => (
              <Badge
                key={t.type.name}
                className={cn(
                  "text-sm px-4 py-1 text-white",
                  typesColors[t.type.name][0]
                )}
              >
                {t.type.name}
              </Badge>
            ))}
          </div>
          <div className="dark:bg-grayscale-dark rounded-lg">
            <div className=" text-left flex flex-wrap items-start justify-between px-2 sm:p-5">
              <div>
                <p className="font-semibold text-sm sm:text-base mb-1">Weight</p>
                <div className="flex items-center gap-1 text-sm">
                <WeightIcon size={20}/>
                <p>{weight} Kg</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base mb-1">Height</p>
                <div className="flex items-center gap-1 text-sm">
                  <RulerIcon size={20} />
                <p>{height} Ft</p>
                </div>
              </div>
              <div className="text-left flex flex-col">
                <p className="font-semibold text-sm sm:text-base mb-1">Abilities</p>

                <div>
                  {abilities.map((a: any) => {
                    const ability = a.ability.name.split('-').join(' ')
                    return (<p key={a.ability.name} className="text-sm capitalize">{ability}</p>)
                  }
                    
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row text-sm sm:text-base font-semibold mb-5">
              <div className="w-full sm:w-1/2 px-2 sm:px-5">
                <div>
                  <span>HP: {hp}</span>
                  <Progress
                    indicatorColor={baseColor[0]}
                    className={cn("h-3", baseColor[1])}
                    value={hp}
                  />
                </div>
                <div>
                  <p>Attack: {attack}</p>
                  <Progress
                    indicatorColor={baseColor[0]}
                    className={cn("h-3", baseColor[1])}
                    value={attack}
                  />
                </div>
                <div>
                  <p>Defense: {defense}</p>
                  <Progress
                    indicatorColor={baseColor[0]}
                    className={cn("h-3", baseColor[1])}
                    value={defense}
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/2 px-2 sm:px-5">
                <div>
                  <span>Special Attack: {specialAttack}</span>
                  <Progress
                    indicatorColor={baseColor[0]}
                    className={cn("h-3", baseColor[1])}
                    value={specialAttack}
                  />
                </div>
                <div>
                  <p>Special Defense: {specialDefense}</p>
                  <Progress
                    indicatorColor={baseColor[0]}
                    className={cn("h-3", baseColor[1])}
                    value={specialDefense}
                  />
                </div>
                <div>
                  <p>Speed: {speed} </p>
                  <Progress
                    indicatorColor={baseColor[0]}
                    className={cn("h-3", baseColor[1])}
                    value={speed}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PokemonDetailsPage;
