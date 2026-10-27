"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TerapiaOnlineHero from "@/components/heroes/TerapiaOnlineHero";
import BookingOptions from "@/components/servicios/BookingOptions";
import FAQSection from "@/components/sections/FAQSection";
import StickyBookingButton from "@/components/servicios/StickyBookingButton";
import { bookingUrl } from "@/lib/constants";

const inView: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const reasons = [
  "Eficacia avalada por la evidencia científica.",
  "Accesible desde toda España y el extranjero.",
  "Ideal para agorafobia y fobia social.",
  "Flexibilidad horaria real.",
  "Tu propio espacio: entorno familiar y seguro.",
  "Sin desplazamientos, sin esperas, sin excusas.",
];

const steps = [
  {
    num: "01",
    title: "Contacta",
    desc: "Escríbenos o llámanos para agendar tu primera sesión. Resolveremos cualquier duda sobre el proceso, la duración y el enfoque terapéutico.",
  },
  {
    num: "02",
    title: "Conéctate",
    desc: "Solo necesitas un dispositivo con cámara y conexión estable. Te enviamos las instrucciones y el enlace de acceso con antelación. Sin complicaciones.",
  },
  {
    num: "03",
    title: "Trabaja",
    desc: "Cada sesión tiene la misma duración y estructura que una consulta presencial. Misma profundidad. Mismo compromiso. La pantalla no reduce la calidad del tratamiento.",
  },
  {
    num: "04",
    title: "Avanza",
    desc: "Entre sesiones, mantenemos disponibilidad para consultas breves si surge una crisis. Tu proceso no se detiene al cerrar la videollamada.",
  },
];

const profiles = [
  {
    title: "Agorafobia o fobia social",
    desc: "Cuando salir de casa genera un sufrimiento intenso, la terapia online permite empezar desde un entorno seguro.",
  },
  {
    title: "Fuera de Barcelona",
    desc: "Desde cualquier punto de España o del mundo hispanohablante.",
  },
  {
    title: "Expatriados",
    desc: "Españoles en el extranjero que necesitan un profesional que comprenda su contexto cultural y lingüístico.",
  },
  {
    title: "Agendas exigentes",
    desc: "Profesionales que necesitan flexibilidad sin sacrificar la calidad del tratamiento.",
  },
  {
    title: "Continuidad",
    desc: "Pacientes presenciales que, por viajes o cambios de residencia, quieren seguir sin interrupciones.",
  },
];

