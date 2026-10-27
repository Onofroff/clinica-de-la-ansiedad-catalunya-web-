import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === 'ca') {
    return buildMetadata({
      title: "Com es cura l'ansietat | Psicoanàlisi a Canet de Mar",
      description: "Psicoanàlisi directa per tractar l'ansietat des de l'arrel. Un mètode clínic amb més de 30 anys. Psicoanalista a Canet de Mar (Maresme) i en línia.",
      path: '/enfoque',
      keywords: ["com es cura l'ansietat", 'psicoanàlisi directa', "tractament de l'ansietat", 'psicoanalista Maresme', 'psicoteràpia psicoanalítica'],
      lang: locale,
      catalan: true,
    });
  }
  return buildMetadata({
    catalan: true,
    title: 'Cómo se cura la ansiedad | Psicoanálisis en Canet de Mar',
    description: 'Psicoanálisis directo para tratar la ansiedad desde la raíz. Un método clínico con más de 30 años. Psicoanalista en Canet de Mar (Maresme) y online.',
    path: '/enfoque',
    keywords: ['como se cura la ansiedad', 'terapia ansiedad', 'psicoanálisis directo', 'causas de la ansiedad', 'tratamiento ansiedad Barcelona', 'psicoterapia psicoanalítica', 'curar ansiedad', 'psicoanálisis Barcelona', 'psicoanalista Catalunya', 'terapia psicoanalítica Maresme', 'psicoanalista Canet de Mar'],
    image: 'https://www.clinicadelansiedad.com/images/enfoque-hero.png',
    imageAlt: 'Cómo se cura la ansiedad - Psicoanálisis Directo',
    lang: locale,
  });
}

export default function EnfoqueLayout({ children }: { children: React.ReactNode }) {
  return children;
}
