import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExploreCities = () => {
  const apartmentData = [
    {
      city: "Los Angeles",
      imageSrc: "/images/listings/city-listing-2.jpg",
      propertyCount: 12,
      className: "col-lg-6",
    },
    {
      city: "Miami",
      imageSrc: "/images/listings/city-listing-3.jpg",
      propertyCount: 12,
      className: "col-6 col-lg-3",
    },
    {
      city: "New York",
      imageSrc: "/images/listings/city-listing-4.jpg",
      propertyCount: 12,
      className: "col-6 col-lg-3",
    },
    {
      city: "Chicago",
      imageSrc: "/images/listings/city-listing-5.jpg",
      propertyCount: 12,
      className: "col-6 col-lg-3",
    },
    {
      city: "Chicago",
      imageSrc: "/images/listings/city-listing-6.jpg",
      propertyCount: 12,
      className: "col-6 col-lg-3",
    },
    {
      city: "Chicago",
      imageSrc: "/images/listings/city-listing-7.jpg",
      propertyCount: 12,
      className: "col-lg-6",
    },
  ];

  return (
    <>
      {apartmentData.map((apartment, index) => (
        <div key={index} className={apartment.className}>
          <div className="feature-style1 mb30">
            <div className="feature-img">
              <Image
                width={591}
                height={270}
                className="w-100 h-100 cover"
                src={apartment.imageSrc}
                alt="city listing"
              />
            </div>
            <div className="feature-content">
              <div className="top-area">
                <h6 className="title mb-1">{apartment.city}</h6>
                <p className="text">{apartment.propertyCount} Properties</p>
              </div>
              <div className="bottom-area">
                <Link className="ud-btn2" href="/map-v2">
                  See All Cities
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExploreCities;
