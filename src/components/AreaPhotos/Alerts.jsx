import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
export function LoadingAlert() {
  return (
    <span id="loadingAlert" className="alerts">      
      Loading...
      <CircularProgress color="inherit" size={30}/>
    </span>
  );
}

export function ErrorAlert() {
  return <span id="errorAlert">Incorrect date!</span>;
}


export function PhotoNotFoundAlert() {
    return <span id="photoNotFoundAlert" className="alerts">No photo referring to this date.... :/</span>;
  }
