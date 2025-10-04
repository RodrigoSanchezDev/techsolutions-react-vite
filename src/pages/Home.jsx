/**
 * TechSolutions Pro - Componente Página de Inicio
 * Página Principal con Hero Section y Contenido Destacado
 * 
 * Página principal que incluye hero section, estadísticas de la empresa,
 * productos destacados, servicios, testimonios y secciones de llamado a la acción.
 * Implementa diseño responsive con estilo glassmorphism.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useProducts, getFeaturedProducts } from '../hooks/useProducts';
import { useServices, getFeaturedServices } from '../hooks/useServices';
import { useTestimonials } from '../hooks/useTestimonials';
import ProductCard from '../components/cards/ProductCard';
import ServiceCard from '../components/cards/ServiceCard';
import TestimonialCard from '../components/cards/TestimonialCard';
import Loading from '../components/common/Loading';

/**
 * Home Page Component
 * Renders the main landing page with hero section, statistics, and featured content
 */
const Home = () => {
  const { products, loading: productsLoading } = useProducts();
  const { services, loading: servicesLoading } = useServices();
  const { testimonials, loading: testimonialsLoading } = useTestimonials();

  const featuredProducts = getFeaturedProducts(products);
  const featuredServices = getFeaturedServices(services);

  if (productsLoading || servicesLoading || testimonialsLoading) {
    return <Loading />;
  }

  return (
    <div className="home-page">
      {/* Hero Section - Two Column Layout */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center g-5">
            {/* Left Column - Text Content */}
            <Col lg={6}>
              <div className="hero-content-left">
                <h1 className="hero-title">
                  <i className="fas fa-rocket me-3"></i>
                  Transformamos tus ideas en soluciones digitales
                </h1>
                <p className="hero-description">
                  Desarrollamos software empresarial de alta calidad con las últimas tecnologías. 
                  Desde aplicaciones web hasta sistemas ERP, convertimos tu visión en realidad.
                </p>
                <div className="hero-buttons">
                  <Link to="/products" className="glass-btn btn-primary me-3">
                    <i className="fas fa-box me-2"></i>
                    Ver Productos
                  </Link>
                  <Link to="/services" className="glass-btn btn-success">
                    <i className="fas fa-cogs me-2"></i>
                    Nuestros Servicios
                  </Link>
                </div>
              </div>
            </Col>

            {/* Right Column - Image */}
            <Col lg={6}>
              <div className="hero-image-container">
                <div className="hero-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop" 
                    alt="Equipo de trabajo colaborando en soluciones digitales" 
                    className="hero-image"
                  />
                  <div className="hero-image-accent"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center">
            <Col md={3} sm={6} className="mb-4">
              <div className="glass-card p-4">
                <div className="text-white">
                  <i className="fas fa-users fa-3x mb-3 text-white"></i>
                  <h3>500+</h3>
                  <p>Clientes Satisfechos</p>
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="glass-card p-4">
                <div className="text-white">
                  <i className="fas fa-project-diagram fa-3x mb-3 text-white"></i>
                  <h3>1200+</h3>
                  <p>Proyectos Completados</p>
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="glass-card p-4">
                <div className="text-white">
                  <i className="fas fa-award fa-3x mb-3 text-white"></i>
                  <h3>50+</h3>
                  <p>Premios Obtenidos</p>
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="glass-card p-4">
                <div className="text-white">
                  <i className="fas fa-clock fa-3x mb-3 text-white"></i>
                  <h3>24/7</h3>
                  <p>Soporte Técnico</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col>
              <div className="text-center text-white">
                <h2 className="display-5 fw-bold mb-3">Productos Destacados</h2>
                <p className="lead">Descubre nuestras soluciones más populares</p>
              </div>
            </Col>
          </Row>
          <Row>
            {featuredProducts.slice(0, 3).map((product) => (
              <Col lg={4} md={6} className="mb-4" key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <Link to="/products" className="glass-btn btn-primary">
                <i className="fas fa-arrow-right me-2"></i>
                Ver Todos los Productos
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Services */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col>
              <div className="text-center text-white">
                <h2 className="display-5 fw-bold mb-3">Servicios Destacados</h2>
                <p className="lead">Servicios profesionales para hacer crecer tu negocio</p>
              </div>
            </Col>
          </Row>
          <Row>
            {featuredServices.slice(0, 3).map((service) => (
              <Col lg={4} md={6} className="mb-4" key={service.id}>
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <Link to="/services" className="glass-btn btn-success">
                <i className="fas fa-arrow-right me-2"></i>
                Ver Todos los Servicios
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col>
              <div className="text-center text-white">
                <h2 className="display-5 fw-bold mb-3">Lo que dicen nuestros clientes</h2>
                <p className="lead">Testimonios reales de empresas que confían en nosotros</p>
              </div>
            </Col>
          </Row>
          <Row>
            {testimonials.slice(0, 3).map((testimonial) => (
              <Col lg={4} md={6} className="mb-4" key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="glass-card p-5 text-center">
                <div className="text-white">
                  <h3 className="display-6 fw-bold mb-3">
                    ¿Listo para transformar tu negocio?
                  </h3>
                  <p className="lead mb-4">
                    Contacta con nuestro equipo de expertos y descubre cómo podemos 
                    ayudarte a alcanzar tus objetivos digitales.
                  </p>
                  <div>
                    <Link to="/contact" className="glass-btn btn-warning me-3">
                      <i className="fas fa-phone me-2"></i>
                      Contactar Ahora
                    </Link>
                    <Link to="/gallery" className="glass-btn btn-primary">
                      <i className="fas fa-images me-2"></i>
                      Ver Portafolio
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;