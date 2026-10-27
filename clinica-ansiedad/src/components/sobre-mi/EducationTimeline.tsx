"use client";
import { useLocale } from "next-intl";

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';


export default function EducationTimeline() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  const education = [
      { year: "2020", title: t("Postgrado En Duelo y Acompañamiento", "Postgrau en dol i acompanyament") },
      { year: "2012", title: "Community Manager (U.O.C)" },
      { year: "2010", title: t("Máster en Hipno-Psicoterapeuta", "Màster en hipnopsicoteràpia") },
      { year: "2010", title: t("Certificado American Association of Professional Hypnotherapist", "Certificat American Association of Professional Hypnotherapists") },
      { year: "2010", title: t("Postgrado en Coaching Personal Profesional (Centro Mitikum)", "Postgrau en coaching personal professional (Centre Mitikum)") },
      { year: "2006", title: t("P.N.L. Aplicada a las ventas", "PNL aplicada a les vendes") },
      { year: "2001", title: t("Dr. Psicología Psicoanalítica (C.I.D)", "Dr. en Psicologia Psicoanalítica (C.I.D)") },
      { year: "2001", title: t("Psicoanalista Directo", "Psicoanalista directe") },
      { year: "2000", title: t("Seminarios Sigmund Freud & Jacques Lacan (Ibiza)", "Seminaris Sigmund Freud i Jacques Lacan (Eivissa)") },
      { year: "1999", title: "Psicoterapeuta (C.I.D)" },
      { year: "1996", title: t("Training in Ericksonian Hypnotherapy con Jeffrey k Zeig", "Training in Ericksonian Hypnotherapy amb Jeffrey K. Zeig") },
      { year: "1995", title: t("Máster en Programación Neuro Lingüística", "Màster en programació neurolingüística") },
      { year: "1993", title: t("Máster en Psicología Analógica e Hipnosis Dinámica", "Màster en psicologia analògica i hipnosi dinàmica") },
      { year: "1991", title: t("Master en Psicoterapia Integral por el Estudio de Bioinformación", "Màster en psicoteràpia integral per l'Estudi de Bioinformació") },
  ].reverse();
    return (
        <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#164E63 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 border border-navy/10 mb-6"
                    >
                        <GraduationCap className="w-4 h-4 text-gold" />
                        <span className="text-[10px] font-black tracking-[0.3em] text-navy uppercase">{t("Formación Continuada", "Formació continuada")}</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-5xl md:text-7xl font-bold text-navy mb-8"
                    >
                        {t("Trayectoria", "Trajectòria")} <span className="text-gold italic font-light">{t("Académica", "acadèmica")}</span>
                    </motion.h2>
                    <p className="text-xl text-navy/50 font-light leading-relaxed max-w-2xl mx-auto">
                        {t("Más de 30 años de especialización ininterrumpida, combinando el rigor del psicoanálisis con los últimos avances en psicología clínica.", "Més de 30 anys d'especialització ininterrompuda, combinant el rigor de la psicoanàlisi amb els darrers avenços en psicologia clínica.")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: (index % 4) * 0.1 }}
                            className="group"
                        >
                            <div className="h-full bg-white border border-navy/5 p-8 rounded-[2rem] hover:shadow-[0_20px_50px_-15px_rgba(22,78,99,0.08)] hover:border-gold/20 transition-all duration-500 flex items-center gap-6 relative overflow-hidden">
                                {/* Year Badge */}
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 rounded-2xl bg-cream flex flex-col items-center justify-center p-2 border border-navy/5 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-500">
                                        <Award className="w-4 h-4 text-gold/40 mb-1 group-hover:text-gold transition-colors" />
                                        <span className="font-serif font-black text-navy text-lg leading-none">{edu.year}</span>
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-lg md:text-xl font-serif font-bold text-navy leading-tight group-hover:text-gold transition-colors duration-300">
                                        {edu.title}
                                    </h3>
                                </div>
                                
                                {/* Subtle decorative dot */}
                                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-navy/5 group-hover:bg-gold transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
