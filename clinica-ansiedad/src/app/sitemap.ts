import { MetadataRoute } from 'next';
import { getEntries } from '@/lib/contentful';
import { LOCAL_POSTS } from '@/content/blog';
import { getContentfulCa } from '@/content/blog/contentful-ca';
import { MUNICIPIOS } from '@/content/municipios';

// Las URLs reales viven bajo www + prefijo de idioma (/es, /ca): el middleware de
// next-intl no sirve rutas sin prefijo, así que el sitemap debe listar las URLs
// canónicas exactas o Google acaba rastreando 404s.
const BASE_URL = 'https://www.clinicadelansiedad.com';
const LOCALES = ['es', 'ca'] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticPages = [
        { path: '', freq: 'weekly', priority: 1.0 },
        { path: '/ansiedad', freq: 'monthly', priority: 0.95 },
        { path: '/servicios', freq: 'monthly', priority: 0.95 },
        { path: '/crisis-de-panico', freq: 'monthly', priority: 0.9 },
        { path: '/depresion', freq: 'monthly', priority: 0.9 },
        { path: '/celos', freq: 'monthly', priority: 0.85 },
        { path: '/ludopatia', freq: 'monthly', priority: 0.85 },
        { path: '/enfoque', freq: 'monthly', priority: 0.85 },
        { path: '/terapia-online', freq: 'monthly', priority: 0.9 },
        { path: '/taller-gestion-estres-empresas', freq: 'monthly', priority: 0.9 },
        { path: '/psicologo-maresme', freq: 'monthly', priority: 0.9 },
        { path: '/servicios/terapia-individual', freq: 'monthly', priority: 0.85 },
        { path: '/servicios/terapia-de-pareja', freq: 'monthly', priority: 0.75 },
        { path: '/servicios/dimension-familiar', freq: 'monthly', priority: 0.7 },
        { path: '/sobre-mi', freq: 'monthly', priority: 0.8 },
        { path: '/blog', freq: 'weekly', priority: 0.85 },
        { path: '/politica-de-cookies', freq: 'yearly', priority: 0.3 },
    ];

    // Solo se listan en /ca las páginas con texto realmente traducido al catalán.
    // Las demás /ca/... canonizan a /es (ver buildMetadata) y no deben ir aquí.
    const CATALAN_PAGES = new Set([
        '', '/ansiedad', '/servicios', '/crisis-de-panico', '/depresion', '/celos', '/ludopatia',
        '/enfoque', '/terapia-online', '/taller-gestion-estres-empresas', '/psicologo-maresme',
        '/servicios/terapia-individual', '/servicios/terapia-de-pareja', '/servicios/dimension-familiar',
        '/sobre-mi', '/blog', '/politica-de-cookies',
    ]);

    // Páginas estáticas en ambos idiomas: /es/... y /ca/...
    const localizedPages = LOCALES.flatMap((locale) =>
        staticPages
        .filter(({ path }) => locale === 'es' || CATALAN_PAGES.has(path))
        .map(({ path, freq, priority }) => ({
            path: `/${locale}${path}`,
            freq,
            // El catalán ligeramente por debajo del castellano
            priority: locale === 'es' ? priority : Math.max(0.5, priority - 0.15),
        }))
    );

    // Posts del blog desde Contentful (la fuente real — los slugs hardcodeados de
    // blog-data.ts son fallbacks que no existen como entradas y daban 404).
    let blogPosts: { path: string; freq: string; priority: number }[] = [];
    try {
        const entries = await getEntries('blogPost', false, ['-fields.fechaPublicacion']);
        blogPosts = entries
            .map((entry: any) => (entry.fields?.slug || '').replace(/^\/|\/$/g, ''))
            .filter(Boolean)
            .flatMap((slug: string) => [
                { path: `/es/blog/${slug}`, freq: 'monthly', priority: 0.85 },
                // Versión catalana (src/content/blog/contentful-ca.ts)
                ...(getContentfulCa(slug) ? [{ path: `/ca/blog/${slug}`, freq: 'monthly', priority: 0.8 }] : []),
            ]);
    } catch {
        // Si Contentful no responde, el sitemap sale sin posts en vez de romperse.
    }

    // Artículos propios (src/content/blog), con su fecha real de revisión
    const localPosts = LOCAL_POSTS.flatMap((p) => [
        { path: `/es/blog/${p.slug}`, freq: 'monthly', priority: 0.85, lastModified: p.updated || p.date },
        ...(p.ca ? [{ path: `/ca/blog/${p.slug}`, freq: 'monthly', priority: 0.8, lastModified: p.updated || p.date }] : []),
    ]);
    const localSlugs = new Set(LOCAL_POSTS.map((p) => `/es/blog/${p.slug}`));

    // Páginas locales del Maresme, en castellano y catalán
    const municipioPages = LOCALES.flatMap((locale) =>
        MUNICIPIOS.map((m) => ({
            path: `/${locale}/psicologo-maresme/${m.slug}`,
            freq: 'monthly',
            priority: locale === 'es' ? 0.8 : 0.7,
        }))
    );

    const allPages: { path: string; freq: string; priority: number; lastModified?: string }[] = [
        ...localizedPages,
        ...municipioPages,
        ...localPosts,
        ...blogPosts.filter((p) => !localSlugs.has(p.path)),
    ];

    return allPages.map(({ path, freq, priority, lastModified }) => ({
        url: `${BASE_URL}${path}`,
        lastModified: lastModified || new Date().toISOString().split('T')[0],
        changeFrequency: freq as any,
        priority,
    }));
}
