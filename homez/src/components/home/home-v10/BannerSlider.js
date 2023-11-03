"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import Link from "next/link";

const BannerSlider = () => {
  const sliderItems = [
    {
      image: "/images/home/home-10.jpg",
      title: "Studio on Grand Avenue",
      price: "986,00",
      meta: "32 Beds  -  91 Baths  -  1500 sq ft",
    },

    {
      image: "/images/home/home-5-2.jpg",
      title: "Studio on Grand Avenue",
      price: "986,00",
      meta: "32 Beds  -  91 Baths  -  1500 sq ft",
    },
  ];

  return (
    <>
      <div className="rounded-arrow arrow-with-border d-flex flex-column d-position end-pos">
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

      <div className="hero-large-home9">
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
                  <div className="container position-relative">
                    <div className="row">
                      <div className="col-xl-7">
                        <h1 className="sub-title">${item.price}</h1>
                        <h3 className="banner-title">{item.title}</h3>
                        <p className="banner-text text-white ff-heading">
                          {item.meta}
                        </p>
                        <Link
                          href="/map-v4"
                          className="ud-btn banner-btn fw500 btn-thm mt10 mt0-xs"
                        >
                          View Details <i className="fal fa-arrow-right-long" />
                        </Link>
                      </div>
                      {/* End .col-6 */}

                      <div className="col-sm-6 col-xl-4 offset-xl-3"></div>
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

export default BannerSlider;
