import React from "react";
import "./suggestions.scss";
const Suggestions = (props) => {
  const options =
    props.results &&
    props.results.map((suggestion, index) => {
      return <li key={index}>{suggestion.value}</li>;
    });
  return (
    options && (
      <div className="suggestionsWrapper">
        <ul>{options}</ul>
      </div>
    )
  );
};

export default Suggestions;
