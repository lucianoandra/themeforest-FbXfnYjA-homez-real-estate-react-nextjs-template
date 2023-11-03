"use client";
import Select from "react-select";

const InqueryForm = () => {
  const inqueryType = [
    { value: "Apartments", label: "Apartments" },
    { value: "Bungalow", label: "Bungalow" },
    { value: "Houses", label: "Houses" },
    { value: "Loft", label: "Loft" },
    { value: "Office", label: "Office" },
    { value: "Townhome", label: "Townhome" },
    { value: "Villa", label: "Villa" },
  ];
  const personalRole = [
    { value: "Mr", label: "Mr." },
    { value: "Mrs", label: "Mrs." },
    { value: "Miss", label: "Miss." },
  ];
  const addressed = [
    { value: "Mr", label: "Mr." },
    { value: "Mrs", label: "Mrs." },
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
    <form className="form-style1 inquery_form">
      <div className="row">
        <div className="col-md-12">
          <div className="mb20">
            <label className="form-label fw600 dark-color">Inquiry Type</label>
            <div className="bootselect-multiselect">
              <Select
                defaultValue={[inqueryType[0]]}
                name="colors"
                isMulti
                options={inqueryType}
                styles={customStyles}
                className="text-start"
                classNamePrefix="select"
                required
                isSearchable={false}
                isClearable={false}
              />
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-5">
          <div className="mb20">
            <label className="form-label fw600 dark-color">Personel Role</label>
            <div className="bootselect-multiselect">
              <Select
                defaultValue={[personalRole[0]]}
                name="colors"
                isMulti
                options={personalRole}
                styles={customStyles}
                className="text-start"
                classNamePrefix="select"
                required
                isSearchable={false}
                isClearable={false}
              />
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-7">
          <div className="mb20">
            <label className="form-label fw600 dark-color">Personel Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-12">
          <div className="mb20">
            <label className="form-label fw600 dark-color">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="ibthemes21@gmail.com"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-12">
          <div className="mb20">
            <label className="form-label fw600 dark-color">
              How to address you
            </label>
            <div className="bootselect-multiselect">
              <Select
                defaultValue={[addressed[0]]}
                name="colors"
                isMulti
                options={addressed}
                styles={customStyles}
                className="text-start"
                classNamePrefix="select"
                required
                isSearchable={false}
                isClearable={false}
              />
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="mb20">
            <label className="form-label fw600 dark-color">Max Price</label>
            <input type="text" className="form-control" placeholder="$90" />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="mb30">
            <label className="form-label fw600 dark-color">
              Min Size (Sq ft)
            </label>
            <input type="text" className="form-control" placeholder={20} />
          </div>
        </div>
        {/* End .col */}

        <div className="d-grid">
          <button className="ud-btn btn-thm">
            Submit <i className="fal fa-arrow-right-long" />
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default InqueryForm;
