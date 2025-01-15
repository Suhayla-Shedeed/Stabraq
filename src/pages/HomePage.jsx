import React from 'react';
import { useNavigate } from "react-router-dom";
import ModernCarousel from './ModernCarousel';
import UpperNavbar from './UpperNavbar';
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item'; // Import the Item component
import hatImage from '../images/hat.png'; // Import the image

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <UpperNavbar />
      <ModernCarousel />

      <Container fluid>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Item
              image={hatImage}
              title="Signature Beanie"
              color="Turquoise"
              price="EGP 249.00"
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Item
              image="src/images/Hoodie.png"
              title="Signature Hoodie"
              color="Black"
              price="EGP 499.00"
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Item
              image={hatImage}
              title="Winter Beanie"
              color="Gray"
              price="EGP 299.00"
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Item
              image={hatImage}
              title="Classic Beanie"
              color="Red"
              price="EGP 199.00"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
