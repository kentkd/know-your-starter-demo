import useSWR from "swr";
import { fetcher, pokemonTypeMapper, statMapper } from "../../helpers.ts";
import { Pokemon } from "../../types/PokemonTypes.ts";
import "./style.css";

interface PokemonDetailProps {
  id: number;
}

export const PokemonDetail = ({ id }: PokemonDetailProps) => {
  const { data, error, isLoading } = useSWR<Pokemon, Error>(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    fetcher,
  );

  if (error) return "oops, something went wrong";
  if (isLoading) return "loading...";

  return (
    <section className="pokemon-details">
      <div className="subsection">
        <h3>Types</h3>
        <ul className="types">
          {data?.types.map((pokemonType) => {
            return (
              <li
                className="type"
                key={pokemonType.type.name}
                title={pokemonType.type.name}
              >
                {pokemonTypeMapper(pokemonType.type.name)}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="subsection">
        <h3>Stats</h3>
        <ul className="stats">
          {data?.stats.map((baseStat) => {
            return (
              <li className="stat" key={baseStat.stat.name}>
                <span className="key" title={baseStat.stat.name}>
                  {statMapper(baseStat.stat.name)}
                </span>
                <span className="value">{baseStat.base_stat}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
