"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { useLocale } from "next-intl";
import {
  CheckCircle2,
  ArrowRight,
  Users,
  Clock,
  CalendarDays,
  Repeat,
  Target,
  MessageCircle,
  FileText,
  Building2,
  Brain,
  ClipboardCheck,
  Award,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const inView: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const WHATSAPP_NUMBER = "34613916079";

// ---------------------------------------------------------------------------
// Contenido bilingüe (es / ca). La página es B2B: mismo sistema de diseño que
// el resto del sitio pero con un hero en navy para diferenciar el taller.
// ---------------------------------------------------------------------------
const content = {
  es: {
    waMessage:
      "Hola, me gustaría solicitar una propuesta del taller de gestión del estrés y la ansiedad para nuestra empresa.",
    hero: {
      eyebrow: "Programa presencial para empresas",
      title: "Taller práctico de gestión del estrés y la ansiedad",
      titleAccent: "para empresas",
      description:
        "Un programa presencial y práctico: tus equipos entrenan herramientas concretas para reconocer y gestionar el estrés y la ansiedad.",
      ctaPrimary: "Solicita una propuesta",
      ctaSecondary: "Ver el programa",
      programLabel: "El programa, de un vistazo",
      sessionsShort: [
        { num: "01", label: "Reconocer y regular el estrés" },
        { num: "02", label: "Gestionar pensamientos y presión" },
        { num: "03", label: "Consolidar y prevenir recaídas" },
      ],
      facts: [
        { Icon: CalendarDays, value: "3", label: "sesiones" },
        { Icon: Clock, value: "1h30", label: "por sesión" },
        { Icon: Repeat, value: "15 días", label: "de intervalo" },
        { Icon: Users, value: "4-10", label: "por grupo" },
      ],
    },
    intro: {
      chip: "El enfoque",
      h2: "Una intervención práctica, no una charla puntual",
      p1: "El estrés sostenido y la ansiedad pueden afectar al bienestar de las personas y también a la concentración, la toma de decisiones, las relaciones profesionales y la capacidad para afrontar situaciones de presión.",
      p2: "Proponemos un programa presencial, práctico y estructurado en tres sesiones. El objetivo es que los participantes aprendan herramientas que puedan utilizar durante el taller, practicar entre sesiones e incorporar después a su vida cotidiana. El formato reducido (entre 4 y 10 participantes) facilita una dinámica activa, cercana y participativa, lejos del modelo de conferencia generalista.",
    },
    objectives: {
      chip: "Objetivos",
      h2: "Qué consiguen los participantes",
      items: [
        "Reconocer de forma temprana las señales físicas, emocionales y cognitivas asociadas al estrés y la ansiedad.",
        "Identificar desencadenantes y patrones personales que favorecen la sobrecarga.",
        "Entrenar técnicas prácticas de regulación y gestión emocional.",
        "Desarrollar estrategias para afrontar la preocupación, la anticipación y las situaciones de presión.",
        "Favorecer la autonomía personal con recursos que puedan seguir utilizándose tras finalizar el programa.",
        "Promover una cultura de prevención y cuidado de la salud psicológica en la organización.",
      ],
    },
    format: {
      chip: "Formato del programa",
      h2: "Cómo se organiza el taller",
      subtitle:
        "Las sesiones se realizan presencialmente en las instalaciones de la empresa, en el Maresme y Barcelona. Si la plantilla es más amplia, pueden organizarse diferentes grupos para mantener el carácter práctico del taller.",
      rows: [
        { Icon: Building2, label: "Modalidad", value: "Presencial, en las instalaciones de la empresa" },
        { Icon: CalendarDays, label: "Duración", value: "3 sesiones de 1 hora y 30 minutos" },
        { Icon: Repeat, label: "Periodicidad", value: "Una sesión cada 15 días" },
        { Icon: Users, label: "Participantes", value: "Grupos reducidos de 4 a 10 personas" },
        { Icon: Brain, label: "Metodología", value: "Práctica, participativa y experiencial" },
        { Icon: FileText, label: "Material", value: "Ejercicios y recursos complementarios en PDF" },
      ],
    },
    sessions: {
      chip: "El programa",
      h2: "Tres sesiones para aprender, practicar e integrar",
      subtitle:
        "El intervalo de 15 días permite que cada persona experimente las técnicas en situaciones reales y regrese a la siguiente sesión con una experiencia concreta sobre la que seguir trabajando.",
      list: [
        {
          num: "01",
          title: "Reconocer el estrés y empezar a regularlo",
          points: [
            "Identificación de las propias señales de estrés y ansiedad.",
            "Reconocimiento de los principales desencadenantes.",
            "Observación de la respuesta física, emocional y mental.",
            "Ejercicios prácticos de regulación de la activación.",
            "Primeras herramientas para aplicar en situaciones cotidianas.",
          ],
          goal: "Detectar las señales de estrés y ansiedad y comenzar a intervenir sobre ellas desde el primer momento.",
        },
        {
          num: "02",
          title: "Gestionar pensamientos, emociones y situaciones de presión",
          points: [
            "Revisión de la experiencia y práctica de las dos semanas anteriores.",
            "Gestión de pensamientos anticipatorios y preocupación.",
            "Identificación de patrones mentales que mantienen la ansiedad.",
            "Técnicas de regulación emocional.",
            "Aplicación de las herramientas a situaciones reales de presión.",
          ],
          goal: "Ampliar los recursos personales para gestionar el estrés, la preocupación y la sobrecarga con mayor eficacia.",
        },
        {
          num: "03",
          title: "Consolidar herramientas y prevenir recaídas",
          points: [
            "Revisión e integración de las herramientas aprendidas.",
            "Identificación de señales personales de alerta.",
            "Estrategias para prevenir la acumulación de estrés.",
            "Gestión de límites y sobrecarga.",
            "Elaboración de un plan personal de prevención y continuidad.",
          ],
          goal: "Consolidar los recursos adquiridos y desarrollar una estrategia personal para prevenir y gestionar futuras situaciones de estrés y ansiedad.",
        },
      ],
      goalLabel: "Objetivo de la sesión",
    },
    method: {
      chip: "Metodología",
      h2: "Una metodología basada en la práctica",
      p: "Este taller no es una conferencia ni una formación exclusivamente teórica. Las tres sesiones tienen un enfoque práctico, participativo y experiencial: los participantes aprenden las herramientas utilizándolas durante las propias sesiones y continúan practicándolas entre encuentros. Así, el aprendizaje no termina cuando finaliza cada sesión, sino que continúa durante todo el programa.",
    },
    cards: {
      audience: {
        Icon: Target,
        title: "¿A quién va dirigido?",
        text: "A empresas y organizaciones del Maresme y Barcelona que quieran ofrecer a sus profesionales herramientas concretas para prevenir y gestionar el estrés y la ansiedad. El formato en grupos reducidos facilita la participación activa de todas las personas asistentes.",
      },
      material: {
        Icon: FileText,
        title: "Material para los participantes",
        text: "Cada participante recibe material complementario en PDF con ejercicios y recursos vinculados a las herramientas trabajadas. Permite continuar la práctica entre sesiones y conservar, al finalizar, una guía de recursos para aplicar de forma autónoma.",
      },
      autonomy: {
        Icon: ClipboardCheck,
        title: "Prevención, herramientas y autonomía",
        text: "No se trata únicamente de sentirse mejor durante las sesiones, sino de aprender recursos que puedan seguir utilizándose después: reconocer las señales de alerta e intervenir antes de que el malestar aumente.",
      },
    },
    specialized: {
      title: "Un enfoque especializado",
      text: "El programa traslada al contexto empresarial el conocimiento y las herramientas del trabajo especializado en ansiedad, adaptándolos a un formato preventivo, accesible y orientado a la práctica. El taller tiene carácter formativo y preventivo y no sustituye, cuando sea necesaria, una intervención psicológica individual.",
      linksIntro: "Puedes conocer más sobre nuestro trabajo con la",
    },
    finalCta: {
      chip: "Solicita información",
      h2: "Lleva el taller a tu empresa",
      subtitle:
        "Podemos valorar las características de la organización, el número de participantes y la planificación de los grupos para elaborar una propuesta adaptada.",
      recap: "3 sesiones · 1 h 30 min · cada 15 días · grupos de 4 a 10 participantes",
      ctaPrimary: "Solicita una propuesta",
      ctaSecondary: "Ver formas de contacto",
    },
    faq: {
      chip: "Preguntas frecuentes",
      h2: "Dudas habituales de las empresas",
      list: [
        {
          q: "¿En qué consiste el taller de gestión del estrés y la ansiedad para empresas?",
          a: "Es un programa presencial de tres sesiones de 1 hora y 30 minutos, con una periodicidad de 15 días, dirigido a grupos reducidos de 4 a 10 participantes. Es eminentemente práctico: los asistentes entrenan herramientas concretas para reconocer y gestionar el estrés y la ansiedad y las practican entre sesiones.",
        },
        {
          q: "¿Dónde se realizan las sesiones?",
          a: "Las sesiones se realizan presencialmente en las instalaciones de la empresa. Si la plantilla es más amplia, pueden organizarse diferentes grupos reducidos para mantener el carácter práctico y participativo del taller.",
        },
        {
          q: "¿Cuántas personas pueden participar?",
          a: "Cada grupo está formado por un mínimo de 4 y un máximo de 10 participantes. Este formato reducido permite una dinámica cercana y participativa. Para plantillas grandes se organizan varios grupos.",
        },
        {
          q: "¿Es una formación teórica o práctica?",
          a: "Es una formación práctica, participativa y experiencial. No se plantea como una conferencia: los participantes aprenden las herramientas utilizándolas durante las sesiones y reciben material en PDF para seguir practicando entre encuentros.",
        },
        {
          q: "¿El taller sustituye a la terapia psicológica individual?",
          a: "No. El taller tiene carácter formativo y preventivo. Es un recurso de prevención y entrenamiento de herramientas, y no sustituye, cuando sea necesaria, una intervención psicológica individual.",
        },
        {
          q: "¿Cómo podemos solicitar una propuesta?",
          a: "Puedes contactar con Clínica de la Ansiedad para solicitar información, disponibilidad y condiciones. Valoramos las características de la organización, el número de participantes y la planificación de los grupos para elaborar una propuesta adaptada.",
        },
      ],
    },
    related: {
      anxiety: "ansiedad",
      individual: "terapia individual",
      approach: "nuestro enfoque",
    },
  },
  ca: {
    waMessage:
      "Hola, m'agradaria sol·licitar una proposta del taller de gestió de l'estrès i l'ansietat per a la nostra empresa.",
    hero: {
      eyebrow: "Programa presencial per a empreses",
      title: "Taller pràctic de gestió de l'estrès i l'ansietat",
      titleAccent: "per a empreses",
      description:
        "Un programa presencial i pràctic: els teus equips entrenen eines concretes per reconèixer i gestionar l'estrès i l'ansietat.",
      ctaPrimary: "Sol·licita una proposta",
      ctaSecondary: "Veure el programa",
      programLabel: "El programa, d'un cop d'ull",
      sessionsShort: [
        { num: "01", label: "Reconèixer i regular l'estrès" },
        { num: "02", label: "Gestionar pensaments i pressió" },
        { num: "03", label: "Consolidar i prevenir recaigudes" },
      ],
      facts: [
        { Icon: CalendarDays, value: "3", label: "sessions" },
        { Icon: Clock, value: "1h30", label: "per sessió" },
        { Icon: Repeat, value: "15 dies", label: "d'interval" },
        { Icon: Users, value: "4-10", label: "per grup" },
      ],
    },
    intro: {
      chip: "L'enfocament",
      h2: "Una intervenció pràctica, no una xerrada puntual",
      p1: "L'estrès sostingut i l'ansietat poden afectar el benestar de les persones i també la concentració, la presa de decisions, les relacions professionals i la capacitat per afrontar situacions de pressió.",
      p2: "Proposem un programa presencial, pràctic i estructurat en tres sessions. L'objectiu és que els participants aprenguin eines que puguin utilitzar durant el taller, practicar entre sessions i incorporar després a la seva vida quotidiana. El format reduït (entre 4 i 10 participants) facilita una dinàmica activa, propera i participativa, lluny del model de conferència generalista.",
    },
    objectives: {
      chip: "Objectius",
      h2: "Què aconsegueixen els participants",
      items: [
        "Reconèixer de manera precoç els senyals físics, emocionals i cognitius associats a l'estrès i l'ansietat.",
        "Identificar desencadenants i patrons personals que afavoreixen la sobrecàrrega.",
        "Entrenar tècniques pràctiques de regulació i gestió emocional.",
        "Desenvolupar estratègies per afrontar la preocupació, l'anticipació i les situacions de pressió.",
        "Afavorir l'autonomia personal amb recursos que es puguin continuar utilitzant després del programa.",
        "Promoure una cultura de prevenció i cura de la salut psicològica a l'organització.",
      ],
    },
    format: {
      chip: "Format del programa",
      h2: "Com s'organitza el taller",
      subtitle:
        "Les sessions es fan presencialment a les instal·lacions de l'empresa, al Maresme i a Barcelona. Si la plantilla és més àmplia, es poden organitzar diferents grups per mantenir el caràcter pràctic del taller.",
      rows: [
        { Icon: Building2, label: "Modalitat", value: "Presencial, a les instal·lacions de l'empresa" },
        { Icon: CalendarDays, label: "Durada", value: "3 sessions d'1 hora i 30 minuts" },
        { Icon: Repeat, label: "Periodicitat", value: "Una sessió cada 15 dies" },
        { Icon: Users, label: "Participants", value: "Grups reduïts de 4 a 10 persones" },
        { Icon: Brain, label: "Metodologia", value: "Pràctica, participativa i experiencial" },
        { Icon: FileText, label: "Material", value: "Exercicis i recursos complementaris en PDF" },
      ],
    },
    sessions: {
      chip: "El programa",
      h2: "Tres sessions per aprendre, practicar i integrar",
      subtitle:
        "L'interval de 15 dies permet que cada persona experimenti les tècniques en situacions reals i torni a la sessió següent amb una experiència concreta sobre la qual continuar treballant.",
      list: [
        {
          num: "01",
          title: "Reconèixer l'estrès i començar a regular-lo",
          points: [
            "Identificació dels propis senyals d'estrès i ansietat.",
            "Reconeixement dels principals desencadenants.",
            "Observació de la resposta física, emocional i mental.",
            "Exercicis pràctics de regulació de l'activació.",
            "Primeres eines per aplicar en situacions quotidianes.",
          ],
          goal: "Detectar els senyals d'estrès i ansietat i començar a intervenir-hi des del primer moment.",
        },
        {
          num: "02",
          title: "Gestionar pensaments, emocions i situacions de pressió",
          points: [
            "Revisió de l'experiència i la pràctica de les dues setmanes anteriors.",
            "Gestió de pensaments anticipatoris i preocupació.",
            "Identificació de patrons mentals que mantenen l'ansietat.",
            "Tècniques de regulació emocional.",
            "Aplicació de les eines a situacions reals de pressió.",
          ],
          goal: "Ampliar els recursos personals per gestionar l'estrès, la preocupació i la sobrecàrrega amb més eficàcia.",
        },
        {
          num: "03",
          title: "Consolidar eines i prevenir recaigudes",
          points: [
            "Revisió i integració de les eines apreses.",
            "Identificació de senyals personals d'alerta.",
            "Estratègies per prevenir l'acumulació d'estrès.",
            "Gestió de límits i sobrecàrrega.",
            "Elaboració d'un pla personal de prevenció i continuïtat.",
          ],
          goal: "Consolidar els recursos adquirits i desenvolupar una estratègia personal per prevenir i gestionar futures situacions d'estrès i ansietat.",
        },
      ],
      goalLabel: "Objectiu de la sessió",
    },
    method: {
      chip: "Metodologia",
      h2: "Una metodologia basada en la pràctica",
      p: "Aquest taller no és una conferència ni una formació exclusivament teòrica. Les tres sessions tenen un enfocament pràctic, participatiu i experiencial: els participants aprenen les eines utilitzant-les durant les mateixes sessions i continuen practicant-les entre trobades. Així, l'aprenentatge no acaba quan finalitza cada sessió, sinó que continua durant tot el programa.",
    },
    cards: {
      audience: {
        Icon: Target,
        title: "A qui va dirigit?",
        text: "A empreses i organitzacions del Maresme i de Barcelona que vulguin oferir als seus professionals eines concretes per prevenir i gestionar l'estrès i l'ansietat. El format en grups reduïts facilita la participació activa de totes les persones assistents.",
      },
      material: {
        Icon: FileText,
        title: "Material per als participants",
        text: "Cada participant rep material complementari en PDF amb exercicis i recursos vinculats a les eines treballades. Permet continuar la pràctica entre sessions i conservar, en acabar, una guia de recursos per aplicar de manera autònoma.",
      },
      autonomy: {
        Icon: ClipboardCheck,
        title: "Prevenció, eines i autonomia",
        text: "No es tracta únicament de sentir-se millor durant les sessions, sinó d'aprendre recursos que es puguin continuar utilitzant després: reconèixer els senyals d'alerta i intervenir abans que el malestar augmenti.",
      },
    },
    specialized: {
      title: "Un enfocament especialitzat",
      text: "El programa trasllada al context empresarial el coneixement i les eines del treball especialitzat en ansietat, adaptant-los a un format preventiu, accessible i orientat a la pràctica. El taller té caràcter formatiu i preventiu i no substitueix, quan sigui necessària, una intervenció psicològica individual.",
      linksIntro: "Pots conèixer més sobre la nostra feina amb l'",
    },
    finalCta: {
      chip: "Sol·licita informació",
      h2: "Porta el taller a la teva empresa",
      subtitle:
        "Podem valorar les característiques de l'organització, el nombre de participants i la planificació dels grups per elaborar una proposta adaptada.",
      recap: "3 sessions · 1 h 30 min · cada 15 dies · grups de 4 a 10 participants",
      ctaPrimary: "Sol·licita una proposta",
      ctaSecondary: "Veure formes de contacte",
    },
    faq: {
      chip: "Preguntes freqüents",
      h2: "Dubtes habituals de les empreses",
      list: [
        {
          q: "En què consisteix el taller de gestió de l'estrès i l'ansietat per a empreses?",
          a: "És un programa presencial de tres sessions d'1 hora i 30 minuts, amb una periodicitat de 15 dies, dirigit a grups reduïts de 4 a 10 participants. És eminentment pràctic: els assistents entrenen eines concretes per reconèixer i gestionar l'estrès i l'ansietat i les practiquen entre sessions.",
        },
        {
          q: "On es fan les sessions?",
          a: "Les sessions es fan presencialment a les instal·lacions de l'empresa. Si la plantilla és més àmplia, es poden organitzar diferents grups reduïts per mantenir el caràcter pràctic i participatiu del taller.",
        },
        {
          q: "Quantes persones poden participar?",
          a: "Cada grup està format per un mínim de 4 i un màxim de 10 participants. Aquest format reduït permet una dinàmica propera i participativa. Per a plantilles grans s'organitzen diversos grups.",
        },
        {
          q: "És una formació teòrica o pràctica?",
          a: "És una formació pràctica, participativa i experiencial. No es planteja com una conferència: els participants aprenen les eines utilitzant-les durant les sessions i reben material en PDF per continuar practicant entre trobades.",
        },
        {
          q: "El taller substitueix la teràpia psicològica individual?",
          a: "No. El taller té caràcter formatiu i preventiu. És un recurs de prevenció i entrenament d'eines, i no substitueix, quan sigui necessària, una intervenció psicològica individual.",
        },
        {
          q: "Com podem sol·licitar una proposta?",
          a: "Pots contactar amb Clínica de la Ansiedad per sol·licitar informació, disponibilitat i condicions. Valorem les característiques de l'organització, el nombre de participants i la planificació dels grups per elaborar una proposta adaptada.",
        },
      ],
    },
    related: {
      anxiety: "ansietat",
      individual: "teràpia individual",
      approach: "el nostre enfocament",
    },
  },
} as const;

export default function TallerEmpresasPage() {
  const locale = (useLocale() === "ca" ? "ca" : "es") as "es" | "ca";
  const t = content[locale];
  const reduce = useReducedMotion();

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.waMessage)}`;

  // Barra CTA fija: aparece cuando el hero sale de pantalla (conversión).
  const heroEndRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const el = heroEndRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // ----- JSON-LD: Service + FAQPage -----
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.hero.title + " " + t.hero.titleAccent,
    serviceType:
      locale === "ca"
        ? "Taller de gestió de l'estrès i l'ansietat per a empreses"
        : "Taller de gestión del estrés y la ansiedad para empresas",
    description: t.hero.description,
    provider: {
      "@type": "MedicalBusiness",
      name: "Clínica de la Ansiedad Catalunya",
      url: "https://www.clinicadelansiedad.com",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Catalunya" },
      { "@type": "AdministrativeArea", name: "Maresme" },
      { "@type": "City", name: "Canet de Mar" },
      { "@type": "City", name: "Barcelona" },
    ],
    audience: {
      "@type": "BusinessAudience",
      name: locale === "ca" ? "Empreses i organitzacions" : "Empresas y organizaciones",
    },
    url: `https://www.clinicadelansiedad.com/${locale}/taller-gestion-estres-empresas`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.list.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* ===== HERO (claro · image-led · conversión) ===== */}
        <section className="relative overflow-hidden bg-cream pt-28 md:pt-32 pb-20 md:pb-24 px-4 md:px-8">
          <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-15%] right-[-6%] w-[45%] h-[55%] bg-gold/12 rounded-full blur-[130px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[42%] h-[52%] bg-sage/60 rounded-full blur-[130px]" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10 w-full min-w-0">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
              {/* Columna de copy */}
              <motion.div variants={stagger} initial="hidden" animate="show" className="min-w-0">
                <motion.div variants={inView}>
                  <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-navy text-[9px] sm:text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.22em] uppercase mb-7 shadow-sm">
                    <Building2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="min-w-0">{t.hero.eyebrow}</span>
                  </span>
                </motion.div>

                <motion.h1
                  variants={inView}
                  className="font-serif text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl xl:text-6xl md:leading-[1.05] font-bold text-navy tracking-tight mb-6"
                >
                  {t.hero.title}{" "}
                  <span className="text-gold italic font-light pb-1 inline-block">{t.hero.titleAccent}</span>
                </motion.h1>

                <motion.p
                  variants={inView}
                  className="text-lg md:text-xl text-navy/60 leading-relaxed max-w-xl mb-8"
                >
                  {t.hero.description}
                </motion.p>

                <motion.div variants={inView} className="flex flex-col sm:flex-row gap-3.5 mb-8">
                  <Button
                    as="a"
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy text-white font-bold px-9 py-7 rounded-full text-xs uppercase tracking-widest shadow-xl shadow-navy/20 hover:bg-navy/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    endContent={<ArrowRight className="w-4 h-4 ml-1" />}
                  >
                    {t.hero.ctaPrimary}
                  </Button>
                  <Button
                    as="a"
                    href="#programa"
                    variant="bordered"
                    className="border-navy/20 text-navy hover:bg-navy/5 font-bold px-9 py-7 rounded-full text-xs uppercase tracking-widest transition-colors"
                  >
                    {t.hero.ctaSecondary}
                  </Button>
                </motion.div>

                {/* Trust chips (datos del formato) */}
                <motion.div variants={inView} className="flex flex-wrap gap-x-6 gap-y-2.5">
                  {t.hero.facts.map(({ Icon, value, label }, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-navy text-sm font-bold">{value}</span>
                      <span className="text-navy/50 text-sm">{label}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Imagen de marca + tarjeta flotante del programa */}
              <motion.div
                initial={{ opacity: 0, y: reduce ? 0 : 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative min-w-0 pb-10 lg:pb-0"
              >
                <div className="relative max-w-lg mx-auto lg:mx-0 lg:ml-auto">
                  <div aria-hidden className="absolute -inset-3 bg-gold/15 rounded-[2.5rem] blur-2xl" />
                  <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-[0_30px_80px_-25px_rgba(26,58,72,0.45)] aspect-[4/3.4]">
                    <Image
                      src="/images/centreclinicansiedad.jpeg"
                      alt={locale === "ca" ? "Clínica de l'Ansietat, centre a Canet de Mar (Maresme)" : "Clínica de la Ansiedad, centro en Canet de Mar (Maresme)"}
                      fill
                      priority
                      sizes="(max-width:1024px) 100vw, 520px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                  </div>

                  {/* Tarjeta flotante: el programa en 3 sesiones */}
                  <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white rounded-2xl shadow-xl border border-navy/5 p-5 max-w-[260px]">
                    <p className="text-gold text-[9px] font-bold uppercase tracking-[0.2em] mb-3">{t.hero.programLabel}</p>
                    <ol className="space-y-2.5">
                      {t.hero.sessionsShort.map((s) => (
                        <li key={s.num} className="flex items-center gap-3">
                          <span className="grid place-items-center w-7 h-7 rounded-full bg-gold/10 border border-gold/25 text-gold font-serif text-xs font-bold shrink-0">
                            {s.num}
                          </span>
                          <span className="text-navy/80 text-[13px] leading-tight font-medium">{s.label}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div ref={heroEndRef} aria-hidden className="absolute bottom-0 left-0 h-px w-full" />
        </section>

        {/* ===== INTRO (2-col con imagen) ===== */}
        <section className="pt-24 md:pt-28 pb-20 md:pb-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                variants={inView}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="order-2 lg:order-1"
              >
                <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-bold text-navy mb-6 leading-tight">{t.intro.h2}</h2>
                <p className="text-navy/70 text-lg leading-relaxed mb-5">{t.intro.p1}</p>
                <p className="text-navy/70 text-lg leading-relaxed">{t.intro.p2}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="order-1 lg:order-2"
              >
                <div className="relative rounded-[2rem] overflow-hidden border border-navy/5 shadow-xl aspect-[4/3.1]">
                  <Image
                    src="/images/brand-atmosphere.png"
                    alt={locale === "ca" ? "Entorn de treball proper i participatiu" : "Entorno de trabajo cercano y participativo"}
                    fill
                    sizes="(max-width:1024px) 100vw, 560px"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== OBJETIVOS / RESULTADOS ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
          <div className="container mx-auto max-w-5xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="max-w-2xl mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy">{t.objectives.h2}</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4 mb-12">
              {t.objectives.items.map((item, i) => (
                <motion.div key={i} variants={inView} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-navy/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="grid place-items-center w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/75 leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center">
              <Button
                as="a"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white font-bold px-9 py-7 rounded-full text-xs uppercase tracking-widest shadow-lg shadow-navy/15 hover:bg-navy/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
                endContent={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                {t.hero.ctaPrimary}
              </Button>
            </div>
          </div>
        </section>

        {/* ===== FORMATO ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                {t.format.chip}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-6">{t.format.h2}</h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-12 max-w-2xl">{t.format.subtitle}</p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4">
              {t.format.rows.map(({ Icon, label, value }, i) => (
                <motion.div key={i} variants={inView}>
                  <Card className="bg-cream border border-navy/5 shadow-none h-full">
                    <CardBody className="p-6 flex flex-row items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-navy/40 text-[10px] font-bold uppercase tracking-widest mb-1">{label}</p>
                        <p className="text-navy font-medium leading-snug">{value}</p>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== SESIONES ===== */}
        <section id="programa" className="py-20 md:py-28 px-4 md:px-8 scroll-mt-24">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-navy/8 text-navy border border-navy/10 text-[10px] font-bold uppercase tracking-widest mb-6">
                {t.sessions.chip}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-6">{t.sessions.h2}</h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-16 max-w-2xl">{t.sessions.subtitle}</p>
            </motion.div>

            <div className="space-y-8 md:space-y-10">
              {t.sessions.list.map((s, i) => (
                <motion.div
                  key={i}
                  variants={inView}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <Card className="bg-white border border-navy/5 shadow-none overflow-visible">
                    <CardBody className="p-7 md:p-10">
                      <div className="flex gap-6 md:gap-8 items-start">
                        <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 items-center justify-center shrink-0">
                          <span className="font-serif text-2xl text-gold font-bold">{s.num}</span>
                        </div>
                        <div className="flex-1">
                          <div className="sm:hidden mb-3">
                            <Chip size="sm" className="bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest border border-gold/20">
                              {locale === "ca" ? "Sessió" : "Sesión"} {s.num}
                            </Chip>
                          </div>
                          <h3 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-5">{s.title}</h3>
                          <ul className="space-y-2.5 mb-6">
                            {s.points.map((p, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <span className="text-navy/70">{p}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex gap-4 items-start bg-cream rounded-2xl p-5 border border-navy/5">
                            <div className="w-1 self-stretch bg-gold rounded-full shrink-0" />
                            <div>
                              <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1">{t.sessions.goalLabel}</p>
                              <p className="text-navy/70 leading-relaxed">{s.goal}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== METODOLOGÍA ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-navy">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8">{t.method.h2}</h2>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">{t.method.p}</p>
            </motion.div>
          </div>
        </section>

        {/* ===== A QUIÉN / MATERIAL / AUTONOMÍA (bento) ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-5xl">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-5">
              {/* Feature ancho (navy): a quién va dirigido */}
              <motion.div variants={inView} className="md:col-span-2">
                <div className="relative overflow-hidden rounded-[1.75rem] bg-navy p-8 md:p-10">
                  <div aria-hidden className="absolute top-[-40%] right-[-8%] w-[45%] h-[120%] bg-gold/15 rounded-full blur-[90px] pointer-events-none" />
                  <div className="relative z-10 md:flex md:items-center md:gap-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-5 md:mb-0 shrink-0">
                      <t.cards.audience.Icon className="w-7 h-7 text-gold-light" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">{t.cards.audience.title}</h3>
                      <p className="text-white/70 leading-relaxed max-w-3xl">{t.cards.audience.text}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Dos tarjetas de apoyo */}
              {[t.cards.material, t.cards.autonomy].map(({ Icon, title, text }, i) => (
                <motion.div key={i} variants={inView}>
                  <Card className="bg-cream border border-navy/5 shadow-none h-full">
                    <CardBody className="p-7 md:p-8">
                      <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3">{title}</h3>
                      <p className="text-navy/70 leading-relaxed text-sm md:text-base">{text}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== AUTORIDAD / ENFOQUE ESPECIALIZADO (foto especialista) ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative max-w-xs mx-auto lg:mx-0">
                  <div aria-hidden className="absolute -inset-3 bg-gold/15 rounded-[2.5rem] blur-2xl" />
                  <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-xl aspect-[4/5]">
                    <Image
                      src="/images/joanramonsotoimagenweb.webp"
                      alt={locale === "ca" ? "Joan Ramon Soto, especialista en ansietat" : "Joan Ramon Soto, especialista en ansiedad"}
                      fill
                      sizes="(max-width:1024px) 70vw, 320px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-gold/10 border border-gold/20">
                    <Award className="w-5 h-5 text-gold" />
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-bold text-navy mb-6 leading-tight">{t.specialized.title}</h2>
                <p className="text-navy/70 text-lg leading-relaxed mb-6">{t.specialized.text}</p>
                <p className="text-navy/60 leading-relaxed">
                  {t.specialized.linksIntro}{" "}
                  <Link href="/ansiedad" className="text-gold font-semibold hover:text-navy underline underline-offset-2">
                    {t.related.anxiety}
                  </Link>
                  ,{" "}
                  <Link href="/servicios/terapia-individual" className="text-gold font-semibold hover:text-navy underline underline-offset-2">
                    {t.related.individual}
                  </Link>{" "}
                  {locale === "ca" ? "i" : "y"}{" "}
                  <Link href="/enfoque" className="text-gold font-semibold hover:text-navy underline underline-offset-2">
                    {t.related.approach}
                  </Link>
                  .
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section id="solicitar" className="py-20 md:py-28 px-4 md:px-8 bg-navy scroll-mt-24">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="relative overflow-hidden bg-gradient-to-br from-navy-light/40 to-navy rounded-[2.5rem] border border-white/10 p-10 md:p-16 text-center"
            >
              <div className="absolute top-[-30%] right-[-10%] w-[50%] h-[70%] bg-gold/20 rounded-full blur-[120px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">{t.finalCta.h2}</h2>
                <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">{t.finalCta.subtitle}</p>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
                  {t.hero.facts.map(({ value, label }, i) => (
                    <div key={i} className="text-center">
                      <span className="font-serif text-xl font-bold text-white">{value}</span>{" "}
                      <span className="text-gold-light text-xs font-semibold uppercase tracking-wide">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    as="a"
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold text-white font-bold px-9 py-7 rounded-full text-xs uppercase tracking-widest shadow-xl shadow-black/20 hover:bg-gold-light transition-all"
                    startContent={<MessageCircle className="w-4 h-4" />}
                  >
                    {t.finalCta.ctaPrimary}
                  </Button>
                  <Button
                    as={Link}
                    href={"/#contacto" as any}
                    variant="bordered"
                    className="border-white/25 text-white hover:bg-white/10 font-bold px-9 py-7 rounded-full text-xs uppercase tracking-widest transition-colors"
                  >
                    {t.finalCta.ctaSecondary}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy">{t.faq.h2}</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-navy/5"
            >
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
                {t.faq.list.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border border-navy/10 rounded-xl px-6 data-[state=open]:border-gold/30 data-[state=open]:bg-cream/30 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-navy font-bold font-sans text-base md:text-lg hover:text-gold hover:no-underline text-left cursor-pointer">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-navy/70 leading-relaxed text-base pt-2 pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ===== BARRA CTA FIJA (aparece al salir del hero) ===== */}
      <motion.div
        initial={false}
        animate={{ y: showSticky ? 0 : 130, opacity: showSticky ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 inset-x-0 z-40 pointer-events-none"
      >
        <div className="container mx-auto max-w-5xl px-3 pb-3 sm:pb-4">
          <div className="pointer-events-auto flex items-center justify-between gap-4 rounded-2xl bg-navy/95 backdrop-blur-md border border-white/10 shadow-2xl shadow-navy/30 px-4 sm:px-6 py-3">
            <div className="min-w-0 hidden sm:block">
              <p className="text-white font-bold text-sm leading-tight truncate">
                {t.hero.title} {t.hero.titleAccent}
              </p>
              <p className="text-white/50 text-xs">{t.hero.programLabel}</p>
            </div>
            <Button
              as="a"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-white font-bold px-6 py-6 rounded-full text-[11px] uppercase tracking-widest hover:bg-gold-light transition-all shrink-0 w-full sm:w-auto"
              endContent={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              {t.hero.ctaPrimary}
            </Button>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
