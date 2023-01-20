import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // con esta linea conectamos con la extension "REDUX DEVTOOLS"

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)) //con esto podemos hacer peticiones a la API
);

export default store;
