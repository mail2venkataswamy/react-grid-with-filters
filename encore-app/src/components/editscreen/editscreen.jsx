import React from "react";

import "./editscreen.scss";
import Editdashboardgrid from "./edit-dashboard-grid/edit-dashboard-grid.jsx";

const Editscreen = (props) => {
  return (
    <div className="editDashboard">
      <Editdashboardgrid />
    </div>
  );
};

export default Editscreen;
