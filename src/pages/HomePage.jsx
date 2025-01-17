import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Spinner, Alert } from "react-bootstrap";
import Item from "./Item";
import UpperNavbar from "./UpperNavbar";
import ModernCarousel from "./ModernCarousel";
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion
import { CartContext } from "../contexts/CartContext"; // Import CartContext
import Accordion from "./Accordion";

function HomePage() {
  const { cart, setCart } = useContext(CartContext); // Access cart and setCart from context
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        <h2 className="mt-3 text-start p-3">Categoris</h2>
        <Row className="p-3">
          <Accordion />
        </Row>
        <h2 className="mt-3 p-3 text-start">Shop All You Need</h2>
        <div className="p-4"><Row
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
                onClick={() => navigate("/itemdetails", { state: { product } })} 
                addToCart={() => addToCart(product)} 
              />
            </Col>
          ))}
        </Row></div>
      </Container>
    </motion.div>
  );
}

export default HomePage;
