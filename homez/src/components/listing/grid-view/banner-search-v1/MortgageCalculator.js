"use client";
import Select from "react-select";

const MortgageCalculator = () => {
  const catOptions = [
    { value: "Monthly", label: "Monthly" },
    { value: "Weekly", label: "Weekly" },
    { value: "Yearly", label: "Yearly" },
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
    <form className="form-style1">
      <div className="mb20">
        <input
          type="text"
          className="form-control"
          placeholder="Total Amount"
          required
        />
      </div>
      <div className="mb20">
        <input
          type="text"
          className="form-control"
          placeholder="Down Payment"
          required
        />
      </div>
      <div className="mb20">
        <input
          type="text"
          className="form-control"
          placeholder="Interest Rate"
          required
        />
      </div>
      <div className="mb20">
        <input
          type="text"
          className="form-control"
          placeholder="Loan Terms (Years)"
          required
        />
      </div>
      <div className="mb20">
        <div className="widget-wrapper sideborder-dropdown">
          <div className="form-style2 input-group">
            <Select
              defaultValue={[catOptions[1]]}
              name="colors"
              options={catOptions}
              styles={customStyles}
              className="select-custom"
              classNamePrefix="select"
              required
            />
          </div>
        </div>
      </div>
      <div className="btn-area d-grid align-items-center">
        <button type="submit" className="ud-btn btn-thm">
          <span className="flaticon-search align-text-top pr10" />
          Search
        </button>
      </div>
    </form>
  );
};

export default MortgageCalculator;
