import "./App.css";
import { Selections } from "./components/Selections";

function App() {
  const handleClick = (event: React.MouseEvent, index: number) => {
    console.log(event);
    console.log(index);
  };

  return (
    <main>
      <h1>know your starters</h1>
      <Selections onClick={handleClick} />
    </main>
  );
}

export default App;
