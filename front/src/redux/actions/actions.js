import {
  GET_CHARACTERS,
  DETALLE_PERSONAJE,
  LIMPIAR_DETALLE,
  LIMPIAR_PERSONAJES,
} from "./action-types";
import axios from "axios";

export const getCharacters = (page) => {
  return async function (dispatch) {
    let response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    return dispatch({ type: GET_CHARACTERS, payload: response.data.results });
  };
};

export const getCharacterDetail = (id) => {
  return function (dispatch) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: DETALLE_PERSONAJE, payload: data }));
  };
};

export const limpiarDetalle = () => {
  return { type: LIMPIAR_DETALLE };
};

export const limpiarPersonajes = () => {
  return { type: LIMPIAR_PERSONAJES };
};
