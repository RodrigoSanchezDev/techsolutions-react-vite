/**
 * TechSolutions Pro - Hook de Datos de Servicios
 * Hook Personalizado para Gestión de Datos de Servicios
 * 
 * Hook de React para gestionar datos de servicios con estados de carga y filtrado.
 * Proporciona funcionalidad de servicios destacados y filtrado basado en categorías.
 * Se integra con fuente de datos JSON.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import { useState, useEffect } from 'react';

/**
 * @typedef {Object} Service
 * @property {number} id - Service ID
 * @property {string} nombre - Service name
 * @property {string} categoria - Service category
 * @property {string} precio - Service price
 * @property {string} [precioOriginal] - Original price before discount
 * @property {number} [descuento] - Discount percentage
 * @property {number} rating - Service rating
 * @property {string} imagen - Service image URL
 * @property {string} descripcion - Service description
 * @property {string[]} caracteristicas - Service features
 * @property {string[]} tecnologias - Technologies used
 * @property {boolean} [destacado] - Whether service is featured
 */

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true);
        const response = await import('../data/servicios.json');
        setServices(response.servicios);
      } catch (err) {
        setError('Error loading services data');
        console.error('Error loading services:', err);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return { services, loading, error };
};

export const getFeaturedServices = (services) => {
  return services.filter(service => service.destacado);
};

export const getServicesByCategory = (services, category) => {
  return services.filter(service => service.categoria === category);
};