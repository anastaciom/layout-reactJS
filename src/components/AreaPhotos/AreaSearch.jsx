import React, { useState } from "react";
import {useDispatch } from "react-redux";
import {getPhotos} from '../../actions/getPhotos.js'

export default function AreaSearch() {
  const dispatch = useDispatch()

  const [date, setDate] = useState('')

    const handleClick = async()=>{
     await dispatch(getPhotos(date))
    }
    
  return (
    <div id="searchPhotos">
      <label htmlFor="search">Search for Date:</label>
      <input type="Date" id="search" value={date} onChange={e=>setDate(e.target.value)}/>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
