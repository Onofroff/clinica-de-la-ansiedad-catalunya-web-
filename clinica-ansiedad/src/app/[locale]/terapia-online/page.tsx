"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import { Link as LocaleLink } from "@/i18n/routing";
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

const linkClass = "text-gold hover:text-gold/80 underline underline-offset-2";
const footLinkClass = "text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30";

// Textos de la página en castellano y catalán. La consulta presencial está en
// Canet de Mar (Maresme); "Barcelona" solo aparece como lugar de residencia de
// pacientes online, nunca como ubicación de la consulta.
const CONTENT = {
  es: {
    reasons: [
      "Eficacia avalada por la evidencia científica.",
      "Accesible desde toda España y el extranjero.",
      "Ideal para agorafobia y fobia social.",
      "Flexibilidad horaria real.",
      "Tu propio espacio: entorno familiar y seguro.",
      "Sin desplazamientos, sin esperas, sin excusas.",
    ],
    steps: [
      { num: "01", title: "Contacta", desc: "Escríbenos o llámanos para agendar tu primera sesión. Resolveremos cualquier duda sobre el proceso, la duración y el enfoque terapéutico." },
      { num: "02", title: "Conéctate", desc: "Solo necesitas un dispositivo con cámara y conexión estable. Te enviamos las instrucciones y el enlace de acceso con antelación. Sin complicaciones." },
      { num: "03", title: "Trabaja", desc: "Cada sesión tiene la misma duración y estructura que una consulta presencial. Misma profundidad. Mismo compromiso. La pantalla no reduce la calidad del tratamiento." },
      { num: "04", title: "Avanza", desc: "Entre sesiones, mantenemos disponibilidad para consultas breves si surge una crisis. Tu proceso no se detiene al cerrar la videollamada." },
    ],
    profiles: [
      { title: "Agorafobia o fobia social", desc: "Cuando salir de casa genera un sufrimiento intenso, la terapia online permite empezar desde un entorno seguro." },
      { title: "Lejos del Maresme", desc: "Desde Barcelona, Girona, Lleida, Tarragona o cualquier punto de España y del mundo hispanohablante." },
      { title: "Expatriados", desc: "Españoles en el extranjero que necesitan un profesional que comprenda su contexto cultural y lingüístico." },
      { title: "Agendas exigentes", desc: "Profesionales que necesitan flexibilidad sin sacrificar la calidad del tratamiento." },
      { title: "Continuidad", desc: "Pacientes presenciales que, por viajes o cambios de residencia, quieren seguir sin interrupciones." },
    ],
    evidenceChip: "Evidencia",
    evidenceTitle: "Por qué la terapia online funciona",
    evidence1a: "La investigación es concluyente: la terapia online es igual de eficaz que la presencial para trastornos de ansiedad, crisis de pánico y depresión. Estudios publicados en ",
    evidence1b: " lo confirman repetidamente. La clave no es la presencia física —es la calidad del vínculo terapéutico. Tratamos ",
    anxiety: "ansiedad",
    panic: "crisis de pánico",
    depression: "depresión",
    and: " y ",
    evidence1c: " con la misma eficacia que en consulta presencial.",
    evidence2: "Con más de 30 años de experiencia clínica, la terapia online no es para nosotros una adaptación de última hora. Cada sesión online mantiene la misma estructura clínica, la misma profundidad analítica y el mismo compromiso que las consultas presenciales en Canet de Mar (Maresme). Atendemos en castellano y en catalán.",
    quote: "La distancia física nunca ha sido un obstáculo para la profundidad clínica. Lo que cura es el vínculo terapéutico, y ese vínculo se construye con escucha, rigor y compromiso —no con proximidad geográfica.",
    quoteAuthor: "Joan Ramon Soto Cifuentes · Psicoanalista / Psicoterapeuta",
    processChip: "Proceso",
    processTitle: "Así de sencillo",
    processIntro: "Hemos eliminado toda la complejidad técnica para que tú solo tengas que preocuparte de una cosa: empezar.",
    whoChip: "¿Es para ti?",
    whoTitle: "Quién se beneficia más",
    whoIntro: "La terapia online es especialmente eficaz cuando las circunstancias dificultan la consulta presencial. Pero también para quienes simplemente prefieren la comodidad de su propio espacio. Atendemos a pacientes de Barcelona, Girona, Lleida, Tarragona, el Maresme y toda Catalunya, además de cualquier punto de España.",
    experienceTitle: "Treinta años de experiencia",
    experienceText: "Más de mil pacientes atendidos desde 1993. No improvisamos. Sabemos cómo generar un vínculo terapéutico sólido y eficaz también a través de una pantalla.",
    cta: "Solicitar Primera Sesión Online",
    related1: "La terapia online es especialmente eficaz para el tratamiento de ",
    related2: ". También atendemos ",
    jealousy: "celos patológicos",
    gambling: "ludopatía",
    related3: " online. Terapia online para pacientes de Barcelona y toda Catalunya —Girona, Lleida, Tarragona, el Maresme— y del resto de España. Si prefieres la consulta presencial, atendemos también como ",
    local: "psicoanalista en el Maresme",
    related4: ", en Canet de Mar.",
  },
  ca: {
    reasons: [
      "Eficàcia avalada per l'evidència científica.",
      "Accessible des de tot Catalunya, Espanya i l'estranger.",
      "Ideal per a l'agorafòbia i la fòbia social.",
      "Flexibilitat horària real.",
      "El teu propi espai: un entorn familiar i segur.",
      "Sense desplaçaments, sense esperes, sense excuses.",
    ],
    steps: [
      { num: "01", title: "Contacta", desc: "Escriu-nos o truca'ns per concertar la primera sessió. Resoldrem qualsevol dubte sobre el procés, la durada i l'enfocament terapèutic." },
      { num: "02", title: "Connecta't", desc: "Només necessites un dispositiu amb càmera i una connexió estable. T'enviem les instruccions i l'enllaç d'accés amb antelació. Sense complicacions." },
      { num: "03", title: "Treballa", desc: "Cada sessió té la mateixa durada i estructura que una consulta presencial. La mateixa profunditat. El mateix compromís. La pantalla no redueix la qualitat del tractament." },
      { num: "04", title: "Avança", desc: "Entre sessions mantenim disponibilitat per a consultes breus si sorgeix una crisi. El teu procés no s'atura en tancar la videotrucada." },
    ],
    profiles: [
      { title: "Agorafòbia o fòbia social", desc: "Quan sortir de casa genera un patiment intens, la teràpia en línia permet començar des d'un entorn segur." },
      { title: "Lluny del Maresme", desc: "Des de Barcelona, Girona, Lleida, Tarragona o qualsevol punt de Catalunya i d'Espanya." },
      { title: "Persones expatriades", desc: "Catalans i espanyols a l'estranger que necessiten un professional que entengui el seu context cultural i lingüístic." },
      { title: "Agendes exigents", desc: "Professionals que necessiten flexibilitat sense renunciar a la qualitat del tractament." },
      { title: "Continuïtat", desc: "Pacients presencials que, per viatges o canvis de residència, volen continuar sense interrupcions." },
    ],
    evidenceChip: "Evidència",
    evidenceTitle: "Per què funciona la teràpia en línia",
    evidence1a: "La recerca és concloent: la teràpia en línia és igual d'eficaç que la presencial per als trastorns d'ansietat, les crisis de pànic i la depressió. Estudis publicats a ",
    evidence1b: " ho confirmen repetidament. La clau no és la presència física, sinó la qualitat del vincle terapèutic. Tractem l'",
    anxiety: "ansietat",
    panic: "crisis de pànic",
    depression: "depressió",
    and: " i ",
    evidence1c: " amb la mateixa eficàcia que a la consulta presencial.",
    evidence2: "Amb més de 30 anys d'experiència clínica, la teràpia en línia no és per a nosaltres una adaptació d'última hora. Cada sessió en línia manté la mateixa estructura clínica, la mateixa profunditat analítica i el mateix compromís que les consultes presencials a Canet de Mar (Maresme). Atenem en català i en castellà.",
    quote: "La distància física mai no ha estat un obstacle per a la profunditat clínica. El que cura és el vincle terapèutic, i aquest vincle es construeix amb escolta, rigor i compromís, no amb proximitat geogràfica.",
    quoteAuthor: "Joan Ramon Soto Cifuentes · Psicoanalista / Psicoterapeuta",
    processChip: "Procés",
    processTitle: "Així de senzill",
    processIntro: "Hem eliminat tota la complexitat tècnica perquè només t'hagis de preocupar d'una cosa: començar.",
    whoChip: "És per a tu?",
    whoTitle: "Qui se'n beneficia més",
    whoIntro: "La teràpia en línia és especialment eficaç quan les circumstàncies dificulten la consulta presencial. Però també per a qui simplement prefereix la comoditat del seu propi espai. Atenem pacients de Barcelona, Girona, Lleida, Tarragona, el Maresme i tot Catalunya, a més de qualsevol punt d'Espanya.",
    experienceTitle: "Trenta anys d'experiència",
    experienceText: "Més de mil pacients atesos des de 1993. No improvisem. Sabem com generar un vincle terapèutic sòlid i eficaç també a través d'una pantalla.",
    cta: "Sol·licitar la primera sessió en línia",
    related1: "La teràpia en línia és especialment eficaç per al tractament de l'",
    related2: ". També atenem ",
    jealousy: "gelosia patològica",
    gambling: "ludopatia",
    related3: " en línia. Teràpia en línia per a pacients de Barcelona i de tot Catalunya —Girona, Lleida, Tarragona, el Maresme— i de la resta d'Espanya. Si prefereixes la consulta presencial, també atenem com a ",
    local: "psicoanalista al Maresme",
    related4: ", a Canet de Mar.",
  },
};

