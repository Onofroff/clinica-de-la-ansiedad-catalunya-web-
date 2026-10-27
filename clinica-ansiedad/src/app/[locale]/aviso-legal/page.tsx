import type { Metadata } from 'next';
import LegalPage, { legalMetadata, type LegalSection } from '@/components/LegalPage';

// Aviso legal (art. 10 LSSI-CE).
// PENDIENTE: añadir el NIF del titular en la sección "Titular" cuando lo facilite.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return legalMetadata(
        '/aviso-legal',
        locale,
        { es: 'Aviso legal | Clínica de la Ansiedad Catalunya', ca: "Avís legal | Clínica de l'Ansietat Catalunya" },
        {
            es: 'Datos del titular de clinicadelansiedad.com, condiciones de uso de la web y normativa profesional aplicable.',
            ca: "Dades del titular de clinicadelansiedad.com, condicions d'ús del web i normativa professional aplicable.",
        }
    );
}

const content: Record<'es' | 'ca', { h1: string; updated: string; sections: LegalSection[] }> = {
    es: {
        h1: 'Aviso legal',
        updated: 'Última actualización: octubre de 2026',
        sections: [
            {
                h2: 'Titular de la web',
                items: [
                    'Titular: Joan Ramon Soto Cifuentes, que ejerce bajo el nombre comercial «Clínica de la Ansiedad Catalunya».',
                    'Domicilio: Ronda Doctor Anglès 74, 08360 Canet de Mar (Barcelona).',
                    'Correo electrónico: contacto@clinicadelansiedad.com',
                    'Teléfono: 613 91 60 79',
                    'Dominio: clinicadelansiedad.com',
                ],
            },
            {
                h2: 'Datos profesionales',
                items: [
                    'Profesión: psicoanalista / psicoterapeuta.',
                    "Colegio profesional: Col·legi Oficial de Psicòlegs de Catalunya (COPC), número de colegiado 3852.",
                    'Normas profesionales aplicables: Código Deontológico del COPC, disponible en la web del Colegio (copc.cat).',
                ],
            },
            {
                h2: 'Objeto de la web',
                p: [
                    'Esta web informa sobre los servicios de psicoterapia psicoanalítica que se ofrecen en la consulta de Canet de Mar y en modalidad online, y publica artículos divulgativos sobre ansiedad y salud mental.',
                    'Los contenidos tienen carácter informativo y no sustituyen una valoración clínica personalizada. Si estás en una situación de crisis o de riesgo, llama al 112 o, para conducta suicida, a la línea 024.',
                ],
            },
            {
                h2: 'Condiciones de uso',
                p: [
                    'Quien navega por esta web se compromete a hacer un uso adecuado de sus contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.',
                    'El titular puede modificar en cualquier momento la información, la presentación y los servicios de la web.',
                ],
            },
            {
                h2: 'Propiedad intelectual',
                p: [
                    'Los textos, imágenes, logotipos y el diseño de esta web pertenecen a su titular o se usan con autorización. Queda prohibida su reproducción, distribución o transformación sin permiso expreso, salvo las citas breves con mención de la fuente.',
                ],
            },
            {
                h2: 'Responsabilidad y enlaces',
                p: [
                    'El titular no se hace responsable de los daños derivados de un uso indebido de la web ni de los contenidos de las webs de terceros enlazadas desde ella, como el sistema de reservas o las redes sociales.',
                ],
            },
            {
                h2: 'Protección de datos y cookies',
                p: [
                    'El tratamiento de los datos personales se explica en la Política de privacidad, y el uso de cookies en la Política de cookies.',
                ],
            },
            {
                h2: 'Ley aplicable',
                p: ['Este aviso legal se rige por la legislación española.'],
            },
        ],
    },
    ca: {
        h1: 'Avís legal',
        updated: "Darrera actualització: octubre de 2026",
        sections: [
            {
                h2: 'Titular del web',
                items: [
                    "Titular: Joan Ramon Soto Cifuentes, que exerceix amb el nom comercial «Clínica de la Ansiedad Catalunya».",
                    'Domicili: Ronda Doctor Anglès 74, 08360 Canet de Mar (Barcelona).',
                    'Correu electrònic: contacto@clinicadelansiedad.com',
                    'Telèfon: 613 91 60 79',
                    'Domini: clinicadelansiedad.com',
                ],
            },
            {
                h2: 'Dades professionals',
                items: [
                    'Professió: psicoanalista / psicoterapeuta.',
                    "Col·legi professional: Col·legi Oficial de Psicòlegs de Catalunya (COPC), número de col·legiat 3852.",
                    "Normes professionals aplicables: Codi Deontològic del COPC, disponible al web del Col·legi (copc.cat).",
                ],
            },
            {
                h2: 'Objecte del web',
                p: [
                    "Aquest web informa sobre els serveis de psicoteràpia psicoanalítica que s'ofereixen a la consulta de Canet de Mar i en línia, i publica articles divulgatius sobre ansietat i salut mental.",
                    "Els continguts tenen caràcter informatiu i no substitueixen una valoració clínica personalitzada. Si estàs en una situació de crisi o de risc, truca al 112 o, per a conducta suïcida, a la línia 024.",
                ],
            },
            {
                h2: "Condicions d'ús",
                p: [
                    "Qui navega per aquest web es compromet a fer un ús adequat dels continguts i a no fer-los servir per a activitats il·lícites o contràries a la bona fe.",
                    'El titular pot modificar en qualsevol moment la informació, la presentació i els serveis del web.',
                ],
            },
            {
                h2: 'Propietat intel·lectual',
                p: [
                    "Els textos, imatges, logotips i el disseny d'aquest web pertanyen al titular o s'utilitzen amb autorització. Se'n prohibeix la reproducció, distribució o transformació sense permís exprés, llevat de cites breus amb esment de la font.",
                ],
            },
            {
                h2: 'Responsabilitat i enllaços',
                p: [
                    "El titular no es fa responsable dels danys derivats d'un ús indegut del web ni dels continguts dels webs de tercers enllaçats, com el sistema de reserves o les xarxes socials.",
                ],
            },
            {
                h2: 'Protecció de dades i cookies',
                p: ["El tractament de les dades personals s'explica a la Política de privacitat, i l'ús de cookies a la Política de cookies."],
            },
            {
                h2: 'Llei aplicable',
                p: ["Aquest avís legal es regeix per la legislació espanyola."],
            },
        ],
    },
};

export default async function AvisoLegalPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return <LegalPage {...content[locale === 'ca' ? 'ca' : 'es']} />;
}
