"use client";
import { useLocale } from "next-intl";
import { Users } from "lucide-react";
import ServicioHero from "./ServicioHero";

export default function DimensionFamiliarHero() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  return (
    <ServicioHero
      image="/images/centreclinicansiedad.jpeg"
      imageAlt={t("Consulta de Terapia Familiar en Canet de Mar (Maresme)", "Consulta de teràpia familiar a Canet de Mar (Maresme)")}
      imagePosition="right"
      bg="cream"
      chip={t("Intervención Sistémica · Desde 1993", "Intervenció sistèmica · Des de 1993")}
      chipIcon={<Users className="w-3.5 h-3.5" />}
      title={t("Dimensión Familiar en", "Dimensió familiar a")}
      titleAccent={t("Canet de Mar.", "Canet de Mar.")}
      description={t("La sintomatología emocional que aparece en un miembro de la familia raramente le pertenece solo a él. Abordamos el sistema completo para transformar el entorno familiar en una red de cuidado real.", "La simptomatologia emocional que apareix en un membre de la família rarament li pertany només a ell. Abordem el sistema complet per transformar l'entorn familiar en una xarxa de cura real.")}
      trust={[
        t("Abordamos el sistema familiar completo", "Abordem el sistema familiar complet"),
        t("No solo al paciente identificado", "No només el pacient identificat"),
        t("Presencial en Canet de Mar (Maresme) u online", "Presencial a Canet de Mar (Maresme) o en línia"),
      ]}
      ctaText={t("Reservar cita", "Reservar cita")}
      quote={t("Ningún síntoma individual se produce en un vacío. La familia es siempre el contexto y, con frecuencia, parte de la solución.", "Cap símptoma individual no es produeix en el buit. La família és sempre el context i, sovint, part de la solució.")}
      stats={[
        { value: "30+", label: t("Años de experiencia", "Anys d'experiència") },
        { value: "+1K", label: t("Familias acompañadas", "Famílies acompanyades") },
      ]}
    />
  );
}
