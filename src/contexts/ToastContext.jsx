/**
 * TechSolutions Pro - Toast Provider Component
 * Proveedor de Contexto para Notificaciones Toast
 * 
 * Proveedor de contexto para gestión centralizada de notificaciones toast.
 * Permite mostrar notificaciones desde cualquier componente de la aplicación.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import React, { useState } from 'react';
import Toast from '../components/common/Toast';
import { ToastContext } from './toastContextDefinition';

// Re-export context for convenience
export { ToastContext };

/**
 * Toast Provider Component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Provider component
 */
export function ToastProvider({ children }) {
  const [toast, setToast] = useState({
    show: false,
    message: '',
    title: '',
    variant: 'success',
    duration: 3000
  });

  /**
   * Show a toast notification
   * @param {string} message - Toast message
   * @param {Object} options - Toast options
   * @param {string} options.title - Toast title
   * @param {string} options.variant - Toast variant (success, danger, warning, info)
   * @param {number} options.duration - Auto-close duration
   */
  const showToast = (message, options = {}) => {
    setToast({
      show: true,
      message,
      title: options.title || 'Notificación',
      variant: options.variant || 'success',
      duration: options.duration || 3000
    });
  };

  /**
   * Hide the toast
   */
  const hideToast = () => {
    setToast(prev => ({ ...prev, show: false }));
  };

  const value = { showToast, hideToast };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toast
        show={toast.show}
        onClose={hideToast}
        message={toast.message}
        title={toast.title}
        variant={toast.variant}
        duration={toast.duration}
      />
    </ToastContext.Provider>
  );
}

ToastProvider.displayName = 'ToastProvider';
