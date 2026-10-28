"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { CheckCircle2, ShieldCheck, HeartPulse, Leaf, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
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

const inlineLink = "text-gold hover:text-gold/80 underline underline-offset-2";
const strongLink = "text-navy font-semibold hover:text-gold transition-colors underline decoration-gold/30";
const footLink = "text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30";
const BENEFIT_ICONS = [ShieldCheck, HeartPulse, Leaf];

// Textos en castellano y catalán.
// OJO: en texto visible siempre "psicoanalista", nunca "psicólogo".
const CONTENT = {
  es: {
    symptoms: [
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
    ],
    causes: [
      { title: "Conflictos inconscientes", desc: "Tensión psíquica permanente que se expresa a través del cuerpo." },
      { title: "Mandatos familiares", desc: "Exigencias interiorizadas que generan una presión insostenible." },
      { title: "Experiencias no procesadas", desc: "Traumas encapsulados que siguen activos bajo la superficie." },
      { title: "Patrones de apego", desc: "Formas de vincularte que dificultan la regulación emocional." },
    ],
    phases: [
      { num: "01", title: "Evaluación Inicial", desc: "Una conversación clínica real —extensa, sin prisa, sin cuestionarios fríos— donde exploramos tu historia, tu contexto y el momento en que todo empezó a torcerse." },
      { num: "02", title: "Identificación de Patrones", desc: "Localizamos las creencias limitantes y los miedos inconscientes que alimentan la ansiedad. Aquí es donde muchos pacientes dicen: «Nunca había visto esa conexión»." },
      { num: "03", title: "Desarticulación", desc: "Intervenimos directamente sobre los núcleos conflictivos. A medida que comprendes lo que estaba oculto, los síntomas pierden su razón de ser." },
      { num: "04", title: "Autonomía Emocional", desc: "El objetivo no es que dependas de nosotros. Es que construyas una base psíquica desde la cual ya no necesites la ansiedad como defensa." },
    ],
    benefits: [
      { title: "Autonomía Real", desc: "Dejarás de depender de técnicas de evitación. Desarrollarás una fortaleza interna que no necesita muletas." },
      { title: "Tu Cuerpo en Paz", desc: "Las palpitaciones, la hiperventilación, el insomnio —se desvanecen cuando se resuelve lo que los origina." },
      { title: "Cambios Duraderos", desc: "Al trabajar sobre la estructura y no solo sobre el síntoma, el objetivo no es controlar la ansiedad, sino que deje de ser necesaria." },
    ],
    stats: [
      { stat: "30+", label: "Años de experiencia" },
      { stat: "1000+", label: "Pacientes tratados" },
      { stat: "5,0★", label: "Valoración en Google" },
    ],
    understandChip: "Comprender",
    understandTitle: "¿Qué es realmente la ansiedad?",
    understand1: "No es estar nervioso. No es ser débil. La ansiedad es la forma que tiene tu psiquismo de gritar cuando carga con algo que no puede procesar solo. Es una señal —intensa, molesta, a veces aterradora— pero una señal al fin y al cabo. Y tiene tratamiento. En nuestra clínica de Canet de Mar (Maresme), como psicoanalista especialista en ansiedad, llevamos más de tres décadas tratando el trastorno de ansiedad generalizada y sus múltiples manifestaciones en pacientes de toda Catalunya.",
    understand2a: "En treinta años de consulta —primero en Barcelona y ahora en nuestra sede de Canet de Mar (Maresme)— he visto a cientos de personas convencidas de que su ansiedad era un defecto de carácter. La realidad es otra: cuando los ",
    symptomsLink: "síntomas de ansiedad",
    attackA: "Si estás viviendo una crisis ahora mismo, aquí tienes ",
    attackLink: "qué hacer durante un ataque de ansiedad",
    understand2b: " invaden tu día a día, hay ",
    deepConflicts: "conflictos emocionales profundos",
    understand2c: " que están alimentando esa respuesta. Mientras no se aborden, la ansiedad seguirá encontrando la manera de hacerse oír. Cuando la ansiedad escala, puede derivar en ",
    panic: "crisis de pánico",
    understand2d: " o coexistir con ",
    depression: "depresión",
    quote: "La ansiedad no es tu enemiga. Es la solución desesperada que tu psiquismo encontró cuando no tenía otros recursos.",
    symptomsChip: "Síntomas",
    symptomsTitle: "Síntomas que quizás no reconoces",
    symptomsIntroA: "Muchos pacientes llegan después de visitar urgencias varias veces convencidos de tener un problema cardíaco. No lo tenían. Las ",
    palpitations: "palpitaciones por ansiedad",
    symptomsIntroB: " y las ",
    symptomsIntroC: " imitan síntomas cardíacos. Su cuerpo expresaba un dolor que la mente no podía verbalizar.",
    symptomsOutro: "Si te reconoces en tres o más síntomas, no eres un caso perdido. Eres alguien cuyo cuerpo lleva tiempo pidiendo ayuda. La buena noticia: tiene tratamiento.",
    originChip: "Origen",
    originTitle: "Causas de la ansiedad que nadie te cuenta",
    origin1: "En internet encontrarás que las causas de la ansiedad son el estrés, la genética, los «desequilibrios químicos». Todo eso es parcialmente cierto y profundamente insuficiente.",
    origin2a: "La ansiedad crónica se sostiene sobre ",
    unconscious: "conflictos inconscientes",
    origin2b: " que vienen de lejos: mandatos familiares que interiorizaste sin cuestionar, experiencias traumáticas que tu psiquismo encapsuló, patrones de apego que aprendiste antes de saber qué era el apego.",
    treatChip: "Tratamiento",
    treatTitle: "Cómo se cura la ansiedad",
    treatA: "No con parches. No aprendiendo a «convivir» con ella. Se cura yendo al origen —y el origen siempre es más profundo de lo que parece. Nuestro ",
    method: "método de psicoanálisis directo",
    treatB: " aborda las causas de la ansiedad desde la raíz, en consulta presencial en Canet de Mar (Maresme) o mediante ",
    online: "terapia online",
    treatC: " para pacientes de Barcelona, Girona, Lleida, Tarragona y toda España.",
    phase: "Fase",
    statsTextA: "Tres décadas dedicadas al tratamiento de la ansiedad, el pánico y la ",
    statsTextB: " en Canet de Mar (Maresme) y toda Catalunya —Barcelona, Girona, Tarragona, Lleida—, presencial y ",
    onlineSpain: "online para toda España",
    statsTextC: ".",
    beyondA: "Más Allá del",
    beyondB: "Alivio Temporal",
    beyondSub: "No gestionamos la ansiedad. Resolvemos las causas que la generan.",
    ctaMid: "Reservar primera sesión",
    relatedA: "La ansiedad rara vez aparece sola. Muchos pacientes presentan también ",
    depAnx: "depresión y ansiedad combinadas",
    or: " o ",
    jealousy: "celos patológicos",
    relatedB: " vinculados a la angustia de base. Ofrecemos ",
    individual: "terapia individual",
    couple: "terapia de pareja",
    and: " y ",
    family: "terapia familiar",
    relatedC: " en nuestra ",
    officeCanet: "consulta de Canet de Mar (Maresme)",
    relatedD: " y ",
    relatedE: " para pacientes de toda Catalunya y España.",
    related2A: "Consulta presencial en Canet de Mar (Maresme) y terapia online para toda Catalunya, con ",
    localPsa: "psicoanalista en el Maresme",
    related2B: " en la ",
    clinic: "Clínica de la Ansiedad Catalunya",
    company: "¿Representas a una empresa? Ofrecemos también un ",
    workshop: "taller práctico de gestión del estrés y la ansiedad para empresas",
    companyB: ": un programa presencial de prevención y entrenamiento de herramientas para equipos.",
    localChip: "Canet de Mar · Maresme",
    localTitle: "¿Buscas psicoanalista para la ansiedad en el Maresme?",
    localA: "Lo que encontrarás aquí es un ",
    localStrong: "psicoanalista especialista en ansiedad",
    localB: ". La diferencia importa: no trabajamos con técnicas para gestionar el síntoma, sino con el origen que lo produce. Atendemos desde 1993 a pacientes de todo el Maresme —Arenys de Mar, Arenys de Munt, Sant Pol, Calella, Mataró, Pineda, Malgrat, Montgat— y también de Barcelona. La consulta presencial está en ",
    localLink: "Canet de Mar (Maresme)",
    localC: ", a 40 minutos del centro de Barcelona en coche o R1, con la tranquilidad —y la discreción— que no siempre ofrece una consulta en el Eixample. Y para quien prefiere no desplazarse, la ",
    localD: " mantiene el mismo método y el mismo terapeuta.",
    langA: "Sesiones en ",
    langStrong: "castellano y catalán",
    langB: ", con un psicoanalista con más de 30 años dedicados al tratamiento de la ansiedad, las crisis de pánico y la depresión.",
    ctaEnd: "Reservar primera sesión",
  },
  ca: {
    symptoms: [
      "Palpitacions intenses o taquicàrdia sense causa mèdica.",
      "Hiperventilació i sensació constant de falta d'aire.",
      "Formigueig a la cara, a les mans o a les extremitats.",
      "Pressió a les oïdes o sensació de tenir-les tapades.",
      "Punxades al pit i a l'esquena.",
      "Batecs o pulsacions a l'estómac.",
      "Insomni persistent o despertars amb angoixa.",
      "Necessitat constant de respirar fondo.",
      "Dolor al braç esquerre per tensió acumulada.",
      "Sensació de pèrdua de control o d'irrealitat.",
    ],
    causes: [
      { title: "Conflictes inconscients", desc: "Tensió psíquica permanent que s'expressa a través del cos." },
      { title: "Mandats familiars", desc: "Exigències interioritzades que generen una pressió insostenible." },
      { title: "Experiències no processades", desc: "Traumes encapsulats que continuen actius sota la superfície." },
      { title: "Patrons d'aferrament", desc: "Maneres de vincular-te que dificulten la regulació emocional." },
    ],
    phases: [
      { num: "01", title: "Avaluació inicial", desc: "Una conversa clínica real —extensa, sense pressa, sense qüestionaris freds— on explorem la teva història, el teu context i el moment en què tot va començar a torçar-se." },
      { num: "02", title: "Identificació de patrons", desc: "Localitzem les creences limitants i les pors inconscients que alimenten l'ansietat. Aquí és on molts pacients diuen: «Mai no havia vist aquesta connexió»." },
      { num: "03", title: "Desarticulació", desc: "Intervenim directament sobre els nuclis conflictius. A mesura que comprens el que estava amagat, els símptomes perden la seva raó de ser." },
      { num: "04", title: "Autonomia emocional", desc: "L'objectiu no és que depenguis de nosaltres. És que construeixis una base psíquica des de la qual ja no necessitis l'ansietat com a defensa." },
    ],
    benefits: [
      { title: "Autonomia real", desc: "Deixaràs de dependre de tècniques d'evitació. Desenvoluparàs una fortalesa interna que no necessita crosses." },
      { title: "El teu cos en pau", desc: "Les palpitacions, la hiperventilació, l'insomni... s'esvaeixen quan es resol el que els origina." },
      { title: "Canvis duradors", desc: "Com que es treballa sobre l'estructura i no només sobre el símptoma, l'objectiu no és controlar l'ansietat, sinó que deixi de ser necessària." },
    ],
    stats: [
      { stat: "30+", label: "Anys d'experiència" },
      { stat: "1000+", label: "Pacients tractats" },
      { stat: "5,0★", label: "Valoració a Google" },
    ],
    understandChip: "Comprendre",
    understandTitle: "Què és realment l'ansietat?",
    understand1: "No és estar nerviós. No és ser feble. L'ansietat és la manera que té el teu psiquisme de cridar quan carrega amb alguna cosa que no pot processar sol. És un senyal —intens, molest, de vegades aterridor—, però un senyal al capdavall. I té tractament. A la nostra clínica de Canet de Mar (Maresme), com a psicoanalista especialista en ansietat, fa més de tres dècades que tractem el trastorn d'ansietat generalitzada i les seves múltiples manifestacions en pacients de tot Catalunya.",
    understand2a: "En trenta anys de consulta —primer a Barcelona i ara a la nostra seu de Canet de Mar (Maresme)— he vist centenars de persones convençudes que la seva ansietat era un defecte de caràcter. La realitat és una altra: quan els ",
    symptomsLink: "símptomes d'ansietat",
    attackA: "Si ara mateix estàs vivint una crisi, aquí tens ",
    attackLink: "què fer durant un atac d'ansietat",
    understand2b: " envaeixen el teu dia a dia, hi ha ",
    deepConflicts: "conflictes emocionals profunds",
    understand2c: " que alimenten aquesta resposta. Mentre no s'abordin, l'ansietat continuarà trobant la manera de fer-se sentir. Quan l'ansietat escala, pot derivar en ",
    panic: "crisis de pànic",
    understand2d: " o conviure amb la ",
    depression: "depressió",
    quote: "L'ansietat no és la teva enemiga. És la solució desesperada que el teu psiquisme va trobar quan no tenia altres recursos.",
    symptomsChip: "Símptomes",
    symptomsTitle: "Símptomes que potser no reconeixes",
    symptomsIntroA: "Molts pacients arriben després d'haver anat diverses vegades a urgències convençuts de tenir un problema cardíac. No el tenien. Les ",
    palpitations: "palpitacions per ansietat",
    symptomsIntroB: " i les ",
    symptomsIntroC: " imiten símptomes cardíacs. El seu cos expressava un dolor que la ment no podia posar en paraules.",
    symptomsOutro: "Si et reconeixes en tres o més símptomes, no ets un cas perdut. Ets algú el cos del qual fa temps que demana ajuda. La bona notícia: té tractament.",
    originChip: "Origen",
    originTitle: "Causes de l'ansietat que ningú no t'explica",
    origin1: "A internet trobaràs que les causes de l'ansietat són l'estrès, la genètica, els «desequilibris químics». Tot això és parcialment cert i profundament insuficient.",
    origin2a: "L'ansietat crònica se sosté sobre ",
    unconscious: "conflictes inconscients",
    origin2b: " que vénen de lluny: mandats familiars que vas interioritzar sense qüestionar-los, experiències traumàtiques que el teu psiquisme va encapsular, patrons d'aferrament que vas aprendre abans de saber què era l'aferrament.",
    treatChip: "Tractament",
    treatTitle: "Com es cura l'ansietat",
    treatA: "No amb pegats. No aprenent a «conviure-hi». Es cura anant a l'origen, i l'origen sempre és més profund del que sembla. El nostre ",
    method: "mètode de psicoanàlisi directa",
    treatB: " aborda les causes de l'ansietat des de l'arrel, en consulta presencial a Canet de Mar (Maresme) o mitjançant ",
    online: "teràpia en línia",
    treatC: " per a pacients de Barcelona, Girona, Lleida, Tarragona i tot Espanya.",
    phase: "Fase",
    statsTextA: "Tres dècades dedicades al tractament de l'ansietat, el pànic i la ",
    statsTextB: " a Canet de Mar (Maresme) i a tot Catalunya —Barcelona, Girona, Tarragona, Lleida—, presencialment i ",
    onlineSpain: "en línia per a tot Espanya",
    statsTextC: ".",
    beyondA: "Més enllà de",
    beyondB: "l'alleujament temporal",
    beyondSub: "No gestionem l'ansietat. Resolem les causes que la generen.",
    ctaMid: "Reservar la primera sessió",
    relatedA: "L'ansietat rarament apareix sola. Molts pacients presenten també ",
    depAnx: "depressió i ansietat combinades",
    or: " o ",
    jealousy: "gelosia patològica",
    relatedB: " vinculada a l'angoixa de base. Oferim ",
    individual: "teràpia individual",
    couple: "teràpia de parella",
    and: " i ",
    family: "teràpia familiar",
    relatedC: " a la nostra ",
    officeCanet: "consulta de Canet de Mar (Maresme)",
    relatedD: " i ",
    relatedE: " per a pacients de tot Catalunya i Espanya.",
    related2A: "Consulta presencial a Canet de Mar (Maresme) i teràpia en línia per a tot Catalunya, amb ",
    localPsa: "psicoanalista al Maresme",
    related2B: " a la ",
    clinic: "Clínica de la Ansiedad Catalunya",
    company: "Representes una empresa? També oferim un ",
    workshop: "taller pràctic de gestió de l'estrès i l'ansietat per a empreses",
    companyB: ": un programa presencial de prevenció i entrenament d'eines per a equips.",
    localChip: "Canet de Mar · Maresme",
    localTitle: "Busques un psicoanalista per a l'ansietat al Maresme?",
    localA: "El que trobaràs aquí és un ",
    localStrong: "psicoanalista especialista en ansietat",
    localB: ". La diferència importa: no treballem amb tècniques per gestionar el símptoma, sinó amb l'origen que el produeix. Des de 1993 atenem pacients de tot el Maresme —Arenys de Mar, Arenys de Munt, Sant Pol, Calella, Mataró, Pineda, Malgrat, Montgat— i també de Barcelona. La consulta presencial és a ",
    localLink: "Canet de Mar (Maresme)",
    localC: ", a 40 minuts del centre de Barcelona en cotxe o amb l'R1, amb la tranquil·litat —i la discreció— que no sempre ofereix una consulta a l'Eixample. I per a qui prefereix no desplaçar-se, la ",
    localD: " manté el mateix mètode i el mateix terapeuta.",
    langA: "Sessions en ",
    langStrong: "català i castellà",
    langB: ", amb un psicoanalista amb més de 30 anys dedicats al tractament de l'ansietat, les crisis de pànic i la depressió.",
    ctaEnd: "Reservar la primera sessió",
  },
};

