import React from "react";
import listings from "@/data/listings";
import Image from "next/image";

const RecentProperty = () => {
  return (
    <>
      {listings.slice(0, 3).map((listing) => (
        <div
          className="list-news-style d-flex align-items-center mb20"
          key={listing.id}
        >
          <div className="news-img flex-shrink-0">
            <Image
              width={90}
              height={80}
              className="w-full h-full cover"
              src={listing.image}
              alt="listing image"
            />
          </div>
          <div className="news-content flex-shrink-1 ms-3">
            <h5 className="title mb0">
              {listing.price} /<span className="fz15">mo</span>
            </h5>
            <p className="new-text mb0 fz14">House on the Northridge</p>
            <div className="list-meta">
              <a href="#" className="me-2">
                <span className="flaticon-bed pe-1" /> {listing.bed}
              </a>
              <a href="#" className="me-2">
                <span className="flaticon-shower pe-1" /> {listing.bath}
              </a>
              <a href="#">
                <span className="flaticon-expand pe-1" /> {listing.sqft}
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentProperty;
