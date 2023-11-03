import React from "react";

const amenitiesData = {
  column1: [
    { label: "Attic", defaultChecked: false },
    { label: "Basketball court", defaultChecked: true },
    { label: "Air Conditioning", defaultChecked: true },
    { label: "Lawn", defaultChecked: true },
    { label: "Swimming Pool", defaultChecked: false },
    { label: "Barbeque", defaultChecked: false },
    { label: "Microwave", defaultChecked: false },
  ],
  column2: [
    { label: "TV Cable", defaultChecked: false },
    { label: "Dryer", defaultChecked: true },
    { label: "Outdoor Shower", defaultChecked: true },
    { label: "Washer", defaultChecked: true },
    { label: "Gym", defaultChecked: false },
    { label: "Ocean view", defaultChecked: false },
    { label: "Private space", defaultChecked: false },
  ],
  column3: [
    { label: "Lake view", defaultChecked: false },
    { label: "Wine cellar", defaultChecked: true },
    { label: "Front yard", defaultChecked: true },
    { label: "Refrigerator", defaultChecked: true },
    { label: "WiFi", defaultChecked: false },
    { label: "Laundry", defaultChecked: false },
    { label: "Sauna", defaultChecked: false },
  ],
};

const Amenities = () => {
  return (
    <div className="row">
      {Object.keys(amenitiesData).map((columnKey, index) => (
        <div key={index} className="col-sm-6 col-lg-3 col-xxl-2">
          <div className="checkbox-style1">
            {amenitiesData[columnKey].map((amenity, amenityIndex) => (
              <label key={amenityIndex} className="custom_checkbox">
                {amenity.label}
                <input
                  type="checkbox"
                  defaultChecked={amenity.defaultChecked}
                />
                <span className="checkmark" />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Amenities;
