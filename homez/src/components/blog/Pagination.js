"use client";
import React, { useState } from "react";

const Pagination = () => {
  const totalPages = 6; // Total number of pages
  const [currentPage, setCurrentPage] = useState(2); // Current active page

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    paginationItems.push(
      <li className="page-item" key="previous">
        <button
          className="page-link"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <span className="fas fa-angle-left" />
        </button>
      </li>
    );

    for (let page = 1; page <= totalPages; page++) {
      paginationItems.push(
        <li
          className={`page-item ${currentPage === page ? "active" : ""}`}
          aria-current={currentPage === page ? "page" : undefined}
          key={page}
        >
          <button className="page-link" onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        </li>
      );
    }

    paginationItems.push(
      <li className="page-item" key="next">
        <button
          className="page-link"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          <span className="fas fa-angle-right" />
        </button>
      </li>
    );

    return paginationItems;
  };

  return <ul className="page_navigation mt20">{renderPaginationItems()}</ul>;
};

export default Pagination;
