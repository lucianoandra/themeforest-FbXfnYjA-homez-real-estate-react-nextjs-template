import React from "react";

const sellingBlockData = [
  {
    iconClass: "flaticon-security",
    title: "Property Management",
    text: "Lorem ipsum dolor sit amet elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    iconClass: "flaticon-keywording",
    title: "Mortgage Services",
    text: "Lorem ipsum dolor sit amet elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    iconClass: "flaticon-investment",
    title: "Currency Services",
    text: "Lorem ipsum dolor sit amet elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    iconClass: "flaticon-keywording",
    title: "Mortgage Services",
    text: "Lorem ipsum dolor sit amet elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

const SellingBlock = () => {
  return (
    <>
      {sellingBlockData.map((block, index) => (
        <div
          className={`col-sm-6 col-lg-5 ${
            index % 2 === 1 ? "offset-lg-1" : ""
          }`}
          key={index}
        >
          <div className="iconbox-home9 position-relative mb30">
            <span className={`text-white icon fz40 ${block.iconClass}`} />
            <h4 className="text-white iconbox-title mt20">{block.title}</h4>
            <p className="text-white text mb-0">{block.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SellingBlock;
