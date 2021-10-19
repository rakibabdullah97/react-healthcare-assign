import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="warning" sticky="top" variant="light">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home">Atrium Health Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#needADoc">Need A Doc</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#news">News</Nav.Link>
                        <button type="button" class="btn btn-danger m-2">Log Out</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;