import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === 'ca') {
    return buildMetadata({
      title: "Ansietat a Canet de Mar (Maresme) | Clínica de l'Ansietat",
      description: "Tractament de l'ansietat des de l'arrel amb un psicoanalista especialista. Consulta presencial a Canet de Mar (Maresme) i teràpia en línia per a tot Catalunya.",
      path: '/ansiedad',
      keywords: [
        "símptomes d'ansietat", 'ansietat símptomes', "què és l'ansietat",
        "causes de l'ansietat", 'ansietat generalitzada', "crisi d'ansietat",
        'palpitacions per ansietat', 'psicoanalista ansietat', 'psicoterapeuta ansietat Maresme',
        'tractament ansietat Barcelona', "com es cura l'ansietat",
        'teràpia ansietat Catalunya', 'teràpia ansietat Girona', 'teràpia ansietat Lleida',
        'teràpia ansietat Tarragona', 'psicoanalista Canet de Mar'
      ],
      lang: locale,
      catalan: true,
    });
  }
  return buildMetadata({
    catalan: true,
    // Modificador local delante: la consulta está en Canet de Mar (Maresme),
    // no en la ciudad de Barcelona. Barcelona queda solo como provincia y
    // como origen de parte de los pacientes.
    // OJO: Joan Ramon es PSICOANALISTA, no psicólogo (título protegido) — ni el
    // title ni el texto visible pueden autodenominarse psicólogo; ese término
    // solo vive en el slug /psicologo-maresme y en las keywords.
    title: 'Ansiedad en Canet de Mar (Maresme) | Clínica de la Ansiedad',
    description: 'Tratamiento de la ansiedad de raíz con un psicoanalista especialista. Consulta presencial en Canet de Mar (Maresme) y terapia online para toda Catalunya.',
    path: '/ansiedad',
    keywords: [
      'sintomas de ansiedad', 'ansiedad sintomas', 'que es ansiedad',
      'causas de la ansiedad', 'ansiedad generalizada', 'crisis de ansiedad sintomas',
      'palpitaciones por ansiedad', 'hiperventilacion', 'psicoanalista ansiedad',
      'tratamiento ansiedad Barcelona', 'como se cura la ansiedad',
      'psicoterapeuta ansiedad', 'clínica ansiedad Barcelona',
      'ansiedad generalizada tratamiento Catalunya', 'psicoterapeuta ansiedad Maresme',
      'terapia ansiedad Girona', 'terapia ansiedad Lleida', 'terapia ansiedad Tarragona'
    ],
    lang: locale,
  });
}

export default function AnsiedadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
