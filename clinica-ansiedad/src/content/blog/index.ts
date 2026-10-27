import { localizePost, type LocalPost } from './types';
import causasDeLaAnsiedad from './causas-de-la-ansiedad';

// Para añadir un artículo: crear su archivo en esta carpeta e importarlo aquí.
export const LOCAL_POSTS: LocalPost[] = [causasDeLaAnsiedad];

export function getLocalPost(slug: string, locale = 'es'): LocalPost | undefined {
    const clean = slug.replace(/^\/|\/$/g, '');
    const post = LOCAL_POSTS.find((p) => p.slug === clean);
    return post ? localizePost(post, locale) : undefined;
}

export function getLocalPosts(locale = 'es'): LocalPost[] {
    return LOCAL_POSTS.map((p) => localizePost(p, locale));
}

export type { LocalPost, LocalPostFaq, LocalPostTranslation } from './types';
