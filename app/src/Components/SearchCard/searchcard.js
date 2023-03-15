import React from "react";
import "../../App.css";

export default function Searchcard(props) {
  console.log("Props:", props);
  return (
    <div id="SearchCard">
      <h1 id="ApiTitle">Planets.REST</h1>
      <input
        className="search-box"
        type="text"
        placeholder="Search.."
        name="search"
      ></input>
      <button className="button-search">Search</button>
      <div id="Button-Container">
        <button onClick={props.fetchPlanetData} className="Next-button">
          Random Planet
        </button>
      </div>
    </div>
  );
}
