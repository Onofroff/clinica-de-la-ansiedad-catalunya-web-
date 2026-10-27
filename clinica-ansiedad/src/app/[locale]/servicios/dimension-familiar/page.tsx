"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { Users, Network, Anchor, RefreshCw, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingOptions from "@/components/servicios/BookingOptions";
import FAQSection from "@/components/sections/FAQSection";
import StickyBookingButton from "@/components/servicios/StickyBookingButton";
import DimensionFamiliarHero from "@/components/heroes/DimensionFamiliarHero";
import { bookingUrl } from "@/lib/constants";

const inView: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const indications = [
  "Conflictos intergeneracionales o problemas de convivencia con hijos adolescentes.",
  "Duelos familiares no resueltos, pérdidas repentinas o enfermedades graves.",
  "Desbordamiento emocional frente a trastornos incapacitantes de un familiar.",
  "Transiciones vitales bruscas (nido vacío, jubilación, divorcios mal gestionados).",
  "Secretos familiares, reproches históricos o ausencias que generan trauma.",
  "Dificultades extremas en el establecimiento de límites y jerarquías saludables.",
];

const methodology = [
  {
    title: "Análisis Estructural",
    desc: "Evaluamos roles, coaliciones y jerarquías desequilibradas dentro del núcleo familiar.",
  },
  {
    title: "Resolución Práctica",
    desc: "Establecemos límites saludables y redefinimos las responsabilidades mutuas para evitar el exceso de presión sobre un único miembro.",
  },
  {
    title: "Estrategias de Apoyo",
    desc: "Psicoeducación y desarrollo de habilidades de afrontamiento colectivo para familias que conviven con ansiedad severa o depresión.",
  },
];

const benefits = [
  {
    Icon: Network,
    title: "Descompresión del Sistema",
    desc: "Alivio sobre el miembro que carga el síntoma, repartiendo el peso emocional de forma sana.",
  },
  {
    Icon: Anchor,
    title: "Límites Seguros",
    desc: "Recuperar la jerarquía intergeneracional. Los padres restauran su autoridad contenedora y los hijos se liberan de cargas adultas.",
  },
  {
    Icon: RefreshCw,
    title: "Afrontamiento Grupal",
    desc: "Aprenderéis herramientas conjuntas para gestionar futuras crisis, decepciones, duelos o transiciones sin que la familia se fracture.",
  },
];

export default function DimensionFamiliarPage() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
      <Navbar />
      <main>
        <DimensionFamiliarHero />

        {/* ===== CUÁNDO INTERVENIR ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Indicaciones
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-6">
                ¿Cuándo plantear una intervención sistémica?
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10 max-w-2xl">
                A menudo, un miembro de la familia expresa —mediante ansiedad, fobias o conductas disruptivas— tensiones latentes que pertenecen al sistema familiar completo. Trabajamos esta dimensión ante: Terapia familiar presencial en Canet de Mar (Maresme) y{" "}<Link href="/terapia-online" className="text-gold hover:text-gold/80 underline underline-offset-2">online</Link> para familias de toda Catalunya.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-3 mb-10"
            >
              {indications.map((item, i) => (
                <motion.div key={i} variants={inView} className="flex items-start gap-3 py-3 px-4 rounded-xl hover:bg-white/70 transition-colors">
                  <Users className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <span className="text-navy/70">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Card className="bg-sage/10 border border-sage/20 shadow-none">
                <CardBody className="p-6 md:p-8">
                  <h3 className="font-serif text-xl font-bold text-navy mb-2">Nuestro objetivo</h3>
                  <p className="text-navy/70">
                    Restaurar la funcionalidad del grupo familiar, transformando un entorno generador de estrés en una auténtica red de cuidado, comprensión y apoyo mutuo incondicional.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* ===== SANAR DESDE EL NÚCLEO ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                variants={inView}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
              >
                <Chip size="sm" className="bg-navy/8 text-navy border border-navy/10 text-[10px] font-bold uppercase tracking-widest mb-6">
                  Metodología
                </Chip>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                  Sanar desde el núcleo
                </h2>
                <p className="text-navy/60 text-lg leading-relaxed">
                  La intervención en la dimensión familiar permite desactivar dinámicas tóxicas abordando el entorno completo, evitando así que el paciente individual asuma toda la carga del conflicto —el "paciente identificado". Cuando un miembro de la familia sufre{" "}<Link href="/ansiedad" className="text-gold hover:text-gold/80 underline underline-offset-2">ansiedad</Link> o{" "}<Link href="/depresion" className="text-gold hover:text-gold/80 underline underline-offset-2">depresión</Link>, el abordaje familiar potencia los resultados de la{" "}<Link href="/servicios/terapia-individual" className="text-gold hover:text-gold/80 underline underline-offset-2">terapia individual</Link>.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {methodology.map((item, i) => (
                  <motion.div key={i} variants={inView}>
                    <Card className="bg-cream border border-navy/5 hover:border-gold/20 transition-all shadow-none">
                      <CardBody className="p-5">
                        <h3 className="font-serif text-base font-bold text-navy mb-1">{item.title}</h3>
                        <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Pullquote */}
            <motion.div
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-16 flex gap-6 items-start"
            >
              <div className="w-1 bg-gold rounded-full shrink-0 self-stretch" />
              <div>
                <p className="font-serif text-xl md:text-2xl text-navy italic leading-snug font-light">
                  &ldquo;Ningún síntoma individual se produce en un vacío. La familia es siempre el contexto y, con frecuencia, también parte de la solución.&rdquo;
                </p>
                <p className="mt-4 font-bold tracking-[0.2em] uppercase text-xs text-navy/50">
                  Joan Ramon Soto Cifuentes · Psicoanalista / Psicoterapeuta
                </p>
              </div>
            </motion.div>
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
                Un Hogar{" "}
                <span className="text-gold italic font-light">Funcional y Sano</span>
              </h2>
              <p className="text-base md:text-lg text-navy/70 max-w-2xl mx-auto font-light">
                Desarticular los patrones de conflicto colectivo permite que el entorno familiar deje de ser una fuente de angustia y vuelva a ser refugio.
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
                  <Card className="bg-white border border-navy/5 hover:border-gold/30 transition-all hover:-translate-y-1 shadow-none h-full">
                    <CardBody className="p-6 md:p-8">
                      <Icon className="w-10 h-10 text-gold mb-4 md:mb-6" />
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4">{title}</h3>
                      <p className="text-navy/70 leading-relaxed font-light text-sm md:text-base">{desc}</p>
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
                href={bookingUrl("cierre-dimension-familiar")}
                className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                Pedir Cita Familiar
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              La terapia familiar potencia los resultados del tratamiento de{" "}
              <a href="/ansiedad" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">ansiedad</a> y{" "}
              <a href="/depresion" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">depresión</a> en el miembro afectado.
              Puede combinarse con{" "}
              <a href="/servicios/terapia-individual" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia individual</a> y{" "}
              <a href="/servicios/terapia-de-pareja" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia de pareja</a>.
              Consulta presencial en Canet de Mar (Maresme) y{" "}
              <a href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia online</a>:{" "}
              <a href="/psicologo-maresme" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">psicoanalista en el Maresme</a> para familias de Arenys de Mar, Arenys de Munt, Sant Pol, Calella, Mataró, Pineda, Malgrat y Montgat.
              Más sobre la{" "}
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
