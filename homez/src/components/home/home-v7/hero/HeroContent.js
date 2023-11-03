"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const HeroContent = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("buy");
  const [searchValues, setSearchValues] = useState({
    buy: "",
    rent: "",
    sold: "",
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleRecentSearchClick = (searchItem) => {
    // Update the selected value for the active tab on click
    setSearchValues((prevSearchValues) => ({
      ...prevSearchValues,
      [activeTab]: searchItem.title,
    }));
  };

  const tabs = [
    { id: "buy", label: "Buy" },
    { id: "rent", label: "Rent" },
    { id: "sold", label: "Sold" },
  ];

  // Array of objects representing the list items
  const recentSearches = [
    { title: "New York, NY" },
    { title: "Los Angeles" },
    { title: "Dhaka, Bangladesh" },
    { title: "Paris, France" },
    // Add more recent search items with different titles and icons as needed
  ];

  return (
    <div className="advance-style3 at-home7 mb30 animate-up-2">
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

      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}
          >
            <div className="advance-content-style3 at-home7">
              <div className="row">
                <div className="col-md-8 pe-3 pe-md-0">
                  <div className="advance-search-field position-relative text-start">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <span className="icon flaticon-home-1" />
                        <input
                          className="form-control rounded-0"
                          type="text"
                          name="search"
                          placeholder={`Enter Keyword for ${tab.label}`}
                          data-bs-toggle="dropdown"
                          value={searchValues[activeTab]}
                          onChange={(e) =>
                            setSearchValues((prevSearchValues) => ({
                              ...prevSearchValues,
                              [activeTab]: e.target.value,
                            }))
                          }
                        />
                        <div className="search-suggestions rounded-0 dropdown-menu">
                          <h6 className="fz14 ml20 mt25 mb-0">
                            Recent Searches
                          </h6>
                          <div className="box-suggestions">
                            <ul className="p-0 m-0">
                              {recentSearches.map((item, index) => (
                                <li
                                  className="pointer"
                                  key={index}
                                  onClick={() => handleRecentSearchClick(item)}
                                >
                                  <div className="info-product">
                                    <div className="item_title">
                                      <i className={`flaticon-maps pe-2`} />{" "}
                                      {item.title}
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* End .col-md-5 */}

                <div className="col-md-4 pe-0">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-2 mt-md-0">
                    <button
                      className="advance-search-btn mr15"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#advanceSeachModal"
                    >
                      <span className="flaticon-settings" /> Advanced
                    </button>
                    <button
                      className="advance-search-icon ud-btn btn-dark"
                      type="button"
                      onClick={() => router.push("/map-v4")}
                    >
                      <span className="flaticon-search" />
                    </button>
                  </div>
                </div>
                {/* End .col-md-4 */}
              </div>
              {/* End .row */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
