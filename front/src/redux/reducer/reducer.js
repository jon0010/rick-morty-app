import {
  GET_CHARACTERS,
  DETALLE_PERSONAJE,
  LIMPIAR_DETALLE,
  LIMPIAR_PERSONAJES,
} from "../actions/action-types";

const initialState = {
  personajes: [],
  detallePersonaje: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        personajes: payload,
      };
    case DETALLE_PERSONAJE:
      return {
        ...state,
        detallePersonaje: payload,
      };
    case LIMPIAR_DETALLE:
      return {
        ...state,
        detallePersonaje: {},
      };
    case LIMPIAR_PERSONAJES:
      return {
        ...state,
        personajes: [],
      };
    default:
      return { ...state };
  }
};

export default reducer;
