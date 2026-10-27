"use client";
import { useLocale } from "next-intl";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-cream">
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#164E63 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <motion.div
                        className="lg:col-span-12 xl:col-span-7 flex flex-col"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-gold font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">
                            {t("Fundador & Director", "Fundador i director")}
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold text-navy mb-8 tracking-tight">
                            {t("¿Quién", "Qui")} <span className="italic text-gold font-medium">{t("soy?", "soc?")}</span>
                        </h1>
                        <div className="w-20 h-1 bg-gold mb-10" />

                        <p className="text-xl md:text-2xl text-navy font-medium leading-relaxed mb-8 text-balance">
                            {t("Soy Joan Ramon Soto Cifuentes, psicoanalista / psicoterapeuta en Canet de Mar (Maresme), con atención online, especialista en ansiedad y fundador de la Clínica de la Ansiedad Catalunya, con más de 30 años de experiencia clínica.", "Soc Joan Ramon Soto Cifuentes, psicoanalista / psicoterapeuta a Canet de Mar (Maresme), amb atenció en línia, especialista en ansietat i fundador de la Clínica de la Ansiedad Catalunya, amb més de 30 anys d'experiència clínica.")}
                        </p>
                        <p className="text-lg text-text/80 leading-relaxed max-w-2xl text-balance mb-8">
                            {t("Desde mi consulta en Canet de Mar (comarca del Maresme, Barcelona) y mediante terapia online, mi trabajo se centra en el abordaje clínico riguroso para descifrar las causas profundas del sufrimiento emocional. No buscamos solo paliar el síntoma, sino resolver el conflicto que lo genera. Atiendo pacientes de toda Catalunya y España.", "Des de la meva consulta de Canet de Mar (Maresme) i mitjançant la teràpia en línia, la meva feina se centra en un abordatge clínic rigorós per desxifrar les causes profundes del patiment emocional. No busquem només alleujar el símptoma, sinó resoldre el conflicte que el genera. Atenc pacients de tot Catalunya i d'Espanya.")}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden lg:block lg:col-span-12 xl:col-span-5 relative"
                    >
                        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(22,78,99,0.2)] border border-white/20">
                            <Image
                                src="/images/joanramonsotoimagenweb.webp"
                                alt="Joan Ramon Soto"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-10 -left-10 w-56 h-56 bg-navy/5 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
