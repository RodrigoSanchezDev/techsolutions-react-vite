/**
 * TechSolutions Pro - Hook useCart
 * Hook personalizado para usar el contexto del Carrito
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import { useContext } from 'react';
import { CartContext } from '../contexts/cartContextDefinition';

/**
 * Custom hook to use cart context
 * @returns {Object} Cart context value
 * @throws {Error} If used outside CartProvider
 */
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
