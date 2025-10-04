/**
 * TechSolutions Pro - Services Catalog Page
 * Professional Services Showcase
 * 
 * Services listing page with category filtering, service cards,
 * and call-to-action sections for service inquiries.
 * Features responsive design and smooth category transitions.
 * 
 * @author Rodrigo Sanchez
 * @website https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @copyright © 2025 Rodrigo Sanchez. All rights reserved.
 */

import React, { useState } from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { useServices } from '../hooks/useServices';
import ServiceCard from '../components/cards/ServiceCard';
import Loading from '../components/common/Loading';

const Services = () => {
  const { services, loading, error } = useServices();
  const [activeCategory, setActiveCategory] = useState('todos');

  if (loading) return <Loading />;
  if (error) return <div className="text-center text-white mt-5 pt-5">Error: {error}</div>;

  const categories = ['todos', ...Array.from(new Set(services.map(s => s.categoria)))];
  
  const filteredServices = activeCategory === 'todos' 
    ? services 
    : services.filter(service => service.categoria === activeCategory);

  const getCategoryLabel = (category) => {
    const labels = {
      'todos': 'Todos',
      'desarrollo': 'Desarrollo',
      'consultoria': 'Consultoría',
      'diseno': 'Diseño',
      'marketing': 'Marketing',
      'soporte': 'Soporte'
    };
    return labels[category] || category;
  };

  return (
    <div className="services-page pt-5 mt-5">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col>
            <div className="text-center text-white">
              <h1 className="display-4 fw-bold mb-3">
                <i className="fas fa-cogs me-3"></i>
                Nuestros Servicios
              </h1>
              <p className="lead">
                Servicios profesionales para transformar tu visión en realidad digital
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
                      variant={activeCategory === category ? 'success' : 'outline-light'}
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

        {/* Services Info */}
        <Row className="mb-5">
          <Col>
            <div className="glass-card p-4">
              <div className="text-white text-center">
                <h4 className="mb-3">
                  <i className="fas fa-info-circle me-2"></i>
                  ¿Por qué elegir nuestros servicios?
                </h4>
                <Row>
                  <Col md={3}>
                    <i className="fas fa-users fa-2x mb-2 text-white"></i>
                    <h6>Equipo Experto</h6>
                    <p className="small">Profesionales certificados con años de experiencia</p>
                  </Col>
                  <Col md={3}>
                    <i className="fas fa-clock fa-2x mb-2 text-white"></i>
                    <h6>Entrega Puntual</h6>
                    <p className="small">Cumplimos con los plazos establecidos</p>
                  </Col>
                  <Col md={3}>
                    <i className="fas fa-headset fa-2x mb-2 text-white"></i>
                    <h6>Soporte 24/7</h6>
                    <p className="small">Asistencia técnica disponible siempre</p>
                  </Col>
                  <Col md={3}>
                    <i className="fas fa-shield-alt fa-2x mb-2 text-white"></i>
                    <h6>Garantía Total</h6>
                    <p className="small">Respaldamos nuestro trabajo al 100%</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        {/* Services Grid */}
        <Row>
          {filteredServices.map((service) => (
            <Col lg={4} md={6} className="mb-4" key={service.id}>
              <ServiceCard service={service} />
            </Col>
          ))}
        </Row>

        {filteredServices.length === 0 && (
          <Row>
            <Col>
              <div className="glass-card p-5 text-center">
                <div className="text-white">
                  <i className="fas fa-search fa-3x mb-3 text-muted"></i>
                  <h4>No se encontraron servicios</h4>
                  <p>No hay servicios disponibles en esta categoría.</p>
                </div>
              </div>
            </Col>
          </Row>
        )}

        {/* Process Section */}
        <Row className="mt-5">
          <Col>
            <div className="glass-card p-5">
              <div className="text-white">
                <h3 className="text-center mb-4">Nuestro Proceso de Trabajo</h3>
                <Row>
                  <Col md={3} className="text-center mb-4">
                    <div className="process-step">
                      <div className="step-number glass-card p-3 mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                        <span className="h4">1</span>
                      </div>
                      <h5>Análisis</h5>
                      <p className="small">Estudiamos tus necesidades y objetivos</p>
                    </div>
                  </Col>
                  <Col md={3} className="text-center mb-4">
                    <div className="process-step">
                      <div className="step-number glass-card p-3 mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                        <span className="h4">2</span>
                      </div>
                      <h5>Planificación</h5>
                      <p className="small">Diseñamos la estrategia y cronograma</p>
                    </div>
                  </Col>
                  <Col md={3} className="text-center mb-4">
                    <div className="process-step">
                      <div className="step-number glass-card p-3 mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                        <span className="h4">3</span>
                      </div>
                      <h5>Desarrollo</h5>
                      <p className="small">Implementamos la solución paso a paso</p>
                    </div>
                  </Col>
                  <Col md={3} className="text-center mb-4">
                    <div className="process-step">
                      <div className="step-number glass-card p-3 mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                        <span className="h4">4</span>
                      </div>
                      <h5>Entrega</h5>
                      <p className="small">Finalizamos y brindamos soporte continuo</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row className="mt-5">
          <Col>
            <div className="glass-card p-5 text-center">
              <div className="text-white">
                <h3 className="mb-3">¿Listo para comenzar tu proyecto?</h3>
                <p className="lead mb-4">
                  Contáctanos hoy mismo y recibe una consulta gratuita para tu proyecto
                </p>
                <div>
                  <Button className="glass-btn btn-warning me-3" href="/contact">
                    <i className="fas fa-phone me-2"></i>
                    Consulta Gratuita
                  </Button>
                  <Button className="glass-btn btn-primary" href="/products">
                    <i className="fas fa-box me-2"></i>
                    Ver Productos
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

export default Services;