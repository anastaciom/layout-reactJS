import React, { useState } from "react";

import ModalPhotoSelected from "./ModalPhotoSelected";

export default function Photos({ photo, index }) {
  const [modalWithDetails, setModalWithDetails] = useState(false);
  const handleDetails = () => {
    setModalWithDetails(true);
  };
  return (
    <>
      {modalWithDetails ? (
       <ModalPhotoSelected setModalWithDetails={setModalWithDetails} photo={photo}/>
      ) : (
        <div
          className="boxPhoto"
          style={{ gridArea: `p${index}` }}
          onClick={handleDetails}
        >
          <img src={photo.img_src} alt={photo.id} />
        </div>
      )}
    </>
  );
}
