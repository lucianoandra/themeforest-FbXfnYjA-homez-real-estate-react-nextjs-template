import Image from "next/image";
import React from "react";

const reviews = [
  {
    name: "Bessie Cooper",
    date: "12 March 2022",
    rating: 5,
    text: "The second bedroom is a corner room with double windows. The kitchen has fabulous space, new appliances, and a laundry area. Other features include rich herringbone floors. Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area.",
    images: [
      "/images/blog/blog-single-3.jpg",
      "/images/blog/blog-single-4.jpg",
      "/images/blog/blog-single-5.jpg",
      "/images/blog/blog-single-6.jpg",
    ],
  },
  {
    name: "Darrell Steward",
    date: "12 March 2022",
    rating: 5,
    text: "The second bedroom is a corner room with double windows. The kitchen has fabulous space, new appliances, and a laundry area. Other features include rich herringbone floors. Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area.",
    images: [],
  },
  {
    name: "Darrell Steward",
    date: "12 March 2022",
    rating: 5,
    text: "The second bedroom is a corner room with double windows. The kitchen has fabulous space, new appliances, and a laundry area. Other features include rich herringbone floors. Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area.",
    images: [],
  },
];

const SingleReview = () => {
  return (
    <>
      {reviews.map((review, index) => (
        <div className="col-md-12" key={index}>
          <div className="mbp_first position-relative d-flex align-items-center justify-content-start mt30 mb30-sm">
            <Image
              width={60}
              height={60}
              src="/images/blog/comments-2.png"
              className="mr-3"
              alt="comments-2.png"
            />
            <div className="ml20">
              <h6 className="mt-0 mb-0">{review.name}</h6>
              <div>
                <span className="fz14">{review.date}</span>
                <div className="blog-single-review">
                  <ul className="mb0 ps-0">
                    {[...Array(review.rating)].map((_, i) => (
                      <li className="list-inline-item me-0" key={i}>
                        <a href="#">
                          <i className="fas fa-star review-color2 fz10" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End .d-flex */}

          <p className="text mt20 mb20">{review.text}</p>
          <ul className="mb20 ps-0">
            {review.images.map((image, i) => (
              <li className="list-inline-item mb5-xs" key={i}>
                <Image
                  width={110}
                  height={90}
                  className="bdrs6"
                  src={image}
                  alt="review-img"
                />
              </li>
            ))}
          </ul>

          <div className="review_cansel_btns d-flex bdrb1 pb30">
            <a href="#">
              <i className="fas fa-thumbs-up" />
              Helpful
            </a>
            <a href="#">
              <i className="fas fa-thumbs-down" />
              Not helpful
            </a>
          </div>
        </div>
      ))}

      <div className="col-md-12">
        <div className="position-relative bdrb1 pt30 pb20">
          <a href="#" className="ud-btn btn-white2">
            Show all 134 reviews
            <i className="fal fa-arrow-right-long" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleReview;
