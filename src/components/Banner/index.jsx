import React from "react";
import "./style.css";
import Description from "./Description";
import ContactArea from "./ContactArea";
import ImgBackground from "./ImgBackground";
import ContactAreaMobile from "./ContactAreaMobile";

export default function Banner() {
  return (
    <main id="bannerArea">
      <ContactArea />
      <section id="mainInfo">
        <Description />
        <ImgBackground />
        <ContactAreaMobile/>
      </section>
    </main>
  );
}
