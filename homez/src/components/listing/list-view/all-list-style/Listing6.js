import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Listing6 = () => {
  return (
    <>
      {listings.slice(12, 15).map((listing) => (
        <div className="col-sm-6 col-lg-4" key={listing.id}>
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
                <Link href={`/single-v2/${listing.id}`}>{listing.title}</Link>
              </h6>
              <div className="list-meta2 d-flex align-items-center">
                <a href="#" className="mr10">
                  <span className="flaticon-bed mr5" /> {listing.bed} bed
                </a>
                <a href="#" className="mr10">
                  <span className="flaticon-shower mr5" /> {listing.bath} bath
                </a>
                <a href="#">
                  <span className="flaticon-expand mr5" /> {listing.sqft} sqft
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Listing6;
