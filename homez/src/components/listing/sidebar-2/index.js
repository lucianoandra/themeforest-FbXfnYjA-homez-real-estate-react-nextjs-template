import React from "react";
import TrendingProperty from "./TrendingProperty";
import RecentProperty from "./RecentProperty";

const ListingSidebar2 = () => {
  return (
    <div className="list-sidebar-style1">
      <div className="widget-wrapper">
        <h6 className="list-title">Property Trending</h6>
        <TrendingProperty />
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Recent Property</h6>
        <RecentProperty />
      </div>
    </div>
  );
};

export default ListingSidebar2;