export default function AnsiedadPage() {
  const locale = useLocale();
  const c = locale === "ca" ? CONTENT.ca : CONTENT.es;

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
                {c.understandChip}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                {c.understandTitle}
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-6 text-navy/70 leading-relaxed text-lg"
            >
              <motion.p variants={inView}>{c.understand1}</motion.p>
              <motion.p variants={inView}>
                {c.understand2a}
                <LocaleLink href={{ pathname: '/blog/[...slug]', params: { slug: ['cuales-son-los-sintomas-de-la-ansiedad'] } }} className={strongLink}>{c.symptomsLink}</LocaleLink>
                {c.understand2b}
                <strong className="text-navy font-semibold">{c.deepConflicts}</strong>
                {c.understand2c}
                <LocaleLink href="/crisis-de-panico" className={inlineLink}>{c.panic}</LocaleLink>
                {c.understand2d}
                <LocaleLink href="/depresion" className={inlineLink}>{c.depression}</LocaleLink>.
              </motion.p>
              <motion.p variants={inView}>
                {c.attackA}
                <LocaleLink href={{ pathname: '/blog/[...slug]', params: { slug: ['ataque-de-ansiedad-que-hacer'] } }} className={strongLink}>{c.attackLink}</LocaleLink>.
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
                  &ldquo;{c.quote}&rdquo;
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
                {c.symptomsChip}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-4">
                {c.symptomsTitle}
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10 max-w-2xl">
                {c.symptomsIntroA}
                <LocaleLink href="/crisis-de-panico" className={strongLink}>{c.palpitations}</LocaleLink>
                {c.symptomsIntroB}
                <LocaleLink href="/crisis-de-panico" className={strongLink}>{c.panic}</LocaleLink>
                {c.symptomsIntroC}
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-3"
            >
              {c.symptoms.map((item, i) => (
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
              {c.symptomsOutro}
            </motion.p>
          </div>
        </section>

        {/* ===== CAUSAS ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                {c.originChip}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                {c.originTitle}
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-6 text-navy/70 leading-relaxed text-lg mb-10"
            >
              <motion.p variants={inView}>{c.origin1}</motion.p>
              <motion.p variants={inView}>
                {c.origin2a}
                <strong className="text-navy font-semibold">{c.unconscious}</strong>
                {c.origin2b}
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {c.causes.map((item, i) => (
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
                {c.treatChip}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-6">
                {c.treatTitle}
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-16 max-w-2xl">
                {c.treatA}
                <LocaleLink href="/enfoque" className={inlineLink}>{c.method}</LocaleLink>
                {c.treatB}
                <LocaleLink href="/terapia-online" className={inlineLink}>{c.online}</LocaleLink>
                {c.treatC}
              </p>
            </motion.div>

            <div className="space-y-16 md:space-y-20">
              {c.phases.map((step, i) => (
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
                        {c.phase} {step.num}
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
              {c.statsTextA}
              <LocaleLink href="/depresion" className="text-navy/70 hover:text-gold transition-colors underline decoration-gold/30">{c.depression}</LocaleLink>
              {c.statsTextB}
              <LocaleLink href="/terapia-online" className="text-navy/70 hover:text-gold transition-colors underline decoration-gold/30">{c.onlineSpain}</LocaleLink>
              {c.statsTextC}
            </motion.p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8"
            >
              {c.stats.map((item, i) => (
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
                {c.beyondA}{" "}
                <span className="text-gold italic font-light">{c.beyondB}</span>
              </h2>
              <p className="text-navy/60 max-w-lg mx-auto font-light">{c.beyondSub}</p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            >
              {c.benefits.map(({ title, desc }, i) => {
                const Icon = BENEFIT_ICONS[i];
                return (
                  <motion.div key={i} variants={inView}>
                    <Card className="bg-cream border border-navy/5 hover:border-gold/20 transition-all hover:-translate-y-1 shadow-none h-full">
                      <CardBody className="p-6 md:p-8">
                        <Icon className="w-10 h-10 text-gold mb-5" />
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3">{title}</h3>
                        <p className="text-navy/60 leading-relaxed font-light text-sm">{desc}</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                );
              })}
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
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                {c.ctaMid}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 bg-white border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              {c.relatedA}
              <LocaleLink href="/depresion" className={footLink}>{c.depAnx}</LocaleLink>,{" "}
              <LocaleLink href="/crisis-de-panico" className={footLink}>{c.panic}</LocaleLink>
              {c.or}
              <LocaleLink href="/celos" className={footLink}>{c.jealousy}</LocaleLink>
              {c.relatedB}
              <LocaleLink href="/servicios/terapia-individual" className={footLink}>{c.individual}</LocaleLink>,{" "}
              <LocaleLink href="/servicios/terapia-de-pareja" className={footLink}>{c.couple}</LocaleLink>
              {c.and}
              <LocaleLink href="/servicios/dimension-familiar" className={footLink}>{c.family}</LocaleLink>
              {c.relatedC}
              <LocaleLink href="/psicologo-maresme" className={footLink}>{c.officeCanet}</LocaleLink>
              {c.relatedD}
              <LocaleLink href="/terapia-online" className={footLink}>{c.online}</LocaleLink>
              {c.relatedE}
            </p>
            <p className="text-navy/50 text-sm leading-relaxed mt-4">
              {c.related2A}
              <LocaleLink href="/psicologo-maresme" className={footLink}>{c.localPsa}</LocaleLink>
              {c.related2B}
              <LocaleLink href="/" className={footLink}>{c.clinic}</LocaleLink>.
            </p>
            <p className="text-navy/50 text-sm leading-relaxed mt-4">
              {c.company}
              <LocaleLink href="/taller-gestion-estres-empresas" className={footLink}>{c.workshop}</LocaleLink>
              {c.companyB}
            </p>
          </div>
        </section>

        {/* ===== LOCAL CANET DE MAR / MARESME ===== */}
        {/* H2 con la keyword local exacta: la consulta está en Canet de Mar y el
            área de servicio es el Maresme. Este bloque es la señal on-page. */}
        <section className="py-20 md:py-24 px-4 md:px-8 bg-cream">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                {c.localChip}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-8">
                {c.localTitle}
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
                {c.localA}
                <strong className="text-navy font-semibold">{c.localStrong}</strong>
                {c.localB}
                <LocaleLink href="/psicologo-maresme" className={inlineLink}>{c.localLink}</LocaleLink>
                {c.localC}
                <LocaleLink href="/terapia-online" className={inlineLink}>{c.online}</LocaleLink>
                {c.localD}
              </motion.p>
              <motion.p variants={inView}>
                {c.langA}
                <strong className="text-navy font-semibold">{c.langStrong}</strong>
                {c.langB}
              </motion.p>
            </motion.div>
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10">
              <Button
                as="a"
                href={bookingUrl("cierre-ansiedad")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                {c.ctaEnd}
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
