/**
 * TechSolutions Pro - Componente de Carga
 * Indicador de Carga Animado
 * 
 * Componente de carga reutilizable con estilo glassmorphism y animaciones suaves.
 * Proporciona experiencia de carga consistente en toda la aplicación.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

/**
 * Loading Component
 * @param {Object} props - Component props
 * @param {string} [props.message] - Optional loading message
 * @param {'sm'} [props.size] - Optional spinner size
 * @param {'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'} [props.variant] - Spinner variant
 * @returns {JSX.Element} Loading component
 */
const Loading = ({ 
  message = 'Cargando...', 
  size,
  variant = 'light' 
}) => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{minHeight: '60vh'}}>
      <Row>
        <Col className="text-center">
          <div className="glass-loading">
            <Spinner 
              animation="border" 
              variant={variant} 
              size={size}
              className="mb-3"
            />
            <p className="text-white mb-0">{message}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;