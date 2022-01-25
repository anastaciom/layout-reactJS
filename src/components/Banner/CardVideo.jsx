import React from "react";
import { PlayCircle} from "@mui/icons-material/"

export default function CardVideo() {
  return (
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
  );
}
