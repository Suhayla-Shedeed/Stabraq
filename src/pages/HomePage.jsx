import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Item from './Item';
import hatImage from '../images/hat.png';
import hoodieImage from '../images/hoodie.png';


const items = [
  {
    id: 1,
    image: hatImage,
    title: 'Signature Beanie',
    price: 'EGP 249.00',
    description: 'A cozy and stylish beanie for all seasons.',
  },
  {
    id: 2,
    image: hoodieImage,
    title: 'Resist Hoodie Green',
    price: 'EGP 999.00',
    description: 'A hoodie that inspires courage and resilience.',
  },
];

function HomePage() {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate('/item-details', { state: { item } });
  };

  return (
    <div>
      <UpperNavbar />
      <ModernCarousel />
      <Row>
        {items.map((item) => (
          <Col xs={3} key={item.id}>
            <Item
              image={item.image}
              title={item.title}
              price={item.price}
              onClick={() => handleItemClick(item)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomePage;
