import { GET_CHARACTERS, CHARACTER_DETAIL } from "./action-types";


const initialState = {
  characters: [],
  characterDetail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
     case GET_CHARACTERS:
        return{
            ...state,
            characters: action.payload
        }


    default:
      return { ...state };
  }
};

export default reducer;
