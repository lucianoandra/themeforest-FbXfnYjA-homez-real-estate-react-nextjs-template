"use client";
import "node_modules/react-modal-video/scss/modal-video.scss";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoBox = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="y9j-BL5ocW8"
        onClose={() => setOpen(false)}
      />

      <div className="img-box-9 d-flex justify-content-center align-items-center">
        <button
          className="popup-iframe popup-youtube"
          role="button"
          onClick={() => setOpen(true)}
        >
          <i className="fas fa-circle-play mr15" />
        </button>
        <h6 className="fz14 mb-0">Watch Video</h6>
      </div>
    </>
  );
};

export default VideoBox;
