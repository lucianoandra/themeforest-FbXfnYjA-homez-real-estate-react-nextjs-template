import listings from "@/data/listings";
import React from "react";

const PropertyDetails = ({id}) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  const columns = [
    [
      {
        label: "Property ID",
        value: "RT48",
      },
      {
        label: "Price",
        value:data.price,
      },
      {
        label: "Property Size",
        value: `${data.sqft} Sq Ft`,
      },
      {
        label: "Bathrooms",
        value: data.bath,
      },
      {
        label: "Bedrooms",
        value: data.bed,
      },
    ],
    [
      {
        label: "Garage",
        value: "2",
      },
      {
        label: "Garage Size",
        value: "200 SqFt",
      },
      {
        label: "Year Built",
        value: data.yearBuilding,
      },
      {
        label: "Property Type",
        value: data.propertyType,
      },
      {
        label: "Property Status",
        value: `For ${data.forRent ? 'rent':'sale'}`,
      },
    ],
  ];

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="col-md-6 col-xl-6">
          {column.map((detail, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