export default function TerapiaOnlinePage() {
  const locale = useLocale();
  const c = locale === "ca" ? CONTENT.ca : CONTENT.es;

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
                {c.evidenceChip}
              </Chip>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                {c.evidenceTitle}
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
                {c.evidence1a}
                <em>The Lancet Psychiatry</em> {locale === "ca" ? "i" : "y"} <em>Journal of Anxiety Disorders</em>
                {c.evidence1b}
                <LocaleLink href="/ansiedad" className={linkClass}>{c.anxiety}</LocaleLink>,{" "}
                <LocaleLink href="/crisis-de-panico" className={linkClass}>{c.panic}</LocaleLink>
                {c.and}
                <LocaleLink href="/depresion" className={linkClass}>{c.depression}</LocaleLink>
                {c.evidence1c}
              </motion.p>
              <motion.p variants={inView}>{c.evidence2}</motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-3"
            >
              {c.reasons.map((item, i) => (
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
                  &ldquo;{c.quote}&rdquo;
                </p>
                <p className="mt-5 font-bold tracking-[0.2em] uppercase text-xs text-navy/50">
                  {c.quoteAuthor}
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
                {c.processChip}
              </Chip>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                {c.processTitle}
              </h2>
              <p className="text-navy/70 text-lg leading-relaxed mb-16 max-w-3xl">
                {c.processIntro}
              </p>
            </motion.div>

            <div className="space-y-6">
              {c.steps.map((step, i) => (
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
                {c.whoChip}
              </Chip>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                {c.whoTitle}
              </h2>
              <p className="text-navy/70 text-lg leading-relaxed mb-10 max-w-3xl">
                {c.whoIntro}
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 mb-10"
            >
              {c.profiles.map((p, i) => (
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

            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card className="bg-navy border-0 shadow-none">
                <CardBody className="p-6 md:p-8">
                  <h3 className="font-serif text-xl font-bold text-white mb-2">{c.experienceTitle}</h3>
                  <p className="text-white/65">{c.experienceText}</p>
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
                {c.cta}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              {c.related1}
              <LocaleLink href="/ansiedad" className={footLinkClass}>{c.anxiety}</LocaleLink>,{" "}
              <LocaleLink href="/depresion" className={footLinkClass}>{c.depression}</LocaleLink>
              {c.and}
              <LocaleLink href="/crisis-de-panico" className={footLinkClass}>{c.panic}</LocaleLink>
              {c.related2}
              <LocaleLink href="/celos" className={footLinkClass}>{c.jealousy}</LocaleLink>
              {c.and}
              <LocaleLink href="/ludopatia" className={footLinkClass}>{c.gambling}</LocaleLink>
              {c.related3}
              <LocaleLink href="/psicologo-maresme" className={footLinkClass}>{c.local}</LocaleLink>
              {c.related4}
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
