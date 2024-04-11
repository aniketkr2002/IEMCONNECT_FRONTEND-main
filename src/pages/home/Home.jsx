import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';

const HomePage = () => {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // Call API to fetch product data
        try {
            const response = await fetch('product/get/{userName}');
            if (response.ok) {
                const data = await response.json();
                setRowData(data);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAddProduct = async () => {
        // Call backend API to add product
        // Example code:
        // const response = await fetch('api/products', {
        //     method: 'POST',
        //     body: JSON.stringify(newProductData),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        // if (response.ok) {
        //     fetchData();
        // } else {
        //     console.error('Failed to add product');
        // }
    };

    const handleDeleteProduct = async (productId) => {
        // Call backend API to delete product
        // Example code:
        // const response = await fetch(`api/products/${productId}`, {
        //     method: 'DELETE'
        // });
        // if (response.ok) {
        //     fetchData();
        // } else {
        //     console.error('Failed to delete product');
        // }
    };

    const columnDefs = [
        { headerName: 'ID', field: 'id' },
        { headerName: 'Name', field: 'name' },
        { headerName: 'Price', field: 'price' },
        { headerName: 'Actions', cellRendererFramework: (params) => (
            <div>
                <Button variant="danger" size="sm" onClick={() => handleDeleteProduct(params.data.id)}>Delete</Button>
            </div>
        )}
    ];

    return (
        <Container fluid>
            <h2>Product List</h2>
            <div className="ag-theme-bootstrap" style={{ height: '400px', width: '100%' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={10}
                />
            </div>
            <Button variant="primary" onClick={handleAddProduct}>Add Product</Button>
        </Container>
    );
};

export default HomePage;
