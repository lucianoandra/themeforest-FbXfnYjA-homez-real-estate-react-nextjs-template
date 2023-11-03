import React from "react";

const activities = [
  {
    icon: "flaticon-home",
    text: "Your listing House on the Beverly Hills has been approved",
    highlight: "House on the Beverly Hills",
  },
  {
    icon: "flaticon-review",
    text: "Dollie Horton left a review on House on the Northridge",
    highlight: "House on the Northridge",
  },
  {
    icon: "flaticon-like",
    text: "Someone favorites your Triple Story House for Rent listing",
    highlight: "Triple Story House for Rent",
  },
  {
    icon: "flaticon-home",
    text: "Your listing House on the Beverly Hills has been approved",
    highlight: "House on the Beverly Hills",
  },
  {
    icon: "flaticon-review",
    text: "Dollie Horton left a review on House on the Northridge",
    highlight: "House on the Northridge",
  },
  {
    icon: "flaticon-like",
    text: "Someone favorites your Triple Story House for Rent listing",
    highlight: "Triple Story House for Rent",
  },
  {
    icon: "flaticon-home",
    text: "Your listing House on the Beverly Hills has been approved",
    highlight: "House on the Beverly Hills",
  },
];

const RecentActivities = () => {
  return (
    <>
      {activities.map((activity, index) => (
        <div
          key={index}
          className="recent-activity d-sm-flex align-items-center mb20"
        >
          <span className={`icon me-3 ${activity.icon} flex-shrink-0`} />
          <p className="text mb-0 flex-grow-1">
            {activity.text.split(activity.highlight).map((part, i, array) =>
              i === array.length - 1 ? (
                part
              ) : (
                <>
                  {part}
                  <span className="fw600">{activity.highlight}</span>
                </>
              )
            )}
          </p>
        </div>
      ))}
      <div className="d-grid">
        <a href="#" className="ud-btn btn-white2">
          View More
          <i className="fal fa-arrow-right-long" />
        </a>
      </div>
    </>
  );
};

export default RecentActivities;
