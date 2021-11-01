import React from "react";
import Aggrid from "../../ag-grid/ag-grid.jsx";
const rowData = [
  {
    "#": "",
    cuspin: "test",
    tier: "test",
    type: 1,
    currency: "USA",
    thomson_price: "",
    bloomberg_price: "",
    ice_price: "",
    exchange_price: "",
    previous_price: "",
    final_price: "",
    final_price_end_date: "",
  },
  {
    "#": "",
    cuspin: "test",
    tier: "test",
    type: 1,
    currency: "USA",
    thomson_price: "",
    bloomberg_price: "",
    ice_price: "",
    exchange_price: "",
    previous_price: "",
    final_price: "",
    final_price_end_date: "",
  },
  {
    "#": "",
    cuspin: "test",
    tier: "test",
    type: 35000,
    currency: "USA",
    thomson_price: "",
    bloomberg_price: "",
    ice_price: "",
    exchange_price: "",
    previous_price: "",
    final_price: "",
    final_price_end_date: "",
  },
];
const colDefsMedalsIncluded = [
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
];
const defaultColDef = {
  initialWidth: "auto",
  sortable: true,
  resizable: true,
  filter: true,
  //headerCheckboxSelection: isFirstColumn,
  // checkboxSelection: isFirstColumn,
  rowSelection: "multiple",
};

const Maintenancegrid = () => {
  return (
    <Aggrid
      rowData={rowData}
      colDefsMedalsIncluded={colDefsMedalsIncluded}
      defaultColDef={defaultColDef}
      gridHeight={350}
      gridWidth="auto"
      suppressRowClickSelection={true}
      rowSelection="multiple"
    />
  );
};
export default Maintenancegrid;
