import React from "react";

const Social = () => {
  const socialIcons = [
    "fab fa-facebook-f",
    "fab fa-twitter",
    "fab fa-instagram",
    "fab fa-linkedin-in",
  ];

  return (
    <div className="social-style1">
      <a className="text-white me-2 fw600 fz15" href="#">
        Follow us
      </a>
      {socialIcons.map((iconClass, index) => (
        <a key={index} href="#">
          <i className={iconClass + " list-inline-item"} />
        </a>
      ))}
    </div>
  );
};

export default Social;
