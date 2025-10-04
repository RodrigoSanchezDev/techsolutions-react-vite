/**
 * TechSolutions Pro - Testimonials Data Hook
 * Custom Hook for Customer Testimonials
 * 
 * React hook for loading and managing customer testimonial data.
 * Provides loading states and error handling for testimonial display.
 * Supports customer rating and project information.
 * 
 * @author Rodrigo Sanchez
 * @website https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @copyright © 2025 Rodrigo Sanchez. All rights reserved.
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