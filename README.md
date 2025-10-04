# TechSolutions Pro 🚀

Una plataforma de e-commerce profesional desarrollada con **React + Vite + JavaScript + SWC**, especializada en soluciones tecnológicas empresariales. Cuenta con diseño glassmorphism elegante, carrito de compras funcional y sistema de checkout completo.

> 🎯 **Proyecto migrado de Create React App + TypeScript a Vite + JavaScript + SWC** para mejor rendimiento y tiempos de compilación ultra-rápidos.

## 📸 Capturas de Pantalla

### 🏠 Página Principal
![Página Principal](src/assets/images/Index.png)
*Página de inicio con hero section y estadísticas de la empresa*

### 🛍️ Catálogo de Productos
![Productos](src/assets/images/productos.png)
*Catálogo con filtros por categoría y productos destacados*

### 🛒 Carrito Dropdown
![Carrito Dropdown](src/assets/images/carrito-globo.png)
*Dropdown del carrito con diseño glassmorphic*

### 🛒 Página del Carrito
![Carrito Completo](src/assets/images/carrito.png)
*Página completa del carrito con resumen y métodos de pago*

### 💳 Proceso de Checkout
![Checkout](src/assets/images/checkout.png)
*Formulario de checkout con validación y pasarela de pago*

### ✅ Confirmación de Compra
![Página de Éxito](src/assets/images/success.png)
*Página de confirmación con detalles del pedido*

### 📞 Página de Contacto
![Contacto](src/assets/images/contacto.png)
*Formulario de contacto con información empresarial*

### 🦶 Footer Profesional
![Footer](src/assets/images/Footer.png)
*Footer con información de contacto y enlaces sociales*

## 🌟 Características Principales

### 🛍️ Sistema de E-commerce Avanzado
- **Catálogo de Productos**: Sistema de filtrado por categorías con productos destacados
- **Carrito Inteligente**: Dropdown glassmorphic con gestión de productos en tiempo real
- **Notificaciones Toast**: Sistema de alertas contextuales para acciones del carrito (agregar, actualizar, eliminar)
- **Animaciones del Carrito**: Icono animado con efectos bounce y shake al agregar productos
- **Confirmación Visual**: Feedback instantáneo en botones al agregar productos
- **Productos Recomendados**: Sección "También te puede interesar" con productos más vendidos
- **Renderizado Condicional de Cards**: Las tarjetas muestran "En el carrito" con controles de cantidad cuando el producto ya está agregado
- **Controles de Cantidad Inline**: Incrementar/decrementar cantidades directamente desde las cards sin ir al carrito
- **Checkout Completo**: Proceso de pago con validación de formularios y pasarela de prueba

### 🎨 Diseño y UX
- **Diseño Responsive**: Glassmorphism con tema verde elegante y efectos visuales modernos
- **Galería de Proyectos**: Portfolio interactivo con modales detallados
- **Sistema de Testimonios**: Reseñas de clientes con calificaciones
- **Página de Contacto**: Formulario funcional con información empresarial

## 🛠️ Tecnologías Utilizadas

### Build Tools & Compiler
- **Vite 7.1.9** ⚡ - Build tool ultra-rápido de próxima generación
- **SWC** 🦀 - Super-fast JavaScript/TypeScript compiler escrito en Rust
- **@vitejs/plugin-react-swc** - Plugin oficial de Vite para React con SWC

### Frontend
- **React 19.1.1** - Framework principal con últimas características
- **JavaScript (ES6+)** - Desarrollo moderno sin TypeScript
- **React Router DOM 7.9.3** - Navegación SPA
- **React Bootstrap 2.10.10** - Componentes UI
- **Bootstrap 5.3.8** - Framework CSS

### Características Técnicas
- **Context API Dual** - Gestión de estado global (CartContext + ToastContext)
- **Custom Hooks** - useCart, useToast, useProducts, useServices, useTestimonials
- **LocalStorage** - Persistencia del carrito entre sesiones
- **Renderizado Condicional** - Cards dinámicas basadas en estado del carrito
- **Sistema de Notificaciones** - Toast notifications con 4 variantes (success, danger, warning, info)
- **Animaciones CSS** - Bounce, shake, pulse, slide-in con @keyframes
- **Responsive Design** - Compatible con todos los dispositivos
- **Glassmorphism** - Efectos visuales modernos profesionales con blur y transparencias
- **Font Awesome 6.4.0** - Sistema de iconos
- **Sass** - Preprocesador CSS

