"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { CheckCircle2, ShieldCheck, Brain, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingOptions from "@/components/servicios/BookingOptions";
import FAQSection from "@/components/sections/FAQSection";
import TerapiaIndividualHero from "@/components/heroes/TerapiaIndividualHero";
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
  "Crisis de ansiedad o ataques de pánico repentinos.",
  "Sensación constante de inseguridad, miedo paralizante o fobia social.",
  "Tristeza profunda prolongada, apatía o síntomas de depresión.",
  "Pensamientos obsesivos, rumiación mental o hipocondría.",
  "Dificultades de autoestima, dependencia emocional o bloqueos personales.",
  "Estrés laboral crónico, Burnout o insatisfacción vital.",
];

const phases = [
  {
    num: "01",
    title: "Evaluación Inicial",
    desc: "Una primera entrevista extensa para entender tu contexto, tu historia vital y el origen exacto del malestar.",
  },
  {
    num: "02",
    title: "Identificación de Patrones",
    desc: "Localizamos las creencias limitantes, miedos inconscientes y patrones de conducta que alimentan la ansiedad o depresión.",
  },
  {
    num: "03",
    title: "Estrategias de Regulación",
    desc: "Desarrollamos herramientas prácticas para afrontar las crisis de ansiedad y recuperar tu funcionalidad en el día a día.",
  },
  {
    num: "04",
    title: "Cambio Estructural",
    desc: "Trabajamos en la raíz del problema para prevenir recaídas, consolidar la autoestima y alcanzar un equilibrio emocional sólido y duradero.",
  },
];

const benefits = [
  {
    Icon: ShieldCheck,
    title: "Autonomía Emocional",
    desc: "Dejarás de depender de técnicas de evitación o analgésicos mentales. Desarrollarás una fortaleza interna real frente a las adversidades.",
  },
  {
    Icon: Brain,
    title: "Claridad Mental",
    desc: "Al desactivar los conflictos inconscientes, la rumiación obsesiva y el ruido mental disminuyen drásticamente, permitiendo mayor enfoque y paz.",
  },
  {
    Icon: Leaf,
    title: "Relaciones Sanas",
    desc: "Aprenderás a transitar el vínculo con los demás desde la seguridad personal, estableciendo límites sin culpa ni miedo al abandono.",
  },
];

const stats = [
  { value: "+25", label: "Años de experiencia clínica", color: "text-gold" },
  { value: "+1K", label: "Pacientes acompañados", color: "text-sage" },
];

export default function TerapiaIndividualPage() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
      <Navbar />
      <main>
        <TerapiaIndividualHero />

        {/* ===== PARA QUIÉN ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                ¿Es para ti?
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-6">
                ¿Para quién es la Terapia Individual?
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10 max-w-2xl">
                Muchas personas acuden a nosotros cuando ya han probado otras vías sin éxito. Si te reconoces en alguna de estas situaciones, podemos ayudarte: Consulta presencial en Canet de Mar (Maresme) y{" "}<Link href="/terapia-online" className="text-gold hover:text-gold/80 underline underline-offset-2">terapia online</Link> para toda Catalunya.
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
                <motion.div key={i} variants={inView} className="flex items-start gap-3 py-3 px-4 rounded-xl hover:bg-cream/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
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
                  <h3 className="font-serif text-xl font-bold text-navy mb-2">Resultados esperados</h3>
                  <p className="text-navy/70">
                    Recuperación de la tranquilidad, mayor seguridad en la toma de decisiones, mejora sustancial en las relaciones interpersonales y desaparición gradual de los síntomas incapacitantes.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* ===== ENFOQUE ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-navy/8 text-navy border border-navy/10 text-[10px] font-bold uppercase tracking-widest mb-6">
                Proceso
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-6">
                Cómo trabajamos
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-16 max-w-2xl">
                A diferencia de terapias que solo intentan «tapar» el síntoma a corto plazo, buscamos una comprensión profunda de aquello que origina tu sufrimiento emocional. Nuestro{" "}<Link href="/enfoque" className="text-gold hover:text-gold/80 underline underline-offset-2">enfoque de psicoanálisis directo</Link> trata{" "}<Link href="/ansiedad" className="text-gold hover:text-gold/80 underline underline-offset-2">ansiedad</Link>,{" "}<Link href="/depresion" className="text-gold hover:text-gold/80 underline underline-offset-2">depresión</Link>,{" "}<Link href="/crisis-de-panico" className="text-gold hover:text-gold/80 underline underline-offset-2">crisis de pánico</Link>, hipocondría y TOC.
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

        {/* ===== STATS + PULLQUOTE ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="space-y-6"
              >
                <motion.div variants={inView}>
                  <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                    Experiencia
                  </Chip>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                    Guiados por la experiencia clínica
                  </h2>
                </motion.div>
                <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
                  {stats.map(({ value, label, color }, i) => (
                    <motion.div key={i} variants={inView}>
                      <Card className="bg-cream border border-navy/5 shadow-none">
                        <CardBody className="p-6 text-center">
                          <p className={`font-serif text-4xl font-bold ${color} mb-1`}>{value}</p>
                          <p className="text-navy/50 text-xs font-medium leading-tight">{label}</p>
                        </CardBody>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                variants={inView}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="w-1 bg-gold rounded-full shrink-0 self-stretch" />
                <div>
                  <p className="font-serif text-xl md:text-2xl text-navy italic leading-snug font-light">
                    &ldquo;Dar el primer paso y pedir ayuda indica un acto de valentía extraordinario. Nuestro compromiso es recibir ese acto con rigor clínico y confidencialidad absoluta.&rdquo;
                  </p>
                  <p className="mt-5 font-bold tracking-[0.2em] uppercase text-xs text-navy/50">
                    Joan Ramon Soto Cifuentes · Psicoanalista / Psicoterapeuta
                  </p>
                  <p className="mt-3 text-navy/60 text-sm leading-relaxed">
                    En la primera sesión no te someteremos a cuestionarios fríos ni tests mecánicos. Tendremos una conversación clínica profunda para entender tu visión y el origen de tu malestar.
                  </p>
                </div>
              </motion.div>
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
                Una Transformación{" "}
                <span className="text-gold italic font-light">Estructural</span>
              </h2>
              <p className="text-base md:text-lg text-navy/70 max-w-2xl mx-auto font-light">
                Nuestro objetivo no es enseñarte a convivir con la ansiedad, sino construir los cimientos psíquicos para que no necesites recurrir a ella.
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
                href={bookingUrl("cierre-terapia-individual")}
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
              La terapia individual es el formato principal para tratar{" "}
              <a href="/ansiedad" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">ansiedad</a>,{" "}
              <a href="/depresion" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">depresión</a>,{" "}
              <a href="/crisis-de-panico" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">crisis de pánico</a>, hipocondría y TOC.
              Puede complementarse con{" "}
              <a href="/servicios/terapia-de-pareja" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia de pareja</a> o{" "}
              <a href="/servicios/dimension-familiar" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia familiar</a>.
              Consulta presencial en Canet de Mar (Maresme) y{" "}
              <a href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia online</a>:{" "}
              <a href="/psicologo-maresme" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">psicoanalista en el Maresme</a> para pacientes de toda Catalunya y España.
              Para organizaciones ofrecemos además un{" "}
              <a href="/taller-gestion-estres-empresas" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">taller de gestión del estrés y la ansiedad para empresas</a>.
              Más sobre la{" "}
              <a href="/" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">Clínica de la Ansiedad</a>.
            </p>
          </div>
        </section>

        <BookingOptions />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
