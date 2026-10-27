"use client";
import { useLocale } from "next-intl";

import { motion } from 'framer-motion';

export default function ServicesHero() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
    return (
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#FDFBF7]">
            {/* Subtle Dynamic Immersive Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold/15 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-20%] w-[50%] h-[50%] bg-[#164E63]/10 rounded-full blur-[150px] mix-blend-multiply" />
                <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#164E63 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px', opacity: 0.04 }} />
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <span className="bg-white/60 backdrop-blur-md border border-navy/10 text-navy text-xs font-bold px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-sm mb-8 inline-block">
                        {t("Especialidades Clínicas", "Especialitats clíniques")}
                    </span>
                    
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-navy tracking-tight leading-[1.1] mb-10">
                        {t("Tratamiento de la Ansiedad, Depresión y TOC", "Tractament de l'ansietat, la depressió i el TOC")} <br />
                        <span className="italic text-gold font-serif">{t("en Canet de Mar", "a Canet de Mar")}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-navy/70 font-light leading-relaxed max-w-4xl text-balance mb-12">
                        {t("En Clínica de la Ansiedad Catalunya estamos especializados en el tratamiento del trastorno de ansiedad generalizada, crisis de pánico, depresión, trastorno obsesivo compulsivo, fobia social y agorafobia.", "A la Clínica de la Ansiedad Catalunya estem especialitzats en el tractament del trastorn d'ansietat generalitzada, les crisis de pànic, la depressió, el trastorn obsessiu compulsiu, la fòbia social i l'agorafòbia.")} 
                        <strong> {t("Combinamos psicoterapia psicoanalítica y métodos basados en la evidencia.", "Combinem psicoteràpia psicoanalítica i mètodes basats en l'evidència.")}</strong>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl w-full">
                        <div className="bg-white/50 backdrop-blur-sm border border-navy/5 rounded-[32px] p-8 shadow-glass-light hover:shadow-glass hover:-translate-y-1 transition-all duration-500">
                            <h3 className="text-navy font-bold font-serif text-2xl mb-4 italic">{t("El Origen del Síntoma", "L'origen del símptoma")}</h3>
                            <p className="text-navy/70 leading-relaxed font-light">
                                {t("Desde hace más de 30 años acompañamos a personas que buscan comprender los síntomas de ansiedad, sus causas y cómo se cura desde la raíz. Ofrecemos consulta psicoanalítica presencial en Canet de Mar (Maresme), así como terapia online para toda Catalunya.", "Fa més de 30 anys que acompanyem persones que volen comprendre els símptomes de l'ansietat, les seves causes i com es cura des de l'arrel. Oferim consulta psicoanalítica presencial a Canet de Mar (Maresme) i teràpia en línia per a tot Catalunya.")}
                            </p>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm border border-navy/5 rounded-[32px] p-8 shadow-glass-light hover:shadow-glass hover:-translate-y-1 transition-all duration-500">
                            <h3 className="text-navy font-bold font-serif text-2xl mb-4 italic">{t("Cambio Estructural", "Canvi estructural")}</h3>
                            <p className="text-navy/70 leading-relaxed font-light">
                                {t("Diseñamos intervenciones personalizadas que no solo alivian los síntomas físicos de la ansiedad — palpitaciones, hiperventilación, insomnio — sino que generan cambios estructurales profundos y duraderos.", "Dissenyem intervencions personalitzades que no només alleugen els símptomes físics de l'ansietat —palpitacions, hiperventilació, insomni—, sinó que busquen canvis estructurals profunds i duradors.")}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
