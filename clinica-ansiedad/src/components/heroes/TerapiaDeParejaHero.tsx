"use client";
import { useLocale } from "next-intl";
import { HeartHandshake } from "lucide-react";
import ServicioHero from "./ServicioHero";

export default function TerapiaDeParejaHero() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  return (
    <ServicioHero
      image="/images/centreclinicansiedad.jpeg"
      imageAlt={t("Consulta de Terapia de Pareja en Canet de Mar (Maresme)", "Consulta de teràpia de parella a Canet de Mar (Maresme)")}
      imagePosition="left"
      bg="white"
      chip={t("Resolución de Conflictos · Desde 1993", "Resolució de conflictes · Des de 1993")}
      chipIcon={<HeartHandshake className="w-3.5 h-3.5" />}
      title={t("Terapia de Pareja en", "Teràpia de parella a")}
      titleAccent={t("Canet de Mar.", "Canet de Mar.")}
      description={t("Acompañamiento especializado para resolver dinámicas de conflicto, bloqueos en la comunicación y desconexión afectiva. Antes de que el silencio sea irreversible.", "Acompanyament especialitzat per resoldre dinàmiques de conflicte, bloquejos en la comunicació i desconnexió afectiva. Abans que el silenci sigui irreversible.")}
      trust={[
        t("Neutralidad clínica absoluta — sin alianzas", "Neutralitat clínica absoluta, sense aliances"),
        t("Para parejas en crisis o en punto de quiebre", "Per a parelles en crisi o a punt de trencar-se"),
        t("Presencial en Canet de Mar (Maresme) u online", "Presencial a Canet de Mar (Maresme) o en línia"),
      ]}
      ctaText="Reservar cita · 100 €"
      quote={t("Intervenir en una crisis de pareja requiere neutralidad absoluta y empatía para validar el dolor de ambas partes.", "Intervenir en una crisi de parella requereix neutralitat absoluta i empatia per validar el dolor de les dues parts.")}
      stats={[
        { value: "30+", label: t("Años de experiencia", "Anys d'experiència") },
        { value: "+1K", label: t("Parejas acompañadas", "Parelles acompanyades") },
      ]}
    />
  );
}
