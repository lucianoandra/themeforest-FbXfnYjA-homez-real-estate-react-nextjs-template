"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Partner = () => {
  const partnerImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
  const [showSlider, setShowSlider] = useState(false)
  useEffect(() => {
    setShowSlider(true)
  }, [])
  

  return (
    <>
    {showSlider &&   <Swiper
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
                width={122}
                height={24}
                style={{ objectFit: "contain" }}
                className="wa m-auto"
                src={`/images/partners/${imageName}`}
                alt={imageName}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>}</>
  );
};

export default Partner;
