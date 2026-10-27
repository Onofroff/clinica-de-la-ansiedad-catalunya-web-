import type { Metadata } from 'next';
import { Figtree, Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Script from 'next/script';
import { medicalClinicSchema, personSchema, organizationSchema, websiteSchema } from '@/lib/schema';
import { NextIntlClientProvider } from 'next-intl';
import CookieConsent from '@/components/CookieConsent';
import AnalyticsEvents from '@/components/AnalyticsEvents';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

// Google tag (gtag.js) — GA4. Va en el layout raíz para cubrir todas las páginas.
const GA_ID = 'G-XB01E805MT';

const figtree = Figtree({
    subsets: ['latin'],
    variable: '--font-figtree',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    // Nombre real del negocio, igual que en la ficha de Google Business Profile.
    // "Canet de Mar" lo separa de la Clínica de la Ansiedad homónima de Barcelona ciudad.
    // Máximo 60 caracteres: a partir de ahí Google trunca el title en la SERP.
    const titles: Record<string, string> = {
        es: 'Clínica de la Ansiedad Catalunya: Psicoanalista Canet de Mar',
        ca: 'Clínica de l\'Ansietat Catalunya: Psicoanalista Canet de Mar'
    };

    // Máximo 160 caracteres: a partir de ahí Google corta la description.
    // Se retira "primera valoración sin compromiso": la reserva exige pago previo,
    // así que la promesa no se sostenía.
    const descriptions: Record<string, string> = {
        es: 'Psicoanalista para la ansiedad, la depresión y las crisis de pánico en Canet de Mar (Maresme). Consulta presencial y terapia online. Desde 1993.',
        ca: 'Psicoanalista per a l\'ansietat, la depressió i les crisis de pànic a Canet de Mar (Maresme). Consulta presencial i teràpia online. Des del 1993.'
    };

    return {
        metadataBase: new URL('https://www.clinicadelansiedad.com'),
        title: titles[locale] || titles.es,
        description: descriptions[locale] || descriptions.es,
        authors: [{ name: 'Joan Ramon Soto' }],
        robots: 'index, follow',
        alternates: {
            canonical: `https://www.clinicadelansiedad.com/${locale}`,
            languages: {
                'es': 'https://www.clinicadelansiedad.com/es',
                'ca': 'https://www.clinicadelansiedad.com/ca',
                'x-default': 'https://www.clinicadelansiedad.com/es'
            }
        },
        openGraph: {
            title: titles[locale] || titles.es,
            description: descriptions[locale] || descriptions.es,
            type: 'website',
            locale: locale === 'ca' ? 'ca_ES' : 'es_ES',
            siteName: 'Clínica de la Ansiedad Catalunya',
            url: `https://www.clinicadelansiedad.com/${locale}`,
            images: [
                {
                    url: 'https://www.clinicadelansiedad.com/images/og-clinic-hero.png',
                    width: 1200,
                    height: 630,
                    alt: 'Clínica de la Ansiedad Catalunya'
                }
            ]
        }
    };
}

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} className={`${figtree.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
            <head>
                {/* Google tag (gtag.js) */}
                <Script
                    id="gtag-src"
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                    strategy="afterInteractive"
                />
                <Script
                    id="gtag-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  // Consent Mode v2: denegado por defecto (AEPD/RGPD). Solo se concede
  // analytics_storage si el usuario ya aceptó en el banner (elección guardada,
  // válida 1 año). El banner actualiza el consentimiento al decidir.
  var __c=null;try{__c=JSON.parse(localStorage.getItem('ca-cookie-consent'))}catch(e){}
  var __ok=!!(__c&&__c.analytics===true&&typeof __c.ts==='number'&&(Date.now()-__c.ts)<31536000000);
  gtag('consent','default',{
    ad_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied',
    analytics_storage: __ok ? 'granted' : 'denied'
  });

  gtag('js', new Date());

  gtag('config', '${GA_ID}');
`,
                    }}
                />
                {/* JSON-LD en <script> normal, no next/script: así viaja en el HTML del
                    servidor. Con <Script> solo se inyectaba tras hidratar, de modo que
                    cualquier rastreador que no ejecute JS (Bing, LLMs, previsualizaciones)
                    no veía nada del marcado. */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }} />
                {/* El FAQPage ya no va aquí: se generaba en castellano en todas las
                    páginas aunque las preguntas solo se ven en la portada. Ahora lo
                    emite la portada, en su idioma (src/app/[locale]/page.tsx). */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
            </head>
            <body suppressHydrationWarning className="bg-cream text-text font-sans antialiased selection:bg-gold/20 selection:text-navy">
                <NextIntlClientProvider messages={messages}>
                    <Providers>
                        {children}
                    </Providers>
                    <CookieConsent />
                    <AnalyticsEvents />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
