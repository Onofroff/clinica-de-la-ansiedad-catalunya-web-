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
  return buildMetadata({
      title: 'Joan Ramon Soto | Psicoanalista / Psicoterapeuta en Canet de Mar',
      description: 'Joan Ramon Soto, psicoanalista / psicoterapeuta con más de 30 años de experiencia y fundador de la Clínica de la Ansiedad. Consulta en Canet de Mar (Maresme) y online.',
      path: '/sobre-mi',
      keywords: [
          'Joan Ramon Soto',
          'psicoanalista ansiedad',
          'psicólogo Barcelona',
          'consulta psicologica',
          'psicólogo especialista ansiedad',
          'psicoterapia psicoanalítica',
          'clínica de la ansiedad director',
          'psicoterapeuta ansiedad Barcelona', 'psicoterapeuta Canet de Mar',
          'psicólogo Maresme', 'psicoterapeuta Catalunya'
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
