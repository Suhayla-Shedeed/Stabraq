import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

const MyFooter = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data: categoryList } = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );

        const categoryData = await Promise.all(
          categoryList.map(async (category) => {
            const { data: items } = await axios.get(
              `https://fakestoreapi.com/products/category/${category}`
            );
            return { name: category, items };
          })
        );

        setCategories(categoryData);
      } catch (error) {
        console.error("Error fetching categories or items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-start">
            <div className="mb-3">
              <img
            src="/src/images/logo.png"
            alt="Logo"
                className="mb-3"
                style={{ width: "150px" }}
              />
            </div>
            <p>
              Stabraq Trendsetters is an all-Egyptian clothes brand. Driven by
              self-expression, we strive to reflect our beliefs through
              high-quality, multi-featured products and effective and inspiring
              movements.
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

          <div className="col-md-2">
            <h5>Shop</h5>
            <ul className="list-unstyled p-2" style={{ fontSize: "14px" }}>
              {categories.map((category, index) => (
                <Nav.Link
                  key={index}
                  className="p-1" style={{ fontSize: "12px" , fontWeight:"600" }}
                  onClick={() => {
                    navigate(`/category/${category.name}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {category.name.toUpperCase()}
                </Nav.Link>
              ))}
            </ul>
          </div>

          <div className="col-md-2">
            <h5>Information</h5>
            <ul className="list-unstyled p-3" style={{ fontSize: "14px" }}>
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/store-locations"
                  className="text-white text-decoration-none"
                >
                  Store Locations
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start mt-5">
          <p style={{ fontSize: "12px" }}>
            © 2024 All rights reserved Stabraq TS®.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
