import React from "react";
import "./style.css";
import Description from "./Description";
import ImgBackground from "./ImgBackground";
import ContactAreaMobile from "./ContactAreaMobile";

export default function Banner() {
  return (
    <main id="bannerArea">
        <Description />
        <ImgBackground />
        <ContactAreaMobile/>
    </main>
  );
}
