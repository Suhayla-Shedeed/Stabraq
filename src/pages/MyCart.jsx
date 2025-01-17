import React, { useContext } from "react";
import { Container, Button, Image } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CartContext } from "../contexts/CartContext"; // Import the CartContext

const MyCart = () => {
  const { cart, setCart } = useContext(CartContext); // Get cart and setCart from context

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(cart);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCart(items);
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
    <Container>
      <h5 className="mt-3">Your Cart</h5>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cart">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="list-group">
              {cart.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      className="list-group-item d-flex justify-content-between align-items-center mb-2"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Image src={item.image} alt={item.title} rounded fluid style={{ width: "40px" }} />
                      <div className="ms-2 me-auto" style={{ flex: 1 }}>
                        <h6 className="mb-0">{item.title}</h6>
                        <small>${item.price}</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </Button>
                        <span className="mx-2 small">{item.quantity}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </Button>
                      </div>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="ms-2"
                      >
                        X
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
