"use client";
import { ShieldCheck } from "lucide-react";
import { useLocale } from "next-intl";
import EspecialidadHero from "./EspecialidadHero";

export default function AnsiedadHero() {
  const ca = useLocale() === "ca";

  return ca ? (
    <EspecialidadHero
      chip="Especialistes en ansietat · Canet de Mar i en línia"
      chipIcon={<ShieldCheck className="w-3.5 h-3.5" />}
      title="Tractar l'ansietat a Canet de Mar"
      titleAccent="per deixar de patir-la."
      description="Palpitacions. Hiperventilació. El cap que no para. Si has arribat fins aquí és perquè alguna cosa en tu ja sap que necessites respostes reals —no tècniques de respiració, sinó entendre què et passa. Psicoanalista especialista en ansietat a Canet de Mar (Maresme), presencial i en línia per a tot Catalunya."
      ctaText="Reservar cita · 75 €"
      quote="El símptoma és només el missatger. La nostra feina és desxifrar el missatge."
      stats={[
        { value: "30+", label: "Anys d'experiència" },
        { value: "+1K", label: "Pacients tractats" },
        { value: "5,0★", label: "Valoració a Google" },
      ]}
    />
  ) : (
    <EspecialidadHero
      chip="Especialistas en Ansiedad · Canet de Mar & Online"
      chipIcon={<ShieldCheck className="w-3.5 h-3.5" />}
      title="Tratar la ansiedad en Canet de Mar"
      titleAccent="para dejar de sufrirla."
      description="Palpitaciones. Hiperventilación. La mente que no para. Si has llegado aquí es porque algo en ti ya sabe que necesitas respuestas reales —no técnicas de respiración, sino la comprensión de lo que te pasa. Psicoanalista especialista en ansiedad en Canet de Mar (Maresme), presencial y online."
      ctaText="Reservar cita · 75 €"
      quote="El síntoma es solo el mensajero continuo. Nuestro trabajo es descifrar el mensaje."
      stats={[
        { value: "30+", label: "Años de experiencia" },
        { value: "+1K", label: "Pacientes tratados" },
        { value: "5,0★", label: "Valoración en Google" },
      ]}
    />
  );
}
