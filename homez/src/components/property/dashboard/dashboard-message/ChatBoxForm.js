import React from "react";

const ChatBoxForm = () => {
  return (
    <form className="d-flex align-items-center">
      <input
        className="form-control"
        type="search"
        placeholder="Type a Message"
        aria-label="Search"
        required
      />
      <button type="submit" className="btn ud-btn btn-thm">
        Send Message
        <i className="fal fa-arrow-right-long" />
      </button>
    </form>
  );
};

export default ChatBoxForm;
