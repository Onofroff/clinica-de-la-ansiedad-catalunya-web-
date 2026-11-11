"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = { title: string; content: string };

// Sin props muestra las preguntas generales (messages: faq). Una página puede pasar
// las suyas propias para no repetir en todas partes las mismas preguntas.
export default function FAQSection({ items, heading }: { items?: FaqItem[]; heading?: string } = {}) {
    const t = useTranslations('faq');
    const faqs = items ?? (t.raw('list') as FaqItem[]);

    return (
        <section id="faq" className="bg-cream py-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-3xl md:text-5xl font-serif text-navy font-bold mb-4"
                    >
                        {heading ?? t('title')}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gold mx-auto"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-navy/5"
                >
                    <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="border border-navy/10 rounded-xl px-6 data-[state=open]:border-gold/30 data-[state=open]:bg-cream/30 transition-all duration-300"
                            >
                                <AccordionTrigger className="text-navy font-bold font-sans text-base md:text-lg hover:text-gold hover:no-underline text-left cursor-pointer">
                                    {faq.title}
                                </AccordionTrigger>
                                <AccordionContent className="text-navy/70 leading-relaxed text-base pt-2 pb-6">
                                    {faq.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
