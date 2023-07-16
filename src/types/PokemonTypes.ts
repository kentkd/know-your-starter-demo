interface BaseStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonType {
  type: {
    name: string;
  };
}

export interface Pokemon {
  name: string;
  id: number;
  stats: BaseStat[];
  types: PokemonType[];
}
