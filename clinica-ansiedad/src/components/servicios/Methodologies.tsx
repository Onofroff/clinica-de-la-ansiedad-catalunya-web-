"use client";
import { useLocale } from "next-intl";

import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse } from 'lucide-react';
import { Card, CardBody } from '@heroui/react';

export default function Methodologies() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-navy font-bold mb-6 text-balance">
                        {t("Qué nos diferencia en Clínica de la Ansiedad Catalunya", "Què ens diferencia a la Clínica de la Ansiedad Catalunya")}
                    </h2>
                    <div className="w-16 h-1 bg-sage mx-auto mb-6"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <Card className="h-full border-none shadow-glass bg-cream/30 hover:bg-cream/50 transition-colors">
                            <CardBody className="p-10 flex flex-col items-start gap-6">
                                <div className="p-4 rounded-full bg-white shadow-sm border border-sage/10">
                                    <ShieldCheck className="w-8 h-8 text-sage" />
                                </div>
                                <h3 className="font-serif text-2xl text-navy font-bold">{t("Clara y Cerca", "Clara i propera")}</h3>
                                <p className="text-text/80 leading-relaxed text-balance">
                                    {t("Somos especialistas en el tratamiento de la ansiedad, con más de 25 años de experiencia y miles de personas atendidas. Aplicamos terapias basadas en la evidencia con un enfoque clínico riguroso, ofreciendo atención personalizada presencial y online de la mano de Joan Ramon Soto.", "Som especialistes en el tractament de l'ansietat, amb més de 25 anys d'experiència i milers de persones ateses. Apliquem teràpies basades en l'evidència amb un enfocament clínic rigorós, amb atenció personalitzada presencial i en línia de la mà de Joan Ramon Soto.")}
                                </p>
                            </CardBody>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="h-full border-none shadow-glass bg-cream/30 hover:bg-cream/50 transition-colors">
                            <CardBody className="p-10 flex flex-col items-start gap-6">
                                <div className="p-4 rounded-full bg-white shadow-sm border border-gold/10">
                                    <HeartPulse className="w-8 h-8 text-gold" />
                                </div>
                                <h3 className="font-serif text-2xl text-navy font-bold">{t("Recupera tu equilibrio emocional", "Recupera el teu equilibri emocional")}</h3>
                                <p className="text-text/80 leading-relaxed text-balance">
                                    {t("Te ayudamos a superar la ansiedad con un tratamiento psicoterapéutico personalizado. Muchas personas llegan con dudas o miedo a no mejorar, pero con acompañamiento profesional es posible recuperar equilibrio y bienestar. Te ayudaremos a entender qué te ocurre, aprender estrategias eficaces y desarrollar herramientas para que los cambios se mantengan en el tiempo.", "T'ajudem a superar l'ansietat amb un tractament psicoterapèutic personalitzat. Moltes persones arriben amb dubtes o amb por de no millorar, però amb acompanyament professional és possible recuperar l'equilibri i el benestar. T'ajudarem a entendre què et passa, a aprendre estratègies eficaces i a desenvolupar eines perquè els canvis es mantinguin en el temps.")}
                                </p>
                            </CardBody>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
