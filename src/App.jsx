import React, { useState , useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ModernCarousel from "./pages/ModernCarousel";
import UpperNavbar from "./pages/UpperNavbar";
import Registeration from "./pages/Registeration";
import Item from "./pages/Item";
import HomePage from "./pages/HomePage";
import ItemDetails from "./pages/ItemDetails";
import CategoryPage from "./pages/CategoryPage";
import MyCart from "./pages/MyCart";

function App() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <Router>
      <UpperNavbar cart={cart} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/moderncarousel" element={<ModernCarousel />} />
        <Route path="/registeration" element={<Registeration />} />
        <Route path="/item" element={<Item />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route
          path="/itemdetails"
          element={<ItemDetails addToCart={addToCart} />}
        />
        <Route
          path="/mycart"
          element={<MyCart cart={cart} setCart={setCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
