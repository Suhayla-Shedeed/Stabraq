import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Button, Container, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { CartContext } from "../contexts/CartContext";

const ItemDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [error, setError] = useState(null);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart({ ...product });
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
        className="d-flex flex-column justify-content-between"
        style={{ minHeight: "100vh", padding: "20px" }}
      >
        <Row className="w-100" style={{ maxWidth: "1200px" }}>
          <Col
            xs={12}
            sm={6}
            className="d-flex flex-column justify-content-center"
            style={{ padding: "20px" }}
          >
            <h2 className="text-start" style={{ fontSize: "2rem" }}>
              {product.title}
            </h2>
            <p className="text-capitalize text-start">
              Category: <strong>{product.category}</strong>
            </p>
            <h3 className="text-start" style={{ color: "#E63946" }}>
              Price: ${product.price}
            </h3>
            <p
              style={{ marginTop: "10px", fontSize: "1rem", color: "#555" }}
              className="text-start"
            >
              {product.description}
            </p>

            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}

            <div style={{ marginTop: "20px" }}>
              <Button
                variant="dark"
                style={{ width: "65%" }}
                onClick={handleAddToCart}
              >
                Add To Cart
              </Button>
            </div>
          </Col>
          <Col
            xs={12}
            sm={6}
            className="d-flex justify-content-center align-items-center"
            style={{ padding: "20px" }}
          >
            <div
              style={{
                width: "85%",
                maxHeight: "60vh", 
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  maxWidth: "63%",
                  maxHeight: "80%",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default ItemDetails;
