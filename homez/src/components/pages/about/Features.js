const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      icon: "flaticon-security",
      title: "Property Management",
      description:
        "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
    },
    {
      icon: "flaticon-keywording",
      title: "Mortgage Services",
      description:
        "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
    },
    {
      icon: "flaticon-investment",
      title: "Currency Services",
      description:
        "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div className="list-one d-flex align-items-start mb30" key={index}>
          <span className={`list-icon flex-shrink-0 ${feature.icon}`} />
          <div className="list-content flex-grow-1 ml20">
            <h6 className="mb-1">{feature.title}</h6>
            <p className="text mb-0 fz15">{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
