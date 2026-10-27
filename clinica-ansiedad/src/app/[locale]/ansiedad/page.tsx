"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { CheckCircle2, ShieldCheck, HeartPulse, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
// Link con prefijo de idioma: los <Link> de next/link sin prefijo acaban
// redirigidos a /es aunque el visitante navegue en /ca.
import { Link as LocaleLink } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnsiedadHero from "@/components/heroes/AnsiedadHero";
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
  "Palpitaciones intensas o taquicardia sin causa médica.",
  "Hiperventilación y sensación constante de falta de aire.",
  "Hormigueo en la cara, manos o extremidades.",
  "Presión en los oídos o sensación de taponamiento.",
  "Pinchazos en el pecho y la espalda.",
  "Latidos o pulsaciones en el estómago.",
  "Insomnio persistente o despertares con angustia.",
  "Necesidad constante de respirar profundo.",
  "Dolor en el brazo izquierdo por tensión acumulada.",
  "Sensación de pérdida de control o irrealidad.",
];

const causes = [
  { title: "Conflictos inconscientes", desc: "Tensión psíquica permanente que se expresa a través del cuerpo." },
  { title: "Mandatos familiares", desc: "Exigencias interiorizadas que generan una presión insostenible." },
  { title: "Experiencias no procesadas", desc: "Traumas encapsulados que siguen activos bajo la superficie." },
  { title: "Patrones de apego", desc: "Formas de vincularte que dificultan la regulación emocional." },
];

const phases = [
  {
    num: "01",
    title: "Evaluación Inicial",
    desc: "Una conversación clínica real —extensa, sin prisa, sin cuestionarios fríos— donde exploramos tu historia, tu contexto y el momento en que todo empezó a torcerse.",
  },
  {
    num: "02",
    title: "Identificación de Patrones",
    desc: "Localizamos las creencias limitantes y los miedos inconscientes que alimentan la ansiedad. Aquí es donde muchos pacientes dicen: «Nunca había visto esa conexión».",
  },
  {
    num: "03",
    title: "Desarticulación",
    desc: "Intervenimos directamente sobre los núcleos conflictivos. A medida que comprendes lo que estaba oculto, los síntomas pierden su razón de ser.",
  },
  {
    num: "04",
    title: "Autonomía Emocional",
    desc: "El objetivo no es que dependas de nosotros. Es que construyas una base psíquica desde la cual ya no necesites la ansiedad como defensa.",
  },
];

const benefits = [
  {
    Icon: ShieldCheck,
    title: "Autonomía Real",
    desc: "Dejarás de depender de técnicas de evitación. Desarrollarás una fortaleza interna que no necesita muletas.",
  },
  {
    Icon: HeartPulse,
    title: "Tu Cuerpo en Paz",
    desc: "Las palpitaciones, la hiperventilación, el insomnio —se desvanecen cuando se resuelve lo que los origina.",
  },
  {
    Icon: Leaf,
    title: "Sin Recaídas",
    desc: "Al trabajar sobre la estructura, los cambios son permanentes. No se trata de controlar la ansiedad, sino de que deje de producirse.",
  },
];

const stats = [
  { stat: "30+", label: "Años de experiencia" },
  { stat: "1000+", label: "Pacientes tratados" },
  { stat: "80%", label: "Alta en menos de 6 meses" },
];

