import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === 'ca') {
    return buildMetadata({
      title: "Tractament de la depressió amb psicoanalista, presencial i en línia",
      description: "Tractament de la depressió i l'ansietat des del seu origen inconscient. Psicoanalista a Canet de Mar (Maresme), presencial i en línia per a tot Catalunya.",
      path: '/depresion',
      keywords: ["depressió", "símptomes de la depressió", "depressió i ansietat", "teràpia depressió", "tractament depressió Barcelona", "teràpia depressió Maresme", "psicoanalista depressió", "depressió Girona"],
      lang: locale,
      catalan: true,
    });
  }
  return buildMetadata({
    catalan: true,
    title: 'Tratamiento de la depresión con psicoanalista, presencial y online',
    description: 'Tratamiento de la depresión y la ansiedad desde su origen inconsciente. Psicoanalista en Canet de Mar (Maresme), presencial y online para toda España.',
    path: '/depresion',
    keywords: [
      'depresion ansiedad', 'ansiedad y depresion', 'tratamiento depresión Barcelona',
      'psicoterapeuta depresión', 'terapia depresión psicoanalítica', 'superar la depresión',
      'síntomas depresión', 'psicoterapeuta depresión Catalunya',
      'psicoterapeuta depresión Barcelona', 'depresión y ansiedad tratamiento',
      'terapia depresión Maresme', 'psicoterapeuta depresión Girona',
      'depresión tratamiento Lleida', 'depresión tratamiento Tarragona'
    ],
    lang: locale,
  });
}

export default function DepresionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
