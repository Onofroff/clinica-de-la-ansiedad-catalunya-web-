import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    title: 'Terapia individual en Canet de Mar y el Maresme',
    description: 'Terapia individual psicoanalítica para ansiedad, depresión, hipocondría y TOC. Consulta presencial en Canet de Mar (Maresme) y terapia online.',
    path: '/servicios/terapia-individual',
    keywords: [
      'terapia individual', 'consulta psicologica', 'primera visita',
      'síntomas de ansiedad', 'como se cura la ansiedad', 'psicoterapeuta ansiedad',
      'terapia ansiedad', 'depresión', 'hipocondria', 'TOC',
      'terapia individual Barcelona', 'psicólogo Barcelona', 'consulta psicológica Catalunya',
      'psicólogo Maresme', 'terapia individual Canet de Mar'
    ],
    lang: locale,
  });
}

export default function TerapiaIndividualLayout({ children }: { children: React.ReactNode }) {
  return children;
}
