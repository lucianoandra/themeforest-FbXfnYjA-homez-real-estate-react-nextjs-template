import React from "react";

const FilterHeader = () => {
  return (
    <div className="dashboard_search_meta d-md-flex align-items-center justify-content-xxl-end">
      <div className="item1 mb15-sm">
        <div className="search_area">
          <input
            type="text"
            className="form-control bdrs12"
            placeholder="Search"
            required
          />
          <label>
            <span className="flaticon-search" />
          </label>
        </div>
      </div>
      {/* End item1 */}

      <div className="page_control_shorting bdr1 bdrs12 py-2 ps-3 pe-2 mx-1 mx-xxl-3 bgc-white mb15-sm maxw160">
        <div className="pcs_dropdown d-flex align-items-center">
          <span style={{ minWidth: "50px" }} className="title-color">
            Sort by:
          </span>
          <select className="form-select show-tick">
            <option>Best Seller</option>
            <option>Best Match</option>
            <option>Price Low</option>
            <option>Price High</option>
          </select>
        </div>
      </div>
      <a href="#" className="ud-btn btn-thm">
        Add New Property
        <i className="fal fa-arrow-right-long" />
      </a>
    </div>
  );
};

export default FilterHeader;
