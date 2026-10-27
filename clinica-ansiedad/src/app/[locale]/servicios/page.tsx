import { buildMetadata } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/servicios/ServicesHero';
import Methodologies from '@/components/servicios/Methodologies';
import TreatmentModalities from '@/components/servicios/TreatmentModalities';
import SpecialtiesSection from '@/components/servicios/SpecialtiesSection';
import FAQSection from '@/components/sections/FAQSection';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === 'ca') {
    return buildMetadata({
      title: "Teràpia d'ansietat i depressió a Canet de Mar (Maresme)",
      description: "Psicoteràpia per a l'ansietat, la depressió, el TOC, la fòbia social i l'agorafòbia. Teràpia individual, de parella i familiar a Canet de Mar (Maresme) i en línia.",
      path: '/servicios',
      keywords: ['teràpia ansietat', 'trastorn d\'ansietat generalitzada', 'depressió', 'fòbia social', 'agorafòbia', 'teràpia individual', 'teràpia de parella', 'teràpia familiar', 'teràpia Catalunya', 'psicoanalista Maresme'],
      lang: locale,
      catalan: true,
    });
  }
  return buildMetadata({
      catalan: true,
      title: 'Terapia de ansiedad y depresión en Canet de Mar (Maresme)',
      description: 'Psicoterapia para ansiedad, depresión, TOC, fobia social y agorafobia. Terapia individual, de pareja y familiar en Canet de Mar (Maresme) y online.',
      path: '/servicios',
      keywords: [
          'terapia ansiedad', 'trastorno de ansiedad generalizada', 'trastorno obsesivo compulsivo',
          'depresion ansiedad', 'fobia social', 'agorafobia', 'hipocondria',
          'terapia individual', 'terapia pareja', 'terapia familiar',
          'terapia ansiedad Barcelona', 'psicoanalista Barcelona', 'terapia Catalunya',
          'tratamiento ansiedad Maresme', 'psicoanalista Canet de Mar'
      ],
    lang: locale,
  });
}

export default async function ServiciosPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const ca = locale === 'ca';
    return (
        <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
            <Navbar />
            <main className="pt-24 pb-16">
                <ServicesHero />
                <Methodologies />
                <TreatmentModalities />
                <SpecialtiesSection />
                <section className="py-12 px-4 md:px-8 border-t border-navy/5">
                    <div className="container mx-auto max-w-4xl">
                        <p className="text-navy/50 text-sm leading-relaxed">
                            {ca
                                ? "A més de l'atenció individual, de parella i familiar, treballem amb empreses amb un "
                                : "Además de la atención individual, de pareja y familiar, trabajamos con empresas a través de un "}
                            <Link href="/taller-gestion-estres-empresas" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">
                                {ca ? "taller pràctic de gestió de l'estrès i l'ansietat per a empreses" : "taller práctico de gestión del estrés y la ansiedad para empresas"}
                            </Link>
                            {ca
                                ? ": un programa presencial de prevenció i entrenament d'eines per a equips, en grups reduïts. Consulta presencial a Canet de Mar (Maresme) i "
                                : ": un programa presencial de prevención y entrenamiento de herramientas para equipos, en grupos reducidos. Consulta presencial en Canet de Mar (Maresme) y "}
                            <Link href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{ca ? "teràpia en línia" : "terapia online"}</Link>:{" "}
                            <Link href="/psicologo-maresme" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">{ca ? "psicoanalista al Maresme" : "psicoanalista en el Maresme"}</Link>.
                            {ca ? " Més sobre la " : " Más sobre la "}
                            <Link href="/" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">Clínica de la Ansiedad Catalunya</Link>.
                        </p>
                    </div>
                </section>
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
