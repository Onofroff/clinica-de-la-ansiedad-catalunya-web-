"use client";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Globe, ShieldQuestion, Handshake, MapPin } from "lucide-react";
import { GOOGLE_REVIEWS } from "@/lib/constants";



export default function WhyUsSection() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  const stats = [
      { num: "1993", label: t("Año de fundación", "Any de fundació") },
      { num: "+30", label: t("Años de trayectoria", "Anys de trajectòria") },
      { num: "+1K", label: t("Pacientes atendidos", "Pacients atesos") },
      { num: `${GOOGLE_REVIEWS.rating}★`, label: t(`${GOOGLE_REVIEWS.count} reseñas Google`, `${GOOGLE_REVIEWS.count} ressenyes a Google`) },
  ];
  const differentiators = [
      {
          icon: <ShieldQuestion className="w-6 h-6" />,
          title: t("Resolvemos causas, no síntomas", "Resolem causes, no símptomes"),
          desc: t("Vamos a la raíz psicológica del problema. Sin parches temporales.", "Anem a l'arrel psicològica del problema. Sense pegats temporals."),
      },
      {
          icon: <Globe className="w-6 h-6" />,
          title: t("Pioneros en terapia a distancia", "Pioners en teràpia a distància"),
          desc: t("Más de 30 años atendiendo a distancia: primero por teléfono, hoy por videollamada.", "Més de 30 anys atenent a distància: primer per telèfon, avui per videotrucada."),
      },
      {
          icon: <Handshake className="w-6 h-6" />,
          title: t("Proceso humano y personalizado", "Procés humà i personalitzat"),
          desc: t("Acompañamiento directo por Joan Ramon Soto. Ético, riguroso y continuo.", "Acompanyament directe de Joan Ramon Soto. Ètic, rigorós i continuat."),
      },
      {
          icon: <MapPin className="w-6 h-6" />,
          title: t("Presencia en Maresme y toda España", "Presència al Maresme i a tot Espanya"),
          desc: t("Consulta presencial en Canet de Mar (Barcelona) y terapia online para toda Catalunya y España.", "Consulta presencial a Canet de Mar (Barcelona) i teràpia en línia per a tot Catalunya i Espanya."),
      },
  ];
    return (
        <section className="bg-cream py-28 px-6 border-b border-navy/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left — Big stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-[1px] bg-gold" />
                            <span className="text-gold text-sm tracking-widest uppercase font-bold">{t("Por qué elegirnos", "Per què escollir-nos")}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6 leading-tight">
                            {t("Treinta años de", "Trenta anys d'")}<br />
                            <span className="text-gold italic font-medium">{t("historia", "història")}</span>
                        </h2>
                        <p className="text-navy/70 text-lg leading-relaxed mb-12 font-light">
                            {t("Una clínica especializada en ansiedad desde 1993, con consulta en Canet de Mar y pacientes de toda Catalunya y España.", "Una clínica especialitzada en ansietat des de 1993, amb consulta a Canet de Mar i pacients de tot Catalunya i Espanya.")}
                        </p>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.num}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className="bg-white rounded-2xl px-6 py-5 border border-navy/5 shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <p className="font-serif text-3xl md:text-4xl font-bold text-navy leading-none mb-1">{stat.num}</p>
                                    <p className="text-navy/50 text-[10px] font-bold tracking-[0.2em] uppercase">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Differentiators */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col gap-5"
                    >
                        {differentiators.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.12 }}
                                className="group flex items-start gap-5 bg-white rounded-2xl p-6 border border-navy/5 shadow-sm hover:shadow-md hover:border-gold/20 transition-all duration-300 cursor-default"
                            >
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg text-navy font-bold mb-1">{item.title}</h3>
                                    <p className="text-navy/65 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
