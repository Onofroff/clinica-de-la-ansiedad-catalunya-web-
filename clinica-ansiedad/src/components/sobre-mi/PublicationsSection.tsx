"use client";
import { useLocale } from "next-intl";

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Newspaper, Quote, ArrowRight } from 'lucide-react';


export default function PublicationsSection() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  // Solo apariciones verificadas (10/11/2026), con enlace cuando existe.
  // Pendiente de confirmar con Joan Ramon antes de añadir: HuffPost, Vogue, Grupo Cero.
  const MP_PROFILE = "https://www.mundopsicologos.com/procard/joan-ramon-soto-cifuentes?therapytype=0";
  const publications: { title: string; year: string; source: string; category: string; url?: string }[] = [
      {
          title: t("Los famosos y temidos gatillazos: ¿por qué se producen y cómo evitarlos?", "Els famosos i temuts gatillassos: per què es produeixen i com evitar-los?"),
          year: "2020",
          source: "MundoPsicólogos",
          category: t("Artículo", "Article"),
          url: "https://www.mundopsicologos.com/articulos/los-famosos-y-temidos-gatillazos-por-que-se-producen-y-como-se-pueden-evitar",
      },
      {
          title: t("Ejercicios de alimentación consciente", "Exercicis d'alimentació conscient"),
          year: "2020",
          source: "MundoPsicólogos",
          category: t("Artículo", "Article"),
          url: "https://www.mundopsicologos.com/articulos/ejercicios-de-alimentacion-consciente",
      },
      {
          title: t("¿Cómo ser madre soltera? 11 consejos psicológicos", "Com ser mare soltera? 11 consells psicològics"),
          year: "2020",
          source: "MundoPsicólogos",
          category: t("Artículo", "Article"),
          url: "https://www.mundopsicologos.com/articulos/madre-soltera-la-nueva-realidad",
      },
      {
          title: t("Fibrosis quística: cómo afecta psicológicamente", "Fibrosi quística: com afecta psicològicament"),
          year: "2020",
          source: "MundoPsicólogos",
          category: t("Artículo", "Article"),
          url: "https://www.mundopsicologos.com/articulos/fibrosis-quistica-como-afecta-psicologicamente",
      },
      {
          title: t("Sexo, coronavirus y relaciones en la desescalada", "Sexe, coronavirus i relacions en la desescalada"),
          year: "2020",
          source: "Código Único",
          category: t("Entrevista en prensa", "Entrevista a la premsa"),
          url: "https://www.codigounico.com/sexo-relaciones/sexo-coronavirus-relaciones-desescalada-desconocidos-proteccion.html",
      },
      {
          title: t("Impacto psicológico del confinamiento en los jóvenes", "Impacte psicològic del confinament en els joves"),
          year: "2020",
          source: "Burgos Noticias",
          category: t("Cita en prensa", "Cita a la premsa"),
          url: "https://burgosnoticias.com/noticia/impacto-psicologico-del-confinamiento-en-los-centennials-29896",
      },
      {
          title: t("¿Por qué tenemos miedo al coronavirus? Claves para manejarlo", "Per què tenim por del coronavirus? Claus per gestionar-la"),
          year: "2020",
          source: "MundoPsicólogos",
          category: t("Artículo", "Article"),
          url: MP_PROFILE,
      },
      {
          title: t("Entrevista con Sílvia Cóppulo", "Entrevista amb Sílvia Cóppulo"),
          year: "",
          source: "Catalunya Ràdio",
          category: t("Radio", "Ràdio"),
      },
  ];
    return (
        <section className="py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
            {/* Artistic Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -z-0 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sage/5 rounded-full blur-[100px] -z-0 -translate-x-1/4 translate-y-1/4" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
                        >
                            <BookOpen className="w-4 h-4 text-gold-light" />
                            <span className="text-[10px] font-black tracking-[0.3em] text-sage uppercase">{t("Divulgación Clínica", "Divulgació clínica")}</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter"
                        >
                            {t("Artículos y", "Articles i")} <span className="text-gold-light italic font-light">{t("medios", "mitjans")}</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:pb-4"
                    >
                        <p className="text-white/50 text-xl font-light leading-relaxed max-w-md border-l border-gold/30 pl-8">
                            {t("Artículos de divulgación y colaboraciones en prensa y radio, aportando la perspectiva del psicoanálisis a los conflictos de la vida contemporánea.", "Articles de divulgació i col·laboracions a la premsa i la ràdio, que aporten la perspectiva de la psicoanàlisi als conflictes de la vida contemporània.")}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {publications.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a href={item.url} target={item.url ? "_blank" : undefined} rel={item.url ? "noopener noreferrer" : undefined} className="block h-full">
                            <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2rem] hover:bg-white/[0.08] hover:border-gold/30 transition-all duration-500 relative flex flex-col">
                                <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-30 transition-opacity">
                                    <Quote className="w-10 h-10 text-gold-light" />
                                </div>
                                
                                <div className="mb-8">
                                    <span className="text-gold-light text-[10px] font-black tracking-[0.2em] uppercase bg-gold/15 px-3 py-1.5 rounded-full border border-gold-light/25">
                                        {item.source}
                                    </span>
                                </div>

                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6 leading-tight group-hover:text-gold transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <div className="mt-auto pt-8 border-t border-white/10 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">{item.category}</span>
                                        <span className="text-white/20 text-xs font-serif italic mt-1">{item.year}</span>
                                    </div>
                                    {item.url && (
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                    )}
                                </div>
                            </div>
                            </a>
                        </motion.div>
                    ))}
                    
                    {/* Final CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="lg:col-span-1"
                    >
                        <a href={MP_PROFILE} target="_blank" rel="noopener noreferrer" className="block h-full">
                        <div className="h-full bg-gold border border-gold p-10 rounded-[2rem] flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-gold/90 transition-all shadow-xl shadow-gold/10">
                            <Newspaper className="w-12 h-12 text-navy mb-6" />
                            <h3 className="font-serif text-3xl font-bold text-navy mb-4">{t("Más artículos", "Més articles")}</h3>
                            <p className="text-navy/70 text-sm font-medium mb-8">{t("Todos mis artículos y respuestas en MundoPsicólogos.", "Tots els meus articles i respostes a MundoPsicólogos.")}</p>
                            <div className="flex items-center gap-2 text-navy font-black text-[10px] tracking-widest uppercase border-b-2 border-navy/20 pb-1 group-hover:border-navy transition-all">
                                {t("Ver todo", "Veure-ho tot")} <ArrowRight className="w-3 h-3" />
                            </div>
                        </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
