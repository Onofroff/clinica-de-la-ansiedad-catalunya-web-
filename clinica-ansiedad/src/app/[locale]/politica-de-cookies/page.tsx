import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PATH = '/politica-de-cookies';
const BASE = 'https://www.clinicadelansiedad.com';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isCa = locale === 'ca';
    const title = isCa ? "Política de galetes | Clínica de l'Ansietat" : 'Política de cookies | Clínica de la Ansiedad';
    const description = isCa
        ? "Informació sobre les cookies que utilitza aquest web, la seva finalitat i com acceptar-les, rebutjar-les o retirar el consentiment."
        : 'Información sobre las cookies que utiliza esta web, su finalidad y cómo aceptarlas, rechazarlas o retirar el consentimiento.';
    const url = `${BASE}/${isCa ? 'ca' : 'es'}${PATH}`;
    return {
        title,
        description,
        robots: 'index, follow',
        alternates: {
            canonical: url,
            languages: {
                es: `${BASE}/es${PATH}`,
                ca: `${BASE}/ca${PATH}`,
                'x-default': `${BASE}/es${PATH}`,
            },
        },
    };
}

const content = {
    es: {
        h1: 'Política de cookies',
        updated: 'Última actualización: septiembre de 2026',
        sections: [
            {
                h2: '¿Qué son las cookies?',
                p: 'Las cookies son pequeños archivos que se almacenan en tu dispositivo al visitar una web. Sirven, entre otras cosas, para recordar preferencias o para obtener estadísticas de uso.',
            },
            {
                h2: '¿Qué cookies utiliza esta web?',
                p: 'Esta web solo utiliza cookies de análisis, y únicamente si las aceptas en el aviso de cookies. No utilizamos cookies publicitarias ni de perfilado.',
            },
        ],
        tableCaption: 'Cookies de análisis (Google Analytics 4, proveedor: Google Ireland Ltd.)',
        tableHead: ['Cookie', 'Finalidad', 'Duración'],
        tableRows: [
            ['_ga', 'Distinguir usuarios de forma anónima para estadísticas de uso', '2 años'],
            ['_ga_XB01E805MT', 'Mantener el estado de la sesión de análisis', '2 años'],
        ],
        afterTable:
            'Además, guardamos tu elección sobre las cookies en el almacenamiento local de tu navegador (clave "ca-cookie-consent", validez 1 año). Este dato es necesario para recordar tu decisión y está exento de consentimiento.',
        consent: {
            h2: 'Cómo aceptar, rechazar o retirar el consentimiento',
            items: [
                'Al entrar en la web puedes Aceptar o Rechazar las cookies de análisis desde el aviso, con la misma facilidad. Si las rechazas, la web funciona exactamente igual.',
                'Puedes cambiar tu elección en cualquier momento con el enlace "Configurar cookies" del pie de página.',
                'También puedes eliminar o bloquear las cookies desde la configuración de tu navegador (Chrome, Safari, Firefox o Edge).',
            ],
        },
        google: {
            h2: 'Más información sobre Google Analytics',
            p: 'Google Analytics es un servicio de analítica de Google. Puedes consultar cómo usa Google la información en',
            linkText: 'policies.google.com/technologies/partner-sites',
            href: 'https://policies.google.com/technologies/partner-sites',
        },
        owner: {
            h2: 'Responsable',
            lines: [
                'Clínica de la Ansiedad Catalunya · Joan Ramon Soto',
                'Ronda Dr. Anglès 74, 08360 Canet de Mar (Barcelona)',
                'contacto@clinicadelansiedad.com · 613 91 60 79',
            ],
        },
    },
    ca: {
        h1: 'Política de cookies',
        updated: "Última actualització: setembre de 2026",
        sections: [
            {
                h2: 'Què són les cookies?',
                p: "Les cookies són petits arxius que s'emmagatzemen al teu dispositiu en visitar un web. Serveixen, entre altres coses, per recordar preferències o per obtenir estadístiques d'ús.",
            },
            {
                h2: 'Quines cookies utilitza aquest web?',
                p: "Aquest web només utilitza cookies d'anàlisi, i únicament si les acceptes a l'avís de cookies. No fem servir cookies publicitàries ni de perfilat.",
            },
        ],
        tableCaption: "Cookies d'anàlisi (Google Analytics 4, proveïdor: Google Ireland Ltd.)",
        tableHead: ['Cookie', 'Finalitat', 'Durada'],
        tableRows: [
            ['_ga', "Distingir usuaris de manera anònima per a estadístiques d'ús", '2 anys'],
            ['_ga_XB01E805MT', "Mantenir l'estat de la sessió d'anàlisi", '2 anys'],
        ],
        afterTable:
            'A més, guardem la teva elecció sobre les cookies a l\'emmagatzematge local del navegador (clau "ca-cookie-consent", validesa 1 any). Aquesta dada és necessària per recordar la teva decisió i està exempta de consentiment.',
        consent: {
            h2: 'Com acceptar, rebutjar o retirar el consentiment',
            items: [
                "En entrar al web pots Acceptar o Rebutjar les cookies d'anàlisi des de l'avís, amb la mateixa facilitat. Si les rebutges, el web funciona exactament igual.",
                'Pots canviar la teva elecció en qualsevol moment amb l\'enllaç "Configurar cookies" del peu de pàgina.',
                'També pots eliminar o bloquejar les cookies des de la configuració del teu navegador (Chrome, Safari, Firefox o Edge).',
            ],
        },
        google: {
            h2: 'Més informació sobre Google Analytics',
            p: "Google Analytics és un servei d'analítica de Google. Pots consultar com fa servir Google la informació a",
            linkText: 'policies.google.com/technologies/partner-sites',
            href: 'https://policies.google.com/technologies/partner-sites',
        },
        owner: {
            h2: 'Responsable',
            lines: [
                'Clínica de la Ansiedad Catalunya · Joan Ramon Soto',
                'Ronda Dr. Anglès 74, 08360 Canet de Mar (Barcelona)',
                'contacto@clinicadelansiedad.com · 613 91 60 79',
            ],
        },
    },
} as const;

