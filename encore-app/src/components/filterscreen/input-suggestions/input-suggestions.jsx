import React from "react";
import Suggestions from "../../common/suggestions/suggestions.jsx";
import "./input-suggestions.scss";
const InputSuggestion = (props) => {
  return (
    <div className="inputSuggestionWrapper">
      <input onChange={props.onChange}></input>
      <Suggestions results={props.results}></Suggestions>
    </div>
  );
};
export default InputSuggestion;
