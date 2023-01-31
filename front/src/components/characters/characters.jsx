import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharacters, limpiarPersonajes } from "../../redux/actions/actions";
import TarjetaPersonaje from "../tarjetaPersonaje/tarjetaPersonaje";
import NavBar from "../navEstilos/NavBar";

function Characters() {
  const dispatch = useDispatch();
  const personajes = useSelector((state) => state.personajes);

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(limpiarPersonajes());
  }, []);

  return (
    <div>
    <NavBar/>
      {personajes.map((personaje) => {
        return (
          <TarjetaPersonaje
            key={personaje?.id}
            id={personaje?.id}
            name={personaje?.name}
            image={personaje?.image}
          />
        );
      })}
    </div>
  );
}

export default Characters;
