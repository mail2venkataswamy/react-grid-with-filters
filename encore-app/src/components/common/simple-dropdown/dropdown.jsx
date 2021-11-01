import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const SimpleDropdown = (props) => {
  const options = [
    { value: "Historical", label: "Historical" },
    { value: "Current", label: "Current" },
  ];
  const defaultOption = options[0];

  return (
    <Dropdown
      options={options}
      onChange={props.onSelect}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
};

export default SimpleDropdown;
