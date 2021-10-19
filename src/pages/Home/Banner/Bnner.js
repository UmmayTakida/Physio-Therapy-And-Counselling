import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import banner1 from '../../../images/b1.jpg'
import banner2 from '../../../images/b2.jpg'
import banner3 from '../../../images/b3.jpg'
import banner4 from '../../../images/b4.jpg'

import './Banner.css'

const Bnner = () => {
    return (
        <Container className="banner-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="450px"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Physio therapy</h3>
                        <p>Individual counseling is a personal opportunity to receive support</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Counseling and therapy</h3>
                        <p>Family counseling is often sought due to a life change</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Phycological</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Counseling therapy</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </Container>
    );
};

export default Bnner;