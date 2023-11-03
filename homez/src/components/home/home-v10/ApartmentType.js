"use client";
import apartmentType from "@/data/apartmentType";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const ApartmentType = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".next__active",
          prevEl: ".prev__active",
        }}
        pagination={{
          el: ".pagination__active",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {apartmentType.map((type) => (
          <SwiperSlide key={type.id}>
            <div className="item">
              <Link href="/grid-full-1-col-v1">
                <div className="iconbox-style1 theme-style">
                  <span className={`icon ${type.icon}`} />
                  <div className="iconbox-content">
                    <h6 className="title">{type.title}</h6>
                    <p className="text mb-0">{`${type.count} Properties`}</p>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="col-auto mb30 dark_nav">
        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <button className="prev__active swiper_button">
              <i className="far fa-arrow-left-long" />
            </button>
          </div>
          {/* End prev */}

          <div className="col-auto">
            <div className="pagination swiper--pagination pagination__active" />
          </div>
          {/* End pagination */}

          <div className="col-auto">
            <button className="next__active swiper_button">
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

export default ApartmentType;
