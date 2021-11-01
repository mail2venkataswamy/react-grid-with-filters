import React from "react";
import Dropdown from "../../common/simple-dropdown/dropdown.jsx";
import "./activity-date-range.scss";
//import DatePicker from "react-date-picker";
import Datepicker from "../../common/datepicker/datepicker.jsx";
import ReactDatePicker from "react-datepicker";
import Daterangepicker from "../../common/date-range-picker/date-range-picker.jsx";

const ActivityDateRange = () => {
  let selectOptions = [
    { label: "CURRENT", value: "Current" },
    { label: "HISTORICAL", value: "Historical" },
  ];
  return (
    <fieldset>
      <legend>Activity Date Range </legend>
      <div className="activitydateRangeWrapper">
        <div className="labelAndHistCurrWrapper">
          <div className="wrapper">
            <div className="label">CURR/HIST</div>
            <div className="dropdownWrapper">
              <Dropdown></Dropdown>
            </div>
          </div>
          {/*</div>*/}
        </div>
        <div className="dateRangeWrapper">
          <Daterangepicker></Daterangepicker>
        </div>
      </div>
    </fieldset>
  );
};
export default ActivityDateRange;