import React from "react";

const ContactMeta = () => {
  const contactInfoData = [
    {
      text: "Address",
      info: "329 Queensberry Street, North Melbourne VIC 3051, Australia.",
      link: "#", // Empty link value for the first object
    },
    {
      text: "Total Free Customer Care",
      info: "+(0) 123 050 945 02",
      link: "tel:+012305094502",
    },
    {
      text: "Need Live Support?",
      info: "hi@homez.com",
      link: "mailto:hi@homez.com",
    },
  ];

  return (
    <div className="row mb-4 mb-lg-5">
      {contactInfoData.map((contact, index) => (
        <div className="contact-info mb25" key={index}>
          <p className="info-title mb5">{contact.text}</p>
          {contact.link.startsWith("mailto:") ? (
            <h6 className="info-mail">
              <a href={contact.link}>{contact.info}</a>
            </h6>
          ) : (
            <h6 className="info-phone">
              <a href={contact.link}>{contact.info}</a>
            </h6>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
