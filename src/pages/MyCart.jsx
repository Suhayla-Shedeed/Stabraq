  import React, { useEffect } from "react";
  import { Container, Button } from "react-bootstrap";
  import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

  const MyCart = ({ cart, setCart }) => {
    // Load cart items from local storage on component mount
    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cartItems"));
      if (storedCart) {
        // Ensure each item has a default quantity of 1
        const updatedCart = storedCart.map((item) => ({
          ...item,
          quantity: item.quantity || 1, // Default quantity to 1 if not set
        }));
        setCart(updatedCart);
      }
    }, [setCart]);

    // Save cart items to local storage whenever the cart changes
    useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cart));
    }, [cart]);

    const handleDragEnd = (result) => {
      if (!result.destination) return;

      const items = Array.from(cart);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      setCart(items);
    };

    const removeFromCart = (id) => {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
    };

    const updateQuantity = (id, increment) => {
      const updatedCart = cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      );
      setCart(updatedCart);
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
                        className="list-group-item d-flex "
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                        <div style={{ flex: 1, marginLeft: "15px" }}>
                          <h5 style={{ margin: 0 }}>{item.title}</h5>
                          <p style={{ margin: "5px 0", color: "#555" }}>${item.price}</p>
                        </div>
                        <div className="d-flex ">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            -
                          </Button>
                          <span
                            style={{
                              margin: "0 10px",
                              minWidth: "30px",
                              textAlign: "center",
                            }}
                          >
                            {item.quantity}
                          </span>
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
                          style={{ marginLeft: "10px" }}
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
