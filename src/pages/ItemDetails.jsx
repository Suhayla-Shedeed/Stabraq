import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Button, Container, Alert } from "react-bootstrap";
import { motion } from "framer-motion";


const ItemDetails = ({ addToCart }) => {
  const location = useLocation();
  const { product } = location.state || {}; // Ensure product is passed
  const [selectedSize, setSelectedSize] = useState(null); // Track selected size
  const [error, setError] = useState(null); // Track error for size selection

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a size before adding to the cart.");
      return;
    }

    // Add product to cart with selected size
    if (addToCart) {
      addToCart({ ...product, size: selectedSize });
    }

    setError(null); // Clear error if successful
    // alert("Item added to cart successfully!");
  };

  if (!product) {
    return (
      <div>
        <Container className="mt-5 d-flex justify-content-center">
          <Alert variant="warning">
            <h4>No Item Details Available</h4>
            <p>Please go back and select a product to view its details.</p>
          </Alert>
        </Container>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Container className="mt-5">
          <Row className="d-flex mt-3 mx-auto">
            {/* Image Section */}
            <Col xs={12} sm={6} md={6} className="text-center">
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "85%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </Col>

            {/* Details Section */}
            <Col xs={12} sm={6} md={6} className="mt-5">
              <h2>{product.title}</h2>
              <h3 style={{ color: "#E63946" }}>${product.price}</h3>
              <p style={{ marginTop: "10px", fontSize: "1rem", color: "#555" }}>
                {product.description}
              </p>

              {/* Size Options */}
              <strong>Size:</strong>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "10px",
                  justifyContent: "center",
                }}
              >
                {["S", "M", "L", "XL"].map((size, index) => (
                  <Button
                    key={index}
                    variant={selectedSize === size ? "primary" : "outline-secondary"}
                    onClick={() => {
                      setSelectedSize(size);
                      setError(null); // Clear error on size selection
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

              {/* Error Message */}
              {error && (
                <Alert variant="danger" className="mt-3">
                  {error}
                </Alert>
              )}

              {/* Add to Cart Button */}
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
    </>
  );
};

export default ItemDetails;
