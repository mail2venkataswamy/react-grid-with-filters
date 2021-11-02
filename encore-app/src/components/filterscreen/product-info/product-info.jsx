import React from "react";
import Tierlevel from "../tier-level/tier-level.jsx";
import "./product-info.scss";
import Typefilter from "../type/type.jsx";
import InputSuggestions from "../input-suggestions/input-suggestions.jsx";
import SelectBox from "../../common/simple-dropdown/dropdown.jsx";

const Productinfo = (props) => {
  let selectClearedOptions = [
    { label: "BOTH", value: "ClearedAndNonCleared" },
    { label: "Cleared", value: "Cleared" },
    { label: "Non Cleared", value: "Non Cleared" },
  ];
  let selectCrossMarginOptions = [
    { label: "BOTH", value: "CrossMarginAndNonCrossMragin" },
    { label: "Cross Margin Eligible", value: "CrossMargin" },
    { label: "Non Cross Margin Eligible", value: "NonCrossMargin" },
  ];
  let selectCurrencyOptions = [
    { label: "ALL", value: "All" },
    { label: "USD", value: "USD" },
    { label: "AUD", value: "Aud" },
    { label: "CAD", value: "Cad" },
  ];
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
          <div className="isinLabelAndInputWrapper">
            <div className="isinLabel">ISIN:</div>
            <div className="isinInputWrapper">
              <InputSuggestions
                onChange={() => {}}
                results={[]}
              ></InputSuggestions>
            </div>
          </div>
          <div className="occSymbolLabelAndInputWrapper">
            <div className="occSymbolLabel">OCC Symbol:</div>
            <div className="occSymbolInputWrapper">
              <InputSuggestions
                onChange={() => {}}
                results={[]}
              ></InputSuggestions>
            </div>
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
        <div className="labelAndClearedWrapper">
          <div className="Clearedwrapper">
            <div className="Clearedlabel">Cleared:</div>
            <SelectBox type="single" options={selectClearedOptions}></SelectBox>
          </div>
        </div>
        <div className="labelAndCrossMarginWrapper">
          <div className="wrapper">
            <div className="label">Cross Margin Eligible:</div>
            <SelectBox
              type="single"
              options={selectCrossMarginOptions}
            ></SelectBox>
          </div>
        </div>
        <div className="labelAndCurrencyWrapper">
          <div className="wrapper">
            <div className="label">Currency:</div>
            <SelectBox
              type="single"
              options={selectCurrencyOptions}
            ></SelectBox>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
export default Productinfo;
