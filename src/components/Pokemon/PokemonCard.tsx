interface PokemonCardsProps {
  id: number
  name: string
  type: string[]
}

// className="bg-gradient-to-b from-[#CBE9FF] to-[#2299EE]"

function PokemonCards(pokemon: PokemonCardsProps) {
  return (
    <>
      <div className="rounded-2xl cursor-pointer outline-none focus-visible:ring-4 ring-offset-2 ring-dark-blue text-left">
        <div className="p-6 outline-none rounded-2xl shadow-lg grid relative h-full bg-[#1EBA11]">
          <img
            className="absolute top-24 -translate-y-full left-1/2 -translate-x-1/2"
            width="180"
            height="134"
            loading="lazy"
            src=""
            alt=""
          />
          <h2 className="mt-28 capitalize text-3xl font-bold text-white">{pokemon.name}</h2>
          <h3 className="mt-2 text-lg font-bold text-white/80">
            #{('000' + pokemon.id).slice(-3)}
          </h3>
          <div className="relative z-10 mt-5 flex gap-2 flex-wrap">
            {pokemon.type.map((type, index) => (
              <span
                key={index}
                className="inline-flex py-1.5 px-2.5 justify-center items-center rounded-full gap-1 text-dark-gray capitalize bg-[#80E177]">
                <img src={`/public/pokemon/types/${type}.svg`} />
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonCards
