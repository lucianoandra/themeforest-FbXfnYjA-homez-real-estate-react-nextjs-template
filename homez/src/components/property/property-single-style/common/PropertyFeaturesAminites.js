import React from "react";

const PropertyFeaturesAminites = () => {
  const featuresAmenitiesData = [
    ["Air Conditioning", "Barbeque", "Dryer", "Gym"],
    ["Lawn", "Microwave", "Outdoor Shower", "Refrigerator"],
    ["Swimming Pool", "TV Cable", "Washer", "WiFi6"],
  ];

  return (
    <>
      {featuresAmenitiesData.map((row, rowIndex) => (
        <div key={rowIndex} className="col-sm-6 col-md-4">
          <div className="pd-list">
            {row.map((item, index) => (
              <p key={index} className="text mb10">
                <i className="fas fa-circle fz6 align-middle pe-2" />
                {item}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyFeaturesAminites;
