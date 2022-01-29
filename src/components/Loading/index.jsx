import React, { useState, useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";
import imgBackground from "../../assets/fireball.gif";
import { LinearProgress } from "@mui/material";
import "./style.css";

export default function Loading({ loading }) {
  const [transitionLoading, setTransitionLoading] = useState(false);
  const [progressBar, setprogressBar] = useState(0);

  useEffect(() => {
    setTransitionLoading(true);
    setTimeout(() => {
      setTransitionLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (transitionLoading) {
      const interval = setInterval(() => {
        setprogressBar((oldValue) => {
          const newValue = oldValue + 10;

          if (newValue === 100) {
            clearInterval(interval);
          }
          return newValue;
        });
      }, 100);
    }
  }, [transitionLoading]);

  return (
    <div className="loading">
      {transitionLoading ? (
        <div id="iconsLoading">
          <DotLoader color={"#FFF"} loading={loading} size={50} />
          <span>Discovering</span>
          <LinearProgress
            variant="determinate"
            value={progressBar}
            color="inherit"
            id="linearProgress"
          />
          <h5>{progressBar}%</h5>
        </div>
      ) : (
        <div id="imgLoading">
          <img src={imgBackground} alt="img" />
        </div>
      )}
    </div>
  );
}
