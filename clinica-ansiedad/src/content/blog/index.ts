import { localizePost, type LocalPost } from './types';
import causasDeLaAnsiedad from './causas-de-la-ansiedad';
import terapiaFamiliar from './terapia-familiar';
import queEsLaAnsiedadYPorQueSeProduce from './que-es-la-ansiedad-y-por-que-se-produce';
import cualesSonLosSintomasDeLaAnsiedad from './cuales-son-los-sintomas-de-la-ansiedad';
import cuandoAcudirTerapiaDePareja from './cuando-acudir-terapia-de-pareja';
import porQueSoledadSaludMentalNoSeResuelveRelaciones from './por-que-soledad-salud-mental-no-se-resuelve-relaciones';
import celosPatologicos from './celos-patologicos';
import ansiedadGeneralizada from './ansiedad-generalizada';
import ataqueDeAnsiedadQueHacer from './ataque-de-ansiedad-que-hacer';
import queEsLaDepresion from './que-es-la-depresion';
import dolorPechoAnsiedadOInfarto from './dolor-pecho-ansiedad-o-infarto';
import despertarseMadrugadaAnsiedad from './despertarse-madrugada-ansiedad';
import burnoutSintomasEmpresa from './burnout-sintomas-empresa';
import gestionarEmocionesTrabajo from './gestionar-emociones-trabajo';
import presionTrabajoAnsiedad from './presion-trabajo-ansiedad';
import terapiaOnlineAnsiedad from './terapia-online-ansiedad';
import comoElegirTerapeutaOnlineAnsiedad from './como-elegir-terapeuta-online-ansiedad';
import ataqueDePanico from './ataque-de-panico';
import comoAyudarAtaqueDeAnsiedad from './como-ayudar-ataque-de-ansiedad';
import comoCalmarLaAnsiedad from './como-calmar-la-ansiedad';
import ansiedadSocial from './ansiedad-social';
import mareosPorAnsiedad from './mareos-por-ansiedad';
import agorafobia from './agorafobia';
import hipocondriaAnsiedadPorLaSalud from './hipocondria-ansiedad-por-la-salud';
import pensamientosIntrusivos from './pensamientos-intrusivos';
import psicologoOPsicoanalista from './psicologo-o-psicoanalista';

// Para añadir un artículo: crear su archivo en esta carpeta e importarlo aquí.
// Publicación programada: un artículo con `date` futura no aparece en la web
// (blog, artículo, sitemap, llms.txt) hasta ese día (hora de Madrid). Las páginas
// se regeneran cada hora (revalidate = 3600), así que salen solas.
const ALL_POSTS: LocalPost[] = [
    causasDeLaAnsiedad,
    terapiaFamiliar,
    queEsLaAnsiedadYPorQueSeProduce,
    cualesSonLosSintomasDeLaAnsiedad,
    cuandoAcudirTerapiaDePareja,
    porQueSoledadSaludMentalNoSeResuelveRelaciones,
    celosPatologicos,
    ansiedadGeneralizada,
    ataqueDeAnsiedadQueHacer,
    queEsLaDepresion,
    dolorPechoAnsiedadOInfarto,
    despertarseMadrugadaAnsiedad,
    burnoutSintomasEmpresa,
    gestionarEmocionesTrabajo,
    presionTrabajoAnsiedad,
    terapiaOnlineAnsiedad,
    comoElegirTerapeutaOnlineAnsiedad,
    ataqueDePanico,
    comoAyudarAtaqueDeAnsiedad,
    // Programados: uno cada 2 días (se publican solos en su fecha)
    comoCalmarLaAnsiedad,
    ansiedadSocial,
    mareosPorAnsiedad,
    agorafobia,
    hipocondriaAnsiedadPorLaSalud,
    pensamientosIntrusivos,
    psicologoOPsicoanalista,
];

function todayInMadrid(): string {
    // 'sv-SE' da el formato YYYY-MM-DD.
    return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Madrid' }).format(new Date());
}

export function isPublished(post: LocalPost): boolean {
    return post.date.slice(0, 10) <= todayInMadrid();
}

/** Artículos ya publicados (fecha de hoy o anterior). */
export function getPublishedPosts(): LocalPost[] {
    return ALL_POSTS.filter(isPublished);
}

export function getLocalPost(slug: string, locale = 'es'): LocalPost | undefined {
    const clean = slug.replace(/^\/|\/$/g, '');
    const post = getPublishedPosts().find((p) => p.slug === clean);
    return post ? localizePost(post, locale) : undefined;
}

export function getLocalPosts(locale = 'es'): LocalPost[] {
    return getPublishedPosts().map((p) => localizePost(p, locale));
}

export type { LocalPost, LocalPostFaq, LocalPostTranslation } from './types';
