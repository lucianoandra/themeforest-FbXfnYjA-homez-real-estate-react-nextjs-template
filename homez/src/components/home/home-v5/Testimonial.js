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
              <div className="testimonial-style3 mt-1 mx-1 position-relative mb60">
                <div className="testimonial-content">
                  <span className="icon">“</span>
                </div>
                <div className="thumb d-flex align-items-center mb40">
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
                <p className="text">{testimonial.quote}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="row align-items-center justify-content-center">
        <div className="col-auto">
          <button className="testimonila_prev__active swiper_button">
            <i className="far fa-arrow-left-long" />
          </button>
        </div>
        {/* End prev */}

        <div className="col-auto">
          <div className="pagination swiper--pagination testimonila_pagination__active" />
        </div>
        {/* End pagination */}

        <div className="col-auto">
          <button className="testimonila_next__active swiper_button">
            <i className="far fa-arrow-right-long" />
          </button>
        </div>
        {/* End Next */}
      </div>

      {/* End .row for navigation and pagination */}
    </>
  );
};

export default Testimonial;
