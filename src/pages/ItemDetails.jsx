import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Button, Container, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { CartContext } from "../contexts/CartContext";

const ItemDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState(null);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a size before adding to the cart.");
      return;
    }

    if (addToCart) {
      addToCart({ ...product, size: selectedSize });
    }

    setError(null);
  };

  if (!product) {
    return (
      <Container className="d-flex align-items-center justify-content-center vh-100">
        <Alert variant="warning" className="text-center">
          <h4>No Item Details Available</h4>
          <p>Please go back and select a product to view its details.</p>
        </Alert>
      </Container>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Container
        fluid
        className="vh-100 d-flex align-items-center justify-content-center"
      >
        <Row className="w-100 " style={{ maxWidth: "1200px" }}>
          <Col
            xs={12}
            sm={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                maxHeight: "80vh",
                borderRadius: "8px",
                objectFit: "contain",
              }}
            />
          </Col>

          <Col
            xs={12}
            sm={6}
            className="d-flex flex-column justify-content-center"
          >
            <h2>{product.title}</h2>
            <h3 style={{ color: "#E63946" }}>${product.price}</h3>
            <p style={{ marginTop: "10px", fontSize: "1rem", color: "#555" }}>
              {product.description}
            </p>

            <div
              style={{
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <strong>Size:</strong>

              {["S", "M", "L", "XL"].map((size, index) => (
                <Button
                  key={index}
                  className="m-2"
                  variant={
                    selectedSize === size ? "primary" : "outline-secondary"
                    
                  }
                  onClick={() => {
                    setSelectedSize(size);
                    setError(null);
                  }}
                  style={{
                    borderRadius: "50px",
                    padding: "5px 15px",
                    fontSize: "0.9rem",
                  }}
                  aria-label={`Select size ${size}`}
                >
                  {size}
                </Button>
              ))}
            </div>

            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}

            <div style={{ marginTop: "20px" }}>
              <Button
                variant="dark"
                style={{ width: "100%" }}
                onClick={handleAddToCart}
              >
                Add To Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default ItemDetails;
