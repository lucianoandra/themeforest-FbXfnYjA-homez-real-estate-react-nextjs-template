"use client";
import React, { useState } from "react";
import SelectDropdown from "./SelectDropdown";
import { useRouter } from "next/navigation";

const HeroContent = () => {
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

  return (
    <div className="advance-style3 mb30 mx-auto animate-up-2">
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
            <div className="advance-content-style3">
              <div className="row">
                <div className="col-md-5 col-lg-4">
                  <div className="advance-search-field position-relative text-start">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <span className="icon flaticon-home-1" />
                        <input
                          className="form-control bgc-f7"
                          type="text"
                          name="search"
                          placeholder={`Enter Keyword for ${tab.label}`}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* End .col-md-5 */}

                <div className="col-md-3 col-lg-4">
                  <div className="mt-3 mt-md-0">
                    <div className="bootselect-multiselect">
                      <SelectDropdown />
                    </div>
                  </div>
                </div>
                {/* End .col-md-3 */}

                <div className="col-md-4 pe-0">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-2 mt-md-0">
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
                      onClick={() => router.push("/grid-default")}
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
