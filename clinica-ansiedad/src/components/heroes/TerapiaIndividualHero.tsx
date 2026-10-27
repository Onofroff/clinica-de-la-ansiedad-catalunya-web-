"use client";
import { ShieldCheck } from "lucide-react";
import ServicioHero from "./ServicioHero";

export default function TerapiaIndividualHero() {
  return (
    <ServicioHero
      image="/images/joanramonsotoimagenweb.webp"
      imageAlt="Joan Ramon Soto - Terapia Individual en Canet de Mar (Maresme)"
      imagePosition="right"
      bg="cream"
      chip="Psicoterapia Especializada · Desde 1993"
      chipIcon={<ShieldCheck className="w-3.5 h-3.5" />}
      title="Terapia Individual en"
      titleAccent="Canet de Mar."
      description="Un espacio confidencial para explorar tus angustias, entender la raíz de tus síntomas y construir recursos emocionales que duren. No parches. Comprensión real."
      trust={[
        "Primera sesión sin cuestionarios fríos",
        "Confidencialidad absoluta",
        "Presencial en Canet de Mar (Maresme) u online",
      ]}
      ctaText="Reservar cita · 75 €"
      quote="En la primera sesión no hay cuestionarios. Hay una conversación clínica real."
      stats={[
        { value: "30+", label: "Años de experiencia" },
        { value: "+1K", label: "Pacientes tratados" },
        { value: "5,0★", label: "Valoración en Google" },
      ]}
    />
  );
}
