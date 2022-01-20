import React from "react";
import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <nav id="navbar">
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
