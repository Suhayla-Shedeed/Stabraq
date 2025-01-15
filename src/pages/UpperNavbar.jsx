import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
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
import { useTranslation } from "react-i18next";

const UpperNavbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const navigate = useNavigate();
  const goToLandingPage = () => {
    navigate("/");
  };


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Validation functions
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must be at least 8 characters, include one uppercase letter, one digit, and one special character.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Data Submitted:", formData);
      alert("Log In Successfully!");
      setShow(false); 
      navigate("/home");
    }
  };

  return (
    <Navbar bg="light" style={{ height: "50px" }}>
      <Navbar.Brand href="#home">
        <img
          src="/src/images/logo.png"
          alt="Logo"
          className="m-2"
          style={{ maxWidth: "150px", height: "auto" }}
          onClick={goToLandingPage}
        />
      </Navbar.Brand>
      <Container>
        {/* Logo at the start */}


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
              About Us
            </Nav.Link>
          </Nav>

          {/* Language and Currency Dropdown at the end */}
          <Nav className="ms-auto">
            <NavDropdown title="EN / EGP" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item href="#english">English</NavDropdown.Item>
              <NavDropdown.Item href="#arabic">Arabic</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" style={{ color: "red" }}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>

            {/* Icons Section */}
            <Nav.Link>
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                variant="primary"
                onClick={handleShow}
              />
            </Nav.Link>

            <Nav.Link href="#cart" style={{ position: "relative" }}>
              <FontAwesomeIcon icon={faShoppingBag} size="lg" />
              {/* Cart badge */}
              <span
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "-7px",
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
      {/* Login Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Sign Up Link */}
            <div className="mt-1 mb-2">
              <span style={{ fontSize: "12px" }}>
                Don't have an account?{" "}
                <a
                  href="/registeration"
                  style={{ color: "#C10203", fontSize: "12px" }}
                >
                  Sign Up
                </a>
              </span>
            </div>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default UpperNavbar;
