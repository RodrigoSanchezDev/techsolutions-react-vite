/**
 * TechSolutions Pro - Entry Point
 * Punto de Entrada Principal de la Aplicación
 * 
 * Renderiza la aplicación React en el DOM.
 * Utiliza StrictMode para detectar problemas potenciales en desarrollo.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Estilos globales
import App from './App.jsx'

// Renderiza la aplicación en el elemento root del HTML
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
