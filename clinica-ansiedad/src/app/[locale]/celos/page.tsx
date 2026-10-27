"use client";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { CheckCircle2, Heart, ShieldCheck, Users, ArrowRight } from "lucide-react";
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





export default function CelosPage() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  const symptoms = [
    t("Necesidad compulsiva de verificar la fidelidad de la pareja.", "Necessitat compulsiva de verificar la fidelitat de la parella."),
    t("Pensamientos intrusivos y rumiación constante sobre el otro.", "Pensaments intrusius i rumiació constant sobre l'altre."),
    t("Interrogatorios repetitivos que deterioran la relación.", "Interrogatoris repetitius que deterioren la relació."),
    t("Vigilancia del móvil, redes sociales o movimientos del otro.", "Vigilància del mòbil, de les xarxes socials o dels moviments de l'altre."),
    t("Sensación de amenaza ante cualquier persona del entorno.", "Sensació d'amenaça davant de qualsevol persona de l'entorn."),
    t("Baja autoestima profundamente vinculada al vínculo afectivo.", "Baixa autoestima profundament lligada al vincle afectiu."),
    t("Explosiones de rabia o llanto incontrolables.", "Explosions de ràbia o de plor incontrolables."),
    t("Incapacidad de confiar aunque no existan motivos reales.", "Incapacitat de confiar encara que no hi hagi motius reals."),
  ];
  const types = [
    {
      title: t("Celos normales", "Gelosia normal"),
      desc: t("Estados afectivos presentes en todos. Aparecen especialmente en la infancia y en el inicio de relaciones importantes. No interfieren en la vida cotidiana.", "Estats afectius presents en tothom. Apareixen sobretot a la infància i a l'inici de relacions importants. No interfereixen en la vida quotidiana."),
    },
    {
      title: t("Celos patológicos", "Gelosia patològica"),
      desc: t("Cuando la intensidad supera cualquier proporcionalidad con la realidad. Se convierten en una tortura continua para quien los padece y para su entorno.", "Quan la intensitat supera qualsevol proporció amb la realitat. Es converteix en una tortura contínua per a qui la pateix i per al seu entorn."),
    },
    {
      title: t("Celos retroactivos", "Gelosia retroactiva"),
      desc: t("Sufrimiento por el pasado de la pareja —sus relaciones anteriores, sus experiencias— sobre el que no existe ningún control posible.", "Patiment pel passat de la parella —les seves relacions anteriors, les seves experiències— sobre el qual no hi ha cap control possible."),
    },
    {
      title: t("Celos proyectivos", "Gelosia projectiva"),
      desc: t("El sujeto atribuye al otro sus propios deseos inconscientes. Lo que teme del otro es, en realidad, lo que teme de sí mismo.", "El subjecte atribueix a l'altre els seus propis desitjos inconscients. El que tem de l'altre és, en realitat, el que tem de si mateix."),
    },
  ];
  const phases = [
    {
      num: "01",
      title: t("Evaluación del Origen", "Avaluació de l'origen"),
      desc: t("Exploramos la historia afectiva: los primeros vínculos de apego, los modelos relacionales interiorizados, las pérdidas no elaboradas que alimentan el miedo al abandono.", "Explorem la història afectiva: els primers vincles d'aferrament, els models relacionals interioritzats, les pèrdues no elaborades que alimenten la por a l'abandonament."),
    },
    {
      num: "02",
      title: t("Identificación del Conflicto", "Identificació del conflicte"),
      desc: t("Los celos patológicos siempre encubren otra cosa —baja autoestima, heridas de infancia, desconfianza estructural. Nombrarlo es el primer paso para desactivarlo.", "La gelosia patològica sempre amaga una altra cosa —baixa autoestima, ferides d'infància, desconfiança estructural. Anomenar-ho és el primer pas per desactivar-la."),
    },
    {
      num: "03",
      title: t("Trabajo sobre la Autoestima", "Treball sobre l'autoestima"),
      desc: t("Construimos una relación contigo mismo desde la cual ya no necesites la verificación constante del otro para sentirte valioso y querido.", "Construïm una relació amb tu mateix des de la qual ja no necessitis la verificació constant de l'altre per sentir-te valuós i estimat."),
    },
    {
      num: "04",
      title: t("Consolidación", "Consolidació"),
      desc: t("Los celos dejan de ser el eje de tu vida afectiva. Emergen vínculos basados en la confianza real, no en el control y la vigilancia.", "La gelosia deixa de ser l'eix de la teva vida afectiva. Sorgeixen vincles basats en la confiança real, no en el control i la vigilància."),
    },
  ];
  const benefits = [
    {
      Icon: Heart,
      title: t("Vínculos Sanos", "Vincles sans"),
      desc: t("Relaciones basadas en la confianza genuina, no en la verificación constante ni el miedo al abandono.", "Relacions basades en la confiança genuïna, no en la verificació constant ni en la por a l'abandonament."),
    },
    {
      Icon: ShieldCheck,
      title: t("Paz Interior", "Pau interior"),
      desc: t("Fin de la rumiación obsesiva. La mente deja de estar secuestrada por pensamientos intrusivos sobre el otro.", "Fi de la rumiació obsessiva. La ment deixa d'estar segrestada per pensaments intrusius sobre l'altre."),
    },
    {
      Icon: Users,
      title: t("Autoestima Real", "Autoestima real"),
      desc: t("Tu valor deja de depender de la mirada o la fidelidad del otro. Construyes una seguridad que viene de dentro.", "El teu valor deixa de dependre de la mirada o de la fidelitat de l'altre. Construeixes una seguretat que ve de dins."),
    },
  ];
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
                {t("Comprender", "Comprendre")}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                {t("Los celos: de lo normal a lo patológico", "La gelosia: del que és normal al que és patològic")}
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
                {t("Los celos son unos estados afectivos normales —todo el mundo los tiene en algún momento u otro de su vida, pero sobre todo en la infancia. El problema aparece cuando trascienden su función adaptativa y se convierten en una prisión.", "La gelosia és un estat afectiu normal: tothom l'experimenta en algun moment de la vida, però sobretot a la infància. El problema apareix quan depassa la seva funció adaptativa i es converteix en una presó.")}
              </motion.p>
              <motion.p variants={inView}>
                {t("Los celos patológicos no tienen que ver con la conducta real del otro. Tienen que ver con", "La gelosia patològica no té a veure amb la conducta real de l'altre. Té a veure amb")}{" "}
                <strong className="text-navy font-semibold">{t("heridas internas no resueltas", "ferides internes no resoltes")}</strong>{t(": miedo al abandono, baja autoestima, desconfianza básica aprendida en los primeros vínculos. El otro es el escenario, pero el conflicto está dentro. Cuando los celos afectan la relación de pareja, puede ser necesario complementar con", ": por a l'abandonament, baixa autoestima, desconfiança bàsica apresa en els primers vincles. L'altre és l'escenari, però el conflicte és a dins. Quan la gelosia afecta la relació de parella, pot caldre complementar-ho amb")}{" "}<Link href="/servicios/terapia-de-pareja" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("terapia de pareja", "teràpia de parella")}</Link>.
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
                {t("Señales", "Senyals")}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-4">
                {t("¿Te reconoces?", "Et reconeixes?")}
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10 max-w-2xl">
                {t("Los celos patológicos se manifiestan de formas muy concretas. Si te identificas con varios de estos patrones, no estás «loco» —estás sufriendo algo que tiene solución.", "La gelosia patològica es manifesta de maneres molt concretes. Si t'identifiques amb diversos d'aquests patrons, no estàs «boig»: estàs patint una cosa que té solució.")}
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
                {t("Origen", "Origen")}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                {t("Por qué aparecen los celos patológicos", "Per què apareix la gelosia patològica")}
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
                {t("Los celos patológicos no surgen de la nada. Son el síntoma de una estructura psíquica que aprendió que el amor es escaso, que el abandono es inevitable, que uno no es suficientemente valioso para ser elegido y retenido.", "La gelosia patològica no sorgeix del no-res. És el símptoma d'una estructura psíquica que va aprendre que l'amor és escàs, que l'abandonament és inevitable, que un no és prou valuós per ser escollit i retingut.")}
              </motion.p>
              <motion.p variants={inView}>
                {t("Esa aprendizaje viene de lejos —de relaciones de apego tempranas, de experiencias de traición real que dejaron una marca, de modelos familiares donde los celos formaban parte del paisaje afectivo cotidiano. Los celos frecuentemente se acompañan de", "Aquest aprenentatge ve de lluny: de relacions d'aferrament primerenques, d'experiències de traïció real que van deixar petjada, de models familiars on la gelosia formava part del paisatge afectiu quotidià. La gelosia sovint va acompanyada d'")}{" "}<Link href="/ansiedad" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("ansiedad intensa", "ansietat intensa")}</Link> {t("que requiere tratamiento conjunto.", "que requereix un tractament conjunt.")}
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
                  {t("&ldquo;Los celos no son una debilidad moral ni una señal de amor intenso. Son la expresión de una herida que lleva demasiado tiempo sin ser atendida.&rdquo;", "“La gelosia no és una feblesa moral ni un senyal d'amor intens. És l'expressió d'una ferida que fa massa temps que no és atesa.”")}
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
                {t("Cómo trabajamos los celos", "Com treballem la gelosia")}
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-16 max-w-2xl">
                {t("No se trata de aprender a «gestionar» los celos. Se trata de comprender qué herida los origina —y sanarla. En nuestra consulta de Canet de Mar (Maresme), trabajamos los celos patológicos con", "No es tracta d'aprendre a «gestionar» la gelosia. Es tracta de comprendre quina ferida l'origina, i guarir-la. A la nostra consulta de Canet de Mar (Maresme) treballem la gelosia patològica amb")}{" "}<Link href="/enfoque" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("psicoanálisis directo", "psicoanàlisi directa")}</Link>{t(", presencial y", ", presencialment i")}{" "}<Link href="/terapia-online" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("online", "en línia")}</Link> {t("para toda Catalunya.", "per a tot Catalunya.")}
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
                {t("Una vida", "Una vida")}{" "}
                <span className="text-gold italic font-light">{t("sin el peso de los celos", "sense el pes de la gelosia")}</span>
              </h2>
              <p className="text-navy/60 max-w-lg mx-auto font-light">
                {t("El objetivo no es dejar de querer. Es aprender a querer desde la seguridad, no desde el miedo.", "L'objectiu no és deixar d'estimar. És aprendre a estimar des de la seguretat, no des de la por.")}
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
                {t("Solicitar Valoración", "Reservar la primera sessió")}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              {t("Los celos patológicos generan", "La gelosia patològica genera")}{" "}
              <Link href="/ansiedad" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("ansiedad intensa", "ansietat intensa")}</Link> {t("y pueden derivar en", "i pot derivar en")}{" "}
              <Link href="/crisis-de-panico" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("crisis de pánico", "crisis de pànic")}</Link> {t("o", "o")}{" "}
              <Link href="/depresion" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("depresión", "depressió")}</Link>.
              {t("Psicoanalista especialista en celos en Canet de Mar (Maresme). Ofrecemos", "Psicoanalista especialista en gelosia a Canet de Mar (Maresme). Oferim")}{" "}
              <Link href="/servicios/terapia-de-pareja" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("terapia de pareja", "teràpia de parella")}</Link> {t("y", "i")}{" "}
              <Link href="/servicios/terapia-individual" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("terapia individual", "teràpia individual")}</Link> {t("en Canet de Mar (Maresme) y", "a Canet de Mar (Maresme) i")}{" "}
              <Link href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("terapia online", "teràpia en línia")}</Link> {t("para toda Catalunya.", "per a tot Catalunya.")}
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
