import { ArrowRight, CheckCircle2, MessageCircle, Monitor, Train } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from '@/i18n/routing';
import { buildMetadata } from '@/lib/metadata';
import { bookingUrl, whatsappUrl } from '@/lib/constants';

// Página para búsquedas de Barcelona ("psicólogo ansiedad barcelona" y variantes:
// cientos de impresiones en Search Console en posiciones 45-60, sin una página
// que les respondiera). Honestidad ante todo: la consulta presencial está en
// Canet de Mar; desde Barcelona se atiende por videollamada o, si se prefiere,
// en Canet (Rodalies R1). Nunca se insinúa una consulta física en Barcelona.

const SITE = 'https://www.clinicadelansiedad.com';
const PATH = '/psicologo-ansiedad-barcelona';

const CONTENT = {
    es: {
        metaTitle: 'Psicólogo para la ansiedad en Barcelona: online y presencial',
        metaDescription:
            'Psicoanalista especialista en ansiedad, pánico y depresión para pacientes de Barcelona: terapia online por videollamada o presencial en Canet de Mar (R1). Desde 1993.',
        chip: 'Pacientes de Barcelona · Online y presencial',
        h1: 'Psicólogo para la ansiedad en Barcelona',
        h1Accent: 'sin listas de espera, online o presencial.',
        intro:
            'Si vives en Barcelona y la ansiedad, las crisis de pánico o la tristeza te están quitando la vida que quieres, puedes empezar esta misma semana. Soy Joan Ramon Soto, psicoanalista colegiado (COPC 3852) y llevo desde 1993 tratando la ansiedad desde su origen, no solo sus síntomas.',
        honest:
            'Mi consulta presencial está en Canet de Mar (Maresme), no en Barcelona. La mayoría de pacientes de Barcelona hacen la terapia online por videollamada; otros prefieren venir a Canet, a aproximadamente una hora en Rodalies R1.',
        optionsTitle: 'Dos formas de hacer la terapia desde Barcelona',
        options: [
            {
                icon: 'monitor',
                title: 'Online por videollamada',
                text: 'La misma sesión, la misma duración y la misma profundidad que en consulta, desde tu casa o tu despacho. Sin desplazamientos por la ciudad y con horarios de mañana y tarde.',
            },
            {
                icon: 'train',
                title: 'Presencial en Canet de Mar',
                text: 'Si prefieres el cara a cara, la consulta está en Ronda Doctor Anglès 74, junto a la estación de la R1. Muchos pacientes combinan sesiones presenciales y online.',
            },
        ],
        treatTitle: 'Qué trato',
        treat: [
            { label: 'Ansiedad generalizada y preocupación constante', href: '/ansiedad' },
            { label: 'Crisis de pánico y ataques de ansiedad', href: '/crisis-de-panico' },
            { label: 'Depresión y desánimo', href: '/depresion' },
            { label: 'Celos patológicos', href: '/celos' },
            { label: 'Ludopatía y adicción al juego', href: '/ludopatia' },
            { label: 'Terapia de pareja', href: '/servicios/terapia-de-pareja' },
        ],
        approachTitle: 'Un enfoque que busca la causa',
        approach:
            'Las técnicas de relajación ayudan a pasar el momento, pero la ansiedad suele volver si no se entiende de dónde viene. En la terapia psicoanalítica trabajamos qué está expresando el síntoma: qué conflicto, qué pérdida o qué situación de tu vida lo sostiene. Cuando eso se entiende, la ansiedad deja de hacer falta.',
        whyTitle: 'Por qué pacientes de Barcelona eligen esta consulta',
        why: [
            'Más de 30 años de experiencia clínica en ansiedad.',
            'Primera sesión sin esperas: normalmente en pocos días.',
            'Atención en castellano y en catalán.',
            'Terapia a distancia desde 1993, antes por teléfono y hoy por videollamada.',
            'Un único profesional durante todo el proceso, sin cambios de terapeuta.',
        ],
        readTitle: 'Para leer antes de empezar',
        reads: [
            { label: 'Ataque de ansiedad: qué hacer ahora', slug: ['ataque-de-ansiedad-que-hacer'] },
            { label: 'Terapia online para la ansiedad: cómo funciona y si es eficaz', slug: ['terapia-online-ansiedad'] },
            { label: 'Ataque de pánico: síntomas y qué hacer', slug: ['ataque-de-panico'] },
            { label: 'Causas de la ansiedad', slug: ['causas-de-la-ansiedad'] },
        ],
        faqTitle: 'Preguntas frecuentes',
        faq: [
            {
                q: '¿Tienes consulta en Barcelona?',
                a: 'No. La consulta presencial está en Canet de Mar (Maresme), a aproximadamente una hora de Barcelona en Rodalies R1. Desde Barcelona la mayoría de pacientes hacen la terapia online por videollamada.',
            },
            {
                q: '¿La terapia online para la ansiedad funciona igual que la presencial?',
                a: 'Para la ansiedad, la terapia por videollamada obtiene resultados comparables a la presencial. Lo decisivo es el vínculo con el terapeuta y la continuidad, no la sala.',
            },
            {
                q: '¿Cuánto cuesta una sesión?',
                a: 'La primera sesión cuesta 75 €. En ella valoramos tu caso y te explico cómo sería el tratamiento.',
            },
            {
                q: '¿Cuánto tarda en empezar?',
                a: 'Normalmente se puede tener la primera sesión en pocos días. Puedes escribir por WhatsApp o reservar directamente desde la web.',
            },
            {
                q: '¿Atiendes en catalán?',
                a: 'Sí. Atiendo indistintamente en castellano y en catalán, en la lengua en la que te expreses mejor.',
            },
        ],
        ctaTitle: '¿Empezamos?',
        ctaText: 'Escríbeme por WhatsApp y te respondo personalmente. Escribir no compromete a nada.',
        ctaWhatsapp: 'Escribir por WhatsApp',
        ctaBook: 'Reservar primera sesión · 75 €',
        waMessage: 'Hola, vivo en Barcelona y me gustaría información sobre la terapia para la ansiedad.',
        crumbHome: 'Inicio',
        crumbPage: 'Psicólogo ansiedad Barcelona',
        crisis: 'Si estás en crisis o tienes pensamientos de hacerte daño, llama al 112 o al 024 (atención a la conducta suicida, gratuita, 24 horas).',
    },
    ca: {
        metaTitle: "Psicòleg per a l'ansietat a Barcelona: en línia i presencial",
        metaDescription:
            "Psicoanalista especialista en ansietat, pànic i depressió per a pacients de Barcelona: teràpia en línia per videotrucada o presencial a Canet de Mar (R1). Des de 1993.",
        chip: 'Pacients de Barcelona · En línia i presencial',
        h1: "Psicòleg per a l'ansietat a Barcelona",
        h1Accent: "sense llistes d'espera, en línia o presencial.",
        intro:
            "Si vius a Barcelona i l'ansietat, les crisis de pànic o la tristesa t'estan prenent la vida que vols, pots començar aquesta mateixa setmana. Soc Joan Ramon Soto, psicoanalista col·legiat (COPC 3852) i des de 1993 tracto l'ansietat des del seu origen, no només els símptomes.",
        honest:
            "La meva consulta presencial és a Canet de Mar (Maresme), no a Barcelona. La majoria de pacients de Barcelona fan la teràpia en línia per videotrucada; d'altres prefereixen venir a Canet, a aproximadament una hora amb Rodalies R1.",
        optionsTitle: 'Dues maneres de fer la teràpia des de Barcelona',
        options: [
            {
                icon: 'monitor',
                title: 'En línia per videotrucada',
                text: "La mateixa sessió, la mateixa durada i la mateixa profunditat que a la consulta, des de casa o des de la feina. Sense desplaçaments per la ciutat i amb horaris de matí i tarda.",
            },
            {
                icon: 'train',
                title: 'Presencial a Canet de Mar',
                text: "Si prefereixes el cara a cara, la consulta és a la Ronda Doctor Anglès 74, al costat de l'estació de la R1. Molts pacients combinen sessions presencials i en línia.",
            },
        ],
        treatTitle: 'Què tracto',
        treat: [
            { label: "Ansietat generalitzada i preocupació constant", href: '/ansiedad' },
            { label: "Crisis de pànic i atacs d'ansietat", href: '/crisis-de-panico' },
            { label: 'Depressió i desànim', href: '/depresion' },
            { label: 'Gelosia patològica', href: '/celos' },
            { label: 'Ludopatia i addicció al joc', href: '/ludopatia' },
            { label: 'Teràpia de parella', href: '/servicios/terapia-de-pareja' },
        ],
        approachTitle: 'Un enfocament que busca la causa',
        approach:
            "Les tècniques de relaxació ajuden a passar el moment, però l'ansietat sol tornar si no s'entén d'on ve. En la teràpia psicoanalítica treballem què està expressant el símptoma: quin conflicte, quina pèrdua o quina situació de la teva vida el sosté. Quan això s'entén, l'ansietat deixa de fer falta.",
        whyTitle: 'Per què pacients de Barcelona trien aquesta consulta',
        why: [
            "Més de 30 anys d'experiència clínica en ansietat.",
            'Primera sessió sense esperes: normalment en pocs dies.',
            'Atenció en català i en castellà.',
            'Teràpia a distància des de 1993, abans per telèfon i avui per videotrucada.',
            'Un únic professional durant tot el procés, sense canvis de terapeuta.',
        ],
        readTitle: 'Per llegir abans de començar',
        reads: [
            { label: "Atac d'ansietat: què fer ara", slug: ['ataque-de-ansiedad-que-hacer'] },
            { label: "Teràpia en línia per a l'ansietat: com funciona", slug: ['terapia-online-ansiedad'] },
            { label: 'Atac de pànic: símptomes i què fer', slug: ['ataque-de-panico'] },
            { label: "Causes de l'ansietat", slug: ['causas-de-la-ansiedad'] },
        ],
        faqTitle: 'Preguntes freqüents',
        faq: [
            {
                q: 'Tens consulta a Barcelona?',
                a: "No. La consulta presencial és a Canet de Mar (Maresme), a aproximadament una hora de Barcelona amb Rodalies R1. Des de Barcelona la majoria de pacients fan la teràpia en línia per videotrucada.",
            },
            {
                q: "La teràpia en línia per a l'ansietat funciona igual que la presencial?",
                a: "Per a l'ansietat, la teràpia per videotrucada obté resultats comparables a la presencial. El que és decisiu és el vincle amb el terapeuta i la continuïtat, no la sala.",
            },
            {
                q: 'Quant costa una sessió?',
                a: 'La primera sessió costa 75 €. Hi valorem el teu cas i t\'explico com seria el tractament.',
            },
            {
                q: 'Quant es triga a començar?',
                a: 'Normalment es pot fer la primera sessió en pocs dies. Pots escriure per WhatsApp o reservar directament des del web.',
            },
            {
                q: 'Atens en català?',
                a: 'Sí. Atenc indistintament en català i en castellà, en la llengua en què t\'expressis millor.',
            },
        ],
        ctaTitle: 'Comencem?',
        ctaText: "Escriu-me per WhatsApp i et responc personalment. Escriure no compromet a res.",
        ctaWhatsapp: 'Escriure per WhatsApp',
        ctaBook: 'Reservar primera sessió · 75 €',
        waMessage: "Hola, visc a Barcelona i m'agradaria informació sobre la teràpia per a l'ansietat.",
        crumbHome: 'Inici',
        crumbPage: 'Psicòleg ansietat Barcelona',
        crisis: "Si estàs en crisi o tens pensaments de fer-te mal, truca al 112 o al 024 (atenció a la conducta suïcida, gratuïta, 24 hores).",
    },
};

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    const c = locale === 'ca' ? CONTENT.ca : CONTENT.es;
    return buildMetadata({
        title: c.metaTitle,
        description: c.metaDescription,
        path: PATH,
        keywords:
            locale === 'ca'
                ? ["psicòleg ansietat barcelona", "psicòleg en línia ansietat", "teràpia ansietat barcelona", "psicoanalista barcelona en línia", "tractament ansietat barcelona"]
                : ['psicólogo ansiedad barcelona', 'psicólogo especialista ansiedad barcelona', 'terapia ansiedad barcelona', 'tratamiento ansiedad barcelona', 'psicólogo online ansiedad', 'psicoanalista barcelona online'],
        lang: locale,
        catalan: true,
    });
}

