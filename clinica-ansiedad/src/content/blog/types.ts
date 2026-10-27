// Artículos del blog que viven en el propio repositorio (no en Contentful).
// Se escriben en Markdown dentro del campo `body` y se publican con un commit:
// Vercel genera una versión de prueba por rama y la web pública al fusionar a main.

export interface LocalPostFaq {
    question: string;
    /** Respuesta breve y autocontenida: es lo que citan Google y los asistentes de IA. */
    answer: string;
}

export interface LocalPost {
    /** Ruta del artículo sin barras: "causas-de-la-ansiedad" -> /es/blog/causas-de-la-ansiedad */
    slug: string;
    /** Título visible (H1). */
    title: string;
    /** Título para Google si debe ser más corto que el H1 (≈60 caracteres). */
    seoTitle?: string;
    /** Meta descripción y entradilla (≈150-160 caracteres). */
    description: string;
    /** Palabra clave principal y secundarias del calendario editorial. */
    keywords: string[];
    category: string;
    /** Fecha de publicación (AAAA-MM-DD). */
    date: string;
    /** Última revisión clínica (AAAA-MM-DD). Si falta, se usa `date`. */
    updated?: string;
    /** Ruta pública de la imagen destacada (dentro de /public). */
    image: string;
    imageAlt: string;
    /** Cuerpo en Markdown. Los H2 (##) generan el índice. */
    body: string;
    faq?: LocalPostFaq[];
    /** Número del calendario editorial ("#09"), para seguimiento interno. */
    editorialRef?: string;
    /** Versión en catalán (se sirve en /ca/blog/<slug>). */
    ca?: LocalPostTranslation;
}

export interface LocalPostTranslation {
    title: string;
    seoTitle?: string;
    description: string;
    keywords: string[];
    category: string;
    image?: string;
    imageAlt: string;
    body: string;
    faq?: LocalPostFaq[];
}

/** Devuelve el artículo en el idioma pedido (castellano si no hay traducción). */
export function localizePost(post: LocalPost, locale: string): LocalPost {
    if (locale !== 'ca' || !post.ca) return post;
    const { ca } = post;
    return {
        ...post,
        title: ca.title,
        seoTitle: ca.seoTitle,
        description: ca.description,
        keywords: ca.keywords,
        category: ca.category,
        image: ca.image || post.image,
        imageAlt: ca.imageAlt,
        body: ca.body,
        faq: ca.faq,
    };
}
