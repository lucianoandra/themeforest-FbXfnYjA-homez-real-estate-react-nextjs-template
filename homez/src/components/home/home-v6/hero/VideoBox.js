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
        videoId="7EHnQ0VM4KY"
        onClose={() => setOpen(false)}
      />

      <button
        style={{ border: "none", background: "transparent" }}
        className="popup-iframe popup-youtube bounce-y d-flex align-items-center justify-content-start justify-content-xl-center fz14 fw600 ff-heading"
      >
        Watch Video{" "}
        <span
          className="video-icon flaticon-play fz12 ml20"
          role="button"
          onClick={() => setOpen(true)}
        ></span>
      </button>
    </>
  );
};

export default VideoBox;
