"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import LookingFor from "./LookingFor";
import Location from "./Location";

const FilterContent = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("buy");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: "buy", label: "Buy" },
    { id: "rent", label: "Rent" },
    { id: "sold", label: "Sold" },
  ];

  const [price, setPrice] = useState({ value: { min: 2000, max: 45000 } });

  // price range handler
  const handleOnChange = (value) => {
    setPrice({ value });
  };

  return (
    <div className="advance-style4 at-home5 mt-100 mt50-lg mb10 mx-auto animate-up-2">
      <ul className="nav nav-tabs p-0 m-0">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content text-start">
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}
          >
            <div className="advance-content-style3 at-home5">
              <div className="row align-items-center">
                <div className="col-md-4 col-xl-3 bdrr1 bdrrn-sm">
                  <label>Search</label>
                  <div className="advance-search-field position-relative">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <input
                          className="form-control bgc-f7 bdrs12 ps-0"
                          type="text"
                          name="search"
                          placeholder={`Enter Keyword for ${tab.label}`}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* End .col-3 */}

                <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                  <div className="mt-3 mt-md-0 px-0">
                    <div className="bootselect-multiselect">
                      <label className="fz14">Loking For</label>
                      <LookingFor />
                    </div>
                  </div>
                </div>
                {/* End col-md-4 */}

                <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                  <div className="mt-3 mt-md-0">
                    <div className="bootselect-multiselect">
                      <label className="fz14">Location</label>
                      <Location />
                    </div>
                  </div>
                </div>
                {/* End col-md-4 */}

                <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                  <div className="mt-3 mt-md-0">
                    <div className="dropdown-lists">
                      <label className="fz14 mb-1">Price</label>
                      <div
                        className="btn open-btn text-start dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        style={{ fontSize: "13px" }}
                      >
                        ${price.value.min} - ${price.value.max}{" "}
                        <i className="fas fa-caret-down" />
                      </div>
                      <div className="dropdown-menu">
                        <div className="widget-wrapper pb20 mb0 pl20 pr20">
                          <div className="range-wrapper at-home10">
                            <InputRange
                              formatLabel={() => ``}
                              maxValue={100000}
                              minValue={0}
                              value={price.value}
                              onChange={(value) => handleOnChange(value)}
                              id="slider"
                            />
                            <div className="d-flex align-items-center">
                              <span id="slider-range-value1">
                                ${price.value.min}
                              </span>
                              <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
                              <span id="slider-range-value2">
                                ${price.value.max}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End col-md-4 */}

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                    <button
                      className="advance-search-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#advanceSeachModal"
                    >
                      <span className="flaticon-settings" /> Advanced
                    </button>
                    <button
                      className="advance-search-icon ud-btn btn-thm ms-4"
                      type="button"
                      onClick={() => router.push("/grid-full-3-col")}
                    >
                      <span className="flaticon-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterContent;
