/**
 * TechSolutions Pro - Toast Context Definition
 * Definición del Contexto de Toast
 * 
 * Archivo separado para la definición del contexto.
 * Esto resuelve el error de Fast Refresh.
 * 
 * @autor Rodrigo Sanchez
 * @sitioWeb https://sanchezdev.com
 * @github https://github.com/RodrigoSanchezDev
 * @derechosAutor © 2025 Rodrigo Sanchez. Todos los derechos reservados.
 */

import { createContext } from 'react';

export const ToastContext = createContext(undefined);

ToastContext.displayName = 'ToastContext';
