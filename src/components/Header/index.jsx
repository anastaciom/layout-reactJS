import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import "./style.css";
import { Close, Menu } from "@mui/icons-material/";
import Items from "./Items";

export default function Header() {
  const [isMobile, setIsMobile] = useState(true);
  const [headerBackground, setHeaderBackground] = useState(false);

  const handleMenuMobile = () => {
    if (!isMobile) {
      return setIsMobile(true);
    }
    return setIsMobile(false);
  };

  
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setHeaderBackground(true);
      } else {
        setHeaderBackground(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <header className={headerBackground ? 'backgroudHeader': ''}>
      <nav className={isMobile ? "navbar active" : "navbar"}>
        <button className="btnMenuMobile" onClick={handleMenuMobile}>
          {isMobile ? (
            <Close style={{ fontSize: 30 }} />
          ) : (
            <Menu style={{ fontSize: 30 }} />
          )}
        </button>
        <div id="logo">
          <img src={Logo} alt="logo" />
        </div>
        <Items />
        <button id="btnStart">Start Now</button>
      </nav>
    </header>
  );
}
