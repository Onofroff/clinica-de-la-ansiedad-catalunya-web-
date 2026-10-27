"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { CheckCircle2, ShieldCheck, Brain, TrendingDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LudopatiaHero from "@/components/heroes/LudopatiaHero";
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

const symptoms = [
  "Incapacidad de dejar de jugar aunque se quiera hacerlo.",
  "Necesidad de apostar cantidades cada vez mayores para sentir la misma emoción.",
  "Irritabilidad o ansiedad intensa cuando se intenta reducir el juego.",
  "El juego ocupa el pensamiento de forma obsesiva y continua.",
  "Mentiras a familiares o pareja para ocultar la extensión del problema.",
  "Recurrir a préstamos o deudas para poder seguir jugando.",
  "Intentos fallidos repetidos de controlar o abandonar el juego.",
  "El juego es el mecanismo para escapar de malestar emocional o problemas.",
];

const causes = [
  {
    title: "La subjetividad que precede a la adicción",
    desc: "La ludopatía no surge de la nada. Hay una estructura psíquica previa —una forma de procesar el vacío, la angustia o el aburrimiento— que encuentra en el juego una solución provisional.",
  },
  {
    title: "El ciclo de dopamina y expectativa",
    desc: "El juego activa el circuito de recompensa del cerebro. Pero la adicción no es química: es la repetición compulsiva de un patrón que el psiquismo utiliza para regular emociones que no puede gestionar de otra manera.",
  },
  {
    title: "Lo que el juego cubre",
    desc: "Detrás de la ludopatía suele haber angustia, dificultad para tolerar la frustración, conflictos relacionales no resueltos o una sensación de vacío que el juego llena temporalmente.",
  },
];

const phases = [
  {
    num: "01",
    title: "Evaluación de la Subjetividad",
    desc: "Exploramos el sujeto que hay detrás de la adicción: su historia, sus vínculos, los conflictos emocionales que el juego viene a resolver. La adicción es siempre la respuesta a algo previo.",
  },
  {
    num: "02",
    title: "Identificación de los Desencadenantes",
    desc: "Localizamos los estados emocionales, situaciones o relaciones que activan el impulso de jugar. Comprender el «para qué» del juego es esencial para desactivarlo.",
  },
  {
    num: "03",
    title: "Trabajo sobre el Conflicto de Fondo",
    desc: "Abordamos lo que el juego cubre: la angustia, el vacío, la dificultad para tolerar el malestar. Al resolver el conflicto original, el juego pierde su función y, con ella, su poder.",
  },
  {
    num: "04",
    title: "Reconstrucción",
    desc: "Desarrollamos recursos internos genuinos para gestionar las emociones difíciles sin recurrir al juego. El objetivo es una vida en la que la adicción ya no sea necesaria.",
  },
];

const benefits = [
  {
    Icon: Brain,
    title: "Libertad Mental",
    desc: "Los pensamientos obsesivos sobre el juego ceden cuando se aborda la causa emocional que los alimenta.",
  },
  {
    Icon: ShieldCheck,
    title: "Control Real",
    desc: "No gestión de impulsos mediante fuerza de voluntad, sino transformación estructural que hace que el impulso pierda intensidad.",
  },
  {
    Icon: TrendingDown,
    title: "Reconstrucción Vital",
    desc: "Relaciones, finanzas, autoestima. La vida que la adicción fue comiendo se puede recuperar con el trabajo adecuado.",
  },
];

