import React from "react";
import { useSelector } from "react-redux";
import { LoadingAlert, PhotoNotFoundAlert } from "./Alerts";
import Photos from "./Photos";
export default function GridPhotos() {
  const state = useSelector((state) => state.result);

  const renderPhotos = () => {
    if (state.loading) {
      return <LoadingAlert />;
    } if (state.photos.length === 0) {
      return <PhotoNotFoundAlert />;
    }
    return state.photos.map((photo, index) => {
      return <Photos key={index} photo={photo} index={index} />;
    });
  };

  return <div className="gridPhotos">{renderPhotos()}</div>;
}
