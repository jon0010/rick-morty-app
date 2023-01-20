import { GET_CHARACTERS, CHARACTER_DETAIL } from "./action-types";
import axios from "axios";

export const getCharacters = () => {
  return async function (dispatch) {
    let response = await axios("https://rickandmortyapi.com/api/character");

    return dispatch({ type: GET_CHARACTERS, payload: response.data.results });
  };
};
