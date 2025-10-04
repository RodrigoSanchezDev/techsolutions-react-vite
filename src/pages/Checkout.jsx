import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getItemPrice = (priceString) => {
    return parseFloat(priceString.replace(/[$,/mes]/g, ''));
  };

  const subtotal = cart.items.reduce((total, item) => {
    return total + (getItemPrice(item.precio) * item.quantity);
  }, 0);
  
  const tax = Math.round(subtotal * 0.19); // IVA 19%
  const shipping = cart.itemCount > 0 ? 5000 : 0; // Envío fijo
  const total = subtotal + tax + shipping;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setShowError(false);

    // Validación básica
    if (!formData.email || !formData.firstName || !formData.cardNumber) {
      setShowError(true);
      setIsProcessing(false);
      return;
    }

    // Simular procesamiento de pago
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Limpiar carrito y redirigir a página de agradecimiento
      clearCart();
      navigate('/checkout/success', {
        state: {
          orderData: {
            orderNumber: `TS${Date.now()}`,
            total: total,
            items: cart.items,
            customerName: `${formData.firstName} ${formData.lastName}`,
            email: formData.email
          }
        }
      });
    } catch {
      setShowError(true);
      setIsProcessing(false);
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className="checkout-page pt-5 mt-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="glass-card p-5 text-center">
                <div className="text-white">
                  <i className="fas fa-shopping-cart fa-4x mb-4 text-muted"></i>
                  <h2 className="mb-3">Tu carrito está vacío</h2>
                  <p className="lead mb-4">
                    Agrega algunos productos antes de proceder al checkout
                  </p>
                  <Button className="glass-btn btn-primary" href="/products">
                    <i className="fas fa-arrow-left me-2"></i>
                    Continuar Comprando
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="checkout-page pt-5 mt-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="text-white display-5 fw-bold">
              <i className="fas fa-credit-card me-3"></i>
              Finalizar Compra
            </h1>
            <p className="text-white lead">
              Completa tu información para procesar el pago
            </p>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Row>
            {/* Formulario de Checkout */}
            <Col lg={8}>
              <div className="glass-card p-4 mb-4">
                <h4 className="text-white mb-4">
                  <i className="fas fa-user me-2"></i>
                  Información Personal
                </h4>
                
                {showError && (
                  <Alert variant="danger" className="mb-4">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    Por favor completa todos los campos requeridos
                  </Alert>
                )}

                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white">Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                        className="checkout-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white">Nombre *</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Juan"
                        required
                        className="checkout-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white">Apellido *</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Pérez"
                        required
                        className="checkout-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>

              <div className="glass-card p-4 mb-4">
                <h4 className="text-white mb-4">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  Dirección de Envío
                </h4>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white">Dirección</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Av. Providencia 1234"
                        className="checkout-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={8} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white">Ciudad</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Santiago"
                        className="checkout-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white">Código Postal</Form.Label>
                      <Form.Control
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="7500000"
                        className="checkout-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>

              <div className="glass-card p-4">
                <h4 className="text-white mb-4">
                  <i className="fas fa-credit-card me-2"></i>
                  Información de Pago
                </h4>
                <div className="payment-demo-notice mb-4">
                  <Alert variant="info" className="glass-card">
                    <i className="fas fa-info-circle me-2"></i>
                    <strong>Modo Demo:</strong> Esta es una pasarela de prueba. 
                    Puedes usar cualquier número de tarjeta para probar el proceso.
                  </Alert>
                </div>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white">Titular de la Tarjeta *</Form.Label>
                      <Form.Control
                        type="text"
                        name="cardHolder"
                        value={formData.cardHolder}
                        onChange={handleInputChange}
                        placeholder="Juan Pérez"
                        required
                        className="checkout-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white">Número de Tarjeta *</Form.Label>
                      <Form.Control
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="4111 1111 1111 1111"
                        required
                        className="checkout-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white">Fecha de Expiración</Form.Label>
                      <Form.Control
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="checkout-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white">CVV</Form.Label>
                      <Form.Control
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        className="checkout-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* Resumen del Pedido */}
            <Col lg={4}>
              <div className="glass-card p-4 sticky-top" style={{top: '100px'}}>
                <h4 className="text-white mb-4">
                  <i className="fas fa-receipt me-2"></i>
                  Resumen del Pedido
                </h4>

                <div className="order-items mb-4">
                  {cart.items.map((item ) => (
                    <div key={item.id} className="order-item-checkout mb-3 p-3">
                      <div className="d-flex align-items-start">
                        <img 
                          src={item.imagen} 
                          alt={item.nombre}
                          className="order-item-image-checkout me-3"
                        />
                        <div className="flex-grow-1 order-item-details">
                          <h6 className="text-white mb-1 text-truncate">{item.nombre}</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="text-muted small">Qty: {item.quantity}</span>
                            <span className="text-white fw-bold">{item.precio}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-summary">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-white">Subtotal:</span>
                    <span className="text-white">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-white">Envío:</span>
                    <span className="text-white">${shipping.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-white">IVA (19%):</span>
                    <span className="text-white">${tax.toLocaleString()}</span>
                  </div>
                  <hr style={{borderColor: 'rgba(255, 255, 255, 0.2)'}} />
                  <div className="d-flex justify-content-between mb-4">
                    <strong className="text-white">Total:</strong>
                    <strong className="h5" style={{color: 'var(--text-accent)'}}>
                      ${total.toLocaleString()}
                    </strong>
                  </div>

                  <Button 
                    type="submit"
                    className="glass-btn btn-primary w-100 py-3"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <i className="fas fa-spinner fa-spin me-2"></i>
                        Procesando...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-lock me-2"></i>
                        Pagar ${total.toLocaleString()}
                      </>
                    )}
                  </Button>

                  <div className="security-info mt-3 text-center">
                    <small className="text-white-50">
                      <i className="fas fa-shield-alt me-1"></i>
                      Pago seguro con encriptación SSL
                    </small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Checkout;