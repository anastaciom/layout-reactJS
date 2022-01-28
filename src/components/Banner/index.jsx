import React from "react";
import "./style.css";
import Description from "./Description";
import ImgBackground from "./ImgBackground";
import ContactAreaMobile from "./ContactAreaMobile";
import ArrowDownIcon from "./ArrowDownIcon";

export default function Banner() {
  return (
    <main id="bannerArea">
      <ArrowDownIcon/>
      <Description />
      <ImgBackground />
      <ContactAreaMobile />
    </main>
  );
}
