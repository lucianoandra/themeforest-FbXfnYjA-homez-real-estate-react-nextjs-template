'use client'

import React from "react";
import PropertyType from "../../sidebar/PropertyType";
import PriceRange from "../../sidebar/PriceRange";
import Bedroom from "../../sidebar/Bedroom";
import Bathroom from "../../sidebar/Bathroom";
import ListingStatus from "../../sidebar/ListingStatus";

const TopFilterBar2 = ({filterFunctions} ) => {
  return (
    <>
      <li className="list-inline-item position-relative">
        <input
          type="text"
          className="form-control search-field"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          onChange={(e)=>filterFunctions && filterFunctions.setSearchQuery(e.target.value)}
        />
      </li>
      <li className="list-inline-item position-relative">
        <button
          type="button"
          className="open-btn mb15 dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
        >
          For Sale <i className="fa fa-angle-down ms-2" />
        </button>
        <div className="dropdown-menu">
          <div className="widget-wrapper bdrb1 pb25 mb0 pl20">
            <h6 className="list-title">Listing Status</h6>
            <div className="radio-element">
              <ListingStatus  filterFunctions={filterFunctions} />
            </div>
          </div>
          <div className="text-end mt10 pr10">
            <button type="button" className="done-btn ud-btn btn-thm drop_btn">
              Done
            </button>
          </div>
        </div>
      </li>
      {/* End li Listing Status */}

      <li className="list-inline-item position-relative">
        <button
          type="button"
          className="open-btn mb15 dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
        >
          Property Type <i className="fa fa-angle-down ms-2" />
        </button>
        <div className="dropdown-menu">
          <div className="widget-wrapper bdrb1 pb25 mb0 pl20">
            <h6 className="list-title">Property Type</h6>
            <div className="checkbox-style1">
              <PropertyType  filterFunctions={filterFunctions} />
            </div>
          </div>
          <div className="text-end mt10 pr10">
            <button
              type="button"
              className="done-btn ud-btn btn-thm dropdown-toggle"
            >
              Done
            </button>
          </div>
        </div>
      </li>
      {/* End li Property Type */}

      <li className="list-inline-item position-relative">
        <button
          type="button"
          className="open-btn mb15 dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
        >
          Price <i className="fa fa-angle-down ms-2" />
        </button>

        <div className="dropdown-menu dd3">
          <div className="widget-wrapper bdrb1 pb25 mb0 pl20 pr20">
            <h6 className="list-title">Price Range</h6>
            {/* Range Slider Desktop Version */}
            <div className="range-slider-style1">
              <PriceRange  filterFunctions={filterFunctions} />
            </div>
          </div>
          <div className="text-end mt10 pr10">
            <button type="button" className="done-btn ud-btn btn-thm drop_btn3">
              Done
            </button>
          </div>
        </div>
      </li>
      {/* End li Price */}

      <li className="list-inline-item position-relative">
        <button
          type="button"
          className="open-btn mb15 dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
        >
          Beds / Baths <i className="fa fa-angle-down ms-2" />
        </button>
        <div className="dropdown-menu dd4 pb20">
          <div className="widget-wrapper pl20 pr20">
            <h6 className="list-title">Bedrooms</h6>
            <div className="d-flex">
              <Bedroom  filterFunctions={filterFunctions} />
            </div>
          </div>

          <div className="widget-wrapper bdrb1 pb25 mb0 pl20 pr20">
            <h6 className="list-title">Bathrooms</h6>
            <div className="d-flex">
              <Bathroom  filterFunctions={filterFunctions} />
            </div>
          </div>
          <div className="text-end mt10 pr10">
            <button type="button" className="done-btn ud-btn btn-thm drop_btn4">
              Done
            </button>
          </div>
        </div>
      </li>
      {/* End bed and bathroom check */}

      <li className="list-inline-item">
        {/* Advance Features modal trigger */}
        <button
          type="button"
          className="open-btn mb15"
          data-bs-toggle="modal"
          data-bs-target="#advanceSeachModal"
        >
          <i className="flaticon-settings me-2" /> More Filter
        </button>
      </li>
    </>
  );
};

export default TopFilterBar2;
