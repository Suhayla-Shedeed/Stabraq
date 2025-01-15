import React from "react";
import { Card, Button } from "react-bootstrap";

const Item = ({ image, title, color, price }) => {
  return (
    <Card className="item-card" style={{ width: "18rem", margin: "1rem auto" }}>
      <div className="image-container">
        <Card.Img variant="top" src={image} alt={title} className="item-image" />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Color: {color}</Card.Text>
        <Card.Text>
          Price: <strong>{price}</strong>
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
