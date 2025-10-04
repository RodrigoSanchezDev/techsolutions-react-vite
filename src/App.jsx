/**
 * TechSolutions Pro - E-commerce Platform
 * Main Application Component
 * 
 * This file contains the root application component that sets up routing,
 * global context providers, and the main layout structure.
 * 
 * @author Rodrigo Sanchez
 * @website https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @copyright © 2025 Rodrigo Sanchez. All rights reserved.
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Import pages
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/CheckoutSuccess';

/**
 * Main Application Component
 * Sets up the application structure with routing, global providers, and layout
 * @returns {JSX.Element} The main application component
 */
function App() {
  return (
    <CartProvider>
      <Router basename="/techsolutions-react-vite">
        <div className="App">
          <Header />
          <main style={{ minHeight: 'calc(100vh - 200px)' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout-success" element={<CheckoutSuccess />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
