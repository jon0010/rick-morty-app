import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCharacters, limpiarPersonajes } from "../../redux/actions/actions";
import TarjetaPersonaje from "../tarjetaPersonaje/tarjetaPersonaje";
import NavBar from "../navEstilos/NavBar";
import charStyles from "./characters.module.css";

function Characters() {
  const dispatch = useDispatch();
  const personajes = useSelector((state) => state.personajes);

  const [page, setPage] = useState(1);
  const handlerNextPage = () => {
    setPage(page + 1);
    dispatch(getCharacters(page));
  };

  const handlerPrevPage = () => {
    setPage(page - 1);
    dispatch(getCharacters(page));
  };

  useEffect(() => {
    dispatch(getCharacters(page));
    dispatch(limpiarPersonajes());
  }, []);

  return (
    <div className={charStyles.container}>
      <NavBar />
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
      <button onClick={handlerPrevPage}>Anterior</button>
      <button onClick={handlerNextPage}> Siguiente</button>
    </div>
  );
}

export default Characters;
