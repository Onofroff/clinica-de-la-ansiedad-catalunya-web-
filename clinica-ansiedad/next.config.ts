import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
    './src/i18n/request.ts'
);

const nextConfig: NextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
            }
        ],
    },
    compress: true,
    turbopack: {
        root: path.resolve('.'),
    },
    async redirects() {
        return [
            // Artículo retirado (27/10/2026): se titulaba «¿Qué es la depresión?» pero
            // su texto trataba de ansiedad generalizada. Su URL va a la página de Depresión.
            { source: '/blog/depresion-sintomas', destination: '/es/blog/que-es-la-depresion', statusCode: 301 },
            { source: '/:locale(es|ca)/blog/depresion-sintomas', destination: '/:locale/blog/que-es-la-depresion', statusCode: 301 },

            // La raíz NO se redirige: el middleware la reescribe a /es y devuelve
            // 200 con el contenido en castellano. Redirigir sumaba un tercer salto
            // a los dos que ya pone Vercel (http->https y sin-www->www), que no se
            // pueden fusionar desde el código.

            // El middleware de next-intl solo atiende '/' y '/(es|ca)/...': cualquier
            // ruta sin prefijo de idioma daba 404. Redirección explícita al locale
            // por defecto para todas las rutas conocidas (sitemap antiguo + enlaces).
            { source: '/ansiedad', destination: '/es/ansiedad', statusCode: 301 },
            { source: '/crisis-de-panico', destination: '/es/crisis-de-panico', statusCode: 301 },
            { source: '/depresion', destination: '/es/depresion', statusCode: 301 },
            { source: '/celos', destination: '/es/celos', statusCode: 301 },
            { source: '/ludopatia', destination: '/es/ludopatia', statusCode: 301 },
            { source: '/enfoque', destination: '/es/enfoque', statusCode: 301 },
            { source: '/terapia-online', destination: '/es/terapia-online', statusCode: 301 },
            { source: '/taller-gestion-estres-empresas', destination: '/es/taller-gestion-estres-empresas', statusCode: 301 },
            // Slugs cortos alternativos que se pueden compartir en comunicación comercial.
            { source: '/taller-empresas', destination: '/es/taller-gestion-estres-empresas', statusCode: 301 },
            { source: '/es/taller-empresas', destination: '/es/taller-gestion-estres-empresas', statusCode: 301 },
            { source: '/ca/taller-empresas', destination: '/ca/taller-gestion-estres-empresas', statusCode: 301 },
            { source: '/servicios', destination: '/es/servicios', statusCode: 301 },
            { source: '/servicios/:path*', destination: '/es/servicios/:path*', statusCode: 301 },
            { source: '/sobre-mi', destination: '/es/sobre-mi', statusCode: 301 },
            { source: '/blog', destination: '/es/blog', statusCode: 301 },
            { source: '/blog/:slug*', destination: '/es/blog/:slug*', statusCode: 301 },
            { source: '/privacidad', destination: '/es/privacidad', statusCode: 301 },
            { source: '/aviso-legal', destination: '/es/aviso-legal', statusCode: 301 },
            { source: '/politica-de-cookies', destination: '/es/politica-de-cookies', statusCode: 301 },
            { source: '/terapia-individual', destination: '/es/servicios/terapia-individual', statusCode: 301 },
            { source: '/terapia-pareja', destination: '/es/servicios/terapia-de-pareja', statusCode: 301 },

            // URLs del WordPress antiguo (rankeaban top 5 en GSC y daban 404 desde
            // el relanzamiento de marzo). Mapeadas a su equivalente más afín.
            { source: '/tratamientos-y-servicios', destination: '/es/servicios', statusCode: 301 },
            { source: '/como-saber-si-has-dejado-de-querer-a-tu-pareja', destination: '/es/servicios/terapia-de-pareja', statusCode: 301 },
            { source: '/deterioro-relacion-pareja-factores', destination: '/es/servicios/terapia-de-pareja', statusCode: 301 },
            // Página local de Canet de Mar / Maresme (estas URLs del WordPress antiguo
            // rankeaban top 3-5 en catalán). Reconducidas a la nueva landing local.
            { source: '/psicoanalisis-canet-de-mar', destination: '/es/psicologo-maresme', statusCode: 301 },
            { source: '/psicologia-canet-de-mar', destination: '/es/psicologo-maresme', statusCode: 301 },
            { source: '/psicologo-maresme', destination: '/es/psicologo-maresme', statusCode: 301 },
            { source: '/psicologo-canet-de-mar', destination: '/es/psicologo-maresme', statusCode: 301 },
            { source: '/formacion-academica', destination: '/es/sobre-mi', statusCode: 301 },
            // Artículo del WordPress antiguo que hoy daba 404. No hay equivalente
            // exacto en el blog actual, así que va al listado.
            { source: '/dependencia-emocional-sintomas-y-causas', destination: '/es/blog', statusCode: 301 },
            // Feed RSS de WordPress: lo siguen pidiendo agregadores y bots.
            { source: '/feed', destination: '/es/blog', statusCode: 301 },
            { source: '/comments/feed', destination: '/es/blog', statusCode: 301 },

            // No existe página de contacto: el contacto es la sección #contacto de
            // la home. Evita el 404 en una URL de conversión.
            { source: '/contacto', destination: '/es#contacto', statusCode: 301 },
            { source: '/es/contacto', destination: '/es#contacto', statusCode: 301 },
            { source: '/ca/contacto', destination: '/ca#contacto', statusCode: 301 },
            { source: '/ca/contacte', destination: '/ca#contacto', statusCode: 301 },
        ];
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'X-XSS-Protection', value: '1; mode=block' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
                ],
            },
        ];
    },
};

export default withNextIntl(nextConfig);
