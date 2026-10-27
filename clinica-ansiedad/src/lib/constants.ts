const SETMORE_BASE = 'https://clinicadelaansiedad.setmore.com';

// Enlace de reserva con atribución por ubicación del CTA (utm_content),
// para poder medir en analítica qué botón convierte.
export const bookingUrl = (ctaLocation: string) =>
  `${SETMORE_BASE}?utm_source=web&utm_medium=cta&utm_content=${ctaLocation}`;

// Compat: enlace genérico usado por páginas que aún no atribuyen ubicación.
export const BOOKING_URL = bookingUrl('general');

export const PHONE_NUMBER = '+34613916079';
export const PHONE_DISPLAY = '613 91 60 79';

export const WHATSAPP_NUMBER = '34613916079';
export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Ficha de Google (Clínica de la Ansiedad Catalunya, Canet de Mar).
// Fuente única: la web mostraba 130+, el schema 4,9/156 y ninguno coincidía con
// la ficha. Al actualizar, cambiar solo aquí. Comprobado el 13/09/2026: 5,0 (158).
export const GOOGLE_REVIEWS = {
  rating: '5,0',
  count: 158,
  // Enlace oficial a la ficha de Google Maps, facilitado por la clínica (27/10/2026).
  url: 'https://maps.app.goo.gl/ShS87qdy9zPTKJL4A',
} as const;

// Foto real de Joan Ramon Soto. El blog tiraba de i.pravatar.cc, un generador
// de caras aleatorias: mostraba a un desconocido firmando los artículos.
// Centralizada aquí porque al cambiarla hay que renombrar el fichero (si no,
// la caché del navegador sigue sirviendo la anterior).
export const AUTHOR_PHOTO = '/images/joanramonsotoimagenweb.webp';

// Perfiles oficiales de la clínica en redes sociales (pie de página y schema "sameAs").
export const SOCIAL_LINKS = {
    googleMaps: 'https://maps.app.goo.gl/ShS87qdy9zPTKJL4A',
    instagram: 'https://www.instagram.com/clinicadelansietatcatalunya/',
    tiktok: 'https://www.tiktok.com/@clinica.de.la.ansiedad',
    facebook: 'https://www.facebook.com/share/19fRNjVM1V/',
    linkedin: 'https://www.linkedin.com/in/cl%C3%ADnica-de-la-ansiedad-catalunya-388450424/',
} as const;
