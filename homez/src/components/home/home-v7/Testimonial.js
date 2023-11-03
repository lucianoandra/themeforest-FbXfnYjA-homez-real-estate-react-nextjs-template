"use client";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const testimonialsData = [
  {
    id: 1,
    imageUrl: "/images/about/about-4.jpg",
    title:
      "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
    author: "Dianne Russell",
    designation: "Bank of America",
  },
  {
    id: 2,
    imageUrl: "/images/about/about-4.jpg",
    title:
      "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
    author: "John Doe",
    designation: "XYZ Company",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".testimonila_next__active",
          prevEl: ".testimonila_prev__active",
        }}
        slidesPerView={1}
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="item">
              <div className="row">
                <div className="col-lg-5 col-xl-4 offset-xl-1">
                  <div className="testimonial-style4-img position-relative">
                    <Image
                      width={386}
                      height={471}
                      className="w-100 h-100 cover"
                      src={testimonial.imageUrl}
                      alt="testimonial"
                    />
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-6 col-xl-6">
                  <div className="testimonial-style4 position-relative">
                    <h6 className="sub-title mb25">Perfect Quality</h6>
                    <span className="icon fas fa-quote-left" />
                    <h4 className="title mb25">{testimonial.title}</h4>
                    <h6 className="author fz14">{testimonial.author}</h6>
                    <p className="desig mb-0">{testimonial.designation}</p>
                  </div>
                  {/* End test content */}
                </div>
                {/* End .col */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="rounded-arrow arrow-with-border arrow-pos">
        <button className="testimonila_prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
        {/* End prev */}

        <button className="testimonila_next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
        {/* End Next */}
      </div>
      {/* End .col for navigation  */}
    </>
  );
};

export default Testimonial;
