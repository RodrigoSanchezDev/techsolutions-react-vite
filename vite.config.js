/**
 * TechSolutions Pro - Configuración de Vite
 * Build Tool Configuration
 * 
 * Configuración del build tool Vite con SWC para compilación ultra-rápida.
 * Define el base path para deployment en GitHub Pages.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // Plugin de React con SWC (compilador Rust super-rápido)
  plugins: [react()],
  
  // Base path para GitHub Pages deployment
  // Cambia esto si despliegas en otro servidor
  base: '/techsolutions-react-vite/',
})
