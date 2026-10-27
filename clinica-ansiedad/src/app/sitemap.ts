import { MetadataRoute } from 'next';
import { getEntries } from '@/lib/contentful';
import { LOCAL_POSTS } from '@/content/blog';

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

    // Páginas estáticas en ambos idiomas: /es/... y /ca/...
    const localizedPages = LOCALES.flatMap((locale) =>
        staticPages.map(({ path, freq, priority }) => ({
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
            .map((slug: string) => ({
                path: `/es/blog/${slug}`,
                freq: 'monthly',
                priority: 0.85,
            }));
    } catch {
        // Si Contentful no responde, el sitemap sale sin posts en vez de romperse.
    }

    // Artículos propios (src/content/blog), con su fecha real de revisión
    const localPosts = LOCAL_POSTS.map((p) => ({
        path: `/es/blog/${p.slug}`,
        freq: 'monthly',
        priority: 0.85,
        lastModified: p.updated || p.date,
    }));
    const localSlugs = new Set(LOCAL_POSTS.map((p) => `/es/blog/${p.slug}`));

    const allPages: { path: string; freq: string; priority: number; lastModified?: string }[] = [
        ...localizedPages,
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
