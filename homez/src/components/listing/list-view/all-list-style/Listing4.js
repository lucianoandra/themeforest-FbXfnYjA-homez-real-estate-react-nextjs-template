import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Listing4 = () => {
  return (
    <>
      {listings.slice(1, 4).map((listing) => (
        <div className="col-sm-6 col-md-4" key={listing.id}>
          <div className="listing-style7 mb60">
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
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
                <a href="#" className="mr5">
                  <span className="flaticon-fullscreen" />
                </a>
                <a href="#" className="mr5">
                  <span className="flaticon-new-tab" />
                </a>
                <a href="#">
                  <span className="flaticon-like" />
                </a>
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link href={`/single-v4/${listing.id}`}>{listing.title}</Link>
              </h6>

              <div className="d-flex justify-content-between align-items-center">
                <div className="list-price">
                  {listing.price} / <span>mo</span>
                </div>
                <div className="list-meta2 d-flex align-items-center">
                  <a href="#" className="mr10">
                    <span className="flaticon-bed mr5" /> {listing.bed}
                  </a>
                  <a href="#" className="mr10">
                    <span className="flaticon-shower mr5" /> {listing.bath}
                  </a>
                  <a href="#">
                    <span className="flaticon-expand" /> {listing.sqft}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Listing4;
