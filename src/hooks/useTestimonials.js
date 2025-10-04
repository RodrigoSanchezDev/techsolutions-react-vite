/**
 * TechSolutions Pro - Hook de Datos de Testimonios
 * Hook Personalizado para Testimonios de Clientes
 * 
 * Hook de React para cargar y gestionar datos de testimonios de clientes.
 * Proporciona estados de carga y manejo de errores para visualización de testimonios.
 * Soporta calificación de clientes e información de proyectos.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import { useState, useEffect } from 'react';

/**
 * @typedef {Object} Testimonial
 * @property {number} id - Testimonial ID
 * @property {string} nombre - Customer name
 * @property {string} cargo - Customer job title
 * @property {string} empresa - Customer company
 * @property {string} testimonio - Testimonial text
 * @property {number} rating - Customer rating
 * @property {string} imagen - Customer image URL
 * @property {string} proyecto - Project name
 */

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        setLoading(true);
        const response = await import('../data/testimonios.json');
        setTestimonials(response.testimonios);
      } catch (err) {
        setError('Error loading testimonials data');
        console.error('Error loading testimonials:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  return { testimonials, loading, error };
};