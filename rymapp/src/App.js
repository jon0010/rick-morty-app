import React from "react";
import "./App.css";
import Cards from "./components/CardsEstilos/Cards.jsx";
import NavBar from "./components/navEstilos/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";

function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/home" element={<Cards />} />
      </Routes>
      <NavBar />
      <hr />
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default App;
