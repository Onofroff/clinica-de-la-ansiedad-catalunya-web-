"use client";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import EspecialidadHero from "./EspecialidadHero";

export default function TerapiaOnlineHero() {
  const ca = useLocale() === "ca";

  return ca ? (
    <EspecialidadHero
      chip="Teràpia a distància · Des de 1993"
      chipIcon={<Globe className="w-3.5 h-3.5" />}
      title="La distància mai no va ser"
      titleAccent="un obstacle."
      description="Vam començar a acompanyar pacients a distància el 1993, per telèfon, quan gairebé cap clínica no s'ho plantejava. Avui ho fem per videotrucada. Trenta anys de teràpia a distància no s'improvisen."
      ctaText="Reservar cita · 75 €"
      quote="La distància física mai no ha estat un obstacle per a la profunditat clínica. El que cura és el vincle terapèutic, no la proximitat geogràfica."
      stats={[
        { value: "30+", label: "Anys de teràpia a distància" },
        { value: "+1K", label: "Pacients a distància" },
        { value: "5,0★", label: "Valoració a Google" },
      ]}
    />
  ) : (
    <EspecialidadHero
      chip="Terapia a distancia · Desde 1993"
      chipIcon={<Globe className="w-3.5 h-3.5" />}
      title="La distancia nunca fue"
      titleAccent="un obstáculo."
      description="Empezamos a acompañar pacientes a distancia en 1993, por teléfono, cuando casi ninguna clínica se lo planteaba. Hoy lo hacemos por videollamada. Treinta años de terapia a distancia no se improvisan."
      ctaText="Reservar cita · 75 €"
      quote="La distancia física nunca ha sido un obstáculo para la profundidad clínica. Lo que cura es el vínculo terapéutico —no la proximidad geográfica."
      stats={[
        { value: "30+", label: "Años de terapia a distancia" },
        { value: "+1K", label: "Pacientes a distancia" },
        { value: "5,0★", label: "Valoración en Google" },
      ]}
    />
  );
}
