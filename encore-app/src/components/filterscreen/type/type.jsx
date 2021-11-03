import React from "react";
import "./type.scss";

const Typefilter = (props) => {
  let typeData = [
    { label: "All", value: "All" },
    { label: "Common Stock", value: "commonStock" },
    { label: "Preffered Stock", value: "prefferedStock" },
    { label: "Index", value: "index" },
    { label: "Corporate Debt", value: "corporateDebt" },
    { label: "FMS", value: "fms" },
  ];

  return (
    <div className="rTable">
      <div className="rTableRow">
        <div className="rTableCell">
          <label>
            {" "}
            <input className="checkbox" type="checkbox"></input>
            All
          </label>
        </div>
      </div>
      <div className="rTableRow">
        <div className="rTableCell">
          <label>
            <input
              className="checkbox"
              type="checkbox"
              value="Commonstock"
            ></input>
            Common Stock
          </label>
        </div>
        <div className="rTableCell">
          <label>
            <input
              className="checkbox"
              type="checkbox"
              value="preferredStock"
            ></input>
            Preffered Stock
          </label>
        </div>
      </div>
      <div className="rTableRow">
        <div className="rTableCell">
          <label>
            <input className="checkbox" type="checkbox" value="index"></input>
            Index
          </label>
        </div>
        <div className="rTableCell">
          <label>
            <input
              className="checkbox"
              type="checkbox"
              value="Corporatedebt"
            ></input>
            Corporate Debt
          </label>
        </div>
      </div>
      <div className="rTableRow">
        <div className="rTableCell">
          <label>
            <input className="checkbox" type="checkbox" value="fms"></input>
            FMS
          </label>
        </div>
      </div>
    </div>
  );
};

export default Typefilter;
