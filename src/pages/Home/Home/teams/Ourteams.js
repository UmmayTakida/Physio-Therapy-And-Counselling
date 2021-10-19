import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Ourteams = () => {
    return (
        <Container className="px-3">
            <h2 className="my-5 text-center fs-1 fw-2 mb-5 header-color">Our Teams</h2>
            <div className="row row-cols-3 g-5 mb-5 mt-5 bg-light">
                <div className="col"><h3>Dr. Grim Goltsman</h3>
                    <p>Phychaistists</p>
                    <br />
                    <Link to="appoinment"><button className="btn btn-primary btn-lg">Do appoinment</button></Link> </div>
                <div className="col"><h3>Dr. Robert Jonathan</h3>
                    <p>Clinical Physology</p>
                    <br />
                    <Link to="appoinment"><button className="btn btn-primary btn-lg">Do appoinment</button></Link> </div>
                <div className="col"><h3>Dr. David Niklas</h3>
                    <p>Phychaistists</p>
                    <br />
                    <Link to="appoinment"><button className="btn btn-primary btn-lg">Do appoinment</button></Link> </div>


            </div>
            <div className="row row-cols-3 g-5 mb-5 mt-5 bg-light">
                <div className="col"><h3>Dr. Milton Hinricks</h3>
                    <p>Nurologists</p>
                    <br />
                    <Link to="appoinment"><button className="btn btn-primary btn-lg">Do appoinment</button></Link> </div>
                <div className="col"><h3>Dr. Metthew Wood</h3>
                    <p>Clinical Physology</p>
                    <br />
                    <Link to="appoinment"><button className="btn btn-primary btn-lg">Do appoinment</button></Link> </div>
                <div className="col"><h3>Dr. Cathy Jonathan</h3>
                    <p>Phychaistists</p>
                    <br />
                    <Link to="appoinment"><button className="btn btn-primary btn-lg">Do appoinment</button></Link> </div>


            </div>
        </Container >
    );
};

export default Ourteams;