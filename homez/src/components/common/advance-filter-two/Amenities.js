'use client'

const Amenities = ({filterFunctions}) => {
  const amenities = [
    [
      { label: "Attic" },
    { label: "Basketball court", defaultChecked: true },
    { label: "Air Conditioning", defaultChecked: true },
    { label: "Lawn", defaultChecked: true },
    ],
    [
      { label: "TV Cable" },
      { label: "Dryer" },
      { label: "Outdoor Shower" },
    { label: "Washer" },
    ],
    [
      { label: "Lake view" },
      { label: "Wine cellar" },
      { label: "Front yard" },
      { label: "Refrigerator" },
    ],
  ];

  return (
    <>
      {amenities.map((column, columnIndex) => (
        <div className="col-sm-4" key={columnIndex}>
          <div className="widget-wrapper mb20">
            <div className="checkbox-style1">
              {column.map((amenity, amenityIndex) => (
                <label className="custom_checkbox" key={amenityIndex}>
                  {amenity.label}
                  <input
                  checked={filterFunctions?.categories.includes(amenity.label)}
                  onChange={()=>filterFunctions?.handlecategories(amenity.label)}
                    type="checkbox"

                  />
                  <span className="checkmark" />
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Amenities;
