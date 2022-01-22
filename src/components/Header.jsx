import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Close, Menu } from "@mui/icons-material/";

export default function Header() {
  const [isMobile, setIsMobile] = useState(true);

  const handleMenuMobile = () => {
    if (!isMobile) {
      return setIsMobile(true);
    }
    return setIsMobile(false);
  };

  return (
    <header>
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
        <ul>
          <li className="navItem">Service</li>
          <li className="navItem">Feature</li>
          <li className="navItem">Support</li>
        </ul>
        <button id="btnStart">Start Now</button>
      </nav>
    </header>
  );
}
