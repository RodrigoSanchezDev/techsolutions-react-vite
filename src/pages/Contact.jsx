/**
 * TechSolutions Pro - Página de Contacto
 * Formulario de Contacto e Información de la Empresa
 * 
 * Página de contacto con formulario profesional, detalles de la empresa,
 * horarios de atención y enlaces a redes sociales con diseño glassmorphism.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de envío de formulario
    console.log('Datos del formulario:', formData);
    
    setAlertType('success');
    setShowAlert(true);
    
    // Limpiar formulario
    setFormData({
      nombre: '',
      email: '',
      empresa: '',
      telefono: '',
      servicio: '',
      mensaje: ''
    });

    // Ocultar alerta después de 5 segundos
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="contact-page pt-5 mt-5">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col>
            <div className="text-center text-white">
              <h1 className="display-4 fw-bold mb-3">
                <i className="fas fa-envelope me-3"></i>
                Contáctanos
              </h1>
              <p className="lead">
                Estamos aquí para ayudarte a hacer realidad tu proyecto digital
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {/* Contact Form */}
          <Col lg={8} className="mb-5">
            <div className="contact-form">
              <div className="mb-4">
                <h3 className="text-white mb-3">
                  <i className="fas fa-paper-plane me-2"></i>
                  Envíanos un mensaje
                </h3>
                <p className="text-white-50">
                  Completa el formulario y nos pondremos en contacto contigo dentro de 24 horas
                </p>
              </div>

              {showAlert && (
                <Alert variant={alertType} className="glass-card">
                  {alertType === 'success' ? (
                    <>
                      <i className="fas fa-check-circle me-2"></i>
                      ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                    </>
                  ) : (
                    <>
                      <i className="fas fa-exclamation-triangle me-2"></i>
                      Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                    </>
                  )}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre completo *</Form.Label>
                      <Form.Control
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Empresa</Form.Label>
                      <Form.Control
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        placeholder="Nombre de tu empresa"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="+56 9 1234 5678"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Servicio de interés</Form.Label>
                  <Form.Select 
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="desarrollo-web">Desarrollo Web</option>
                    <option value="aplicaciones-moviles">Aplicaciones Móviles</option>
                    <option value="consultoria-cloud">Consultoría Cloud</option>
                    <option value="erp-enterprise">ERP Enterprise</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="analytics">Analytics & BI</option>
                    <option value="otro">Otro</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Mensaje *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle relevante..."
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" className="glass-btn btn-primary px-5">
                    <i className="fas fa-paper-plane me-2"></i>
                    Enviar Mensaje
                  </Button>
                </div>
              </Form>
            </div>
          </Col>

          {/* Contact Info */}
          <Col lg={4}>
            <div className="glass-card p-4 h-100">
              <div className="text-white">
                <h4 className="mb-4">
                  <i className="fas fa-info-circle me-2"></i>
                  Información de Contacto
                </h4>

                <div className="contact-info-item mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-map-marker-alt fa-lg me-3 text-white"></i>
                    <h6 className="mb-0">Dirección</h6>
                  </div>
                  <p className="ms-4 mb-0 text-white-50">
                    Av. Providencia 1234<br />
                    Santiago, Chile
                  </p>
                </div>

                <div className="contact-info-item mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-phone fa-lg me-3 text-white"></i>
                    <h6 className="mb-0">Teléfono</h6>
                  </div>
                  <p className="ms-4 mb-0 text-white-50">
                    +56 2 2345 6789<br />
                    +56 9 8765 4321
                  </p>
                </div>

                <div className="contact-info-item mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-envelope fa-lg me-3 text-white"></i>
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <p className="ms-4 mb-0 text-white-50">
                    info@techsolutions.cl<br />
                    ventas@techsolutions.cl
                  </p>
                </div>

                <div className="contact-info-item mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-clock fa-lg me-3 text-white"></i>
                    <h6 className="mb-0">Horarios</h6>
                  </div>
                  <p className="ms-4 mb-0 text-white-50">
                    Lun - Vie: 9:00 - 18:00<br />
                    Sáb: 9:00 - 13:00
                  </p>
                </div>

                <hr className="my-4" />

                <div className="social-links">
                  <h6 className="mb-3">Síguenos</h6>
                  <div className="d-flex gap-3">
                    <Button className="glass-btn" variant="link">
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button className="glass-btn" variant="link">
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button className="glass-btn" variant="link">
                      <i className="fab fa-facebook"></i>
                    </Button>
                    <Button className="glass-btn" variant="link">
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* FAQ Section */}
        <Row className="mt-5">
          <Col>
            <div className="glass-card p-5">
              <div className="text-white">
                <h3 className="text-center mb-4">
                  <i className="fas fa-question-circle me-2"></i>
                  Preguntas Frecuentes
                </h3>
                <Row>
                  <Col md={6}>
                    <div className="faq-item mb-4">
                      <h6>¿Cuánto tiempo toma desarrollar un proyecto?</h6>
                      <p className="text-white-50 small">
                        Los tiempos varían según la complejidad. Un sitio web básico puede tomar 2-4 semanas, 
                        mientras que un sistema ERP puede requerir 3-6 meses.
                      </p>
                    </div>
                    <div className="faq-item mb-4">
                      <h6>¿Ofrecen soporte post-implementación?</h6>
                      <p className="text-white-50 small">
                        Sí, ofrecemos soporte técnico 24/7 y mantenimiento continuo para todos nuestros proyectos.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="faq-item mb-4">
                      <h6>¿Trabajan con tecnologías específicas?</h6>
                      <p className="text-white-50 small">
                        Trabajamos con las últimas tecnologías , Angular, Node.js, Python, .NET, 
                        y muchas más según las necesidades del proyecto.
                      </p>
                    </div>
                    <div className="faq-item mb-4">
                      <h6>¿Cómo manejan los pagos?</h6>
                      <p className="text-white-50 small">
                        Ofrecemos planes flexibles de pago, desde pagos únicos hasta suscripciones mensuales 
                        según el tipo de servicio contratado.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;