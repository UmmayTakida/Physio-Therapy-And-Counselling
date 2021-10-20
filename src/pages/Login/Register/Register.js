import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { emailInput, passInput, registerButton, regError } = useAuth();
    return (
        <Container>
            <Form >
                <h1>Please Registation</h1>
                <Form.Group as={Row} className="mb-3 w-50" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onBlur={emailInput} type="email" placeholder="Email" />
                        <Form.Text className="text-muted" >
                            <p>{regError}</p>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 w-50" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onBlur={passInput} type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <button className="btn btn-primary btn-lg" onClick={registerButton} type="button">Sign up</button>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Register;