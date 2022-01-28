import React from "react";
import { useSelector} from "react-redux";

export default function GridPhotos() {
  const photos = useSelector(state=> state.photos)
  return (
    <div className="gridPhotos">
      {/* {photos.map((photo, index)=> <img src={photo.img_src} alt={index} />)} */}
    </div>
  );
}
