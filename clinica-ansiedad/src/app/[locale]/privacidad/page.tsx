import type { Metadata } from 'next';
import LegalPage, { legalMetadata, type LegalSection } from '@/components/LegalPage';

// Política de privacidad (RGPD y LOPDGDD).
// PENDIENTE: añadir el NIF del responsable cuando lo facilite.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return legalMetadata(
        '/privacidad',
        locale,
        { es: 'Política de privacidad | Clínica de la Ansiedad Catalunya', ca: "Política de privacitat | Clínica de l'Ansietat Catalunya" },
        {
            es: 'Cómo trata la Clínica de la Ansiedad Catalunya tus datos personales: responsable, finalidades, base legal, plazos y derechos.',
            ca: "Com tracta la Clínica de l'Ansietat Catalunya les teves dades personals: responsable, finalitats, base legal, terminis i drets.",
        }
    );
}

const content: Record<'es' | 'ca', { h1: string; updated: string; intro: string; sections: LegalSection[] }> = {
    es: {
        h1: 'Política de privacidad',
        updated: 'Última actualización: octubre de 2026',
        intro: 'En una consulta de psicoterapia la confidencialidad es parte del tratamiento. Aquí se explica qué datos se tratan, para qué y cómo puedes ejercer tus derechos.',
        sections: [
            {
                h2: 'Responsable del tratamiento',
                items: [
                    'Joan Ramon Soto Cifuentes («Clínica de la Ansiedad Catalunya»), psicoanalista / psicoterapeuta, COPC nº 3852.',
                    'Ronda Doctor Anglès 74, 08360 Canet de Mar (Barcelona).',
                    'contacto@clinicadelansiedad.com · 613 91 60 79',
                ],
            },
            {
                h2: 'Qué datos tratamos',
                items: [
                    'Datos de contacto e identificación que nos facilitas al escribirnos (correo, WhatsApp, teléfono) o al reservar una cita.',
                    'Si inicias un tratamiento, los datos de salud necesarios para la atención clínica, que tienen la consideración de datos de categoría especial y están sujetos a secreto profesional.',
                    'Datos de navegación de forma agregada (Google Analytics), solo si aceptas las cookies de análisis.',
                ],
            },
            {
                h2: 'Para qué y con qué base legal',
                items: [
                    'Responder a tus consultas y gestionar las citas: tu consentimiento y la aplicación de medidas precontractuales a petición tuya.',
                    'Prestar la atención psicoterapéutica y llevar la documentación clínica: la prestación del servicio y la asistencia sanitaria (art. 9.2.h del RGPD), con las obligaciones legales de la normativa sanitaria.',
                    'Facturación y obligaciones fiscales: cumplimiento de obligaciones legales.',
                    'Analítica de la web: tu consentimiento, que puedes retirar en cualquier momento desde «Configurar cookies».',
                ],
            },
            {
                h2: 'Cuánto tiempo los conservamos',
                p: [
                    'Los datos de contacto, mientras dure la relación y después durante los plazos de prescripción de posibles responsabilidades. La documentación clínica, durante el plazo que exija la normativa sanitaria. Los datos fiscales, durante los plazos que fija la ley tributaria.',
                ],
            },
            {
                h2: 'Con quién se comparten',
                p: [
                    'No se ceden datos a terceros salvo obligación legal. Para que la web y las citas funcionen, algunos proveedores tratan datos por cuenta de la consulta, con contrato de encargado del tratamiento:',
                ],
                items: [
                    'Setmore: sistema de reservas de citas.',
                    'Vercel: alojamiento de la web.',
                    'Arsys: correo electrónico.',
                    'Google (Analytics): estadísticas de la web, solo con tu consentimiento.',
                    'WhatsApp (Meta): si eliges contactar por ese canal.',
                ],
            },
            {
                h2: 'Transferencias fuera del Espacio Económico Europeo',
                p: [
                    'Algunos de estos proveedores pueden tratar datos en Estados Unidos. Lo hacen bajo el Marco de Privacidad de Datos UE-EE. UU. o cláusulas contractuales tipo aprobadas por la Comisión Europea.',
                ],
            },
            {
                h2: 'Tus derechos',
                p: [
                    'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad, y retirar tu consentimiento, escribiendo a contacto@clinicadelansiedad.com. Si consideras que no se han atendido correctamente, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).',
                ],
            },
            {
                h2: 'Seguridad',
                p: [
                    'Se aplican medidas técnicas y organizativas adecuadas a la sensibilidad de los datos. Las sesiones online se realizan por videollamada cifrada y no se graban.',
                ],
            },
        ],
    },
    ca: {
        h1: 'Política de privacitat',
        updated: 'Darrera actualització: octubre de 2026',
        intro: "En una consulta de psicoteràpia, la confidencialitat forma part del tractament. Aquí s'explica quines dades es tracten, per a què i com pots exercir els teus drets.",
        sections: [
            {
                h2: 'Responsable del tractament',
                items: [
                    'Joan Ramon Soto Cifuentes («Clínica de la Ansiedad Catalunya»), psicoanalista / psicoterapeuta, COPC núm. 3852.',
                    'Ronda Doctor Anglès 74, 08360 Canet de Mar (Barcelona).',
                    'contacto@clinicadelansiedad.com · 613 91 60 79',
                ],
            },
            {
                h2: 'Quines dades tractem',
                items: [
                    "Dades de contacte i d'identificació que ens facilites quan ens escrius (correu, WhatsApp, telèfon) o quan reserves una cita.",
                    "Si inicies un tractament, les dades de salut necessàries per a l'atenció clínica, que tenen la consideració de dades de categoria especial i estan subjectes a secret professional.",
                    "Dades de navegació de manera agregada (Google Analytics), només si acceptes les cookies d'anàlisi.",
                ],
            },
            {
                h2: 'Per a què i amb quina base legal',
                items: [
                    "Respondre les teves consultes i gestionar les cites: el teu consentiment i l'aplicació de mesures precontractuals a petició teva.",
                    "Prestar l'atenció psicoterapèutica i portar la documentació clínica: la prestació del servei i l'assistència sanitària (art. 9.2.h del RGPD), amb les obligacions legals de la normativa sanitària.",
                    'Facturació i obligacions fiscals: compliment d\'obligacions legals.',
                    "Analítica del web: el teu consentiment, que pots retirar en qualsevol moment des de «Configurar cookies».",
                ],
            },
            {
                h2: 'Quant de temps les conservem',
                p: [
                    "Les dades de contacte, mentre duri la relació i després durant els terminis de prescripció de possibles responsabilitats. La documentació clínica, durant el termini que exigeixi la normativa sanitària. Les dades fiscals, durant els terminis que fixa la llei tributària.",
                ],
            },
            {
                h2: 'Amb qui es comparteixen',
                p: [
                    "No se cedeixen dades a tercers llevat d'obligació legal. Perquè el web i les cites funcionin, alguns proveïdors tracten dades per compte de la consulta, amb contracte d'encarregat del tractament:",
                ],
                items: [
                    'Setmore: sistema de reserva de cites.',
                    'Vercel: allotjament del web.',
                    'Arsys: correu electrònic.',
                    'Google (Analytics): estadístiques del web, només amb el teu consentiment.',
                    'WhatsApp (Meta): si tries contactar per aquest canal.',
                ],
            },
            {
                h2: "Transferències fora de l'Espai Econòmic Europeu",
                p: [
                    "Alguns d'aquests proveïdors poden tractar dades als Estats Units. Ho fan d'acord amb el Marc de Privacitat de Dades UE-EUA o clàusules contractuals tipus aprovades per la Comissió Europea.",
                ],
            },
            {
                h2: 'Els teus drets',
                p: [
                    "Pots exercir els drets d'accés, rectificació, supressió, oposició, limitació i portabilitat, i retirar el consentiment, escrivint a contacto@clinicadelansiedad.com. Si consideres que no s'han atès correctament, pots reclamar davant l'Agència Espanyola de Protecció de Dades (aepd.es).",
                ],
            },
            {
                h2: 'Seguretat',
                p: [
                    "S'apliquen mesures tècniques i organitzatives adequades a la sensibilitat de les dades. Les sessions en línia es fan per videotrucada xifrada i no s'enregistren.",
                ],
            },
        ],
    },
};

export default async function PrivacidadPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return <LegalPage {...content[locale === 'ca' ? 'ca' : 'es']} />;
}