export default function LudopatiaPage() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
      <Navbar />
      <main className="pt-24">
        <LudopatiaHero />

        {/* ===== QUÉ ES ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Comprender
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                La ludopatía no es un problema de disciplina
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-6 text-navy/70 leading-relaxed text-lg mb-14"
            >
              <motion.p variants={inView}>
                La ludopatía es una adicción vinculada al juego. Una adicción no existe sin un sujeto previo que tenga una subjetividad que pueda dar lugar a ella. El juego en sí no es el problema —es la solución que encontró tu psiquismo para gestionar algo que no podía afrontar de otra manera. Muchos pacientes con ludopatía presentan también{" "}<Link href="/ansiedad" className="text-gold hover:text-gold/80 underline underline-offset-2">ansiedad</Link> o{" "}<Link href="/depresion" className="text-gold hover:text-gold/80 underline underline-offset-2">depresión</Link> subyacente.
              </motion.p>
              <motion.p variants={inView}>
                Por eso los programas basados exclusivamente en la abstinencia o la fuerza de voluntad tienen tan alta tasa de recaída. No atacan el origen. Mientras el conflicto psíquico subyacente siga activo,{" "}
                <strong className="text-navy font-semibold">el juego o cualquier otra adicción sustituta encontrará la forma de regresar</strong>.
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {causes.map((item, i) => (
                <motion.div key={i} variants={inView}>
                  <Card className="bg-white border border-navy/5 hover:border-gold/20 transition-all shadow-none">
                    <CardBody className="p-6">
                      <h3 className="font-serif text-lg font-bold text-navy mb-2">{item.title}</h3>
                      <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== SÍNTOMAS ===== */}
        <section className="py-20 md:py-24 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-navy/8 text-navy border border-navy/10 text-[10px] font-bold uppercase tracking-widest mb-6">
                Señales
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-4">
                ¿Te reconoces?
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10 max-w-2xl">
                La ludopatía avanza de forma progresiva. Estos son los patrones que identifican los pacientes que llegan a consulta.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-3"
            >
              {symptoms.map((item, i) => (
                <motion.div key={i} variants={inView} className="flex items-start gap-3 py-3 px-4 rounded-xl hover:bg-cream/50 transition-colors">
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
                  &ldquo;Una adicción no existe sin un sujeto previo. Tratar la ludopatía significa entender qué conflicto psíquico encontró en el juego su única salida posible.&rdquo;
                </p>
                <p className="mt-4 font-bold tracking-[0.2em] uppercase text-xs text-navy/50">
                  Joan Ramon Soto · Psicoanalista / Psicoterapeuta
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== TRATAMIENTO ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-sage/20 text-navy border border-sage/30 text-[10px] font-bold uppercase tracking-widest mb-6">
                Tratamiento
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-6">
                Tratamiento de la ludopatía: ir al origen
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-16 max-w-2xl">
                No trabajamos solo la conducta adictiva. Trabajamos la estructura psíquica que le dio origen. Sin eso, el ciclo se repite. Tratamiento presencial en Canet de Mar (Maresme) y{" "}<Link href="/terapia-online" className="text-gold hover:text-gold/80 underline underline-offset-2">terapia online</Link> para pacientes de toda Catalunya: Barcelona, Girona, Lleida y Tarragona.
              </p>
            </motion.div>

            <div className="space-y-16 md:space-y-20">
              {phases.map((step, i) => (
                <motion.div
                  key={i}
                  variants={inView}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="flex gap-8 md:gap-12 items-start"
                >
                  <div className="hidden md:block">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                      <span className="font-serif text-2xl text-gold font-bold">{step.num}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="md:hidden mb-3">
                      <Chip size="sm" className="bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest border border-gold/20">
                        Fase {step.num}
                      </Chip>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-4">{step.title}</h3>
                    <p className="text-navy/70 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BENEFICIOS ===== */}
        <section className="py-16 md:py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-4">
                Recuperar el{" "}
                <span className="text-gold italic font-light">control de tu vida</span>
              </h2>
              <p className="text-navy/60 max-w-lg mx-auto font-light">
                No se trata de no jugar. Se trata de no necesitar jugar.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            >
              {benefits.map(({ Icon, title, desc }, i) => (
                <motion.div key={i} variants={inView}>
                  <Card className="bg-cream border border-navy/5 hover:border-gold/20 transition-all hover:-translate-y-1 shadow-none h-full">
                    <CardBody className="p-6 md:p-8">
                      <Icon className="w-10 h-10 text-gold mb-5" />
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3">{title}</h3>
                      <p className="text-navy/60 leading-relaxed font-light text-sm">{desc}</p>
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
              className="text-center mt-12"
            >
              <Button
                as="a"
                href={bookingUrl("cierre-ludopatia")}
                className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                Solicitar Primera Sesión
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              La ludopatía frecuentemente coexiste con{" "}
              <a href="/ansiedad" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">ansiedad</a> y{" "}
              <a href="/depresion" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">depresión</a> subyacente.
              Tratamiento de ludopatía en Canet de Mar (Maresme) con{" "}
              <a href="/servicios/terapia-individual" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia individual</a> psicoanalítica, también disponible como{" "}
              <a href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia online</a> para pacientes de toda Catalunya —Barcelona, Girona, Lleida y Tarragona— y España.
            </p>
            <p className="text-navy/50 text-sm leading-relaxed mt-4">
              Consulta presencial en Canet de Mar (Maresme) y terapia online para toda Catalunya, con{" "}
              <a href="/psicologo-maresme" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">psicoanalista en el Maresme</a> en la{" "}
              <a href="/" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">Clínica de la Ansiedad</a>.
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
