import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion


const CategoryPage = () => {
  const { category } = useParams(); // Extract the category from the URL
  const navigate = useNavigate(); // Initialize the navigate function
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
  // Refetch products when the category changes
    fetchProducts();
  }, [category]);


  // if (loading) {
  //   return <p>Loading products...</p>;
  // }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <><motion.div
      initial={{ opacity: 0, y: 20 }} // Start position
      animate={{ opacity: 1, y: 0 }} // End position
      exit={{ opacity: 0, y: 20 }} // Exit animation
      transition={{ duration: 0.5 }} // Animation duration
    >
      <h2
        className="mt-3 mb-3 text-start ms-3 p-2"
        style={{ fontSize: "24px" }}
      >
        {category.toUpperCase()}
      </h2>
      <motion.div
        className="ms-3"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }, // Delay between children
          },
        }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
              width: "200px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/itemdetails", { state: { product } })}
            whileHover={{ scale: 1.05 }} // Slight zoom on hover
            whileTap={{ scale: 0.95 }} // Slight shrink on tap
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "150px", objectFit: "contain" }} />
            <h5 style={{ fontSize: "16px", margin: "10px 0" }}>
              {product.title}
            </h5>
            <p style={{ fontSize: "14px", color: "#888" }}>
              ${product.price.toFixed(2)}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div></>
  );
};

export default CategoryPage;
