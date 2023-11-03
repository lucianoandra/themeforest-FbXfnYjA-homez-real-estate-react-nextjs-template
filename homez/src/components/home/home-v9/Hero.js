"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import Link from "next/link";

const Hero = () => {
  const sliderItems = [
    {
      image: "/images/home/home-9.jpg",
      title: (
        <>
          Get your dream <br className="d-none d-lg-block" />
          home
        </>
      ),
      description:
        "From as low as $10 per day with limited time offer discounts.",
      title: "Equestrian Family Home",
      location: "New York City, CA, USA",
      bed: "1",
      bath: "2",
      sqft: 1200,
      price: "$14,000",
    },

    {
      image: "/images/home/home-5-2.jpg",
      title: (
        <>
          Buy your future <br className="d-none d-lg-block" />
          home
        </>
      ),
      description:
        "From as low as $10 per day with limited time offer discounts.",
      title: "Villa on Hollywood Boulevard",
      location: "New York City, CA, USA",
      bed: "1",
      bath: "2",
      sqft: 1200,
      price: "$14,000",
    },
  ];

  return (
    <>
      <div className="hero-large-home9">
        <div className="rounded-arrow arrow-with-border d-flex flex-column d-position">
          <button className="hero9-prev__active swiper_button _prev">
            <i className="far fa-chevron-left" />
          </button>
          {/* End prev */}

          <button className="hero9-next__active swiper_button _next">
            <i className="far fa-chevron-right" />
          </button>
          {/* End Next */}
        </div>
        {/* End .col for navigation  */}

        <Swiper
          direction="vertical" // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          speed={1400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Navigation]}
          navigation={{
            nextEl: ".hero9-next__active",
            prevEl: ".hero9-prev__active",
          }}
          className="hero_9"
          style={{ height: "90vh" }}
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="item"
                style={{
                  height: "100%",
                }}
              >
                <div
                  className="slider-slide-item no-overlay"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    height: "100%",
                  }}
                  data-thumb={item.image}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6 col-xl-5 mb20-md">
                        <h3 className="banner-title"> {item.title}</h3>
                        <p className="banner-text text-white ff-heading">
                          {item.description}
                        </p>
                        <div className="slider-btn-block">
                          <Link
                            href="/map-v4"
                            className="ud-btn banner-btn fw500 btn-thm mt10 mt0-xs"
                          >
                            View Details
                            <i className="fal fa-arrow-right-long" />
                          </Link>
                        </div>
                      </div>
                      {/* End .col-6 */}

                      <div className="col-sm-6 col-xl-4 offset-xl-3">
                        <div className="listing-style1 at-home9-hero banner-content">
                          <div className="list-content">
                            <div className="list-price bgc-thm">
                              ${item.price} / <span>mo</span>
                            </div>
                            <h6 className="list-title">
                              <a href="page-property-single-v1.html">
                                {item.title}
                              </a>
                            </h6>
                            <p className="list-text">{item.location}</p>
                            <div className="list-meta d-flex align-items-center">
                              <a href="#">
                                <span className="flaticon-bed" />
                                {item.bed} bed
                              </a>
                              <a href="#">
                                <span className="flaticon-shower" />
                                {item.bath} bath
                              </a>
                              <a href="#">
                                <span className="flaticon-expand" />
                                {item.sqft} sqft
                              </a>
                            </div>
                            <hr className="mt-2 mb-2" />
                            <div className="list-meta2 d-flex justify-content-between align-items-center">
                              <span className="for-what">For Rent</span>
                              <div className="icons d-flex align-items-center">
                                <a href="#">
                                  <span className="flaticon-fullscreen" />
                                </a>
                                <a href="#">
                                  <span className="flaticon-new-tab" />
                                </a>
                                <a href="#">
                                  <span className="flaticon-like" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End .col-6 */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
