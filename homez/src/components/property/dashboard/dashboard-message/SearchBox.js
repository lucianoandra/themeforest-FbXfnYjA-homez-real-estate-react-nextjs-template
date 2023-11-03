import React from "react";

const SearchBox = () => {
  return (
    <form className="d-flex align-items-center">
      <button className="btn" type="submit">
        <span className="flaticon-search" />
      </button>
      <input
        className="form-control"
        type="search"
        placeholder="Serach"
        aria-label="Search"
        required
      />
    </form>
  );
};

export default SearchBox;