export default function AnsiedadPage() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
      <Navbar />
      <main className="pt-24">
        <AnsiedadHero />

        {/* ===== QUÉ ES LA ANSIEDAD ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Comprender
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                ¿Qué es realmente la ansiedad?
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
                No es estar nervioso. No es ser débil. La ansiedad es la forma que tiene tu psiquismo de gritar cuando carga con algo que no puede procesar solo. Es una señal —intensa, molesta, a veces aterradora— pero una señal al fin y al cabo. Y tiene tratamiento. En nuestra clínica de Canet de Mar (Maresme), como psicoanalista especialista en ansiedad en el Maresme, llevamos más de tres décadas tratando el trastorno de ansiedad generalizada y sus múltiples manifestaciones en pacientes de toda Catalunya.
              </motion.p>
              <motion.p variants={inView}>
                En treinta años de consulta —primero en Barcelona y ahora en nuestra sede de Canet de Mar (Maresme)— he visto a cientos de personas convencidas de que su ansiedad era un defecto de carácter. La realidad es otra: cuando los <a href="/ansiedad" className="text-navy font-semibold hover:text-gold transition-colors underline decoration-gold/30">síntomas de ansiedad</a> invaden tu día a día, hay{" "}
                <strong className="text-navy font-semibold">conflictos emocionales profundos</strong> que están alimentando esa respuesta. Mientras no se aborden, la ansiedad seguirá encontrando la manera de hacerse oír. Cuando la ansiedad escala, puede derivar en{" "}<Link href="/crisis-de-panico" className="text-gold hover:text-gold/80 underline underline-offset-2">crisis de pánico</Link> o coexistir con{" "}<Link href="/depresion" className="text-gold hover:text-gold/80 underline underline-offset-2">depresión</Link>.
              </motion.p>
            </motion.div>

            {/* Pullquote */}
            <motion.div
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="my-14 flex gap-6 items-start"
            >
              <div className="w-1 bg-gold rounded-full shrink-0 self-stretch" />
              <div>
                <p className="font-serif text-2xl md:text-3xl text-navy italic leading-snug font-light">
                  &ldquo;La ansiedad no es tu enemiga. Es la solución desesperada que tu psiquismo encontró cuando no tenía otros recursos.&rdquo;
                </p>
                <p className="mt-4 font-bold tracking-[0.2em] uppercase text-xs text-navy/50">
                  Joan Ramon Soto · Psicoanalista / Psicoterapeuta
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== SÍNTOMAS ===== */}
        <section className="py-20 md:py-24 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-navy/8 text-navy border border-navy/10 text-[10px] font-bold uppercase tracking-widest mb-6">
                Síntomas
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-4">
                Síntomas que quizás no reconoces
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10 max-w-2xl">
                Muchos pacientes llegan después de visitar urgencias varias veces convencidos de tener un problema cardíaco. No lo tenían. Las <a href="/crisis-de-panico" className="text-navy font-semibold hover:text-gold transition-colors underline decoration-gold/30">palpitaciones por ansiedad</a> y las <a href="/crisis-de-panico" className="text-navy font-semibold hover:text-gold transition-colors underline decoration-gold/30">crisis de pánico</a> imitan síntomas cardíacos. Su cuerpo expresaba un dolor que la mente no podía verbalizar.
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

            <motion.p
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-navy/60 text-lg leading-relaxed mt-8"
            >
              Si te reconoces en tres o más síntomas, no eres un caso perdido. Eres alguien cuyo cuerpo lleva tiempo pidiendo ayuda. La buena noticia: tiene tratamiento.
            </motion.p>
          </div>
        </section>

        {/* ===== CAUSAS ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Origen
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                Causas de la ansiedad que nadie te cuenta
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
                En internet encontrarás que las causas de la ansiedad son el estrés, la genética, los «desequilibrios químicos». Todo eso es parcialmente cierto y profundamente insuficiente.
              </motion.p>
              <motion.p variants={inView}>
                La ansiedad crónica se sostiene sobre{" "}
                <strong className="text-navy font-semibold">conflictos inconscientes</strong> que vienen de lejos: mandatos familiares que interiorizaste sin cuestionar, experiencias traumáticas que tu psiquismo encapsuló, patrones de apego que aprendiste antes de saber qué era el apego.
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {causes.map((item, i) => (
                <motion.div key={i} variants={inView}>
                  <Card className="bg-white border border-navy/5 hover:border-gold/20 transition-all hover:-translate-y-1 shadow-none h-full">
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

        {/* ===== CÓMO SE CURA ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-sage/20 text-navy border border-sage/30 text-[10px] font-bold uppercase tracking-widest mb-6">
                Tratamiento
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-6">
                Cómo se cura la ansiedad
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-16 max-w-2xl">
                No con parches. No aprendiendo a «convivir» con ella. Se cura yendo al origen —y el origen siempre es más profundo de lo que parece. Nuestro{" "}<Link href="/enfoque" className="text-gold hover:text-gold/80 underline underline-offset-2">método de psicoanálisis directo</Link> aborda las causas de la ansiedad desde la raíz, en consulta presencial en Canet de Mar (Maresme) o mediante{" "}<Link href="/terapia-online" className="text-gold hover:text-gold/80 underline underline-offset-2">terapia online</Link> para pacientes de Lleida, Tarragona, Girona y toda España.
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

        {/* ===== STATS ===== */}
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.p
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-navy/50 text-lg mb-12 leading-relaxed max-w-xl mx-auto"
            >
              Tres décadas dedicadas exclusivamente al tratamiento de la ansiedad, el pánico y la <a href="/depresion" className="text-navy/70 hover:text-gold transition-colors underline decoration-gold/30">depresión</a> en Canet de Mar (Maresme) y toda Catalunya —Barcelona, Girona, Tarragona, Lleida— presencial y <a href="/terapia-online" className="text-navy/70 hover:text-gold transition-colors underline decoration-gold/30">online para toda España</a>. Psicoanalista especialista en ansiedad en el Maresme, referente en Catalunya.
            </motion.p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((item, i) => (
                <motion.div key={i} variants={inView} className="text-center">
                  <p className="font-serif text-4xl md:text-5xl text-gold font-bold mb-2">{item.stat}</p>
                  <p className="text-navy/60 text-sm font-medium">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
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
                Más Allá del{" "}
                <span className="text-gold italic font-light">Alivio Temporal</span>
              </h2>
              <p className="text-navy/60 max-w-lg mx-auto font-light">
                No gestionamos la ansiedad. Resolvemos las causas que la generan.
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
                href={bookingUrl("medio-ansiedad")}
                className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                Solicitar Valoración Gratuita
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 bg-white border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              La ansiedad rara vez aparece sola. Muchos pacientes presentan también{" "}
              <a href="/depresion" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">depresión y ansiedad combinadas</a>,{" "}
              <a href="/crisis-de-panico" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">crisis de pánico</a> o{" "}
              <a href="/celos" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">celos patológicos</a> vinculados a la angustia de base.
              Ofrecemos <a href="/servicios/terapia-individual" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia individual</a>,{" "}
              <a href="/servicios/terapia-de-pareja" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia de pareja</a> y{" "}
              <a href="/servicios/dimension-familiar" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia familiar</a> en nuestra{" "}
              <LocaleLink href={"/psicologo-maresme" as never} className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">consulta de Canet de Mar (Maresme)</LocaleLink> y{" "}
              <a href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia online</a> para pacientes de toda Catalunya y España.
            </p>
            <p className="text-navy/50 text-sm leading-relaxed mt-4">
              Consulta presencial en Canet de Mar (Maresme) y terapia online para toda Catalunya, con{" "}
              <LocaleLink href={"/psicologo-maresme" as never} className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">psicoanalista en el Maresme</LocaleLink> en la{" "}
              <LocaleLink href="/" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">Clínica de la Ansiedad</LocaleLink>.
            </p>
            <p className="text-navy/50 text-sm leading-relaxed mt-4">
              ¿Representas a una empresa? Ofrecemos también un{" "}
              <a href="/taller-gestion-estres-empresas" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">taller práctico de gestión del estrés y la ansiedad para empresas</a>: un programa presencial de prevención y entrenamiento de herramientas para equipos.
            </p>
          </div>
        </section>

        {/* ===== LOCAL CANET DE MAR / MARESME ===== */}
        {/* H2 con la keyword local exacta: la consulta está en Canet de Mar y el
            área de servicio es el Maresme. Este bloque es la señal on-page.
            OJO: en texto visible siempre "psicoanalista", nunca "psicólogo". */}
        <section className="py-20 md:py-24 px-4 md:px-8 bg-cream">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Canet de Mar · Maresme
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-8">
                ¿Buscas psicoanalista para la ansiedad en el Maresme?
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
                Lo que encontrarás aquí es otra cosa: un{" "}
                <strong className="text-navy font-semibold">psicoanalista especialista en ansiedad</strong>. La diferencia importa — no trabajamos con técnicas para gestionar el síntoma, sino con el origen que lo produce. Atendemos desde 1993 a pacientes de todo el Maresme —Arenys de Mar, Arenys de Munt, Sant Pol, Calella, Mataró, Pineda, Malgrat, Montgat— y también de Barcelona. La consulta presencial está en{" "}
                <LocaleLink href={"/psicologo-maresme" as never} className="text-gold hover:text-gold/80 underline underline-offset-2">Canet de Mar (Maresme)</LocaleLink>, a 40 minutos del centro de Barcelona en coche o R1, con la tranquilidad —y la discreción— que no siempre ofrece una consulta en el Eixample. Y para quien prefiere no desplazarse, la{" "}
                <LocaleLink href={"/terapia-online" as never} className="text-gold hover:text-gold/80 underline underline-offset-2">terapia online</LocaleLink> mantiene el mismo método y el mismo terapeuta.
              </motion.p>
              <motion.p variants={inView}>
                Sesiones en <strong className="text-navy font-semibold">castellano y catalán</strong>, con un psicoanalista con más de 30 años dedicados específicamente al tratamiento de la ansiedad, las crisis de pánico y la depresión.
              </motion.p>
            </motion.div>
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10">
              <Button
                as="a"
                href={bookingUrl("cierre-ansiedad")}
                className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                Primera Valoración Gratuita
              </Button>
            </motion.div>
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
