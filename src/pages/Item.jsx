import React from "react";
import { Card } from "react-bootstrap";

const Item = ({ image, title, category, price, description, onClick }) => {
  return (
    <Card
      className="item-card shadow-sm"
      style={{
        margin: "1rem auto",
        borderRadius: "10px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        height: "300px", 
      }}
      onClick={onClick}
      
    >
      <div
        className="image-container"
        style={{
          height: "200px", 
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          className="item-image"
        />
      </div>
      <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Card.Title
          style={{
            fontSize: "1rem",
            fontWeight: "600",
            color: "#333",
            textAlign: "center",
          }}
        >
          {title}
        </Card.Title>
        <Card.Text
          style={{
            fontSize: "0.9rem",
            color: "#666",
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Category:{" "}
          <strong className="text-capitalize" style={{ color: "#007bff" }}>
            {category}
          </strong>
        </Card.Text>
        <Card.Text
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#000",
            textAlign: "center",
          }}
        >
          ${price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
