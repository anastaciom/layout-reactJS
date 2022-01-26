import "./App.css";
import AreaPhotos from "./components/AreaPhotos";
import Banner from "./components/Banner";
import Header from "./components/Header";
import React, { useEffect, useState } from "react";

function App() {
  const [headerBackground, setHeaderBackground] = useState(false);

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
    <div className="App">
      <Header background={headerBackground} />
      <Banner />
      <AreaPhotos />
    </div>
  );
}

export default App;
