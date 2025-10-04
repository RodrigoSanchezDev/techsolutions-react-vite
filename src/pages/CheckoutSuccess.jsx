/**
 * TechSolutions Pro - Checkout Success Page
 * Order Confirmation and Thank You Page
 * 
 * Post-purchase confirmation page with order details, animated success indicator,
 * next steps information, and navigation options. Features celebratory design
 * and comprehensive order summary.
 * 
 * @author Rodrigo Sanchez
 * @website https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @copyright © 2025 Rodrigo Sanchez. All rights reserved.
 */

import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';


const CheckoutSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state?.orderData;

  useEffect(() => {
    // Confetti effect o animación de celebración
    document.title = '¡Compra Exitosa! - TechSolutions Pro';
    
    return () => {
      document.title = 'TechSolutions Pro';
    };
  }, []);

  if (!orderData) {
    return (
      <div className="checkout-success-page pt-5 mt-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="glass-card p-5 text-center">
                <div className="text-white">
                  <i className="fas fa-exclamation-triangle fa-4x mb-4 text-warning"></i>
                  <h2 className="mb-3">No se encontró información del pedido</h2>
                  <p className="lead mb-4">
                    Parece que llegaste aquí por error. Por favor verifica tu pedido.
                  </p>
                  <Button 
                    className="glass-btn btn-primary" 
                    onClick={() => navigate('/')}
                  >
                    <i className="fas fa-home me-2"></i>
                    Volver al Inicio
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
    <div className="checkout-success-page pt-5 mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            {/* Header de Éxito */}
            <div className="glass-card p-5 text-center mb-4">
              <div className="success-animation mb-4">
                <div className="success-checkmark">
                  <div className="check-icon">
                    <span className="icon-line line-tip"></span>
                    <span className="icon-line line-long"></span>
                    <div className="icon-circle"></div>
                    <div className="icon-fix"></div>
                  </div>
                </div>
              </div>

              <h1 className="text-white display-4 fw-bold mb-3">
                ¡Compra Exitosa!
              </h1>
              <p className="text-white lead mb-4">
                Gracias por tu compra, <strong>{orderData.customerName}</strong>. 
                Tu pedido ha sido confirmado y está siendo procesado.
              </p>

              <div className="order-details-summary glass-card p-4 mb-4">
                <Row>
                  <Col md={6} className="text-start">
                    <h5 className="text-white mb-3">
                      <i className="fas fa-receipt me-2"></i>
                      Detalles del Pedido
                    </h5>
                    <p className="text-white mb-2">
                      <strong>Número de Pedido:</strong> {orderData.orderNumber}
                    </p>
                    <p className="text-white mb-2">
                      <strong>Email:</strong> {orderData.email}
                    </p>
                    <p className="text-white mb-0">
                      <strong>Fecha:</strong> {new Date().toLocaleDateString('es-ES')}
                    </p>
                  </Col>
                  <Col md={6} className="text-start">
                    <h5 className="text-white mb-3">
                      <i className="fas fa-dollar-sign me-2"></i>
                      Resumen de Pago
                    </h5>
                    <p className="text-white mb-2">
                      <strong>Total Pagado:</strong> 
                      <span className="h5 ms-2" style={{color: 'var(--text-accent)'}}>
                        ${orderData.total.toLocaleString()}
                      </span>
                    </p>
                    <p className="text-white mb-2">
                      <strong>Método de Pago:</strong> Tarjeta de Crédito
                    </p>
                    <p className="text-white mb-0">
                      <strong>Estado:</strong> 
                      <span className="badge bg-success ms-2">Confirmado</span>
                    </p>
                  </Col>
                </Row>
              </div>
            </div>

            {/* Productos Comprados */}
            <div className="glass-card p-4 mb-4">
              <h4 className="text-white mb-4">
                <i className="fas fa-box me-2"></i>
                Productos/Servicios Adquiridos ({orderData.items.length})
              </h4>
              
              <Row>
                {orderData.items.map((item, index) => (
                  <Col md={6} key={index} className="mb-3">
                    <div className="order-item-card glass-card p-3">
                      <div className="d-flex align-items-center">
                        <img 
                          src={item.imagen} 
                          alt={item.nombre}
                          className="order-success-image me-3"
                        />
                        <div className="flex-grow-1">
                          <h6 className="text-white mb-1">{item.nombre}</h6>
                          <div className="d-flex justify-content-between">
                            <span className="text-muted small">
                              {item.type === 'producto' ? 'Producto' : 'Servicio'} x{item.quantity}
                            </span>
                            <span className="text-white fw-bold">{item.precio}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>

            {/* Próximos Pasos */}
            <div className="glass-card p-4 mb-4">
              <h4 className="text-white mb-4">
                <i className="fas fa-list me-2"></i>
                Próximos Pasos
              </h4>
              
              <Row>
                <Col md={4} className="text-center mb-4">
                  <div className="step-item">
                    <div className="step-icon glass-card p-3 mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                      <i className="fas fa-envelope fa-2x text-white"></i>
                    </div>
                    <h6 className="text-white">Confirmación por Email</h6>
                    <p className="text-muted small">
                      Recibirás un email de confirmación con todos los detalles de tu pedido.
                    </p>
                  </div>
                </Col>
                <Col md={4} className="text-center mb-4">
                  <div className="step-item">
                    <div className="step-icon glass-card p-3 mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                      <i className="fas fa-cogs fa-2x text-white"></i>
                    </div>
                    <h6 className="text-white">Procesamiento</h6>
                    <p className="text-muted small">
                      Nuestro equipo comenzará a trabajar en tu proyecto dentro de 24 horas.
                    </p>
                  </div>
                </Col>
                <Col md={4} className="text-center mb-4">
                  <div className="step-item">
                    <div className="step-icon glass-card p-3 mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                      <i className="fas fa-headset fa-2x text-white"></i>
                    </div>
                    <h6 className="text-white">Soporte Dedicado</h6>
                    <p className="text-muted small">
                      Un especialista se pondrá en contacto contigo para coordinar los detalles.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Acciones */}
            <div className="text-center">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Button 
                  className="glass-btn btn-primary" 
                  onClick={() => navigate('/')}
                >
                  <i className="fas fa-home me-2"></i>
                  Volver al Inicio
                </Button>
                <Button 
                  className="glass-btn btn-success" 
                  onClick={() => navigate('/products')}
                >
                  <i className="fas fa-shopping-bag me-2"></i>
                  Seguir Comprando
                </Button>
                <Button 
                  className="glass-btn btn-warning" 
                  onClick={() => navigate('/contact')}
                >
                  <i className="fas fa-phone me-2"></i>
                  Contactar Soporte
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckoutSuccess;