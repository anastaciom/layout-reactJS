import React from "react";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export default function ModalPhotoSelected({setModalWithDetails, photo}) {
  return (
    <span className="modal">
      <button
        onClick={() => setModalWithDetails(false)}
        className="btnCloseModal"
      >
        <CancelPresentationIcon style={{ fontSize: 30 }}/>
      </button>
      <div className="infoPhoto">
        <div className="photoSelected">
          <img src={photo.img_src} alt={photo.id} />
        </div>
        <div className="photoDescription">
          <p>
            <strong>Camera:</strong> {photo.camera.full_name},
            {photo.camera.name}
          </p>
          <p>
            <strong>Earth date:</strong> {photo.earth_date}
          </p>
          <p>
            <strong>Rover:</strong> {photo.rover.name}
          </p>
          <p>
            <strong>Rover status:</strong> {photo.rover.status}
          </p>
        </div>
      </div>
    </span>
  );
}
