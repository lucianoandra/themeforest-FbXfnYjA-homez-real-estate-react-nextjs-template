const ScheduleForm = () => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-lg-12">
          <div className="mb15">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-md-12">
          <div className="mb15">
            <input
              type="email"
              className="form-control"
              placeholder="ibthemes21@gmail.com"
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-lg-12">
          <div className="mb15">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your phone"
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-md-12">
          <div className="mb15">
            <textarea
              cols={30}
              rows={4}
              placeholder="Hello, I am interested in [Renovated apartment at last floor]"
              defaultValue={""}
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
          <label className="custom_checkbox fz14 ff-heading">
            By submitting form I agree to Terms of Use
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
        {/* End .col-12 */}

        <div className="col-md-12">
          <div className="d-grid">
            <button type="submit" className="ud-btn btn-thm">
              Submit a Tour Request
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default ScheduleForm;
