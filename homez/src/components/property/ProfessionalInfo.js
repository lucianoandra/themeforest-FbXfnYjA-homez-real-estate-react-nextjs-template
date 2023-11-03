import React from "react";

const professionalInfoData = [
  { label: "Broker address", content: "House on the Northridge" },
  { label: "Office", content: "(484) 524-3699" },
  { label: "Mobile", content: "(484) 524-7963" },
  { label: "Fax", content: "(484) 524-1023" },
  { label: "Websites", content: "www.realton.com" },
  { label: "Member since", content: "10-01-2022" },
];

const ProfessionalInfo = () => {
  return (
    <div className="widget-wrapper mb-0">
      <h6 className="title fz17 mb35">Professional Information</h6>
      {professionalInfoData.map((info, index) => (
        <div
          key={index}
          className="list-news-style d-flex align-items-center justify-content-between mb10"
        >
          <div className="flex-shrink-0">
            <h6 className="fz14 mb-0">{info.label}</h6>
          </div>
          <div className="news-content flex-shrink-1 ms-3 text-end">
            <p className="text mb-0 fz14">{info.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalInfo;
