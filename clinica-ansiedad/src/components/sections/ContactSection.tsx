"use client";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight, Sparkles, Phone, MessageCircle } from "lucide-react";
import { bookingUrl, whatsappUrl, PHONE_NUMBER, PHONE_DISPLAY, GOOGLE_REVIEWS } from "@/lib/constants";

const WHATSAPP_URL_ES = whatsappUrl("Hola, me gustaría solicitar una valoración.");
const WHATSAPP_URL_CA = whatsappUrl("Hola, m'agradaria sol·licitar una valoració.");
// Enlace a la ficha (Maps URLs API). La URL anterior era por coordenadas y abría
// el mapa sin el listado, así que no llevaba ni a la ficha ni a las reseñas.
const MAPS_URL = GOOGLE_REVIEWS.url;

export default function ContactSection() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  const WHATSAPP_URL = locale === "ca" ? WHATSAPP_URL_CA : WHATSAPP_URL_ES;
    return (
        <section id="contacto" className="relative bg-[#FAFAFA] py-32 lg:py-48 px-6 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-navy/5 blur-[150px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-navy/5 text-navy text-sm font-bold mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        {t("Atención personalizada y bilingüe", "Atenció personalitzada i bilingüe")}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl lg:text-7xl font-serif text-navy font-bold mb-8 tracking-tight"
                    >
                        {t("Demos el primer paso", "Fem el primer pas")} <span className="text-primary italic font-light">{t("juntos", "junts")}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-navy/60 text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        {t("Elige cómo prefieres empezar: escríbenos ahora por WhatsApp o reserva tu cita online.", "Tria com prefereixes començar: escriu-nos ara per WhatsApp o reserva la teva cita en línia.")}
                    </motion.p>
                </div>

                {/* Dos acciones claras: WhatsApp + Reserva (mismo enlace que los sticky buttons) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

                    {/* WhatsApp — respuesta inmediata (enlace extendido) + teléfono clicable */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -4 }}
                        viewport={{ once: true }}
                        className="relative bg-[#0f1f2e] p-10 lg:p-12 rounded-[3rem] overflow-hidden flex flex-col justify-between min-h-[440px] group"
                    >
                        {/* Enlace extendido: toda la tarjeta lleva a WhatsApp */}
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-10 rounded-[3rem]"
                            aria-label={t("Escríbenos por WhatsApp", "Escriu-nos per WhatsApp")}
                        />
                        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#25D366]/10 blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

                        <div className="relative">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-xs font-bold uppercase tracking-widest mb-8">
                                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                                {t("Disponible ahora", "Disponible ara")}
                            </div>

                            <h3 className="text-4xl lg:text-5xl font-serif text-white font-bold leading-tight mb-5">
                                {t("Escríbenos por", "Escriu-nos per")}<br />
                                <span className="text-[#25D366]">WhatsApp</span>
                            </h3>

                            <p className="text-white/50 text-lg max-w-md leading-relaxed">
                                {t("Cuéntanos tu caso y te responderemos personalmente. Escribir no cuesta nada ni te compromete a reservar.", "Explica'ns el teu cas i et respondrem personalment. Escriure no costa res ni et compromet a reservar.")}
                            </p>
                        </div>

                        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-10">
                            {/* Teléfono clicable, por encima del enlace extendido */}
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="relative z-20 flex items-center gap-4 rounded-2xl -m-2 p-2 hover:bg-white/5 transition-colors"
                                aria-label={`${t("Llámanos al", "Truca'ns al")} ${PHONE_DISPLAY}`}
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-[#25D366]" />
                                </div>
                                <div>
                                    <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1 whitespace-nowrap">{t("Teléfono · Llámanos", "Telèfon · Truca'ns")}</p>
                                    <p className="text-white text-2xl font-bold tracking-wide whitespace-nowrap">{PHONE_DISPLAY}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-3 bg-[#25D366] text-black px-8 py-4 rounded-full font-bold text-base group-hover:scale-105 transition-transform">
                                <MessageCircle className="w-5 h-5" />
                                {t("Iniciar conversación", "Iniciar conversa")}
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Reserva tu cita — mismo destino que los sticky buttons (Setmore) */}
                    <motion.a
                        href={bookingUrl('contacto')}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -4 }}
                        viewport={{ once: true }}
                        className="relative bg-white p-10 lg:p-12 rounded-[3rem] border border-navy/5 shadow-xl shadow-navy/[0.03] overflow-hidden flex flex-col justify-between min-h-[440px] group"
                    >
                        <div className="absolute top-[-20%] right-[-10%] w-[55%] h-[55%] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                <Calendar className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>

                            <span className="text-navy/40 text-xs font-black uppercase tracking-widest block mb-3">{t("Reserva tu cita", "Reserva la teva cita")}</span>
                            <h3 className="text-4xl lg:text-5xl font-serif text-navy font-bold leading-tight mb-5">
                                {t("Agenda una sesión", "Reserva una sessió")}
                            </h3>
                            <p className="text-navy/50 text-lg max-w-md leading-relaxed">
                                {t("Elige el horario que mejor se adapte a ti, presencial u online. Sesión de 50 minutos, 75 € (pareja, 1 h, 100 €). El pago confirma la reserva.", "Tria l'horari que millor t'encaixi, presencial o en línia. Sessió de 50 minuts, 75 € (parella, 1 h, 100 €). El pagament confirma la reserva.")}
                            </p>
                        </div>

                        <div className="relative z-10 mt-10">
                            <div className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full font-bold text-base group-hover:bg-primary transition-colors">
                                {t("Reservar cita · 75 €", "Reservar cita · 75 €")}
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.a>
                </div>

                {/* Dirección — información discreta, no un CTA que compita */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left"
                >
                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary shrink-0" />
                        <p className="text-navy/70">
                            <span className="font-bold text-navy">Ronda Dr. Anglès 74, Canet de Mar</span>
                            <span className="text-navy/50">{t(" · Maresme, Barcelona", " · Maresme, Barcelona")}</span>
                        </p>
                    </div>
                    <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline underline-offset-2"
                    >
                        {t("Ver en Google Maps", "Veure a Google Maps")}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
