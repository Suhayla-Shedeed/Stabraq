import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Accordion = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch categories
        const { data: categoryList } = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );

        // Fetch items for each category
        const categoryData = await Promise.all(
          categoryList.map(async (category) => {
            const { data: items } = await axios.get(
              `https://fakestoreapi.com/products/category/${category}`
            );
            return { name: category, items };
          })
        );

        setCategories(categoryData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories or items:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="accordion" id="accordionExample">
      {categories.map((category, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse${index}`}
            >
              <strong>{category.name.toUpperCase()}</strong>
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <motion.div
                className="d-flex flex-wrap gap-3"
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
                {category.items.map((item) => (
                  <motion.div
                    key={item.id}
                    className="card"
                    style={{
                      width: "200px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      cursor: "pointer",
                      padding: "8px",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => navigate("/itemdetails", { state: { product: item } })} // Navigate on click
                  >
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.title}
                      style={{ height: "150px", objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontSize: "16px" }}>
                        {item.title}
                      </h5>
                      <p className="card-text" style={{ fontSize: "14px", color: "#888" }}>
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
