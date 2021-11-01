import React from "react";
import Tierlevel from "../tier-level/tier-level.jsx";
import "./product-info.scss";
import Typefilter from "../type/type.jsx";
import InputWrapper from "../../common/input-wrapper/input-wrapper.jsx";
import InputSuggestions from "../input-suggestions/input-suggestions.jsx";

const Productinfo = (props) => {
  let tierLevelData = [
    { label: "All", value: "All" },
    { label: "1", value: "one" },
    { label: "2", value: "two" },
    { label: "3", value: "three" },
    { label: "4", value: "four" },
  ];
  let typeData = [
    { label: "All", value: "All" },
    { label: "Common Stock", value: "commonStock" },
    { label: "Preffered Stock", value: "prefferedStock" },
    { label: "Index", value: "index" },
    { label: "Corporate Debt", value: "corporateDebt" },
    { label: "FMS", value: "fms" },
  ];

  return (
    <div className="prodcutInfoWrapper">
      <fieldset>
        <legend>Product Info Filter</legend>
        <div className="cuspinLabelAndInputWrapper">
          <div className="cuspinLabel">Cusip:</div>
          <div className="cuspinInputWrapper">
            {/*  <InputWrapper onChange={props.onChangeCuspinValue}></InputWrapper> */}
            <InputSuggestions
              onChange={props.onChangeCuspinValue}
              results={props.data.filterPanelData.cuspinSuggestionResult}
            ></InputSuggestions>
          </div>
        </div>
        <div className="tierLabelAndValue">
          <div className="label">Tier:</div>
          <Tierlevel tierLevelData={tierLevelData}></Tierlevel>
        </div>
        <div className="typeLabelAndValue">
          <div className="label">Type:</div>
          <Typefilter typeData={typeData}></Typefilter>
        </div>
      </fieldset>
    </div>
  );
};
export default Productinfo;
