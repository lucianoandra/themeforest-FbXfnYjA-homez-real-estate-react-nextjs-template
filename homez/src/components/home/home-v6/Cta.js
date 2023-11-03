import React from "react";
import AppWidget from "./AppWidget";
import Image from "next/image";

const Cta = () => {
  return (
    <section className="our-cta3 pb100 pt60-md pb60-md">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xl-6 d-none d-xl-block">
            <div className="cta-img">
              <Image
                width={624}
                height={497}
                src="/images/about/mobile-img-1.png"
                alt="mobile"
              />
            </div>
          </div>
          {/* End col-lg-5 */}

          <div className="col-lg-7 col-xl-5 offset-xl-1">
            <div className="cta-style5">
              <span className="app-tag mb25">Start today</span>
              <h2 className="cta-title">Download the App</h2>
              <p className="cta-text mb60">
                Take classes on the go with the realton app. Stream or download
                to watch on the plane, the subway, or wherever you learn best.
              </p>
              <AppWidget />
            </div>
          </div>
          {/* End col-lg-7 */}
        </div>
        {/* End .row */}
      </div>
    </section>
  );
};

export default Cta;
