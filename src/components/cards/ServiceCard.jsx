/**
 * TechSolutions Pro - Componente Tarjeta de Servicio
 * Tarjeta de Servicio con Gestión de Carrito
 * 
 * Muestra información del servicio con imagen, rating, precio y badges.
 * Incluye funcionalidad completa de carrito con renderizado condicional:
 * - Botón "Agregar" si no está en el carrito
 * - Badge "En el carrito" + controles de cantidad si ya está agregado
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import React from 'react';
import { Card, Badge, Button, ButtonGroup } from 'react-bootstrap';
import { useCartItem } from '../../hooks/useCartItem';
import { renderStars } from '../../utils/helpers.jsx';

/**
 * Service Card Component
 * Displays service information with cart management
 * @param {Object} props - Component props
 * @param {Service} props.service - Service object to display
 * @returns {JSX.Element} Service card component
 */
const ServiceCard = ({ service }) => {
  // Hook personalizado con toda la lógica del carrito
  const {
    itemInCart,
    quantity,
    isAdding,
    handleAddToCart,
    handleIncrement,
    handleDecrement
  } = useCartItem(service, 'servicio');

  return (
    <Card className="product-card h-100 fade-in-up">
      <Card.Img variant="top" src={service.imagen} alt={service.nombre} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="h5">{service.nombre}</Card.Title>
          <div className="d-flex gap-2">
            {service.descuento && (
              <Badge bg="danger" className="pulse-animation">
                <i className="fas fa-tag me-1"></i>
                -{service.descuento}%
              </Badge>
            )}
            {service.destacado && (
              <Badge bg="warning" text="dark">
                <i className="fas fa-star me-1"></i>
                Destacado
              </Badge>
            )}
          </div>
        </div>
        
        <div className="rating mb-2">
          {renderStars(service.rating)}
          <span className="ms-2 small">({service.rating}/5)</span>
        </div>
        
        <Card.Text className="flex-grow-1">
          {service.descripcion}
        </Card.Text>
        
        <div className="mb-3">
          <h6 className="text-white mb-2">Características:</h6>
          <ul className="list-unstyled small">
            {service.caracteristicas.slice(0, 3).map((feature, index) => (
              <li key={index} className="mb-1">
                <i className="fas fa-check text-success me-2"></i>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-3">
          <h6 className="text-white mb-2">Tecnologías:</h6>
          <div className="d-flex flex-wrap gap-1">
            {service.tecnologias.map((tech, index) => (
              <Badge key={index} bg="secondary" className="glass-btn">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <div className="price-container">
              {service.descuento ? (
                <div>
                  <div className="original-price text-muted text-decoration-line-through small">
                    {service.precioOriginal}
                  </div>
                  <div className="current-price text-success fw-bold">{service.precio}</div>
                </div>
              ) : (
                <div className="price">{service.precio}</div>
              )}
            </div>
            {itemInCart ? (
              <div className="d-flex flex-column align-items-end gap-2">
                <Badge bg="success" className="mb-1">
                  <i className="fas fa-check-circle me-1"></i>
                  En el carrito
                </Badge>
                <ButtonGroup size="sm" className="quantity-controls-card">
                  <Button
                    variant="outline-danger"
                    className="glass-btn"
                    onClick={handleDecrement}
                  >
                    {quantity === 1 ? (
                      <i className="fas fa-trash"></i>
                    ) : (
                      <i className="fas fa-minus"></i>
                    )}
                  </Button>
                  <Button variant="outline-light" className="glass-btn px-3" disabled>
                    <strong>{quantity}</strong>
                  </Button>
                  <Button
                    variant="outline-success"
                    className="glass-btn"
                    onClick={handleIncrement}
                  >
                    <i className="fas fa-plus"></i>
                  </Button>
                </ButtonGroup>
              </div>
            ) : (
              <Button 
                className={`glass-btn ${isAdding ? 'btn-success-confirm' : 'btn-success'}`}
                onClick={handleAddToCart}
                disabled={isAdding}
              >
                {isAdding ? (
                  <>
                    <i className="fas fa-check me-2"></i>
                    ¡Agregado!
                  </>
                ) : (
                  <>
                    <i className="fas fa-cart-plus me-2"></i>
                    Agregar
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;