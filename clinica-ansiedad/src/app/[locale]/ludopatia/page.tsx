"use client";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { CheckCircle2, ShieldCheck, Brain, TrendingDown, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LudopatiaHero from "@/components/heroes/LudopatiaHero";
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





export default function LudopatiaPage() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  const symptoms = [
    t("Incapacidad de dejar de jugar aunque se quiera hacerlo.", "Incapacitat de deixar de jugar encara que es vulgui fer."),
    t("Necesidad de apostar cantidades cada vez mayores para sentir la misma emoción.", "Necessitat d'apostar quantitats cada vegada més grans per sentir la mateixa emoció."),
    t("Irritabilidad o ansiedad intensa cuando se intenta reducir el juego.", "Irritabilitat o ansietat intensa quan s'intenta reduir el joc."),
    t("El juego ocupa el pensamiento de forma obsesiva y continua.", "El joc ocupa el pensament de manera obsessiva i contínua."),
    t("Mentiras a familiares o pareja para ocultar la extensión del problema.", "Mentides a familiars o a la parella per amagar l'abast del problema."),
    t("Recurrir a préstamos o deudas para poder seguir jugando.", "Recórrer a préstecs o deutes per poder continuar jugant."),
    t("Intentos fallidos repetidos de controlar o abandonar el juego.", "Intents fallits repetits de controlar o deixar el joc."),
    t("El juego es el mecanismo para escapar de malestar emocional o problemas.", "El joc és el mecanisme per escapar del malestar emocional o dels problemes."),
  ];
  const causes = [
    {
      title: t("La subjetividad que precede a la adicción", "La subjectivitat que precedeix l'addicció"),
      desc: t("La ludopatía no surge de la nada. Hay una estructura psíquica previa —una forma de procesar el vacío, la angustia o el aburrimiento— que encuentra en el juego una solución provisional.", "La ludopatia no sorgeix del no-res. Hi ha una estructura psíquica prèvia —una manera de processar el buit, l'angoixa o l'avorriment— que troba en el joc una solució provisional."),
    },
    {
      title: t("El ciclo de dopamina y expectativa", "El cicle de dopamina i expectativa"),
      desc: t("El juego activa el circuito de recompensa del cerebro. Pero la adicción no es química: es la repetición compulsiva de un patrón que el psiquismo utiliza para regular emociones que no puede gestionar de otra manera.", "El joc activa el circuit de recompensa del cervell. Però l'addicció no és química: és la repetició compulsiva d'un patró que el psiquisme fa servir per regular emocions que no pot gestionar d'una altra manera."),
    },
    {
      title: t("Lo que el juego cubre", "El que el joc tapa"),
      desc: t("Detrás de la ludopatía suele haber angustia, dificultad para tolerar la frustración, conflictos relacionales no resueltos o una sensación de vacío que el juego llena temporalmente.", "Darrere de la ludopatia sol haver-hi angoixa, dificultat per tolerar la frustració, conflictes relacionals no resolts o una sensació de buit que el joc omple temporalment."),
    },
  ];
  const phases = [
    {
      num: "01",
      title: t("Evaluación de la Subjetividad", "Avaluació de la subjectivitat"),
      desc: t("Exploramos el sujeto que hay detrás de la adicción: su historia, sus vínculos, los conflictos emocionales que el juego viene a resolver. La adicción es siempre la respuesta a algo previo.", "Explorem el subjecte que hi ha darrere de l'addicció: la seva història, els seus vincles, els conflictes emocionals que el joc ve a resoldre. L'addicció és sempre la resposta a alguna cosa prèvia."),
    },
    {
      num: "02",
      title: t("Identificación de los Desencadenantes", "Identificació dels desencadenants"),
      desc: t("Localizamos los estados emocionales, situaciones o relaciones que activan el impulso de jugar. Comprender el «para qué» del juego es esencial para desactivarlo.", "Localitzem els estats emocionals, les situacions o les relacions que activen l'impuls de jugar. Comprendre el «per a què» del joc és essencial per desactivar-lo."),
    },
    {
      num: "03",
      title: t("Trabajo sobre el Conflicto de Fondo", "Treball sobre el conflicte de fons"),
      desc: t("Abordamos lo que el juego cubre: la angustia, el vacío, la dificultad para tolerar el malestar. Al resolver el conflicto original, el juego pierde su función y, con ella, su poder.", "Abordem el que el joc tapa: l'angoixa, el buit, la dificultat per tolerar el malestar. En resoldre el conflicte original, el joc perd la seva funció i, amb ella, el seu poder."),
    },
    {
      num: "04",
      title: t("Reconstrucción", "Reconstrucció"),
      desc: t("Desarrollamos recursos internos genuinos para gestionar las emociones difíciles sin recurrir al juego. El objetivo es una vida en la que la adicción ya no sea necesaria.", "Desenvolupem recursos interns genuïns per gestionar les emocions difícils sense recórrer al joc. L'objectiu és una vida en què l'addicció ja no sigui necessària."),
    },
  ];
  const benefits = [
    {
      Icon: Brain,
      title: t("Libertad Mental", "Llibertat mental"),
      desc: t("Los pensamientos obsesivos sobre el juego ceden cuando se aborda la causa emocional que los alimenta.", "Els pensaments obsessius sobre el joc cedeixen quan s'aborda la causa emocional que els alimenta."),
    },
    {
      Icon: ShieldCheck,
      title: t("Control Real", "Control real"),
      desc: t("No gestión de impulsos mediante fuerza de voluntad, sino transformación estructural que hace que el impulso pierda intensidad.", "No es tracta de gestionar impulsos amb força de voluntat, sinó d'una transformació estructural que fa que l'impuls perdi intensitat."),
    },
    {
      Icon: TrendingDown,
      title: t("Reconstrucción Vital", "Reconstrucció vital"),
      desc: t("Relaciones, finanzas, autoestima. La vida que la adicción fue comiendo se puede recuperar con el trabajo adecuado.", "Relacions, finances, autoestima. La vida que l'addicció s'anava menjant es pot recuperar amb el treball adequat."),
    },
  ];
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
      <Navbar />
      <main className="pt-24">
        <LudopatiaHero />

        {/* ===== QUÉ ES ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                {t("Comprender", "Comprendre")}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                {t("La ludopatía no es un problema de disciplina", "La ludopatia no és un problema de disciplina")}
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
                {t("La ludopatía es una adicción vinculada al juego. Una adicción no existe sin un sujeto previo que tenga una subjetividad que pueda dar lugar a ella. El juego en sí no es el problema —es la solución que encontró tu psiquismo para gestionar algo que no podía afrontar de otra manera. Muchos pacientes con ludopatía presentan también", "La ludopatia és una addicció vinculada al joc. Una addicció no existeix sense un subjecte previ amb una subjectivitat que hi pugui donar lloc. El joc en si no és el problema: és la solució que va trobar el teu psiquisme per gestionar una cosa que no podia afrontar d'una altra manera. Molts pacients amb ludopatia presenten també")}{" "}<Link href="/ansiedad" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("ansiedad", "ansietat")}</Link> {t("o", "o")}{" "}<Link href="/depresion" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("depresión", "depressió")}</Link> {t("subyacente.", "de fons.")}
              </motion.p>
              <motion.p variants={inView}>
                {t("Por eso los programas basados exclusivamente en la abstinencia o la fuerza de voluntad tienen tan alta tasa de recaída. No atacan el origen. Mientras el conflicto psíquico subyacente siga activo,", "Per això els programes basats exclusivament en l'abstinència o en la força de voluntat tenen una taxa de recaiguda tan alta. No ataquen l'origen. Mentre el conflicte psíquic de fons continuï actiu,")}{" "}
                <strong className="text-navy font-semibold">{t("el juego o cualquier otra adicción sustituta encontrará la forma de regresar", "el joc o qualsevol altra addicció substitutiva trobarà la manera de tornar")}</strong>.
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {causes.map((item, i) => (
                <motion.div key={i} variants={inView}>
                  <Card className="bg-white border border-navy/5 hover:border-gold/20 transition-all shadow-none">
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
                {t("Señales", "Senyals")}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-4">
                {t("¿Te reconoces?", "Et reconeixes?")}
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10 max-w-2xl">
                {t("La ludopatía avanza de forma progresiva. Estos son los patrones que identifican los pacientes que llegan a consulta.", "La ludopatia avança de manera progressiva. Aquests són els patrons que identifiquen els pacients que arriben a la consulta.")}
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
                  {t("&ldquo;Una adicción no existe sin un sujeto previo. Tratar la ludopatía significa entender qué conflicto psíquico encontró en el juego su única salida posible.&rdquo;", "“Una addicció no existeix sense un subjecte previ. Tractar la ludopatia vol dir entendre quin conflicte psíquic va trobar en el joc l'única sortida possible.”")}
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
                {t("Tratamiento", "Tractament")}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-6">
                {t("Tratamiento de la ludopatía: ir al origen", "Tractament de la ludopatia: anar a l'origen")}
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-16 max-w-2xl">
                {t("No trabajamos solo la conducta adictiva. Trabajamos la estructura psíquica que le dio origen. Sin eso, el ciclo se repite. Tratamiento presencial en Canet de Mar (Maresme) y", "No treballem només la conducta addictiva. Treballem l'estructura psíquica que li va donar origen. Sense això, el cicle es repeteix. Tractament presencial a Canet de Mar (Maresme) i")}{" "}<Link href="/terapia-online" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("terapia online", "teràpia en línia")}</Link> {t("para pacientes de toda Catalunya: Barcelona, Girona, Lleida y Tarragona.", "per a pacients de tot Catalunya: Barcelona, Girona, Lleida i Tarragona.")}
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
                {t("Recuperar el", "Recuperar el")}{" "}
                <span className="text-gold italic font-light">{t("control de tu vida", "control de la teva vida")}</span>
              </h2>
              <p className="text-navy/60 max-w-lg mx-auto font-light">
                {t("No se trata de no jugar. Se trata de no necesitar jugar.", "No es tracta de no jugar. Es tracta de no necessitar jugar.")}
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
                href={bookingUrl("cierre-ludopatia")}
                className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                {t("Solicitar Primera Sesión", "Reservar la primera sessió")}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              {t("La ludopatía frecuentemente coexiste con", "La ludopatia sovint conviu amb")}{" "}
              <Link href="/ansiedad" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("ansiedad", "ansietat")}</Link> {t("y", "i")}{" "}
              <Link href="/depresion" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("depresión", "depressió")}</Link> {t("subyacente.", "de fons.")}
              {t("Tratamiento de ludopatía en Canet de Mar (Maresme) con", "Tractament de la ludopatia a Canet de Mar (Maresme) amb")}{" "}
              <Link href="/servicios/terapia-individual" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("terapia individual", "teràpia individual")}</Link> {t("psicoanalítica, también disponible como", "psicoanalítica, també disponible com a")}{" "}
              <Link href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("terapia online", "teràpia en línia")}</Link> {t("para pacientes de toda Catalunya —Barcelona, Girona, Lleida y Tarragona— y España.", "per a pacients de tot Catalunya —Barcelona, Girona, Lleida i Tarragona— i d'Espanya.")}
            </p>
            <p className="text-navy/50 text-sm leading-relaxed mt-4">
              {t("Consulta presencial en Canet de Mar (Maresme) y terapia online para toda Catalunya, con", "Consulta presencial a Canet de Mar (Maresme) i teràpia en línia per a tot Catalunya, amb")}{" "}
              <Link href="/psicologo-maresme" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("psicoanalista en el Maresme", "psicoanalista al Maresme")}</Link> {t("en la", "a la")}{" "}
              <Link href="/" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("Clínica de la Ansiedad", "Clínica de la Ansiedad Catalunya")}</Link>.
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
