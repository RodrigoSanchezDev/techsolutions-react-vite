/**
 * TechSolutions Pro - Cart Context Definition
 * Definición del Contexto del Carrito
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

export const CartContext = createContext(undefined);

CartContext.displayName = 'CartContext';
