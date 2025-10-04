/**
 * TechSolutions Pro - Funciones Utilitarias
 * Helpers y Utilidades Reutilizables
 * 
 * Colección de funciones utilitarias para evitar duplicación de código.
 * Incluye helpers para renderizado de UI, formateo y lógica compartida.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import React from 'react';

/**
 * Renderiza estrellas de rating visualmente
 * @param {number} rating - Calificación del 1 al 5
 * @returns {JSX.Element[]} Array de iconos de estrellas
 */
export const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={`fas fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}
    />
  ));
};

/**
 * Formatea precio chileno (agrega separador de miles)
 * @param {string|number} price - Precio a formatear
 * @returns {string} Precio formateado
 */
export const formatPrice = (price) => {
  if (typeof price === 'string') {
    return price; // Ya viene formateado del JSON
  }
  return `$${price.toLocaleString('es-CL')}`;
};

/**
 * Trunca texto largo y agrega puntos suspensivos
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} Texto truncado
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Calcula el total del carrito
 * @param {Array} items - Items del carrito
 * @returns {number} Total calculado
 */
export const calculateCartTotal = (items) => {
  return items.reduce((total, item) => {
    // Extrae el número del precio (ej: "$1,299.990" -> 1299990)
    const price = parseFloat(item.precio.replace(/[$,.]/g, ''));
    return total + (price * item.quantity);
  }, 0);
};

/**
 * Genera un ID único simple
 * @returns {string} ID único
 */
export const generateUniqueId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Valida formato de email
 * @param {string} email - Email a validar
 * @returns {boolean} True si es válido
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida formato de teléfono chileno
 * @param {string} phone - Teléfono a validar
 * @returns {boolean} True si es válido
 */
export const isValidPhone = (phone) => {
  // Acepta formatos: +56912345678, 912345678, +56 9 1234 5678
  const phoneRegex = /^(\+?56)?[\s]?[9]\d{8}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ''));
};

/**
 * Obtiene el label de una categoría
 * @param {string} category - Clave de la categoría
 * @returns {string} Label de la categoría
 */
export const getCategoryLabel = (category) => {
  const labels = {
    'todos': 'Todos',
    'computadoras': 'Computadoras',
    'software': 'Software',
    'seguridad': 'Seguridad',
    'desarrollo': 'Desarrollo Web',
    'diseno': 'Diseño UX/UI',
    'cloud': 'Cloud',
    'consultoria': 'Consultoría IT',
    'capacitacion': 'Capacitación',
    'soporte': 'Soporte Técnico'
  };
  return labels[category] || category;
};
