"use client";
import Select from "react-select";
import SingleAgentInfo from "./SingleAgentInfo";

const InfoWithForm = () => {
  const inqueryType = [
    { value: "Engineer", label: "Engineer" },
    { value: "Doctor", label: "Doctor" },
    { value: "Employee", label: "Employee" },
    { value: "Businessman", label: "Businessman" },
    { value: "Other", label: "Other" },
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
      <SingleAgentInfo />

      <div className="row">
        <div className="col-md-12">
          <form className="form-style1 row">
            <div className="col-md-6">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ali Tufan"
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone"
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="creativelayers088"
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="widget-wrapper sideborder-dropdown">
                <label className="heading-color ff-heading fw600 mb10">
                  I&apos;m a
                </label>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={[inqueryType[0]]}
                    name="colors"
                    options={inqueryType}
                    styles={customStyles}
                    className="custom-react_select"
                    classNamePrefix="select"
                    required
                    isClearable={false}
                  />
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-12">
              <div className="mb10">
                <label className="heading-color ff-heading fw600 mb10">
                  Message
                </label>
                <textarea
                  cols={30}
                  rows={4}
                  placeholder="Hello, I am interested in [Renovated apartment at last floor]"
                  defaultValue={""}
                />
              </div>
            </div>
            {/* End .col */}

            <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
              <label className="custom_checkbox fz14 ff-heading">
                By submitting this form I agree to Terms of Use
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </div>
            {/* End .col */}

            <div className="btn-area mt20">
              <button className="ud-btn btn-white2">
                Request Information <i className="fal fa-arrow-right-long" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InfoWithForm;
