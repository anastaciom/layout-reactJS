import React from "react";
import { Instagram, Facebook, Twitter} from "@mui/icons-material/";

export default function ContactAreaMobile() {
  return (
    <span className="contactMobile">
      <Instagram style={{ color: "#fff", fontSize: 25, cursor: "pointer" }} />
      <Facebook style={{ color: "#fff", fontSize: 25, cursor: "pointer" }} />
      <Twitter style={{ color: "#fff", fontSize: 25, cursor: "pointer" }} />
    </span>
  );
}
