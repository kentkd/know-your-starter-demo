export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const statMapper = (label: string) => {
  switch (label) {
    case "hp":
      return "❤️";
    case "attack":
      return "⚔️";
    case "defense":
      return "🛡️";
    case "special-attack":
      return "🔮";
    case "special-defense":
      return "🔰";
    case "speed":
      return "🏃";
    default:
      return "❓";
  }
};

export const pokemonTypeMapper = (type: string) => {
  switch (type) {
    case "fire":
      return "🔥";
    case "water":
      return "💧";
    case "grass":
      return "🌿";
    case "electric":
      return "⚡";
    case "poison":
      return "☠️";
    default:
      return "❓";
  }
};
