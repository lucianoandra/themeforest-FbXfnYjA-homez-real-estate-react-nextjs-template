import React from "react";

const AppWidget = () => {
  const appList = [
    {
      icon: "fab fa-apple fz30 text-white",
      text: "Download on the",
      title: "Apple Store",
      link: "#",
    },
    {
      icon: "fab fa-google-play fz30 text-white",
      text: "Get it on",
      title: "Google Play",
      link: "#",
    },
  ];

  return (
    <div className="app-widget at-home6">
      <div className="row d-flex align-items-center">
        {appList.map((app, index) => (
          <div className="col-auto" key={index}>
            <a href={app.link} target="_blank" rel="noopener noreferrer">
              <div className="app-info mb-1 light-style d-flex align-items-center">
                <div className="flex-shrink-0">
                  <i className={app.icon} />
                </div>
                <div className="flex-grow-1">
                  <p className="app-text fz13 mb0">{app.text}</p>
                  <h6 className="app-title mb-0 text-white fz15">
                    {app.title}
                  </h6>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppWidget;
