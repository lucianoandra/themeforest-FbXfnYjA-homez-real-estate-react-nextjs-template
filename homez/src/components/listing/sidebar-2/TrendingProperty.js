import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrendingProperty = () => {
  return (
    <>
      {listings.slice(0, 2).map((listing) => (
        <div className="listing-style1 sidebar-style1" key={listing.id}>
          <div className="list-thumb">
            <Image
              width={382}
              height={248}
              className="w-100 h-100 cover"
              src={listing.image}
              alt="listings"
            />

            <div className="list-price">
              {listing.price} / <span>mo</span>
            </div>
          </div>
          <div className="list-content">
            <h6 className="list-title">
              <Link href={`/single-v1/${listing.id}`}>{listing.title}</Link>
            </h6>
            <p className="list-text">{listing.location}</p>
            <div className="list-meta d-flex align-items-center">
              <a href="#">
                <span className="flaticon-bed" /> {listing.bed} bed
              </a>
              <a href="#">
                <span className="flaticon-shower" /> {listing.bath} bath
              </a>
              <a href="#">
                <span className="flaticon-expand" /> {listing.sqft} sqft
              </a>
            </div>
            <hr className="mt-2 mb-2" />
            <div className="list-meta2 d-flex justify-content-between align-items-center">
              <span className="for-what">For Rent</span>
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
        </div>
      ))}
    </>
  );
};

export default TrendingProperty;
