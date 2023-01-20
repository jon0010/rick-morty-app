import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharacters } from "../../redux/actions";
import CardStyles from "./card.module.css";
import Cards from "../CardsEstilos/Cards";

const Card = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div className={CardStyles.divContainer}>
      <h1> personajes </h1>
      {cards.map((character) => {
        return (
          <Cards
            key={character.id}
            id={character.id}
            name={character.name}
            gender={character.gender}
            image={character.image}
            species={character.species}
            status={character.status}
          />
        );
      })}
    </div>
  );
};

export default Card;
