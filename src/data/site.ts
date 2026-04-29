/**
 * Single source of truth for content.
 * Si el cliente confirma precios reales, edita aquí.
 */

export const site = {
  name: "Oveja Negra",
  subname: "Gentleman Studio",
  tagline: "Exclusividad solo para hombres.",
  shortDesc:
    "Aquí cada cita es solo una. Whisky o cerveza en la mano, conversación honesta en un espacio sin juicio. En Armenia, sin filas y sin prisa.",
  city: "Armenia · Quindío",
  address: "Cra. 6 — Av. Centenario, Containers City, Armenia",
  whatsapp: "+57 320 598 0719",
  whatsappLink:
    "https://wa.me/573205980719?text=Hola%20Oveja%20Negra%2C%20quiero%20reservar%20una%20cita.",
  bookingUrl: "https://beunik.co/entity-view/1003",
  instagram: "https://www.instagram.com/ovejanegra.studio_94/",
  email: "hola@ovejanegra.studio",
  hours: [
    { day: "Lun – Vie", open: "9:00", close: "20:00" },
    { day: "Sábado", open: "9:00", close: "19:00" },
    { day: "Domingo", open: "Cerrado", close: "" },
  ],
  stats: [
    { value: "5,800+", label: "Clientes atendidos" },
    { value: "5.0★", label: "Calificación Google" },
    { value: "100%", label: "Solo hombres" },
    { value: "1:1", label: "Atención privada" },
  ],
};

export const services = [
  {
    id: "corte-clasico",
    name: "Corte Clásico",
    duration: "45 min",
    price: 45000,
    desc:
      "Corte de tijera y máquina con asesoría de imagen. Acabado con productos premium y toalla caliente.",
    tier: "Esenciales",
  },
  {
    id: "corte-barba",
    name: "Corte + Barba",
    duration: "1h 15 min",
    price: 65000,
    desc:
      "Corte completo más diseño y delineado de barba con navaja, aceites y bálsamo.",
    tier: "Signature",
    highlight: true,
  },
  {
    id: "barba-ritual",
    name: "Barba Ritual",
    duration: "45 min",
    price: 35000,
    desc:
      "Trabajo de barba con vapor, exfoliación, navaja, masaje y fijación. Confort puro.",
    tier: "Esenciales",
  },
  {
    id: "experiencia-oveja",
    name: "Experiencia Oveja Negra",
    duration: "2h",
    price: 120000,
    desc:
      "Corte signature + barba ritual + tratamiento capilar + bebida de cortesía. La firma de la casa.",
    tier: "Signature",
    highlight: true,
  },
  {
    id: "tinte-camuflaje",
    name: "Camuflaje de canas",
    duration: "30 min",
    price: 30000,
    desc: "Pigmentación discreta que se mimetiza con tu tono natural. Sin shock visual.",
    tier: "Detalles",
  },
  {
    id: "facial",
    name: "Limpieza Facial",
    duration: "40 min",
    price: 50000,
    desc:
      "Vaporización, extracción suave, mascarilla y masaje de finalización. Piel descansada.",
    tier: "Detalles",
  },
];

export const team = [
  {
    name: "Leo Marín",
    role: "Fundador · Master Barber",
    bio:
      "Barbero con formación en psicología. Su silla es un espacio para el corte y para volver a uno mismo.",
  },
  {
    name: "Senior Barber",
    role: "Especialista en degradados",
    bio:
      "Tijera, máquina y barbas estructuradas. Precisión milimétrica en cada acabado.",
  },
  {
    name: "Senior Barber",
    role: "Cortes contemporáneos",
    bio:
      "Texturas, fades modernos y rituales de barba. Obsesionado con el detalle.",
  },
];

export const amenities = [
  { label: "Aire acondicionado", icon: "wind" },
  { label: "Parqueadero privado", icon: "parking" },
  { label: "Cerveza de barril", icon: "beer" },
  { label: "Café de origen", icon: "coffee" },
  { label: "Productos premium", icon: "spray" },
  { label: "Música seleccionada", icon: "vinyl" },
  { label: "Estudio privado", icon: "lock" },
  { label: "Conversación honesta", icon: "spark" },
  { label: "Recarga de buena energía", icon: "sun" },
];

export const testimonials = [
  {
    quote:
      "No es solo un corte. Salgo distinto. Leo escucha como un terapeuta y trabaja como un artista.",
    author: "Daniel A.",
    role: "Cliente desde 2022",
  },
  {
    quote:
      "El detalle, el ambiente, la cerveza, la música. Esto es lo que faltaba en Armenia.",
    author: "Sebastián M.",
    role: "Cliente desde 2023",
  },
  {
    quote:
      "El único sitio donde llego con prisa y salgo sin prisa. La experiencia es de otro nivel.",
    author: "Camilo R.",
    role: "Cliente desde 2021",
  },
];

/**
 * Reseñas verificadas de Google (mini-feed del hero).
 * Reemplazar con las reales cuando Leo nos comparta los textos.
 * Formato: quotes cortas (≤120 caracteres) que se vean bien al rotar.
 */
export const googleReviews = [
  {
    quote: "El mejor estudio de Armenia. Atención impecable y los cortes son arte puro.",
    author: "Andrés F.",
    when: "hace 2 semanas",
  },
  {
    quote: "Ambiente, música, cerveza, conversación. Salí como nuevo. Vuelvo seguro.",
    author: "Juan P.",
    when: "hace 1 mes",
  },
  {
    quote: "Privacidad total, productos de primera y un detalle obsesivo. 10/10.",
    author: "Mateo R.",
    when: "hace 3 semanas",
  },
  {
    quote: "Llevo 3 años viniendo. Nunca un corte malo. Nunca prisa. Eso lo dice todo.",
    author: "Camilo S.",
    when: "hace 2 meses",
  },
];

/** URL del perfil de Google Maps para "Ver todas las reseñas". */
export const googleReviewsUrl =
  "https://www.google.com/search?q=Oveja+Negra+Studio+Armenia+Quind%C3%ADo";

export const philosophy = [
  {
    n: "01",
    title: "Detalle obsesivo",
    body:
      "Cada milímetro cuenta. Tijera, navaja, máquina y mano firme. Sin atajos.",
  },
  {
    n: "02",
    title: "Conversación honesta",
    body:
      "Una hora para hablar sin filtros. La barbería como espacio de salud mental.",
  },
  {
    n: "03",
    title: "Ritual privado",
    body:
      "Estudio cerrado, una silla a la vez. Tu cita es tuya. Nada de filas ni prisa.",
  },
  {
    n: "04",
    title: "Producto premium",
    body:
      "Trabajamos con marcas que respetan tu piel y tu pelo. Lo barato sale caro.",
  },
];