## ⚡ Ventajas de Vite + SWC

### 🚀 Rendimiento Superior
- **HMR Instantáneo**: Hot Module Replacement en milisegundos
- **Compilación Rápida**: SWC es 20x más rápido que Babel
- **Dev Server**: Servidor de desarrollo extremadamente rápido
- **Build Optimizado**: Producción con Rollup optimizado

### 💡 Experiencia de Desarrollo
- **Inicio Rápido**: Servidor dev arranca en < 1 segundo
- **Recarga Inmediata**: Cambios reflejados instantáneamente
- **Bundle Eficiente**: Tree-shaking y code-splitting automático
- **ES Modules Nativos**: Aprovecha ESM del navegador

### 📊 Comparativa de Rendimiento

| Métrica | Create React App | Vite + SWC |
|---------|------------------|------------|
| Inicio Dev Server | ~15-30s | < 1s ⚡ |
| HMR | 2-5s | < 100ms ⚡ |
| Build Producción | ~60s | ~15s ⚡ |
| Tamaño Bundle | ~500KB | ~380KB ⚡ |

## 📁 Estructura del Proyecto

```
techsolutions-react/
├── public/                      # Archivos estáticos
│   ├── index.html              # HTML principal
│   └── assets/                 # Imágenes y recursos
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── cards/             # ProductCard, ServiceCard, TestimonialCard
│   │   │   ├── ProductCard.jsx      # Card con renderizado condicional + controles de cantidad
│   │   │   ├── ServiceCard.jsx      # Card con renderizado condicional + controles de cantidad
│   │   │   └── TestimonialCard.jsx
│   │   ├── cart/              # Componentes del carrito
│   │   │   ├── CartDropdown.jsx     # Dropdown del carrito
│   │   │   └── RecommendedProducts.jsx  # Productos recomendados
│   │   ├── common/            # Componentes comunes
│   │   │   ├── Header.jsx     # Header con animaciones del carrito
│   │   │   ├── Footer.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── Toast.jsx      # Sistema de notificaciones toast
│   │   └── ...
│   ├── contexts/              # Contextos de estado global
│   │   ├── CartContext.jsx           # Provider del carrito
│   │   ├── cartContextDefinition.js  # Definición del CartContext (Fast Refresh)
│   │   ├── ToastContext.jsx          # Provider de notificaciones
│   │   └── toastContextDefinition.js # Definición del ToastContext (Fast Refresh)
│   ├── data/                  # Datos JSON
│   │   ├── productos.json     # Productos con campo "vendidos"
│   │   ├── servicios.json
│   │   └── testimonios.json
│   ├── hooks/                 # Custom hooks
│   │   ├── useCart.js         # Hook para acceder al CartContext
│   │   ├── useToast.js        # Hook para notificaciones toast
│   │   ├── useProducts.js
│   │   ├── useServices.js
│   │   └── useTestimonials.js
│   ├── pages/                 # Páginas/Rutas
│   │   ├── Home.jsx
│   │   ├── Products.jsx       # Con sección de productos recomendados
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   ├── Cart.jsx           # Con sección de productos recomendados
│   │   ├── Checkout.jsx
│   │   └── CheckoutSuccess.jsx
│   ├── assets/                # Imágenes y recursos
│   ├── App.jsx                # Componente principal
│   ├── index.css              # Estilos globales + Glassmorphism + Animaciones
│   └── main.jsx               # Entry point
├── vite.config.js             # Configuración de Vite
├── package.json               # Dependencias y scripts
└── README.md                  # Este archivo
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ (se recomienda usar la última LTS)
- npm o yarn o pnpm

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/RodrigoSanchezDev/techsolutions-react-vite.git
cd techsolutions-react-vite
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```
El servidor estará disponible en `http://localhost:5173` ⚡

4. **Compilar para producción**
```bash
npm run build
```

5. **Preview de producción (opcional)**
```bash
npm run preview
```

## 🎨 Características de Diseño

