"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@heroui/react";
import { useAnimatedNumber } from "../../hooks/useAnimatedNumber";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GOOGLE_REVIEWS } from "@/lib/constants";

export default function TestimonialsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const reviewCount = useAnimatedNumber(GOOGLE_REVIEWS.count, 2, isInView);

    return (
        <section className="bg-navy-light py-24 px-6 border-t border-white/5" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-flex flex-col items-center justify-center"
                    >
                        <div className="flex gap-1 mb-3">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-8 h-8 fill-gold text-gold" />
                            ))}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-2">
                            <span className="text-gold">{GOOGLE_REVIEWS.rating}</span> ★
                        </h2>
                        <p className="text-white/70 tracking-widest uppercase text-sm font-bold">
                            {reviewCount} reseñas en Google
                        </p>
                    </motion.div>
                </div>

                <div className="text-center">
                    <Button
                        as="a"
                        href={GOOGLE_REVIEWS.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="bordered"
                        className="border-gold text-gold hover:bg-gold hover:text-navy px-8 py-6 rounded-full font-bold uppercase tracking-widest text-xs transition-colors"
                    >
                        Ver todas las reseñas en Google
                    </Button>
                </div>
            </div>
        </section>
    );
}
