"use client";
import apartmentType from "@/data/apartmentType";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const ApartmentType = () => {
  return (
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
          slidesPerView: 7,
        },
      }}
    >
      {apartmentType.map((type) => (
        <SwiperSlide key={type.id}>
          <div className="col-auto px-1">
            <Link href="/grid-default">
              <div className="apartment-category d-flex align-items-center">
                <span className={`icon flex-shrink-0 ${type.icon}`} />
                <div className="content flex-shrink-1">
                  <h6 className="title mb-0">{type.title}</h6>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ApartmentType;
