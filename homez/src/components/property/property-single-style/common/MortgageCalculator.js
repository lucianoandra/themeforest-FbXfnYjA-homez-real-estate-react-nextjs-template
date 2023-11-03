import React from "react";

const resultItems = [
  {
    label: "Principal and Interest",
    value: "$2,412",
  },
  {
    label: "Property Taxes",
    value: "$2,412",
  },
  {
    label: "Homeowners' Insurance",
    value: "$2,412",
  },
];

const MortgageCalculator = () => {
  return (
    <>
      <div className="col-md-12">
        <div className="d-flex align-items-center flex-wrap calculator-chart-percent">
          <div className="principal-interest-st" />
          <div className="property-tax-st" />
          <div className="home-insurance-st" />
        </div>
        {/* End chart */}

        <ul className="list-result-calculator d-md-flex flex-wrap justify-content-between bdrb1 mt20 ps-0 pb15 mb-0">
          {resultItems.map((item, index) => (
            <li key={index} className="d-sm-flex align-items-center">
              <span className="name-result text">{item.label}</span>
              <span className="principal-interest-val fw600">{item.value}</span>
            </li>
          ))}
        </ul>
        {/* End .list-result-calculator */}

        <form className="comments_form mt30">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">Total Amount</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="$250"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">Down Payment</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="$2304"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">Interest Rate</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="3.5%"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">
                  Loan Terms (Years)
                </label>
                <input type="text" className="form-control" placeholder={12} />
                required
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">Property Tax</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="$1000"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">Home Insurance</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="$1000"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-12">
              <button type="submit" className="ud-btn btn-white2">
                Calculate
                <i className="fal fa-arrow-right-long" />
              </button>
            </div>
            {/* End .col */}
          </div>
        </form>
      </div>
    </>
  );
};

export default MortgageCalculator;
