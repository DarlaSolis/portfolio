// ======================================================
// CARGA AUTOMÁTICA DE IMÁGENES POR CARPETA
// ======================================================

const barberShopImages = Object.values(
  import.meta.glob('../assets/projects/babershop/*.{png,jpg,jpeg,gif,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
);

const petTodoImages = Object.values(
  import.meta.glob('../assets/projects/petTodo/*.{png,jpg,jpeg,gif,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
);

const puntoVentaImages = Object.values(
  import.meta.glob('../assets/projects/puntoVenta/*.{png,jpg,jpeg,gif,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
);


const dentalClinicImages = Object.values(
  import.meta.glob('../assets/projects/dentalClinic/*.{png,jpg,jpeg,gif,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
);

const cineImages = Object.values(
  import.meta.glob('../assets/projects/cine/*.{png,jpg,jpeg,gif,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
);


const donutImages = Object.values(
  import.meta.glob('../assets/projects/donut/*.{png,jpg,jpeg,gif,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
);


// ======================================================
// PROYECTOS
// ======================================================

export const projects = [
  // ====================================================
  // 1. BARBERSHOP
  // ====================================================
  {

    id: 'barber-shop-project-6b',

    name: 'BarberShop Pro · Sistema de Gestión & Reservas',

    tagline:
      'Plataforma web para agendar citas, gestionar barberos y controlar ventas en tiempo real',

    category: 'Full Stack & Business Automation',
    categoryGroup: 'Full Stack & Business',

    mockUrl: 'barbershop.darla.dev',

    startDate: '2026',
    endDate: '2026',
    duration: 'Proyecto Académico / Full Stack',
    year: '2026',

    role: 'Full Stack Developer',

    summary:
      'Plataforma integral para barberías y centros de estética que automatiza la reserva de citas, la gestión de barberos, el catálogo de servicios y el seguimiento administrativo de ingresos y pagos.',

    keyFeatures: [
      'Sistema de reservación en tiempo real con validación de horarios disponibles.',
      'Panel administrativo para gestión de barberos, servicios, clientes y reportes de caja.',
      'Arquitectura relacional para control transaccional y organización eficiente de citas.',
      'Interfaz web responsiva con flujo de agendamiento y confirmación de operaciones del negocio.',
    ],

    cover: barberShopImages[0],
    images: barberShopImages,

    tech: [
      'Laravel',
      'PHP',
      'Blade',
      'Tailwind CSS',
      'JavaScript',
      'MySQL',
      'Vite',
      'Docker',
      'Git',
    ],

    links: {
      repo: 'https://github.com/DarlaSolis/barber-shop-project-6b',
      demo: 'https://barber-shop-project-6b.vercel.app/',
    },
  },

  // ====================================================
  // 2. PET TODO
  // ====================================================
  {
    id: 'Pet-Todo',

    name: 'PetTodo · Care & Veterinary Reminder App',

    tagline:
      'Plataforma de seguimiento de salud, vacunas y tareas diarias para mascotas',

    category: 'Full Stack & Mobile Web',
    categoryGroup: 'Full Stack & Business',

    mockUrl: 'pettodo.darla.dev',

    startDate: '2026',
    endDate: '2026',
    duration: 'Full Stack Web App',
    year: '2026',

    role: 'Frontend & Full Stack Developer',

    summary:
      'Aplicación interactiva diseñada para tutores de mascotas. Permite organizar calendarios de vacunación, registros veterinarios, dosis de medicamentos y tareas diarias de cuidado.',

    keyFeatures: [
      'Tablero de control intuitivo con tarjetas de tareas y recordatorios.',
      'Perfil personalizado por cada mascota con expedientes de salud.',
      'Almacenamiento persistente y sincronización en tiempo real.',
      'Diseño responsivo y amigable centrado en la experiencia de usuario.',
    ],

    // La primera imagen será automáticamente la portada
    cover: petTodoImages[0],

    // Aquí estarán TODAS las imágenes de petTodo
    images: petTodoImages,

    tech: [
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Git',
    ],

    links: {
      repo: 'https://github.com/DarlaSolis/Pet-Todo',
      demo: '',
    },
  },
  // ====================================================
  // 3. CINE
  // ====================================================
  {
    id: 'Cine_UX-UI',

    name: 'Cinépolis UX/UI · Reserva & Ticket System',

    tagline:
      'Plataforma web de experiencia cinematográfica con catálogo, detalle de película y compra de boletos en tiempo real',

    category: 'UX/UI Design & Frontend',
    categoryGroup: 'UX/UI & Frontend',

    mockUrl: 'cinepolis.darla.dev',

    startDate: '2024',
    endDate: '2024',
    duration: 'UX/UI & Frontend Prototype',
    year: '2024',

    role: 'UX/UI Designer & Frontend Developer',

    summary:
      'Sistema de cartelera y compra de entradas de cine desarrollado en React con navegación por películas, detalle de función, selección de asientos y flujo de checkout. Incluye diseño visual oscuro, experiencia de compra ágil y contenido dinámico integrado con una API de películas.',

    keyFeatures: [
      'Catálogo de películas con diseño visual orientado a entretenimiento y alta legibilidad.',
      'Vista de detalle con información de la película, formato, horarios y compra de boletos.',
      'Mapa interactivo de asientos con estados de disponibilidad y selección.',
      'Carrito, favoritos, paneles laterales y navegación multi-página en React Router.',
      'Diseño responsive con enfoque UX/UI y maquetación en CSS3.',
    ],

    cover: cineImages[0],

    images: cineImages,

    tech: [
      'React',
      'React Router',
      'JavaScript',
      'CSS3',
      'TMDB API',
      'Swiper',
      'Figma',
      'Git',
    ],

    links: {
      repo: 'https://github.com/DarlaSolis/Cine_UX-UI',
      demo: '',
    },
  },

  // ====================================================
  // 4. DENTAL CLINIC
  // ====================================================
  {
    name: 'Dental Clinic ERP · Gestión Odontológica',

    tagline:
      'Sistema de gestión para clínicas dentales desarrollado en Laravel con administración de usuarios, citas y calendario',

    category: 'Backend & Dental Practice Management',
    categoryGroup: 'Backend & ERP',

    mockUrl: '',

    startDate: '2025',
    endDate: '2025',
    duration: 'Backend / Laravel Architecture',
    year: '2025',

    role: 'Backend Developer (Laravel)',

    summary:
      'Sistema de gestión para consultorios odontológicos desarrollado en Laravel. Permite administrar usuarios, pacientes, dentistas, citas médicas, calendario de atención y roles por perfil con acceso diferenciado.',

    keyFeatures: [
      'Backend estructurado con Laravel siguiendo arquitectura MVC y lógica de negocio por roles.',
      'Gestión de usuarios con perfiles de administrador, dentista y paciente.',
      'Módulo de citas dentales con asignación de paciente y odontólogo, estado, fecha y costo.',
      'Calendario de citas integrado para visualización y control de agenda.',
      'Persistencia con MySQL y migraciones relacionales para usuarios y citas.',
      'Panel administrativo con métricas y gestión de pacientes y usuarios.'
    ],

    cover: dentalClinicImages[0],

    images: dentalClinicImages,

    tech: [
      'Laravel',
      'PHP',
      'MySQL',
      'Blade',
      'Tailwind CSS',
      'Vite',
      'JavaScript',
      'Alpine.js'
    ],

    links: {
      repo: 'https://github.com/DarlaSolis/dentalClinic_Laravel',
      demo: ''
    }
  },

  // ====================================================
  // 5. PUNTO DE VENTA
  // ====================================================
  {
    id: 'punto-venta',

    name: 'PuntoVenta POS · Sistema de Control Comercial',

    tagline:
      'Sistema POS fullstack para ventas, control de inventario y reportes transaccionales',

    category: 'Backend & Retail Systems',
    categoryGroup: 'Backend & ERP',

    mockUrl: '',

    startDate: '2024',
    endDate: '2024',
    duration: 'Fullstack Web App',
    year: '2024',

    role: 'Full Stack Developer',

    summary:
      'Sistema de punto de venta (POS) desarrollado con Node.js, Express y MySQL en el backend, y React + Vite en el frontend. Permite gestionar el catálogo de productos, registrar ventas con actualización automática de inventario, generar tickets y consultar reportes diarios de ingresos.',

    keyFeatures: [
      'Registro de ventas con transacciones para garantizar consistencia en stock y pagos.',
      'Actualización automática del inventario con validación de disponibilidad por producto.',
      'Interfaz de venta con carrito, búsqueda de productos y ticket imprimible.',
      'Reporte del día con total acumulado y detalle de ventas realizadas.',
      'Diseño de base de datos relacional para productos, ventas y detalle transaccional.',
    ],

    cover: puntoVentaImages[0],

    images: puntoVentaImages,

    tech: [
      'Node.js',
      'Express',
      'MySQL',
      'React',
      'Vite',
      'REST APIs',
      'Git',
    ],

    links: {
      repo: 'https://github.com/DarlaSolis/punto-venta',
      demo: '',
    },
  },

  // ====================================================
  // 6. DONUT SHOP
  // ====================================================
  {
    id: 'donut_app_2c_solis',

    name: 'Donut Shop App · E-Commerce Gastronómico',

    tagline:
      'Aplicación móvil de comercio electrónico desarrollada en Flutter con diseño reactivo',

    category: 'Mobile App & E-Commerce UI',
    categoryGroup: 'Mobile Apps',

    mockUrl: 'donutapp.darla.dev',

    startDate: '2024',
    endDate: '2024',
    duration: 'Mobile Application',
    year: '2024',

    role: 'Mobile Developer (Flutter)',

    summary:
      'Aplicación móvil e-commerce gastronómica desarrollada en Flutter para la exploración, personalización de ingredientes y pedido a domicilio de donuts artesanales.',

    keyFeatures: [
      'Interfaz móvil atractiva construida con Flutter y animaciones fluidas en Dart.',
      'Catálogo categorizado con opciones de personalización de sabor y toppings.',
      'Carrito de compras interactivo con cálculo dinámico del total del pedido.',
      'Diseño responsivo adaptado a múltiples tamaños de dispositivos Android/iOS.',
    ],

    cover: donutImages[0],

    images: donutImages,

    tech: [
      'Flutter',
      'Dart',
      'Figma',
      'Git',
    ],

    links: {
      repo: 'https://github.com/DarlaSolis/donut_app_2c_solis',
      demo: '',
    },
  },
];


// ======================================================
// BUSCAR PROYECTO POR ID
// ======================================================

export const getProjectById = (id) =>
  projects.find((p) => p.id === id);