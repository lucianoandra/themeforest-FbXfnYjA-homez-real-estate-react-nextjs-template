import Image from "next/image";
import React from "react";

const Office = () => {
  const offices = [
    {
      id: 1,
      city: "Paris",
      icon: "/images/icon/paris.svg",
      address: "1301 2nd Ave, Seattle, WA 98101",
      phoneNumber: "(315) 905-2321",
    },
    {
      id: 2,
      city: "London",
      icon: "/images/icon/london.svg",
      address: "1301 2nd Ave, Seattle, WA 98101",
      phoneNumber: "(315) 905-2321",
    },
    {
      id: 3,
      city: "New York",
      icon: "/images/icon/new-york.svg",
      address: "1301 2nd Ave, Seattle, WA 98101",
      phoneNumber: "(315) 905-2321",
    },
    // Add more office objects here...
  ];

  return (
    <>
      {offices.map((office) => (
        <div className="col-sm-6 col-lg-4" key={office.id}>
          <div className="iconbox-style8 text-center">
            <div className="icon">
              <Image width={120} height={120} src={office.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{office.city}</h4>
              <p className="text mb-1">{office.address}</p>
              <h6 className="mb10">{office.phoneNumber}</h6>
              <a className="text-decoration-underline" href="#">
                Open Google Map
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Office;
