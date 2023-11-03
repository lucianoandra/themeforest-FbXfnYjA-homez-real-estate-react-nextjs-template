import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Listing2 = () => {
  return (
    <>
      {listings.slice(0, 3).map((listing) => (
        <div className="col-sm-6 col-lg-4" key={listing.id}>
          <div className="listing-style5">
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                className="w-100 h-100 cover"
                src={listing.image}
                alt="listings"
              />
              <div className="sale-sticker-wrap">
                {!listing.forRent && (
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    FEATURED
                  </div>
                )}
              </div>
              <div className="list-meta2">
                <a href="#">
                  <span className="flaticon-like" />
                </a>
                <a href="#">
                  <span className="flaticon-new-tab" />
                </a>
                <a href="#">
                  <span className="flaticon-fullscreen" />
                </a>
              </div>
            </div>
            <div className="list-content">
              <div className="list-price mb-2">
                {listing.price} / <span>mo</span>
              </div>
              <h6 className="list-title">
                <Link href={`/single-v2/${listing.id}`}>{listing.title}</Link>
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
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Listing2;
