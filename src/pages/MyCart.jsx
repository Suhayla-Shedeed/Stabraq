import React, { useContext } from "react";
import { Container, Button, Image } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CartContext } from "../contexts/CartContext";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

const MyCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return; // No destination means drop is invalid
    if (destination.index === source.index) return; // No need to reorder if it's dropped at the same position

    // Reorder items in the cart array
    const items = Array.from(cart);
    const [reorderedItem] = items.splice(source.index, 1); // Remove the item
    items.splice(destination.index, 0, reorderedItem); // Insert the item at the new position

    setCart(items); // Update the cart with the new order
  };

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start position
      animate={{ opacity: 1, y: 0 }} // End position
      exit={{ opacity: 0, y: 20 }} // Exit animation
      transition={{ duration: 0.5 }} // Animation duration
    >
      <Container>
        <h2 className="mt-3 mb-3">Cart</h2>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="cart">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="list-group"
              >
                {cart.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="list-group-item d-flex justify-content-between align-items-center mb-2"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
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
                          <small>${item.price}</small>
                          <div className="ms-2">
                            <strong>
                              Total: ${item.price * item.quantity}
                            </strong>
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
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}{" "}
                {/* Ensures the placeholder is shown while dragging */}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </motion.div>
  );
};

export default MyCart;
