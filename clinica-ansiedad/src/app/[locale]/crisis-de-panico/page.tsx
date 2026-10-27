"use client";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { CheckCircle2, ShieldCheck, Brain, Leaf, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CrisisPanicoHero from "@/components/heroes/CrisisPanicoHero";
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




export default function CrisisDePanicoPage() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  const symptoms = [
    t("Palpitaciones intensas o taquicardia repentina.", "Palpitacions intenses o taquicàrdia sobtada."),
    t("Hiperventilación y sensación de ahogo.", "Hiperventilació i sensació d'ofec."),
    t("Hormigueo o entumecimiento en extremidades.", "Formigueig o adormiment a les extremitats."),
    t("Dolor o presión en el pecho.", "Dolor o pressió al pit."),
    t("Nudo en la garganta que impide tragar.", "Nus a la gola que impedeix empassar."),
    t("Miedo a morir o a perder el control.", "Por de morir o de perdre el control."),
    t("Sudoración, temblores, escalofríos.", "Suor, tremolors, calfreds."),
    t("Mareos, despersonalización o irrealidad.", "Marejos, despersonalització o sensació d'irrealitat."),
  ];
  const phases = [
    {
      num: "01",
      title: t("Contención", "Contenció"),
      desc: t("Un espacio seguro donde narrar lo que vives sin juicio. Herramientas de regulación fisiológica para reducir la intensidad de las crisis y recuperar la sensación de que puedes con esto.", "Un espai segur on explicar el que vius sense judicis. Eines de regulació fisiològica per reduir la intensitat de les crisis i recuperar la sensació que te'n pots sortir."),
    },
    {
      num: "02",
      title: t("Exploración", "Exploració"),
      desc: t("Mediante la escucha clínica y la asociación libre, identificamos qué conflicto emocional se manifiesta como pánico. ¿Qué angustia no resuelta está gritando a través de tu cuerpo?", "Mitjançant l'escolta clínica i l'associació lliure, identifiquem quin conflicte emocional es manifesta com a pànic. Quina angoixa no resolta està cridant a través del teu cos?"),
    },
    {
      num: "03",
      title: t("Desactivación", "Desactivació"),
      desc: t("Desmontamos el ciclo: la anticipación, la hipervigilancia, la evitación. Al integrar las emociones reprimidas, el cuerpo deja de necesitar la crisis como canal de expresión.", "Desmuntem el cicle: l'anticipació, la hipervigilància, l'evitació. En integrar les emocions reprimides, el cos deixa de necessitar la crisi com a canal d'expressió."),
    },
    {
      num: "04",
      title: t("Consolidación", "Consolidació"),
      desc: t("Afianzamos los cambios para que dispongas de recursos internos sólidos. El objetivo: que la ansiedad no vuelva a necesitar el pánico como vía de escape.", "Consolidem els canvis perquè disposis de recursos interns sòlids. L'objectiu: que l'ansietat no torni a necessitar el pànic com a via d'escapament."),
    },
  ];
  const benefits = [
    {
      Icon: ShieldCheck,
      title: t("Fin del Ciclo", "Fi del cicle"),
      desc: t("Desactiva el miedo anticipatorio que alimenta las crisis. Sin miedo al miedo, los ataques pierden su poder.", "Desactiva la por anticipatòria que alimenta les crisis. Sense por a la por, els atacs perden el seu poder."),
    },
    {
      Icon: Brain,
      title: t("Cuerpo en Calma", "Cos en calma"),
      desc: t("Las palpitaciones, la hiperventilación y los mareos se disuelven al abordar la causa emocional que los genera.", "Les palpitacions, la hiperventilació i els marejos es dissolen quan s'aborda la causa emocional que els genera."),
    },
    {
      Icon: Leaf,
      title: t("Libertad", "Llibertat"),
      desc: t("Recupera la capacidad de ir a cualquier lugar, viajar y vivir sin que la sombra del próximo ataque condicione cada decisión.", "Recupera la capacitat d'anar a qualsevol lloc, viatjar i viure sense que l'ombra del pròxim atac condicioni cada decisió."),
    },
  ];
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
      <Navbar />
      <main className="pt-24">
        <CrisisPanicoHero />

        {/* ===== QUÉ ES UN ATAQUE DE PÁNICO ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                {t("Comprender", "Comprendre")}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                {t("Ataques de pánico: qué ocurre y por qué", "Atacs de pànic: què passa i per què")}
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
                {t("Un ataque de pánico es una oleada de miedo intenso que alcanza su pico en minutos y desencadena reacciones físicas brutales sin que exista un peligro real. Es una de las manifestaciones más agudas de la", "Un atac de pànic és una onada de por intensa que arriba al màxim en pocs minuts i desencadena reaccions físiques brutals sense que hi hagi cap perill real. És una de les manifestacions més agudes de")}{" "}<Link href="/ansiedad" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("ansiedad", "l'ansietat")}</Link>{t(". Tu cuerpo reacciona como si estuvieras en peligro de muerte. Y tú, atrapado dentro de esa tormenta, no puedes distinguir la alarma de la realidad.", ". El teu cos reacciona com si estiguessis en perill de mort. I tu, atrapat dins d'aquesta tempesta, no pots distingir l'alarma de la realitat.")}
              </motion.p>
              <motion.p variants={inView}>
                {t("Pero lo más incapacitante no es la crisis en sí. Es lo que viene después: el", "Però el que és més incapacitant no és la crisi en si. És el que ve després: la")}{" "}
                <strong className="text-navy font-semibold">{t("miedo a que vuelva", "por que torni")}</strong>{t(". Ese miedo anticipatorio es lo que convierte un episodio puntual en un trastorno que devora tu vida poco a poco. Empiezas a evitar lugares, situaciones, personas. Tu mundo se encoge.", ". Aquesta por anticipatòria és el que converteix un episodi puntual en un trastorn que et devora la vida a poc a poc. Comences a evitar llocs, situacions, persones. El teu món s'encongeix.")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ===== SÍNTOMAS ===== */}
        <section className="py-20 md:py-24 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-navy/8 text-navy border border-navy/10 text-[10px] font-bold uppercase tracking-widest mb-6">
                {t("Síntomas", "Símptomes")}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-4">
                {t("¿Te reconoces?", "T'hi reconeixes?")}
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10 max-w-2xl">
                {t("Estos son los síntomas que describen los pacientes que llegan a mi consulta. Los conocen bien. Los han sufrido solos demasiado tiempo.", "Aquests són els símptomes que descriuen els pacients que arriben a la meva consulta. Els coneixen bé. Els han patit sols massa temps.")}
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
              {t("Las palpitaciones por ansiedad son las que más asustan porque imitan un infarto. He tenido pacientes que visitaron urgencias cinco, seis, diez veces hasta que un médico les dijo: «Su corazón está perfecto. Esto es ansiedad». Y entonces empezó la segunda angustia:", "Les palpitacions per ansietat són les que més espanten perquè imiten un infart. He tingut pacients que van anar a urgències cinc, sis, deu vegades fins que un metge els va dir: «El seu cor està perfecte. Això és ansietat». I llavors va començar la segona angoixa:")}{" "}
              <em>{t("¿y ahora qué hago con esto?", "i ara què faig amb això?")}</em>
            </motion.p>
          </div>
        </section>

        {/* ===== POR QUÉ — Con pullquote lateral ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                {t("Origen", "Origen")}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                {t("Por qué tu cuerpo entra en pánico", "Per què el teu cos entra en pànic")}
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="lg:col-span-3 space-y-6 text-navy/70 leading-relaxed text-lg"
              >
                <motion.p variants={inView}>
                  {t("Los ataques de pánico no son un fallo aleatorio de tu sistema nervioso. Son la expresión corporal de", "Els atacs de pànic no són una fallada aleatòria del teu sistema nerviós. Són l'expressió corporal de les")}{" "}
                  <strong className="text-navy font-semibold">{t("emociones reprimidas", "emocions reprimides")}</strong> {t("que no han encontrado otra salida. Rabia contenida. Duelo que no pudo ser. Culpa que nadie nombró.", "que no han trobat cap altra sortida. Ràbia continguda. Un dol que no va poder ser. Una culpa que ningú no va anomenar.")}
                </motion.p>
                <motion.p variants={inView}>
                  {t("Aparecen en momentos de transición vital: cambios laborales, rupturas, pérdidas. Las palpitaciones, la hiperventilación, la opresión en el pecho —son el lenguaje somático de una angustia que necesita ser escuchada.", "Apareixen en moments de transició vital: canvis de feina, ruptures, pèrdues. Les palpitacions, la hiperventilació, l'opressió al pit són el llenguatge somàtic d'una angoixa que necessita ser escoltada.")}
                </motion.p>
                <motion.p variants={inView}>
                  {t("Por eso el tratamiento exclusivamente sintomático —solo medicación, solo técnicas de respiración— ofrece alivio temporal. El pánico regresa porque el mensaje sigue sin descifrar. En nuestra consulta de Canet de Mar (Maresme), abordamos los ataques de pánico desde su origen emocional con", "Per això el tractament exclusivament simptomàtic —només medicació, només tècniques de respiració— ofereix un alleujament temporal. El pànic torna perquè el missatge continua sense desxifrar. A la nostra consulta de Canet de Mar (Maresme) abordem els atacs de pànic des del seu origen emocional amb")}{" "}<Link href="/enfoque" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("psicoanálisis directo", "psicoanàlisi directa")}</Link>{t(", disponible también como", ", disponible també com a")}{" "}<Link href="/terapia-online" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("terapia online", "teràpia en línia")}</Link> {t("para pacientes de Barcelona, Girona, Lleida, Tarragona y toda Catalunya.", "per a pacients de Barcelona, Girona, Lleida, Tarragona i tot Catalunya.")}
                </motion.p>
              </motion.div>

              <motion.div
                variants={inView}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <Card className="bg-sage/20 border border-sage/30 shadow-none">
                  <CardBody className="p-8">
                    <div className="w-8 h-1 bg-gold mb-6" />
                    <p className="font-serif text-xl text-navy italic leading-snug font-light mb-6">
                      &ldquo;{t("El ataque de pánico no es el enemigo. Es una señal urgente del psiquismo. Cuando aprendemos a descifrarla, el cuerpo deja de gritar.", "L'atac de pànic no és l'enemic. És un senyal urgent del psiquisme. Quan aprenem a desxifrar-lo, el cos deixa de cridar.")}&rdquo;
                    </p>
                    <p className="font-bold tracking-[0.15em] uppercase text-[11px] text-navy/50">Joan Ramon Soto</p>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
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
                {t("Cómo trabajamos el trastorno de pánico", "Com treballem el trastorn de pànic")}
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-16 max-w-2xl">
                {t("Combinamos la contención inmediata del síntoma con la exploración profunda de sus causas. Porque necesitas dejar de sufrir ahora —y necesitas que no vuelva a pasar. Con frecuencia, las crisis de pánico coexisten con", "Combinem la contenció immediata del símptoma amb l'exploració profunda de les seves causes. Perquè necessites deixar de patir ara, i necessites que no torni a passar. Sovint les crisis de pànic conviuen amb la")}{" "}<Link href="/depresion" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("depresión", "depressió")}</Link>{t(", y nuestro tratamiento contempla ambas dimensiones.", ", i el nostre tractament té en compte totes dues dimensions.")}
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
{t("                        Fase {step.num}", "                        Fase {step.num}")}
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
                {t("Recupera tu", "Recupera la teva")}{" "}
                <span className="text-gold italic font-light">{t("Vida sin Miedo", "vida sense por")}</span>
              </h2>
              <p className="text-navy/60 max-w-lg mx-auto font-light">
                {t("El tratamiento adecuado transforma la ansiedad: de amenaza constante a una señal que ya no necesita el pánico.", "El tractament adequat transforma l'ansietat: d'amenaça constant a un senyal que ja no necessita el pànic.")}
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
                  <Card className="bg-white border border-navy/5 hover:border-gold/20 transition-all hover:-translate-y-1 shadow-none h-full">
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
                href={bookingUrl("cierre-crisis-de-panico")}
                className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                {t("Solicitar Primera Sesión", "Sol·licitar la primera sessió")}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              {t("Los ataques de pánico son una de las manifestaciones más agudas de la", "Els atacs de pànic són una de les manifestacions més agudes de")}{" "}
              <Link href="/ansiedad" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("ansiedad", "l'ansietat")}</Link>{t(". Con frecuencia coexisten con", ". Sovint conviuen amb la")}{" "}
              <Link href="/depresion" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("depresión", "depressió")}</Link> {t("o se vinculan a", "o es vinculen a la")}{" "}
              <Link href="/celos" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("celos patológicos", "gelosia patològica")}</Link> {t("que generan angustia constante.", ", que genera una angoixa constant.")}
              {t("Tratamiento de ataques de pánico en Canet de Mar (Maresme) con", "Tractament dels atacs de pànic a Canet de Mar (Maresme) amb")}{" "}
              <Link href="/servicios/terapia-individual" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("terapia individual", "teràpia individual")}</Link> {t("presencial y", "presencial i")}{" "}
              <Link href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("terapia online", "teràpia en línia")}</Link> {t("para toda Catalunya y España.", "per a tot Catalunya i Espanya.")}
            </p>
            <p className="text-navy/50 text-sm leading-relaxed mt-4">
              {t("Consulta presencial en Canet de Mar (Maresme) y terapia online para toda Catalunya, con", "Consulta presencial a Canet de Mar (Maresme) i teràpia en línia per a tot Catalunya, amb")}{" "}
              <Link href="/psicologo-maresme" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("psicoanalista en el Maresme", "psicoanalista al Maresme")}</Link> {t("en la", "a la")}{" "}
              <Link href="/" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("Clínica de la Ansiedad", "Clínica de la Ansiedad Catalunya")}</Link>{t(".", ".")}
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
