/**
 * TechSolutions Pro - Componente Productos Recomendados
 * Sección "También te puede interesar"
 * 
 * Muestra productos más vendidos excluyendo los que ya están en el carrito.
 * Ayuda a aumentar las ventas mediante recomendaciones inteligentes.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useProducts } from '../../hooks/useProducts';
import { useCart } from '../../hooks/useCart';
import ProductCard from '../cards/ProductCard';

/**
 * Recommended Products Component
 * Shows best-selling products excluding items already in cart
 * @returns {JSX.Element} RecommendedProducts component
 */
const RecommendedProducts = () => {
  const { products } = useProducts();
  const { cart } = useCart();

  // IDs de productos ya en el carrito
  const cartProductIds = cart.items.map(item => item.id);

  // Filtrar productos: excluir los que están en el carrito y ordenar por vendidos
  const recommendedProducts = products
    .filter(product => !cartProductIds.includes(product.id))
    .sort((a, b) => (b.vendidos || 0) - (a.vendidos || 0))
    .slice(0, 3); // Mostrar solo los 3 más vendidos

  // No mostrar la sección si no hay productos recomendados
  if (recommendedProducts.length === 0) {
    return null;
  }

  return (
    <section className="recommended-products py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <div className="text-center text-white">
              <h2 className="display-6 fw-bold mb-2">
                <i className="fas fa-star me-3 text-warning"></i>
                También te puede interesar
              </h2>
              <p className="lead text-white-50">
                Los productos más populares seleccionados para ti
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {recommendedProducts.map((product) => (
            <Col lg={4} md={6} className="mb-4" key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default RecommendedProducts;
