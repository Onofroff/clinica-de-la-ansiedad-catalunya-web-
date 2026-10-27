import { localizePost, type LocalPost } from './types';
import causasDeLaAnsiedad from './causas-de-la-ansiedad';
import terapiaFamiliar from './terapia-familiar';
import queEsLaAnsiedadYPorQueSeProduce from './que-es-la-ansiedad-y-por-que-se-produce';
import cualesSonLosSintomasDeLaAnsiedad from './cuales-son-los-sintomas-de-la-ansiedad';
import cuandoAcudirTerapiaDePareja from './cuando-acudir-terapia-de-pareja';
import porQueSoledadSaludMentalNoSeResuelveRelaciones from './por-que-soledad-salud-mental-no-se-resuelve-relaciones';
import celosPatologicos from './celos-patologicos';
import ansiedadGeneralizada from './ansiedad-generalizada';

// Para añadir un artículo: crear su archivo en esta carpeta e importarlo aquí.
export const LOCAL_POSTS: LocalPost[] = [
    causasDeLaAnsiedad,
    terapiaFamiliar,
    queEsLaAnsiedadYPorQueSeProduce,
    cualesSonLosSintomasDeLaAnsiedad,
    cuandoAcudirTerapiaDePareja,
    porQueSoledadSaludMentalNoSeResuelveRelaciones,
    celosPatologicos,
    ansiedadGeneralizada,
];

export function getLocalPost(slug: string, locale = 'es'): LocalPost | undefined {
    const clean = slug.replace(/^\/|\/$/g, '');
    const post = LOCAL_POSTS.find((p) => p.slug === clean);
    return post ? localizePost(post, locale) : undefined;
}

export function getLocalPosts(locale = 'es'): LocalPost[] {
    return LOCAL_POSTS.map((p) => localizePost(p, locale));
}

export type { LocalPost, LocalPostFaq, LocalPostTranslation } from './types';
