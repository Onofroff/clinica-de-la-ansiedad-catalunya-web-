import { buildMetadata } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sobre-mi/AboutHero';
import CredentialsSection from '@/components/sobre-mi/CredentialsSection';
import ExperienceSection from '@/components/sobre-mi/ExperienceSection';
import EducationTimeline from '@/components/sobre-mi/EducationTimeline';
import PublicationsSection from '@/components/sobre-mi/PublicationsSection';
import StickyBookingButton from '@/components/servicios/StickyBookingButton';
import FAQSection from '@/components/sections/FAQSection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === 'ca') {
    return buildMetadata({
      title: 'Joan Ramon Soto | Psicoanalista / Psicoterapeuta a Canet de Mar',
      description: "Joan Ramon Soto, psicoanalista / psicoterapeuta amb més de 30 anys d'experiència i fundador de la Clínica de la Ansiedad Catalunya. Consulta a Canet de Mar (Maresme) i en línia.",
      path: '/sobre-mi',
      keywords: ['Joan Ramon Soto', 'psicoanalista ansietat', 'psicoterapeuta Catalunya', 'psicoteràpia psicoanalítica', 'psicoterapeuta Canet de Mar', 'psicoanalista Maresme'],
      image: 'https://www.clinicadelansiedad.com/images/joanramonsotoimagenweb.webp',
      imageAlt: 'Joan Ramon Soto - Psicoanalista / Psicoterapeuta a Canet de Mar (Maresme)',
      lang: locale,
      catalan: true,
    });
  }
  return buildMetadata({
      catalan: true,
      title: 'Joan Ramon Soto | Psicoanalista / Psicoterapeuta en Canet de Mar',
      description: 'Joan Ramon Soto, psicoanalista / psicoterapeuta con más de 30 años de experiencia y fundador de la Clínica de la Ansiedad. Consulta en Canet de Mar (Maresme) y online.',
      path: '/sobre-mi',
      keywords: [
          'Joan Ramon Soto',
          'psicoanalista ansiedad',
          'psicoanalista Barcelona',
          'consulta de psicoterapia',
          'psicoterapeuta especialista ansiedad',
          'psicoterapia psicoanalítica',
          'clínica de la ansiedad director',
          'psicoterapeuta ansiedad Barcelona', 'psicoterapeuta Canet de Mar',
          'psicoanalista Maresme', 'psicoterapeuta Catalunya'
      ],
      image: 'https://www.clinicadelansiedad.com/images/joanramonsotoimagenweb.webp',
      imageAlt: 'Joan Ramon Soto - Psicoanalista / Psicoterapeuta en Canet de Mar (Maresme)',
    lang: locale,
  });
}

export default function SobreMiPage() {
    return (
        <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
            <Navbar />
            <main className="pt-24 pb-16">
                <AboutHero />
                <CredentialsSection />
                <ExperienceSection />
                <EducationTimeline />
                <PublicationsSection />
                <FAQSection />
                <StickyBookingButton />
            </main>
            <Footer />
        </div>
    );
}
