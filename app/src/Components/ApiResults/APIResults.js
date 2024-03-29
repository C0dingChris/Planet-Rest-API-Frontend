import React from "react";
import "../../App.css";

export default function APIResults() {
  return (
    <div id="ApiCard">
      <div className="right-pannel">
        <h1 id="PlanetHere">Earth</h1>
        <div className="data-wrapper">
          <p id="RadiusHere">6,371 KM Radius</p>
        </div>
        <div className="data-wrapper">
          <p id="FactHere">
            Earth has been around for quite some time. By researching Earth’s
            rocks, scientists have calculated the Earth to be around 4.5 billion
            years old!
          </p>
        </div>
      </div>
      <div className="left-pannel">
        <img
          id="PlanetIMG"
          alt="Chosen planet"
          src="https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"
        ></img>
      </div>
    </div>
  );
}
