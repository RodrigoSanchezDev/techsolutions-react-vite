import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { useCart } from '../../contexts/CartContext';

/**
 * Product Card Component
 * @param {Object} props - Component props
 * @param {Product} props.product - Product object to display
 * @returns {JSX.Element} Product card component
 */
const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      imagen: product.imagen,
      type: 'producto'
    }, 1);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}
      />
    ));
  };

  return (
    <Card className="product-card h-100 fade-in-up">
      <Card.Img variant="top" src={product.imagen} alt={product.nombre} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="h5">{product.nombre}</Card.Title>
          <div className="d-flex gap-2">
            {product.descuento && (
              <Badge bg="danger" className="pulse-animation">
                <i className="fas fa-tag me-1"></i>
                -{product.descuento}%
              </Badge>
            )}
            {product.destacado && (
              <Badge bg="warning" text="dark">
                <i className="fas fa-star me-1"></i>
                Destacado
              </Badge>
            )}
          </div>
        </div>
        
        <div className="rating mb-2">
          {renderStars(product.rating)}
          <span className="ms-2 small">({product.rating}/5)</span>
        </div>
        
        <Card.Text className="flex-grow-1">
          {product.descripcion}
        </Card.Text>
        
        <div className="mb-3">
          <h6 className="text-white mb-2">Características:</h6>
          <ul className="list-unstyled small">
            {product.caracteristicas.slice(0, 3).map((feature, index) => (
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
            {product.tecnologias.map((tech, index) => (
              <Badge key={index} bg="secondary" className="glass-btn">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <div className="price-container">
              {product.descuento ? (
                <div>
                  <div className="original-price text-muted text-decoration-line-through small">
                    {product.precioOriginal}
                  </div>
                  <div className="current-price text-success fw-bold">{product.precio}</div>
                </div>
              ) : (
                <div className="price">{product.precio}</div>
              )}
            </div>
            <Button 
              className="glass-btn btn-success"
              onClick={handleAddToCart}
            >
              <i className="fas fa-cart-plus me-2"></i>
              Agregar
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;