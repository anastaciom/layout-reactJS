import React from "react";
import { useSelector } from "react-redux";
import { LoadingAlert, PhotoNotFoundAlert } from "./Alerts";
export default function GridPhotos() {
  const state = useSelector((state) => state.result);

  const renderPhotos = () => {
    if (state.loading) {
      if (state.photos.length === 0) {
        return <PhotoNotFoundAlert />;
      }
      return <LoadingAlert />;
    }
    return state.photos.map((photo, index) => {
      return <img src={photo.img_src} alt={index} key={index} />;
    });
  };

  return <div className="gridPhotos">{renderPhotos()}</div>;
}
