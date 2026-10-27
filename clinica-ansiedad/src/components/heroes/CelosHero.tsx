"use client";
import { Heart } from "lucide-react";
import { useLocale } from "next-intl";
import EspecialidadHero from "./EspecialidadHero";

export default function CelosHero() {
  const ca = useLocale() === "ca";
  return ca ? (
    <EspecialidadHero
      chip="Especialistes en gelosia · Canet de Mar i en línia"
      chipIcon={<Heart className="w-3.5 h-3.5" />}
      title="Gelosia patològica a Canet de Mar:"
      titleAccent="la que no pots controlar."
      description="La gelosia és un estat afectiu que tots hem experimentat. Quan es torna patològica, destrueix vincles i genera un patiment continu. Té un origen, i té tractament. Consulta presencial a Canet de Mar (Maresme) i teràpia en línia."
      ctaText="Reservar cita · 75 €"
      quote="La gelosia no és una feblesa moral. És l'expressió d'una ferida que necessita ser compresa."
      stats={[
        { value: "30+", label: "Anys d'experiència" },
        { value: "+1K", label: "Pacients tractats" },
        { value: "5,0★", label: "Valoració a Google" },
      ]}
    />
  ) : (
    <EspecialidadHero
      chip="Especialistas en Celos · Canet de Mar & Online"
      chipIcon={<Heart className="w-3.5 h-3.5" />}
      title="Celos patológicos en Canet de Mar:"
      titleAccent="los que no puedes controlar."
      description="Los celos son estados afectivos que todos hemos experimentado. Cuando se vuelven patológicos, destruyen vínculos y generan un sufrimiento continuo. Hay un origen —y tiene tratamiento. Consulta presencial en Canet de Mar (Maresme) y terapia online."
      ctaText="Reservar cita · 75 €"
      quote="Los celos no son una debilidad moral. Son la expresión de una herida que necesita ser comprendida."
      stats={[
        { value: "30+", label: "Años de experiencia" },
        { value: "+1K", label: "Pacientes tratados" },
        { value: "5,0★", label: "Valoración en Google" },
      ]}
    />
  );
}
