import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === 'ca') {
    return buildMetadata({
      title: "Crisis de pànic a Canet de Mar (Maresme) | Psicoanalista",
      description: "Reconeix els símptomes de les crisis d'ansietat i els atacs de pànic. Tractament psicoanalític presencial a Canet de Mar (Maresme) i en línia per a tot Catalunya.",
      path: '/crisis-de-panico',
      keywords: ["crisi d'ansietat símptomes", "atacs de pànic símptomes", "crisis de pànic", "palpitacions per ansietat", "hiperventilació", "tractament atacs de pànic Barcelona", "pànic tractament Maresme", "atacs de pànic Girona", "teràpia pànic psicoanalítica"],
      lang: locale,
      catalan: true,
    });
  }
  return buildMetadata({
    catalan: true,
    title: 'Crisis de Pánico en Canet de Mar (Maresme) | Psicoanalista',
    description: 'Reconoce los síntomas de crisis de ansiedad y ataques de pánico. Tratamiento psicoanalítico presencial en Canet de Mar (Maresme) y online para toda Catalunya.',
    path: '/crisis-de-panico',
    keywords: [
      'crisis de ansiedad sintomas', 'ataques de panico sintomas', 'crisis de pánico',
      'ataque de pánico psicoterapeuta', 'palpitaciones por ansiedad', 'hiperventilacion',
      'como se cura la ansiedad', 'psicoterapeuta crisis de pánico', 'terapia pánico psicoanalítica',
      'ataques de pánico tratamiento Barcelona', 'crisis de pánico psicoterapeuta Catalunya',
      'pánico tratamiento Maresme', 'ataques de pánico Girona'
    ],
    lang: locale,
  });
}

export default function CrisisDePanicoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
