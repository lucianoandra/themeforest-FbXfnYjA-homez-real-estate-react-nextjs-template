"use client";
import testimonialData from "@/data/testimonials";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Testimonial = () => {
  return (
    <>
      <Swiper
        className="overflow-visible"
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".testimonila_next__active",
          prevEl: ".testimonila_prev__active",
        }}
        pagination={{
          el: ".testimonila_pagination__active",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonialData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="item">
              <div className="testimonial-style1 position-relative">
                <div className="testimonial-content">
                  <h5 className="title">{testimonial.title}</h5>
                  <span className="icon fas fa-quote-left" />
                  <p className="text">{testimonial.quote}</p>
                  <div className="testimonial-review">
                    {Array.from({ length: testimonial.stars }, (_, index) => (
                      <a className="me-1" href="#" key={index}>
                        <i className="fas fa-star" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="thumb d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image
                      width={60}
                      height={60}
                      className="wa"
                      src={testimonial.image}
                      alt="avatar"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="mb-0">{testimonial.name}</h6>
                    <p className="mb-0">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonial;
