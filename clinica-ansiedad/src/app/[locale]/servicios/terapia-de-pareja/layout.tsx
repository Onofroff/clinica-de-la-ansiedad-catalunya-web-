import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === 'ca') {
    return buildMetadata({
      title: "Teràpia de parella a Canet de Mar (Maresme) | Psicoanalista",
      description: "Teràpia de parella per a crisis, problemes de comunicació, infidelitat i desconnexió. Consulta a Canet de Mar (Maresme) i en línia per a tot Catalunya.",
      path: '/servicios/terapia-de-pareja',
      keywords: ["teràpia de parella", "crisi de parella", "teràpia de parella Maresme", "teràpia de parella Barcelona", "teràpia de parella en línia", "infidelitat"],
      lang: locale,
      catalan: true,
    });
  }
  return buildMetadata({
    catalan: true,
    title: 'Terapia de pareja en Canet de Mar y el Maresme',
    description: 'Terapia de pareja psicoanalítica para conflictos y desconexión afectiva. Sesiones presenciales en Canet de Mar (Maresme) y terapia online.',
    path: '/servicios/terapia-de-pareja',
    keywords: [
      'terapia pareja', 'terapia de pareja Barcelona', 'psicoterapeuta pareja',
      'conflictos pareja', 'desconexión afectiva', 'comunicación pareja',
      'terapia de pareja Catalunya', 'psicoterapeuta pareja Maresme',
      'terapia pareja Girona', 'terapia pareja Lleida', 'terapia pareja Tarragona',
      'terapia de pareja Canet de Mar', 'terapia de pareja Maresme'
    ],
    lang: locale,
  });
}

export default function TerapiaDeParejaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
