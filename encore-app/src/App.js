import React, { Component, useReducer } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Filterscreen from "./components/filterscreen/filterscreen.jsx";
import Mainscreen from "./components/mainscreen/mainscreen.jsx";
import Editscreen from "./components/editscreen/editscreen.jsx";
import PriceEditingContext from "./components/context/proce-editing-context.jsx";
import PriceEditingReducer from "./reducers/price-editing-reducer.jsx";
import { computeHeadingLevel } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maintenanceScreenData: {
        isPriceRollOverrideModalOpen: false,
        PriceRollOverrideMModalWarningMessage:
          "A record must be selected to perform this action",
      },
      editDashboardData: {},
      filterPanelData: {
        cuspinSearchValue: "",
        cuspinData: [
          { id: 1, value: "AA001200" },
          { id: 2, value: "AA001201" },
          { id: 3, value: "AA001202" },
          { id: 4, value: "AA001203" },
          { id: 5, value: "AB001204" },
          { id: 6, value: "BB001205" },
          { id: 7, value: "BA001206" },
          { id: 8, value: "CC001207" },
          { id: 9, value: "BC001208" },
          { id: 10, value: "CA001209" },
        ],
        cuspinSuggestionResult: [],
      },
    };
    this.onChangeCuspinValue = this.onChangeCuspinValue.bind(this);
  }
  onClickPriceRollOverrideButton = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isPriceRollOverrideModalOpen = !maintenanceScreenData.isPriceRollOverrideModalOpen;
    this.setState({
      maintenanceScreenData,
    });
  };
  closePriceRollOverrideModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isPriceRollOverrideModalOpen = !maintenanceScreenData.isPriceRollOverrideModalOpen;
    this.setState({
      maintenanceScreenData,
    });
  };
  onChangeCuspinValue(e) {
    let data = this.state.filterPanelData.cuspinData;
    let filterPanelData = this.state.filterPanelData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    filterPanelData.cuspinSuggestionResult = result;
    this.setState({
      filterPanelData,
    });
  }
  render() {
    let data = this.state;
    return (
      <div className="mainVS">
        <Filterscreen
          onChangeCuspinValue={(e) => this.onChangeCuspinValue(e)}
          data={this.state}
        />
        <div className="mainEdit">
          <Mainscreen
            data={data}
            onClickPriceRollOverrideButton={this.onClickPriceRollOverrideButton}
            closePriceRollOverrideModal={this.closePriceRollOverrideModal}
          ></Mainscreen>
          <Editscreen />
        </div>
      </div>
    );
  }
}

export default App;