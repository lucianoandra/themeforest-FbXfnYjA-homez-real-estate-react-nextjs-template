"use client";

import cities from "@/data/propertyByCities";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const PropertiesByCities = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".property_city-next__active",
          prevEl: ".property_city-prev__active",
        }}
        pagination={{
          el: ".property_city_pagination__active",
          clickable: true,
        }}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {cities.slice(23, 29).map((city) => (
          <SwiperSlide key={city.id}>
            <Link href="/map-v4" className="item">
              <div className="apartment-style1 mb30">
                <div className="apartment-img">
                  <Image
                    width={217}
                    height={207}
                    className="w-100 h-100 cover"
                    src={city.image}
                    alt="cities"
                  />
                </div>
                <div className="apartment-content">
                  <div className="top-area">
                    <h6 className="title mb-0">{city.name}</h6>
                    <p className="text mb-0">{city.propertyCount} Properties</p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="col-auto mb30">
        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <button className="property_city-prev__active swiper_button">
              <i className="far fa-arrow-left-long" />
            </button>
          </div>
          {/* End prev */}

          <div className="col-auto">
            <div className="pagination swiper--pagination property_city_pagination__active" />
          </div>
          {/* End pagination */}

          <div className="col-auto">
            <button className="property_city-next__active swiper_button">
              <i className="far fa-arrow-right-long" />
            </button>
          </div>
          {/* End Next */}
        </div>
      </div>
      {/* End .col for navigation and pagination */}
    </>
  );
};

export default PropertiesByCities;
