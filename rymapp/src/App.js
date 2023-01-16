import "./App.css";
import Card from "./components/CardEstilos/Card.jsx";
import Cards from "./components/CardsEstilos/Cards.jsx";
import characters, { Rick } from "./components/data.js";
import navBar from "./components/navEstilos/navBar.jsx";

function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <navBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <hr />
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert("*se cerro la tarjeta*")}
        />
      </div>
      <hr />
      <div>
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
