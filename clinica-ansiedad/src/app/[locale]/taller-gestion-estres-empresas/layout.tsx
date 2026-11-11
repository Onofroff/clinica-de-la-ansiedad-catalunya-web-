import type { Metadata } from 'next';

const PATH = '/taller-gestion-estres-empresas';
const BASE = 'https://www.clinicadelansiedad.com';

const meta = {
  es: {
    title: 'Taller de gestión del estrés para empresas | Presencial y online',
    description:
      'Taller práctico de gestión del estrés y la ansiedad para empresas: presencial en el Maresme y Barcelona u online para toda España. 3 sesiones, grupos de 4 a 10.',
    keywords: [
      'taller gestión estrés empresas', 'formación ansiedad trabajadores',
      'taller estrés laboral', 'gestión del estrés en empresas',
      'formación gestión emocional empresas', 'taller bienestar emocional empresas',
      'prevención estrés laboral', 'salud psicológica empresa',
      'taller ansiedad empresas Barcelona', 'formación estrés Catalunya',
      'taller estrés y ansiedad trabajadores', 'taller estrés empresas Maresme', 'taller estrés laboral online',
    ],
    ogLocale: 'es_ES',
  },
  ca: {
    title: "Taller de gestió de l'estrès per a empreses | Presencial i en línia",
    description:
      "Taller pràctic de gestió de l'estrès i l'ansietat per a empreses: presencial al Maresme i Barcelona o en línia per a tot Espanya. 3 sessions, grups de 4 a 10.",
    keywords: [
      "taller gestió estrès empreses", "formació ansietat treballadors",
      "taller estrès laboral", "gestió de l'estrès a empreses",
      "formació gestió emocional empreses", "taller benestar emocional empreses",
      "prevenció estrès laboral", "salut psicològica empresa",
      "taller ansietat empreses Barcelona", "formació estrès Catalunya",
      "taller estrès empreses Maresme",
    ],
    ogLocale: 'ca_ES',
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = locale === 'ca' ? meta.ca : meta.es;
  const url = `${BASE}/${locale === 'ca' ? 'ca' : 'es'}${PATH}`;

  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords as unknown as string[],
    robots: 'index, follow',
    alternates: {
      canonical: url,
      languages: {
        es: `${BASE}/es${PATH}`,
        ca: `${BASE}/ca${PATH}`,
        'x-default': `${BASE}/es${PATH}`,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url,
      type: 'website',
      locale: m.ogLocale,
      siteName: 'Clínica de la Ansiedad Catalunya',
      images: [
        {
          url: `${BASE}/images/og-default.png`,
          width: 1200,
          height: 630,
          alt: 'Clínica de la Ansiedad Catalunya',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
      images: [`${BASE}/images/og-default.png`],
    },
  };
}

export default function TallerEmpresasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
