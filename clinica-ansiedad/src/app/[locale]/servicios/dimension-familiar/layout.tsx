import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === 'ca') {
    return buildMetadata({
      title: "Teràpia familiar a Canet de Mar (Maresme) | Psicoanalista",
      description: "Teràpia familiar per a conflictes, dols i transicions. Abordem tot el sistema familiar. Consulta a Canet de Mar (Maresme) i en línia per a tot Catalunya.",
      path: '/servicios/dimension-familiar',
      keywords: ["teràpia familiar", "conflictes familiars", "adolescents", "dol familiar", "teràpia familiar Maresme", "teràpia familiar en línia"],
      lang: locale,
      catalan: true,
    });
  }
  return buildMetadata({
    catalan: true,
    title: 'Terapia familiar en Canet de Mar y el Maresme',
    description: 'Terapia familiar psicoanalítica para ansiedad y conflictos intergeneracionales. Intervención sistémica presencial en Canet de Mar (Maresme) y sesiones online.',
    path: '/servicios/dimension-familiar',
    keywords: [
      'terapia familiar', 'conflictos intergeneracionales', 'intervención sistémica',
      'ansiedad familiar', 'como ayudar a alguien con ansiedad',
      'terapia familiar Barcelona', 'terapia familiar Catalunya',
      'psicoterapeuta familiar Maresme', 'terapia familiar Girona',
      'terapia familiar Canet de Mar', 'terapia familiar Maresme'
    ],
    lang: locale,
  });
}

export default function DimensionFamiliarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
