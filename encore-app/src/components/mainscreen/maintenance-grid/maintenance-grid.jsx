import React from "react";
import Aggrid from "../../common/ag-grid/ag-grid.jsx";

import "../../../styles/base/_base.scss";
import "./maintenance-grid.scss";

class Maintenancegrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupParent: document.body,
      colDefsMedalsIncluded: [
        {
          width: 60,
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          checkboxSelection: true,
        },
        { field: "#", width: 60 },
        { field: "cuspin", width: 100 },
        { field: "tier", width: 100 },
        { field: "type", width: 100 },
        { field: "currency", width: 150 },
        { field: "thomson_price", width: 160 },
        { field: "bloomberg_price", width: 170 },
        { field: "bloomberg_price", width: 170 },
        { field: "exchange_price", width: 200 },
        { field: "previous_price", width: 200 },
        { field: "final_price", width: 200 },
        { field: "final_price_end_date", width: 200 },
      ],
      defaultColDef: {
        initialWidth: "auto",
        sortable: true,
        resizable: true,
        filter: true,
        //headerCheckboxSelection: isFirstColumn,
        // checkboxSelection: isFirstColumn,
        rowSelection: "multiple",
        editable: true,
      },
      rowData: [
        {
          "#": "",
          cuspin: "test",
          tier: 1,
          type: 1,
          currency: "USA",
          thomson_price: 11,
          bloomberg_price: 1234,
          ice_price: 123,
          exchange_price: 23,
          previous_price: 33,
          final_price: 55,
          final_price_end_date: "",
        },
        {
          "#": "",
          cuspin: "test1",
          tier: 1,
          type: 1,
          currency: "USA",
          thomson_price: 11,
          bloomberg_price: 11,
          ice_price: 898,
          exchange_price: 446,
          previous_price: 676,
          final_price: 55,
          final_price_end_date: "",
        },
        {
          "#": "",
          cuspin: "test2",
          tier: 1,
          type: 1,
          currency: "USA",
          thomson_price: 99,
          bloomberg_price: 1111,
          ice_price: 445,
          exchange_price: 2653,
          previous_price: 3365,
          final_price: 56565,
          final_price_end_date: "",
        },
      ],
    };
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  onBtnExport = () => {
    this.gridApi.exportDataAsCsv();
  };

  render() {
    return (
      <>
        <button onClick={() => this.onBtnExport()}>
          Download CSV export file
        </button>
        <Aggrid
          rowData={this.state.rowData}
          colDefsMedalsIncluded={this.state.colDefsMedalsIncluded}
          defaultColDef={this.state.defaultColDef}
          gridHeight={500}
          gridWidth="auto"
          suppressRowClickSelection={true}
          rowSelection="multiple"
          pagination={true}
          enableRangeSelection={true}
          onGridReady={this.onGridReady}
          popupParent={this.state.popupParent}
          suppressExcelExport={true}
        />
      </>
    );
  }
}
export default Maintenancegrid;
