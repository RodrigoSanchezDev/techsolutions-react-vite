/**
 * TechSolutions Pro - Footer Component
 * Site Footer with Company Information
 * 
 * Website footer containing company information, social media links,
 * service links, and contact information. Features glassmorphism styling
 * and responsive layout.
 * 
 * @author Rodrigo Sanchez
 * @website https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @copyright © 2025 Rodrigo Sanchez. All rights reserved.
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Footer Component
 * Main site footer with company info, contact details and social links
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
  return (
    <footer className="glass-footer py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="text-white mb-3">
              <i className="fas fa-laptop-code me-2"></i>
              TechSolutions Pro
            </h5>
            <p className="text-white-50">
              Soluciones tecnológicas integrales para hacer crecer tu negocio. 
              Desarrollo web, aplicaciones móviles y consultoría IT.
            </p>
            <div className="d-flex gap-3">
              <a href="https://facebook.com/techsolutions" className="glass-btn text-decoration-none" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/techsolutions" className="glass-btn text-decoration-none" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/company/techsolutions" className="glass-btn text-decoration-none" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/techsolutions" className="glass-btn text-decoration-none" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5 className="text-white mb-3">Contacto</h5>
            <div className="contact-info">
              <p className="mb-2">
                <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                Santiago, Chile
              </p>
              <p className="mb-2">
                <i className="fas fa-phone me-2 text-success"></i>
                +56 9 1234 5678
              </p>
              <p className="mb-0">
                <i className="fas fa-envelope me-2 text-warning"></i>
                info@techsolutions.cl
              </p>
            </div>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5 className="text-primary mb-3">Horarios</h5>
            <div className="schedule">
              <p className="mb-2">
                <strong>Lunes - Viernes:</strong><br />
                9:00 AM - 6:00 PM
              </p>
              <p className="mb-2">
                <strong>Sábados:</strong><br />
                10:00 AM - 2:00 PM
              </p>
              <p className="mb-0">
                <strong>Domingos:</strong><br />
                Cerrado
              </p>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4 border-secondary" />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0 text-white">
              © 2024 TechSolutions Pro. Todos los derechos reservados.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0 text-white">
              Desarrollado con 
              <i className="fas fa-heart text-white mx-1"></i>
              para nuestros clientes
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;