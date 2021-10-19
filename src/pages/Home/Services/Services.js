import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <Container>
            <h2 id="services" className=" mt-5 text-center fs-1 fw-2 mb-5 header-color">Our Therapy services</h2>
            <div >
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div>

        </Container>
    );
};

export default Services;