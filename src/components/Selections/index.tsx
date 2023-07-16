import bulbasaurImage from "../../assets/images/bulbasaur.png";
import charmanderImage from "../../assets/images/charmander.png";
import squirtleImage from "../../assets/images/squirtle.png";
import "./style.css";

interface SelectionsProps {
  onClick: (event: React.MouseEvent, index: number) => void;
}

export const Selections = ({ onClick }: SelectionsProps) => {
  const selections = [
    {
      name: "bulbasaur",
      pokeDexId: 1,
      image: bulbasaurImage,
    },
    {
      name: "charmander",
      pokeDexId: 4,
      image: charmanderImage,
    },
    {
      name: "squirtle",
      pokeDexId: 7,
      image: squirtleImage,
    },
  ];

  return (
    <section className="selections">
      {selections.map((starter) => {
        return (
          <button
            className="selection"
            onClick={(event) => onClick(event, starter.pokeDexId)}
          >
            <img
              className="selection__image"
              src={starter.image}
              alt={starter.name}
            />
            <h2>{starter.name}</h2>
          </button>
        );
      })}
    </section>
  );
};
