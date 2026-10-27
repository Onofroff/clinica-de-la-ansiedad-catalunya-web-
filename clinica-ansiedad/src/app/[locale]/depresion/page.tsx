"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { CheckCircle2, Sun, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DepresionHero from "@/components/heroes/DepresionHero";
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
  "Tristeza profunda que no remite con el tiempo.",
  "Pérdida de interés en actividades que antes disfrutabas.",
  "Fatiga constante y pesadez física sin causa médica.",
  "Insomnio, despertares nocturnos o hipersomnia.",
  "Dificultad de concentración y bloqueo mental.",
  "Culpa desproporcionada o autocrítica destructiva.",
  "Aislamiento social progresivo.",
  "Ansiedad combinada: opresión en el pecho y anticipación catastrófica.",
];

const phases = [
  {
    num: "01",
    title: "Evaluación Profunda",
    desc: "Una primera conversación clínica extensa donde exploramos tu historia vital, tus vínculos y el contexto emocional en que apareció la depresión. Sin cuestionarios fríos. Sin protocolos mecánicos.",
  },
  {
    num: "02",
    title: "Exploración del Origen",
    desc: "Identificamos juntos las pérdidas no elaboradas, los conflictos inconscientes y los patrones repetitivos que alimentan el estado depresivo y la ansiedad asociada.",
  },
  {
    num: "03",
    title: "Elaboración del Duelo",
    desc: "Un espacio seguro para transitar las emociones bloqueadas —la tristeza, la rabia, la frustración— sin juicio, permitiendo que el proceso de duelo se complete por fin.",
  },
  {
    num: "04",
    title: "Reconstrucción",
    desc: "A medida que los conflictos se resuelven, acompañamos la reconexión con el deseo, los proyectos y las relaciones significativas. La vida vuelve a tener sentido —no porque te lo digamos, sino porque lo sientes.",
  },
];

const stats = [
  { value: "30+", label: "Años de experiencia", valueClass: "text-gold" },
  { value: "+1K", label: "Pacientes tratados", valueClass: "text-navy" },
];

const benefits = [
  {
    Icon: Sun,
    title: "Vitalidad",
    desc: "La energía vuelve cuando los conflictos dejan de consumirla. Volverás a sentir motivación genuina.",
  },
  {
    Icon: Heart,
    title: "Reconexión",
    desc: "Restaurar la capacidad de experimentar alegría y afecto sin el filtro del vacío depresivo.",
  },
  {
    Icon: ShieldCheck,
    title: "Cambios Duraderos",
    desc: "Trabajar desde el origen busca construir una base psíquica más sólida frente a futuros episodios.",
  },
];

