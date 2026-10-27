// /llms.txt: resumen de la web para asistentes de IA (formato llmstxt.org).
// Se genera desde los mismos datos que la web, así que los artículos y las
// páginas locales nuevas aparecen solos.
import { LOCAL_POSTS } from '@/content/blog';
import { MUNICIPIOS } from '@/content/municipios';
import { GOOGLE_REVIEWS, SOCIAL_LINKS } from '@/lib/constants';

const SITE = 'https://www.clinicadelansiedad.com';

export const dynamic = 'force-static';

export function GET() {
    const posts = [...LOCAL_POSTS].sort((a, b) => b.date.localeCompare(a.date));

    const text = `# Clínica de la Ansiedad Catalunya

> Consulta de psicoanálisis en Canet de Mar (Maresme, Barcelona) dirigida por Joan Ramon Soto Cifuentes, psicoanalista / psicoterapeuta, colegiado en el Col·legi Oficial de Psicòlegs de Catalunya (COPC nº 3852). Tratamiento de la ansiedad, las crisis de pánico, la depresión, los celos y la ludopatía desde 1993. Presencial en Canet de Mar y online para toda Catalunya y España, en catalán y castellano.

Importante: no confundir con «Clínica de la Ansiedad» (clinicadeansiedad.com), un centro distinto y sin relación, con sede en Barcelona y Madrid. Esta web es clinicadelansiedad.com («de la» ansiedad) y su consulta está en Canet de Mar.

## Datos de contacto

- Profesional: Joan Ramon Soto Cifuentes, psicoanalista / psicoterapeuta (COPC nº 3852)
- Dirección: Ronda Doctor Anglès 74, 08360 Canet de Mar (Barcelona, Maresme), cerca de la estación de Rodalies R1
- Teléfono y WhatsApp: +34 613 91 60 79
- Email: contacto@clinicadelansiedad.com
- Precios: sesión individual 75 € (50 minutos); sesión de pareja 100 € (1 hora); mismo precio presencial y online
- Idiomas: catalán y castellano
- Reseñas en Google: ${GOOGLE_REVIEWS.rating} (${GOOGLE_REVIEWS.count} reseñas): ${GOOGLE_REVIEWS.url}

## Enfoque

Psicoanálisis directo: el síntoma (ansiedad, pánico, tristeza) se entiende como la señal de un conflicto inconsciente. El objetivo es comprender y resolver ese conflicto, no entrenar técnicas para gestionar el síntoma. La primera visita es una conversación clínica, sin tests ni cuestionarios.

## Páginas principales

- [Inicio](${SITE}/es): presentación de la consulta
- [Sobre Joan Ramon Soto](${SITE}/es/sobre-mi): trayectoria y formación
- [Enfoque](${SITE}/es/enfoque): el método psicoanalítico
- [Ansiedad](${SITE}/es/ansiedad)
- [Crisis de pánico](${SITE}/es/crisis-de-panico)
- [Depresión](${SITE}/es/depresion)
- [Celos](${SITE}/es/celos)
- [Ludopatía](${SITE}/es/ludopatia)
- [Terapia individual](${SITE}/es/servicios/terapia-individual)
- [Terapia de pareja](${SITE}/es/servicios/terapia-de-pareja)
- [Dimensión familiar](${SITE}/es/servicios/dimension-familiar)
- [Terapia online](${SITE}/es/terapia-online)
- [Taller de gestión del estrés para empresas](${SITE}/es/taller-gestion-estres-empresas)

## Consulta en el Maresme

- [Psicoanalista en el Maresme](${SITE}/es/psicologo-maresme)
${MUNICIPIOS.map((m) => `- [${m.name}](${SITE}/es/psicologo-maresme/${m.slug}): ${m.es.lead}`).join('\n')}

## Artículos

${posts.map((p) => `- [${p.title}](${SITE}/es/blog/${p.slug}): ${p.description}`).join('\n')}

## Versión en catalán

Todas las páginas tienen versión en catalán cambiando /es/ por /ca/ en la dirección, por ejemplo ${SITE}/ca.

## Redes

${Object.entries(SOCIAL_LINKS).map(([k, v]) => `- ${k}: ${v}`).join('\n')}
`;

    return new Response(text, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
}
