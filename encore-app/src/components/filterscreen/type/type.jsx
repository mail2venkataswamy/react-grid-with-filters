import React from "react";
import "./type.scss";

const Typefilter = (props) => {
  return (
    <div className="typeWrapper">
      {props.typeData.map((type, index) => {
        return (
          <div className={type.value}>
            <input id={type.value} type="checkbox"></input>
            <label>{type.label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Typefilter;
