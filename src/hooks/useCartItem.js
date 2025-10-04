/**
 * TechSolutions Pro - Hook de Item del Carrito
 * Lógica Reutilizable para Cards de Productos/Servicios
 * 
 * Hook personalizado que encapsula toda la lógica de gestión del carrito
 * para tarjetas de productos y servicios, evitando duplicación de código.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import { useState, useMemo } from 'react';
import { useCart } from './useCart';
import { useToast } from './useToast';

/**
 * Hook para manejar la lógica del carrito en las tarjetas de productos/servicios
 * @param {Object} item - Producto o servicio
 * @param {string} itemType - Tipo: 'producto' o 'servicio'
 * @returns {Object} Estado y funciones para manejar el carrito
 */
export const useCartItem = (item, itemType = 'producto') => {
  const { cart, addItem, updateQuantity, removeItem } = useCart();
  const { showToast } = useToast();
  const [isAdding, setIsAdding] = useState(false);

  // Verificar si el item ya está en el carrito (memoizado para mejor rendimiento)
  const itemInCart = useMemo(() => {
    return cart.items.find(cartItem => cartItem.id === item.id);
  }, [cart.items, item.id]);

  // Cantidad actual del item en el carrito
  const quantity = itemInCart ? itemInCart.quantity : 0;

  /**
   * Agrega el item al carrito
   */
  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Agregar item al carrito
    addItem({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      imagen: item.imagen,
      type: itemType
    }, 1);

    // Mostrar notificación toast
    const itemLabel = itemType === 'producto' ? 'Producto' : 'Servicio';
    showToast(`${item.nombre} agregado al carrito`, {
      title: `¡${itemLabel} agregado!`,
      variant: 'success',
      duration: 3000
    });

    // Animación de confirmación visual (2 segundos)
    setTimeout(() => {
      setIsAdding(false);
    }, 2000);
  };

  /**
   * Incrementa la cantidad del item en el carrito
   */
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    updateQuantity(item.id, newQuantity);
    
    showToast(`Cantidad actualizada: ${newQuantity}`, {
      title: 'Carrito actualizado',
      variant: 'info',
      duration: 2000
    });
  };

  /**
   * Decrementa la cantidad del item en el carrito
   * Si la cantidad llega a 0, elimina el item
   */
  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      updateQuantity(item.id, newQuantity);
      
      showToast(`Cantidad actualizada: ${newQuantity}`, {
        title: 'Carrito actualizado',
        variant: 'info',
        duration: 2000
      });
    } else {
      // Eliminar del carrito si la cantidad es 1
      removeItem(item.id);
      
      const itemLabel = itemType === 'producto' ? 'Producto' : 'Servicio';
      showToast(`${item.nombre} eliminado del carrito`, {
        title: `${itemLabel} eliminado`,
        variant: 'warning',
        duration: 2000
      });
    }
  };

  return {
    itemInCart,
    quantity,
    isAdding,
    handleAddToCart,
    handleIncrement,
    handleDecrement
  };
};
