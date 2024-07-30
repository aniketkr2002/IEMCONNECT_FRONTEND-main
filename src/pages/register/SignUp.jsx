import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [formData, setFormData] = useState({
        userName: '',
        name: '',
        email: '',
        curryear: '',
        semester: '',
        phone: '',
        enrollment: '',
        branch: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [showSuccessBanner] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all fields are filled
        for (const key in formData) {
            if (!formData[key]) {
                setError('All fields are required');
                return;
            }
        }
        setError('');

        try {
            const response = await fetch('student/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept' : 'application/json'

                },
                body: JSON.stringify(formData)
            });

            if (response.status === 200) {
                localStorage.setItem('isSignedUn', true);
                setError('SignUp Successful . Please Login');
                    setFormData({
                        userName: '',
                        name: '',
                        email: '',
                        curryear: '',
                        semester: '',
                        phone: '',
                        enrollment: '',
                        branch: '',
                        password: ''
                    });
                    setTimeout(() => {
                        navigate('/login');
                      }, 3000);
              } else {
                let errorMessage = 'An error occurred.';
                try {
                  const errorData = await response.json(); // Attempt to parse JSON
                  errorMessage = errorData.message || errorMessage; // Use error message if available
                } catch (parseError) {
                  console.error('Failed to parse error response:', parseError);
                  // Handle parsing error (fallback message or logging)
                }
                setError(errorMessage);
              }
        } catch (error) {
            setError('An error occurred. Please try again later.');
            console.error('Error:', error);
        }
    };

    return (
        <Container fluid>
            <div className="row bg-dark text-light py-2">
                <div className="col">
                    <h3 className="ml-3">IEM Connect</h3>
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
                                <Form.Group controlId="userName">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="userName" value={formData.userName} onChange={handleChange} />
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
                                <Form.Group controlId="curryear">
                                    <Form.Label>Year</Form.Label>
                                    <Form.Control type="text" name="curryear" value={formData.curryear} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="semester">
                                    <Form.Label>Semester</Form.Label>
                                    <Form.Control as="select" name="semester" value={formData.semester} onChange={handleChange}>
                                        <option value="">Select Semester</option>
                                        <option value="1">Semester 1</option>
                                        <option value="2">Semester 2</option>
                                        <option value="3">Semester 3</option>
                                        <option value="4">Semester 4</option>
                                        <option value="5">Semester 5</option>
                                        <option value="6">Semester 6</option>
                                        <option value="7">Semester 7</option>
                                        <option value="8">Semester 8</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="enrollment">
                                    <Form.Label>Enrollment No.</Form.Label>
                                    <Form.Control type="text" name="enrollment" value={formData.enrollment} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="branch">
                                    <Form.Label>Branch</Form.Label>
                                    <Form.Control type="text" name="branch" value={formData.branch} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {showSuccessBanner && <Alert variant="success">Sign up successful! Redirecting to login page...</Alert>}
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Col>
                <div className="mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </Row>
        </Container>
    );
};

export default SignUp;
