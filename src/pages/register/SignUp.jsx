import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        email: '',
        semester: '',
        phone: '',
        enrollmentNo: '',
        branch: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [showSuccessBanner, setShowSuccessBanner] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        for (const key in formData) {
            if (!formData[key]) {
                setError('All fields are required');
                return;
            }
        }


        setError('');
        setShowSuccessBanner(true);
    };

    return (
        <Container fluid>
        <div className="row bg-dark text-light py-2">
                <div className="col">
                  <h3 className="ml-3">Student Connect</h3>
                </div>
              </div>

            <Row>
             <div className="col-md-6 d-none d-md-block">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="student" className="img-fluid" />
                    </div>
                <Col md={6} className="signup-form">
                    <h2>Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="semester">
                                    <Form.Label>Semester</Form.Label>
                                    <Form.Control as="select" name="semester" value={formData.semester} onChange={handleChange}>
                                        <option value="">Select Semester</option>
                                        <option value="1">Semester 1</option>
                                        <option value="2">Semester 2</option>
                                        {/* Add more options as needed */}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="enrollmentNo">
                                    <Form.Label>Enrollment No.</Form.Label>
                                    <Form.Control type="text" name="enrollmentNo" value={formData.enrollmentNo} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="branch">
                                    <Form.Label>Branch</Form.Label>
                                    <Form.Control type="text" name="branch" value={formData.branch} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                    {showSuccessBanner && <Alert variant="success">Sign up successful! Redirecting to login page...</Alert>}
                </Col>
                <div className="mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                  </div>
            </Row>
        </Container>
    );
};

export default SignUp;
