import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // La consulta presencial está en Canet de Mar: el título ya no dice
  // "Psicoanalista Barcelona" (Barcelona aparece como zona atendida online).
  if (locale === 'ca') {
    return buildMetadata({
      title: "Teràpia en línia per a l'ansietat | Catalunya i Espanya",
      description: "Teràpia en línia per a l'ansietat, el pànic i la depressió amb un psicoanalista amb més de 30 anys d'experiència. En català i castellà, per a tot Catalunya.",
      path: '/terapia-online',
      keywords: [
        'teràpia en línia ansietat', 'teràpia online ansietat', 'psicoanalista en línia',
        'psicòleg online Catalunya', 'teràpia online Barcelona', 'teràpia online Girona',
        'teràpia online Lleida', 'teràpia online Tarragona', 'teràpia online Maresme',
        'teràpia en català', 'crisis de pànic', 'depressió'
      ],
      lang: locale,
      catalan: true,
    });
  }
  return buildMetadata({
    title: 'Terapia online para la ansiedad | Catalunya y toda España',
    description: 'Terapia online para la ansiedad, el pánico y la depresión con un psicoanalista con más de 30 años de experiencia. En castellano y catalán, para toda España.',
    path: '/terapia-online',
    keywords: [
      'terapia online ansiedad', 'terapia de ansiedad online', 'psicoanalista online',
      'terapia ansiedad videollamada', 'ansiedad generalizada', 'crisis de pánico',
      'depresión online', 'psicoanalista online España', 'terapia online Catalunya',
      'terapia online Barcelona', 'terapia online Girona', 'terapia online Lleida',
      'terapia online Tarragona', 'terapia online Maresme'
    ],
    lang: locale,
    catalan: true,
  });
}

export default function TerapiaOnlineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
