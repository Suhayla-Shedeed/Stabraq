import React, { useContext } from "react";
import { Container, Button, Image } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CartContext } from "../contexts/CartContext";
import { FaTrash, FaMinus, FaPlus, FaArrowsAlt } from "react-icons/fa";

const MyCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return; // If dropped outside a valid drop area
    if (destination.index === source.index) return; // If dropped in the same position

    // Reorder the items in the cart
    const updatedCart = Array.from(cart);
    const [movedItem] = updatedCart.splice(source.index, 1); // Remove the item
    updatedCart.splice(destination.index, 0, movedItem); // Insert it at the new position
    setCart(updatedCart); // Update the cart state
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id)); // Remove item by ID
  };

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
                    >
                      <div
                        className="me-3"
                        {...provided.dragHandleProps} // Attach drag handle
                      >
                        <FaArrowsAlt style={{ cursor: "grab" }} />
                      </div>
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
                          disabled={item.quantity <= 1}
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
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default MyCart;