export default function DepresionPage() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
      <Navbar />
      <main className="pt-24">
        <DepresionHero />

        {/* ===== DOS CARAS DEL MISMO DOLOR ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Comprender
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                Depresión y ansiedad: dos caras del mismo dolor
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-6 text-navy/70 leading-relaxed text-lg"
            >
              <motion.p variants={inView}>
                Más del 60% de las personas con depresión experimentan simultáneamente{" "}<Link href="/ansiedad" className="text-gold hover:text-gold/80 underline underline-offset-2">síntomas de ansiedad</Link>. No es casualidad. Ambas comparten un origen: conflictos emocionales profundos que no se han podido resolver, pérdidas que no se han llorado, una relación deteriorada con uno mismo que viene de lejos.
              </motion.p>
              <motion.p variants={inView}>
                La ansiedad grita. La depresión se calla. Mientras una te mantiene en alerta permanente, la otra te empuja al repliegue —el mundo exterior deja de despertar interés, los proyectos pierden sentido, las relaciones se vuelven un esfuerzo agotador.
              </motion.p>
              <motion.p variants={inView}>
                En nuestra consulta de Canet de Mar (Maresme) he visto a personas brillantes convencidas de que la depresión era un defecto suyo. No lo es. Es una señal —dura, dolorosa— pero una señal que, bien descifrada, abre la puerta a una transformación real. Como psicoanalista especialista en depresión en el Maresme, trato la depresión y ansiedad con psicoterapia psicoanalítica, también disponible como{" "}<Link href="/terapia-online" className="text-gold hover:text-gold/80 underline underline-offset-2">terapia online</Link> para pacientes de toda Catalunya —Girona, Lleida, Tarragona— y toda España.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ===== SÍNTOMAS ===== */}
        <section className="py-20 md:py-24 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-navy/8 text-navy border border-navy/10 text-[10px] font-bold uppercase tracking-widest mb-6">
                Síntomas
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-4">
                Señales que no puedes seguir ignorando
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10 max-w-2xl">
                La depresión no siempre llora. A veces se disfraza de cansancio crónico, de irritabilidad, de indiferencia.
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
                <motion.div key={i} variants={inView} className="flex items-start gap-3 py-3 px-4 rounded-xl hover:bg-white/70 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-navy/70">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== CAUSAS — Two column con quote card ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Origen
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                Lo que sostiene la depresión desde dentro
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="space-y-6 text-navy/70 leading-relaxed text-lg"
              >
                <motion.p variants={inView}>
                  La depresión no surge de un «desequilibrio químico» aislado. Esa explicación es profundamente insuficiente. La depresión es la expresión de un{" "}
                  <strong className="text-navy font-semibold">duelo no elaborado</strong> —de pérdidas reales o simbólicas que tu psiquismo no pudo procesar.
                </motion.p>
                <motion.p variants={inView}>
                  Puede ser la pérdida de una relación. De un ideal de vida. De la imagen que tenías de ti mismo. Cuando estas pérdidas no se trabajan, la energía vital se retira hacia dentro. Te desconectas de tus deseos, de tus proyectos, de tus vínculos.
                </motion.p>
                <motion.p variants={inView}>
                  Los conflictos de fondo —la rabia no expresada, la culpa que nadie nombró, las expectativas imposibles— actúan como anclas. Sin abordarlos, cualquier intervención se limita a gestionar síntomas. Y los síntomas vuelven.
                </motion.p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div variants={inView}>
                  <Card className="bg-cream border border-navy/5 shadow-none">
                    <CardBody className="p-8">
                      <div className="w-8 h-1 bg-gold mb-6" />
                      <p className="font-serif text-xl text-navy italic leading-snug font-light mb-6">
                        &ldquo;La depresión no es debilidad. Es un grito del psiquismo que necesita ser descifrado con rigor y con afecto.&rdquo;
                      </p>
                      <p className="font-bold tracking-[0.15em] uppercase text-[11px] text-navy/50">Joan Ramon Soto</p>
                    </CardBody>
                  </Card>
                </motion.div>

                <motion.div
                  variants={stagger}
                  className="grid grid-cols-2 gap-4"
                >
                  {stats.map(({ value, label, valueClass }, i) => (
                    <motion.div key={i} variants={inView}>
                      <Card className="bg-cream border border-navy/5 shadow-none">
                        <CardBody className="p-5 text-center">
                          <p className={`font-serif text-3xl font-bold ${valueClass}`}>{value}</p>
                          <p className="text-navy/50 text-xs font-medium mt-1">{label}</p>
                        </CardBody>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== TRATAMIENTO ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-sage/20 text-navy border border-sage/30 text-[10px] font-bold uppercase tracking-widest mb-6">
                Proceso
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-6">
                Un proceso que transforma
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-16 max-w-2xl">
                Nuestro tratamiento de la depresión no busca parches temporales. Mediante nuestro <a href="/enfoque" className="text-navy/70 hover:text-gold transition-colors underline decoration-gold/30">método de Psicoanálisis Directo</a>, trabajamos para que comprendas el origen de tu sufrimiento y puedas transformar tu relación con él de forma definitiva. Mediante{" "}<Link href="/enfoque" className="text-gold hover:text-gold/80 underline underline-offset-2">nuestro enfoque psicoanalítico</Link>, identificamos el origen del malestar en{" "}<Link href="/servicios/terapia-individual" className="text-gold hover:text-gold/80 underline underline-offset-2">sesiones individuales</Link> presenciales o a distancia.
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
        <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-4">
                Volver a{" "}
                <span className="text-gold italic font-light">Sentir</span>
              </h2>
              <p className="text-navy/60 max-w-lg mx-auto font-light">
                El objetivo no es dejar de estar triste. Es reconectar con el deseo de vivir plenamente.
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
                href={bookingUrl("cierre-depresion")}
                className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                Solicitar Valoración
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 bg-white border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              La depresión y la ansiedad comparten raíces profundas. Muchos de nuestros pacientes presentan también{" "}
              <a href="/ansiedad" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">trastorno de ansiedad generalizada</a>,{" "}
              <a href="/crisis-de-panico" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">crisis de pánico</a> o{" "}
              <a href="/ludopatia" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">adicciones</a> vinculadas al vacío depresivo.
              Ofrecemos <a href="/servicios/terapia-individual" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia individual</a> y{" "}
              <a href="/servicios/dimension-familiar" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia familiar</a> en Canet de Mar (Maresme) y{" "}
              <a href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia online</a> para toda Catalunya y España.
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
