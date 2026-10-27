"use client";
import { AlertCircle } from "lucide-react";
import { useLocale } from "next-intl";
import EspecialidadHero from "./EspecialidadHero";

export default function LudopatiaHero() {
  const ca = useLocale() === "ca";
  return ca ? (
    <EspecialidadHero
      chip="Ludopatia · Tractament a Canet de Mar i en línia"
      chipIcon={<AlertCircle className="w-3.5 h-3.5" />}
      title="Ludopatia a Canet de Mar (Maresme):"
      titleAccent="una addicció que ve de dins."
      description="La ludopatia és una addicció vinculada al joc. Però una addicció no existeix sense un subjecte previ. El joc no és el problema real: és la solució que va trobar el teu psiquisme per gestionar alguna cosa que no podia afrontar d'una altra manera. Consulta presencial a Canet de Mar (Maresme) i teràpia en línia."
      ctaText="Reservar cita · 75 €"
      quote="Una addicció no existeix sense un subjecte previ. Tractar la ludopatia vol dir entendre quin conflicte psíquic va trobar en el joc la seva única sortida possible."
      stats={[
        { value: "30+", label: "Anys tractant addiccions" },
        { value: "+1K", label: "Pacients tractats" },
        { value: "5,0★", label: "Valoració a Google" },
      ]}
    />
  ) : (
    <EspecialidadHero
      chip="Ludopatía · Tratamiento en Canet de Mar & Online"
      chipIcon={<AlertCircle className="w-3.5 h-3.5" />}
      title="Ludopatía en Canet de Mar (Maresme):"
      titleAccent="una adicción que viene de dentro."
      description="La ludopatía es una adicción vinculada al juego. Pero una adicción no existe sin un sujeto previo. El juego no es el problema real —es la solución que encontró tu psiquismo para gestionar algo que no podía afrontar de otra manera. Consulta presencial en Canet de Mar (Maresme) y terapia online."
      ctaText="Reservar cita · 75 €"
      quote="Una adicción no existe sin un sujeto previo. Tratar la ludopatía significa entender qué conflicto psíquico encontró en el juego su única salida posible."
      stats={[
        { value: "30+", label: "Años tratando adicciones" },
        { value: "+1K", label: "Pacientes tratados" },
        { value: "5,0★", label: "Valoración en Google" },
      ]}
    />
  );
}
