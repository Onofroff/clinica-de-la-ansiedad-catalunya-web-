"use client";
import { useLocale } from "next-intl";

import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/react';
import { Briefcase, Lightbulb, Users } from 'lucide-react';


export default function ExperienceSection() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  const expItems = [
      {
          icon: <Briefcase className="w-6 h-6 text-navy" />,
          title: t("Clínica de la Ansiedad – Psicoterapia Breve", "Clínica de la Ansiedad – Psicoteràpia breu"),
          date: t("1994 - Actualidad", "1994 - Actualitat"),
          desc: t("Director y fundador. Departamento de investigación en comunicación no verbal y aplicación de terapias breves.", "Director i fundador. Departament de recerca en comunicació no verbal i aplicació de teràpies breus.")
      },
      {
          icon: <Users className="w-6 h-6 text-sage" />,
          title: t("Terapia Clínica Multidisciplinar", "Teràpia clínica multidisciplinària"),
          date: t("Experiencia Continua", "Experiència continuada"),
          desc: t("Terapia individual, de parejas y de grupo orientada a fobias, adicciones, ansiedad, estrés y depresión. Especialización en atención telefónica hispanohablante.", "Teràpia individual, de parella i de grup orientada a fòbies, addiccions, ansietat, estrès i depressió. Especialització en atenció telefònica.")
      },
      {
          icon: <Lightbulb className="w-6 h-6 text-gold" />,
          title: t("Consultoría Organizacional y Formación", "Consultoria organitzacional i formació"),
          date: t("Experiencia Continua", "Experiència continuada"),
          desc: t("Coaching de gestión del estrés en corporaciones. Experto en comunicación verbal/no verbal para selección de personal. Creador de talleres de productividad y Mindfulness para empresas.", "Coaching de gestió de l'estrès en empreses. Expert en comunicació verbal i no verbal per a la selecció de personal. Creador de tallers de productivitat i mindfulness per a empreses.")
      }
  ];
    return (
        <section className="py-20 bg-cream/50 relative">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="sticky top-24"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl text-navy font-bold mb-6">
                            {t("Bagaje y Experiencia Profesional", "Bagatge i experiència professional")}
                        </h2>
                        <div className="w-16 h-1 bg-sage mb-6"></div>
                        <p className="text-lg text-text/80 leading-relaxed text-balance mb-6">
                            {t("Más de 30 años de experiencia clínica e investigación aplicando modelos de estrategia psicológica para la salud emocional, tanto a nivel individual como organizacional.", "Més de 30 anys d'experiència clínica i de recerca aplicant models d'estratègia psicològica per a la salut emocional, tant a nivell individual com organitzacional.")}
                        </p>
                        <p className="text-md text-text/70 leading-relaxed text-balance italic">
                            {t("\"Mi enfoque traspasa el diván clínico para aplicarse en ámbitos cotidianos, empresariales y organizacionales, optimizando resultados y bienestar.\"", "“El meu enfocament va més enllà del divan clínic i s'aplica en àmbits quotidians, empresarials i organitzacionals, per millorar resultats i benestar.”")}
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-6">
                        {expItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <Card className="border border-white shadow-glass bg-white/60 backdrop-blur-md hover:bg-white/80 transition-colors">
                                    <CardBody className="p-8">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-white shadow-sm shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold text-gold uppercase tracking-wider">{item.date}</span>
                                                <h3 className="font-serif text-xl font-bold text-navy mt-1 mb-2">{item.title}</h3>
                                                <p className="text-text/80 leading-relaxed text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
