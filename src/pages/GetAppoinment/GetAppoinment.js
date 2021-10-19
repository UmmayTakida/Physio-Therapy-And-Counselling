import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const GetAppoinment = () => {
    return (
        <div class="container">
            <div className="row row-cols-2 mt-5">
                <div className="col">
                    <h2>Get details about Therapy and Counseling</h2>
                </div>
                <div className="col"><p>Smile Pure always places patients at the center of our attention, and concentrate on imprd of technologies skill.</p></div>

            </div>
            <div className="row row-cols-3 g-5 mb-5 mt-5 bg-light">
                <div className="col"><h3>Office Location</h3>
                    <p>456 King Street Melbourne Mizard
                        <br />
                        396789 New Jersey USA</p></div>
                <div className="col"><h3>Contact Details</h3>
                    <p>Call Us: +123-456-7890
                        <br />
                        Mail us: info@example.com</p></div>
                <div className="col"><h3>Opening Hours</h3>
                    <p>Monday – Saturday <br />
                        10:30 AM – 7:00 PM</p></div>

            </div>
            <div className="my-5">
                <h2>Fill out for Contact</h2>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>PHone</Form.Label>
                            <Form.Control type="phone" placeholder="Phone" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Your address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Your Messeges</Form.Label>
                        <Form.Control placeholder="Your Message" />
                    </Form.Group>

                    <button className="btn btn-primary btn-lg" variant="primary" type="submit">
                        Submit
                    </button>
                </Form>
            </div>
        </div>
    )
};

export default GetAppoinment;
