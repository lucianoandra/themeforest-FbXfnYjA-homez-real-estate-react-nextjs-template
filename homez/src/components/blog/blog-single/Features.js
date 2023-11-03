import React from "react";

const featuresData = [
  {
    points: [
      "Become a UI/UX designer.",
      "You will be able to start earning money Figma skills.",
      "Build a UI project from beginning to end.",
      "Work with colors & fonts.",
      "You will create your own UI Kit.",
    ],
  },
  {
    points: [
      "Build & test a complete mobile app.",
      "Learn to design mobile apps & websites.",
      "Design 3 different logos.",
      "Create low-fidelity wireframe.",
      "Downloadable exercise files.",
    ],
  },
];

const Features = () => {
  return (
    <>
      {featuresData.map((featureSection, index) => (
        <div className="col-auto" key={index}>
          <div className="ui-content">
            <div className="list-style1">
              <ul>
                {featureSection.points.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    <i className="far fa-check text-thm3 bgc-thm3-light" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
