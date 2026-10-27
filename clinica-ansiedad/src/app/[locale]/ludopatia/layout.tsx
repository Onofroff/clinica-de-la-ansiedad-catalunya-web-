import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === 'ca') {
    return buildMetadata({
      title: "Ludopatia a Canet de Mar (Maresme) | Clínica de l'Ansietat",
      description: "Tractament psicoanalític de la ludopatia i l'addicció al joc a Canet de Mar (Maresme), presencial i en línia. Abordem l'origen, no només el símptoma.",
      path: '/ludopatia',
      keywords: ["ludopatia", "addicció al joc", "tractament ludopatia", "joc patològic", "ludopatia Catalunya", "ludopatia Maresme"],
      lang: locale,
      catalan: true,
    });
  }
  return buildMetadata({
    catalan: true,
    title: 'Ludopatía en Canet de Mar (Maresme) | Clínica de la Ansiedad',
    description: 'Tratamiento psicoanalítico de la ludopatía y la adicción al juego en Canet de Mar (Maresme), presencial y online. Abordamos el origen, no solo el síntoma.',
    path: '/ludopatia',
    keywords: [
      'ludopatía tratamiento', 'adicción al juego', 'psicoterapeuta ludopatía',
      'terapia ludopatía Barcelona', 'adicción juego online', 'juego patológico',
      'tratamiento adicciones psicoanalítico', 'ludopatía tratamiento Barcelona',
      'psicoterapeuta ludopatía Catalunya', 'adicción juego Maresme'
    ],
    lang: locale,
  });
}

export default function LudopatiaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
