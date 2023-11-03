import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: "1st",
    imageSrc: "/images/testimonials/testi-1.png",
    text: "What a great experience! I have visited one of the workshops and attended a masterclass, and both were super useful for young designers.",
    name: "Ali Tufan",
    designation: "Product Manager, Apple Inc",
  },
  {
    id: "2nd",
    imageSrc: "/images/testimonials/testi-2.png",
    text: "Another fantastic testimonial! This workshop has helped me improve my design skills significantly. I'm really grateful for the opportunity.",
    name: "Ella Johnson",
    designation: "UX Designer, Google",
  },
  {
    id: "third",
    imageSrc: "/images/testimonials/testi-3.png",
    text: "What a great experience! I have visited one of the workshops and attended a masterclass, and both were super useful for young designers.",
    name: "Ali Tufan",
    designation: "Product Manager, Apple Inc",
  },
  {
    id: "4th",
    imageSrc: "/images/testimonials/testi-4.png",
    text: "Another fantastic testimonial! This workshop has helped me improve my design skills significantly. I'm really grateful for the opportunity.",
    name: "Ella Johnson",
    designation: "UX Designer, Google",
  },
  {
    id: "5th",
    imageSrc: "/images/testimonials/testi-5.png",
    text: "Another fantastic testimonial! This workshop has helped me improve my design skills significantly. I'm really grateful for the opportunity.",
    name: "Ella Johnson",
    designation: "UX Designer, Google",
  },
  // Add more testimonial objects if needed
];

const Testimonial = () => {
  return (
    <>
      <div className="tab-content" id="pills-tabContent">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`tab-pane fade ${
              testimonial.id === "2nd" ? "show active" : ""
            }`}
            id={`pills-${testimonial.id}`}
            role="tabpanel"
            aria-labelledby={`pills-${testimonial.id}-tab`}
          >
            <div className="testi-content text-center">
              <span className="icon fas fa-quote-left" />
              <h4 className="testi-text text-white">{testimonial.text}</h4>
              <h6 className="name text-white">{testimonial.name}</h6>
              <p className="design text-white">{testimonial.designation}</p>
            </div>
          </div>
        ))}
      </div>
      {/* End tab-content */}
      <div className="tab-list position-relative">
        <ul
          className="nav nav-pills justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          {testimonials.map((testimonial) => (
            <li className="nav-item" role="presentation" key={testimonial.id}>
              <button
                className={`nav-link ${
                  testimonial.id === "1st" ? "ps-0" : ""
                } ${testimonial.id === "2nd" ? "active" : ""} ${
                  testimonial.id === "5th" ? "pe-0" : ""
                }`}
                id={`pills-${testimonial.id}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#pills-${testimonial.id}`}
                type="button"
                role="tab"
                aria-controls={`pills-${testimonial.id}`}
                aria-selected={testimonial.id === "2nd" ? "true" : "false"}
              >
                <Image
                  width={70}
                  height={71}
                  src={testimonial.imageSrc}
                  alt=""
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Testimonial;
