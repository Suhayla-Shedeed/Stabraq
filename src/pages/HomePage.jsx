import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import Item from './Item';
import hatImage from '../images/hat.png';
import hoodieImage from '../images/hoodie.png';
import UpperNavbar from "./UpperNavbar";
import ModernCarousel from './ModernCarousel';
import ItemDetails from './ItemDetails';


const items = [
  {
    id: 1,
    image: hatImage,
    title: 'Signature Beanie',
    color:'Turquoise',
    price: 'EGP 249.00',
    description: 'A cozy and stylish beanie for all seasons.',
  },
  {
    id: 2,
    image: hoodieImage,
    title: 'Resist Hoodie Green',
    color:'Olive',
    price: 'EGP 999.00',
    description: 'A hoodie that inspires courage and resilience.',
  },{
    id: 3,
    image: hatImage,
    title: 'Signature Beanie',
    color:'Turquoise',
    price: 'EGP 249.00',
    description: 'A cozy and stylish beanie for all seasons.',
  },
  {
    id: 4,
    image: hoodieImage,
    title: 'Resist Hoodie Green',
    color:'Olive',
    price: 'EGP 999.00',
    description: 'A hoodie that inspires courage and resilience.',
  },{
    id: 5,
    image: hatImage,
    title: 'Signature Beanie',
    color:'Turquoise',
    price: 'EGP 249.00',
    description: 'A cozy and stylish beanie for all seasons.',
  },
  {
    id: 6,
    image: hoodieImage,
    title: 'Resist Hoodie Green',
    color:'Olive',
    price: 'EGP 999.00',
    description: 'A hoodie that inspires courage and resilience.',
  },
];

function HomePage() {

  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate('/itemdetails', { state: { item } });
  };

  return (
    <div>
      <UpperNavbar />
      <ModernCarousel />
      <Container fluid>
        <h2 className='mt-3' >Shop New Releases</h2>
      <Row>
        {items.map((item) => (
          <Col xs={12} sm={6} md={3} key={item.id}>
            <Item
              image={item.image}
              title={item.title}
              price={item.price}
              color={item.color}
              onClick={() => handleItemClick(item)}
            />
          </Col>
        ))}
      </Row>
      </Container>
    </div>
  );
}

export default HomePage;
