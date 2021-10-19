import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    //fetched usefirebase data by useAuth
    const {user,logOut} = useAuth()
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
                        {user.email && <span
                            style={{ color: 'dark' }}
                        > Hello  {user.displayName}</span>}
                        {
                            user.email && <button onClick={logOut} type="button" class="btn btn-danger m-2">Log Out</button>
                        }
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;