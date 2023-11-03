import React from "react";
import Social from "./Social";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <div className="container white-bdrt1 py-4">
      <div className="row">
        <div className="col-sm-6">
          <div className="text-center text-lg-start">
            <p className="copyright-text text-gray ff-heading">
              © Homez {getCurrentYear()}{" "}
              <a
                href="https://themeforest.net/user/ib-themes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                ib-themes
              </a>{" "}
              - All rights reserved
            </p>
          </div>
        </div>
        {/* End .col-sm-6 */}

        <div className="col-sm-6">
          <div className="social-widget text-center text-sm-end">
            <Social />
          </div>
        </div>
        {/* End .col-sm-6 */}
      </div>
    </div>
  );
};

export default Footer;
