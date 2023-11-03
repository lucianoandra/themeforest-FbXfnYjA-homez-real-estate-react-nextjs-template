import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="our-cta2 p0 px20">
      <div className="cta-banner2 bgc-thm maxw1600 mx-auto pt100 pt50-md pb85 pb50-md px30-md bdrs12 position-relative overflow-hidden">
        <div className="img-box-5">
          <Image
            width={193}
            height={193}
            className="img-1 spin-right"
            src="/images/about/element-1.png"
            alt="element"
          />
        </div>
        <div className="img-box-6">
          <Image
            width={193}
            height={193}
            className="img-1 spin-left"
            src="/images/about/element-2.png"
            alt="element"
          />
        </div>
        <div
          className="cta-style2 d-none d-lg-block"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            width={650}
            height={365}
            src="/images/about/cta-img-1.png"
            alt="element"
          />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 col-xl-5"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="cta-style2">
                <h2 className="cta-title">
                  Start Listing or Buying a Property With Realton
                </h2>
                <p className="cta-text">
                  Talk to our experts or Browse through more properties.
                </p>
                <Link href="/contact" className="ud-btn btn-dark mt10">
                  Learn More
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
