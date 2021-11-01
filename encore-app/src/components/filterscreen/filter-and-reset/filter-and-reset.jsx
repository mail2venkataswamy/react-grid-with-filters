import React from "react";
import Buttonwrapper from "../../../../../Compositions/GlobalConfigurations/Commons/Button/ButtonWrapper.jsx";
import "./filter-and-reset.scss";

const filterAndReset = () => {
  return (
    <div className="filterAndResetButtonWrapper">
      <Buttonwrapper id="filter" label="Filter"></Buttonwrapper>

      <Buttonwrapper id="reset" label="Reset"></Buttonwrapper>
    </div>
  );
};

export default filterAndReset;
