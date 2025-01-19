import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion"; 

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-danger text-center mt-5">{error}</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 20 }} 
      transition={{ duration: 0.5 }} 
      className="container mt-4"
    >
      <h2
        className="mt-3 mb-3 text-start ms-3 p-2"
        style={{ fontSize: "24px", fontWeight: "bold" }}
      >
        {category.toUpperCase()}
      </h2>
      <motion.div
        className="product-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }, 
          },
        }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="product-card"
            onClick={() => navigate("/itemdetails", { state: { product } })}
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h5 className="product-title">{product.title}</h5>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CategoryPage;
