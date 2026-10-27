"use client";

import { motion, type Variants } from "framer-motion";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { bookingUrl } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface Stat {
  value: string;
  label: string;
}

interface ServicioHeroProps {
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  bg?: "cream" | "white";
  chip: string;
  chipIcon: React.ReactNode;
  title: string;
  titleAccent: string;
  description: string;
  trust: string[];
  ctaText: string;
  quote: string;
  stats: Stat[];
}

export default function ServicioHero({
  image,
  imageAlt,
  chip,
  chipIcon,
  title,
  titleAccent,
  description,
  trust,
  ctaText,
  quote,
  stats,
}: ServicioHeroProps) {
  // Atribución por página: hero-terapia-individual, hero-terapia-de-pareja...
  const pathname = usePathname();
  const isCa = useLocale() === "ca";
  const slug = (pathname || "").split("/").filter(Boolean).pop() || "servicio";

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FDFBF7] pt-32 pb-24 border-b border-navy/5">
      {/* Subtle Dynamic Immersive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold/15 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[50%] h-[50%] bg-[#164E63]/10 rounded-full blur-[150px] mix-blend-multiply" />
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#164E63 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px', opacity: 0.04 }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        {/* Text Content */}
        <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div custom={0} variants={fadeUp} initial={false} animate="show">
            <Chip
              startContent={<span className="text-gold">{chipIcon}</span>}
              variant="bordered"
              className="border-navy/15 bg-white/60 backdrop-blur-md text-navy text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm"
            >
              {chip}
            </Chip>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial={false}
            animate="show"
            className="font-serif text-5xl md:text-6xl xl:text-7xl font-light text-navy leading-[1.05] tracking-tight mb-8"
          >
            {title}{" "}
            <span className="text-gold italic font-serif">{titleAccent}</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial={false}
            animate="show"
            className="text-lg md:text-xl text-navy/70 leading-relaxed font-light max-w-2xl mb-10"
          >
            {description}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial={false}
            animate="show"
            className="flex flex-col sm:flex-row flex-wrap gap-4 lg:gap-8 justify-center lg:justify-start mb-12 w-full"
          >
            {trust.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span className="text-navy/70 text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial={false}
            animate="show"
            className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start"
          >
            <Button
              as="a"
              href={bookingUrl(`hero-${slug}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white font-semibold px-10 py-7 rounded-full text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 hover:scale-[1.02] transition-all cursor-pointer uppercase tracking-widest"
              endContent={<ArrowRight className="w-4 h-4 ml-2" />}
            >
              {ctaText}
            </Button>
            <Button
              as={Link}
              href="/enfoque"
              variant="bordered"
              className="border-navy/15 text-navy hover:bg-navy/5 font-bold px-10 py-7 rounded-full text-xs uppercase tracking-widest cursor-pointer transition-colors"
            >
              {isCa ? "El nostre mètode" : "Nuestro Método"}
            </Button>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial={false}
            animate="show"
            className="flex justify-center lg:justify-start gap-12 mt-16 pt-10 border-t border-navy/10 w-full"
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="font-serif text-4xl font-bold text-navy leading-none mb-2">{s.value}</p>
                <p className="text-navy/60 text-xs font-bold uppercase tracking-[0.1em]">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image & Quote Panel (Elegant Floating Card instead of Massive Split Screen) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-2/5 flex flex-col items-center lg:items-end mt-12 lg:mt-0"
        >
          <div className="relative w-full max-w-md">
            {/* Soft decorative glow behind the image card */}
            <div className="absolute inset-0 bg-gold/20 rounded-[40px] blur-3xl transform -rotate-3 scale-105" />
            
            <div className="relative bg-white p-4 rounded-[40px] shadow-glass-hover border border-white/60">
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden relative">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Subtle gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>

              {/* Graceful Quote Card overlapping the image */}
              <div className="absolute -bottom-8 -left-8 md:-left-12 bg-cream/90 backdrop-blur-xl p-6 rounded-3xl border border-navy/5 shadow-xl max-w-[280px]">
                <div className="flex gap-4 items-start">
                  <div className="w-1 h-12 bg-gold rounded-full shrink-0" />
                  <div>
                    <p className="font-serif text-navy text-sm italic leading-snug font-light mb-3">
                      &ldquo;{quote}&rdquo;
                    </p>
                    <p className="text-gold text-[9px] font-bold uppercase tracking-[0.2em]">
                      Joan Ramon Soto
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
