"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Card, CardBody, Button } from "@heroui/react";
import { useLocale } from "next-intl";
import {
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Train,
  Car,
  Languages,
  Clock,
  MessageCircle,
  Landmark,
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
import { bookingUrl, GOOGLE_REVIEWS } from "@/lib/constants";

const inView: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const WHATSAPP_NUMBER = "34613916079";
// Enlace a la ficha (Maps URLs API), no a unas coordenadas sueltas.
const MAPS_URL = GOOGLE_REVIEWS.url;

// Municipios del Maresme atendidos (presencial en Canet de Mar).
const TOWNS = [
  "Canet de Mar",
  "Arenys de Mar",
  "Arenys de Munt",
  "Sant Pol de Mar",
  "Calella",
  "Pineda de Mar",
  "Sant Cebrià de Vallalta",
  "Caldes d'Estrac",
  "Sant Vicenç de Montalt",
  "Sant Andreu de Llavaneres",
  "Mataró",
  "Argentona",
];

const content = {
  es: {
    waMessage: "Hola, me gustaría solicitar una valoración en la consulta de Canet de Mar.",
    hero: {
      eyebrow: "Consulta presencial en Canet de Mar · Maresme",
      title: "Psicoanalista en el Maresme:",
      titleAccent: "consulta en Canet de Mar",
      description:
        "Espacio psicoanalítico dirigido por Joan Ramon Soto. Tratamos la ansiedad, la depresión y las crisis de pánico desde la raíz, con consulta presencial en Canet de Mar y sesiones online para todo el Maresme.",
      ctaPrimary: "Reservar cita",
      ctaSecondary: "Escríbenos por WhatsApp",
      trust: [
        { Icon: MapPin, text: "Ronda Dr. Anglès 74, Canet de Mar" },
        { Icon: Languages, text: "Atención en catalán y castellano" },
        { Icon: Clock, text: "Espacio psicoanalítico desde 1993" },
      ],
    },
    intro: {
      h2: "Un espacio psicoanalítico en el Maresme",
      p1: "Desde 1993 acompañamos a personas de Canet de Mar y de toda la comarca del Maresme en la comprensión y resolución del sufrimiento emocional. No trabajamos con protocolos rápidos ni técnicas de evitación: escuchamos tu historia para desarticular la raíz de la ansiedad, la depresión o la angustia.",
      p2: "A diferencia de las terapias que solo silencian el síntoma, trabajamos desde el psicoanálisis para llegar a la raíz de la ansiedad, la depresión o la angustia. Joan Ramon Soto acompaña este proceso con más de 30 años de experiencia clínica, buscando cambios estructurales y duraderos, no solo el alivio momentáneo.",
    },
    location: {
      h2: "Nuestra consulta en Canet de Mar",
      subtitle:
        "La consulta presencial se encuentra en el centro de Canet de Mar, con fácil acceso desde toda la costa del Maresme.",
      addressLabel: "Dirección",
      address: "Ronda Dr. Anglès 74\n08360 Canet de Mar\nBarcelona (Maresme)",
      access: [
        { Icon: Train, text: "A pocos minutos de la estación de Canet de Mar (línea R1 de Rodalies)." },
        { Icon: Car, text: "Salida directa desde la C-32 y la N-II, con aparcamiento en la zona." },
      ],
      mapCta: "Ver en Google Maps",
      townsLabel: "Municipios del Maresme que atendemos",
    },
    services: {
      h2: "En qué te podemos ayudar",
      subtitle: "Abordamos desde el psicoanálisis los principales motivos de consulta.",
      items: [
        { title: "Ansiedad", desc: "Síntomas físicos, crisis y angustia sostenida.", href: "/ansiedad" as const },
        { title: "Crisis de pánico", desc: "Ataques de pánico y miedo anticipatorio.", href: "/crisis-de-panico" as const },
        { title: "Depresión", desc: "Tristeza profunda, apatía y desmotivación.", href: "/depresion" as const },
        { title: "Celos", desc: "Celos patológicos y dependencia emocional.", href: "/celos" as const },
        { title: "Ludopatía", desc: "Conductas adictivas y pérdida de control.", href: "/ludopatia" as const },
        { title: "Terapia individual", desc: "Un proceso personal, confidencial y a tu ritmo.", href: "/servicios/terapia-individual" as const },
      ],
    },
    municipios: {
      h2: "Desde qué municipios del Maresme atendemos",
      subtitle: "La consulta está en Canet de Mar, en el centro del Maresme. Estos son los trayectos más habituales de quienes vienen a sesión.",
      list: [
        {
          h3: "Arenys de Mar y Arenys de Munt",
          p: "Los dos Arenys están a un paso de Canet: unos diez minutos en coche por la C-32 o dos paradas de la R1 desde Arenys de Mar. Muchas de las consultas que llegan desde aquí tienen que ver con ansiedad anticipatoria y con estrés sostenido por trabajo o cuidados familiares.",
        },
        {
          h3: "Sant Pol de Mar y Calella",
          p: "Desde Sant Pol y Calella se llega por la N-II bordeando la costa o en tren, con la estación de Canet a pocos minutos a pie de la consulta. Es la zona desde la que más se pregunta por terapia de pareja y por crisis de pánico.",
        },
        {
          h3: "Pineda de Mar y Malgrat de Mar",
          p: "Pineda y Malgrat quedan al norte de la comarca, a un cuarto de hora largo en coche o directamente en la R1 sin transbordos. Para quien tiene horarios difíciles, combinamos sesiones presenciales con alguna sesión online.",
        },
        {
          h3: "Mataró y el bajo Maresme",
          p: "Desde Mataró, Argentona o Montgat el trayecto es de unos veinte minutos por la C-32. Si te viene mejor, aquí es habitual alternar la primera visita presencial en Canet de Mar con el seguimiento online.",
        },
      ],
      note: "Atendemos indistintamente en catalán y castellano: pots fer la sessió en català si és la teva llengua. Si vienes desde fuera de la comarca, la terapia online mantiene la misma profundidad que la sesión presencial.",
    },
    approach: {
      h2: "Psicoanálisis directo, no parches",
      p: "A diferencia de las terapias que solo silencian el síntoma, el psicoanálisis directo trata el conflicto que lo origina. Es un proceso riguroso y personalizado, guiado por más de 30 años de experiencia clínica.",
      cta1: "Conoce nuestro enfoque",
      cta2: "Sobre Joan Ramon Soto",
    },
    online: {
      h2: "¿Vives fuera del Maresme?",
      p: "Si no puedes desplazarte a Canet de Mar, ofrecemos terapia online con la misma profundidad que la sesión presencial, para toda Catalunya y España.",
      cta: "Ver terapia online",
    },
    faq: {
      h2: "Preguntas frecuentes",
      list: [
        {
          q: "¿Dónde está la consulta?",
          a: "La consulta presencial está en Ronda Dr. Anglès 74, 08360 Canet de Mar (Barcelona, Maresme), a pocos minutos de la estación de tren y con acceso directo desde la C-32.",
        },
        {
          q: "¿Sois psicólogos o psicoanalistas?",
          a: "Psicoanalistas. Joan Ramon Soto es psicoanalista, con formación y práctica psicoanalítica desde 1993. Si lo que buscas es un psicólogo para tratar tu ansiedad, esto es lo que ofrecemos: en lugar de gestionar el síntoma con técnicas, buscamos comprender y resolver el conflicto que lo genera.",
        },
        {
          q: "¿Qué municipios del Maresme atendéis?",
          a: "Recibimos en Canet de Mar a personas de toda la comarca: Arenys de Mar, Arenys de Munt, Sant Pol de Mar, Calella, Pineda de Mar, Caldes d'Estrac, Sant Vicenç de Montalt, Sant Andreu de Llavaneres, Mataró, Argentona y municipios cercanos.",
        },
        {
          q: "¿Atendéis en catalán y castellano?",
          a: "Sí. Joan Ramon Soto es completamente bilingüe y atiende indistintamente en catalán y castellano, para que puedas expresarte en tu lengua emocional.",
        },
        {
          q: "¿Cuánto cuesta una sesión?",
          a: "La sesión individual son 75 € (50 minutos) y la sesión de pareja 100 € (1 hora). Las tarifas son las mismas en modalidad presencial y online, y están publicadas en el sistema de reservas.",
        },
        {
          q: "¿Qué pasa en la primera sesión?",
          a: "La primera visita es una conversación clínica extensa, sin cuestionarios ni tests mecánicos. Exploramos tu historia, el momento en que aparecieron los síntomas y qué los sostiene. Al final tendrás una idea clara de cómo sería el proceso.",
        },
        {
          q: "¿Cómo llego en tren o dónde aparco?",
          a: "La consulta está a pocos minutos a pie de la estación de Canet de Mar, en la línea R1 de Rodalies, que recorre toda la costa del Maresme. En coche, la salida de Canet de Mar de la C-32 deja a un par de minutos, y hay aparcamiento libre en la zona.",
        },
        {
          q: "¿Hacéis sesiones online?",
          a: "Sí. Además de la consulta presencial en Canet de Mar, ofrecemos terapia online para quienes viven fuera del Maresme o prefieren la comodidad de la videollamada, con la misma eficacia.",
        },
      ],
    },
    finalCta: {
      h2: "Da el primer paso en Canet de Mar",
      subtitle:
        "Reserva tu primera visita en la consulta del Maresme o escríbenos por WhatsApp para valorar tu caso de forma confidencial.",
      cta1: "Reservar cita",
      cta2: "Escríbenos por WhatsApp",
    },
  },
  ca: {
    waMessage: "Hola, m'agradaria sol·licitar una valoració a la consulta de Canet de Mar.",
    hero: {
      eyebrow: "Consulta presencial a Canet de Mar · Maresme",
      title: "Psicoanalista al Maresme:",
      titleAccent: "consulta a Canet de Mar",
      description:
        "Espai psicoanalític dirigit per Joan Ramon Soto. Tractem l'ansietat, la depressió i les crisis de pànic des de l'arrel, amb consulta presencial a Canet de Mar i sessions online per a tot el Maresme.",
      ctaPrimary: "Reservar cita",
      ctaSecondary: "Escriu-nos per WhatsApp",
      trust: [
        { Icon: MapPin, text: "Ronda Dr. Anglès 74, Canet de Mar" },
        { Icon: Languages, text: "Atenció en català i castellà" },
        { Icon: Clock, text: "Espai psicoanalític des de 1993" },
      ],
    },
    intro: {
      h2: "Un espai psicoanalític al Maresme",
      p1: "Des de 1993 acompanyem persones de Canet de Mar i de tota la comarca del Maresme en la comprensió i resolució del patiment emocional. No treballem amb protocols ràpids ni tècniques d'evitació: escoltem la teva història per desarticular l'arrel de l'ansietat, la depressió o l'angoixa.",
      p2: "A diferència de les teràpies que només silencien el símptoma, treballem des del psicoanàlisi per arribar a l'arrel de l'ansietat, la depressió o l'angoixa. Joan Ramon Soto acompanya aquest procés amb més de 30 anys d'experiència clínica, buscant canvis estructurals i duradors, no només l'alleujament momentani.",
    },
    location: {
      h2: "La nostra consulta a Canet de Mar",
      subtitle:
        "La consulta presencial es troba al centre de Canet de Mar, amb fàcil accés des de tota la costa del Maresme.",
      addressLabel: "Adreça",
      address: "Ronda Dr. Anglès 74\n08360 Canet de Mar\nBarcelona (Maresme)",
      access: [
        { Icon: Train, text: "A pocs minuts de l'estació de Canet de Mar (línia R1 de Rodalies)." },
        { Icon: Car, text: "Sortida directa des de la C-32 i la N-II, amb aparcament a la zona." },
      ],
      mapCta: "Veure a Google Maps",
      townsLabel: "Municipis del Maresme que atenem",
    },
    services: {
      h2: "En què et podem ajudar",
      subtitle: "Abordem des del psicoanàlisi els principals motius de consulta.",
      items: [
        { title: "Ansietat", desc: "Símptomes físics, crisis i angoixa sostinguda.", href: "/ansiedad" as const },
        { title: "Crisis de pànic", desc: "Atacs de pànic i por anticipatòria.", href: "/crisis-de-panico" as const },
        { title: "Depressió", desc: "Tristesa profunda, apatia i desmotivació.", href: "/depresion" as const },
        { title: "Gelosia", desc: "Gelosia patològica i dependència emocional.", href: "/celos" as const },
        { title: "Ludopatia", desc: "Conductes addictives i pèrdua de control.", href: "/ludopatia" as const },
        { title: "Teràpia individual", desc: "Un procés personal, confidencial i al teu ritme.", href: "/servicios/terapia-individual" as const },
      ],
    },
    municipios: {
      h2: "Des de quins municipis del Maresme atenem",
      subtitle: "La consulta és a Canet de Mar, al centre del Maresme. Aquests són els trajectes més habituals de qui ve a sessió.",
      list: [
        {
          h3: "Arenys de Mar i Arenys de Munt",
          p: "Els dos Arenys són a tocar de Canet: uns deu minuts en cotxe per la C-32 o dues parades de la R1 des d'Arenys de Mar. Moltes de les consultes que arriben d'aquí tenen a veure amb ansietat anticipatòria i amb estrès sostingut per feina o cura de familiars.",
        },
        {
          h3: "Sant Pol de Mar i Calella",
          p: "Des de Sant Pol i Calella s'hi arriba per la N-II vorejant la costa o en tren, amb l'estació de Canet a pocs minuts a peu de la consulta. És la zona des d'on més es pregunta per teràpia de parella i per crisis de pànic.",
        },
        {
          h3: "Pineda de Mar i Malgrat de Mar",
          p: "Pineda i Malgrat queden al nord de la comarca, a un quart d'hora llarg en cotxe o directament a la R1 sense transbordaments. Per a qui té horaris difícils, combinem sessions presencials amb alguna sessió online.",
        },
        {
          h3: "Mataró i el baix Maresme",
          p: "Des de Mataró, Argentona o Montgat el trajecte és d'uns vint minuts per la C-32. Si et va millor, aquí és habitual alternar la primera visita presencial a Canet de Mar amb el seguiment online.",
        },
      ],
      note: "Atenem indistintament en català i castellà. Si véns de fora de la comarca, la teràpia online manté la mateixa profunditat que la sessió presencial.",
    },
    approach: {
      h2: "Psicoanàlisi directe, no pedaços",
      p: "A diferència de les teràpies que només silencien el símptoma, el psicoanàlisi directe tracta el conflicte que l'origina. És un procés rigorós i personalitzat, guiat per més de 30 anys d'experiència clínica.",
      cta1: "Coneix el nostre enfocament",
      cta2: "Sobre Joan Ramon Soto",
    },
    online: {
      h2: "Vius fora del Maresme?",
      p: "Si no pots desplaçar-te a Canet de Mar, oferim teràpia online amb la mateixa profunditat que la sessió presencial, per a tota Catalunya i Espanya.",
      cta: "Veure teràpia online",
    },
    faq: {
      h2: "Preguntes freqüents",
      list: [
        {
          q: "On és la consulta?",
          a: "La consulta presencial és a Ronda Dr. Anglès 74, 08360 Canet de Mar (Barcelona, Maresme), a pocs minuts de l'estació de tren i amb accés directe des de la C-32.",
        },
        {
          q: "Sou psicòlegs o psicoanalistes?",
          a: "Psicoanalistes. Joan Ramon Soto és psicoanalista, amb formació i pràctica psicoanalítica des de 1993. Si el que busques és un psicòleg per tractar l'ansietat, això és el que oferim: en lloc de gestionar el símptoma amb tècniques, busquem comprendre i resoldre el conflicte que el genera.",
        },
        {
          q: "Quins municipis del Maresme ateneu?",
          a: "Rebem a Canet de Mar persones de tota la comarca: Arenys de Mar, Arenys de Munt, Sant Pol de Mar, Calella, Pineda de Mar, Caldes d'Estrac, Sant Vicenç de Montalt, Sant Andreu de Llavaneres, Mataró, Argentona i municipis propers.",
        },
        {
          q: "Ateneu en català i castellà?",
          a: "Sí. Joan Ramon Soto és completament bilingüe i atén indistintament en català i castellà, perquè puguis expressar-te en la teva llengua emocional.",
        },
        {
          q: "Quant costa una sessió?",
          a: "La sessió individual són 75 € (50 minuts) i la sessió de parella 100 € (1 hora). Les tarifes són les mateixes en modalitat presencial i online, i estan publicades al sistema de reserves.",
        },
        {
          q: "Què passa a la primera sessió?",
          a: "La primera visita és una conversa clínica extensa, sense qüestionaris ni tests mecànics. Explorem la teva història, el moment en què van aparèixer els símptomes i què els sosté. Al final tindràs una idea clara de com seria el procés.",
        },
        {
          q: "Com hi arribo en tren o on aparco?",
          a: "La consulta és a pocs minuts a peu de l'estació de Canet de Mar, a la línia R1 de Rodalies, que recorre tota la costa del Maresme. En cotxe, la sortida de Canet de Mar de la C-32 deixa a un parell de minuts, i hi ha aparcament lliure a la zona.",
        },
        {
          q: "Feu sessions online?",
          a: "Sí. A més de la consulta presencial a Canet de Mar, oferim teràpia online per a qui viu fora del Maresme o prefereix la comoditat de la videotrucada, amb la mateixa eficàcia.",
        },
      ],
    },
    finalCta: {
      h2: "Fes el primer pas a Canet de Mar",
      subtitle:
        "Reserva la teva primera visita a la consulta del Maresme o escriu-nos per WhatsApp per valorar el teu cas de manera confidencial.",
      cta1: "Reservar cita",
      cta2: "Escriu-nos per WhatsApp",
    },
  },
} as const;

export default function PsicologoMaresmePage() {
  const locale = (useLocale() === "ca" ? "ca" : "es") as "es" | "ca";
  const t = content[locale];
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.waMessage)}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Psychoanalyst", "MedicalBusiness", "LocalBusiness"],
    name: "Clínica de la Ansiedad Catalunya — Canet de Mar (Maresme)",
    description: t.hero.description,
    url: `https://www.clinicadelansiedad.com/${locale}/psicologo-maresme`,
    telephone: "+34613916079",
    email: "contacto@clinicadelansiedad.com",
    priceRange: "€€",
    image: "https://www.clinicadelansiedad.com/images/centreclinicansiedad.jpeg",
    founder: { "@type": "Person", name: "Joan Ramon Soto", jobTitle: "Psicoanalista" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ronda Dr. Anglès 74",
      addressLocality: "Canet de Mar",
      postalCode: "08360",
      addressRegion: "Barcelona",
      addressCountry: "ES",
    },
    geo: { "@type": "GeoCoordinates", latitude: 41.5908, longitude: 2.5771 },
    hasMap: MAPS_URL,
    areaServed: TOWNS.map((name) => ({ "@type": "City", name })),
    availableLanguage: ["ca", "es"],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "20:00" },
    ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden bg-cream pt-28 md:pt-32 pb-20 md:pb-24 px-4 md:px-8">
          <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-15%] right-[-6%] w-[45%] h-[55%] bg-gold/12 rounded-full blur-[130px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[42%] h-[52%] bg-sage/60 rounded-full blur-[130px]" />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10 w-full min-w-0">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
              {/* initial={false}: el hero se sirve visible, sin esperar a la hidratación */}
              <motion.div variants={stagger} initial={false} animate="show" className="min-w-0">
                <motion.div variants={inView}>
                  <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-navy text-[9px] sm:text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.22em] uppercase mb-7 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="min-w-0">{t.hero.eyebrow}</span>
                  </span>
                </motion.div>
                <motion.h1 variants={inView} className="font-serif text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl xl:text-6xl md:leading-[1.05] font-bold text-navy tracking-tight mb-6">
                  {t.hero.title}{" "}
                  <span className="text-gold italic font-light pb-1 inline-block">{t.hero.titleAccent}</span>
                </motion.h1>
                <motion.p variants={inView} className="text-lg md:text-xl text-navy/60 leading-relaxed max-w-xl mb-8">
                  {t.hero.description}
                </motion.p>
                <motion.div variants={inView} className="flex flex-col sm:flex-row gap-3.5 mb-8">
                  <Button as="a" href={bookingUrl("hero-maresme")} target="_blank" rel="noopener noreferrer" className="bg-navy text-white font-bold px-9 py-7 rounded-full text-xs uppercase tracking-widest shadow-xl shadow-navy/20 hover:bg-navy/90 hover:scale-[1.02] active:scale-[0.98] transition-all" endContent={<ArrowRight className="w-4 h-4 ml-1" />}>
                    {t.hero.ctaPrimary}
                  </Button>
                  <Button as="a" href={waUrl} target="_blank" rel="noopener noreferrer" variant="bordered" className="border-navy/20 text-navy hover:bg-navy/5 font-bold px-9 py-7 rounded-full text-xs uppercase tracking-widest transition-colors" startContent={<MessageCircle className="w-4 h-4" />}>
                    {t.hero.ctaSecondary}
                  </Button>
                </motion.div>
                <motion.div variants={inView} className="flex flex-col gap-2.5">
                  {t.hero.trust.map(({ Icon, text }, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-navy/70 text-sm">{text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} className="relative min-w-0">
                <div className="relative max-w-lg mx-auto lg:mx-0 lg:ml-auto">
                  <div aria-hidden className="absolute -inset-3 bg-gold/15 rounded-[2.5rem] blur-2xl" />
                  <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-[0_30px_80px_-25px_rgba(26,58,72,0.45)] aspect-[4/3.4]">
                    <Image src="/images/brand-atmosphere.png" alt="Consulta psicoanalítica en Canet de Mar, Maresme" fill priority sizes="(max-width:1024px) 100vw, 520px" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white rounded-2xl shadow-xl border border-navy/5 p-5 max-w-[250px]">
                    <div className="flex items-center gap-3">
                      <span className="grid place-items-center w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 shrink-0">
                        <Landmark className="w-5 h-5 text-gold" />
                      </span>
                      <div>
                        <p className="text-gold text-[9px] font-bold uppercase tracking-[0.2em]">Canet de Mar</p>
                        <p className="text-navy/80 text-[13px] font-semibold leading-tight">Ronda Dr. Anglès 74</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-8 max-w-3xl leading-tight">{t.intro.h2}</h2>
              <p className="text-navy/70 text-lg leading-relaxed mb-6">{t.intro.p1}</p>
              <p className="text-navy/70 text-lg leading-relaxed">{t.intro.p2}</p>
            </motion.div>
          </div>
        </section>

        {/* ===== UBICACIÓN + MUNICIPIOS ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-5 leading-tight">{t.location.h2}</h2>
                <p className="text-navy/60 text-lg leading-relaxed mb-8">{t.location.subtitle}</p>
                <Card className="bg-white border border-navy/5 shadow-none mb-6">
                  <CardBody className="p-6 flex flex-row items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-navy/40 text-[10px] font-bold uppercase tracking-widest mb-1">{t.location.addressLabel}</p>
                      <p className="text-navy font-medium leading-snug whitespace-pre-line">{t.location.address}</p>
                    </div>
                  </CardBody>
                </Card>
                <div className="space-y-3 mb-8">
                  {t.location.access.map(({ Icon, text }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-navy/70">{text}</span>
                    </div>
                  ))}
                </div>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-7 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-navy/90 transition-colors">
                  {t.location.mapCta}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
                <Card className="bg-navy border-none shadow-none h-full">
                  <CardBody className="p-8 md:p-10">
                    <p className="text-gold-light text-[10px] font-bold uppercase tracking-[0.2em] mb-6">{t.location.townsLabel}</p>
                    <div className="flex flex-wrap gap-2.5">
                      {TOWNS.map((town) => (
                        <span key={town} className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-2 text-white/85 text-sm">
                          <MapPin className="w-3.5 h-3.5 text-gold-light shrink-0" />
                          {town}
                        </span>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== SERVICIOS ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-5xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="max-w-2xl mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-4">{t.services.h2}</h2>
              <p className="text-navy/60 text-lg leading-relaxed">{t.services.subtitle}</p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.services.items.map(({ title, desc, href }, i) => (
                <motion.div key={i} variants={inView}>
                  <Link href={href} className="group block h-full">
                    <Card className="bg-cream border border-navy/5 shadow-none h-full group-hover:border-gold/30 group-hover:-translate-y-0.5 transition-all">
                      <CardBody className="p-6">
                        <h3 className="font-serif text-xl font-bold text-navy mb-2 flex items-center gap-2">
                          {title}
                          <ArrowUpRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-navy/60 text-sm leading-relaxed">{desc}</p>
                      </CardBody>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== MUNICIPIOS DEL MARESME (H2 + H3 por zona) ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
          <div className="container mx-auto max-w-5xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="max-w-2xl mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-4 leading-tight">{t.municipios.h2}</h2>
              <p className="text-navy/60 text-lg leading-relaxed">{t.municipios.subtitle}</p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-5 mb-8">
              {t.municipios.list.map((m, i) => (
                <motion.div key={i} variants={inView}>
                  <Card className="bg-white border border-navy/5 shadow-none h-full">
                    <CardBody className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="grid place-items-center w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 shrink-0">
                          <MapPin className="w-4 h-4 text-gold" />
                        </span>
                        <h3 className="font-serif text-xl font-bold text-navy">{m.h3}</h3>
                      </div>
                      <p className="text-navy/70 leading-relaxed">{m.p}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={inView} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-navy/60 leading-relaxed border-l-2 border-gold/40 pl-5">
              {t.municipios.note}
            </motion.p>
          </div>
        </section>

        {/* ===== ENFOQUE ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-navy">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">{t.approach.h2}</h2>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light mb-10">{t.approach.p}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button as={Link} href={"/enfoque" as any} className="bg-gold text-white font-bold px-8 py-6 rounded-full text-xs uppercase tracking-widest hover:bg-gold-light transition-all" endContent={<ArrowRight className="w-4 h-4 ml-1" />}>
                  {t.approach.cta1}
                </Button>
                <Button as={Link} href={"/sobre-mi" as any} variant="bordered" className="border-white/25 text-white hover:bg-white/10 font-bold px-8 py-6 rounded-full text-xs uppercase tracking-widest transition-colors">
                  {t.approach.cta2}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== ONLINE ===== */}
        <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Card className="bg-sage/40 border border-gold/15 shadow-none">
                <CardBody className="p-7 md:p-10 md:flex md:items-center md:justify-between gap-8">
                  <div className="mb-6 md:mb-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-2">{t.online.h2}</h3>
                    <p className="text-navy/70 leading-relaxed max-w-xl">{t.online.p}</p>
                  </div>
                  <Button as={Link} href={"/terapia-online" as any} className="bg-navy text-white font-bold px-8 py-6 rounded-full text-xs uppercase tracking-widest hover:bg-navy/90 transition-all shrink-0" endContent={<ArrowRight className="w-4 h-4 ml-1" />}>
                    {t.online.cta}
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy">{t.faq.h2}</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-navy/5">
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
                {t.faq.list.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border border-navy/10 rounded-xl px-6 data-[state=open]:border-gold/30 data-[state=open]:bg-cream/30 transition-all duration-300">
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

        {/* ===== CTA FINAL ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-navy">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="relative overflow-hidden bg-gradient-to-br from-navy-light/40 to-navy rounded-[2.5rem] border border-white/10 p-10 md:p-16 text-center">
              <div className="absolute top-[-30%] right-[-10%] w-[50%] h-[70%] bg-gold/20 rounded-full blur-[120px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">{t.finalCta.h2}</h2>
                <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">{t.finalCta.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button as="a" href={bookingUrl("cierre-maresme")} target="_blank" rel="noopener noreferrer" className="bg-gold text-white font-bold px-9 py-7 rounded-full text-xs uppercase tracking-widest shadow-xl shadow-black/20 hover:bg-gold-light transition-all" endContent={<ArrowRight className="w-4 h-4 ml-1" />}>
                    {t.finalCta.cta1}
                  </Button>
                  <Button as="a" href={waUrl} target="_blank" rel="noopener noreferrer" variant="bordered" className="border-white/25 text-white hover:bg-white/10 font-bold px-9 py-7 rounded-full text-xs uppercase tracking-widest transition-colors" startContent={<MessageCircle className="w-4 h-4" />}>
                    {t.finalCta.cta2}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
