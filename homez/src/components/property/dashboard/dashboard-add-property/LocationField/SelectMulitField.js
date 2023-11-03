"use client";
import React from "react";
import Select from "react-select";

const options = {
  countries: [
    "Belgium",
    "France",
    "Kuwait",
    "Qatar",
    "Netherlands",
    "Germany",
    "Turkey",
    "UK",
    "USA",
  ],
  cities: [
    "California",
    "Chicago",
    "Los Angeles",
    "Manhattan",
    "New Jersey",
    "New York",
    "San Diego",
    "San Francisco",
    "Texas",
  ],
  additionalCountries: [
    "Belgium",
    "France",
    "Kuwait",
    "Qatar",
    "Netherlands",
    "Germany",
    "Turkey",
    "UK",
    "USA",
  ],
};

const customStyles = {
  option: (styles, { isFocused, isSelected, isHovered }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? "#eb6753"
        : isHovered
        ? "#eb675312"
        : isFocused
        ? "#eb675312"
        : undefined,
    };
  },
};

const SelectMultiField = () => {
  const fieldTitles = ["Country / State", "City", "Country"];
  return (
    <>
      {Object.keys(options).map((key, index) => (
        <div className="col-sm-6 col-xl-4" key={index}>
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              {fieldTitles[index]}
            </label>
            <div className="location-area">
              <Select
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                isMulti
                options={options[key].map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SelectMultiField;
