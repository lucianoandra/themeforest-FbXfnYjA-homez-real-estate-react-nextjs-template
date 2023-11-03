"use client";
import listings from "@/data/listings";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const GalleryBox = ({id}) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  const imageUrls = [
    "/images/listings/listing-single-slide1.jpg",
    "/images/listings/listing-single-slide2.jpg",
    
    "/images/listings/listing-single-slide3.jpg",
  ];

  return (
    <>
      <Swiper
        className="overflow-visible"
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".single-pro-slide-next__active",
          prevEl: ".single-pro-slide-prev__active",
        }}
        slidesPerView={1}
        initialSlide={1}
        loop={true}
      >
        {imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <Image
                width={1170}
                height={600}
                className="bdrs12 w-100 h-100 cover"
                src={imageUrl}
                alt={`Image ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="rounded-arrow arrowY-center-position">
        <button className="single-pro-slide-prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
        {/* End prev */}

        <button className="single-pro-slide-next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
        {/* End Next */}
      </div>
      {/* End .col for navigation  */}
    </>
  );
};

export default GalleryBox;
