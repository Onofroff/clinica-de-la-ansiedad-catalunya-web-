import type { Metadata } from 'next';

const PATH = '/psicologo-maresme';
const BASE = 'https://www.clinicadelansiedad.com';

const meta = {
  es: {
    title: 'Psicoanalista en el Maresme | Ansiedad · Canet de Mar',
    description:
      'Consulta de psicoanálisis en Canet de Mar (Maresme) para ansiedad, depresión y crisis de pánico. Presencial y online, en catalán y castellano.',
    keywords: [
      'psicologo Maresme', 'psicologo Canet de Mar', 'psicoanalista Maresme',
      'psicoanalista Canet de Mar', 'psicologo Arenys de Mar', 'psicologo Calella',
      'psicologo Pineda de Mar', 'psicologo Mataró', 'terapia ansiedad Maresme',
      'psicologo ansiedad Canet de Mar', 'consulta psicologica Maresme',
      'psicoanalisis Canet de Mar', 'psicologo Sant Pol de Mar',
    ],
    ogLocale: 'es_ES',
  },
  ca: {
    title: "Psicoanalista al Maresme | Ansietat · Canet de Mar",
    description:
      "Consulta de psicoanàlisi a Canet de Mar (Maresme) per a ansietat, depressió i crisis de pànic. Presencial i online, en català i castellà.",
    keywords: [
      'psicòleg Maresme', 'psicòleg Canet de Mar', 'psicoanalista Maresme',
      'psicoanalista Canet de Mar', 'psicòleg Arenys de Mar', 'psicòleg Calella',
      'psicòleg Pineda de Mar', 'psicòleg Mataró', 'teràpia ansietat Maresme',
      'psicoanàlisi Canet de Mar', 'consulta psicològica Maresme',
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
          url: `${BASE}/images/clinica-ansiedad-catalunya-espacio.jpeg`,
          width: 1200,
          height: 630,
          alt: 'Espacio de calma (imagen ilustrativa)',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
      images: [`${BASE}/images/clinica-ansiedad-catalunya-espacio.jpeg`],
    },
  };
}

export default function PsicologoMaresmeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
