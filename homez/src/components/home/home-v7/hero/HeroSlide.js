"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import Image from "next/image";
import Link from "next/link";

const listingsData = [
  {
    imageUrl: "/images/listings/slider-home7-1.jpg",
    price: "$986,00",
    title: "Studio on Grand Avenue",
    beds: "32 Beds",
    baths: "91 Baths",
    sqFt: "1500 sq ft",
  },
  {
    imageUrl: "/images/listings/slider-home7-2.jpg",
    price: "$14,000",
    title: "New apartment nice view",
    beds: "32 Beds",
    baths: "91 Baths",
    sqFt: "1500 sq ft",
  },
  {
    imageUrl: "/images/listings/slider-home7-3.jpg",
    price: "$14,000",
    title: "New apartment nice view",
    beds: "32 Beds",
    baths: "91 Baths",
    sqFt: "1500 sq ft",
  },
];

const HeroSlide = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000, // 3 seconds between slides
          disableOnInteraction: false, // Autoplay will not be disabled on user interaction
        }}
        scrollbar={{
          el: ".js-scrollbar",
          draggable: true,
          dragSize: 124,
        }}
        modules={[Scrollbar]}
      >
        {listingsData.map((listing, index) => (
          <SwiperSlide key={index}>
            <div className="listing-style13">
              <div className="list-thumb">
                <Image
                  width={736}
                  height={546}
                  className="w-100 h-100 cover"
                  src={listing.imageUrl}
                  alt="thumb"
                />
              </div>
              <div className="list-content">
                <div className="h4 list-price animate-up-1 mb-0">
                  {listing.price}
                </div>
                <h2 className="list-title animate-up-2">
                  <Link href="/map-v4">{listing.title}</Link>
                </h2>
                <div className="list-meta d-flex align-items-center animate-up-3">
                  <a className="mr10" href="#">
                    {listing.beds} -
                  </a>
                  <a className="mr10" href="#">
                    {listing.baths} -
                  </a>
                  <a href="#">{listing.sqFt}</a>
                </div>
                <Link
                  href="/map-v4"
                  className="ud-btn btn-transparent2 animate-up-2"
                >
                  View Details
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swpr_paginations">
          <div className="slideactive">01</div>
          <div>
            <div className="posr mt-4 js-scrollbar">
              <div className="custom-scroll"></div>
            </div>
          </div>
          <div className="slidetotal">03</div>
        </div>
      </Swiper>
    </>
  );
};

export default HeroSlide;