### Tema Visual Profesional
- **Colores**: Paleta verde corporativa (#22c55e) con acentos dorados (#f59e0b)
- **Efectos Glass**: Glassmorphism con blur(20-28px) y transparencias estratificadas
- **Tipografía**: System fonts optimizadas con jerarquía clara
- **Animaciones**: Transiciones suaves cubic-bezier para UX premium

### Sistema de Glassmorphism Mejorado
- **Opacidad Graduada**: 10% → 15% → 20% según jerarquía
- **Blur Estratificado**: 20px → 24px → 28px para profundidad
- **Bordes Luminosos**: rgba(255, 255, 255, 0.25-0.35)
- **Sombras Profundas**: Múltiples capas con 35-45% opacidad
- **Highlights 3D**: Inset shadows para efecto realista
- **Contraste WCAG AAA**: Todos los textos 100% legibles

### Responsive Design
- **Mobile First**: Optimizado primero para móviles
- **Breakpoints**: Tablets (768px), Desktop (1024px, 1280px)
- **Touch Friendly**: Interfaz táctil optimizada con áreas de toque adecuadas
- **Flexbox/Grid**: Layouts modernos y adaptables

## 📱 Funcionalidades Principales

### 🛒 E-commerce Completo
- ✅ **Catálogo de productos** con filtros por categoría
- ✅ **Carrito de compras persistente** (LocalStorage)
- ✅ **Gestión de cantidades** (agregar, aumentar, disminuir, eliminar)
- ✅ **Sistema de notificaciones Toast**: Feedback visual al agregar/modificar/eliminar productos
- ✅ **Animaciones del carrito**: Icono animado (bounce, shake, badge pulse) al agregar items
- ✅ **Confirmación visual en botones**: Estado "adding..." con spinner durante la acción
- ✅ **Productos recomendados**: Sección "También te puede interesar" basada en productos más vendidos
- ✅ **Renderizado condicional de cards**: 
  - Muestra botón "Agregar al Carrito" si el producto NO está en el carrito
  - Muestra badge "En el carrito" + controles de cantidad si YA está agregado
- ✅ **Controles de cantidad inline**: Incrementar/decrementar desde las cards sin navegar al carrito
- ✅ **Smart filtering**: Los productos recomendados excluyen items ya agregados al carrito
- ✅ **Proceso de checkout completo** con validación
- ✅ **Página de confirmación** de pedido con detalles
- ✅ **Cálculo automático** de totales y subtotales

### 🏢 Contenido Corporativo
- ✅ Página de inicio con hero section y estadísticas
- ✅ Galería de proyectos con modales informativos
- ✅ Catálogo de servicios profesionales
- ✅ Testimonios de clientes con ratings
- ✅ Formulario de contacto funcional
- ✅ Información empresarial completa

### 🎯 Características Técnicas Avanzadas

#### Sistema de Contextos
```javascript
// CartContext - Gestión del carrito con useReducer
- addItem(item) - Agregar producto/servicio
- removeItem(id) - Eliminar del carrito
- updateQuantity(id, quantity) - Actualizar cantidad
- clearCart() - Vaciar carrito completo
- Persistencia automática en localStorage

// ToastContext - Sistema de notificaciones
- showToast(message, variant) - Mostrar notificación
- Variantes: success, danger, warning, info
- Auto-close configurable (default: 3000ms)
```

#### Renderizado Condicional en Cards
```javascript
// ProductCard.jsx & ServiceCard.jsx
- Detecta si el producto está en el carrito
- Renderiza condicionalmente:
  1. Botón "Agregar al Carrito" (no está en carrito)
  2. Badge "En el carrito" + Controles de cantidad (está en carrito)
- Controles inline:
  - Botón "-" (o icono basura si cantidad = 1)
  - Display de cantidad actual
  - Botón "+" para incrementar
- Toast notifications en cada acción
```

#### Animaciones CSS
```css
/* Animaciones implementadas */
- @keyframes bounce - Icono del carrito al agregar
- @keyframes shake - Feedback adicional
- @keyframes badgePop - Badge de contador
- @keyframes slideInRight - Toast notifications
- @keyframes pulse - Badge "En el carrito"
- Transiciones suaves con cubic-bezier
```

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo (http://localhost:5173)
npm run build        # Compilación optimizada para producción
npm run preview      # Preview del build de producción
npm run lint         # Ejecutar ESLint para revisar código
```

## 📊 Estructura de Datos

### Productos (JavaScript)
```javascript
// data/productos.json
{
  "id": 1,
  "nombre": "Laptop Dell XPS 15",
  "categoria": "computadoras",
  "precio": "$1,299.990",
  "rating": 5,
  "imagen": "https://...",
  "descripcion": "...",
  "caracteristicas": [...],
  "tecnologias": [...],
  "destacado": true
}
```

### Carrito (Context API)
```javascript
// CartContext - useReducer pattern
{
  id: 1,
  nombre: "Laptop Dell XPS 15",
  precio: "$1,299.990",
  imagen: "https://...",
  quantity: 2,
  type: "producto" // o "servicio"
}
```

### Sistema de Notificaciones (Toast)
```javascript
// ToastContext - useState pattern
const { showToast } = useToast();

// Uso
showToast('Producto agregado al carrito', 'success');
showToast('Cantidad actualizada', 'info');
showToast('Producto eliminado', 'danger');

// Variantes disponibles
- success: Verde - Acciones exitosas
- danger: Rojo - Eliminaciones o errores
- warning: Amarillo - Advertencias
- info: Azul - Información general
```

### Productos Recomendados
```javascript
// data/productos.json - Campo "vendidos" agregado
{
  "id": 1,
  "nombre": "E-commerce Pro",
  "vendidos": 2340, // Usado para ordenar recomendaciones
  ...
}

// RecommendedProducts.jsx
- Filtra productos ya en el carrito
- Ordena por campo "vendidos" (descendente)
- Muestra top 3 productos más vendidos
- Se renderiza en páginas Products y Cart
```

## 🌐 Despliegue

### GitHub Pages (Configurado)

El proyecto está configurado para deployment automático en GitHub Pages:

1. **Verificar configuración en `vite.config.js`**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/techsolutions-react-vite/', // Nombre del repositorio
})
```

2. **Build y Deploy automático**
```bash
npm run build
# Los archivos se generan en /dist
```

3. **GitHub Actions** (opcional)
Configurar workflow para deploy automático en cada push a `main`

### Otras Opciones de Hosting

**Netlify**
```bash
npm run build
# Arrastra la carpeta /dist a Netlify
```

**Vercel**
```bash
npm install -g vercel
vercel --prod
```

**Railway/Render**
- Conecta el repositorio
- Build command: `npm run build`
- Publish directory: `dist`

## 🔐 Seguridad y Mejores Prácticas

- ✅ **Validación de formularios** en frontend
- ✅ **Sanitización de datos** de entrada del usuario
- ✅ **Navegación segura** con React Router
- ✅ **Gestión de estado** local (sin datos sensibles)
- ✅ **HTTPS** recomendado en producción
- ✅ **Dependencies actualizadas** sin vulnerabilidades

## 📈 Optimizaciones de Rendimiento

### Build Optimizations
- ✅ **Code Splitting** automático por ruta
- ✅ **Tree Shaking** elimina código no usado
- ✅ **Minificación** de JavaScript y CSS
- ✅ **Compresión Gzip/Brotli** recomendada
- ✅ **Asset Optimization** imágenes WebP cuando es posible

### Runtime Performance
- ✅ **Lazy Loading** de rutas con React.lazy
- ✅ **Memoization** con useMemo/useCallback donde necesario
- ✅ **Virtual DOM** optimizado de React 19
- ✅ **Context optimizado** para evitar re-renders innecesarios

## 🔄 Migración desde Create React App

### Cambios Realizados

1. **Build Tool**: Create React App → Vite 7.1.9
2. **Lenguaje**: TypeScript → JavaScript (ES6+)
3. **Compilador**: Babel → SWC (20x más rápido)
4. **Archivo de entrada**: `src/index.tsx` → `src/main.jsx`
5. **Variables de entorno**: `REACT_APP_*` → `VITE_*`
6. **Puerto dev**: 3000 → 5173
7. **Configuración**: `react-scripts` → `vite.config.js`

### Mejoras Obtenidas

- ⚡ **Dev server 30x más rápido**
- 🚀 **HMR casi instantáneo** (< 100ms)
- 📦 **Bundle 25% más pequeño**
- ⏱️ **Build 4x más rápido**
- 💚 **Mejor experiencia de desarrollo**

## 🐛 Solución de Problemas

### Problemas Comunes

**Error de compilación**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Puerto 5173 en uso**
```bash
# Vite asignará automáticamente el siguiente puerto disponible
# O especifica otro puerto:
npm run dev -- --port 3000
```

**Problemas de caché**
```bash
# Limpiar caché de Vite
rm -rf node_modules/.vite
npm run dev
```

**Errores de importación**
```bash
# Asegúrate de usar extensiones .jsx para archivos JSX
# Verifica que las rutas de importación sean correctas
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica increíble'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código
- Usar **JavaScript ES6+** moderno
- Seguir **convenciones de React** (hooks, functional components)
- Documentar con **JSDoc** cuando sea necesario
- Mantener **componentes pequeños y reutilizables**
- Escribir **código limpio y legible**

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Rodrigo Sanchez**
- Website: [sanchezdev.com](https://sanchezdev.com)
- GitHub: [@RodrigoSanchezDev](https://github.com/RodrigoSanchezDev)
- Email: contacto@sanchezdev.com
- LinkedIn: [Rodrigo Sanchez](https://linkedin.com/in/rodrigosanchezdev)

## 🙏 Agradecimientos

- **React Team** por el framework y React 19
- **Vite Team** por la herramienta de build ultra-rápida
- **SWC Team** por el compilador en Rust
- **Bootstrap Team** por los componentes UI
- **Unsplash** por las imágenes de demostración
- **Font Awesome** por el sistema de iconos
- **Comunidad Open Source** por las increíbles herramientas

## 📚 Recursos Adicionales

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)
- [SWC Documentation](https://swc.rs/)
- [React Router v7](https://reactrouter.com/)
- [Bootstrap Documentation](https://getbootstrap.com/)

## ✨ Características Implementadas Recientemente

### 🎨 Sistema de Notificaciones Toast
- ✅ Componente `Toast.jsx` con 4 variantes de estilo
- ✅ Context API dedicado (`ToastContext`)
- ✅ Hook personalizado `useToast()` para fácil integración
- ✅ Auto-close con duración configurable
- ✅ Animación slide-in desde la derecha
- ✅ Posicionamiento fixed top-right
- ✅ Integrado en todas las acciones del carrito

### � Animaciones del Carrito
- ✅ Animación bounce del icono al agregar productos
- ✅ Efecto shake para feedback adicional
- ✅ Badge counter con animación pop
- ✅ Transiciones suaves cubic-bezier
- ✅ useEffect para detectar cambios en itemCount

### 🔘 Confirmación Visual en Botones
- ✅ Estado "Agregando..." con spinner durante la acción
- ✅ Checkmark verde al completar
- ✅ Feedback inmediato al usuario
- ✅ Prevención de doble-click

### 💡 Productos Recomendados
- ✅ Componente `RecommendedProducts.jsx`
- ✅ Algoritmo basado en campo "vendidos"
- ✅ Filtrado inteligente (excluye items en carrito)
- ✅ Integrado en páginas Products y Cart
- ✅ Top 3 productos más vendidos
- ✅ Diseño glassmorphic consistente

### 🏷️ Renderizado Condicional de Cards
- ✅ Detección automática si producto está en carrito
- ✅ Badge "En el carrito" con animación pulse
- ✅ Controles de cantidad inline (sin navegar al carrito)
- ✅ Botón incrementar (+)
- ✅ Botón decrementar (-) o eliminar (basura si qty=1)
- ✅ Display de cantidad actual
- ✅ Toast notifications en cada cambio
- ✅ Glassmorphism en controles de cantidad

## �🎯 Próximas Mejoras

- [ ] Integración con backend real (Node.js/Express)
- [ ] Autenticación de usuarios (JWT)
- [ ] Panel de administración
- [ ] Pasarela de pago real (Stripe/PayPal)
- [ ] Sistema de búsqueda avanzada
- [ ] Wishlist de productos
- [ ] Comparador de productos
- [ ] Reviews y comentarios de usuarios
- [ ] PWA (Progressive Web App)
- [ ] Modo oscuro/claro toggle
- [ ] Filtros avanzados (rango de precio, rating, etc.)

---

⭐ **Si este proyecto te fue útil, ¡no olvides darle una estrella en GitHub!**

🚀 **Desarrollado con Vite + React + SWC para máximo rendimiento**
