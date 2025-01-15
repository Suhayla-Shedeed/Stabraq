import React from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Button, Container } from "react-bootstrap";

function ItemDetails() {
  const location = useLocation();
  const { item } = location.state || {}; // Get item data from state

  if (!item) {
    return <div>No item details available.</div>;
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={6} md={6}>
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </Col>

        {/* Details Section */}
        <Col xs={12} sm={6} md={4}>
          <h2>{item.title}</h2>
          <h3 style={{ color: "#E63946" }}>{item.price}</h3>
          <p style={{ marginTop: "10px", fontSize: "1rem", color: "#555" }}>
            "RESIST" is a message of unbreakable strength. This hoodie inspires
            courage, resilience, and the sacrifices made for faith and freedom.
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
                variant={size === "S" ? "primary" : "outline-secondary"}
                disabled={["L", "XL"].includes(size)}
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

          {/* Buttons */}
          <div style={{ marginTop: "20px" }}>
            <Button variant="dark" style={{ width: "100%" }}>
              Add To Cart
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetails;
