'use client'

import React from "react";
import Location from "./Location";

const propertyTypes = [
  { label: "Houses" },

  { label: "Apartments",},
  { label: "Office" },
  { label: "Villa" },
];



const TopFilter = ({filterFunctions}) => {
  return (
    <>
      <div className="col-md-9">
        <div className="agent-page-meta dropdown-lists">
          <div className="d-sm-flex">
            <div className="position-relative mb10 mr10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter agent name"
                onChange={(e)=>filterFunctions.setSearchQuery(e.target.value)}
              />
            </div>
            {/* End searchbox */}

            <div className="position-relative mb10 mr10">
              <button
                type="button"
                className="open-btn box-shadow-0 dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                All Categories <i className="fa fa-angle-down ms-2" />
              </button>
              <div className="dropdown-menu">
                <div className="widget-wrapper bdrb1 pb25 mb0 pl20">
                  <div className="checkbox-style1">
                                          <label className="custom_checkbox">
                        All
                      <input type="checkbox" 
                      checked={!filterFunctions?.propertyTypes.length}
                      onChange={(e=>{filterFunctions?.setPropertyTypes([])})}/>
                      <span className="checkmark" />
                    </label>
                    {propertyTypes.map((property, index) => (
                      <label className="custom_checkbox" key={index} >
                      {property.label}
                      <input type="checkbox"
                      checked={filterFunctions?.propertyTypes.includes(property.label)}
                      onChange={(e=>{filterFunctions.handlepropertyTypes(property.label)})}
                       />
                      <span className="checkmark" />
                    </label>

                      
                    ))}
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn box-shadow-0 ud-btn btn-thm dropdown-toggle"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
            {/* End  All Categories */}

            <div className="position-relative mb10">
              <button
                type="button"
                className="open-btn mb15 drop_btn"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                All Cities <i className="fa fa-angle-down ms-2" />
              </button>
              <div className="dropdown-menu">
                <div className="widget-wrapper bdrb1 pb25 mb0 p20">
                  <div className="bootselect-multiselect">
                    <Location filterFunctions={filterFunctions} />
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn box-shadow-0 ud-btn btn-thm drop_btn"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
            {/*  All Cities */}
          </div>
        </div>
      </div>
      {/* End .col-9 */}

      <div className="col-md-3">
        <div className="page_control_shorting text-start text-md-end mb20">
          <div className="pcs_dropdown d-flex align-items-center justify-content-end">
            <span style={{ minWidth: "50px", textAlign: "left" }}>Sort by</span>
            <select
              style={{ width: "120px" }}
              className="selectpicker form-select"
            >
              <option>Newest</option>
              <option>Best Seller</option>
              <option>Best Match</option>
              <option>Price Low</option>
              <option>Price High</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFilter;
