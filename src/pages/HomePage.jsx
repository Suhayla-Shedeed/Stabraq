import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import Item from './Item';
import UpperNavbar from "./UpperNavbar";
import ModernCarousel from './ModernCarousel';
import axios from 'axios';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const navigate = useNavigate();

  return (
    <div>
      <UpperNavbar />
      <ModernCarousel />
      <Container fluid>
        <h2 className="mt-3">Shop New Releases</h2>
        <Row>
          {products.map((product) => (
            <Col xs={12} sm={6} md={3} key={product.id}>
              <Item
                image={product.image}
                title={product.title}
                color={product.category} 
                price={`$${product.price}`}
                description={product.description}
                onClick={() => navigate('/itemdetails', { state: { product } })} // Pass product data
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
