import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import Registeration from "./Registeration";

const UpperNavbar = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/HomePage");
  };
  const goToRegPage = () => {
    navigate("/registeration");
  };
  const [counter, setCounter] = useState(0);
  // Function to increment the counter
  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <Navbar bg="light" style={{ height: "50px" }}>
      <Navbar.Brand href="#home">
        <img
          src="/src/images/logo.png"
          alt="Logo"
          className="m-2"
          style={{ maxWidth: "150px", height: "auto" }}
          onClick={goToHomePage}
        />
      </Navbar.Brand>
      <Container>
        {/* Logo at the start */}

        {/* Toggler for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className=" ms-auto"
            style={{ fontSize: "13px", fontWeight: "700" }}
          >
            <Nav.Link href="https://stabraq.com/collections/men">MEN</Nav.Link>
            <Nav.Link href="#women">WOMEN</Nav.Link>
            <Nav.Link href="#kids">KIDS</Nav.Link>
            <Nav.Link href="#accessories">ACCESSORIES</Nav.Link>
            <Nav.Link href="#clearance" style={{ color: "red" }}>
              CLEARANCE
            </Nav.Link>
          </Nav>

          {/* Language and Currency Dropdown at the end */}
          <Nav className="ms-auto">
            <NavDropdown title="EN / EGP" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item href="#english">English</NavDropdown.Item>
              <NavDropdown.Item href="#arabic">Arabic</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#currency" style={{ color: "red" }}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>

            {/* Icons Section */}
            <Nav.Link href="#profile">
              <FontAwesomeIcon icon={faUser} size="lg" onClick={goToRegPage}/>
            </Nav.Link>
            <Nav.Link href="#favorites">
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </Nav.Link>
            <Nav.Link href="#cart" style={{ position: "relative" }}>
              <FontAwesomeIcon icon={faShoppingBag} size="lg" />
              {/* Cart badge */}
              <span
                style={{
                  position: "absolute",
                  //   top: "-5px",
                  right: "-10px",
                  backgroundColor: "orange",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                }}
              >
                0
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UpperNavbar;
