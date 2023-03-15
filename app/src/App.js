import "./App.css";
import Searchcard from "./Components/SearchCard/searchcard";
import APIResults from "./Components/ApiResults/APIResults";
import React, { useEffect, useState } from "react";

function App() {
  const [planets, setPlanetState] = useState([]);
  async function fetchPlanetData() {
    const response = await fetch("localhost:3500");
    let data = await response.json();
    setPlanetState(data.payload);
    console.log("clicked");
  }
  fetchPlanetData();

  console.log("Planets:", planets);

  return (
    <div>
      <Searchcard props={fetchPlanetData()}></Searchcard>
      <APIResults></APIResults>
    </div>
  );
}

export default App;
