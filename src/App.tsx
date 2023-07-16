import "./App.css";
import { Selections } from "./components/Selections";
import { PokemonDetail } from "./components/PokemonDetail/index..tsx";
import { useState } from "react";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<number>(0);
  const handleClick = (_event: React.MouseEvent, index: number) =>
    setSelectedPokemon(index);

  return (
    <main>
      <h1>know your starters</h1>
      <Selections onClick={handleClick} />
      {selectedPokemon !== 0 ? <PokemonDetail id={selectedPokemon} /> : null}
    </main>
  );
}

export default App;
