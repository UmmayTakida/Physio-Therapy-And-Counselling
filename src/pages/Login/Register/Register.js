import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Register = () => {
    return (
        <Container>
            <Form >
                <h1>Please Registation</h1>
                <Form.Group as={Row} className="mb-3 w-50" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 w-50" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <button type="submit">Sign in</button>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Register;