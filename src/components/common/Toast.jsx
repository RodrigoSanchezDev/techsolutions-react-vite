/**
 * TechSolutions Pro - Componente Toast de Notificaciones
 * Sistema de Notificaciones Animadas
 * 
 * Componente reutilizable para mostrar notificaciones toast con animaciones.
 * Soporta diferentes tipos de notificaciones y cierre automático.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';

/**
 * Toast Notification Component
 * @param {Object} props - Component props
 * @param {boolean} props.show - Whether to show the toast
 * @param {Function} props.onClose - Function to call when closing
 * @param {string} props.message - Message to display
 * @param {string} props.title - Toast title
 * @param {string} props.variant - Bootstrap variant (success, danger, info, warning)
 * @param {number} props.duration - Auto-close duration in milliseconds (default: 3000)
 * @returns {JSX.Element|null} Toast component or null
 */
const Toast = ({ 
  show, 
  onClose, 
  message, 
  title = 'Notificación',
  variant = 'success',
  duration = 3000 
}) => {
  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  const getIcon = () => {
    switch (variant) {
      case 'success':
        return 'fa-check-circle';
      case 'danger':
        return 'fa-exclamation-circle';
      case 'warning':
        return 'fa-exclamation-triangle';
      case 'info':
        return 'fa-info-circle';
      default:
        return 'fa-bell';
    }
  };

  return (
    <div className="toast-container">
      <Alert 
        variant={variant} 
        onClose={onClose} 
        dismissible
        className="toast-notification glass-card"
      >
        <div className="d-flex align-items-center">
          <i className={`fas ${getIcon()} me-3 fs-4`}></i>
          <div>
            <Alert.Heading className="mb-1 h6">{title}</Alert.Heading>
            <p className="mb-0 small">{message}</p>
          </div>
        </div>
      </Alert>
    </div>
  );
};

export default Toast;
