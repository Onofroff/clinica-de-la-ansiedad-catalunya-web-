"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { HeartHandshake, MessageCircle, Flame, Scale, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingOptions from "@/components/servicios/BookingOptions";
import FAQSection from "@/components/sections/FAQSection";
import StickyBookingButton from "@/components/servicios/StickyBookingButton";
import TerapiaDeParejaHero from "@/components/heroes/TerapiaDeParejaHero";
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
  "Problemas de comunicación o discusiones constantes sin resolución.",
  "Infidelidades o pérdida de confianza en el otro.",
  "Desconexión emocional, apatía o sensación de convivir con un desconocido.",
  "Dificultades en la esfera sexual o falta de intimidad.",
  "Conflictos sobre la crianza de los hijos o familias políticas.",
  "Dudas serias sobre la continuidad de la relación.",
];

const approach = [
  {
    title: "Traducir el conflicto",
    desc: "Identificamos las verdaderas necesidades emocionales que se esconden detrás de las discusiones superficiales o los silencios punitivos.",
  },
  {
    title: "Gestión Emocional Compartida",
    desc: "Enseñamos técnicas efectivas de comunicación no violenta y asertividad para romper dinámicas destructivas.",
  },
  {
    title: "Reparación del Daño",
    desc: "Trabajamos estratégicamente en la restauración de la confianza tras crisis severas como la infidelidad.",
  },
  {
    title: "Acuerdos Estables",
    desc: "Consolidamos pautas de convivencia saludables que fomenten la intimidad, el respeto y la autonomía dentro de la pareja.",
  },
];

const benefits = [
  {
    Icon: MessageCircle,
    title: "Comunicación Efectiva",
    desc: "Desactivaréis la lectura de mentes y el rencor acumulado. Aprenderéis a solicitar lo que necesitáis sin ataques ni hostilidad.",
  },
  {
    Icon: Flame,
    title: "Reconexión Íntima",
    desc: "Al reducirse el resentimiento diario, vuelve a generarse el espacio psicológico necesario para la curiosidad, la admiración y la cercanía emocional.",
  },
  {
    Icon: Scale,
    title: "Acuerdos Equitativos",
    desc: "Estableceréis un reparto justo de responsabilidades invisibles, disolviendo la sensación de desequilibrio e invisibilidad en la pareja.",
  },
];

export default function TerapiaDeParejaPage() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
      <Navbar />
      <main>
        <TerapiaDeParejaHero />

        {/* ===== CUÁNDO ACUDIR ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Indicaciones
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-6">
                ¿Cuándo acudir a Terapia de Pareja?
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10 max-w-2xl">
                Las crisis en las relaciones son dolorosas y desgastantes. La terapia es especialmente efectiva cuando enfrentáis: Consulta de terapia de pareja en Canet de Mar (Maresme) y{" "}<Link href="/terapia-online" className="text-gold hover:text-gold/80 underline underline-offset-2">sesiones online</Link> para parejas de toda Catalunya.
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
                  <HeartHandshake className="w-5 h-5 text-gold shrink-0 mt-0.5" />
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
              <Card className="bg-gold/10 border border-gold/20 shadow-none">
                <CardBody className="p-6 md:p-8">
                  <h3 className="font-serif text-xl font-bold text-navy mb-2">Nuestro objetivo</h3>
                  <p className="text-navy/70">
                    Convertir la crisis en una oportunidad de crecimiento, construyendo una relación más madura, consciente y conectada, o facilitando una separación sana y respetuosa si ese es el camino elegido.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* ===== RECONSTRUIR EL VÍNCULO ===== */}
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
                  Reconstruir el vínculo
                </h2>
                <p className="text-navy/60 text-lg leading-relaxed mb-8">
                  Las crisis de pareja a menudo ocultan malestares individuales no resueltos o patrones de comunicación disfuncionales. Nuestro enfoque ayuda a{" "}
                  <strong className="text-navy font-semibold">desarticular los reproches cruzados</strong>{" "}
                  para dar paso a un diálogo genuino. Los{" "}<Link href="/celos" className="text-gold hover:text-gold/80 underline underline-offset-2">celos patológicos</Link> o la{" "}<Link href="/ansiedad" className="text-gold hover:text-gold/80 underline underline-offset-2">ansiedad</Link> de uno de los miembros pueden ser el detonante de la crisis.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {approach.map((item, i) => (
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
                  &ldquo;Intervenir en una crisis de pareja requiere neutralidad absoluta, pericia clínica para no caer en alianzas destructivas, y la empatía necesaria para validar el dolor de ambas partes.&rdquo;
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
                Construyendo un{" "}
                <span className="text-gold italic font-light">Vínculo Sólido</span>
              </h2>
              <p className="text-base md:text-lg text-navy/70 max-w-2xl mx-auto font-light">
                Más allá de dejar de discutir, la verdadera meta es transformar cómo os relacionáis frente al desacuerdo y recuperar la intimidad funcional.
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
                href={bookingUrl("cierre-terapia-de-pareja")}
                className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                Solicitar Cita de Pareja
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              Los conflictos de pareja frecuentemente se vinculan a{" "}
              <a href="/ansiedad" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">ansiedad</a>,{" "}
              <a href="/celos" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">celos patológicos</a> o{" "}
              <a href="/depresion" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">depresión</a> de uno o ambos miembros.
              Puede complementarse con{" "}
              <a href="/servicios/terapia-individual" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia individual</a> o{" "}
              <a href="/servicios/dimension-familiar" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia familiar</a>.
              Consulta presencial en Canet de Mar (Maresme) y{" "}
              <a href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia online</a>:{" "}
              <a href="/psicologo-maresme" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">psicoanalista en el Maresme</a> para parejas de toda Catalunya.
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
