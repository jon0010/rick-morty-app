// import React from "react";
// import "./App.css";
// import Cards from "./components/CardsEstilos/Cards.jsx";
// import NavBar from "./components/navEstilos/NavBar.jsx";
// import { Routes, Route } from "react-router-dom";
// import Landing from "./components/Landing/Landing.jsx";

// function App() {
//   return (
//     <div className="App" style={{ padding: "25px" }}>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route exact path="/home" element={<Cards />} />
//       </Routes>
//       <NavBar />
//       <hr />
//       <div>
//         <Cards />
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Characters from "./components/characters/characters";
import Landing from "./components/Landing/Landing";
import DetallePersonaje from "./components/detallePersonaje/detallePersonaje";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Characters />} />
        <Route path="/detail/:id" element={<DetallePersonaje />} />
      </Routes>
    </div>
  );
}

export default App;
