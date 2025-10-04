/**
 * TechSolutions Pro - Services Data Hook
 * Custom Hook for Service Data Management
 * 
 * React hook for managing service data with loading states and filtering.
 * Provides featured services functionality and category-based filtering.
 * Integrates with JSON data source.
 * 
 * @author Rodrigo Sanchez
 * @website https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @copyright © 2025 Rodrigo Sanchez. All rights reserved.
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