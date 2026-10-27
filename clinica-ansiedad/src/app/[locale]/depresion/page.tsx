"use client";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { CheckCircle2, Sun, Heart, ShieldCheck, ArrowRight } from "lucide-react";
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





export default function DepresionPage() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  const symptoms = [
    t("Tristeza profunda que no remite con el tiempo.", "Tristesa profunda que no remet amb el temps."),
    t("Pérdida de interés en actividades que antes disfrutabas.", "Pèrdua d'interès per activitats que abans gaudies."),
    t("Fatiga constante y pesadez física sin causa médica.", "Fatiga constant i pesantor física sense causa mèdica."),
    t("Insomnio, despertares nocturnos o hipersomnia.", "Insomni, despertars nocturns o hipersòmnia."),
    t("Dificultad de concentración y bloqueo mental.", "Dificultat de concentració i bloqueig mental."),
    t("Culpa desproporcionada o autocrítica destructiva.", "Culpa desproporcionada o autocrítica destructiva."),
    t("Aislamiento social progresivo.", "Aïllament social progressiu."),
    t("Ansiedad combinada: opresión en el pecho y anticipación catastrófica.", "Ansietat combinada: opressió al pit i anticipació catastròfica."),
  ];
  const phases = [
    {
      num: "01",
      title: t("Evaluación Profunda", "Avaluació en profunditat"),
      desc: t("Una primera conversación clínica extensa donde exploramos tu historia vital, tus vínculos y el contexto emocional en que apareció la depresión. Sin cuestionarios fríos. Sin protocolos mecánicos.", "Una primera conversa clínica extensa on explorem la teva història vital, els teus vincles i el context emocional en què va aparèixer la depressió. Sense qüestionaris freds. Sense protocols mecànics."),
    },
    {
      num: "02",
      title: t("Exploración del Origen", "Exploració de l'origen"),
      desc: t("Identificamos juntos las pérdidas no elaboradas, los conflictos inconscientes y los patrones repetitivos que alimentan el estado depresivo y la ansiedad asociada.", "Identifiquem junts les pèrdues no elaborades, els conflictes inconscients i els patrons repetitius que alimenten l'estat depressiu i l'ansietat associada."),
    },
    {
      num: "03",
      title: t("Elaboración del Duelo", "Elaboració del dol"),
      desc: t("Un espacio seguro para transitar las emociones bloqueadas —la tristeza, la rabia, la frustración— sin juicio, permitiendo que el proceso de duelo se complete por fin.", "Un espai segur per travessar les emocions bloquejades —la tristesa, la ràbia, la frustració— sense judici, perquè el procés de dol es pugui completar per fi."),
    },
    {
      num: "04",
      title: t("Reconstrucción", "Reconstrucció"),
      desc: t("A medida que los conflictos se resuelven, acompañamos la reconexión con el deseo, los proyectos y las relaciones significativas. La vida vuelve a tener sentido —no porque te lo digamos, sino porque lo sientes.", "A mesura que els conflictes es resolen, acompanyem la reconnexió amb el desig, els projectes i les relacions significatives. La vida torna a tenir sentit, no perquè t'ho diguem, sinó perquè ho sents."),
    },
  ];
  const stats = [
    { value: "30+", label: t("Años de experiencia", "Anys d'experiència"), valueClass: "text-gold" },
    { value: "+1K", label: t("Pacientes tratados", "Pacients tractats"), valueClass: "text-navy" },
  ];
  const benefits = [
    {
      Icon: Sun,
      title: t("Vitalidad", "Vitalitat"),
      desc: t("La energía vuelve cuando los conflictos dejan de consumirla. Volverás a sentir motivación genuina.", "L'energia torna quan els conflictes deixen de consumir-la. Tornaràs a sentir una motivació genuïna."),
    },
    {
      Icon: Heart,
      title: t("Reconexión", "Reconnexió"),
      desc: t("Restaurar la capacidad de experimentar alegría y afecto sin el filtro del vacío depresivo.", "Recuperar la capacitat d'experimentar alegria i afecte sense el filtre del buit depressiu."),
    },
    {
      Icon: ShieldCheck,
      title: t("Cambios Duraderos", "Canvis duradors"),
      desc: t("Trabajar desde el origen busca construir una base psíquica más sólida frente a futuros episodios.", "Treballar des de l'origen busca construir una base psíquica més sòlida davant de futurs episodis."),
    },
  ];
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
                {t("Comprender", "Comprendre")}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                {t("Depresión y ansiedad: dos caras del mismo dolor", "Depressió i ansietat: dues cares del mateix dolor")}
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
                {t("Más del 60% de las personas con depresión experimentan simultáneamente", "Més del 60% de les persones amb depressió experimenten alhora")}{" "}<Link href="/ansiedad" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("síntomas de ansiedad", "símptomes d'ansietat")}</Link>{t(". No es casualidad. Ambas comparten un origen: conflictos emocionales profundos que no se han podido resolver, pérdidas que no se han llorado, una relación deteriorada con uno mismo que viene de lejos.", ". No és casualitat. Totes dues comparteixen un origen: conflictes emocionals profunds que no s'han pogut resoldre, pèrdues que no s'han plorat, una relació deteriorada amb un mateix que ve de lluny.")}
              </motion.p>
              <motion.p variants={inView}>
                {t("La ansiedad grita. La depresión se calla. Mientras una te mantiene en alerta permanente, la otra te empuja al repliegue —el mundo exterior deja de despertar interés, los proyectos pierden sentido, las relaciones se vuelven un esfuerzo agotador.", "L'ansietat crida. La depressió calla. Mentre una et manté en alerta permanent, l'altra t'empeny a replegar-te: el món exterior deixa de despertar interès, els projectes perden sentit, les relacions es tornen un esforç esgotador.")}
              </motion.p>
              <motion.p variants={inView}>
                {t("En nuestra consulta de Canet de Mar (Maresme) he visto a personas brillantes convencidas de que la depresión era un defecto suyo. No lo es. Es una señal —dura, dolorosa— pero una señal que, bien descifrada, abre la puerta a una transformación real. Como psicoanalista especialista en depresión en el Maresme, trato la depresión y ansiedad con psicoterapia psicoanalítica, también disponible como", "A la nostra consulta de Canet de Mar (Maresme) he vist persones brillants convençudes que la depressió era un defecte seu. No ho és. És un senyal —dur, dolorós—, però un senyal que, ben desxifrat, obre la porta a una transformació real. Com a psicoanalista especialista en depressió al Maresme, tracto la depressió i l'ansietat amb psicoteràpia psicoanalítica, també disponible com a")}{" "}<Link href="/terapia-online" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("terapia online", "teràpia en línia")}</Link> {t("para pacientes de toda Catalunya —Girona, Lleida, Tarragona— y toda España.", "per a pacients de tot Catalunya —Barcelona, Girona, Lleida, Tarragona— i de tot Espanya.")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ===== SÍNTOMAS ===== */}
        <section className="py-20 md:py-24 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-navy/8 text-navy border border-navy/10 text-[10px] font-bold uppercase tracking-widest mb-6">
                {t("Síntomas", "Símptomes")}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-4">
                {t("Señales que no puedes seguir ignorando", "Senyals que no pots continuar ignorant")}
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10 max-w-2xl">
                {t("La depresión no siempre llora. A veces se disfraza de cansancio crónico, de irritabilidad, de indiferencia.", "La depressió no sempre plora. De vegades es disfressa de cansament crònic, d'irritabilitat, d'indiferència.")}
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
                {t("Origen", "Origen")}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                {t("Lo que sostiene la depresión desde dentro", "El que sosté la depressió des de dins")}
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
                  {t("La depresión no surge de un «desequilibrio químico» aislado. Esa explicación es profundamente insuficiente. La depresión es la expresión de un", "La depressió no sorgeix d'un «desequilibri químic» aïllat. Aquesta explicació és profundament insuficient. La depressió és l'expressió d'un")}{" "}
                  <strong className="text-navy font-semibold">{t("duelo no elaborado", "dol no elaborat")}</strong> {t("—de pérdidas reales o simbólicas que tu psiquismo no pudo procesar.", "—de pèrdues reals o simbòliques que el teu psiquisme no va poder processar.")}
                </motion.p>
                <motion.p variants={inView}>
                  {t("Puede ser la pérdida de una relación. De un ideal de vida. De la imagen que tenías de ti mismo. Cuando estas pérdidas no se trabajan, la energía vital se retira hacia dentro. Te desconectas de tus deseos, de tus proyectos, de tus vínculos.", "Pot ser la pèrdua d'una relació. D'un ideal de vida. De la imatge que tenies de tu mateix. Quan aquestes pèrdues no es treballen, l'energia vital es retira cap endins. Et desconnectes dels teus desitjos, dels teus projectes, dels teus vincles.")}
                </motion.p>
                <motion.p variants={inView}>
                  {t("Los conflictos de fondo —la rabia no expresada, la culpa que nadie nombró, las expectativas imposibles— actúan como anclas. Sin abordarlos, cualquier intervención se limita a gestionar síntomas. Y los síntomas vuelven.", "Els conflictes de fons —la ràbia no expressada, la culpa que ningú no va anomenar, les expectatives impossibles— actuen com a àncores. Sense abordar-los, qualsevol intervenció es limita a gestionar símptomes. I els símptomes tornen.")}
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
                        {t("&ldquo;La depresión no es debilidad. Es un grito del psiquismo que necesita ser descifrado con rigor y con afecto.&rdquo;", "“La depressió no és feblesa. És un crit del psiquisme que necessita ser desxifrat amb rigor i amb afecte.”")}
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
                {t("Proceso", "Procés")}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-6">
                {t("Un proceso que transforma", "Un procés que transforma")}
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-16 max-w-2xl">
                {t("Nuestro tratamiento de la depresión no busca parches temporales. Mediante nuestro", "El nostre tractament de la depressió no busca pegats temporals. Mitjançant el nostre")} <Link href="/enfoque" className="text-navy/70 hover:text-gold transition-colors underline decoration-gold/30">{t("método de Psicoanálisis Directo", "mètode de psicoanàlisi directa")}</Link>{t(", trabajamos para que comprendas el origen de tu sufrimiento y puedas transformar tu relación con él de forma duradera. Mediante", ", treballem perquè comprenguis l'origen del teu patiment i puguis transformar la teva relació amb ell de manera duradora. Mitjançant")}{" "}<Link href="/enfoque" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("nuestro enfoque psicoanalítico", "el nostre enfocament psicoanalític")}</Link>{t(", identificamos el origen del malestar en", ", identifiquem l'origen del malestar en")}{" "}<Link href="/servicios/terapia-individual" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("sesiones individuales", "sessions individuals")}</Link> {t("presenciales o a distancia.", "presencials o a distància.")}
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
                {t("Volver a", "Tornar a")}{" "}
                <span className="text-gold italic font-light">{t("Sentir", "Sentir")}</span>
              </h2>
              <p className="text-navy/60 max-w-lg mx-auto font-light">
                {t("El objetivo no es dejar de estar triste. Es reconectar con el deseo de vivir plenamente.", "L'objectiu no és deixar d'estar trist. És reconnectar amb el desig de viure plenament.")}
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
                {t("Solicitar Valoración", "Reservar la primera sessió")}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 bg-white border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              {t("La depresión y la ansiedad comparten raíces profundas. Muchos de nuestros pacientes presentan también", "La depressió i l'ansietat comparteixen arrels profundes. Molts dels nostres pacients presenten també")}{" "}
              <Link href="/ansiedad" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("trastorno de ansiedad generalizada", "trastorn d'ansietat generalitzada")}</Link>,{" "}
              <Link href="/crisis-de-panico" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("crisis de pánico", "crisis de pànic")}</Link> o{" "}
              <Link href="/ludopatia" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("adicciones", "addiccions")}</Link> {t("vinculadas al vacío depresivo.", "vinculades al buit depressiu.")}
              {t("Ofrecemos", "Oferim")} <Link href="/servicios/terapia-individual" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("terapia individual", "teràpia individual")}</Link> y{" "}
              <Link href="/servicios/dimension-familiar" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("terapia familiar", "teràpia familiar")}</Link> {t("en Canet de Mar (Maresme) y", "a Canet de Mar (Maresme) i")}{" "}
              <Link href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("terapia online", "teràpia en línia")}</Link> {t("para toda Catalunya y España.", "per a tot Catalunya i Espanya.")}
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
