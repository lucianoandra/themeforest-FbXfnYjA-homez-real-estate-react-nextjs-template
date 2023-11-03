"use client";
import { Tooltip as ReactTooltip } from "react-tooltip";
import React, { useState } from "react";
import Image from "next/image";

const ProfileBox = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-box position-relative d-md-flex align-items-end mb50">
      <div className="profile-img new position-relative overflow-hidden bdrs12 mb20-sm">
        <Image
          width={240}
          height={220}
          className="w-100 cover h-100"
          src={uploadedImage || "/images/listings/profile-1.jpg"}
          alt="profile avatar"
        />

        <button
          className="tag-del"
          style={{ border: "none" }}
          data-tooltip-id="profile_del"
          onClick={() => setUploadedImage(null)}
        >
          <span className="fas fa-trash-can" />
        </button>

        <ReactTooltip id="profile_del" place="right" content="Delete Image" />
      </div>
      {/* End .profile-img */}

      <div className="profile-content ml30 ml0-sm">
        <label className="upload-label pointer">
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleUpload}
            style={{ display: "none" }}
          />
          <div className="ud-btn btn-white2 mb30">
            Upload Profile Files
            <i className="fal fa-arrow-right-long" />
          </div>
        </label>
        <p className="text">
          Photos must be JPEG or PNG format and at least 2048x768
        </p>
      </div>
    </div>
  );
};

export default ProfileBox;
