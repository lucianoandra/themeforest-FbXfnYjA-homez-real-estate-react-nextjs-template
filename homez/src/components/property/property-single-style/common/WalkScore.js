import React from "react";

const WalkScore = () => {
  const scores = [
    {
      icon: "flaticon-walking",
      type: "Walk Score",
      score: "57",
      description: "Somewhat Walkable",
    },
    {
      icon: "flaticon-bus",
      type: "Transit Score",
      score: "27",
      description: "Some Transit",
    },
    {
      icon: "flaticon-bike",
      type: "Bike Score",
      score: "45",
      description: "Somewhat Bikeable",
    },
  ];

  return (
    <>
      {scores.map((score, index) => (
        <div
          key={index}
          className={`walkscore d-sm-flex align-items-center ${
            index < 2 ? "mb20" : ""
          }`}
        >
          <span className={`icon mr15 mb10-sm ${score.icon}`} />
          <div className="details">
            <p className="dark-color fw600 mb-2">{score.type}</p>
            <p className="text mb-0">{`${score.score} / 100 (${score.description})`}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default WalkScore;
