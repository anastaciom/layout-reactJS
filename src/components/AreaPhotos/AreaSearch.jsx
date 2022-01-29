import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPhotos } from "../../redux/actions/getPhotos";
import {ErrorAlert } from "./Alerts";

export default function AreaSearch() {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [alertERR, setAlertERR] = useState(false);

  const handleClick = () => {
    if (date === "") {
      setAlertERR(true);
      return setTimeout(() => {
        setAlertERR(false);
      }, 1500);
    }
    return dispatch(getPhotos(date));
  };
  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div id="searchPhotos">
      <label htmlFor="search">Search for Date:</label>
      <input type="Date" id="search" value={date} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      {alertERR ? <ErrorAlert/> : ""}
    </div>
  );
}
