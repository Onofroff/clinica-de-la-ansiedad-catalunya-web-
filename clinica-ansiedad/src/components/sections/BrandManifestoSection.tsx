"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GOOGLE_REVIEWS } from "@/lib/constants";

export default function BrandManifestoSection() {
    return (
        <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden bg-white">
            {/* Background Texture / Subtle Grid (Same as Hero for consistency) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#164E63 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
            
            {/* Subtle Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-white to-cream/30" />
            
            {/* Soft decorative elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-navy/5 blur-[100px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
                <div className="max-w-3xl">

                    {/* Year anchor */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="w-16 h-[1px] bg-gold" />
                        <span className="font-serif text-gold text-lg font-light tracking-[0.4em] uppercase">Desde 1993</span>
                    </motion.div>

                    {/* Main quote */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                        className="font-serif text-navy text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.15] mb-12 tracking-tight"
                    >
                        &ldquo;La ansiedad no es el enemigo.<br />
                        Es un mensaje que espera<br />
                        <span className="text-gold not-italic font-bold">ser escuchado.</span>&rdquo;
                    </motion.blockquote>

                    {/* Attribution */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center gap-5 mb-14"
                    >
                        {/* Cara real en vez del monograma "JRS": una cita firmada por unas
                            iniciales dentro de un círculo no acredita a nadie. */}
                        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md">
                            <Image
                                src="/images/joanramonsotoimagenweb.webp"
                                alt="Joan Ramon Soto, psicoanalista / psicoterapeuta"
                                fill
                                sizes="64px"
                                className="object-cover object-top"
                            />
                        </div>
                        <div>
                            <p className="text-navy font-black tracking-[0.2em] uppercase text-sm">Joan Ramon Soto</p>
                            <p className="text-gold text-xs tracking-[0.2em] uppercase font-bold mt-1 opacity-80">Psicoanalista / Psicoterapeuta · Fundador</p>
                        </div>
                    </motion.div>

                    {/* Philosophy pillars */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex flex-wrap gap-4 mb-14"
                    >
                        {/* Credibilidad = datos comprobables, no adjetivos. Antes ponía
                            "Rigor clínico / Escucha profunda / Sin parches temporales /
                            Terapia personalizada": cuatro cosas que cualquiera puede decir
                            de sí mismo y que por tanto no acreditan nada. */}
                        {[
                            "Col·legiat COPC nº 3852",
                            "Ejerciendo desde 1993",
                            `${GOOGLE_REVIEWS.rating} en Google (${GOOGLE_REVIEWS.count} reseñas)`,
                            "Psicoanálisis Directo",
                        ].map((pill) => (
                            <span
                                key={pill}
                                className="px-6 py-2.5 rounded-full border border-navy/10 text-navy/70 text-[10px] font-black tracking-[0.2em] uppercase backdrop-blur-sm bg-white/40 hover:border-gold/30 hover:text-gold hover:bg-white transition-all duration-500 shadow-sm"
                            >
                                {pill}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.65 }}
                    >
                        <Link
                            href="/enfoque"
                            className="inline-flex items-center gap-4 bg-navy text-white hover:bg-navy/90 font-bold tracking-[0.1em] uppercase text-xs px-10 py-5 rounded-full transition-all duration-300 group shadow-xl shadow-navy/10"
                        >
                            Conoce nuestra filosofía
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
