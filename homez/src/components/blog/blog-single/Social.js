import React from "react";

const Social = () => {
  const socialIcons = [
    "fab fa-facebook-f",
    "fab fa-twitter",
    "fab fa-instagram",
    "fab fa-linkedin-in",
  ];

  return (
    <>
      {socialIcons.map((iconClass, index) => (
        <a className="mr20" key={index} href="#">
          <i className={iconClass} />
        </a>
      ))}
    </>
  );
};

export default Social;
