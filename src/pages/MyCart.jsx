import React from "react";
import { Container, Button } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const MyCart = ({ cart = [] , setCart }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(cart);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCart(items);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <h2 className="mt-3">Your Cart</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cart">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="list-group"
            >
              {cart.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      className="list-group-item d-flex justify-content-between align-items-center"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div>
                        <h5>{item.title}</h5>
                        <p>${item.price}</p>
                      </div>
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
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
