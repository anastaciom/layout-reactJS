import React from "react";
import imgBackground from "../assets/fireball.gif";
import { PlayCircle, Instagram, Facebook, Twitter } from "@mui/icons-material/";
export default function Banner() {
  return (
    <main id="bannerArea">
      <aside id="contactArea">
        <Instagram style={{ color: "#fff", fontSize: 25, cursor: "pointer" }} />
        <Facebook style={{ color: "#fff", fontSize: 25, cursor: "pointer" }} />
        <Twitter style={{ color: "#fff", fontSize: 25, cursor: "pointer" }} />
      </aside>

      <section id="mainInfo">
        <div id="bannerInfo">
          <div id="description">
            <h1>Discover the new reality</h1>
            <p>
              We've entered into a New Reality and Discover our approach to
              business transformation four strategic
              angles_____________________________
            </p>
          </div>

          <div id="infoCard">
            <span id="boxVideo">
              <PlayCircle
                style={{ fontSize: 50, color: "#fc5560", cursor: "pointer" }}
              />
            </span>
            <span id="card-description">
              <h3>Meet with the future</h3>
              <small>Technology</small>
            </span>
          </div>
        </div>
        <div id="imgBackground">
          <img src={imgBackground} alt="imgBackground" />
        </div>
        <span className="contactMobile">
          {" "}
          <Instagram
            style={{ color: "#fff", fontSize: 25, cursor: "pointer" }}
          />
          <Facebook
            style={{ color: "#fff", fontSize: 25, cursor: "pointer" }}
          />
          <Twitter style={{ color: "#fff", fontSize: 25, cursor: "pointer" }} />
        </span>
      </section>
    </main>
  );
}
