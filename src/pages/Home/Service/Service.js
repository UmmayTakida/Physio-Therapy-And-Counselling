import React, { useEffect, useState } from 'react';
import { Card, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GetAppoinment from '../../GetAppoinment/GetAppoinment';


const Service = ({ service }) => {

    const { id, name, details, img } = service;
    const [Details, setDetails] = useState({});
    useEffect(() => {
        fetch('data.JSON')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (

        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="card-body">
                        <Card.Title><h3>{name}</h3>
                        </Card.Title>
                        <Card.Text >
                            <p>{details.slice(0, 250)}</p>
                            <Link to={`/getappoinment/${id}`}>
                                <button className="btn btn-warning">more details
                                </button>
                            </Link>

                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>


        </div>

    );
};

export default Service;