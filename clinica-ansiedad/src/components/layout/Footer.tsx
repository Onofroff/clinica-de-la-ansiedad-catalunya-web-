"use client";
import React from 'react';
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { GOOGLE_REVIEWS, SOCIAL_LINKS } from "@/lib/constants";
import { Phone, Mail, MapPin, Star, Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
            <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1-2.59-2.59 2.59 2.59 0 0 1 3.37-2.47V9.68a5.7 5.7 0 0 0-.78-.05A5.69 5.69 0 0 0 4.17 15.3 5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.69-5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.25-1.48Z" />
        </svg>
    );
}

const SOCIALS = [
    { name: "Instagram", href: SOCIAL_LINKS.instagram, Icon: Instagram },
    { name: "TikTok", href: SOCIAL_LINKS.tiktok, Icon: TikTokIcon },
    { name: "Facebook", href: SOCIAL_LINKS.facebook, Icon: Facebook },
    { name: "LinkedIn", href: SOCIAL_LINKS.linkedin, Icon: Linkedin },
];

export default function Footer() {
    const t = useTranslations('footer');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy text-white pt-16 pb-8 border-t-4 border-gold">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Col */}
                    <div className="col-span-1 md:col-span-1">
                        <img
                            src="/images/logo-vertical-white.png"
                            alt="Clínica de la Ansiedad Catalunya"
                            className="h-32 w-auto max-w-full object-contain mb-4"
                        />
                        <p className="text-gold text-sm tracking-widest uppercase mb-4">
                            {t('since')}
                        </p>
                        <p className="text-white/80 text-sm mb-6">
                            Joan Ramon Soto<br />
                            <span className="text-white/60">{t('brand_claim')}</span>
                        </p>

                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full w-fit">
                            <Star className="w-4 h-4 text-gold fill-gold" />
                            <span className="text-sm font-medium">{t('reviews', { rating: GOOGLE_REVIEWS.rating, count: GOOGLE_REVIEWS.count })}</span>
                        </div>

                        <ul className="flex items-center gap-3 mt-6">
                            {SOCIALS.map(({ name, href, Icon }) => (
                                <li key={name}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={name}
                                        title={name}
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/80 hover:bg-gold hover:text-navy transition-colors"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Nav Col */}
                    <div>
                        <h3 className="font-sans font-bold text-lg mb-4 text-white">{t('nav_title')}</h3>
                        <ul className="space-y-3 text-sm text-white/90">
                            <li><Link href="/enfoque" className="text-white/80 hover:text-gold transition-colors">{t('approach')}</Link></li>
                            <li><Link href="/sobre-mi" className="text-white/80 hover:text-gold transition-colors">Joan Ramon Soto</Link></li>
                            <li><Link href={"/psicologo-maresme" as any} className="text-white/80 hover:text-gold transition-colors">{t('maresme')}</Link></li>
                            <li><Link href={"/#faq" as any} className="text-white/80 hover:text-gold transition-colors">{t('faq')}</Link></li>
                            <li><Link href={"/#contacto" as any} className="text-white/80 hover:text-gold transition-colors font-bold flex items-center gap-2 group">{t('contact_title')} <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" /></Link></li>
                        </ul>
                    </div>

                    {/* Services Col */}
                    <div>
                        <h3 className="font-sans font-bold text-lg mb-4 text-white">{t('services_title')}</h3>
                        <ul className="space-y-3 text-sm text-white/90">
                            <li><Link href="/servicios/terapia-individual" className="hover:text-gold transition-colors">{t('individual')}</Link></li>
                            <li><Link href="/servicios/terapia-de-pareja" className="hover:text-gold transition-colors">{t('couple')}</Link></li>
                            <li><Link href="/terapia-online" className="hover:text-gold transition-colors">{t('online')}</Link></li>
                            <li><Link href="/servicios/dimension-familiar" className="hover:text-gold transition-colors">{t('family')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h3 className="font-sans font-bold text-lg mb-4 text-white">{t('contact_title')}</h3>
                        <ul className="space-y-4 text-sm text-white/90">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <a href="tel:+34613916079" className="hover:text-white transition-colors">
                                    613 91 60 79
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <a href="mailto:contacto@clinicadelansiedad.com" className="hover:text-white transition-colors">
                                    contacto@clinicadelansiedad.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <span>
                                    Ronda Dr. Anglès 74<br />
                                    08360 Canet de Mar<br />
                                    Barcelona (Maresme)
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70">
                    <p>© {currentYear} Clínica de la Ansiedad Catalunya. {t('rights')}</p>
                    <div className="flex flex-wrap gap-4">
                        <Link href={"/privacidad" as any} className="hover:text-white transition-colors">{t('privacy')}</Link>
                        <Link href={"/aviso-legal" as any} className="hover:text-white transition-colors">{t('legal_notice')}</Link>
                        <Link href={"/politica-de-cookies" as any} className="hover:text-white transition-colors">{t('cookie_policy')}</Link>
                        <button
                            onClick={() => window.dispatchEvent(new Event("open-cookie-banner"))}
                            className="hover:text-white transition-colors cursor-pointer"
                        >
                            {t('cookie_settings')}
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
