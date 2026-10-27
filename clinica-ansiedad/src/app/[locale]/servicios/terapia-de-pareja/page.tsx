"use client";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/routing";
import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { HeartHandshake, MessageCircle, Flame, Scale, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingOptions from "@/components/servicios/BookingOptions";
import FAQSection from "@/components/sections/FAQSection";
import StickyBookingButton from "@/components/servicios/StickyBookingButton";
import TerapiaDeParejaHero from "@/components/heroes/TerapiaDeParejaHero";
import { bookingUrl } from "@/lib/constants";

const inView: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};




export default function TerapiaDeParejaPage() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  const indications = [
    t("Problemas de comunicación o discusiones constantes sin resolución.", "Problemes de comunicació o discussions constants sense resolució."),
    t("Infidelidades o pérdida de confianza en el otro.", "Infidelitats o pèrdua de confiança en l'altre."),
    t("Desconexión emocional, apatía o sensación de convivir con un desconocido.", "Desconnexió emocional, apatia o sensació de conviure amb un desconegut."),
    t("Dificultades en la esfera sexual o falta de intimidad.", "Dificultats en l'àmbit sexual o falta d'intimitat."),
    t("Conflictos sobre la crianza de los hijos o familias políticas.", "Conflictes sobre la criança dels fills o amb la família política."),
    t("Dudas serias sobre la continuidad de la relación.", "Dubtes seriosos sobre la continuïtat de la relació."),
  ];
  const approach = [
    {
      title: t("Traducir el conflicto", "Traduir el conflicte"),
      desc: t("Identificamos las verdaderas necesidades emocionales que se esconden detrás de las discusiones superficiales o los silencios punitivos.", "Identifiquem les veritables necessitats emocionals que s'amaguen darrere de les discussions superficials o dels silencis punitius."),
    },
    {
      title: t("Gestión Emocional Compartida", "Gestió emocional compartida"),
      desc: t("Enseñamos técnicas efectivas de comunicación no violenta y asertividad para romper dinámicas destructivas.", "Ensenyem tècniques efectives de comunicació no violenta i assertivitat per trencar dinàmiques destructives."),
    },
    {
      title: t("Reparación del Daño", "Reparació del dany"),
      desc: t("Trabajamos estratégicamente en la restauración de la confianza tras crisis severas como la infidelidad.", "Treballem estratègicament en la reconstrucció de la confiança després de crisis greus com la infidelitat."),
    },
    {
      title: t("Acuerdos Estables", "Acords estables"),
      desc: t("Consolidamos pautas de convivencia saludables que fomenten la intimidad, el respeto y la autonomía dentro de la pareja.", "Consolidem pautes de convivència saludables que afavoreixin la intimitat, el respecte i l'autonomia dins la parella."),
    },
  ];
  const benefits = [
    {
      Icon: MessageCircle,
      title: t("Comunicación Efectiva", "Comunicació efectiva"),
      desc: t("Desactivaréis la lectura de mentes y el rencor acumulado. Aprenderéis a solicitar lo que necesitáis sin ataques ni hostilidad.", "Desactivareu la lectura de pensament i el rancor acumulat. Aprendreu a demanar el que necessiteu sense atacs ni hostilitat."),
    },
    {
      Icon: Flame,
      title: t("Reconexión Íntima", "Reconnexió íntima"),
      desc: t("Al reducirse el resentimiento diario, vuelve a generarse el espacio psicológico necesario para la curiosidad, la admiración y la cercanía emocional.", "En reduir-se el ressentiment diari, torna a generar-se l'espai psicològic necessari per a la curiositat, l'admiració i la proximitat emocional."),
    },
    {
      Icon: Scale,
      title: t("Acuerdos Equitativos", "Acords equitatius"),
      desc: t("Estableceréis un reparto justo de responsabilidades invisibles, disolviendo la sensación de desequilibrio e invisibilidad en la pareja.", "Establireu un repartiment just de les responsabilitats invisibles i dissoldreu la sensació de desequilibri i d'invisibilitat dins la parella."),
    },
  ];
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
      <Navbar />
      <main>
        <TerapiaDeParejaHero />

        {/* ===== CUÁNDO ACUDIR ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                {t("Indicaciones", "Indicacions")}
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-6">
                {t("¿Cuándo acudir a Terapia de Pareja?", "Quan cal anar a teràpia de parella?")}
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10 max-w-2xl">
                {t("Las crisis en las relaciones son dolorosas y desgastantes. La terapia es especialmente efectiva cuando enfrentáis: Consulta de terapia de pareja en Canet de Mar (Maresme) y", "Les crisis en les relacions són doloroses i desgastants. La teràpia és especialment útil quan us trobeu amb situacions com aquestes. Consulta de teràpia de parella a Canet de Mar (Maresme) i")}{" "}<Link href="/terapia-online" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("sesiones online", "sessions en línia")}</Link> {t("para parejas de toda Catalunya.", "per a parelles de tot Catalunya.")}
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-3 mb-10"
            >
              {indications.map((item, i) => (
                <motion.div key={i} variants={inView} className="flex items-start gap-3 py-3 px-4 rounded-xl hover:bg-white/70 transition-colors">
                  <HeartHandshake className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-navy/70">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Card className="bg-gold/10 border border-gold/20 shadow-none">
                <CardBody className="p-6 md:p-8">
                  <h3 className="font-serif text-xl font-bold text-navy mb-2">{t("Nuestro objetivo", "El nostre objectiu")}</h3>
                  <p className="text-navy/70">
                    {t("Convertir la crisis en una oportunidad de crecimiento, construyendo una relación más madura, consciente y conectada, o facilitando una separación sana y respetuosa si ese es el camino elegido.", "Convertir la crisi en una oportunitat de creixement, construint una relació més madura, conscient i connectada, o facilitant una separació sana i respectuosa si aquest és el camí escollit.")}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* ===== RECONSTRUIR EL VÍNCULO ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                variants={inView}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
              >
                <Chip size="sm" className="bg-navy/8 text-navy border border-navy/10 text-[10px] font-bold uppercase tracking-widest mb-6">
                  {t("Metodología", "Metodologia")}
                </Chip>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                  {t("Reconstruir el vínculo", "Reconstruir el vincle")}
                </h2>
                <p className="text-navy/60 text-lg leading-relaxed mb-8">
                  {t("Las crisis de pareja a menudo ocultan malestares individuales no resueltos o patrones de comunicación disfuncionales. Nuestro enfoque ayuda a", "Les crisis de parella sovint amaguen malestars individuals no resolts o patrons de comunicació disfuncionals. El nostre enfocament ajuda a")}{" "}
                  <strong className="text-navy font-semibold">{t("desarticular los reproches cruzados", "desarticular els retrets creuats")}</strong>{" "}
                  {t("para dar paso a un diálogo genuino. Los", "per donar pas a un diàleg genuí. La")}{" "}<Link href="/celos" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("celos patológicos", "gelosia patològica")}</Link> {t("o la", "o l'")}{" "}<Link href="/ansiedad" className="text-gold hover:text-gold/80 underline underline-offset-2">{t("ansiedad", "ansietat")}</Link> {t("de uno de los miembros pueden ser el detonante de la crisis.", "d'un dels membres poden ser el detonant de la crisi.")}
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {approach.map((item, i) => (
                  <motion.div key={i} variants={inView}>
                    <Card className="bg-cream border border-navy/5 hover:border-gold/20 transition-all shadow-none">
                      <CardBody className="p-5">
                        <h3 className="font-serif text-base font-bold text-navy mb-1">{item.title}</h3>
                        <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Pullquote */}
            <motion.div
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-16 flex gap-6 items-start"
            >
              <div className="w-1 bg-gold rounded-full shrink-0 self-stretch" />
              <div>
                <p className="font-serif text-xl md:text-2xl text-navy italic leading-snug font-light">
                  {t("&ldquo;Intervenir en una crisis de pareja requiere neutralidad absoluta, pericia clínica para no caer en alianzas destructivas, y la empatía necesaria para validar el dolor de ambas partes.&rdquo;", "“Intervenir en una crisi de parella requereix neutralitat absoluta, perícia clínica per no caure en aliances destructives i l'empatia necessària per validar el dolor de les dues parts.”")}
                </p>
                <p className="mt-4 font-bold tracking-[0.2em] uppercase text-xs text-navy/50">
                  Joan Ramon Soto Cifuentes · Psicoanalista / Psicoterapeuta
                </p>
              </div>
            </motion.div>
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
                {t("Construyendo un", "Construint un")}{" "}
                <span className="text-gold italic font-light">{t("Vínculo Sólido", "vincle sòlid")}</span>
              </h2>
              <p className="text-base md:text-lg text-navy/70 max-w-2xl mx-auto font-light">
                {t("Más allá de dejar de discutir, la verdadera meta es transformar cómo os relacionáis frente al desacuerdo y recuperar la intimidad funcional.", "Més enllà de deixar de discutir, l'objectiu real és transformar com us relacioneu davant del desacord i recuperar la intimitat.")}
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
                  <Card className="bg-white border border-navy/5 hover:border-gold/30 transition-all hover:-translate-y-1 shadow-none h-full">
                    <CardBody className="p-6 md:p-8">
                      <Icon className="w-10 h-10 text-gold mb-4 md:mb-6" />
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4">{title}</h3>
                      <p className="text-navy/70 leading-relaxed font-light text-sm md:text-base">{desc}</p>
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
                href={bookingUrl("cierre-terapia-de-pareja")}
                className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                {t("Solicitar Cita de Pareja", "Reservar cita de parella")}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              {t("Los conflictos de pareja frecuentemente se vinculan a", "Els conflictes de parella sovint estan vinculats a")}{" "}
              <Link href="/ansiedad" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("ansiedad", "ansietat")}</Link>,{" "}
              <Link href="/celos" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("celos patológicos", "gelosia patològica")}</Link> {t("o", "o")}{" "}
              <Link href="/depresion" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("depresión", "depressió")}</Link> {t("de uno o ambos miembros.", "d'un o dels dos membres.")}
              {t("Puede complementarse con", "Es pot complementar amb")}{" "}
              <Link href="/servicios/terapia-individual" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("terapia individual", "teràpia individual")}</Link> {t("o", "o")}{" "}
              <Link href="/servicios/dimension-familiar" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("terapia familiar", "teràpia familiar")}</Link>.
              {t("Consulta presencial en Canet de Mar (Maresme) y", "Consulta presencial a Canet de Mar (Maresme) i")}{" "}
              <Link href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("terapia online", "teràpia en línia")}</Link>{t(":", ":")}{" "}
              <Link href="/psicologo-maresme" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{t("psicoanalista en el Maresme", "psicoanalista al Maresme")}</Link> {t("para parejas de toda Catalunya.", "per a parelles de tot Catalunya.")}
              {t("Más sobre la", "Més sobre la")}{" "}
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
