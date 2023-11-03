import React from "react";

const FindHomeBlock = () => {
  const blocks = [
    {
      icon: "flaticon-search-1",
      number: "01",
      subtitle: "Search Your Dream Home",
      text: "Get ready to launch your real estate website without...",
    },
    {
      icon: "flaticon-chat",
      number: "02",
      subtitle: "Choose The House You Like",
      text: "Get ready to launch your real estate website without...",
    },
    {
      icon: "flaticon-bird-house",
      number: "03",
      subtitle: "Enquire About This Property",
      text: "Get ready to launch your real estate website without...",
    },
    {
      icon: "flaticon-house-1",
      number: "04",
      subtitle: "Own Your Home",
      text: "Get ready to launch your real estate website without...",
    },
  ];

  return (
    <>
      {blocks.map((block, index) => (
        <div className="col-sm-6" key={index}>
          <div className="iconbox-style6">
            <span className={`icon ${block.icon}`} />
            <h3 className="title mb-1">{block.number}</h3>
            <h6 className="subtitle">{block.subtitle}</h6>
            <p className="iconbox-text">{block.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FindHomeBlock;
