import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar/Navbar';
import './AddProd.css';
const AddProduct = () => {
  const [productData, setProductData] = useState({
    userName: '',
    contactNo: '',
    productName: '',
    description: '',
    price: '',
    images: null,
  });
  const [error, setError] = useState('');
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    // Implement image handling logic here
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    for (const key in productData) {
      if (!productData[key]) {
        setError('All fields are required');
        return;
      }
    }
    setError('');

    try {
      const response = await fetch('product/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.status === 200) {
        setShowSuccessBanner(true);
        setProductData({
          userName: '',
          contactNo: '',
          productName: '',
          description: '',
          price: '',
          images: null,
        });
        setTimeout(() => {
          setShowSuccessBanner(false);
          navigate('/home');
        }, 3000);
      } else {
        let errorMessage = 'An error occurred.';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (parseError) {
          console.error('Failed to parse error response:', parseError);
        }
        setError(errorMessage);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
        <NavBar/>
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Add Product</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="userName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="userName" value={productData.userName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="contactNo">
              <Form.Label>Contact No.</Form.Label>
              <Form.Control type="text" name="contactNo" value={productData.contactNo} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" name="productName" value={productData.productName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={productData.description} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name="price" value={productData.price} onChange={handleChange} required />
            </Form.Group>
            { <Form.Group controlId="images">
              <Form.Label>Images</Form.Label>
              <Form.Control type="images" name="images" onChange={handleChange} required value={null} />
            </Form.Group> }
            <Button variant="primary" type="submit">
              Add Product
            </Button>
          </Form>
          {error && <Alert variant="danger">{error}</Alert>}
          {showSuccessBanner && <Alert variant="success">Product added successfully!</Alert>}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default AddProduct;