export default function TerapiaOnlinePage() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
      <Navbar />
      <main>
        <TerapiaOnlineHero />

        {/* ===== POR QUÉ FUNCIONA ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Evidencia
              </Chip>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                Por qué la terapia online funciona
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-6 text-navy/70 leading-relaxed text-lg mb-10"
            >
              <motion.p variants={inView}>
                La investigación es concluyente: la terapia online es igual de eficaz que la presencial para trastornos de ansiedad, crisis de pánico y depresión. Estudios publicados en{" "}
                <em>The Lancet Psychiatry</em> y <em>Journal of Anxiety Disorders</em> lo confirman repetidamente. La clave no es la presencia física —es la calidad del vínculo terapéutico. Tratamos{" "}<Link href="/ansiedad" className="text-gold hover:text-gold/80 underline underline-offset-2">ansiedad</Link>,{" "}<Link href="/crisis-de-panico" className="text-gold hover:text-gold/80 underline underline-offset-2">crisis de pánico</Link> y{" "}<Link href="/depresion" className="text-gold hover:text-gold/80 underline underline-offset-2">depresión</Link> con la misma eficacia que en consulta presencial.
              </motion.p>
              <motion.p variants={inView}>
                Como psicoanalista online en Barcelona con más de 30 años de experiencia, esto no es una adaptación de última hora. Es una modalidad que llevamos tres décadas perfeccionando. Cada sesión online mantiene la misma estructura clínica, la misma profundidad analítica y el mismo compromiso que nuestras consultas presenciales en Barcelona.
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-3"
            >
              {reasons.map((item, i) => (
                <motion.div key={i} variants={inView} className="flex items-start gap-3 py-3 px-4 rounded-xl hover:bg-cream/60 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-navy/70">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== PULLQUOTE ===== */}
        <section className="py-12 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="w-1 bg-gold rounded-full shrink-0 self-stretch" />
              <div>
                <p className="font-serif text-2xl md:text-3xl text-navy italic leading-snug font-light">
                  &ldquo;La distancia física nunca ha sido un obstáculo para la profundidad clínica. Lo que cura es el vínculo terapéutico, y ese vínculo se construye con escucha, rigor y compromiso —no con proximidad geográfica.&rdquo;
                </p>
                <p className="mt-5 font-bold tracking-[0.2em] uppercase text-xs text-navy/50">
                  Joan Ramon Soto Cifuentes · Pionero en terapia online desde 1993
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== CÓMO FUNCIONA ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-navy/8 text-navy border border-navy/10 text-[10px] font-bold uppercase tracking-widest mb-6">
                Proceso
              </Chip>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                Así de sencillo
              </h2>
              <p className="text-navy/70 text-lg leading-relaxed mb-16 max-w-3xl">
                Hemos eliminado toda la complejidad técnica para que tú solo tengas que preocuparte de una cosa: empezar.
              </p>
            </motion.div>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={inView}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="flex gap-6 md:gap-8 items-start"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                    <span className="font-serif text-lg text-gold font-bold">{step.num}</span>
                  </div>
                  <div className="flex-1 pb-6 border-b border-navy/5 last:border-0">
                    <h3 className="font-serif text-xl md:text-2xl text-navy font-semibold mb-2">{step.title}</h3>
                    <p className="text-navy/70 text-base md:text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PARA QUIÉN ===== */}
        <section className="py-20 md:py-24 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                ¿Es para ti?
              </Chip>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                Quién se beneficia más
              </h2>
              <p className="text-navy/70 text-lg leading-relaxed mb-10 max-w-3xl">
                La terapia online es especialmente eficaz cuando las circunstancias dificultan la consulta presencial. Pero también para quienes simplemente prefieren la comodidad de su propio espacio. Atendemos pacientes de Barcelona, Girona, Lleida, Tarragona, el Maresme y toda Catalunya, además de cualquier punto de España.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 mb-10"
            >
              {profiles.map((p, i) => (
                <motion.div key={i} variants={inView}>
                  <Card className="bg-white border border-navy/5 hover:border-gold/20 transition-all hover:-translate-y-1 shadow-none h-full cursor-default">
                    <CardBody className="p-6">
                      <h3 className="font-serif text-lg font-bold text-navy mb-2">{p.title}</h3>
                      <p className="text-navy/60 text-sm leading-relaxed">{p.desc}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Card className="bg-navy border-0 shadow-none">
                <CardBody className="p-6 md:p-8">
                  <h3 className="font-serif text-xl font-bold text-white mb-2">Treinta años de experiencia online</h3>
                  <p className="text-white/65">
                    Más de mil pacientes atendidos a distancia desde 1993. No improvisamos. Sabemos exactamente cómo generar un vínculo terapéutico sólido y eficaz a través de una pantalla.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                as="a"
                href={bookingUrl("cierre-terapia-online")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                Solicitar Primera Sesión Online
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              La terapia online es especialmente eficaz para el tratamiento de{" "}
              <a href="/ansiedad" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">ansiedad</a>,{" "}
              <a href="/depresion" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">depresión</a> y{" "}
              <a href="/crisis-de-panico" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">crisis de pánico</a>.
              También atendemos{" "}
              <a href="/celos" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">celos patológicos</a> y{" "}
              <a href="/ludopatia" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">ludopatía</a> online.
              Psicoanalista online en Barcelona para pacientes de toda Catalunya —Girona, Lleida, Tarragona, el Maresme— y toda España.
              Si prefieres la consulta presencial, atendemos también como{" "}
              <a href="/psicologo-maresme" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">psicoanalista en el Maresme</a>, en Canet de Mar.
            </p>
          </div>
        </section>

        <BookingOptions />
        <FAQSection />
        <StickyBookingButton />
      </main>
      <Footer />
    </div>
  );
}
