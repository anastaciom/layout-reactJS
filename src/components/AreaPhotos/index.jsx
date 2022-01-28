import React from "react";
import AreaSearch from "./AreaSearch";
import GridPhotos from "./GridPhotos";
import "./style.css";


export default function AreaPhotos() {
  return (
    <section id="areaPhotos">
      <div id="titleAreaPhotos">
        <h1>Photos</h1>
      </div>
     <AreaSearch/>
     <GridPhotos/>
    </section>
  );
}
