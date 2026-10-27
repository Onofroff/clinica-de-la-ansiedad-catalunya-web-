"use client";

import { motion, type Variants } from "framer-motion";
import { Button, Chip } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { bookingUrl } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.11, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface Stat {
  value: string;
  label: string;
}

interface EspecialidadHeroProps {
  chip: string;
  chipIcon: React.ReactNode;
  title: string;
  titleAccent: string;
  description: string;
  ctaText: string;
  quote: string;
  stats: Stat[];
}

export default function EspecialidadHero({
  chip,
  chipIcon,
  title,
  titleAccent,
  description,
  ctaText,
  quote,
  stats,
}: EspecialidadHeroProps) {
  // Atribución por página: cada hero de especialidad manda su propio utm_content
  // (hero-ansiedad, hero-depresion...) en vez del genérico BOOKING_URL.
  const pathname = usePathname();
  const ca = useLocale() === "ca";
  const slug = (pathname || "").split("/").filter(Boolean).pop() || "especialidad";

  return (
    <section className="relative flex items-center bg-cream overflow-hidden min-h-[82vh]">
      {/* Top gold accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Subtle ambient blobs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gold/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sage/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-20 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center">

        {/* ── LEFT — Content ── */}
        <div className="flex flex-col">
          <motion.div custom={0} variants={fadeUp} initial={false} animate="show">
            <Chip
              startContent={<span className="text-gold">{chipIcon}</span>}
              variant="bordered"
              className="border-navy/15 bg-white text-navy/75 text-[10px] font-bold tracking-[0.15em] uppercase mb-8 shadow-sm"
            >
              {chip}
            </Chip>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial={false}
            animate="show"
            className="font-serif text-5xl md:text-6xl xl:text-[5.5rem] font-bold text-navy leading-[1.06] tracking-tight mb-7"
          >
            {title}
            <br />
            <span className="text-gold italic font-light">{titleAccent}</span>
          </motion.h1>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial={false}
            animate="show"
            className="w-12 h-0.5 bg-gold mb-7"
          />

          <motion.p
            custom={3}
            variants={fadeUp}
            initial={false}
            animate="show"
            className="text-lg text-navy/60 leading-relaxed font-light max-w-lg mb-10"
          >
            {description}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial={false}
            animate="show"
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              as="a"
              href={bookingUrl(`hero-${slug}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-2xl shadow-navy/20 hover:bg-navy/90 transition-all cursor-pointer"
              endContent={<ArrowRight className="w-4 h-4" />}
            >
              {ctaText}
            </Button>
            <Button
              as={Link}
              href="/enfoque"
              variant="bordered"
              className="border-navy/15 text-navy hover:bg-navy/5 font-bold px-8 py-7 rounded-xl text-xs uppercase tracking-widest cursor-pointer"
            >
              {ca ? "El nostre mètode" : "Nuestro Método"}
            </Button>
          </motion.div>
        </div>

        {/* ── RIGHT — Editorial quote + floating stats ── */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex flex-col justify-between gap-12"
        >
          {/* Quote */}
          <div>
            <p className="font-serif text-[5rem] leading-none text-gold/25 select-none mb-2">&ldquo;</p>
            <p className="font-serif text-2xl text-navy/75 italic leading-snug font-light -mt-8">
              {quote}
            </p>
            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-navy/35">
              Joan Ramon Soto · Psicoanalista / Psicoterapeuta
            </p>
          </div>

          {/* Floating stats */}
          <div className="flex gap-10 pt-8 border-t border-navy/8">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="font-serif text-4xl font-bold text-gold leading-none">{s.value}</p>
                <p className="text-navy/45 text-[10px] font-medium mt-2 uppercase tracking-widest leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-navy/8" />
    </section>
  );
}
