import React from "react";
import "../../App.css";

export default function searchcard() {
  return (
    <div id="SearchCard">
      <h1 id="ApiTitle">Planets.REST</h1>
      <input
        class="search-box"
        type="text"
        placeholder="Search.."
        name="search"
      ></input>
      <button class="button-search">Search</button>
      <div id="Button-Container">
        <button class="Next-button">Random Planet</button>
      </div>
    </div>
  );
}
