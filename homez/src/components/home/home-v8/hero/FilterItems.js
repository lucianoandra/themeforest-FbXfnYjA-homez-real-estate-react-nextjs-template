"use client";
import Select from "react-select";
import InputRange from "react-input-range";
import { useState } from "react";

const FilterItems = () => {
  const [price, setPrice] = useState({ value: { min: 0, max: 70987 } });

  // price range handler
  const handleOnChange = (value) => {
    setPrice({ value });
  };

  const catOptions = [
    { value: "Apartments", label: "Apartments" },
    { value: "Bungalow", label: "Bungalow" },
    { value: "Houses", label: "Houses" },
    { value: "Loft", label: "Loft" },
    { value: "Office", label: "Office" },
    { value: "Townhome", label: "Townhome" },
    { value: "Villa", label: "Villa" },
  ];
  const locationOptions = [
    { value: "California", label: "California" },
    { value: "Chicago", label: "Chicago" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "Manhattan", label: "Manhattan" },
    { value: "New Jersey", label: "New Jersey" },
    { value: "New York", label: "New York" },
    { value: "San Diego", label: "San Diego" },
    { value: "San Francisco", label: "San Francisco" },
    { value: "Texas", label: "Texas" },
  ];

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

  return (
    <>
      <div className="col-md-12">
        <div className="bootselect-multiselect mb20">
          <Select
            defaultValue={[catOptions[0]]}
            name="colors"
            options={catOptions}
            styles={customStyles}
            className="text-start with_border"
            classNamePrefix="select"
            required
            isSearchable={false}
          />
        </div>
      </div>
      {/* End .col-12 */}
      <div className="col-md-12">
        <div className="dropdown-lists at-home8 mb20">
          <div
            className="btn open-btn drop_btn3 text-start dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            Price <i className="fas fa-caret-down float-end fz11" />
          </div>
          <div className="dropdown-menu">
            <div className="widget-wrapper pb20 mb0 pl20 pr20">
              {/* Range Slider Mobile Version */}
              <div className="range-slider-style2">
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
                    <span id="slider-range-value1">${price.value.min}</span>
                    <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
                    <span id="slider-range-value2">${price.value.max}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .col-12 */}
      <div className="col-md-12">
        <div className="bootselect-multiselect mb15">
          <Select
            defaultValue={[locationOptions[0]]}
            name="colors"
            options={locationOptions}
            styles={customStyles}
            className="text-start with_border"
            classNamePrefix="select"
            required
            isSearchable={false}
          />
        </div>
      </div>{" "}
      {/* End .col-12 */}
    </>
  );
};

export default FilterItems;
