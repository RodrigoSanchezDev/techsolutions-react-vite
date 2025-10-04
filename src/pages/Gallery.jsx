/**
 * TechSolutions Pro - Project Gallery Page
 * Portfolio Showcase with Project Details
 * 
 * Interactive project gallery with category filtering, project cards,
 * detailed project modals, and company statistics.
 * Features responsive grid layout and project status indicators.
 * 
 * @author Rodrigo Sanchez
 * @website https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @copyright © 2025 Rodrigo Sanchez. All rights reserved.
 */

import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Badge } from 'react-bootstrap';


const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('todos');

  // Mock project data - en un proyecto real esto vendría de proyectos.json
  const projects = [
    {
      id: 1,
      title: "E-commerce Retail Plus",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "Plataforma de comercio electrónico completa con sistema de pagos integrado, gestión de inventario y dashboard de analytics avanzado.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "RetailPlus Corp",
      year: "2024",
      status: "Completado"
    },
    {
      id: 2,
      title: "Sistema ERP Empresarial",
      category: "enterprise",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "Sistema de planificación de recursos empresariales con módulos de finanzas, RRHH, inventario y reportes en tiempo real.",
      technologies: ["Angular", ".NET Core", "SQL Server", "Azure"],
      client: "InnovaCorp",
      year: "2024",
      status: "Completado"
    },
    {
      id: 3,
      title: "App Móvil HealthTech",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      description: "Aplicación móvil para gestión de citas médicas con integración de telemedicina y seguimiento de pacientes.",
      technologies: ["React Native", "Firebase", "WebRTC", "Node.js"],
      client: "HealthTech Solutions",
      year: "2023",
      status: "Completado"
    },
    {
      id: 4,
      title: "Dashboard Analytics BI",
      category: "analytics",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      description: "Dashboard de inteligencia de negocios con visualizaciones interactivas y machine learning predictivo.",
      technologies: ["Vue.js", "Python", "TensorFlow", "PostgreSQL"],
      client: "DataCorp Analytics",
      year: "2023",
      status: "Completado"
    },
    {
      id: 5,
      title: "Portal Educativo Online",
      category: "web",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      description: "Plataforma educativa con sistema de cursos online, evaluaciones automatizadas y seguimiento de progreso.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      client: "EduTech Institute",
      year: "2024",
      status: "En desarrollo"
    },
    {
      id: 6,
      title: "Sistema IoT Industrial",
      category: "iot",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      description: "Sistema de monitoreo industrial con sensores IoT, alertas automáticas y dashboard de control en tiempo real.",
      technologies: ["React", "Node.js", "MQTT", "InfluxDB"],
      client: "Industrial Solutions",
      year: "2024",
      status: "En desarrollo"
    }
  ];

  const categories = ['todos', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryLabel = (category) => {
    const labels = {
      'todos': 'Todos',
      'ecommerce': 'E-commerce',
      'enterprise': 'Enterprise',
      'mobile': 'Móvil',
      'analytics': 'Analytics',
      'web': 'Web',
      'iot': 'IoT'
    };
    return labels[category] || category;
  };

  const handleProjectClick = (project ) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Completado': { bg: 'success', icon: 'fas fa-check-circle' },
      'En desarrollo': { bg: 'warning', icon: 'fas fa-clock' },
      'Planificado': { bg: 'info', icon: 'fas fa-calendar' }
    };
    
    const config = statusConfig[status] || { bg: 'secondary', icon: 'fas fa-question' };
    
    return (
      <Badge bg={config.bg}>
        <i className={`${config.icon} me-1`}></i>
        {status}
      </Badge>
    );
  };

  return (
    <div className="gallery-page pt-5 mt-5">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col>
            <div className="text-center text-white">
              <h1 className="display-4 fw-bold mb-3">
                <i className="fas fa-images me-3"></i>
                Nuestro Portafolio
              </h1>
              <p className="lead">
                Explora algunos de nuestros proyectos más destacados y casos de éxito
              </p>
            </div>
          </Col>
        </Row>

        {/* Category Filter */}
        <Row className="mb-5">
          <Col>
            <div className="d-flex justify-content-center">
              <div className="glass-card p-3">
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={activeCategory === category ? 'primary' : 'outline-light'}
                      className={`glass-btn ${activeCategory === category ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {getCategoryLabel(category)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="mb-5">
          <Col>
            <div className="glass-card p-4">
              <Row className="text-center text-white">
                <Col md={3}>
                  <i className="fas fa-project-diagram fa-3x mb-2 text-white"></i>
                  <h3>50+</h3>
                  <p>Proyectos Completados</p>
                </Col>
                <Col md={3}>
                  <i className="fas fa-users fa-3x mb-2 text-white"></i>
                  <h3>30+</h3>
                  <p>Clientes Satisfechos</p>
                </Col>
                <Col md={3}>
                  <i className="fas fa-code fa-3x mb-2 text-white"></i>
                  <h3>15+</h3>
                  <p>Tecnologías Dominadas</p>
                </Col>
                <Col md={3}>
                  <i className="fas fa-calendar fa-3x mb-2 text-white"></i>
                  <h3>5+</h3>
                  <p>Años de Experiencia</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Project Grid */}
        <Row>
          {filteredProjects.map((project) => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <div 
                className="glass-card overflow-hidden h-100 project-card d-flex flex-column"
                style={{ cursor: 'pointer' }}
              >
                <div className="position-relative" onClick={() => handleProjectClick(project)}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-100"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 p-2">
                    {getStatusBadge(project.status)}
                  </div>
                </div>
                
                <div className="p-4 text-white d-flex flex-column flex-grow-1">
                  <h5 className="mb-2">{project.title}</h5>
                  <p className="text-white-50 small mb-3" style={{ 
                    minHeight: '60px',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {project.description}
                  </p>
                  
                  <div className="mb-3">
                    <div className="d-flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} bg="secondary" className="glass-btn small">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge bg="secondary" className="glass-btn small">
                          +{project.technologies.length - 3} más
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <small className="text-white-50">
                      <i className="fas fa-building me-1"></i>
                      {project.client}
                    </small>
                    <small className="text-white-50">
                      <i className="fas fa-calendar me-1"></i>
                      {project.year}
                    </small>
                  </div>
                  
                  <div className="mt-auto">
                    <Button 
                      className="glass-btn btn-primary btn-sm w-100"
                      onClick={() => handleProjectClick(project)}
                    >
                      <i className="fas fa-eye me-2"></i>
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {filteredProjects.length === 0 && (
          <Row>
            <Col>
              <div className="glass-card p-5 text-center">
                <div className="text-white">
                  <i className="fas fa-search fa-3x mb-3 text-muted"></i>
                  <h4>No se encontraron proyectos</h4>
                  <p>No hay proyectos disponibles en esta categoría.</p>
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
                <h3 className="mb-3">¿Tienes un proyecto en mente?</h3>
                <p className="lead mb-4">
                  Trabajemos juntos para crear algo extraordinario
                </p>
                <div>
                  <Button className="glass-btn btn-success me-3" href="/contact">
                    <i className="fas fa-rocket me-2"></i>
                    Iniciar Proyecto
                  </Button>
                  <Button className="glass-btn btn-primary" href="/services">
                    <i className="fas fa-cogs me-2"></i>
                    Ver Servicios
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Project Detail Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton className="glass-card border-0">
          <Modal.Title className="text-white">
            {selectedProject?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="glass-card text-white">
          {selectedProject && (
            <>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-100 rounded mb-4"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5>Detalles del Proyecto</h5>
                  {getStatusBadge(selectedProject.status)}
                </div>
                
                <p className="lead">{selectedProject.description}</p>
                
                <Row className="mb-4">
                  <Col md={6}>
                    <strong>Cliente:</strong>
                    <p className="text-white-50">{selectedProject.client}</p>
                  </Col>
                  <Col md={6}>
                    <strong>Año:</strong>
                    <p className="text-white-50">{selectedProject.year}</p>
                  </Col>
                </Row>
                
                <div className="mb-4">
                  <strong>Tecnologías Utilizadas:</strong>
                  <div className="mt-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} bg="primary" className="me-2 mb-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="glass-card border-0">
          <Button className="glass-btn btn-primary" href="/contact">
            <i className="fas fa-phone me-2"></i>
            Solicitar Proyecto Similar
          </Button>
          <Button className="glass-btn" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Gallery;