"use client";
import apartmentTypes from "@/data/apartmentTypes2";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const ApartmentTypes = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".apartment-type2-next__active",
          prevEl: ".apartment-type2-prev__active",
        }}
        pagination={{
          el: ".apartment-type2_pagination__active",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {apartmentTypes.slice(0, 7).map((apartment, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <Link href="/map-v1">
                <div className="apartment-style1">
                  <div className="apartment-img">
                    <Image
                      width={217}
                      height={223}
                      className="w-100 h-100 cover"
                      src={apartment.imageSrc}
                      alt="apartment city"
                    />
                  </div>
                  <div className="apartment-content">
                    <h6 className="title mb-0">{apartment.title}</h6>
                    <p className="text mb-0">
                      {apartment.properties} Properties
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ApartmentTypes;
