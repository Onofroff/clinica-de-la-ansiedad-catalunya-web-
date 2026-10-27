"use client";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyBookingButton from '@/components/servicios/StickyBookingButton';
import BookingOptions from '@/components/servicios/BookingOptions';
import FAQSection from '@/components/sections/FAQSection';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, 
    ArrowRight, 
    Layers, 
    Fingerprint, 
    ShieldCheck, 
    BrainCircuit, 
    Sparkles, 
    Search, 
    Hammer, 
    HeartPulse, 
    Compass,
    Minus,
    Plus
} from 'lucide-react';
import { useState } from 'react';



export default function EnfoquePage() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  const PILLARS = [
      {
          title: t("Diagnóstico Estructural", "Diagnòstic estructural"),
          subtitle: t("Más allá de la superficie", "Més enllà de la superfície"),
          icon: <Fingerprint className="w-8 h-8 text-gold" />,
          desc: t("No nos quedamos en las etiquetas. Realizamos una cartografía clínica de tu biografía para entender la arquitectura de tu ansiedad. Buscamos el origen, no solo el síntoma.", "No ens quedem en les etiquetes. Fem una cartografia clínica de la teva biografia per entendre l'arquitectura de la teva ansietat. Busquem l'origen, no només el símptoma."),
          details: t("Identificamos los mandatos inconscientes y los patrones que sostienen tu angustia.", "Identifiquem els mandats inconscients i els patrons que sostenen la teva angoixa.")
      },
      {
          title: t("Desarticulación", "Desarticulació"),
          subtitle: t("Romper el ciclo", "Trencar el cicle"),
          icon: <Hammer className="w-8 h-8 text-gold" />,
          desc: t("Intervenimos directamente en los mecanismos que mantienen viva la ansiedad. No se trata solo de hablar, sino de desarmar la estructura del conflicto interno.", "Intervenim directament en els mecanismes que mantenen viva l'ansietat. No es tracta només de parlar, sinó de desmuntar l'estructura del conflicte intern."),
          details: t("A través del psicoanálisis directo, las causas profundas pierden su poder paralizante.", "A través de la psicoanàlisi directa, les causes profundes perden el seu poder paralitzant.")
      },
      {
          title: t("Soberanía Emocional", "Sobirania emocional"),
          subtitle: t("Autonomía real", "Autonomia real"),
          icon: <ShieldCheck className="w-8 h-8 text-gold" />,
          desc: t("El objetivo final es que recuperes el timón de tu vida. Consolidamos cambios estructurales que fortalecen tu equilibrio a largo plazo.", "L'objectiu final és que recuperis el timó de la teva vida. Consolidem canvis estructurals que enforteixen el teu equilibri a llarg termini."),
          details: t("Un cambio profundo que te permite vivir sin depender de la terapia indefinidamente.", "Un canvi profund que et permet viure sense dependre de la teràpia indefinidament.")
      }
  ];
  const CLINICAL_PATH = [
      {
          num: "01",
          title: t("Apertura y Escucha", "Obertura i escolta"),
          desc: t("Las primeras sesiones son fundamentales para establecer un espacio de seguridad absoluta. Escuchamos lo que tu síntoma intenta decirnos sin juzgar ni etiquetar.", "Les primeres sessions són fonamentals per establir un espai de seguretat absoluta. Escoltem el que el teu símptoma intenta dir-nos sense jutjar ni etiquetar."),
          subtext: t("Establecimiento del vínculo clínico y diagnóstico inicial.", "Establiment del vincle clínic i diagnòstic inicial.")
      },
      {
          num: "02",
          title: t("Cartografía de Angustia", "Cartografia de l'angoixa"),
          desc: t("Mapeamos tu historia personal. Identificamos los eventos y mandatos que configuraron tu respuesta ante la vida y que hoy se manifiestan como ansiedad.", "Cartografiem la teva història personal. Identifiquem els esdeveniments i mandats que van configurar la teva resposta davant la vida i que avui es manifesten com a ansietat."),
          subtext: t("Localización de los ejes del conflicto inconsciente.", "Localització dels eixos del conflicte inconscient.")
      },
      {
          num: "03",
          title: t("Intervención Directa", "Intervenció directa"),
          desc: t("El núcleo del tratamiento. Confrontamos los patrones repetitivos. Aquí es donde empiezas a sentir que la ansiedad ya no domina tu narrativa diaria.", "El nucli del tractament. Confrontem els patrons repetitius. Aquí és on comences a sentir que l'ansietat ja no domina el teu relat diari."),
          subtext: t("Desarticulación activa de las defensas patológicas.", "Desarticulació activa de les defenses patològiques.")
      },
      {
          num: "04",
          title: t("Reorganización Mental", "Reorganització mental"),
          desc: t("Tu psique empieza a estructurarse de una forma nueva. Los mecanismos de defensa saludables sustituyen al dolor y la parálisis de la ansiedad.", "La teva psique comença a estructurar-se d'una manera nova. Els mecanismes de defensa saludables substitueixen el dolor i la paràlisi de l'ansietat."),
          subtext: t("Consolidación de las nuevas herramientas emocionales.", "Consolidació de les noves eines emocionals.")
      },
      {
          num: "05",
          title: t("Integración Vital", "Integració vital"),
          desc: t("Aplicas los cambios a tu realidad cotidiana: relaciones, trabajo, soledad. Confirmamos que la transformación es sólida y resistente a los retos externos.", "Apliques els canvis a la teva realitat quotidiana: relacions, feina, solitud. Comprovem que la transformació és sòlida davant dels reptes externs."),
          subtext: t("Verificación de la autonomía en contextos reales.", "Verificació de l'autonomia en contextos reals.")
      },
      {
          num: "06",
          title: t("Soberanía y Alta", "Sobirania i alta"),
          desc: t("El tratamiento termina cuando has recuperado tu plenitud. Te llevas un conocimiento profundo de ti mismo que te ayuda a afrontar futuras crisis.", "El tractament acaba quan has recuperat la teva plenitud. T'emportes un coneixement profund de tu mateix que t'ajuda a afrontar futures crisis."),
          subtext: t("Cierre del proceso y alta clínica.", "Tancament del procés i alta clínica.")
      }
  ];
    const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

    return (
        <div className="min-h-screen flex flex-col bg-[#FAFAFA] selection:bg-gold/20 selection:text-navy">
            <Navbar />

            <main className="flex-grow pt-24">
                {/* ===== HERO: The Architecture of the Mind ===== */}
                <section className="relative pt-32 pb-40 px-6 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-navy/5 blur-[120px]" />
                        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gold/10 blur-[100px]" />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-navy/5 text-navy text-xs font-black uppercase tracking-[0.2em] mb-8">
                                    <BrainCircuit className="w-4 h-4 text-gold" />
                                    {t("Psicoanálisis Directo Especializado", "Psicoanàlisi directa especialitzada")}
                                </span>
                                <h1 className="text-6xl md:text-8xl font-serif text-navy font-bold leading-[0.95] mb-10 tracking-tighter">
                                    {t("La Arquitectura de tu", "L'arquitectura del teu")} <span className="text-gold italic font-light">{t("bienestar", "benestar")}</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-navy/60 leading-relaxed max-w-xl font-medium mb-10">
                                    {t("No buscamos silenciar los síntomas, buscamos entender por qué están ahí. Transformamos la estructura de la ansiedad desde su raíz más profunda. Psicoanalista en Canet de Mar (Maresme), con atención online.", "No busquem silenciar els símptomes, busquem entendre per què hi són. Transformem l'estructura de l'ansietat des de l'arrel més profunda. Psicoanalista a Canet de Mar (Maresme), amb atenció en línia.")}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button 
                                        onClick={() => document.getElementById('metodo')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="h-16 px-10 rounded-full bg-navy text-white font-bold flex items-center gap-3 hover:bg-navy/90 transition-all shadow-xl shadow-navy/10"
                                    >
                                        {t("Explorar metodología", "Explorar la metodologia")} <ArrowRight className="w-5 h-5" />
                                    </button>
                                    <Link 
                                        href="/sobre-mi"
                                        className="h-16 px-10 rounded-full bg-white border border-navy/10 text-navy font-bold flex items-center gap-3 hover:bg-navy/5 transition-all"
                                    >
                                        {t("Sobre Joan Ramon", "Sobre Joan Ramon")}
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative hidden lg:block"
                            >
                                <div className="relative aspect-square max-w-lg mx-auto">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-navy/5 to-gold/20 rounded-[4rem] rotate-6 border border-white/50 backdrop-blur-3xl animate-pulse-slow" />
                                    <div className="absolute inset-0 bg-white/40 rounded-[4rem] -rotate-3 border border-white/80 backdrop-blur-3xl shadow-2xl flex items-center justify-center p-12">
                                        <div className="space-y-8 w-full">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className={`h-4 bg-navy/${i*10} rounded-full w-${12-i}/12 animate-pulse`} />
                                            ))}
                                            <div className="w-20 h-20 rounded-3xl bg-gold flex items-center justify-center shadow-lg shadow-gold/30">
                                                <Sparkles className="w-10 h-10 text-white" />
                                            </div>
                                            {[4, 5].map((i) => (
                                                <div key={i} className={`h-4 bg-navy/10 rounded-full w-${i+5}/12 animate-pulse`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ===== THE CORE METHOD: Bento Pillars ===== */}
                <section id="metodo" className="py-24 lg:py-40 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-serif text-navy font-bold mb-8">{t("Los Pilares del Cambio", "Els pilars del canvi")}</h2>
                            <p className="text-lg text-navy/50 leading-relaxed">
                                {t("Nuestro método es un proceso riguroso y evolutivo diseñado para proporcionar no solo alivio, sino una transformación mental duradera.", "El nostre mètode és un procés rigorós i evolutiu pensat per oferir no només alleujament, sinó una transformació mental duradora.")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {PILLARS.map((pillar, idx) => (
                                <motion.div
                                    key={idx}
                                    onMouseEnter={() => setHoveredPillar(idx)}
                                    onMouseLeave={() => setHoveredPillar(null)}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group p-10 lg:p-12 rounded-[2.5rem] bg-[#FAFAFA] border border-transparent hover:border-gold/20 hover:bg-white hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 flex flex-col items-start"
                                >
                                    <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500">
                                        <div className="group-hover:text-white transition-colors duration-500">
                                            {pillar.icon}
                                        </div>
                                    </div>
                                    <span className="text-gold text-xs font-black uppercase tracking-widest mb-3">{pillar.subtitle}</span>
                                    <h3 className="text-3xl font-serif text-navy font-bold mb-6">{pillar.title}</h3>
                                    <p className="text-navy/60 leading-relaxed mb-8 flex-grow">
                                        {pillar.desc}
                                    </p>
                                    <div className="pt-6 border-t border-navy/5 w-full">
                                        <p className="text-sm font-medium text-navy/40 italic">
                                            {pillar.details}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== EL CAMINO CLÍNICO: Visual Timeline ===== */}
                <section className="py-24 lg:py-40 px-6 bg-cream/40 text-navy relative overflow-hidden">
                    {/* Background Texture - very subtle */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2C6E8A_1px,transparent_1px)] [background-size:40px_40px]" />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24 lg:mb-32">
                            <div className="max-w-2xl">
                                <span className="text-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">{t("Patient Journey", "El recorregut")}</span>
                                <h2 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">{t("Tu recorrido hacia la", "El teu recorregut cap a la")} <span className="text-gold italic font-light">{t("libertad", "llibertat")}</span></h2>
                            </div>
                            <div className="lg:pb-4">
                                <p className="text-navy/40 text-lg max-w-sm">
                                    {t("Un proceso estructurado en 6 etapas clínicas, desde el primer contacto hasta el alta.", "Un procés estructurat en 6 etapes clíniques, des del primer contacte fins a l'alta.")}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-navy/10">
                            {CLINICAL_PATH.map((stage, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-10 lg:p-14 border-r border-b border-navy/10 hover:bg-white/60 transition-colors group bg-white/20 backdrop-blur-sm"
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-4xl font-serif text-navy/5 group-hover:text-gold/30 transition-colors duration-500">{stage.num}</span>
                                        <div className="w-2 h-2 rounded-full bg-gold" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold mb-4">{stage.title}</h3>
                                    <p className="text-navy/60 mb-8 leading-relaxed">
                                        {stage.desc}
                                    </p>
                                    <p className="text-gold text-xs font-black uppercase tracking-widest bg-gold/5 w-fit px-3 py-1 rounded-full border border-gold/10">
                                        {stage.subtext}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== THE CONTRAST: Symptomatic vs Structural ===== */}
                <section className="py-24 lg:py-40 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-6xl font-serif text-navy font-bold leading-tight">
                                    {t("¿Por qué", "Per què")} <span className="text-gold italic">{t("funciona", "funciona")}</span> {t("donde otros fallan?", "on altres fallen?")}
                                </h2>
                                <p className="text-lg text-navy/60 leading-relaxed">
                                    {t("Muchos pacientes llegan a nuestra clínica tras haber probado terapias centradas solo en técnicas de relajación o gestión de pensamientos. El psicoanálisis directo no busca que \"gestiones\" tu ansiedad, busca que ya no la necesites.", "Molts pacients arriben a la nostra clínica després d'haver provat teràpies centrades només en tècniques de relaxació o de gestió de pensaments. La psicoanàlisi directa no busca que «gestionis» la teva ansietat, sinó que ja no la necessitis.")}
                                </p>
                                <div className="space-y-6 pt-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                                            <Minus className="w-4 h-4 text-red-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy">{t("Alivio Sintomático", "Alleujament simptomàtic")}</h4>
                                            <p className="text-navy/50 text-sm">{t("Se centra en silenciar la alarma. Puede aliviar, pero si el conflicto sigue activo la ansiedad tiende a reaparecer en otros momentos de estrés.", "Se centra a silenciar l'alarma. Pot alleujar, però si el conflicte continua actiu l'ansietat tendeix a reaparèixer en altres moments d'estrès.")}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                                            <Plus className="w-4 h-4 text-emerald-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy">{t("Cambio Estructural", "Canvi estructural")}</h4>
                                            <p className="text-navy/50 text-sm">{t("Trabajamos el conflicto que genera la alarma. El objetivo es un cambio de fondo, porque se transforma la arquitectura de tu respuesta emocional.", "Treballem el conflicte que genera l'alarma. L'objectiu és un canvi de fons, perquè es transforma l'arquitectura de la teva resposta emocional.")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-navy/5 p-12 lg:p-16 rounded-[4rem] text-center">
                                <HeartPulse className="w-20 h-20 text-gold mx-auto mb-10" />
                                <h3 className="text-4xl font-serif text-navy font-bold mb-6">{t("Eficiencia Clínica", "Eficiència clínica")}</h3>
                                <p className="text-navy/40 mb-10 text-lg">
                                    {t("Más de 30 años de especialización exclusiva en trastornos de ansiedad nos permiten identificar el núcleo del problema con precisión clínica.", "Més de 30 anys d'especialització en trastorns d'ansietat ens permeten identificar el nucli del problema amb precisió clínica.")}
                                </p>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-5xl font-serif text-gold font-bold mb-2">{t("+mil", "+mil")}</p>
                                        <p className="text-xs font-black uppercase tracking-widest text-navy/40">{t("Pacientes", "Pacients")}</p>
                                    </div>
                                    <div>
                                        <p className="text-5xl font-serif text-gold font-bold mb-2">5,0★</p>
                                        <p className="text-xs font-black uppercase tracking-widest text-navy/40">{t("Valoración en Google", "Valoració a Google")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== BOOKING & FAQ ===== */}
                <BookingOptions />
                <FAQSection />
                <StickyBookingButton />
            </main>

            <Footer />
        </div>
    );
}
