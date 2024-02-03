import Image from "next/image";
import React from "react";
type PokemonIntroCardProps = {
  id: number;
  name: string;
};
const PokemonIntroCard = ({ id, name }: PokemonIntroCardProps) => {
  return (
    <div className=" bg-white dark:bg-black flex flex-col w-48 h-52 justify-between rounded-lg overflow-hidden shadow-lg hover:animate-pulse">
      <div className=" p-4 h-2/3">
        <p className="text-right font-semibold">#{id}</p>
      </div>
      <div className="absolute p-5 self-center mt-5">
        <Image
          className="h-[120px] w-[120px]"
          alt={name}
          width={75}
          height={75}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/ffcfbee3af68e186b6dc815316d39eb420b2e5f4/sprites/pokemon/other/dream-world/${id}.svg`}
          priority
        />
      </div>
      <div className="bg-grayscale-light font-bold dark:bg-grayscale-dark p-4 pb-2 h-1/3 text-center flex flex-col-reverse rounded-lg capitalize">
        {name}
      </div>
    </div>
  );
};

export default PokemonIntroCard;
