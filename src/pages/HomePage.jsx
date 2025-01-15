import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container, Spinner, Alert } from 'react-bootstrap';
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
        const response = await axios.get('https://fakestoreapi.com/products', { timeout: 5000 }); // Set a timeout of 5 seconds
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const navigate = useNavigate();

  // Display a spinner while loading
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // Display an error message if the API call fails
  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Alert variant="danger">
          <h4>Error</h4>
          <p>{error}</p>
        </Alert>
      </div>
    );
  }

  return (
    <div>
      <Container fluid>
        <h2 className="mt-3">Shop New Releases</h2>
        <Row>
          {products.map((product) => (
            <Col xs={12} sm={6} md={3} key={product.id} className="mb-2">
              <Item
                image={product.image}
                title={product.title}
                category={product.category} 
                price={`$${product.price}`}
                description={product.description}
                quantity={1}
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
