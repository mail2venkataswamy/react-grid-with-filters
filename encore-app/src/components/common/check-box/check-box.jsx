import React from "react";
import "./check-box.scss";

const CheckBox = (props) => {
  return (
    <>
      {props.checkboxData && props.checkboxData.length > 0 ? (
        <label>
          <input
            type="checkbox"
            onClick={props.onAllChecked}
            value="checkedall"
            checked={props.isAllChecked}
          ></input>
          All
        </label>
      ) : (
        ""
      )}
      <ul>
        <div className="listItemWrapper">
          {props.checkboxData.map((type, index) => {
            return (
              <div className={type.list}>
                <li>
                  <label>
                    <input
                      key={index}
                      onClick={props.onCheckbox}
                      type="checkbox"
                      checked={type.isChecked}
                      value={type.value}
                    />
                    {type.label}
                  </label>
                </li>
              </div>
            );
          })}{" "}
        </div>
      </ul>
    </>
  );
};

export default CheckBox;
