'use client';

import { useState, useEffect } from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { bookingUrl, whatsappUrl } from '@/lib/constants';
import { useCookieBannerOpen } from '@/lib/useCookieBanner';
import { useLocale } from 'next-intl';

const WA_URL_ES = whatsappUrl('Hola, me gustaría solicitar una valoración.');
const WA_URL_CA = whatsappUrl("Hola, m'agradaria sol·licitar una valoració.");

export default function StickyBookingButton() {
    const [isVisible, setIsVisible] = useState(false);
    const cookieBannerOpen = useCookieBannerOpen();
    const ca = useLocale() === 'ca';
    const WA_URL = ca ? WA_URL_CA : WA_URL_ES;

    useEffect(() => {
        const toggleVisibility = () => {
            // Mostrar después de scrollear 300px
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        // Mientras el banner de cookies ocupa la franja inferior, los botones suben
        // por encima de él: antes quedaban debajo (z-40 contra z-60) y no se podían pulsar.
        <div
            className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40 flex flex-col items-end gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300 transition-[bottom] duration-300"
            style={cookieBannerOpen ? { bottom: 'calc(var(--cookie-banner-h, 0px) + 1.5rem)' } : undefined}
        >
            {/* WhatsApp — contacto de baja fricción */}
            <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-[#25D366] text-black font-bold rounded-full pl-4 pr-5 py-3.5 shadow-[0_10px_35px_-10px_rgba(37,211,102,0.6)] hover:shadow-[0_14px_45px_-10px_rgba(37,211,102,0.8)] hover:scale-105 active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 text-sm"
                aria-label={ca ? "Escriu-nos per WhatsApp" : "Escríbenos por WhatsApp"}
            >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
            </a>

            {/* Reserva — acción principal, mismo destino en todo el sitio */}
            <a
                href={bookingUrl('sticky')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-navy text-white font-bold rounded-full pl-4 pr-5 py-4 shadow-[0_10px_40px_-10px_rgba(44,110,138,0.6)] hover:shadow-[0_14px_50px_-10px_rgba(44,110,138,0.8)] hover:bg-navy/90 hover:scale-105 active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-navy/30 text-sm uppercase tracking-wider"
                aria-label={ca ? "Reservar cita" : "Reservar cita"}
            >
                <Calendar className="w-5 h-5 text-gold-light" />
                Reservar cita
            </a>
        </div>
    );
}
