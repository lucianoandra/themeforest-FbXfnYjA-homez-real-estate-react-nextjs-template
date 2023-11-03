"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sliderItems = [
    {
      image: "/images/home/home-5-1.jpg",
      price: "$986,00",
      title: "Studio on Grand Avenue",
      description: "32 Beds - 91 Baths - 1500 sq ft",
    },
    {
      image: "/images/home/home-5-2.jpg",
      price: "$986,00",
      title: "Studio on Grand Avenue",
      description: "32 Beds - 91 Baths - 1500 sq ft",
    },
    {
      image: "/images/home/home-5-3.jpg",
      price: "$986,00",
      title: "Studio on Grand Avenue",
      description: "32 Beds - 91 Baths - 1500 sq ft",
    },
    {
      image: "/images/home/home-5-4.jpg",
      price: "$986,00",
      title: "Studio on Grand Avenue",
      description: "32 Beds - 91 Baths - 1500 sq ft",
    },
  ];

  return (
    <>
      <div className="hero-large-home5">
        <Swiper
          direction="vertical" // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          speed={1400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          style={{ height: "850px" }}
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div
                  className="slider-slide-item"
                  style={{ backgroundImage: `url(${item.image})` }}
                  data-thumb={item.image}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-left position-relative">
                        <h4 className="h1 slider-subtitle text-white">
                          {item.price}
                        </h4>
                        <h3 className="h6 slider-title text-white">
                          {item.title}
                        </h3>
                        <p className="mb30 slider-text text-white">
                          {item.description}
                        </p>
                        <div className="slider-btn-block">
                          <Link
                            href="/map-v4"
                            className="ud-btn btn-white slider-btn"
                          >
                            View Details
                            <i className="fal fa-arrow-right-long" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom_thumbs">
        <Swiper
          direction="vertical" // Set the direction to vertical
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          slidesPerView={sliderItems.length} // Display all thumbs at once
          spaceBetween={0} // Adjust the space between thumbs
          style={{ height: "268px" }} // Set a fixed height for the thumbs gallery
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                width={50}
                height={50}
                className="cover"
                src={item.image}
                alt="thumb"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