export default async function PsicologoAnsiedadBarcelonaPage({ params }: Props) {
    const { locale } = await params;
    const ca = locale === 'ca';
    const c = ca ? CONTENT.ca : CONTENT.es;
    const pageUrl = `${SITE}/${ca ? 'ca' : 'es'}${PATH}`;

    const schema = [
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: c.h1,
            serviceType: 'Psychotherapy',
            description: c.metaDescription,
            url: pageUrl,
            provider: { '@id': SITE },
            areaServed: [
                { '@type': 'City', name: 'Barcelona' },
                { '@type': 'Country', name: 'España' },
            ],
            availableChannel: [
                { '@type': 'ServiceChannel', name: ca ? 'Videotrucada' : 'Videollamada', serviceUrl: `${SITE}/${ca ? 'ca' : 'es'}/terapia-online` },
                {
                    '@type': 'ServiceChannel',
                    name: ca ? 'Consulta presencial a Canet de Mar' : 'Consulta presencial en Canet de Mar',
                    serviceLocation: {
                        '@type': 'Place',
                        address: { '@type': 'PostalAddress', streetAddress: 'Ronda Dr. Anglès 74', addressLocality: 'Canet de Mar', postalCode: '08360', addressCountry: 'ES' },
                    },
                },
            ],
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: c.crumbHome, item: `${SITE}/${ca ? 'ca' : 'es'}` },
                { '@type': 'ListItem', position: 2, name: c.crumbPage, item: pageUrl },
            ],
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: c.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ];

    const h2 = 'font-serif text-3xl md:text-4xl font-bold text-navy mb-6';
    const p = 'text-navy/75 text-lg leading-relaxed';
    const link = 'text-navy font-medium hover:text-gold transition-colors underline decoration-gold/40 underline-offset-4';

    return (
        <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
            {schema.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <Navbar />
            <main>
                {/* Hero */}
                <section className="pt-36 md:pt-44 pb-16 md:pb-20 px-4 md:px-8">
                    <div className="container mx-auto max-w-4xl">
                        <span className="inline-block bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-6">
                            {c.chip}
                        </span>
                        <h1 className="font-serif text-4xl md:text-6xl font-bold text-navy leading-tight mb-8">
                            {c.h1}, <span className="text-gold italic font-normal">{c.h1Accent}</span>
                        </h1>
                        <p className={`${p} mb-5`}>{c.intro}</p>
                        <p className="text-navy/60 text-base leading-relaxed border-l-4 border-gold/40 pl-4 mb-10">{c.honest}</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href={whatsappUrl(c.waMessage)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                            >
                                <MessageCircle className="w-4 h-4" /> {c.ctaWhatsapp}
                            </a>
                            <a
                                href={bookingUrl('barcelona-hero')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 border border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl text-sm hover:border-gold transition-all"
                            >
                                {c.ctaBook} <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Modalidades */}
                <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className={h2}>{c.optionsTitle}</h2>
                        <div className="grid md:grid-cols-2 gap-5">
                            {c.options.map((o) => (
                                <div key={o.title} className="rounded-2xl border border-navy/10 p-6 md:p-8">
                                    {o.icon === 'monitor' ? <Monitor className="w-6 h-6 text-gold mb-4" /> : <Train className="w-6 h-6 text-gold mb-4" />}
                                    <h3 className="font-serif text-xl font-bold text-navy mb-2">
                                        {o.icon === 'monitor' ? (
                                            <Link href="/terapia-online" className="hover:text-gold transition-colors">{o.title}</Link>
                                        ) : (
                                            <Link href="/psicologo-maresme" className="hover:text-gold transition-colors">{o.title}</Link>
                                        )}
                                    </h3>
                                    <p className="text-navy/70 leading-relaxed">{o.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Qué trato + enfoque */}
                <section className="py-16 md:py-24 px-4 md:px-8">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className={h2}>{c.treatTitle}</h2>
                        <ul className="grid sm:grid-cols-2 gap-3 mb-14">
                            {c.treat.map((t) => (
                                <li key={t.href} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                                    <Link href={t.href as '/ansiedad'} className={link}>{t.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <h2 className={h2}>{c.approachTitle}</h2>
                        <p className={p}>{c.approach}</p>
                    </div>
                </section>

                {/* Por qué */}
                <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className={h2}>{c.whyTitle}</h2>
                        <ul className="space-y-3 mb-14">
                            {c.why.map((w) => (
                                <li key={w} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                                    <span className="text-navy/75 text-lg">{w}</span>
                                </li>
                            ))}
                        </ul>
                        <h2 className="font-serif text-2xl font-bold text-navy mb-4">{c.readTitle}</h2>
                        <ul className="space-y-2">
                            {c.reads.map((r) => (
                                <li key={r.slug[0]}>
                                    <Link href={{ pathname: '/blog/[...slug]', params: { slug: r.slug } }} className={link}>{r.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 md:py-24 px-4 md:px-8">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className={h2}>{c.faqTitle}</h2>
                        <div className="divide-y divide-navy/10 border-y border-navy/10">
                            {c.faq.map((f) => (
                                <details key={f.q} className="group py-5">
                                    <summary className="cursor-pointer list-none font-serif text-lg md:text-xl text-navy font-semibold flex justify-between gap-4">
                                        {f.q}
                                        <span className="text-gold group-open:rotate-45 transition-transform">+</span>
                                    </summary>
                                    <p className="mt-3 text-navy/70 leading-relaxed">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA final */}
                <section className="py-16 md:py-24 px-4 md:px-8 bg-navy">
                    <div className="container mx-auto max-w-3xl text-center">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">{c.ctaTitle}</h2>
                        <p className="text-white/70 text-lg mb-8">{c.ctaText}</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href={whatsappUrl(c.waMessage)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-xl text-sm hover:bg-gold/90 transition-all"
                            >
                                <MessageCircle className="w-4 h-4" /> {c.ctaWhatsapp}
                            </a>
                            <a
                                href={bookingUrl('barcelona-cierre')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:border-gold transition-all"
                            >
                                {c.ctaBook} <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                        <p className="text-white/50 text-xs mt-10 italic">{c.crisis}</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
