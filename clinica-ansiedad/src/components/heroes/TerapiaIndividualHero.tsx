"use client";
import { useLocale } from "next-intl";
import { ShieldCheck } from "lucide-react";
import ServicioHero from "./ServicioHero";

export default function TerapiaIndividualHero() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
  return (
    <ServicioHero
      image="/images/joanramonsotoimagenweb.webp"
      imageAlt={t("Joan Ramon Soto - Terapia Individual en Canet de Mar (Maresme)", "Joan Ramon Soto - Teràpia individual a Canet de Mar (Maresme)")}
      imagePosition="right"
      bg="cream"
      chip={t("Psicoterapia Especializada · Desde 1993", "Psicoteràpia especialitzada · Des de 1993")}
      chipIcon={<ShieldCheck className="w-3.5 h-3.5" />}
      title={t("Terapia Individual en", "Teràpia individual a")}
      titleAccent={t("Canet de Mar.", "Canet de Mar.")}
      description={t("Un espacio confidencial para explorar tus angustias, entender la raíz de tus síntomas y construir recursos emocionales que duren. No parches. Comprensión real.", "Un espai confidencial per explorar les teves angoixes, entendre l'arrel dels teus símptomes i construir recursos emocionals que durin. No pegats. Comprensió real.")}
      trust={[
        t("Primera sesión sin cuestionarios fríos", "Primera sessió sense qüestionaris freds"),
        t("Confidencialidad absoluta", "Confidencialitat absoluta"),
        t("Presencial en Canet de Mar (Maresme) u online", "Presencial a Canet de Mar (Maresme) o en línia"),
      ]}
      ctaText="Reservar cita · 75 €"
      quote={t("En la primera sesión no hay cuestionarios. Hay una conversación clínica real.", "A la primera sessió no hi ha qüestionaris. Hi ha una conversa clínica real.")}
      stats={[
        { value: "30+", label: t("Años de experiencia", "Anys d'experiència") },
        { value: "+1K", label: t("Pacientes tratados", "Pacients tractats") },
        { value: "5,0★", label: t("Valoración en Google", "Valoració a Google") },
      ]}
    />
  );
}
