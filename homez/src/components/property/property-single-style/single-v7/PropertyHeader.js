"use client";

import listings from "@/data/listings";
import React from "react";

const PropertyHeader = ({ id }) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  return (
    <>
      <div className="col-lg-8">
        <div className="single-property-content mb30-md">
          <h2 className="sp-lg-title text-white">{data.title}</h2>
          <div className="pd-meta mb15 d-md-flex align-items-center">
            <p className="text text-white fz15 mb-0 pr10 bdrrn-sm">
              4834 N 10th St, Philadelphia, PA 19141
            </p>
          </div>
          <div className="property-meta d-flex align-items-center">
            <a
              className="ff-heading text-thm fz15 bdrr1 pr10 bdrrn-sm"
              href="#"
            >
              <i className="fas fa-circle fz10 pe-2" />
              For sale
            </a>
            <a
              className="ff-heading text-white bdrr1 fz15 pr10 ml10 ml0-sm bdrrn-sm"
              href="#"
            >
              <i className="far fa-clock pe-2" />1 years ago
            </a>
            <a className="ff-heading text-white ml10 ml0-sm fz15" href="#">
              <i className="flaticon-fullscreen pe-2 align-text-top" />
              8721
            </a>
          </div>
        </div>
      </div>
      {/* End .col-lg--8 */}

      <div className="col-lg-4">
        <div className="single-property-content">
          <div className="property-action dark-version text-lg-end">
            <div className="d-flex mb20 mb10-md align-items-center justify-content-lg-end">
              <a className="icon mr10" href="#">
                <span className="flaticon-like" />
              </a>
              <a className="icon mr10" href="#">
                <span className="flaticon-new-tab" />
              </a>
              <a className="icon mr10" href="#">
                <span className="flaticon-share-1" />
              </a>
              <a className="icon" href="#">
                <span className="flaticon-printer" />
              </a>
            </div>
            <h3 className="price mb-0 text-white">{data.price}</h3>
            <p className="text space fz15 text-white">
              $
              {(
                Number(data.price.split("$")[1].split(",").join("")) / data.sqft
              ).toFixed(2)}
              /sq ft
            </p>
          </div>
        </div>
      </div>
      {/* End .col-lg--4 */}
    </>
  );
};

export default PropertyHeader;
