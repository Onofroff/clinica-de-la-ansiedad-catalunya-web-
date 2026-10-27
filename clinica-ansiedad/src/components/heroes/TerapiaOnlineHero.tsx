"use client";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import EspecialidadHero from "./EspecialidadHero";

export default function TerapiaOnlineHero() {
  const ca = useLocale() === "ca";

  return ca ? (
    <EspecialidadHero
      chip="Teràpia en línia · Des de 1993"
      chipIcon={<Globe className="w-3.5 h-3.5" />}
      title="La distància mai no va ser"
      titleAccent="un obstacle."
      description="Quan la majoria de clíniques encara no es plantejaven l'atenció a distància, nosaltres ja acompanyàvem pacients a distància. Trenta anys perfeccionant la teràpia en línia no s'improvisen."
      ctaText="Reservar cita · 75 €"
      quote="La distància física mai no ha estat un obstacle per a la profunditat clínica. El que cura és el vincle terapèutic, no la proximitat geogràfica."
      stats={[
        { value: "30+", label: "Anys de teràpia en línia" },
        { value: "+1K", label: "Pacients a distància" },
        { value: "80%", label: "Alta en 6 mesos" },
      ]}
    />
  ) : (
    <EspecialidadHero
      chip="Terapia Online · Desde 1993"
      chipIcon={<Globe className="w-3.5 h-3.5" />}
      title="La distancia nunca fue"
      titleAccent="un obstáculo."
      description="Cuando la mayoría de clínicas aún no contemplaban la teleasistencia, nosotros ya acompañábamos pacientes a distancia. Treinta años perfeccionando la terapia online no se improvisan."
      ctaText="Reservar cita · 75 €"
      quote="La distancia física nunca ha sido un obstáculo para la profundidad clínica. Lo que cura es el vínculo terapéutico —no la proximidad geográfica."
      stats={[
        { value: "30+", label: "Años terapia online" },
        { value: "+1K", label: "Pacientes a distancia" },
        { value: "80%", label: "Alta en 6 meses" },
      ]}
    />
  );
}
