import React from "react";
import "./mainscreen.scss";
import MaintenanceHeaders from "./maintenance-headers/maintenance-headers.jsx";
import Mainscreengrid from "./maintenance-grid/maintenance-grid.jsx";
const mainScreen = (props) => {
  return (
    <div className="maintenance">
      <div className="mainscreenTitleAndToggle">
        <div className="mainscreenHeaderTitle">Maintenance Screen</div>
      </div>
      <MaintenanceHeaders
        data={props.data}
        onClickPriceRollOverrideButton={props.onClickPriceRollOverrideButton}
        closePriceRollOverrideModal={props.closePriceRollOverrideModal}
        onSelectReview={props.onSelectReview}
        closeGridMustSelectedModal={props.closeGridMustSelectedModal}
      ></MaintenanceHeaders>
      <Mainscreengrid />
    </div>
  );
};

export default mainScreen;
