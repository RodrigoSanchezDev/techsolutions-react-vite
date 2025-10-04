/**
 * TechSolutions Pro - Loading Component
 * Animated Loading Indicator
 * 
 * Reusable loading component with glassmorphism styling and smooth animations.
 * Provides consistent loading experience across the application.
 * 
 * @author Rodrigo Sanchez
 * @website https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @copyright © 2025 Rodrigo Sanchez. All rights reserved.
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