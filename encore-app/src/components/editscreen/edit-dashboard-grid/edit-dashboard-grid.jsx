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
  { field: "ValuedSecurityEdits", width: "auto" },
  { field: "Intraday_Flagged_Records", width: "auto" },
  { field: "Intraday_Review_Needed", width: "auto" },
  { field: "Stock_Loan_Flagged_Records", width: "auto" },
  { field: "Stock_Loan_Review_Needed", width: "auto" },
  { field: "Final_Flagged_Records", width: "auto" },
  { field: "Final_Review_Needed", width: "auto" },
  { field: "Final_Primary_Review_Needed", width: "auto" },
  { field: "Final_Secondary_Review_Needed", width: "auto" },
  { field: "Stock_Loan_Primary_Review_Needed", width: "auto" },
  { field: "Stock_Loan_Secondary_Review_Needed", width: "auto" },
];
const defaultColDef = {
  initialWidth: "auto",
  sortable: true,
  resizable: true,
  filter: true,
  rowSelection: "multiple",
};

const Maintenancegrid = () => {
  return (
    <Aggrid
      rowData={rowData}
      colDefsMedalsIncluded={colDefsMedalsIncluded}
      defaultColDef={defaultColDef}
      gridHeight={200}
      gridWidth="auto"
      rowSelection="multiple"
    />
  );
};
export default Maintenancegrid;
