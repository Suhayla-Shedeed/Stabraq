import React, { useState, useEffect } from 'react';
import { Card, Button } from "react-bootstrap";
import axios from 'axios';

const Item = ({ image, title, color, price,category  ,  description, onClick }) => {
  return (
    <Card className="item-card" style={{  margin: "1rem auto" }}>
      <div className="image-container" onClick={onClick} style={{ cursor: 'pointer' }}>
        <Card.Img variant="top" src={image} alt={title} className="item-image mt-4" />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Category: <strong className='text-capitalize'>{category}</strong></Card.Text>
        <Card.Text>
          Price: <strong>{price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
