import React, { useState, useEffect } from "react";
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
import { CartProvider } from "./contexts/CartContext";
import Accordion from "./pages/Accordion";
import MyFooter from "./pages/MyFooter";
import ContactUs from"./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

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
    <CartProvider value={{ cart, addToCart }}>
      <Router>
        <UpperNavbar cart={cart} />
        
        <div style={{ minHeight: "calc(100vh - 100px)" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/moderncarousel" element={<ModernCarousel />} />
            <Route path="/registeration" element={<Registeration />} />
            <Route path="/item" element={<Item />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/footer" element={<MyFooter />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/itemdetails" element={<ItemDetails />} />
            <Route path="/mycart" element={<MyCart cart={cart} setCart={setCart} />} />
          </Routes>
        </div>
        
        <MyFooter /> 
      </Router>
    </CartProvider>
  );
}

export default App;
