import React from "react";
import SelectBox from "../../common/simple-dropdown/dropdown.jsx";
import "../product-info/product-info.scss";

const Flagsstatus = () => {
  let selectClearedOptions = [
    {
      label: "Final - Large Difference Vs Vender",
      value: "Final - Large Difference Vs Vender",
    },
    {
      label: "Final - Large varience Vs previous",
      value: "Final - Large varience Vs previous",
    },
    {
      label: "Final - Missing or Zero Final Price",
      value: "Final - Missing or Zero Final Price",
    },
  ];
  let selectCrossMarginOptions = [
    {
      label: "Final - Large Difference Vs Vender",
      value: "Final - Large Difference Vs Vender",
    },
    {
      label: "Final - Large varience Vs previous",
      value: "Final - Large varience Vs previous",
    },
    {
      label: "Final - Missing or Zero Final Price",
      value: "Final - Missing or Zero Final Price",
    },
  ];

  return (
    <>
      <fieldset>
        <legend>Flags And status Filter</legend>

        <div className="labelAndFlaggedWrapper">
          <div className="flaggedEditwrapper">
            <div className="flaggedEditlabel">Flagged Edits:</div>
            <SelectBox
              type="single"
              selectOptions={selectClearedOptions}
            ></SelectBox>
          </div>
        </div>
        <div className="labelAndReviewNeededWrapper">
          <div className="wrapper">
            <div className="label">Review Needed:</div>
            <SelectBox
              type="single"
              selectOptions={selectCrossMarginOptions}
            ></SelectBox>
          </div>
          <div className="editedRecordsWrapper">
            <input id={"editedRecord"} type="checkbox"></input>
            <label>{"Edited Records"}</label>
          </div>
        </div>
      </fieldset>
    </>
  );
};
export default Flagsstatus;
