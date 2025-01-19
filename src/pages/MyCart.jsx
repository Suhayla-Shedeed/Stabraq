import React, { useState, useContext } from "react";
import { Container, Button, Image } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiDragMove2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [draggingItem, setDraggingItem] = useState(null);
  const navigate = useNavigate();

  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  const handleDragStart = (e, item) => {
    setDraggingItem(item);
    e.dataTransfer.setData("text/plain", "");
  };

  const [showMessage, setShowMessage] = useState(false);
  const { clearCart } = useContext(CartContext);

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetItem) => {
    if (!draggingItem) return;

    const currentIndex = cart.indexOf(draggingItem);
    const targetIndex = cart.indexOf(targetItem);

    if (currentIndex !== -1 && targetIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(currentIndex, 1);
      newCart.splice(targetIndex, 0, draggingItem);
      setCart(newCart);
    }
  };

  const handleClickAndReset = () => {
    setShowMessage(true); 
    setTimeout(() => setShowMessage(false), 3000);    
    clearCart(); 
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start position
      animate={{ opacity: 1, y: 0 }} // End position
      exit={{ opacity: 0, y: 20 }} // Exit animation
      transition={{ duration: 0.5 }} // Animation duration
    >
      <Container>
        <h2 className="mt-3 mb-3 p-3 text-start">Cart Items</h2>
        <div className="list-group">
          {cart.map((item) => (
            <div
              key={item.id}
              className={`list-group-item d-flex justify-content-between border border-secondary rounded-3 align-items-center mb-2 ${
                item === draggingItem ? "dragging" : ""
              }`}
              draggable="true"
              onDragStart={(e) => handleDragStart(e, item)}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                rounded
                fluid
                style={{ height: "70px", cursor: "pointer" }}
                onClick={() =>
                  navigate("/itemdetails", { state: { product: item } })
                }
              />
              <div className="ms-2 me-auto" style={{ flex: 1 }}>
                <h6 className="mb-0">{item.title}</h6>
                <strong>
                  <small>Price: ${item.price}</small>
                </strong>
              </div>

              <button
                className="border border-secondary rounded-3 m-2"
                style={{
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: "#950606",
                }}
                onClick={() => removeFromCart(item.id)}
              >
                <i className="bi bi-trash" style={{ fontSize: "18px" }}></i>{" "}
              </button>

              <RiDragMove2Line />
            </div>
          ))}
        </div>
        <button onClick={handleClickAndReset}>Place Order</button>
          {showMessage && (
          <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>
            Order placed successfully!
          </p>
        )}{" "}
      </Container>
    </motion.div>
  );
};

export default MyCart;
