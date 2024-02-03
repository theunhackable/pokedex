import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[900px] mx-auto my-2 sm:my-5">
      <div className="flex flex-col items-center ">
        <Image
          src="/pokedex-text.png"
          alt=""
          height={500}
          width={250}
          priority
        />
        <p className="text-sm font-semibold">
          {" "}
          Find the details of your favourate Pokémon
        </p>
        <Link
          href="/pokemons"
          className="text-white font-extrabold my-4 bg-primary-red/80 hover:bg-primary-red/90 px-4 rounded-md py-2"
        >
          Take me to the Pokémons{" "}
        </Link>
      </div>

      <div className="flex max-md:flex-col max-md:items-center justify-between gap-5 w-full my-5 sm:my-10">
        <div className="md:w-fit px-5">
          <h2 className="text-lg mb-1 sm:text-2xl font-extrabold">
            What is Pokedex ?
          </h2>
          <div className="">
            <Image
              src="/pokedex-kamalesh.gif"
              alt=""
              height={500}
              width={250}
              priority
            />
          </div>
        </div>
        <div className="md:w-2/3 px-5">
          <p className="pt-5 pb-2">
            The Pokédex is a fictional electronic device in the Pokémon series
            of video games, anime, and other media created by Nintendo, Game
            Freak, and Creatures. It serves as an in-game encyclopedia that
            provides information about various Pokémon species.
          </p>

          <p className="pb-2">
            The primary function of the Pokédex is to catalog information about
            different Pokémon species. This includes details such as a Pokémon&apos;s
            name, height, weight, type, and a brief description of its
            characteristics.
          </p>
        </div>
      </div>
      <div className="px-5">
        <h2 className="text-lg mb-1 sm:text-2xl font-extrabold">
          Links
        </h2>
        <ul>
          <li>
           Project:  <Link
              target="__blank"
              className="text-primary-red font-semibold underline"
              href="https://github.com/theunhackable/pokedex"
            >
              Github
            </Link>
          </li>
          <li>
            Created By:{" "}
            <Link
              target="__blank"
              className="text-primary-red font-semibold underline"
              href="https://srirangasai.dev"
            >
              Sri Ranga Sai
            </Link>
          </li>
          <li>
            Special thanks for the team behind this API:{" "}
            <Link
              target="__blank"
              className="text-primary-red font-semibold underline"
              href="https://pokeapi.co/"
            >
              pokeapi
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
