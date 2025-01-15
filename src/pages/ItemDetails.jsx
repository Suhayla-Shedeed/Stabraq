import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Button, Container, Alert } from "react-bootstrap";
import UpperNavbar from "./UpperNavbar";

const ItemDetails = ({ addToCart }) => {
  const location = useLocation();
  const { product } = location.state || {}; // Use "product" for clarity if passed from HomePage
  const [selectedSize, setSelectedSize] = useState(null); // Track selected size

  if (!product) {
    return (
      <div>
        <UpperNavbar />
        <Container className="mt-5 d-flex justify-content-center">
          <Alert variant="warning">
            <h4>No Item Details Available</h4>
            <p>Please go back and select a product to view its details.</p>
          </Alert>
        </Container>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to the cart.");
      return;
    }

    // Add product to cart with selected size
    addToCart({ ...product, size: selectedSize });
    alert("Item added to cart successfully!");
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex mt-3 mx-auto">
          {/* Image Section */}
          <Col xs={12} sm={6} md={6}>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Col>

          {/* Details Section */}
          <Col xs={12} sm={6} md={6}>
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
                  onClick={() => setSelectedSize(size)}
                  style={{
                    borderRadius: "50px",
                    padding: "5px 15px",
                    fontSize: "0.9rem",
                  }}
                >
                  {size}
                </Button>
              ))}
            </div>

            {/* Add to Cart Button */}
            <div style={{ marginTop: "20px" }}>
              <Button variant="dark" style={{ width: "100%" }} onClick={handleAddToCart}>
                Add To Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetails;
