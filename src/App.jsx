import "./App.css";
import AreaPhotos from "./components/AreaPhotos";
import Banner from "./components/Banner";
import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);

  return (
    <div className="App">
      {loading ? (
       <Loading loading={loading}/>
      ) : (
        <>
          <Header />
          <Banner />
          <AreaPhotos />
        </>
      )}
    </div>
  );
}

export default App;
