"use client";

import listings from "@/data/listings";
import React, { useState, useEffect } from "react";
import ListingSidebar from "../../sidebar";
import AdvanceFilterModal from "@/components/common/advance-filter-two";
import TopFilterBar from "./TopFilterBar";
import FeaturedListings from "./FeatuerdListings";
import Pagination from "../../Pagination";
import PaginationTwo from "../../PaginationTwo";

export default function PropertyFiltering() {
  const [filteredData, setFilteredData] = useState([]);

  const [currentSortingOption, setCurrentSortingOption] = useState("Newest");

  const [sortedFilteredData, setSortedFilteredData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [colstyle, setColstyle] = useState(false);
  const [pageItems, setPageItems] = useState([]);
  const [pageContentTrac, setPageContentTrac] = useState([]);

  useEffect(() => {
    setPageItems(
      sortedFilteredData.slice((pageNumber - 1) * 6, pageNumber * 6)
    );
    setPageContentTrac([
      (pageNumber - 1) * 6 + 1,
      pageNumber * 6,
      sortedFilteredData.length,
    ]);
  }, [pageNumber, sortedFilteredData]);

  const [listingStatus, setListingStatus] = useState("All");
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathroms, setBathroms] = useState(0);
  const [location, setLocation] = useState("All Cities");
  const [squirefeet, setSquirefeet] = useState([]);
  const [yearBuild, setyearBuild] = useState([]);
  const [categories, setCategories] = useState([]);

  const resetFilter = () => {
    setListingStatus("All");
    setPropertyTypes([]);
    setPriceRange([0, 100000]);
    setBedrooms(0);
    setBathroms(0);
    setLocation("All Cities");
    setSquirefeet([]);
    setyearBuild([0, 2050]);
    setCategories([]);
    setCurrentSortingOption("Newest");
    document.querySelectorAll(".filterInput").forEach(function (element) {
      element.value = null;
    });

    document.querySelectorAll(".filterSelect").forEach(function (element) {
      element.value = "All Cities";
    });
  };

  const handlelistingStatus = (elm) => {
    setListingStatus((pre) => (pre == elm ? "All" : elm));
  };

  const handlepropertyTypes = (elm) => {
    if (elm == "All") {
      setPropertyTypes([]);
    } else {
      setPropertyTypes((pre) =>
        pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm]
      );
    }
  };
  const handlepriceRange = (elm) => {
    setPriceRange(elm);
  };
  const handlebedrooms = (elm) => {
    setBedrooms(elm);
  };
  const handlebathroms = (elm) => {
    setBathroms(elm);
  };
  const handlelocation = (elm) => {
    console.log(elm);
    setLocation(elm);
  };
  const handlesquirefeet = (elm) => {
    setSquirefeet(elm);
  };
  const handleyearBuild = (elm) => {
    setyearBuild(elm);
  };
  const handlecategories = (elm) => {
    if (elm == "All") {
      setCategories([]);
    } else {
      setCategories((pre) =>
        pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm]
      );
    }
  };
  const filterFunctions = {
    handlelistingStatus,
    handlepropertyTypes,
    handlepriceRange,
    handlebedrooms,
    handlebathroms,
    handlelocation,
    handlesquirefeet,
    handleyearBuild,
    handlecategories,
    priceRange,
    listingStatus,
    propertyTypes,
    resetFilter,

    bedrooms,
    bathroms,
    location,
    squirefeet,
    yearBuild,
    categories,
    setPropertyTypes,
  };

  useEffect(() => {
    const refItems = listings.filter((elm) => {
      if (listingStatus == "All") {
        return true;
      } else if (listingStatus == "Buy") {
        return !elm.forRent;
      } else if (listingStatus == "Rent") {
        return elm.forRent;
      }
    });

    let filteredArrays = [];

    if (propertyTypes.length > 0) {
      const filtered = refItems.filter((elm) =>
        propertyTypes.includes(elm.propertyType)
      );
      filteredArrays = [...filteredArrays, filtered];
    }
    filteredArrays = [
      ...filteredArrays,
      refItems.filter((el) => el.bed >= bedrooms),
    ];
    filteredArrays = [
      ...filteredArrays,
      refItems.filter((el) => el.bath >= bathroms),
    ];

    filteredArrays = [
      ...filteredArrays,
      !categories.length
        ? [...refItems]
        : refItems.filter((elm) =>
            categories.every((elem) => elm.features.includes(elem))
          ),
    ];

    if (location != "All Cities") {
      filteredArrays = [
        ...filteredArrays,
        refItems.filter((el) => el.city == location),
      ];
    }

    if (priceRange.length > 0) {
      const filtered = refItems.filter(
        (elm) =>
          Number(elm.price.split("$")[1].split(",").join("")) >=
            priceRange[0] &&
          Number(elm.price.split("$")[1].split(",").join("")) <= priceRange[1]
      );
      filteredArrays = [...filteredArrays, filtered];
    }
    if (squirefeet.length > 0 && squirefeet[1]) {
      const filtered = refItems.filter(
        (elm) => elm.sqft >= squirefeet[0] && elm.sqft <= squirefeet[1]
      );
      filteredArrays = [...filteredArrays, filtered];
    }
    if (yearBuild.length > 0) {
      const filtered = refItems.filter(
        (elm) =>
          elm.yearBuilding >= yearBuild[0] && elm.yearBuilding <= yearBuild[1]
      );
      filteredArrays = [...filteredArrays, filtered];
    }

    const commonItems = refItems.filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );

    setFilteredData(commonItems);
  }, [
    listingStatus,
    propertyTypes,
    priceRange,
    bedrooms,
    bathroms,
    location,
    squirefeet,
    yearBuild,
    categories,
  ]);

  useEffect(() => {
    setPageNumber(1);
    if (currentSortingOption == "Newest") {
      const sorted = [...filteredData].sort(
        (a, b) => a.yearBuilding - b.yearBuilding
      );
      setSortedFilteredData(sorted);
    } else if (currentSortingOption.trim() == "Price Low") {
      const sorted = [...filteredData].sort(
        (a, b) =>
          a.price.split("$")[1].split(",").join("") -
          b.price.split("$")[1].split(",").join("")
      );
      setSortedFilteredData(sorted);
    } else if (currentSortingOption.trim() == "Price High") {
      const sorted = [...filteredData].sort(
        (a, b) =>
          b.price.split("$")[1].split(",").join("") -
          a.price.split("$")[1].split(",").join("")
      );
      setSortedFilteredData(sorted);
    } else {
      setSortedFilteredData(filteredData);
    }
  }, [filteredData, currentSortingOption]);
  return (
    <section className="pt0 pb90 bgc-f7">
      <div className="container">
        {/* start mobile filter sidebar */}
        <div
          className="offcanvas offcanvas-start p-0"
          tabIndex="-1"
          id="listingSidebarFilter"
          aria-labelledby="listingSidebarFilterLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="listingSidebarFilterLabel">
              Listing Filter
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-0">
            <ListingSidebar filterFunctions={filterFunctions} />
          </div>
        </div>
        {/* End mobile filter sidebar */}

        {/* <!-- Advance Feature Modal Start --> */}
        <div className="advance-feature-modal">
          <div
            className="modal fade"
            id="advanceSeachModal"
            tabIndex={-1}
            aria-labelledby="advanceSeachModalLabel"
            aria-hidden="true"
          >
            <AdvanceFilterModal filterFunctions={filterFunctions} />
          </div>
        </div>
        {/* <!-- Advance Feature Modal End --> */}

        <div className="row">
          <TopFilterBar
            pageContentTrac={pageContentTrac}
            colstyle={colstyle}
            setColstyle={setColstyle}
            filterFunctions={filterFunctions}
            setCurrentSortingOption={setCurrentSortingOption}
          />
        </div>
        {/* End TopFilterBar */}

        <div className="row">
          <FeaturedListings colstyle={colstyle} data={pageItems} />
        </div>
        {/* End .row */}

        <div className="row">
          <PaginationTwo
            pageCapacity={6}
            data={sortedFilteredData}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
}
