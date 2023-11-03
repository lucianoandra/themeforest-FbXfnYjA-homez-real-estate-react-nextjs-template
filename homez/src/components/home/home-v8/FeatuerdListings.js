"use client";
import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const FeaturedListings = () => {
  return (
    <>
      <Swiper
        className="overflow-visible"
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          nextEl: ".featured-next__active",
          prevEl: ".featured-prev__active",
        }}
        slidesPerView={1}
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
        {listings.slice(12, 16).map((listing) => (
          <SwiperSlide key={listing.id}>
            <div className="item">
              <div className="listing-style9">
                <div className="list-thumb">
                  <Image
                    width={382}
                    height={465}
                    className="w-100 h-100 cover"
                    src={listing.image}
                    alt="listings"
                  />
                  <div className="sale-sticker-wrap">
                    {listing.forRent && (
                      <div className="list-tag rounded-0 fz12">
                        <span className="flaticon-electricity" />
                        FEATURED
                      </div>
                    )}
                    <div className="list-tag2 rounded-0 fz12">FOR SALE</div>
                  </div>

                  <div className="list-meta">
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

                <div className="list-content">
                  <div className="list-price">
                    {listing.price} / <span>mo</span>
                  </div>
                  <h6 className="list-title my-1">
                    <Link href={`/single-v3/${listing.id}`}>{listing.title}</Link>
                  </h6>
                  <div className="list-meta2 d-flex align-items-center">
                    <a href="#" className="mr10">
                      <span className="flaticon-bed mr5" /> {listing.bed} bed
                    </a>
                    <a href="#" className="mr10">
                      <span className="flaticon-shower mr5" /> {listing.bath}{" "}
                      bath
                    </a>
                    <a href="#">
                      <span className="flaticon-expand mr5" /> {listing.sqft}{" "}
                      sqft
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="row align-items-center justify-content-between arrowY-center-position">
        <div className="col-auto">
          <button className="featured-prev__active swiper_button">
            <i className="far fa-arrow-left-long" />
          </button>
        </div>
        {/* End prev */}

        <div className="col-auto">
          <button className="featured-next__active swiper_button">
            <i className="far fa-arrow-right-long" />
          </button>
        </div>
        {/* End Next */}
      </div>
      {/* End .col for navigation and pagination */}
    </>
  );
};

export default FeaturedListings;
