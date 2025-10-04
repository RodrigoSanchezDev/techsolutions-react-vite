/**
 * TechSolutions Pro - Componente Header de Navegación
 * Barra de Navegación Responsive con Integración de Carrito
 * 
 * Componente principal de navegación con estilo glassmorphism, diseño responsive,
 * funcionalidad de dropdown del carrito y resaltado de ruta activa.
 * Incluye detección de clics fuera para el dropdown del carrito.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import CartDropdown from '../cart/CartDropdown';

/**
 * Header Navigation Component
 * Provides main navigation with cart integration and active route detection
 * @returns {JSX.Element} Header component
 */
const Header = () => {
  const location = useLocation();
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  const toggleCart = (e) => {
    e.preventDefault();
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Cerrar carrito al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  return (
    <Navbar expand="lg" fixed="top" className="glass-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary fs-3">
          <i className="fas fa-laptop-code me-2"></i>
          TechSolutions Pro
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`me-3 ${isActive('/') ? 'active fw-bold' : ''}`}
            >
              <i className="fas fa-home me-1"></i>
              Inicio
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/services" 
              className={`me-3 ${isActive('/services') ? 'active fw-bold' : ''}`}
            >
              <i className="fas fa-cogs me-1"></i>
              Servicios
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/products" 
              className={`me-3 ${isActive('/products') ? 'active fw-bold' : ''}`}
            >
              <i className="fas fa-cube me-1"></i>
              Productos
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/gallery" 
              className={`me-3 ${isActive('/gallery') ? 'active fw-bold' : ''}`}
            >
              <i className="fas fa-images me-1"></i>
              Galería
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={`me-3 ${isActive('/contact') ? 'active fw-bold' : ''}`}
            >
              <i className="fas fa-envelope me-1"></i>
              Contacto
            </Nav.Link>
            
            <div className="position-relative" ref={cartRef}>
              <button
                onClick={toggleCart}
                className={`glass-btn btn-outline-primary position-relative ${isActive('/cart') ? 'active' : ''}`}
                style={{ background: 'none', border: '1px solid rgba(255, 255, 255, 0.3)' }}
              >
                <i className="fas fa-shopping-cart me-1"></i>
                Carrito
                {cart.itemCount > 0 && (
                  <Badge 
                    bg="danger" 
                    pill 
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {cart.itemCount}
                  </Badge>
                )}
              </button>
              <CartDropdown isOpen={isCartOpen} onClose={closeCart} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;