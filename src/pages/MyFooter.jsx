import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const MyFooter = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Logo and About Section */}
          <div className="col-md-4 text-start">
            <div className="mb-3">
              <img src="src/images/logo.png" alt="Logo" className="mb-3" style={{ width: '150px' }} />
            </div>
            <p>
              Stabraq Trendsetters is an all-Egyptian clothes brand. Driven by self-expression, we
              strive to reflect our beliefs through high-quality, multi-featured products and
              effective and inspiring movements.
            </p>
            <p>
              <i className="bi bi-geo-alt-fill"></i> Nasr City, Cairo
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> 01123399345
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i> info@stabraq.com
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-2">
            <h5>Shop</h5>
            <ul className="list-unstyled p-2" style={{fontSize:"14px"}}>
              <li><a href="/men" className="text-white text-decoration-none">Men's Cloths</a></li>
              <li><a href="/women" className="text-white text-decoration-none">Women's Cloths</a></li>
              <li><a href="/kids" className="text-white text-decoration-none">Jewelery</a></li>
              <li><a href="/accessories" className="text-white text-decoration-none">Electronics</a></li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5>Information</h5>
            <ul className="list-unstyled p-2" style={{fontSize:"14px"}}>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
              <li><a href="/store-locations" className="text-white text-decoration-none">Store Locations</a></li>
            </ul>
          </div>

          
        </div>
        <div className='text-start mt-5'>
        <p style={{fontSize:"12px"}}>© 2024 All rights reserved Stabraq TS®.</p>
      </div>
      </div>
      
    </footer>
  );
};

export default MyFooter;
