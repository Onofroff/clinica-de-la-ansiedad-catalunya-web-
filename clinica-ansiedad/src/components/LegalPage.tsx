import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export interface LegalSection {
    h2: string;
    p?: string[];
    items?: string[];
}

export default function LegalPage({ h1, updated, intro, sections }: { h1: string; updated: string; intro?: string; sections: LegalSection[] }) {
    return (
        <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
            <Navbar />
            <main className="pt-32 pb-20 px-4 md:px-8">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-3">{h1}</h1>
                    <p className="text-navy/50 text-sm mb-10">{updated}</p>
                    {intro && <p className="text-navy/70 leading-relaxed mb-10">{intro}</p>}
                    {sections.map((s, i) => (
                        <section key={i} className="mb-8">
                            <h2 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3">{s.h2}</h2>
                            {s.p?.map((p, j) => (
                                <p key={j} className="text-navy/70 leading-relaxed mb-3">{p}</p>
                            ))}
                            {s.items && (
                                <ul className="space-y-2">
                                    {s.items.map((item, j) => (
                                        <li key={j} className="text-navy/70 leading-relaxed pl-4 border-l-2 border-gold/40">{item}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

const BASE = 'https://www.clinicadelansiedad.com';

export function legalMetadata(path: string, locale: string, title: { es: string; ca: string }, description: { es: string; ca: string }) {
    const isCa = locale === 'ca';
    return {
        title: isCa ? title.ca : title.es,
        description: isCa ? description.ca : description.es,
        robots: 'index, follow',
        alternates: {
            canonical: `${BASE}/${isCa ? 'ca' : 'es'}${path}`,
            languages: {
                es: `${BASE}/es${path}`,
                ca: `${BASE}/ca${path}`,
                'x-default': `${BASE}/es${path}`,
            },
        },
    };
}
