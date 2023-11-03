import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Popular Search",
      links: [
        { label: "Apartment for Rent", href: "#" },
        { label: "Apartment Low to Hide", href: "#" },
        { label: "Offices for Buy", href: "#" },
        { label: "Offices for Rent", href: "#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Terms of Use", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Pricing Plans", href: "#" },
        { label: "Our Services", href: "#" },
        { label: "Contact Support", href: "#" },
        { label: "Careers", href: "#" },
        { label: "FAQs", href: "#" },
      ],
    },
    {
      title: "Discover",
      links: [
        { label: "Miami", href: "#" },
        { label: "Los Angeles", href: "#" },
        { label: "Chicago", href: "#" },
        { label: "New York", href: "#" },
      ],
    },
  ];

  return (
    <>
      {menuSections.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 light-style at-home9 mb-3">
            <h6 className="mb25">{section.title}</h6>
            <div className="link-list">
              {section.links.map((link, linkIndex) => (
                <a href={link.href} key={linkIndex}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
