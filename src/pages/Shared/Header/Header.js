import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (


        <>
            <Navbar className="p-4" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="head-title" href="#home">Physio Therapy and Counseling</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end fs-4 fw-2 nav-link">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/counseling">Counseling</Nav.Link>
                        <Nav.Link as={Link} to="/appoinment">Appoinment</Nav.Link>

                        {user?.email ?
                            <button onClick={logOut} variant="light">Logout</button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>



    );
};

export default Header;