export default async function PoliticaCookiesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = content[locale === 'ca' ? 'ca' : 'es'];

    return (
        <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
            <Navbar />
            <main className="pt-32 pb-20 px-4 md:px-8">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-3">{t.h1}</h1>
                    <p className="text-navy/50 text-sm mb-10">{t.updated}</p>

                    {t.sections.map((s, i) => (
                        <section key={i} className="mb-8">
                            <h2 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3">{s.h2}</h2>
                            <p className="text-navy/70 leading-relaxed">{s.p}</p>
                        </section>
                    ))}

                    <div className="overflow-x-auto mb-4">
                        <table className="w-full text-left border border-navy/10 rounded-xl overflow-hidden bg-white">
                            <caption className="text-left text-navy/60 text-sm mb-2">{t.tableCaption}</caption>
                            <thead className="bg-navy/5">
                                <tr>
                                    {t.tableHead.map((h) => (
                                        <th key={h} className="px-4 py-3 text-navy text-sm font-bold">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.tableRows.map((row, i) => (
                                    <tr key={i} className="border-t border-navy/10">
                                        {row.map((cell, j) => (
                                            <td key={j} className={`px-4 py-3 text-sm ${j === 0 ? 'font-mono text-navy' : 'text-navy/70'}`}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-navy/70 leading-relaxed mb-8">{t.afterTable}</p>

                    <section className="mb-8">
                        <h2 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3">{t.consent.h2}</h2>
                        <ul className="space-y-2">
                            {t.consent.items.map((item, i) => (
                                <li key={i} className="text-navy/70 leading-relaxed pl-4 border-l-2 border-gold/40">{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3">{t.google.h2}</h2>
                        <p className="text-navy/70 leading-relaxed">
                            {t.google.p}{' '}
                            <a href={t.google.href} target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:text-navy underline underline-offset-2">
                                {t.google.linkText}
                            </a>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3">{t.owner.h2}</h2>
                        {t.owner.lines.map((line, i) => (
                            <p key={i} className="text-navy/70 leading-relaxed">{line}</p>
                        ))}
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
