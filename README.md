# Portafolio — Darla Solis

Portafolio personal construido con **React + Vite + React Router**, con estética inspirada en el álbum "Ruby" de Jennie: tonos vino/negro, acentos rojo sangre, textura de grano de película y un guiño pixelart/glitch.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

## Estructura

```
src/
├─ assets/pixel/       → imágenes pixelart de ejemplo (avatar + thumbnails de proyectos)
├─ components/         → Navbar, Welcome (loader), Carousel, ProjectCard, Layout, AmbientBackground
├─ data/
│  ├─ projects.js      → ⭐ AQUÍ AGREGAS TUS PROYECTOS
│  └─ extras.js        → ⭐ AQUÍ AGREGAS TUS CERTIFICADOS
├─ pages/               → Home, About, Projects, ProjectDetail, Others
└─ styles/global.css    → paleta, tipografía y tokens de diseño
```

## Cómo agregar un proyecto nuevo

Abre `src/data/projects.js` y agrega un objeto al arreglo `projects`:

```js
{
  id: 'mi-proyecto',              // usado en la URL /proyectos/mi-proyecto
  name: 'Mi Proyecto',
  tagline: 'Una línea que lo resume',
  description: 'Descripción más larga del proyecto...',
  cover: miImagen,                 // importa la imagen arriba del archivo
  tech: ['React', 'Node.js'],
  year: '2026',
  role: 'Full Stack',
  links: {
    repo: 'https://github.com/...',
    demo: 'https://...',           // opcional, déjalo vacío '' si no hay demo
  },
},
```

No necesitas tocar ningún componente: la tarjeta en `/proyectos` y la página de detalle en `/proyectos/mi-proyecto` se generan automáticamente.

## Cómo agregar un certificado / extra

Lo mismo en `src/data/extras.js`, agrega un objeto al arreglo `extras` con `title`, `issuer`, `date`, `description` e `image` (opcional).

## Reemplazar las imágenes pixelart de ejemplo

Las imágenes en `src/assets/pixel/` son generadas como ejemplo. Sustitúyelas por tus propias piezas (recomendado: PNG con fondo, mismo nombre de archivo, o actualiza los imports en `Home.jsx`, `About.jsx` y `projects.js`).

## Pendientes sugeridos

- Reemplazar avatar y thumbnails de proyectos por tus piezas reales.
- Subir tu CV a `public/cv-darla-solis.pdf` (el botón "Descargar CV" ya apunta ahí).
- Actualizar los links de LinkedIn/GitHub en `src/pages/Home.jsx`.
- Actualizar los `repo`/`demo` reales de cada proyecto en `projects.js`.
