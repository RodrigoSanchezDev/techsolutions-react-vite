/**
 * TechSolutions Pro - Products Data Hook
 * Custom Hook for Product Data Management
 * 
 * React hook for fetching and managing product data.
 * Provides loading states, error handling, and featured product filtering.
 * Loads data from JSON and provides utility functions.
 * 
 * @author Rodrigo Sanchez
 * @website https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @copyright © 2025 Rodrigo Sanchez. All rights reserved.
 */

import { useState, useEffect } from 'react';

/**
 * @typedef {Object} Product
 * @property {number} id - Product ID
 * @property {string} nombre - Product name
 * @property {string} categoria - Product category
 * @property {string} precio - Product price
 * @property {string} [precioOriginal] - Original price before discount
 * @property {number} [descuento] - Discount percentage
 * @property {number} rating - Product rating
 * @property {string} imagen - Product image URL
 * @property {string} descripcion - Product description
 * @property {string[]} caracteristicas - Product features
 * @property {string[]} tecnologias - Technologies used
 * @property {boolean} [destacado] - Whether product is featured
 */

/**
 * Custom hook for managing products
 * @returns {Object} Products data, loading state, and error
 */
export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const response = await import('../data/productos.json');
        setProducts(response.productos);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error loading products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading, error };
}

/**
 * Get featured products from products array
 * @param {Product[]} products - Array of products
 * @returns {Product[]} Featured products
 */
export const getFeaturedProducts = (products) => {
  return products.filter(product => product.destacado);
};

/**
 * Get products by category
 * @param {Product[]} products - Array of products
 * @param {string} category - Category to filter by
 * @returns {Product[]} Filtered products
 */
export const getProductsByCategory = (products, category) => {
  return products.filter(product => product.categoria === category);
};

/**
 * Custom hook for filtering products
 * @param {Product[]} products - Array of products to filter
 * @returns {Object} Filtered products, active category, and filter function
 */
export function useProductFilter(products) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState('todos');

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === 'todos') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.categoria === category));
    }
  };

  return {
    filteredProducts,
    activeCategory,
    filterByCategory
  };
}