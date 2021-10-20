
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const Login = () => {
    const { emailInput, pasInput, signInUsingGoogle, existingUser, error } = useAuth();
    return (


        <Container >
            <Form>
                <h1>Please Login</h1>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onBlur={emailInput}
                            type="email" placeholder="Email" />
                        <Form.Text className="text-muted">
                            <p>{error}</p>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Col>

                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onBlur={pasInput} type="password" placeholder="Password" />
                    </Col>


                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <button className="btn btn-primary btn-lg" onClick={existingUser} type="button">login</button>
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="New user" />
                        <Link to="/register">Create Account</Link>
                    </Col>
                </Form.Group>
                <div><h1>--Or</h1></div>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <button className="btn btn-primary btn-lg" onClick={signInUsingGoogle} type="button"> Google Sign in</button>
                    </Col>
                </Form.Group>
            </Form>

        </Container >
    );
};

export default Login;