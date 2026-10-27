"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ProblemSection() {
    const t = useTranslations('problem');
    const situations = t.raw('situations') as string[];

    return (
        <section className="bg-cream py-32 px-6 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gold font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block"
                    >
                        {t('eyebrow')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy font-bold mb-6 text-balance"
                    >
                        {t.rich('h2', {
                            accent: (chunks) => <span className="text-gold italic">{chunks}</span>
                        })}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-20 h-1 bg-gold mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {situations.map((situation, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <div className="group bg-white border border-navy/5 p-10 rounded-3xl hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 h-full flex items-center justify-center text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500" />
                                <p className="text-navy font-bold text-xl leading-snug group-hover:text-gold transition-colors duration-300">
                                    {situation}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mt-24 text-center"
                >
                    <div className="bg-navy rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden shadow-2xl shadow-navy/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[60px] rounded-full" />
                        <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-white font-medium italic leading-relaxed text-balance relative z-10">
                            {t.rich('quote', {
                                accent: (chunks) => <span className="text-gold">{chunks}</span>
                            })}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
