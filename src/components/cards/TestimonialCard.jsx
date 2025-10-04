import React from 'react';
import { Card } from 'react-bootstrap';

/**
 * Testimonial Card Component
 * @param {Object} props - Component props
 * @param {Testimonial} props.testimonial - Testimonial object to display
 * @returns {JSX.Element} Testimonial card component
 */
const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}
      />
    ));
  };

  return (
    <Card className="testimonial-card h-100 fade-in-up">
      <Card.Body>
        <div className="rating mb-3 text-center">
          {renderStars(testimonial.rating)}
        </div>
        
        <blockquote className="testimonial-text">
          <i className="fas fa-quote-left me-2"></i>
          {testimonial.testimonio}
          <i className="fas fa-quote-right ms-2"></i>
        </blockquote>
        
        <div className="testimonial-author text-center">
          <img 
            src={testimonial.imagen} 
            alt={testimonial.nombre}
            className="author-img mx-auto d-block"
          />
          <div className="author-name">{testimonial.nombre}</div>
          <div className="author-position">
            {testimonial.cargo} en {testimonial.empresa}
          </div>
          <div className="mt-2">
            <small className="text-white">
              <i className="fas fa-project-diagram me-1"></i>
              {testimonial.proyecto}
            </small>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TestimonialCard;