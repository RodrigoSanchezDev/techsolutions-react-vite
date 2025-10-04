/**
 * TechSolutions Pro - Página Catálogo de Productos
 * Listado y Filtrado de Productos E-commerce
 * 
 * Página de catálogo con filtrado por categorías, sección de productos destacados,
 * y funcionalidad de agregar al carrito. Muestra productos en layout grid responsive.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import React, { useState } from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/cards/ProductCard';
import Loading from '../components/common/Loading';

/**
 * Products Catalog Component
 * Displays filterable product grid with category navigation
 */
const Products = () => {
  const { products, loading, error } = useProducts();
  const [activeCategory, setActiveCategory] = useState('todos');

  if (loading) return <Loading />;
  if (error) return <div className="text-center text-white mt-5 pt-5">Error: {error}</div>;

  const categories = ['todos', ...Array.from(new Set(products.map(p => p.categoria)))];
  
  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(product => product.categoria === activeCategory);

  const getCategoryLabel = (category) => {
    const labels = {
      'todos': 'Todos',
      'enterprise': 'Enterprise',
      'ecommerce': 'E-commerce',
      'analytics': 'Analytics',
      'crm': 'CRM',
      'mobile': 'Móvil'
    };
    return labels[category] || category;
  };

  return (
    <div className="products-page pt-5 mt-5">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col>
            <div className="text-center text-white">
              <h1 className="display-4 fw-bold mb-3">
                <i className="fas fa-box me-3"></i>
                Nuestros Productos
              </h1>
              <p className="lead">
                Soluciones de software empresarial diseñadas para impulsar tu negocio
              </p>
            </div>
          </Col>
        </Row>

        {/* Category Filter */}
        <Row className="mb-5">
          <Col>
            <div className="d-flex justify-content-center">
              <div className="glass-card p-3">
                <ButtonGroup className="flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={activeCategory === category ? 'primary' : 'outline-light'}
                      className={`glass-btn me-2 mb-2 ${activeCategory === category ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {getCategoryLabel(category)}
                    </Button>
                  ))}
                </ButtonGroup>
              </div>
            </div>
          </Col>
        </Row>

        {/* Products Grid */}
        <Row>
          {filteredProducts.map((product) => (
            <Col lg={4} md={6} className="mb-4" key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>

        {filteredProducts.length === 0 && (
          <Row>
            <Col>
              <div className="glass-card p-5 text-center">
                <div className="text-white">
                  <i className="fas fa-search fa-3x mb-3 text-muted"></i>
                  <h4>No se encontraron productos</h4>
                  <p>No hay productos disponibles en esta categoría.</p>
                </div>
              </div>
            </Col>
          </Row>
        )}

        {/* CTA Section */}
        <Row className="mt-5">
          <Col>
            <div className="glass-card p-5 text-center">
              <div className="text-white">
                <h3 className="mb-3">¿No encuentras lo que buscas?</h3>
                <p className="lead mb-4">
                  Desarrollamos soluciones personalizadas según tus necesidades específicas
                </p>
                <div>
                  <Button className="glass-btn btn-warning me-3" href="/contact">
                    <i className="fas fa-phone me-2"></i>
                    Contactar Ahora
                  </Button>
                  <Button className="glass-btn btn-success" href="/services">
                    <i className="fas fa-cogs me-2"></i>
                    Ver Servicios
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;