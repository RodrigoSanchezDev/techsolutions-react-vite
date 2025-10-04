import React from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

/**
 * Cart Dropdown Component
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether dropdown is open
 * @param {Function} props.onClose - Close dropdown function
 * @returns {JSX.Element} CartDropdown component
 */
const CartDropdown = ({ isOpen, onClose }) => {
  const { cart, removeItem } = useCart();

  if (!isOpen) return null;

  const getItemPrice = (priceString) => {
    return parseFloat(priceString.replace(/[$,/mes]/g, ''));
  };

  const subtotal = cart.items.reduce((total, item) => {
    return total + (getItemPrice(item.precio) * item.quantity);
  }, 0);

  return (
    <>
      {/* Overlay para cerrar al hacer click fuera */}
      <div 
        className="cart-dropdown-overlay"
        onClick={onClose}
      />
      
      {/* Burbuja del carrito */}
      <div className="cart-dropdown">
        <div className="cart-dropdown-header">
          <h6 className="mb-0 text-white">
            <i className="fas fa-shopping-cart me-2"></i>
            Carrito ({cart.itemCount})
          </h6>
          <button 
            className="btn-close-cart"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <i className="fas fa-times text-white"></i>
          </button>
        </div>

        <div className="cart-dropdown-body">
          {cart.items.length === 0 ? (
            <div className="text-center py-4">
              <i className="fas fa-shopping-cart fa-2x mb-3 text-white opacity-50"></i>
              <p className="text-white mb-0">Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="cart-items-list">
                {cart.items.slice(0, 3).map((item) => (
                  <div key={item.id} className="cart-dropdown-item">
                    <img 
                      src={item.imagen} 
                      alt={item.nombre}
                      className="cart-item-image"
                    />
                    <div className="cart-item-info">
                      <h6 className="cart-item-name">{item.nombre}</h6>
                      <div className="cart-item-details">
                        <span className="cart-item-price">{item.precio}</span>
                        <Badge 
                          bg={item.type === 'producto' ? 'primary' : 'success'} 
                          className="ms-2"
                        >
                          {item.quantity}x
                        </Badge>
                      </div>
                    </div>
                    <button 
                      className="btn-remove-item"
                      onClick={() => removeItem(item.id)}
                      aria-label="Eliminar"
                    >
                      <i className="fas fa-trash text-white"></i>
                    </button>
                  </div>
                ))}
                
                {cart.items.length > 3 && (
                  <div className="text-center text-white py-2">
                    <small>
                      <i className="fas fa-ellipsis-h me-2"></i>
                      y {cart.items.length - 3} productos más
                    </small>
                  </div>
                )}
              </div>

              <div className="cart-dropdown-summary">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-white">Subtotal:</span>
                  <span className="text-white fw-bold">${subtotal.toLocaleString()}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {cart.items.length > 0 && (
          <div className="cart-dropdown-footer">
            <div className="d-grid gap-2">
              <Link 
                to="/cart" 
                className="glass-btn btn-warning"
                onClick={onClose}
              >
                <i className="fas fa-shopping-cart me-2"></i>
                Ver Carrito
              </Link>
              <Link 
                to="/checkout" 
                className="glass-btn btn-primary"
                onClick={onClose}
              >
                <i className="fas fa-credit-card me-2"></i>
                Pagar Ahora
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDropdown;