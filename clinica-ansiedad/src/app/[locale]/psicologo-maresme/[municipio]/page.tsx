import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Train, Car, Lightbulb, ArrowRight, ArrowUpRight, MessageCircle, Star, Languages, Clock } from "lucide-react";
import { Link } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { bookingUrl, GOOGLE_REVIEWS, whatsappUrl } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { MUNICIPIOS, getMunicipio } from "@/content/municipios";

const BASE = "https://www.clinicadelansiedad.com";

type PageProps = { params: Promise<{ locale: string; municipio: string }> };

export function generateStaticParams() {
    return ["es", "ca"].flatMap((locale) => MUNICIPIOS.map((m) => ({ locale, municipio: m.slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps) {
    const { locale, municipio } = await params;
    const m = getMunicipio(municipio);
    if (!m) return {};
    const t = locale === "ca" ? m.ca : m.es;
    return buildMetadata({
        title: t.title,
        description: t.description,
        path: `/psicologo-maresme/${m.slug}`,
        keywords:
            locale === "ca"
                ? [`psicòleg ${m.name}`, `psicoanalista ${m.name}`, `teràpia ansietat ${m.name}`, "psicoanalista Maresme", "psicoanalista Canet de Mar"]
                : [`psicólogo ${m.name}`, `psicoanalista ${m.name}`, `terapia ansiedad ${m.name}`, "psicoanalista Maresme", "psicoanalista Canet de Mar"],
        image: `${BASE}/images/centreclinicansiedad.jpeg`,
        imageAlt: locale === "ca" ? "Consulta de la Clínica de l'Ansietat a Canet de Mar" : "Consulta de la Clínica de la Ansiedad en Canet de Mar",
        lang: locale,
        catalan: true,
    });
}

const UI = {
    es: {
        eyebrow: "Consulta presencial en Canet de Mar · Maresme",
        book: "Reservar cita · 75 €",
        whatsapp: "Escríbenos por WhatsApp",
        waMessage: (town: string) => `Hola, escribo desde ${town}. Me gustaría solicitar una valoración en la consulta de Canet de Mar.`,
        trust: ["Ronda Dr. Anglès 74, Canet de Mar", "Atención en catalán y castellano", "Espacio psicoanalítico desde 1993"],
        howTo: (town: string) => `Cómo llegar desde ${town}`,
        train: "En tren",
        car: "En coche",
        tip: "Consejo práctico",
        map: "Ver la consulta en Google Maps",
        reviews: `${GOOGLE_REVIEWS.rating} en Google · ${GOOGLE_REVIEWS.count} reseñas`,
        helpTitle: "En qué te podemos ayudar",
        help: [
            { title: "Ansiedad", href: "/ansiedad" as const },
            { title: "Crisis de pánico", href: "/crisis-de-panico" as const },
            { title: "Depresión", href: "/depresion" as const },
            { title: "Celos", href: "/celos" as const },
            { title: "Terapia de pareja", href: "/servicios/terapia-de-pareja" as const },
            { title: "Terapia online", href: "/terapia-online" as const },
        ],
        faqTitle: "Preguntas frecuentes",
        otherTitle: "Otros municipios del Maresme",
        back: "Psicoanalista en el Maresme",
        ctaTitle: "¿Hablamos?",
        ctaText: "La primera visita es una conversación clínica, sin tests ni cuestionarios. Puedes reservar directamente o escribirnos antes por WhatsApp.",
        home: "Inicio",
        mapAlt: "Consulta psicoanalítica en Canet de Mar, Maresme",
    },
    ca: {
        eyebrow: "Consulta presencial a Canet de Mar · Maresme",
        book: "Reservar cita · 75 €",
        whatsapp: "Escriu-nos per WhatsApp",
        waMessage: (town: string) => `Hola, us escric des de ${town}. M'agradaria demanar una valoració a la consulta de Canet de Mar.`,
        trust: ["Ronda Dr. Anglès 74, Canet de Mar", "Atenció en català i castellà", "Espai psicoanalític des de 1993"],
        howTo: (town: string) => `Com arribar-hi des de ${town}`,
        train: "En tren",
        car: "En cotxe",
        tip: "Consell pràctic",
        map: "Veure la consulta a Google Maps",
        reviews: `${GOOGLE_REVIEWS.rating} a Google · ${GOOGLE_REVIEWS.count} ressenyes`,
        helpTitle: "En què et podem ajudar",
        help: [
            { title: "Ansietat", href: "/ansiedad" as const },
            { title: "Crisis de pànic", href: "/crisis-de-panico" as const },
            { title: "Depressió", href: "/depresion" as const },
            { title: "Gelosia", href: "/celos" as const },
            { title: "Teràpia de parella", href: "/servicios/terapia-de-pareja" as const },
            { title: "Teràpia en línia", href: "/terapia-online" as const },
        ],
        faqTitle: "Preguntes freqüents",
        otherTitle: "Altres municipis del Maresme",
        back: "Psicoanalista al Maresme",
        ctaTitle: "En parlem?",
        ctaText: "La primera visita és una conversa clínica, sense tests ni qüestionaris. Pots reservar directament o escriure'ns abans per WhatsApp.",
        home: "Inici",
        mapAlt: "Consulta psicoanalítica a Canet de Mar, Maresme",
    },
};

export default async function MunicipioPage({ params }: PageProps) {
    const { locale, municipio } = await params;
    const m = getMunicipio(municipio);
    if (!m) notFound();
    const ca = locale === "ca";
    const t = ca ? m.ca : m.es;
    const ui = ca ? UI.ca : UI.es;
    const lang = ca ? "ca" : "es";
    const pageUrl = `${BASE}/${lang}/psicologo-maresme/${m.slug}`;

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: ui.home, item: `${BASE}/${lang}` },
                { "@type": "ListItem", position: 2, name: ui.back, item: `${BASE}/${lang}/psicologo-maresme` },
                { "@type": "ListItem", position: 3, name: m.name, item: pageUrl },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: t.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        },
        {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Clínica de la Ansiedad Catalunya",
            url: pageUrl,
            telephone: "+34613916079",
            hasMap: GOOGLE_REVIEWS.url,
            address: {
                "@type": "PostalAddress",
                streetAddress: "Ronda Doctor Anglès 74",
                addressLocality: "Canet de Mar",
                postalCode: "08360",
                addressRegion: "Barcelona",
                addressCountry: "ES",
            },
            areaServed: { "@type": "City", name: m.name },
            availableLanguage: ["ca", "es"],
        },
    ];

    const others = MUNICIPIOS.filter((o) => o.slug !== m.slug);

    return (
        <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />
            <main>
                {/* ===== HERO ===== */}
                <section className="relative overflow-hidden bg-cream pt-28 md:pt-32 pb-16 md:pb-24 px-4 md:px-8">
                    <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-[-15%] right-[-6%] w-[45%] h-[55%] bg-gold/12 rounded-full blur-[130px]" />
                        <div className="absolute bottom-[-20%] left-[-10%] w-[42%] h-[52%] bg-sage/60 rounded-full blur-[130px]" />
                    </div>
                    <div className="container mx-auto max-w-6xl relative z-10 min-w-0">
                        <nav aria-label="breadcrumb" className="mb-6 text-xs text-navy/50 flex flex-wrap items-center gap-1.5">
                            <Link href="/" className="hover:text-navy">{ui.home}</Link>
                            <span>/</span>
                            <Link href="/psicologo-maresme" className="hover:text-navy">{ui.back}</Link>
                            <span>/</span>
                            <span className="text-navy/70">{m.name}</span>
                        </nav>
                        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
                            <div className="min-w-0">
                                <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-navy text-[9px] sm:text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.22em] uppercase mb-7 shadow-sm">
                                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                                    <span className="min-w-0">{ui.eyebrow}</span>
                                </span>
                                <h1 className="font-serif text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl md:leading-[1.05] font-bold text-navy tracking-tight mb-6">
                                    {t.h1} <span className="text-gold italic font-light">{t.h1Accent}</span>
                                </h1>
                                <p className="text-lg md:text-xl text-navy/65 leading-relaxed max-w-xl mb-8">{t.lead}</p>
                                <div className="flex flex-col sm:flex-row gap-3.5 mb-8">
                                    <a href={bookingUrl(`hero-municipio-${m.slug}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest shadow-xl shadow-navy/20 hover:bg-navy/90 transition-colors">
                                        {ui.book}
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={whatsappUrl(ui.waMessage(m.name))} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-navy/20 text-navy hover:bg-navy/5 font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest transition-colors">
                                        <MessageCircle className="w-4 h-4" />
                                        {ui.whatsapp}
                                    </a>
                                </div>
                                <ul className="flex flex-col gap-2.5">
                                    {[MapPin, Languages, Clock].map((Icon, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-navy/70 text-sm">
                                            <Icon className="w-4 h-4 text-gold shrink-0" />
                                            {ui.trust[i]}
                                        </li>
                                    ))}
                                    <li>
                                        <a href={GOOGLE_REVIEWS.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-navy/70 text-sm hover:text-navy">
                                            <Star className="w-4 h-4 text-gold fill-gold shrink-0" />
                                            {ui.reviews}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative min-w-0">
                                <div className="relative max-w-lg mx-auto lg:mx-0 lg:ml-auto rounded-[2rem] overflow-hidden border-4 border-white shadow-[0_30px_80px_-25px_rgba(26,58,72,0.45)] aspect-[4/3.4]">
                                    <Image src="/images/centreclinicansiedad.jpeg" alt={ui.mapAlt} fill priority sizes="(max-width:1024px) 100vw, 520px" className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== TEXTO PROPIO + CÓMO LLEGAR ===== */}
                <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                    <div className="container mx-auto max-w-6xl grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
                        <div className="min-w-0">
                            {t.body.map((p, i) => (
                                <p key={i} className="text-navy/75 text-lg leading-relaxed mb-6">{p}</p>
                            ))}
                        </div>
                        <div className="bg-cream rounded-[1.75rem] p-7 md:p-9 border border-navy/5 min-w-0">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-6 leading-tight">{ui.howTo(m.name)}</h2>
                            <dl className="space-y-5">
                                {[
                                    { Icon: Train, label: ui.train, text: t.train },
                                    { Icon: Car, label: ui.car, text: t.car },
                                    { Icon: Lightbulb, label: ui.tip, text: t.tip },
                                ].map(({ Icon, label, text }) => (
                                    <div key={label} className="flex gap-4">
                                        <span className="grid place-items-center w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 shrink-0">
                                            <Icon className="w-5 h-5 text-gold" />
                                        </span>
                                        <div>
                                            <dt className="text-navy/45 text-[10px] font-bold uppercase tracking-widest mb-1">{label}</dt>
                                            <dd className="text-navy/80 leading-relaxed">{text}</dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                            <a href={GOOGLE_REVIEWS.url} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 bg-navy text-white font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-widest hover:bg-navy/90 transition-colors">
                                {ui.map}
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* ===== EN QUÉ AYUDAMOS ===== */}
                <section className="py-16 md:py-20 px-4 md:px-8 bg-cream">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">{ui.helpTitle}</h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {ui.help.map((h) => (
                                <li key={h.href}>
                                    <Link href={h.href} className="flex items-center justify-between gap-3 bg-white rounded-2xl border border-navy/5 px-5 py-4 text-navy font-semibold hover:border-gold/50 transition-colors">
                                        {h.title}
                                        <ArrowRight className="w-4 h-4 text-gold shrink-0" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ===== FAQ ===== */}
                <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">{ui.faqTitle}</h2>
                        <div className="divide-y divide-navy/10 border-y border-navy/10">
                            {t.faq.map((f) => (
                                <details key={f.q} className="group py-5">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy text-lg">
                                        {f.q}
                                        <span className="text-gold text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                                    </summary>
                                    <p className="mt-3 text-navy/70 leading-relaxed">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== CTA ===== */}
                <section className="py-16 md:py-20 px-4 md:px-8 bg-navy text-white">
                    <div className="container mx-auto max-w-3xl text-center">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">{ui.ctaTitle}</h2>
                        <p className="text-white/75 text-lg leading-relaxed mb-8">{ui.ctaText}</p>
                        <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
                            <a href={bookingUrl(`cta-municipio-${m.slug}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-navy font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-cream transition-colors">
                                {ui.book}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href={whatsappUrl(ui.waMessage(m.name))} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/25 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest transition-colors">
                                <MessageCircle className="w-4 h-4" />
                                {ui.whatsapp}
                            </a>
                        </div>
                    </div>
                </section>

                {/* ===== OTROS MUNICIPIOS ===== */}
                <section className="py-12 px-4 md:px-8 bg-cream">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="font-serif text-xl font-bold text-navy mb-4">{ui.otherTitle}</h2>
                        <ul className="flex flex-wrap gap-2">
                            {others.map((o) => (
                                <li key={o.slug}>
                                    <Link
                                        href={{ pathname: "/psicologo-maresme/[municipio]", params: { municipio: o.slug } }}
                                        className="inline-flex rounded-full border border-navy/10 bg-white px-4 py-2 text-sm text-navy/80 hover:border-gold/50 hover:text-navy transition-colors"
                                    >
                                        {o.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
