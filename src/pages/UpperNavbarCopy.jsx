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
// import { useTranslation } from "react-i18next";
// import "/src/i18n";
import { Modal, Card, Form, Button } from "react-bootstrap";


// import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";

const UpperNavbar = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   setIsLoading(true); // Show loading indicator

  //   if (!usernameOrEmail || !password) {
  //     setError("Please enter both username/email and password.");
  //     setIsLoading(false);
  //     return;
  //   }

  //   // try {
  //   //   const response = await fetch("http://127.0.0.1:8080/api/login/", {
  //   //     method: "POST",
  //   //     headers: {
  //   //       "Content-Type": "application/json",
  //   //     },
  //   //     body: JSON.stringify({
  //   //       username_or_email: usernameOrEmail,
  //   //       password: password,
  //   //     }),
  //   //   });

  //   //   const data = await response.json();
  //   //   setIsLoading(false);

  //   //   if (response.ok) {
  //   //     localStorage.setItem("token", data.token);
  //   //     navigate("/home");
  //   //   } else {
  //   //     setError(data.error || "Invalid login credentials.");
  //   //   }
  //   // } catch (error) {
  //   //   console.error("Error during login:", error);
  //   //   setError("Something went wrong. Please try again.");
  //   //   setIsLoading(false);
  //   // }
  // };

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const { t, i18n } = useTranslation();

  const goToHomePage = () => {
    navigate("/");
  };
  const goToRegPage = () => {
    navigate("/registeration");
  };
  const [counter, setCounter] = useState(0);
  const [cartCount, setCartCount] = useState(0);

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
              <FontAwesomeIcon icon={faUser} size="lg" onClick={handleShow} />
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

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>welcome</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="shadow-sm p-4">
            <Card.Body>
              <Form>
                <div>
                  {/* Email Input */}
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="email"
                      value={usernameOrEmail}
                      onChange={(e) => setUsernameOrEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  {/* Password Input */}
                  <Form.Group controlId="formBasicPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  {/* Error Message */}
                  {/* {error && <p className="text-danger text-center">{error}</p>} */}
                </div>
                {/* Login Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    variant="primary"
                    className="mt-3"
                    disabled={isLoading} // Disable button while loading
                  >
                    {isLoading ? "LoggingIn" : "enter"}
                  </Button>
                </div>
              </Form>
              <div className="mt-3 text-center" style={{ fontSize: "12px" }}>
                <a href="#forgot-password">f</a>
              </div>
              <div className="mt-2 text-center">
                <span style={{ fontSize: "12px" }}>
                  hd{" "}
                  <a
                    href="/registeration"
                    style={{ color: "#C10203", fontSize: "12px" }}
                  >
signUp                  </a>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Login</Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default UpperNavbar;
