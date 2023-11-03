import React from "react";

const services = [
  {
    icon: "flaticon-security",
    title: "Property Management",
    text: "Nullam sollicitudin blandit eros eu pretium.",
  },
  {
    icon: "flaticon-keywording",
    title: "Mortgage Services",
    text: "Nullam sollicitudin blandit eros eu pretium.",
  },
  {
    icon: "flaticon-investment",
    title: "Currency Services",
    text: "Nullam sollicitudin blandit eros eu pretium.",
  },
];

const Service = () => {
  return (
    <>
      {services.map((service, index) => (
        <div key={index} className="col-sm-6 col-lg-4">
          <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30">
            <span className={`icon fz40 ${service.icon}`} />
            <h4 className="iconbox-title mt20">{service.title}</h4>
            <p className="text mb-0">{service.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service;
