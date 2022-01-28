import React from "react";

export function LoadingAlert() {
  return (
    <span>
      <h1>LOADING</h1>
    </span>
  );
}

export function ErrorAlert() {
  return <span>Select some date, before searching!!</span>;
}


export function PhotoNotFoundAlert() {
    return <span>Photo not found</span>;
  }
