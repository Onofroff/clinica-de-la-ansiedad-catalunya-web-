import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === 'ca') {
    return buildMetadata({
      title: "Gelosia patològica a Canet de Mar (Maresme) | Psicoanalista",
      description: "Tractament psicoanalític de la gelosia patològica a Canet de Mar (Maresme), presencial i en línia. La gelosia té un origen profund, i té solució.",
      path: '/celos',
      keywords: ["gelosia patològica", "gelosia en la parella", "tractament gelosia", "gelosia obsessiva", "teràpia gelosia Catalunya", "teràpia gelosia Maresme"],
      lang: locale,
      catalan: true,
    });
  }
  return buildMetadata({
    catalan: true,
    title: 'Celos Patológicos en Canet de Mar (Maresme) | Psicoanalista',
    description: 'Tratamiento psicoanalítico de los celos patológicos en Canet de Mar (Maresme), presencial y online. Los celos tienen un origen profundo —y tienen solución.',
    path: '/celos',
    keywords: [
      'celos patológicos', 'tratamiento celos', 'celos en pareja', 'psicoterapeuta celos',
      'celos ansiedad', 'terapia celos Barcelona', 'celos retroactivos',
      'celos enfermizos tratamiento', 'celos patológicos tratamiento Barcelona',
      'psicoterapeuta celos Catalunya', 'terapia celos Maresme'
    ],
    lang: locale,
  });
}

export default function CelosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
