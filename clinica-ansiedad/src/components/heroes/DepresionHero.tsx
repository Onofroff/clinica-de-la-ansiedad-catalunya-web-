"use client";
import { Brain } from "lucide-react";
import { useLocale } from "next-intl";
import EspecialidadHero from "./EspecialidadHero";

export default function DepresionHero() {
  const ca = useLocale() === "ca";
  return ca ? (
    <EspecialidadHero
      chip="Depressió i ansietat · Canet de Mar i en línia"
      chipIcon={<Brain className="w-3.5 h-3.5" />}
      title="Depressió a Canet de Mar (Maresme):"
      titleAccent="quan la vida deixa d'interessar-te."
      description="No és mandra. No és falta de voluntat. És un crit silenciós del psiquisme que demana ser escoltat. Des de 1993 ajudem persones com tu a recuperar el desig de viure, des de l'arrel. Consulta presencial a Canet de Mar (Maresme) i teràpia en línia."
      ctaText="Reservar cita · 75 €"
      quote="La depressió no és tristesa. És la retirada del desig. I el desig, quan es treballa des de l'origen, es pot recuperar."
      stats={[
        { value: "30+", label: "Anys d'experiència" },
        { value: "+1K", label: "Pacients tractats" },
        { value: "5,0★", label: "Valoració a Google" },
      ]}
    />
  ) : (
    <EspecialidadHero
      chip="Depresión & Ansiedad · Canet de Mar & Online"
      chipIcon={<Brain className="w-3.5 h-3.5" />}
      title="Depresión en Canet de Mar (Maresme):"
      titleAccent="cuando la vida deja de interesarte."
      description="No es pereza. No es falta de voluntad. Es un grito silencioso del psiquismo que pide ser escuchado. Desde 1993 ayudamos a personas como tú a recuperar el deseo de vivir —desde la raíz. Consulta presencial en Canet de Mar (Maresme) y terapia online."
      ctaText="Reservar cita · 75 €"
      quote="La depresión no es tristeza. Es la retirada del deseo. Y el deseo, cuando se trabaja desde el origen, puede recuperarse."
      stats={[
        { value: "30+", label: "Años de experiencia" },
        { value: "+1K", label: "Pacientes tratados" },
        { value: "5,0★", label: "Valoración en Google" },
      ]}
    />
  );
}
