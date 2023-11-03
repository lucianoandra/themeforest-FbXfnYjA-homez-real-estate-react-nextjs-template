"use client";
import Select from "react-select";

const ReviewBoxForm = () => {
  const inqueryType = [
    { value: "Five Star", label: "Five Star" },
    { value: "Four Star", label: "Four Star" },
    { value: "Three Sta", label: "Three Star" },
    { value: "Two Sta", label: "Two Star" },
    { value: "One Sta", label: "One Star" },
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

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Additional logic or API calls can be added here
  };

  return (
    <form className="comments_form mt30" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-4">
            <label className="fw600 ff-heading mb-2">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="ibthemes21@gmail.com"
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-md-6">
          <div className="mb-4">
            <label className="fw600 ff-heading mb-2">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Title"
              required
            />
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-md-6">
          <div className="widget-wrapper sideborder-dropdown mb-4">
            <label className="fw600 ff-heading mb-2">Rating</label>
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
        {/* End .col-6 */}

        <div className="col-md-12">
          <div className="mb-4">
            <label className="fw600 ff-heading mb-2">Review</label>
            <textarea
              className="pt15"
              rows={6}
              placeholder="Write a Review"
              defaultValue={""}
              required
            />
          </div>
          <button type="submit" className="ud-btn btn-white2">
            Submit Review
            <i className="fal fa-arrow-right-long" />
          </button>
        </div>
        {/* End .col-6 */}
      </div>
    </form>
  );
};

export default ReviewBoxForm;
