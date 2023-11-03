import ListingMap1 from "@/components/listing/map-style/ListingMap1";
import React from "react";

const PropertyAddress = () => {
  const addresses = [
    {
      address: "10425 Tabor St",
      city: "Los Angeles",
      state: "California",
      zipCode: "90034",
      area: "Brookside",
      country: "United States",
    },
    {
      address: "10 Downing Street",
      city: "London",
      state: "Greater London",
      zipCode: "SW1A 2AA",
      area: "Westminster",
      country: "United Kingdom",
    },
  ];

  return (
    <>
      {addresses.map((address, index) => (
        <div key={index} className="col-md-6 col-xl-6">
          <div className="d-flex justify-content-between">
            <div className="pd-list">
              <p className="fw600 mb10 ff-heading dark-color">Address</p>
              <p className="fw600 mb10 ff-heading dark-color">City</p>
              <p className="fw600 mb-0 ff-heading dark-color">State/county</p>
            </div>
            <div className="pd-list">
              <p className="text mb10">{address.address}</p>
              <p className="text mb10">{address.city}</p>
              <p className="text mb-0">{address.state}</p>
            </div>
          </div>
        </div>
      ))}
      {/* End col */}

      <div className="col-md-12 h-500" style={{height:'400px'}}>

   <ListingMap1/>
      </div>
      {/* End col */}
    </>
  );
};

export default PropertyAddress;
