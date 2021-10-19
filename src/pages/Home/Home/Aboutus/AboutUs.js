import React from 'react';
import { Container } from 'react-bootstrap';
import aboutUsImg from './../../../../images/aboutus.png'
import './about.css'

const AboutUs = () => {
    return (
        <Container className="mb-5">
            <h2 className="my-5 text-center fs-1 fw-2 mb-5 header-color text-dark">About Us</h2>
            <div className="row row-cols-2 mt-5">
                <div className="col">
                    <h1>Say goodbye to the Problems and hello to freedom</h1>
                    <p className="about-details">Prevention is at the heart of what we do. Our knowledge, informed by rigorous research and practical based study, has been pioneering change. We aren’t afraid to challenge the status.
                        <br />

                        Whether you’re interested in mental health services or you provide them, you’ve come to the right place. Feel free to ask anything.</p>
                    <br />
                    <strong><ul><li>Best Psychology Medical In USA 2020</li></ul>
                        <ul><li>
                            Ranked Top 25 Psychology Of The Decade.</li></ul>
                        <ul><li>Honor Of Working With Fortune 500.</li></ul>
                        <ul><li>Honor Of Working With Neptune 1500.</li></ul>
                    </strong>
                </div>
                <div className="col">
                    <img src={aboutUsImg} alt="" />
                </div>

            </div>
        </Container>
    );
};

export default AboutUs;