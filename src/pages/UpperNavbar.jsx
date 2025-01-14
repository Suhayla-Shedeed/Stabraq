import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpperNavbar = () => {
    return (
        <Navbar bg="light" style={{height:"40px"}}>
            <Container>
                {/* Logo */}
                <Navbar.Brand href="#home" style={{ color: 'limegreen', fontWeight: 'bold', fontSize: '24px' , marginLeft:"0px"}}>
                    stabraq
                </Navbar.Brand>

                {/* Toggler for mobile view */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navigation Links */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#men">MEN</Nav.Link>
                        <Nav.Link href="#women">WOMEN</Nav.Link>
                        <Nav.Link href="#kids">KIDS</Nav.Link>
                        <Nav.Link href="#accessories">ACCESSORIES</Nav.Link>
                        <Nav.Link href="#clearance" style={{ color: 'red' }}>CLEARANCE</Nav.Link>
                    </Nav>

                    {/* Language and Currency Dropdown */}
                    <Nav className='ms-auto'>
                        <NavDropdown title="EN / EGP" id="basic-nav-dropdown" align="end">
                            <NavDropdown.Item href="#english">English</NavDropdown.Item>
                            <NavDropdown.Item href="#arabic">Arabic</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#currency">Change Currency</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default UpperNavbar;
