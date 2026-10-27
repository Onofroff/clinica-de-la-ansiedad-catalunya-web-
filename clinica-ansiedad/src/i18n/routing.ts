import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['es', 'ca'],

  // Used when no locale matches
  defaultLocale: 'es',
  
  pathnames: {
    '/': '/',
    '/sobre-mi': '/sobre-mi',
    '/servicios': '/servicios',
    '/servicios/terapia-individual': '/servicios/terapia-individual',
    '/servicios/terapia-de-pareja': '/servicios/terapia-de-pareja',
    '/servicios/dimension-familiar': '/servicios/dimension-familiar',
    '/terapia-online': '/terapia-online',
    '/taller-gestion-estres-empresas': '/taller-gestion-estres-empresas',
    '/psicologo-maresme': '/psicologo-maresme',
    '/psicologo-maresme/[municipio]': '/psicologo-maresme/[municipio]',
    '/ansiedad': '/ansiedad',
    '/crisis-de-panico': '/crisis-de-panico',
    '/depresion': '/depresion',
    '/celos': '/celos',
    '/ludopatia': '/ludopatia',
    '/enfoque': '/enfoque',
    '/blog': '/blog',
    // Catch-all: hay entradas con carpeta ("/problemas/ansiedad-generalizada").
    '/blog/[...slug]': '/blog/[...slug]',
    '/privacidad': '/privacidad',
    '/aviso-legal': '/aviso-legal',
    '/politica-de-cookies': '/politica-de-cookies'
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
