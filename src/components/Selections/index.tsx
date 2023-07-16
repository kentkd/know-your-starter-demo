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
      id: 1,
      image: bulbasaurImage,
    },
    {
      name: "charmander",
      id: 4,
      image: charmanderImage,
    },
    {
      name: "squirtle",
      id: 7,
      image: squirtleImage,
    },
  ];

  return (
    <section className="selections">
      {selections.map((starter) => {
        return (
          <button
            key={starter.id}
            className="selection"
            onClick={(event) => onClick(event, starter.id)}
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
