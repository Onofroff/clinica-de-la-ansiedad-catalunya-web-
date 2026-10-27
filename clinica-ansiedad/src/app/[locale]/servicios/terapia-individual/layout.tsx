import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === 'ca') {
    return buildMetadata({
      title: "Teràpia individual a Canet de Mar (Maresme) | Psicoanalista",
      description: "Teràpia individual per a l'ansietat, la depressió, les crisis de pànic i el TOC. Consulta presencial a Canet de Mar (Maresme) i en línia per a tot Catalunya.",
      path: '/servicios/terapia-individual',
      keywords: ["teràpia individual", "psicoteràpia individual", "teràpia ansietat", "teràpia depressió", "psicoanalista Canet de Mar", "teràpia en línia Catalunya"],
      lang: locale,
      catalan: true,
    });
  }
  return buildMetadata({
    catalan: true,
    title: 'Terapia individual en Canet de Mar y el Maresme',
    description: 'Terapia individual psicoanalítica para ansiedad, depresión, hipocondría y TOC. Consulta presencial en Canet de Mar (Maresme) y terapia online.',
    path: '/servicios/terapia-individual',
    keywords: [
      'terapia individual', 'consulta psicologica', 'primera visita',
      'síntomas de ansiedad', 'como se cura la ansiedad', 'psicoterapeuta ansiedad',
      'terapia ansiedad', 'depresión', 'hipocondria', 'TOC',
      'terapia individual Barcelona', 'psicoterapeuta Barcelona', 'consulta psicológica Catalunya',
      'psicoterapeuta Maresme', 'terapia individual Canet de Mar'
    ],
    lang: locale,
  });
}

export default function TerapiaIndividualLayout({ children }: { children: React.ReactNode }) {
  return children;
}
