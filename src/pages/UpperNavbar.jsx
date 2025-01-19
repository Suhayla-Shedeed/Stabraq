import React, { useState, useEffect, useContext } from "react";
import {
  Modal,
  Button,
  Form,
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { CartContext } from "../contexts/CartContext"; // Import CartContext

const UpperNavbar = () => {
  const [show, setShow] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(
    () => localStorage.getItem("loggedInUser") || ""
  );
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { cart } = useContext(CartContext);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const navigate = useNavigate();

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }

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
      return;
    }

    setErrors({});
    const emailPrefix = formData.email.split("@")[0];
    setLoggedInUser(emailPrefix);
    localStorage.setItem("loggedInUser", emailPrefix); // Save to local storage
    setShow(false);
    navigate("/home");
  };

  const handleLogout = () => {
    setLoggedInUser("");
    localStorage.removeItem("loggedInUser"); // Clear from local storage
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="/src/images/logo.png"
            alt="Logo"
            className="m-2"
            style={{ maxWidth: "120px", height: "auto" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/home">Home</Nav.Link>
            {loggedInUser ? (
              <>
                <Nav.Link href="/profile">{loggedInUser}</Nav.Link>
                <NavDropdown
                  title={<FontAwesomeIcon icon={faUser} />}
                  id="user-dropdown"
                  align="end"
                >
                  <NavDropdown.Item href="#Settings">Settings</NavDropdown.Item>
                  <NavDropdown.Item href="#About">About</NavDropdown.Item>
                  <NavDropdown.Item href="#Contact Us">Contact Us</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={handleLogout}
                    style={{ color: "red" }}
                  >
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <NavDropdown
                title={<FontAwesomeIcon icon={faUser} />}
                id="guest-dropdown"
                align="end"
              >
                <NavDropdown.Item href="#Settings">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#About">About</NavDropdown.Item>
                <NavDropdown.Item href="#Contact Us">Contact Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={handleShow}
                  style={{ color: "red" }}
                >
                  Login
                </NavDropdown.Item>
              </NavDropdown>
            )}
            <Nav.Link
              onClick={() => navigate("/mycart")}
              style={{ position: "relative" }}
            >
              <FontAwesomeIcon icon={faShoppingBag} size="lg" />
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "-5px",
                  backgroundColor: "orange",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                }}
              >
                {cart.length}
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
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default UpperNavbar;
