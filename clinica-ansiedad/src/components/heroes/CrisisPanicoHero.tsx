"use client";
import { Zap } from "lucide-react";
import { useLocale } from "next-intl";
import EspecialidadHero from "./EspecialidadHero";

export default function CrisisPanicoHero() {
  const ca = useLocale() === "ca";
  return ca ? (
    <EspecialidadHero
      chip="Tractament especialitzat · Canet de Mar i en línia"
      chipIcon={<Zap className="w-3.5 h-3.5" />}
      title="Crisis de pànic a Canet de Mar:"
      titleAccent="tenen causes i tenen solució."
      description="El cor que s'accelera. L'aire que no arriba. Si coneixes aquesta seqüència, has de saber una cosa: no és una fallada del teu cos. És un missatge que podem desxifrar. Consulta presencial a Canet de Mar (Maresme) i teràpia en línia per a tot Catalunya."
      ctaText="Reservar cita · 75 €"
      quote="L'atac de pànic no és l'enemic. És un senyal urgent del psiquisme que demana ser escoltat."
      stats={[
        { value: "30+", label: "Anys en trastorns de pànic" },
        { value: "+1K", label: "Pacients tractats" },
        { value: "5,0★", label: "Valoració a Google" },
      ]}
    />
  ) : (
    <EspecialidadHero
      chip="Tratamiento Especializado · Canet de Mar & Online"
      chipIcon={<Zap className="w-3.5 h-3.5" />}
      title="Crisis de pánico en Canet de Mar:"
      titleAccent="tienen causas y tienen solución."
      description="El corazón que se acelera. El aire que no llega. Si conoces esa secuencia, necesitas saber algo: no es un fallo de tu cuerpo. Es un mensaje que podemos descifrar. Consulta presencial en Canet de Mar (Maresme) y terapia online."
      ctaText="Reservar cita · 75 €"
      quote="El ataque de pánico no es el enemigo. Es una señal urgente del psiquismo que pide ser escuchada."
      stats={[
        { value: "30+", label: "Años en trastornos de pánico" },
        { value: "+1K", label: "Pacientes tratados" },
        { value: "5,0★", label: "Valoración en Google" },
      ]}
    />
  );
}
