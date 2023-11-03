"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const properties = [
  {
    id: 1,
    featured: true,
    status: "FOR SALE",
    title: "Comfortable Villa Green",
    location: "California City, CA, USA",
    bed: "3 bed",
    bath: "4 bath",
    sqft: "1200 sqft",
    price: "$14,000 / mo",
    imageSrc: "/images/listings/property_slide_1.jpg",
  },
  {
    id: 2,
    featured: true,
    status: "FOR SALE",
    title: "Skyper Pool Apartment",
    location: "California City, CA, USA",
    bed: "3 bed",
    bath: "4 bath",
    sqft: "1200 sqft",
    price: "$2,800 / mo",
    imageSrc: "/images/listings/property_slide_2.jpg",
  },
  {
    id: 3,
    featured: true,
    status: "FOR SALE",
    title: "Comfortable Villa Green",
    location: "California City, CA, USA",
    bed: "3 bed",
    bath: "4 bath",
    sqft: "1200 sqft",
    price: "$14,000 / mo",
    imageSrc: "/images/listings/property_slide_3.jpg",
  },
  {
    id: 4,
    featured: true,
    status: "FOR SALE",
    title: "Skyper Pool Apartment",
    location: "California City, CA, USA",
    bed: "3 bed",
    bath: "4 bath",
    sqft: "1200 sqft",
    price: "$2,800 / mo",
    imageSrc: "/images/listings/property_slide_4.jpg",
  },
];

const FeatureProperties = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".featurePro_next__active",
          prevEl: ".featurePro_prev__active",
        }}
        pagination={{
          el: ".featurePro_pagination__active",
          clickable: true,
        }}
        slidesPerView={1}
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <div className="item">
              <div className="listing-style11">
                <div className="col-lg-12">
                  <div className="row align-items-center">
                    <div className="list-content mb30-md col-md-8 col-lg-6 col-xl-5 p-xl-0">
                      <div className="d-flex mb30">
                        <div className="list-tag fz12 mr20">
                          {property.featured && (
                            <span className="flaticon-electricity me-2" />
                          )}
                          {property.featured && "FEATURED"}
                        </div>
                        <div className="list-tag2 fz12">{property.status}</div>
                      </div>
                      <h4 className="list-title">
                        <Link href="/map-v3">{property.title}</Link>
                      </h4>
                      <p className="list-text fz15">{property.location}</p>
                      <div className="list-meta d-block d-sm-flex align-items-center mt30 mb40">
                        <a
                          className="d-flex mb-2 mb-sm-0 align-items-center"
                          href="#"
                        >
                          <span className="flaticon-bed" />
                          {property.bed}
                        </a>
                        <a
                          className="d-flex mb-2 mb-sm-0 align-items-center"
                          href="#"
                        >
                          <span className="flaticon-shower" />
                          {property.bath}
                        </a>
                        <a className="d-flex align-items-center" href="#">
                          <span className="flaticon-expand" />
                          {property.sqft}
                        </a>
                      </div>
                      {/* End list-meta */}

                      <div className="row mb20">
                        <div className="col-auto">
                          <div className="contact-info">
                            <p className="info-title ff-heading mb-2">
                              Total Free Customer Care
                            </p>
                            <h6 className="info-phone">
                              <a href="tel:+012305094502">
                                +(0) 123 050 945 02
                              </a>
                            </h6>
                          </div>
                        </div>
                        {/* End .col-auto */}

                        <div className="col-auto">
                          <div className="contact-info">
                            <p className="info-title ff-heading mb-2">
                              Need Live Support?
                            </p>
                            <h6 className="info-mail">
                              <a href="mailto:hi@homez.com">hi@homez.com</a>
                            </h6>
                          </div>
                        </div>
                        {/* End .col-auto */}
                      </div>
                      {/* End .row */}

                      <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                          <div className="list-meta2">
                            <h4 className="list-price mb-0">
                              {property.price}
                            </h4>
                          </div>
                        </div>
                        {/* End .row */}

                        <div className="col-auto">
                          <div className="list-meta2">
                            <div className="icons d-flex align-items-center">
                              <a href="#">
                                <span className="flaticon-fullscreen" />
                              </a>
                              <a href="#">
                                <span className="flaticon-new-tab" />
                              </a>
                              <a href="#">
                                <span className="flaticon-like" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End .col-auto */}
                      </div>
                      {/* End .row */}

                      <div className="list-meta2 d-flex justify-content-between align-items-center"></div>
                    </div>
                    {/* End list-content */}

                    <div className="list-thumb col-lg-6 col-xl-6 offset-xl-1 p-xl-0">
                      <Image
                        width={560}
                        height={610}
                        className="img-1 cover w-100 h-00"
                        src={property.imageSrc}
                        alt="property image"
                      />
                    </div>
                    {/* End list-thumb */}
                  </div>
                  {/* End .row */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="row align-items-center justify-content-start">
        <div className="col-auto">
          <button className="featurePro_prev__active swiper_button">
            <i className="far fa-arrow-left-long" />
          </button>
        </div>
        {/* End prev */}

        <div className="col-auto">
          <div className="pagination swiper--pagination featurePro_pagination__active" />
        </div>
        {/* End pagination */}

        <div className="col-auto">
          <button className="featurePro_next__active swiper_button">
            <i className="far fa-arrow-right-long" />
          </button>
        </div>
        {/* End Next */}
      </div>

      {/* End .col for navigation and pagination */}
    </>
  );
};

export default FeatureProperties;
