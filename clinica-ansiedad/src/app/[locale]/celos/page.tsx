"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { CheckCircle2, Heart, ShieldCheck, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CelosHero from "@/components/heroes/CelosHero";
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
  "Necesidad compulsiva de verificar la fidelidad de la pareja.",
  "Pensamientos intrusivos y rumiación constante sobre el otro.",
  "Interrogatorios repetitivos que deterioran la relación.",
  "Vigilancia del móvil, redes sociales o movimientos del otro.",
  "Sensación de amenaza ante cualquier persona del entorno.",
  "Baja autoestima profundamente vinculada al vínculo afectivo.",
  "Explosiones de rabia o llanto incontrolables.",
  "Incapacidad de confiar aunque no existan motivos reales.",
];

const types = [
  {
    title: "Celos normales",
    desc: "Estados afectivos presentes en todos. Aparecen especialmente en la infancia y en el inicio de relaciones importantes. No interfieren en la vida cotidiana.",
  },
  {
    title: "Celos patológicos",
    desc: "Cuando la intensidad supera cualquier proporcionalidad con la realidad. Se convierten en una tortura continua para quien los padece y para su entorno.",
  },
  {
    title: "Celos retroactivos",
    desc: "Sufrimiento por el pasado de la pareja —sus relaciones anteriores, sus experiencias— sobre el que no existe ningún control posible.",
  },
  {
    title: "Celos proyectivos",
    desc: "El sujeto atribuye al otro sus propios deseos inconscientes. Lo que teme del otro es, en realidad, lo que teme de sí mismo.",
  },
];

const phases = [
  {
    num: "01",
    title: "Evaluación del Origen",
    desc: "Exploramos la historia afectiva: los primeros vínculos de apego, los modelos relacionales interiorizados, las pérdidas no elaboradas que alimentan el miedo al abandono.",
  },
  {
    num: "02",
    title: "Identificación del Conflicto",
    desc: "Los celos patológicos siempre encubren otra cosa —baja autoestima, heridas de infancia, desconfianza estructural. Nombrarlo es el primer paso para desactivarlo.",
  },
  {
    num: "03",
    title: "Trabajo sobre la Autoestima",
    desc: "Construimos una relación contigo mismo desde la cual ya no necesites la verificación constante del otro para sentirte valioso y querido.",
  },
  {
    num: "04",
    title: "Consolidación",
    desc: "Los celos dejan de ser el eje de tu vida afectiva. Emergen vínculos basados en la confianza real, no en el control y la vigilancia.",
  },
];

const benefits = [
  {
    Icon: Heart,
    title: "Vínculos Sanos",
    desc: "Relaciones basadas en la confianza genuina, no en la verificación constante ni el miedo al abandono.",
  },
  {
    Icon: ShieldCheck,
    title: "Paz Interior",
    desc: "Fin de la rumiación obsesiva. La mente deja de estar secuestrada por pensamientos intrusivos sobre el otro.",
  },
  {
    Icon: Users,
    title: "Autoestima Real",
    desc: "Tu valor deja de depender de la mirada o la fidelidad del otro. Construyes una seguridad que viene de dentro.",
  },
];

export default function CelosPage() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
      <Navbar />
      <main className="pt-24">
        <CelosHero />

        {/* ===== QUÉ SON LOS CELOS ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Comprender
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                Los celos: de lo normal a lo patológico
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
                Los celos son unos estados afectivos normales —todo el mundo los tiene en algún momento u otro de su vida, pero sobre todo en la infancia. El problema aparece cuando trascienden su función adaptativa y se convierten en una prisión.
              </motion.p>
              <motion.p variants={inView}>
                Los celos patológicos no tienen que ver con la conducta real del otro. Tienen que ver con{" "}
                <strong className="text-navy font-semibold">heridas internas no resueltas</strong>: miedo al abandono, baja autoestima, desconfianza básica aprendida en los primeros vínculos. El otro es el escenario, pero el conflicto está dentro. Cuando los celos afectan la relación de pareja, puede ser necesario complementar con{" "}<Link href="/servicios/terapia-de-pareja" className="text-gold hover:text-gold/80 underline underline-offset-2">terapia de pareja</Link>.
              </motion.p>
            </motion.div>

            {/* Tipos */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {types.map((item, i) => (
                <motion.div key={i} variants={inView}>
                  <Card className="bg-white border border-navy/5 hover:border-gold/20 transition-all shadow-none h-full">
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
                Los celos patológicos se manifiestan de formas muy concretas. Si te identificas con varios de estos patrones, no estás «loco» —estás sufriendo algo que tiene solución.
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

        {/* ===== ORIGEN ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Origen
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                Por qué aparecen los celos patológicos
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
                Los celos patológicos no surgen de la nada. Son el síntoma de una estructura psíquica que aprendió que el amor es escaso, que el abandono es inevitable, que uno no es suficientemente valioso para ser elegido y retenido.
              </motion.p>
              <motion.p variants={inView}>
                Esa aprendizaje viene de lejos —de relaciones de apego tempranas, de experiencias de traición real que dejaron una marca, de modelos familiares donde los celos formaban parte del paisaje afectivo cotidiano. Los celos frecuentemente se acompañan de{" "}<Link href="/ansiedad" className="text-gold hover:text-gold/80 underline underline-offset-2">ansiedad intensa</Link> que requiere tratamiento conjunto.
              </motion.p>
            </motion.div>

            {/* Pullquote */}
            <motion.div
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="my-14 flex gap-6 items-start"
            >
              <div className="w-1 bg-gold rounded-full shrink-0 self-stretch" />
              <div>
                <p className="font-serif text-2xl md:text-3xl text-navy italic leading-snug font-light">
                  &ldquo;Los celos no son una debilidad moral ni una señal de amor intenso. Son la expresión de una herida que lleva demasiado tiempo sin ser atendida.&rdquo;
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
                Cómo trabajamos los celos
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-16 max-w-2xl">
                No se trata de aprender a «gestionar» los celos. Se trata de comprender qué herida los origina —y sanarla. En nuestra consulta de Canet de Mar (Maresme), trabajamos los celos patológicos con{" "}<Link href="/enfoque" className="text-gold hover:text-gold/80 underline underline-offset-2">psicoanálisis directo</Link>, presencial y{" "}<Link href="/terapia-online" className="text-gold hover:text-gold/80 underline underline-offset-2">online</Link> para toda Catalunya.
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
                Una vida{" "}
                <span className="text-gold italic font-light">sin el peso de los celos</span>
              </h2>
              <p className="text-navy/60 max-w-lg mx-auto font-light">
                El objetivo no es dejar de querer. Es aprender a querer desde la seguridad, no desde el miedo.
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
                href={bookingUrl("cierre-celos")}
                className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                Solicitar Valoración
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              Los celos patológicos generan{" "}
              <a href="/ansiedad" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">ansiedad intensa</a> y pueden derivar en{" "}
              <a href="/crisis-de-panico" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">crisis de pánico</a> o{" "}
              <a href="/depresion" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">depresión</a>.
              Psicoanalista especialista en celos en Canet de Mar (Maresme). Ofrecemos{" "}
              <a href="/servicios/terapia-de-pareja" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia de pareja</a> y{" "}
              <a href="/servicios/terapia-individual" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia individual</a> en Canet de Mar (Maresme) y{" "}
              <a href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia online</a> para toda Catalunya.
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
