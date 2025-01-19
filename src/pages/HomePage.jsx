import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Spinner, Alert, Collapse } from "react-bootstrap"; // Import Collapse
import Item from "./Item";
import UpperNavbar from "./UpperNavbar";
import ModernCarousel from "./ModernCarousel";
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion
import { CartContext } from "../contexts/CartContext"; // Import CartContext
import Accordion from "./Accordion";
import { BsChevronDown, BsChevronUp } from "react-icons/bs"; // Import arrow icons

function HomePage() {
  const { cart, setCart } = useContext(CartContext); // Access cart and setCart from context
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false); // State to control the collapse of the section

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products", {
          timeout: 5000,
        }); // timeout 5 seconds
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const navigate = useNavigate();

  // spinner while loading
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // Display an error message if the API call fails
  if (error) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Alert variant="danger">
          <h4>Error</h4>
          <p>{error}</p>
        </Alert>
      </div>
    );
  }

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start position
      animate={{ opacity: 1, y: 0 }} // End position
      exit={{ opacity: 0, y: 20 }} // Exit animation
      transition={{ duration: 0.5 }} // Animation duration
    >
      <Container fluid>
        <h2 className="mt-3 text-start p-3">Categories</h2>
        <Row>
          <Accordion />
        </Row>
        <h2 className="mt-5 p-3 text-start d-flex align-items-center">
          Shop All You Need
          {/* Button with arrow */}
          <button
            onClick={() => setOpen(!open)}
            aria-controls="shopSection"
            aria-expanded={open}
            className="btn btn-link ms-2"
            style={{
              fontSize: "1.5rem",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            {open ? <BsChevronUp style={{ color: "#808080" }} /> : <BsChevronDown  style={{ color: "#000000" }}/>}
          </button>
        </h2>

        {/* Collapsible section for products */}
        <Collapse in={open}>
          <div id="shopSection">
            <div className="p-3">
              <Row
                className="mb-2 p-3"
                style={{ border: "1px solid #ddd", borderRadius: "5px" }}
              >
                {products.map((product) => (
                  <Col xs={12} sm={6} md={3} key={product.id}>
                    <Item
                      image={product.image}
                      title={product.title}
                      category={product.category}
                      price={`$${product.price}`}
                      description={product.description}
                      quantity={1}
                      onClick={() => {
                        navigate("/itemdetails", { state: { product } });
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      addToCart={() => addToCart(product)}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Collapse>
      </Container>
    </motion.div>
  );
}

export default HomePage;
