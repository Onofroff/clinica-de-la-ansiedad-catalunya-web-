"use client";
import { useLocale } from "next-intl";
import { MapPin, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { bookingUrl } from '@/lib/constants';


export default function ModalitiesSection() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  const modalities = [
      {
          id: "presencial",
          title: t("Consulta", "Consulta"),
          titleAccent: t("Presencial", "presencial"),
          description: t("Te recibimos en nuestro espacio diseñado para la pausa y la contención en el centro de Canet de Mar. Un entorno íntimo, seguro y confidencial.", "T'acollim al nostre espai pensat per a la pausa i la contenció, al centre de Canet de Mar. Un entorn íntim, segur i confidencial."),
          icon: MapPin,
          features: [
              t("Centro propio en Canet de Mar", "Centre propi a Canet de Mar"),
              t("Fácil acceso desde el Maresme", "Accés fàcil des de tot el Maresme"),
              t("A 35 min de Barcelona ciudad", "A 35 minuts de Barcelona ciutat")
          ],
          buttonText: "Reservar cita · 75 €",
          ctaLocation: "modalidad-presencial",
          primary: true,
      },
      {
          id: "online",
          title: t("Sesión", "Sessió"),
          titleAccent: t("Online", "en línia"),
          description: t("La distancia no es una barrera para el inconsciente. Ofrecemos el mismo rigor clínico con la comodidad y privacidad de tu propio espacio.", "La distància no és una barrera per a l'inconscient. Oferim el mateix rigor clínic amb la comoditat i la privacitat del teu propi espai."),
          icon: Globe,
          features: [
              t("Cobertura en toda España", "Cobertura a tot Catalunya i Espanya"),
              t("Sin desplazamientos físicos", "Sense desplaçaments"),
              t("Videollamada cifrada, sin grabación", "Videotrucada xifrada, sense gravació")
          ],
          buttonText: "Reservar cita · 75 €",
          ctaLocation: "modalidad-online",
          primary: false,
      }
  ];
    return (
        <section className="bg-cream py-32 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gold font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block"
                    >
                        {t("Canales de Atención", "Canals d'atenció")}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy font-bold mb-6 text-balance"
                    >
                        {t("Diferentes caminos,", "Camins diferents,")}{" "}
                        <span className="text-gold italic font-medium">{t("la misma profundidad", "la mateixa profunditat")}</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-20 h-1 bg-gold mx-auto"
                    />
                </div>

                {/* Modalities Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {modalities.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="group bg-white border border-navy/5 p-10 rounded-3xl hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-500" />

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors duration-300">
                                    <item.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
                                </div>

                                <h3 className="text-3xl md:text-4xl font-serif text-navy font-bold mb-4 leading-tight">
                                    {item.title}{" "}
                                    <span className="text-gold italic font-medium">{item.titleAccent}</span>
                                </h3>

                                <p className="text-text/70 text-lg leading-relaxed font-light mb-8">
                                    {item.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-3 mb-10">
                                    {item.features.map((feature, fIndex) => (
                                        <div key={fIndex} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-3 h-3 text-gold" />
                                            </div>
                                            <span className="text-sm text-text/80 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Button */}
                                {/* Antes apuntaba a "#contacto": el botón decía "Agendar Cita"
                                    y solo hacía scroll. Ahora abre la reserva de verdad. */}
                                <div className="mt-auto">
                                    <Button
                                        as="a"
                                        href={bookingUrl(item.ctaLocation)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-full font-semibold px-8 py-6 rounded-xl text-base transition-all duration-300 flex items-center justify-center gap-2 group/btn ${item.primary
                                            ? "bg-navy hover:bg-navy/90 text-white shadow-lg shadow-navy/10"
                                            : "bg-white border border-navy/10 text-navy hover:bg-navy/5"
                                            }`}
                                    >
                                        {item.buttonText}
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mt-24 text-center"
                >
                    <div className="bg-navy rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden shadow-2xl shadow-navy/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[60px] rounded-full" />
                        <p className="text-2xl md:text-3xl font-serif text-white font-medium italic leading-relaxed text-balance relative z-10">
                            {t("\"En el espacio analítico, la palabra circula libre de barreras físicas. Lo esencial es el", "“En l'espai analític, la paraula circula lliure de barreres físiques. L'essencial és el")}{" "}
                            <span className="text-gold">{t("deseo de saber", "desig de saber")}</span> {t("sobre uno mismo.\"", "sobre un mateix.”")}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
