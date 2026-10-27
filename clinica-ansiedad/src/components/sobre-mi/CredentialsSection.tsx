"use client";
import { useLocale } from "next-intl";

import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle2 } from 'lucide-react';


export default function CredentialsSection() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  const credentials = [
      {
          icon: <Award className="w-8 h-8 text-gold" />,
          title: t("Doctorado en Psicología Psicoanalítica", "Doctorat en Psicologia Psicoanalítica"),
          org: t("Centro Internacional de Psicología (2001)", "Centre Internacional de Psicologia (2001)"),
          detail: t("Especialización en estructuras clínicas complejas.", "Especialització en estructures clíniques complexes.")
      },
      {
          icon: <Shield className="w-8 h-8 text-gold" />,
          title: t("Psicoanalista Directo", "Psicoanalista directe"),
          org: t("The Direct Psychoanalytic Institute (EE.UU.)", "The Direct Psychoanalytic Institute (EUA)"),
          detail: t("Certificación internacional en metodología de intervención directa.", "Certificació internacional en metodologia d'intervenció directa.")
      },
      {
          icon: <CheckCircle2 className="w-8 h-8 text-gold" />,
          title: t("Fundador del Espacio EPDO", "Fundador de l'Espai EPDO"),
          org: t("Espacio Psicoanálisis Directo Online (2022)", "Espacio Psicoanálisis Directo Online (2022)"),
          detail: t("Liderazgo en la digitalización de la clínica analítica de alta fidelidad.", "Lideratge en la digitalització de la clínica analítica d'alta fidelitat.")
      }
  ];
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gold font-black text-[10px] tracking-[0.3em] uppercase mb-4 block"
                    >
                        {t("Autorización & Rigor", "Acreditació i rigor")}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-6xl text-navy font-bold mb-6"
                    >
                        {t("Licencias y", "Títols i")} <span className="text-gold italic font-light">{t("Certificados", "certificats")}</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-20 h-1 bg-gold mx-auto mb-8"
                    />
                    <p className="text-lg text-navy/50 max-w-2xl mx-auto font-light leading-relaxed">
                        {t("Avales profesionales que fundamentan una práctica clínica de más de tres décadas.", "Avals professionals que fonamenten una pràctica clínica de més de tres dècades.")}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {credentials.map((cred, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full bg-white border border-navy/5 p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_60px_-15px_rgba(22,78,99,0.1)] hover:border-gold/30 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden">
                                {/* Invisible glow on hover */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="w-20 h-20 rounded-3xl bg-cream flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors duration-500">
                                    <div className="group-hover:scale-110 transition-transform duration-500">
                                        {cred.icon}
                                    </div>
                                </div>
                                <h3 className="font-serif text-2xl text-navy font-bold mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
                                    {cred.title}
                                </h3>
                                <p className="text-sm text-navy/40 font-bold uppercase tracking-widest mb-4">
                                    {cred.org}
                                </p>
                                <p className="text-navy/60 text-sm italic font-light">
                                    {cred.detail}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
