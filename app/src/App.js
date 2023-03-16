import "./App.css";
// import Searchcard from "./Components/SearchCard/searchcard";
// import APIResults from "./Components/ApiResults/APIResults";
import React, { useState } from "react";

const landingPage = [
  {
    planet_image:
      "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg",
    planet_name: "Earth",
    planet_radius: 6371,
    planet_random_fact:
      "Earth has been around for quite some time. By researching Earths rocks, scientists have calculated the Earth to be around 4.5 billion years old!",
  },
];
const errorPage = [
  {
    planet_image:
      "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg?format=jpg&width=960",
    planet_name: "Planet Not Found",
    planet_radius: 0,
    planet_random_fact: "Try a real planet",
  },
];

function App() {
  const [planets, setPlanetState] = useState(landingPage);
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchPlanetData() {
    const response = await fetch(
      "https://planet-rest-api-backend.onrender.com/random"
    );
    let data = await response.json();
    console.log(data.payload);

    setPlanetState(data.payload);
  }

  async function handleSearch(event) {
    console.log("Started search");
    event.preventDefault();
    const response = await fetch(
      `https://planet-rest-api-backend.onrender.com/search?planet=${searchTerm}`
    );
    let data = await response.json();

    if (data.payload[0] === undefined) {
      setPlanetState(errorPage);
    } else {
      setPlanetState(data.payload);
    }
  }

  return (
    <div>
      <div id="SearchCard">
        <h1 id="ApiTitle">Planets.REST</h1>
        <form onSubmit={handleSearch}>
          <input
            className="search-box"
            type="text"
            placeholder="Search.."
            name="search"
            onChange={(event) => setSearchTerm(event.target.value)}></input>
          <button className="button-search">Search</button>
          <div id="Button-Container">
            <button
              onClick={fetchPlanetData}
              className="Next-button"
              type="submit">
              Random Planet
            </button>
          </div>
        </form>
      </div>
      <div id="ApiCard">
        <div className="right-pannel">
          <h1 id="PlanetHere"> {`${planets[0].planet_name}`}</h1>
          <div className="data-wrapper">
            <p id="RadiusHere"> Radius: {`${planets[0].planet_radius}`} km</p>
          </div>
          <div className="data-wrapper">
            <p id="FactHere">{`${planets[0].planet_random_fact}`}</p>
          </div>
        </div>
        <div className="left-pannel">
          <img
            id="PlanetIMG"
            alt="Chosen planet"
            src={`${planets[0].planet_image}`}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
