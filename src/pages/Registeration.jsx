import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UpperNavbar from "./UpperNavbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion


const Registeration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    address: "",
  });

 


  const [errors, setErrors] = useState({});

  // Validation functions
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required.";
    }
    if (!formData.username.trim()) {
      newErrors.username = "Username is required.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (
      !/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(formData.password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters long, include one uppercase letter, one digit, and one special character.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Data Submitted:", formData);
      alert("Account Created Successfully!");
      navigate("/home"); 
    }
  };

  
  return (
<motion.div
      initial={{ opacity: 0, y: 20 }} // Start position
      animate={{ opacity: 1, y: 0 }} // End position
      exit={{ opacity: 0, y: 20 }} // Exit animation
      transition={{ duration: 0.5 }} // Animation duration
    >      <div className="container mt-5">
        <h2 className="text-center ">CREATE ACCOUNT</h2>
        <form
          onSubmit={handleSubmit}
          className="mx-auto "
          style={{ maxWidth: "500px" }}
        >
          {/* First Name */}
          <div className="mb-1">
            <label htmlFor="firstName" className="form-label d-flex">
              First Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && (
              <div className="invalid-feedback">{errors.firstName}</div>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-1">
            <label htmlFor="lastName" className="form-label d-flex">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          {/* Username */}
          <div className="mb-1">
            <label htmlFor="username" className="form-label d-flex">
              Username
            </label>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-1">
            <label htmlFor="password" className="form-label d-flex">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-1">
            <label htmlFor="email" className="form-label d-flex">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* Address */}
          <div className="mb-1">
            <label htmlFor="address" className="form-label d-flex">
              Address
            </label>
            <input
              className="form-control"
              id="address"
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
            ></input>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-dark w-50 mt-3" >
            Create An Account
          </button>
        </form>
      </div>
      </motion.div>
  );
};

export default Registeration;
