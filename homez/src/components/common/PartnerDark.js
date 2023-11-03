"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const PartnerDark = () => {
  const partnerImages = ["7", "8", "9", "10", "11"];

  return (
    <Swiper
      spaceBetween={10} // Adjust the spacing between items as per your preference
      slidesPerView={6} // Default number of slides per view
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        },
      }}
      loop
      autoplay={{
        delay: 3000, // Adjust the autoplay delay (in milliseconds) as per your preference
        disableOnInteraction: false,
      }}
      className="swiper-container"
    >
      {partnerImages.map((imageName, index) => (
        <SwiperSlide key={index}>
          <div className="item">
            <div className="partner_item">
              <Image
                width={83}
                height={20}
                style={{ objectFit: "contain" }}
                className="wa m-auto"
                src={`/images/partners/${imageName}.png`}
                alt={imageName}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PartnerDark;
