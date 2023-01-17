import React from "react";
import characters from "./components/data.js";
import "./App.css";
import Cards from "./components/CardsEstilos/Cards.jsx";
import NavBar from "./components/navEstilos/NavBar.jsx";

function App() {
  // const [personajes, setPersonajes] = React.useState([]);
  // const dataChar = {
  //   name: "Morty Smith",
  //   species: "Human",
  //   gender: "Male",
  //   image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  // };

  // const busquedaPersonajes = (personaje) => {
  //   setPersonajes([...personajes, personajes.push(dataChar)]);
  // };
  return (
    <div className="App" style={{ padding: "25px" }}>
      <NavBar onSearch={(characterID) => window.alert(characterID)} />
      <hr />
      <div>
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
