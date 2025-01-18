import React, { useState, useContext } from "react";
import { Container, Button, Image } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import { RiDragMove2Line } from 'react-icons/ri';

const MyCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [draggingItem, setDraggingItem] = useState(null);

  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  const updateQuantity = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleDragStart = (e, item) => {
    setDraggingItem(item);
    e.dataTransfer.setData('text/plain', '');
  };

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start position
      animate={{ opacity: 1, y: 0 }} // End position
      exit={{ opacity: 0, y: 20 }} // Exit animation
      transition={{ duration: 0.5 }} // Animation duration
    >
      <Container>
        <h2 className="mt-3 mb-3">Cart</h2>
        <div className="list-group">
          {cart.map((item) => (
            <div
              key={item.id}
              className={`list-group-item d-flex justify-content-between align-items-center mb-2 ${item === draggingItem ? 'dragging' : ''}`}
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
                style={{ width: "40px" }}
              />
              <div className="ms-2 me-auto" style={{ flex: 1 }}>
                <h6 className="mb-0">{item.title}</h6>
                <small>Price: ${item.price}</small>
                <div className="ms-2">
                  <strong>Total: ${item.price * item.quantity}</strong>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  <FaMinus />
                </Button>
                <span className="mx-2 small">{item.quantity}</span>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  <FaPlus />
                </Button>
              </div>

              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
                className="ms-2"
              >
                <FaTrash />
              </Button>

              <RiDragMove2Line />
            </div>
          ))}
        </div>
      </Container>
    </motion.div>
  );
};

export default MyCart;
