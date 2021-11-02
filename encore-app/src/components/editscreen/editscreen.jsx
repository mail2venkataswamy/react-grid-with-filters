import React from "react";

import "./editscreen.scss";
import Editdashboardgrid from "./edit-dashboard-grid/edit-dashboard-grid.jsx";

const Editscreen = (props) => {
  return (
    <div className="editDashboard">
      <div className="mainscreenTitleAndToggle">
        <div className="mainscreenHeaderTitle">Edit Category Dashboard</div>
      </div>
      <Editdashboardgrid />
    </div>
  );
};

export default Editscreen;
