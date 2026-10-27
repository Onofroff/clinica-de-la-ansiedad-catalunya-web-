"use client";
import { useLocale } from "next-intl";

import { GOOGLE_REVIEWS } from "@/lib/constants";

export default function CredentialsBanner() {
  const locale = useLocale();
  const t = (es: string, ca: string) => (locale === "ca" ? ca : es);
    const credentials = [
        { label: "COPC", sublabel: "Col·legi Oficial de Psicòlegs de Catalunya" },
        { label: `${GOOGLE_REVIEWS.rating} ★`, sublabel: `${GOOGLE_REVIEWS.count} ${t("reseñas en Google", "ressenyes a Google")}` },
        { label: "1993 →", sublabel: t("Más de 30 años de trayectoria clínica", "Més de 30 anys de trajectòria clínica") },
        { label: "Online", sublabel: t("Terapia para toda España y Catalunya", "Teràpia per a tot Catalunya i Espanya") },
    ];

    return (
        <div className="w-full bg-navy border-y border-white/5 overflow-hidden relative">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/4 w-64 h-full bg-gold/10 blur-[60px] rounded-full" />
            <div className="absolute top-0 right-1/4 w-48 h-full bg-gold/5 blur-[80px] rounded-full" />

            <div className="w-full relative z-10 overflow-hidden">
                <div className="flex items-center w-max animate-marquee scrollbar-hide">
                    {/* First set */}
                    {credentials.map((cred, i) => (
                        <div
                            key={`set1-${i}`}
                            className="flex flex-col items-center justify-center px-8 md:px-16 py-6 shrink-0 border-r border-white/10 group cursor-default transition-colors duration-300 hover:bg-white/5"
                        >
                            <span className="text-gold font-bold text-sm md:text-base tracking-widest whitespace-nowrap group-hover:text-gold/80 transition-colors uppercase">{cred.label}</span>
                            <span className="text-white/40 text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase whitespace-nowrap mt-1.5">{cred.sublabel}</span>
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {credentials.map((cred, i) => (
                        <div
                            key={`set2-${i}`}
                            className="flex flex-col items-center justify-center px-8 md:px-16 py-6 shrink-0 border-r border-white/10 group cursor-default transition-colors duration-300 hover:bg-white/5"
                        >
                            <span className="text-gold font-bold text-sm md:text-base tracking-widest whitespace-nowrap group-hover:text-gold/80 transition-colors uppercase">{cred.label}</span>
                            <span className="text-white/40 text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase whitespace-nowrap mt-1.5">{cred.sublabel}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
