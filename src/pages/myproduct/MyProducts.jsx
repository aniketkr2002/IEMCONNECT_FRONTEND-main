import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import NavBar from '../../components/navbar/Navbar';
import './myproduct.css';
const MyProduct = () => {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('product/get/user1');
            if (response.ok) {
                const data = await response.json();
                setRowData(data);
               
                console.log(data);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    

    const handleDeleteProduct = async (productId) => {
        
    };

    const columnDefs = [
        { headerName: 'ID', field: 'productId' },
        { headerName: 'Name', field: 'productName' },
        { headerName: 'Price', field: 'price' },
        { headerName: 'User', field: 'userName' },
        { headerName: 'Contact No', field: 'contactNo' },
        { headerName: 'Description', field: 'description' },
        {headerName: 'Images',field:'./images/laptop.webp'},
        { cellRendererFramework: (params) => (
            <div>
                <Button variant="danger" size="sm" onClick={() => handleDeleteProduct(params.data.productId)}>Delete</Button>
            </div>
        )}
    ];

    return (
        <div>
        <NavBar/>
        
        <Container className='mbg' fluid>
            
            <h2>Product List</h2>
            <div className="ag-theme-bootstrap" style={{ height: '400px', width: '100%' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={10}
                />
            </div>
            
        </Container>
        </div>
    );
};

export default MyProduct;
