"use client";
import { useLocale } from "next-intl";

import { motion } from 'framer-motion';
import { Building2, Laptop } from 'lucide-react';

export default function TreatmentModalities() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
    return (
        <section className="py-20 bg-cream relative">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                        {t("Nuestros Formatos", "Els nostres formats")}
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-navy font-bold mb-6">
                        {t("Dos modalidades, idéntico rigor clínico", "Dues modalitats, el mateix rigor clínic")}
                    </h2>
                    <div className="w-16 h-1 bg-gold mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Presencial */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-md rounded-3xl border border-white shadow-glass transform transition-transform group-hover:scale-[1.02]"></div>
                        <div className="relative p-10 flex flex-col items-start gap-6 h-full">
                            <div className="w-16 h-16 rounded-2xl bg-sage/20 flex items-center justify-center text-sage">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-3xl text-navy font-bold">{t("Psicoterapia Presencial", "Psicoteràpia presencial")}</h3>
                            <div className="text-text/80 leading-relaxed space-y-4">
                                <p>
                                    {t("El tratamiento presencial de la ansiedad permite trabajar de forma cercana y personalizada los síntomas que afectan al día a día: inquietud, miedo, bloqueo emocional o sensación de pérdida de control.", "El tractament presencial de l'ansietat permet treballar de manera propera i personalitzada els símptomes que afecten el dia a dia: inquietud, por, bloqueig emocional o sensació de pèrdua de control.")}
                                </p>
                                <p>
                                    {t("En Clínica de la Ansiedad Catalunya, diseñamos planes terapéuticos adaptados a cada persona para lograr mejoras reales y sostenidas. Nuestro enfoque combina evaluación clínica, psicoterapia especializada y estrategias prácticas orientadas a reducir la ansiedad y consolidar los cambios.", "A la Clínica de la Ansiedad Catalunya dissenyem plans terapèutics adaptats a cada persona per aconseguir millores reals i sostingudes. El nostre enfocament combina avaluació clínica, psicoteràpia especialitzada i estratègies pràctiques orientades a reduir l'ansietat i consolidar els canvis.")}
                                </p>
                                <p>
                                    {t("El contacto directo en consulta favorece un trabajo profundo que ayuda a comprender el origen del malestar y a recuperar estabilidad emocional y calidad de vida.", "El contacte directe a la consulta afavoreix un treball profund que ajuda a comprendre l'origen del malestar i a recuperar l'estabilitat emocional i la qualitat de vida.")}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Online */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-md rounded-3xl border border-white shadow-glass transform transition-transform group-hover:scale-[1.02]"></div>
                        <div className="relative p-10 flex flex-col items-start gap-6 h-full">
                            <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center text-gold">
                                <Laptop className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-3xl text-navy font-bold">{t("Psicoterapia Online", "Psicoteràpia en línia")}</h3>
                            <div className="text-text/80 leading-relaxed space-y-4">
                                <p>
                                    {t("El tratamiento online de la ansiedad permite iniciar un proceso terapéutico cómodo, flexible y eficaz desde casa.", "El tractament en línia de l'ansietat permet començar un procés terapèutic còmode, flexible i eficaç des de casa.")}
                                </p>
                                <p>
                                    {t("En Clínica de la Ansiedad Catalunya, ofrecemos tratamientos online personalizados para reducir la ansiedad, mejorar la regulación emocional y recuperar estabilidad personal. La terapia online sigue el mismo proceso clínico que la presencial: evaluación individual, objetivos terapéuticos claros y estrategias prácticas adaptadas a cada persona.", "A la Clínica de la Ansiedad Catalunya oferim tractaments en línia personalitzats per reduir l'ansietat, millorar la regulació emocional i recuperar l'estabilitat personal. La teràpia en línia segueix el mateix procés clínic que la presencial: avaluació individual, objectius terapèutics clars i estratègies pràctiques adaptades a cada persona.")}
                                </p>
                                <p>
                                    {t("Esta modalidad facilita la continuidad del tratamiento y se adapta a ritmos de vida exigentes sin perder calidad terapéutica.", "Aquesta modalitat facilita la continuïtat del tractament i s'adapta a ritmes de vida exigents sense perdre qualitat terapèutica.")}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
