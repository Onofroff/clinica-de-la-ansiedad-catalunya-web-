import Image from 'next/image';
import { BadgeCheck, GraduationCap } from 'lucide-react';

export default function ExpertBio() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(44,95,120,0.1)] border border-navy/5">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 border-4 border-cream shadow-md">
                <Image
                    src="/images/joanramonsotoimagenweb.webp"
                    alt="Joan Ramon Soto - Psicoanalista / Psicoterapeuta"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex-1">
                <h3 className="font-serif text-2xl text-navy font-bold mb-1">Joan Ramon Soto</h3>
                <p className="text-gold font-bold tracking-wider text-sm uppercase mb-3">Psicoanalista / Psicoterapeuta · Fundador</p>
                <p className="text-navy/75 text-base leading-relaxed mb-4">
                    Fundador de la Clínica de la Ansiedad Catalunya en 1993. Más de 30 años de experiencia clínica especializada en el tratamiento profundo de la ansiedad, depresión y malestar emocional mediante el psicoanálisis directo.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gold/10 text-navy border border-gold/20">
                        <BadgeCheck className="w-3 h-3 text-gold" />
                        Col·legiat COPC nº 3852
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-navy/5 text-navy border border-navy/10">
                        <GraduationCap className="w-3 h-3" />
                        Psicoanálisis Directo
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-navy/5 text-navy border border-navy/10">
                        +30 años de experiencia
                    </span>
                </div>
            </div>
        </div>
    );
}
