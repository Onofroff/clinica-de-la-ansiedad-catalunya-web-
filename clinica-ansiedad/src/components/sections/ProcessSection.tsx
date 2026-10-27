"use client";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/routing";import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Phone, CalendarCheck, Sparkles } from "lucide-react";

export default function ProcessSection() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
    const steps = [
        {
            number: "01",
            title: t("Toma de Contacto", "Primer contacte"),
            desc: t("Escríbenos o llámanos para explicar tu situación brevemente. Te escucharemos y agendaremos un espacio confidencial para ti.", "Escriu-nos o truca'ns per explicar breument la teva situació. T'escoltarem i reservarem un espai confidencial per a tu."),
            icon: Phone
        },
        {
            number: "02",
            title: t("Primera Consulta", "Primera consulta"),
            desc: t("Una entrevista inicial de evaluación en la que nos conoceremos, analizaremos tu demanda y propondremos las bases del tratamiento.", "Una entrevista inicial d'avaluació en què ens coneixerem, analitzarem la teva demanda i proposarem les bases del tractament."),
            icon: CalendarCheck
        },
        {
            number: "03",
            title: t("Inicia tu Proceso", "Comença el teu procés"),
            desc: t("Sesiones regulares, presenciales u online, trabajando en profundidad hacia la resolución de la sintomatología y sus causas.", "Sessions regulars, presencials o en línia, treballant en profunditat la simptomatologia i les seves causes."),
            icon: Sparkles
        }
    ];

    return (
        <section className="bg-cream py-24 px-6 relative overflow-hidden">
            {/* Elegant Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage/10 rounded-full blur-[100px] mix-blend-multiply opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] mix-blend-multiply opacity-60 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 border border-navy/10 mb-6"
                    >
                        <span className="text-xs font-bold tracking-widest text-navy uppercase">{t("Nuestra Metodología", "La nostra metodologia")}</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy mb-6"
                    >
                        {t("Empezar es más sencillo de lo que crees", "Començar és més senzill del que creus")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-navy/70 max-w-2xl mx-auto font-light"
                    >
                        {t("Un proceso claro, empático y estructurado para acompañarte desde el primer instante.", "Un procés clar, empàtic i estructurat per acompanyar-te des del primer moment.")}
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting UI elements (Desktop) */}
                    <div className="hidden lg:block absolute top-[100px] left-[15%] right-[15%] h-[1px] bg-navy/10 border-t border-dashed border-navy/20 z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="group relative flex flex-col bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(44,95,120,0.15)] border border-navy/5 transition-all duration-500 overflow-hidden"
                            >
                                {/* Decorative Big Number in Background */}
                                <div className="absolute right-0 top-0 text-[140px] leading-none font-serif font-bold text-navy/[0.03] select-none pointer-events-none group-hover:text-gold/[0.05] transition-colors duration-500 translate-x-4 -translate-y-4">
                                    {step.number}
                                </div>

                                <div className="flex flex-col relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-cream border border-navy/10 flex items-center justify-center mb-8 group-hover:bg-navy group-hover:border-navy transition-colors duration-500">
                                        <step.icon strokeWidth={1.5} className="w-8 h-8 text-navy group-hover:text-gold transition-colors duration-500" />
                                    </div>

                                    <div className="flex items-end gap-3 mb-4">
                                        <span className="text-gold font-serif text-xl font-bold opacity-80 mb-0.5">{step.number}.</span>
                                        <h3 className="text-2xl font-serif font-bold text-navy">
                                            {step.title}
                                        </h3>
                                    </div>

                                    <p className="text-navy/70 leading-relaxed font-light text-lg">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-20"
                >
                    <Button
                        as={Link}
                        href="#contacto"
                        size="lg"
                        className="bg-navy hover:bg-navy-light text-white font-bold px-12 py-8 rounded-full text-lg shadow-[0_10px_30px_rgba(44,95,120,0.3)] hover:shadow-[0_15px_40px_rgba(44,95,120,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto overflow-hidden group relative isolate"
                    >
                        <span className="relative z-10">{t("Dar el primer paso", "Fer el primer pas")}</span>
                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-0 ease-in-out" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
