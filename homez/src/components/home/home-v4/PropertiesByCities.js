"use client";

import cities from "@/data/propertyByCities";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const PropertiesByCities = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          nextEl: ".property-by-city-next__active",
          prevEl: ".property-by-city-prev__active",
        }}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {cities.slice(14, 23).map((city) => (
          <SwiperSlide key={city.id}>
            <div className="item">
              <div className="feature-style3 text-center">
                <div className="feature-img rounded-circle">
                  <Image
                    width={176}
                    height={176}
                    className="w-100 h-100 cover"
                    src={city.image}
                    alt="cities"
                  />
                </div>
                <div className="feature-content pt25">
                  <div className="top-area">
                    <h6 className="title mb-1">
                      <Link href="/map-v3">{city.name}</Link>
                    </h6>
                    <p className="fz15 fw400 dark-color mb-0">
                      {city.propertyCount} Properties
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="rounded-arrow arrowY-center-position">
        <button className="property-by-city-prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
        {/* End prev */}

        <button className="property-by-city-next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
        {/* End Next */}
      </div>
      {/* End .col for navigation  */}
    </>
  );
};

export default PropertiesByCities;
