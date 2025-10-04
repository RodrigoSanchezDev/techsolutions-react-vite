import React, { createContext, useContext, useReducer, useEffect } from 'react';

/**
 * @typedef {Object} CartItem
 * @property {number} id - Unique identifier for the item
 * @property {string} nombre - Item name
 * @property {string} precio - Item price as string
 * @property {string} imagen - Item image URL
 * @property {number} quantity - Quantity in cart
 * @property {string} categoria - Item category
 */

/**
 * @typedef {Object} Cart
 * @property {CartItem[]} items - Array of items in cart
 * @property {number} subtotal - Subtotal before tax
 * @property {number} tax - Tax amount
 * @property {number} total - Total amount including tax
 * @property {number} itemCount - Total number of items
 */

// Initial state
const initialCart = {
  items: [],
  subtotal: 0,
  tax: 0,
  total: 0,
  itemCount: 0
};

/**
 * Cart reducer function
 * @param {Cart} state - Current cart state
 * @param {Object} action - Action object with type and payload
 * @returns {Cart} New cart state
 */
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { item, quantity } = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      
      let newItems;
      if (existingItem) {
        newItems = state.items.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        newItems = [...state.items, { ...item, quantity }];
      }
      
      return calculateTotals({ ...state, items: newItems });
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      return calculateTotals({ ...state, items: newItems });
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: id });
      }
      
      const newItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      return calculateTotals({ ...state, items: newItems });
    }
    
    case 'CLEAR_CART':
      return initialCart;
    
    case 'LOAD_CART':
      return action.payload;
    
    default:
      return state;
  }
}

/**
 * Calculate cart totals including tax
 * @param {Cart} cart - Cart object to calculate totals for
 * @returns {Cart} Cart with updated totals
 */
function calculateTotals(cart) {
  const subtotal = cart.items.reduce((sum, item) => {
    const price = parseFloat(item.precio.replace(/[$,/mes]/g, ''));
    return sum + (price * item.quantity);
  }, 0);
  
  const tax = subtotal * 0.19; // 19% IVA
  const total = subtotal + tax;
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  
  return {
    ...cart,
    subtotal,
    tax,
    total,
    itemCount
  };
}

// Context
const CartContext = createContext(undefined);

/**
 * Cart Provider Component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Provider component
 */
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  
  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('techsolutions_cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('techsolutions_cart', JSON.stringify(cart));
  }, [cart]);
  
  /**
   * Add item to cart
   * @param {Omit<CartItem, 'quantity'>} item - Item to add (without quantity)
   * @param {number} quantity - Quantity to add (default: 1)
   */
  const addItem = (item, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { item, quantity } });
  };
  
  /**
   * Remove item from cart
   * @param {number} id - Item ID to remove
   */
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  
  /**
   * Update item quantity in cart
   * @param {number} id - Item ID
   * @param {number} quantity - New quantity
   */
  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };
  
  /**
   * Clear all items from cart
   */
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

/**
 * Custom hook to use cart context
 * @returns {Object} Cart context value
 * @throws {Error} If used outside CartProvider
 */
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}