import "./filterscontainer.css";
import SimpleDropdown from "./dropdown.jsx";

const FilterContainer = (props) => {
  return (
    <div className="filterContainer">
      <div className="header">Valued Selected Items</div>
      <div className="content">
        <div className="modelLabelAndDropdownWrapper">
          <div className="model">Model</div>
          <div className="dropdownWrapper">
            <SimpleDropdown onSelect={props.onSelect}></SimpleDropdown>
          </div>
        </div>
      </div>
      <div className="filterResetButtonWrapper">
        <button className="filterButton">Filter</button>

        <button className="resetButton">Reset</button>
      </div>
    </div>
  );
};

export default FilterContainer;
