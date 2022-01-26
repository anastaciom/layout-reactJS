import React from "react";
import { PlayCircle} from "@mui/icons-material/"
import { Instagram, Facebook, Twitter} from "@mui/icons-material/";
export default function CardVideo() {
  return (
    <div id="infoCard">
      <div id="contactArea">
      <Instagram style={{ color: "#fff", fontSize: 30, cursor: "pointer" }} />
      <Facebook style={{ color: "#fff", fontSize: 30, cursor: "pointer" }} />
      <Twitter style={{ color: "#fff", fontSize: 30, cursor: "pointer" }} />
      </div>
      <span id="boxVideo">
        <PlayCircle
          style={{ fontSize: 50, color: "#fc5560", cursor: "pointer" }}
        />
      </span>
      <span id="card-description">
        <h3>Meet with the<br/>  future</h3>
        <small>Technology</small>
      </span>
    </div>
  );
}
