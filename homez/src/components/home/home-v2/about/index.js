import React from "react";
import Funfact from "./Funfact";
import ProductSingle from "./ProductSingle";
import Image from "next/image";
import VideoBox from "./VideoBox";

const About = () => {
  return (
    <div className="row mt80 mt0-md">
      <div className="col-md-6 col-xl-6">
        <div className="position-relative">
          <div className="img-box-7">
            <Image
              width={591}
              height={768}
              className="w-100 h-100 cover img-1"
              src="/images/about/about-2.png"
              alt="about"
            />
          </div>
          <div className="img-box-8 position-relative">
            <Image
              width={193}
              height={193}
              className="img-1 spin-right"
              src="/images/about/element-1.png"
              alt="about"
            />
          </div>
          <VideoBox />
          <div className="img-box-10 position-relative">
            <ProductSingle />
          </div>
        </div>
      </div>
      {/* End col */}

      <div className="col-md-6 col-xl-4 offset-xl-2">
        <div className="about-box-1">
          <h2 className="title mb30">With Us Help You Find Your Dream Home</h2>
          <p className="text mb20 fz15">
            As the complexity of buildings to increase, the field of
            architecture.
          </p>
          <Funfact />
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default About;
