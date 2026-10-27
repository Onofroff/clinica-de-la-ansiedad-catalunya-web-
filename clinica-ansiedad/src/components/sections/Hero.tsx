"use client";
import { motion, type Variants } from "framer-motion";
import { Button } from "@heroui/react";
import { Star, ArrowRight, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { bookingUrl, whatsappUrl, GOOGLE_REVIEWS } from "@/lib/constants";

const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

export default function Hero() {
    const t = useTranslations('hero');

    return (
        <section className="relative min-h-[100dvh] flex items-center bg-cream overflow-hidden pt-24 pb-16">
            {/* Background Texture / Subtle Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#164E63 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* Left Content Area (7 columns) */}
                {/* initial={false}: el hero se sirve ya visible. Con initial="hidden" el HTML
                    llegaba con opacity:0 y quedaba en blanco hasta que hidrataba el JS. */}
                <motion.div
                    className="lg:col-span-12 xl:col-span-7 flex flex-col"
                    variants={staggerContainer}
                    initial={false}
                    animate="visible"
                >
                    <motion.div variants={fadeUpVariant} className="mb-6 flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-navy/10 bg-white text-navy font-bold text-[10px] tracking-[0.15em] uppercase shadow-sm">
                            <ShieldCheck className="w-3 h-3 text-gold" />
                            {t('eyebrow_1')}
                        </span>
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-gold/20 bg-gold/5 text-navy font-bold text-[10px] tracking-[0.15em] uppercase">
                            {t('eyebrow_2')}
                        </span>
                    </motion.div>

                    {/* Escala contenida: el H1 local es largo (9 palabras). A text-8xl
                        ocupaba 4 líneas y empujaba los CTAs fuera del pliegue. */}
                    <motion.h1
                        variants={fadeUpVariant}
                        className="text-navy font-serif leading-[1.1] text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight"
                    >
                        {t.rich('h1', {
                            accent: (chunks) => <span className="text-gold italic font-medium">{chunks}</span>
                        })}
                        <span className="font-light italic text-gold text-2xl md:text-3xl mt-3 block">{t('h1_sub')}</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUpVariant}
                        className="text-text/80 text-base md:text-lg leading-relaxed max-w-xl mb-7 font-light"
                    >
                        {t.rich('description', {
                            strong_p: (chunks) => <strong className="font-bold text-navy">{chunks}</strong>
                        })}
                    </motion.p>

                    {/* Jerarquía de CTAs: primero el canal sin coste (WhatsApp), después la
                        reserva con el precio a la vista. Antes el primario prometía una
                        "valoración sin compromiso" y llevaba directo a una pasarela de
                        pago de 75 €, que es la fuga de conversión más grande de la home. */}
                    <motion.div
                        variants={fadeUpVariant}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-4"
                    >
                        <Button
                            as="a"
                            href={whatsappUrl(t('wa_message'))}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-navy hover:bg-navy/95 text-white font-semibold px-9 py-7 rounded-xl text-base shadow-2xl shadow-navy/20 transition-all duration-300 group"
                        >
                            <MessageCircle className="mr-2 w-5 h-5 shrink-0" />
                            {t('cta_main')}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            as="a"
                            href={bookingUrl('hero-home')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-white border border-navy/15 text-navy hover:bg-navy/5 font-bold px-8 py-7 rounded-xl text-base transition-all"
                        >
                            {t('cta_secondary')}
                        </Button>
                    </motion.div>

                    <motion.p variants={fadeUpVariant} className="text-navy/50 text-sm mb-12">
                        {t('cta_note')}{' '}
                        <Link href="/enfoque" className="text-navy/70 underline underline-offset-2 hover:text-gold transition-colors">
                            {t('cta_method')}
                        </Link>
                    </motion.p>

                    {/* Trust Indicators */}
                    <motion.div
                        variants={fadeUpVariant}
                        className="flex flex-wrap items-center gap-x-10 gap-y-5 pt-7 border-t border-navy/10"
                    >
                        {/* Prueba social real y verificable. Antes había tres caras de stock
                            (i.pravatar.cc) con alt="Paciente": además de ser un tell, fingía
                            pacientes cuya cara nunca se mostraría por confidencialidad. */}
                        <a
                            href={GOOGLE_REVIEWS.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                                <Star className="w-6 h-6 fill-gold text-gold" />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <p className="font-serif text-3xl font-bold text-navy leading-none">{GOOGLE_REVIEWS.rating}</p>
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="w-3.5 h-3.5 fill-gold text-gold" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-navy/70 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 group-hover:text-gold transition-colors">
                                    {t('reviews_label', { count: GOOGLE_REVIEWS.count })}
                                </p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center">
                                <Clock className="w-6 h-6 text-navy" />
                            </div>
                            <div>
                                <p className="font-serif text-3xl font-bold text-navy leading-none">30+</p>
                                <p className="text-navy/70 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">{t('years_label')}</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Visual Area (5 columns) */}
                <motion.div
                    initial={false}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="hidden xl:block xl:col-span-5 relative"
                >
                    <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(22,78,99,0.2)]">
                        <Image
                            src="/images/joanramonsotoimagenweb.webp"
                            alt="Joan Ramon Soto"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Elegant Glass Card Overlay */}
                        <div className="absolute inset-x-6 bottom-6 p-8 bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
                            <div className="flex items-start gap-4 mb-3">
                                <div className="w-1 h-12 bg-gold flex-shrink-0" />
                                <p className="font-serif text-xl italic font-light leading-snug text-navy">
                                    {t('quote')}
                                </p>
                            </div>
                            <div className="pl-5">
                                <p className="font-bold tracking-[0.2em] uppercase text-xs text-navy">Joan Ramon Soto</p>
                                <p className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase mt-1">{t('role')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Detail Image - Clinic Interior */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -left-20 top-20 w-56 h-72 rounded-2xl overflow-hidden border-8 border-cream shadow-2xl hidden 2xl:block"
                    >
                        <Image
                            src="/images/clinica-ansiedad-catalunya-espacio.jpeg"
                            alt={t('image_alt')}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
