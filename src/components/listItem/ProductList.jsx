import React, { useState } from 'react';
import './list.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';

const ProductList = ({ products }) => {
const [rowData, setRowData] = useState([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ]);
  return (
      <div
        className={
          "ag-theme-quartz"
        }
        style={{ width: '100%', height: '100%' }}
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    );
};

export default ProductList;
