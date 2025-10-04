/**
 * TechSolutions Pro - Página del Carrito de Compras
 * Gestión del Carrito y Resumen del Pedido
 * 
 * Interfaz completa del carrito de compras con gestión de artículos,
 * actualización de cantidades, eliminación de artículos y navegación al checkout.
 * Incluye estado de carrito vacío y visualización de métodos de pago.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import RecommendedProducts from '../components/products/RecommendedProducts';

/**
 * Shopping Cart Component
 * Manages cart items with quantity controls and checkout navigation
 */
const Cart = () => {
  const { cart, updateQuantity, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.items.length === 0) {
    return (
      <div className="cart-page pt-5 mt-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="glass-card p-5 text-center">
                <div className="text-white">
                  <i className="fas fa-shopping-cart fa-4x mb-4 text-muted"></i>
                  <h2 className="mb-3">Tu carrito está vacío</h2>
                  <p className="lead mb-4">
                    Explora nuestros productos y servicios para comenzar a agregar elementos
                  </p>
                  <div>
                    <Button className="glass-btn btn-primary me-3" href="/products">
                      <i className="fas fa-box me-2"></i>
                      Ver Productos
                    </Button>
                    <Button className="glass-btn btn-success" href="/services">
                      <i className="fas fa-cogs me-2"></i>
                      Ver Servicios
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  const handleQuantityChange = (id, change) => {
    const item = cart.items.find((item ) => item.id === id);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        updateQuantity(id, newQuantity);
      }
    }
  };

  const getItemPrice = (priceString) => {
    // Extraer número del precio (ej: "$199/mes" -> 199)
    const match = priceString.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  const calculateSubtotal = () => {
    return cart.items.reduce((total, item) => {
      return total + (getItemPrice(item.precio) * item.quantity);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = Math.round(subtotal * 0.19); // IVA 19%
  const total = subtotal + tax;

  return (
    <div className="cart-page pt-5 mt-5">
      <Container>
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <div className="text-white">
              <h1 className="display-5 fw-bold mb-2">
                <i className="fas fa-shopping-cart me-3"></i>
                Carrito de Compras
              </h1>
              <p className="lead">
                Tienes {cart.itemCount} {cart.itemCount === 1 ? 'elemento' : 'elementos'} en tu carrito
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {/* Cart Items */}
          <Col lg={8}>
            <div className="cart-items">
              {cart.items.map((item ) => (
                <div key={item.id} className="cart-item mb-4">
                  <Row className="align-items-center">
                    <Col md={2}>
                      <img 
                        src={item.imagen} 
                        alt={item.nombre}
                        className="item-image w-100 rounded"
                      />
                    </Col>
                    <Col md={4}>
                      <div className="item-details">
                        <h5 className="item-name mb-1">{item.nombre}</h5>
                        <Badge bg={item.type === 'producto' ? 'primary' : 'success'} className="mb-2">
                          {item.type === 'producto' ? 'Producto' : 'Servicio'}
                        </Badge>
                        <div className="item-price">{item.precio}</div>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="quantity-controls d-flex align-items-center justify-content-center">
                        <Button
                          size="sm"
                          className="glass-btn"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          <i className="fas fa-minus"></i>
                        </Button>
                        <span className="mx-3 text-white fw-bold">{item.quantity}</span>
                        <Button
                          size="sm"
                          className="glass-btn"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          <i className="fas fa-plus"></i>
                        </Button>
                      </div>
                    </Col>
                    <Col md={2}>
                      <div className="text-center">
                        <div className="text-white fw-bold mb-2">
                          ${(getItemPrice(item.precio) * item.quantity).toLocaleString()}
                        </div>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          className="glass-btn"
                          onClick={() => removeItem(item.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </div>
                    </Col>
                    <Col md={1}>
                      
                    </Col>
                  </Row>
                </div>
              ))}

              {/* Actions */}
              <div className="cart-actions mt-4">
                <Button 
                  variant="outline-light" 
                  className="glass-btn me-3"
                  href="/products"
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Seguir Comprando
                </Button>
                <Button 
                  variant="outline-danger" 
                  className="glass-btn"
                  onClick={clearCart}
                >
                  <i className="fas fa-trash me-2"></i>
                  Vaciar Carrito
                </Button>
              </div>
            </div>
          </Col>

          {/* Cart Summary */}
          <Col lg={4}>
            <div className="glass-card p-4 sticky-top" style={{top: '100px'}}>
              <div className="text-white">
                <h4 className="mb-4">
                  <i className="fas fa-receipt me-2"></i>
                  Resumen del Pedido
                </h4>

                <div className="order-summary">
                  <div className="d-flex justify-content-between mb-3">
                    <span>Subtotal:</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="d-flex justify-content-between mb-3">
                    <span>IVA (19%):</span>
                    <span>${tax.toLocaleString()}</span>
                  </div>
                  
                  <hr />
                  
                  <div className="d-flex justify-content-between mb-4">
                    <strong>Total:</strong>
                    <strong className="h5" style={{color: 'var(--text-accent)'}}>${total.toLocaleString()}</strong>
                  </div>

                  <div className="checkout-actions">
                    <Button 
                      className="glass-btn btn-success w-100 mb-3" 
                      size="lg"
                      onClick={() => navigate('/checkout')}
                    >
                      <i className="fas fa-credit-card me-2"></i>
                      Proceder al Pago
                    </Button>
                    
                    <Button className="glass-btn btn-warning w-100 mb-3" href="/contact">
                      <i className="fas fa-phone me-2"></i>
                      Solicitar Cotización
                    </Button>
                  </div>

                  <div className="payment-info mt-4">
                    <h6 className="mb-3">Métodos de Pago Aceptados:</h6>
                    <div className="payment-methods">
                      <div className="d-flex justify-content-around">
                        <i className="fab fa-cc-visa fa-2x text-white"></i>
                        <i className="fab fa-cc-mastercard fa-2x text-white"></i>
                        <i className="fab fa-paypal fa-2x text-white"></i>
                        <i className="fas fa-money-bill-wave fa-2x text-white"></i>
                      </div>
                    </div>

                    <div className="security-info mt-3">
                      <small className="text-white-50">
                        <i className="fas fa-shield-alt me-1"></i>
                        Transacciones seguras y protegidas
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="glass-card p-4 mt-4">
              <div className="text-white">
                <h6 className="mb-3">
                  <i className="fas fa-award me-2"></i>
                  Nuestras Garantías
                </h6>
                <div className="guarantees">
                  <div className="mb-2">
                    <i className="fas fa-check text-success me-2"></i>
                    <small>Garantía de satisfacción 100%</small>
                  </div>
                  <div className="mb-2">
                    <i className="fas fa-check text-success me-2"></i>
                    <small>Soporte técnico 24/7</small>
                  </div>
                  <div className="mb-2">
                    <i className="fas fa-check text-success me-2"></i>
                    <small>Actualizaciones gratuitas</small>
                  </div>
                  <div className="mb-2">
                    <i className="fas fa-check text-success me-2"></i>
                    <small>Implementación profesional</small>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Productos Recomendados - También te puede interesar */}
        <RecommendedProducts />
      </Container>
    </div>
  );
};

export default Cart;