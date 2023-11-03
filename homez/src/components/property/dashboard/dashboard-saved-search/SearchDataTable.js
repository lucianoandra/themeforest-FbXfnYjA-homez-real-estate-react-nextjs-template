"use client";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const listingData = [
  {
    title: "Equestrian Family Home",
    date: "December 31, 2022",
  },
  {
    title: "Luxury villa in Rego Park",
    date: "December 31, 2022",
  },
  {
    title: "Villa on Hollywood Boulevard",
    date: "December 31, 2022",
  },
  {
    title: "Triple Story House for Rent",
    date: "December 31, 2022",
  },
  {
    title: "Northwest Office Space",
    date: "December 31, 2022",
  },
  {
    title: "House on the beverly hills",
    date: "December 31, 2022",
  },
  {
    title: "Luxury villa called Elvado",
    date: "December 31, 2022",
  },
  {
    title: "House on the Northridge",
    date: "December 31, 2022",
  },
  {
    title: "Equestrian Family Home",
    date: "December 31, 2022",
  },
  {
    title: "Luxury villa in Rego Park",
    date: "December 31, 2022",
  },
  {
    title: "Villa on Hollywood Boulevard",
    date: "December 31, 2022",
  },
];

const SearchDataTable = () => {
  return (
    <table className="table-style3 table at-savesearch">
      <thead className="t-head">
        <tr>
          <th scope="col">Listing title</th>
          <th scope="col">Date Created</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody className="t-body">
        {listingData.map((listing, index) => (
          <tr key={index}>
            <th scope="row">{listing.title}</th>
            <td>{listing.date}</td>
            <td>
              <div className="d-flex">
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`full_screen-${listing.id}`}
                >
                  <span className="flaticon-fullscreen-1" />
                </button>
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`edit-${listing.id}`}
                >
                  <span className="fas fa-pen fa" />
                </button>
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`delete-${listing.id}`}
                >
                  <span className="flaticon-bin" />
                </button>

                <ReactTooltip
                  id={`full_screen-${listing.id}`}
                  place="top"
                  content="Full Screen"
                />
                <ReactTooltip
                  id={`edit-${listing.id}`}
                  place="top"
                  content="Edi"
                />
                <ReactTooltip
                  id={`delete-${listing.id}`}
                  place="top"
                  content="Delete"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchDataTable;
