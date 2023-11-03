import React from "react";
import Social from "./Social";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <div className="container gray-bdrt1 py-4">
      <div className="row">
        <div className="col-sm-6">
          <div className="text-center text-lg-start">
            <p className="copyright-text ff-heading mb-0">
              © Homez {getCurrentYear()}{" "}
              <a
                href="https://themeforest.net/user/ib-themes"
                target="_blank"
                rel="noopener noreferrer"
              >
                ib-themes
              </a>{" "}
              - All rights reserved
            </p>
          </div>
        </div>
        {/* End .col-sm-6 */}

        <div className="col-sm-6">
          <div className="text-center text-lg-end">
            <Social />
          </div>
        </div>
        {/* End .col-sm-6 */}
      </div>
    </div>
  );
};

export default Footer;
