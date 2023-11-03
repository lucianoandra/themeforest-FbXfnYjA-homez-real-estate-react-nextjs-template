"use client";
import React from "react";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form className="form-style1" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="ib"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="themes"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="ibthemes21@gmail.com "
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Textarea
            </label>
            <textarea
              cols={30}
              rows={4}
              placeholder="There are many variations of passages."
              defaultValue={""}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-12">
          <div className="d-grid">
            <button type="submit" className="ud-btn btn-dark">
              Submit
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default Contact;
