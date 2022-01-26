import React from "react";
import "./style.css";

export default function AreaPhotos() {
  return (
    <section id="areaPhotos">
      <div id="titleAreaPhotos">
        <h1>Photos</h1>
      </div>
      <div id="searchPhotos">
        <label htmlFor="search">Search for Date:</label>
        <input type="Date" id="search" />
      </div>

    <div className="gridPhotos">
        <span>
            foto1
        </span>
        <span>
            foto1
        </span>
        <span>
            foto1
        </span>
        <span>
            foto1
        </span>
    </div>
    </section>
  );
}
