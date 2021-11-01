import React, { useContext, useState } from "react";
import ButtonWrapper from "../../common/button/button.jsx";
import WarningModal from "../../common/modal/warning/warning-modal.jsx";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import Select from "../../common/select/select.jsx";
import "./maintenance-headers.scss";

const Maintenanceheaders = (props) => {
  return (
    <div className="maintenanceHeaders">
      <div className="wrapper">
        <div className="dataHeadersButtonWrapper">
          <ButtonWrapper id="threshold" label={"Threshold"}></ButtonWrapper>
          <ButtonWrapper
            id="supendRestart"
            label={"Supend/Restart Prices"}
          ></ButtonWrapper>
          <ButtonWrapper id="Publish" label={"Publish"}></ButtonWrapper>
          <ButtonWrapper
            id="PriceRollOverride"
            label={"Price Roll Override"}
            onClick={props.onClickPriceRollOverrideButton}
          ></ButtonWrapper>
          <Select id="review"></Select>
        </div>
        <div className="showColumnsPrintRefreshExportWrapper">
          <ButtonWrapper
            id="showAllColumns"
            label={"Show All Columns"}
          ></ButtonWrapper>
          <ButtonWrapper id="refresh" label={"Refresh"}></ButtonWrapper>
          <ButtonWrapper id="print" label={"Print"}></ButtonWrapper>
          <ButtonWrapper id="export" label={"Export"}></ButtonWrapper>
        </div>
      </div>

      <WarningModal
        isModalOpen={
          props.data.maintenanceScreenData.isPriceRollOverrideModalOpen
        }
        closeModal={props.closePriceRollOverrideModal}
        warningMessage={
          props.data.maintenanceScreenData.PriceRollOverrideMModalWarningMessage
        }
      ></WarningModal>
    </div>
  );
};

export default Maintenanceheaders;
