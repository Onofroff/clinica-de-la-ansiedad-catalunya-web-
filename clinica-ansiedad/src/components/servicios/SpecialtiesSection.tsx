"use client";
import { useLocale } from "next-intl";

import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/react';
import { Brain, Activity, Compass, AlertCircle, ArrowRight } from 'lucide-react';


export default function SpecialtiesSection() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  const specialties = [
      {
          icon: <Activity className="w-6 h-6 text-sage" />,
          title: t("Depresión", "Depressió"),
          subtitle: t("Tratamiento Psicoanalítico contra la Depresión", "Tractament psicoanalític de la depressió"),
          content: t("La depresión se caracteriza por un estado de ánimo triste e inapetente que se mantiene en el tiempo sin modificación junto con una incapacidad de disfrutar de cualquier acontecimiento de la vida.", "La depressió es caracteritza per un estat d'ànim trist i apàtic que es manté en el temps sense canvis, juntament amb una incapacitat per gaudir de qualsevol esdeveniment de la vida."),
          href: "/depresion"
      },
      {
          icon: <Brain className="w-6 h-6 text-navy" />,
          title: t("Ansiedad", "Ansietat"),
          subtitle: t("Tratamiento Psicoanalítico contra la Ansiedad", "Tractament psicoanalític de l'ansietat"),
          content: t("La persona se encuentra sometida a una afluencia de excitaciones de origen externo o interno que es incapaz de controlar y dominar.", "La persona es troba sotmesa a una afluència d'excitacions d'origen extern o intern que és incapaç de controlar i dominar."),
          href: "/ansiedad"
      },
      {
          icon: <Compass className="w-6 h-6 text-gold" />,
          title: t("Celos", "Gelosia"),
          subtitle: t("Tratamiento Psicoanalítico contra los Celos", "Tractament psicoanalític de la gelosia"),
          content: t("Los celos son unos estados afectivos normales, todo el mundo los tiene en algún momento u otro de su vida pero sobre todo en la infancia.", "La gelosia és un estat afectiu normal: tothom l'experimenta en algun moment de la vida, però sobretot a la infància."),
          href: "/celos"
      },
      {
          icon: <AlertCircle className="w-6 h-6 text-navy" />,
          title: t("Ludopatía", "Ludopatia"),
          subtitle: t("Tratamiento Psicoanalítico contra la Ludopatía", "Tractament psicoanalític de la ludopatia"),
          content: t("La ludopatía es una adicción vinculada al juego. Una adicción no existe sin un sujeto previo que tenga una subjetividad que puede dar lugar a una adicción.", "La ludopatia és una addicció vinculada al joc. Una addicció no existeix sense un subjecte previ amb una subjectivitat que hi pugui donar lloc."),
          href: "/ludopatia"
      }
  ];
    return (
        <section className="py-24 bg-navy text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sage/20 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                        {t("Espacio Psicoanalítico · Desde 1993", "Espai psicoanalític · Des de 1993")}
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                        {t("Áreas de Especialización", "Àrees d'especialització")}
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed mb-8">
                        {t("Pioneros en terapia online desde hace más de 25 años. Con atención presencial en Maresme y online para toda Catalunya y España.", "Pioners en teràpia a distància des de fa més de 25 anys. Amb atenció presencial al Maresme i en línia per a tot Catalunya i Espanya.")}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {specialties.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shadow-none rounded-2xl">
                                <CardBody className="p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-white/10 rounded-xl">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-xl font-bold text-white/90 leading-tight">
                                                {item.title}
                                            </h3>
                                            <span className="text-xs text-gold uppercase tracking-wider font-semibold">
                                                {item.subtitle}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-white/70 leading-relaxed text-sm mb-4">
                                        {item.content}
                                    </p>
                                    {item.href && (
                                        <a href={`/${locale}${item.href}`} className="inline-flex items-center gap-1.5 text-gold text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all">
                                            {t("Seguir leyendo", "Continuar llegint")} <ArrowRight className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
