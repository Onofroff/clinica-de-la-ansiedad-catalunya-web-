// Páginas locales del Maresme: /psicologo-maresme/<slug>.
// Solo municipios desde los que venir a la consulta de Canet de Mar es cómodo.
// Cada página debe tener contenido propio (trayecto, situación práctica, preguntas):
// páginas que solo cambian el nombre del pueblo las penaliza Google.
// Tiempos de tren: aproximados según el orden de estaciones de la R1 de Rodalies.

export interface MunicipioFaq {
    q: string;
    a: string;
}

export interface MunicipioText {
    /** Título SEO (≈60 caracteres). */
    title: string;
    description: string;
    h1: string;
    h1Accent: string;
    lead: string;
    /** Párrafos propios del municipio. */
    body: string[];
    train: string;
    car: string;
    /** Consejo práctico específico. */
    tip: string;
    faq: MunicipioFaq[];
}

export interface Municipio {
    slug: string;
    name: string;
    es: MunicipioText;
    ca: MunicipioText;
}

export const MUNICIPIOS: Municipio[] = [
    {
        slug: 'mataro',
        name: 'Mataró',
        es: {
            title: 'Psicoanalista cerca de Mataró | Ansiedad · Canet de Mar',
            description:
                'Psicoanalista para la ansiedad a unos 15 minutos de Mataró en R1. Consulta en Canet de Mar y sesiones online, en catalán y castellano. Desde 1993.',
            h1: 'Psicoanalista cerca de Mataró:',
            h1Accent: 'a un trayecto de R1',
            lead:
                'Si vives en Mataró y buscas tratar la ansiedad, la depresión o las crisis de pánico desde la raíz, la consulta de Joan Ramon Soto está en Canet de Mar, a unos 15 minutos en tren.',
            body: [
                'En Mataró hay muchas consultas de psicología. La pregunta razonable es por qué desplazarse hasta Canet. Hay dos motivos que escuchamos a menudo: el método y la discreción. Aquí no se trabaja con técnicas para gestionar el síntoma, sino con psicoanálisis directo, que busca el conflicto que lo produce. Y para muchas personas es un alivio hacer terapia fuera de su ciudad, sin la posibilidad de cruzarse con un vecino o un compañero de trabajo en la sala de espera.',
                'Si el desplazamiento semanal te resulta difícil, es habitual hacer la primera visita presencial en Canet de Mar y continuar con sesiones online, o alternar ambas modalidades según la semana.',
            ],
            train:
                'R1 de Rodalies desde la estación de Mataró hasta Canet de Mar: unos 15 minutos. Fíjate en que el tren continúe más allá de Arenys de Mar, porque algunos terminan allí.',
            car: 'Unos 20 minutos por la C-32 hasta la salida de Canet de Mar. Hay aparcamiento libre en la zona de la consulta.',
            tip: 'Si trabajas en Barcelona y vuelves a Mataró en tren, una sesión a última hora en Canet supone solo unos minutos más en la misma línea.',
            faq: [
                {
                    q: '¿Tenéis consulta en Mataró?',
                    a: 'No. La consulta presencial está en Canet de Mar (Ronda Dr. Anglès 74), a unos 15 minutos de Mataró en la R1. También hacemos sesiones online con la misma profundidad clínica.',
                },
                {
                    q: '¿Merece la pena ir a Canet de Mar desde Mataró?',
                    a: 'Depende de lo que busques. Si quieres un tratamiento psicoanalítico centrado en la causa de la ansiedad y no solo en el síntoma, y valoras la discreción de hacer terapia fuera de tu ciudad, el trayecto es corto. Si el desplazamiento es un obstáculo, la terapia online es una alternativa real.',
                },
                {
                    q: '¿Cuánto cuesta la sesión?',
                    a: 'La sesión individual son 75 € (50 minutos) y la de pareja 100 € (1 hora), el mismo precio en presencial y online.',
                },
            ],
        },
        ca: {
            title: 'Psicoanalista a prop de Mataró | Ansietat · Canet de Mar',
            description:
                "Psicoanalista per a l'ansietat a uns 15 minuts de Mataró amb R1. Consulta a Canet de Mar i sessions en línia, en català i castellà. Des del 1993.",
            h1: 'Psicoanalista a prop de Mataró:',
            h1Accent: "a un trajecte d'R1",
            lead:
                "Si vius a Mataró i vols tractar l'ansietat, la depressió o les crisis de pànic des de l'arrel, la consulta de Joan Ramon Soto és a Canet de Mar, a uns 15 minuts en tren.",
            body: [
                "A Mataró hi ha moltes consultes de psicologia. La pregunta raonable és per què desplaçar-se fins a Canet. Hi ha dos motius que sentim sovint: el mètode i la discreció. Aquí no es treballa amb tècniques per gestionar el símptoma, sinó amb psicoanàlisi directa, que busca el conflicte que el produeix. I per a moltes persones és un alleujament fer teràpia fora de la seva ciutat, sense la possibilitat de trobar-se un veí o un company de feina a la sala d'espera.",
                "Si el desplaçament setmanal se't fa difícil, és habitual fer la primera visita presencial a Canet de Mar i continuar amb sessions en línia, o alternar totes dues modalitats segons la setmana.",
            ],
            train:
                "R1 de Rodalies des de l'estació de Mataró fins a Canet de Mar: uns 15 minuts. Fixa't que el tren continuï més enllà d'Arenys de Mar, perquè alguns hi acaben.",
            car: "Uns 20 minuts per la C-32 fins a la sortida de Canet de Mar. Hi ha aparcament lliure a la zona de la consulta.",
            tip: 'Si treballes a Barcelona i tornes a Mataró en tren, una sessió a última hora a Canet suposa només uns minuts més a la mateixa línia.',
            faq: [
                {
                    q: 'Teniu consulta a Mataró?',
                    a: "No. La consulta presencial és a Canet de Mar (Ronda Dr. Anglès 74), a uns 15 minuts de Mataró amb l'R1. També fem sessions en línia amb la mateixa profunditat clínica.",
                },
                {
                    q: 'Val la pena anar a Canet de Mar des de Mataró?',
                    a: "Depèn del que busquis. Si vols un tractament psicoanalític centrat en la causa de l'ansietat i no només en el símptoma, i valores la discreció de fer teràpia fora de la teva ciutat, el trajecte és curt. Si el desplaçament és un obstacle, la teràpia en línia és una alternativa real.",
                },
                {
                    q: 'Quant costa la sessió?',
                    a: 'La sessió individual són 75 € (50 minuts) i la de parella 100 € (1 hora), el mateix preu en presencial i en línia.',
                },
            ],
        },
    },
    {
        slug: 'sant-andreu-de-llavaneres',
        name: 'Sant Andreu de Llavaneres',
        es: {
            title: 'Psicoanalista cerca de Llavaneres | Ansiedad · Canet de Mar',
            description:
                'Psicoanalista para la ansiedad a unos 10 minutos de Sant Andreu de Llavaneres en R1 o en coche. Consulta en Canet de Mar, en catalán y castellano.',
            h1: 'Psicoanalista cerca de Llavaneres:',
            h1Accent: 'consulta en Canet de Mar',
            lead:
                'Desde Sant Andreu de Llavaneres, la consulta de Canet de Mar está a tres paradas de R1, unos 10 minutos, o a unos 10-15 minutos en coche.',
            body: [
                'Muchas personas de Llavaneres trabajan en Barcelona o en Mataró y viven la semana con poco margen. La ansiedad que aparece en ese ritmo suele presentarse como cansancio, irritabilidad o dificultad para desconectar, y es fácil atribuirla solo al exceso de trabajo. En consulta buscamos qué hay debajo: qué exigencia sostiene ese estado y por qué cuesta tanto parar.',
                'La sesión puede encajar al volver del trabajo: la consulta queda en la misma línea de tren, unas pocas paradas más al norte. Para las semanas imposibles, la sesión online mantiene la continuidad.',
            ],
            train:
                'R1 de Rodalies: tres paradas (Caldes d\'Estrac, Arenys de Mar y Canet de Mar), unos 10 minutos. Fíjate en que el tren continúe más allá de Arenys de Mar, porque algunos terminan allí.',
            car: 'Unos 10-15 minutos por la C-32 o la N-II hasta Canet de Mar. Hay aparcamiento libre en la zona de la consulta.',
            tip: 'Si vuelves de Barcelona en R1, puedes seguir unas paradas hasta Canet, hacer la sesión y regresar a Llavaneres en el mismo trayecto.',
            faq: [
                {
                    q: '¿Cuánto se tarda de Llavaneres a la consulta?',
                    a: 'Unos 10 minutos en R1 (tres paradas) o unos 10-15 minutos en coche. La consulta está en Ronda Dr. Anglès 74, Canet de Mar.',
                },
                {
                    q: '¿Tenéis horarios de tarde?',
                    a: 'La consulta atiende de lunes a viernes de 9:00 a 20:00. Al reservar puedes elegir el horario que mejor encaje con tu trabajo.',
                },
                {
                    q: '¿Cuánto cuesta la sesión?',
                    a: 'La sesión individual son 75 € (50 minutos) y la de pareja 100 € (1 hora), el mismo precio en presencial y online.',
                },
            ],
        },
        ca: {
            title: 'Psicoanalista a prop de Llavaneres | Ansietat · Canet de Mar',
            description:
                "Psicoanalista per a l'ansietat a uns 10 minuts de Sant Andreu de Llavaneres amb R1 o en cotxe. Consulta a Canet de Mar, en català i castellà.",
            h1: 'Psicoanalista a prop de Llavaneres:',
            h1Accent: 'consulta a Canet de Mar',
            lead:
                "Des de Sant Andreu de Llavaneres, la consulta de Canet de Mar és a tres parades d'R1, uns 10 minuts, o a uns 10-15 minuts en cotxe.",
            body: [
                "Moltes persones de Llavaneres treballen a Barcelona o a Mataró i viuen la setmana amb poc marge. L'ansietat que apareix en aquest ritme sol presentar-se com a cansament, irritabilitat o dificultat per desconnectar, i és fàcil atribuir-la només a l'excés de feina. A la consulta busquem què hi ha a sota: quina exigència sosté aquest estat i per què costa tant parar.",
                "La sessió pot encaixar en tornar de la feina: la consulta queda a la mateixa línia de tren, unes poques parades més al nord. Per a les setmanes impossibles, la sessió en línia manté la continuïtat.",
            ],
            train:
                "R1 de Rodalies: tres parades (Caldes d'Estrac, Arenys de Mar i Canet de Mar), uns 10 minuts. Fixa't que el tren continuï més enllà d'Arenys de Mar, perquè alguns hi acaben.",
            car: 'Uns 10-15 minuts per la C-32 o la N-II fins a Canet de Mar. Hi ha aparcament lliure a la zona de la consulta.',
            tip: "Si tornes de Barcelona amb l'R1, pots seguir unes parades fins a Canet, fer la sessió i tornar a Llavaneres en el mateix trajecte.",
            faq: [
                {
                    q: 'Quant es triga de Llavaneres a la consulta?',
                    a: 'Uns 10 minuts amb R1 (tres parades) o uns 10-15 minuts en cotxe. La consulta és a la Ronda Dr. Anglès 74, Canet de Mar.',
                },
                {
                    q: 'Teniu horaris de tarda?',
                    a: 'La consulta atén de dilluns a divendres de 9.00 a 20.00 h. En reservar pots triar l\'horari que millor encaixi amb la teva feina.',
                },
                {
                    q: 'Quant costa la sessió?',
                    a: 'La sessió individual són 75 € (50 minuts) i la de parella 100 € (1 hora), el mateix preu en presencial i en línia.',
                },
            ],
        },
    },
    {
        slug: 'caldes-d-estrac',
        name: "Caldes d'Estrac",
        es: {
            title: "Psicoanalista cerca de Caldes d'Estrac | Ansiedad · Canet",
            description:
                "Psicoanalista para la ansiedad a dos paradas de R1 de Caldes d'Estrac. Consulta en Canet de Mar, en catalán y castellano. Desde 1993.",
            h1: "Psicoanalista cerca de Caldes d'Estrac:",
            h1Accent: 'a dos paradas de tren',
            lead:
                "Desde Caldes d'Estrac, la consulta de Canet de Mar está a dos paradas de R1, unos 7 minutos, o a unos 10 minutos por la N-II.",
            body: [
                "Caldes es un municipio pequeño, y en un lugar donde casi todo el mundo se conoce, empezar una terapia puede dar reparo. Hacerla en Canet, a pocos minutos pero fuera del propio pueblo, ayuda a muchas personas a dar el paso con tranquilidad.",
                'El trabajo es psicoanalítico: escuchamos tu historia para entender qué conflicto sostiene la ansiedad, la tristeza o las crisis de pánico, con el objetivo de que el síntoma deje de ser necesario, no de aprender a convivir con él.',
            ],
            train:
                "R1 de Rodalies: dos paradas (Arenys de Mar y Canet de Mar), unos 7 minutos. Fíjate en que el tren continúe más allá de Arenys de Mar, porque algunos terminan allí.",
            car: 'Unos 10 minutos por la N-II, bordeando la costa. Hay aparcamiento libre en la zona.',
            tip: 'Al estar tan cerca, la sesión cabe en una hora y media contando el trayecto de ida y vuelta.',
            faq: [
                {
                    q: "¿A qué distancia está la consulta de Caldes d'Estrac?",
                    a: 'A dos paradas de R1 (unos 7 minutos) o unos 10 minutos en coche por la N-II, en Ronda Dr. Anglès 74, Canet de Mar.',
                },
                {
                    q: '¿Es confidencial?',
                    a: 'Sí. Todo lo que se habla en consulta está sujeto a secreto profesional.',
                },
                {
                    q: '¿Atendéis en catalán?',
                    a: 'Sí. Joan Ramon Soto atiende indistintamente en catalán y castellano.',
                },
            ],
        },
        ca: {
            title: "Psicoanalista a prop de Caldes d'Estrac | Ansietat · Canet",
            description:
                "Psicoanalista per a l'ansietat a dues parades d'R1 de Caldes d'Estrac. Consulta a Canet de Mar, en català i castellà. Des del 1993.",
            h1: "Psicoanalista a prop de Caldes d'Estrac:",
            h1Accent: 'a dues parades de tren',
            lead:
                "Des de Caldes d'Estrac, la consulta de Canet de Mar és a dues parades d'R1, uns 7 minuts, o a uns 10 minuts per la N-II.",
            body: [
                "Caldes és un municipi petit, i en un lloc on gairebé tothom es coneix, començar una teràpia pot fer recança. Fer-la a Canet, a pocs minuts però fora del propi poble, ajuda moltes persones a fer el pas amb tranquil·litat.",
                "El treball és psicoanalític: escoltem la teva història per entendre quin conflicte sosté l'ansietat, la tristesa o les crisis de pànic, amb l'objectiu que el símptoma deixi de ser necessari, no d'aprendre a conviure-hi.",
            ],
            train:
                "R1 de Rodalies: dues parades (Arenys de Mar i Canet de Mar), uns 7 minuts. Fixa't que el tren continuï més enllà d'Arenys de Mar, perquè alguns hi acaben.",
            car: 'Uns 10 minuts per la N-II, vorejant la costa. Hi ha aparcament lliure a la zona.',
            tip: "Com que és tan a prop, la sessió cap en una hora i mitja comptant el trajecte d'anada i tornada.",
            faq: [
                {
                    q: "A quina distància és la consulta de Caldes d'Estrac?",
                    a: "A dues parades d'R1 (uns 7 minuts) o uns 10 minuts en cotxe per la N-II, a la Ronda Dr. Anglès 74, Canet de Mar.",
                },
                {
                    q: 'És confidencial?',
                    a: 'Sí. Tot el que es parla a la consulta està subjecte a secret professional.',
                },
                {
                    q: 'Atens en català?',
                    a: 'Sí. Joan Ramon Soto atén indistintament en català i castellà.',
                },
            ],
        },
    },
    {
        slug: 'arenys-de-mar',
        name: 'Arenys de Mar',
        es: {
            title: 'Psicoanalista para Arenys de Mar | Ansiedad · Canet de Mar',
            description:
                'Psicoanalista para la ansiedad a una parada de tren de Arenys de Mar. Consulta en Canet de Mar, en catalán y castellano. Primera visita sin tests.',
            h1: 'Psicoanalista para Arenys de Mar:',
            h1Accent: 'a una parada de tren',
            lead:
                'Desde Arenys de Mar, la consulta de Canet de Mar está a una sola parada de la R1. Es probablemente el trayecto más corto de toda la comarca.',
            body: [
                'Arenys de Mar y Canet son municipios vecinos, y eso tiene una ventaja práctica: la sesión cabe en una mañana o una tarde normal sin reorganizar el día. Para un tratamiento que funciona con continuidad semanal, que el trayecto sea corto importa más de lo que parece.',
                'El trabajo es psicoanalítico: no buscamos que aprendas a convivir con la ansiedad, sino entender qué conflicto la sostiene para que deje de ser necesaria. La primera visita es una conversación clínica, sin cuestionarios ni tests.',
            ],
            train: 'R1 de Rodalies: una parada, unos 4 minutos de Arenys de Mar a Canet de Mar. La consulta está a pocos minutos a pie de la estación.',
            car: 'Unos 5 minutos por la N-II, bordeando la costa. Hay aparcamiento libre en la zona.',
            tip: 'Al ser tan cerca, es fácil encajar la sesión antes o después del trabajo sin depender de horarios de tren.',
            faq: [
                {
                    q: '¿A qué distancia está la consulta de Arenys de Mar?',
                    a: 'A una parada de la R1 (unos 4 minutos) o unos 5 minutos en coche por la N-II. La consulta está en Ronda Dr. Anglès 74, en Canet de Mar.',
                },
                {
                    q: '¿Atendéis en catalán?',
                    a: 'Sí. Joan Ramon Soto atiende indistintamente en catalán y castellano.',
                },
                {
                    q: '¿Cómo es la primera visita?',
                    a: 'Una conversación clínica extensa, sin tests. Hablamos de cuándo aparecieron los síntomas, qué los sostiene y cómo sería el proceso. La sesión individual son 75 €.',
                },
            ],
        },
        ca: {
            title: "Psicoanalista per a Arenys de Mar | Ansietat · Canet de Mar",
            description:
                "Psicoanalista per a l'ansietat a una parada de tren d'Arenys de Mar. Consulta a Canet de Mar, en català i castellà. Primera visita sense tests.",
            h1: 'Psicoanalista per a Arenys de Mar:',
            h1Accent: 'a una parada de tren',
            lead:
                "Des d'Arenys de Mar, la consulta de Canet de Mar és a una sola parada de l'R1. És probablement el trajecte més curt de tota la comarca.",
            body: [
                "Arenys de Mar i Canet són municipis veïns, i això té un avantatge pràctic: la sessió cap en un matí o una tarda normals sense reorganitzar el dia. Per a un tractament que funciona amb continuïtat setmanal, que el trajecte sigui curt importa més del que sembla.",
                "El treball és psicoanalític: no busquem que aprenguis a conviure amb l'ansietat, sinó entendre quin conflicte la sosté perquè deixi de ser necessària. La primera visita és una conversa clínica, sense qüestionaris ni tests.",
            ],
            train: "R1 de Rodalies: una parada, uns 4 minuts d'Arenys de Mar a Canet de Mar. La consulta és a pocs minuts a peu de l'estació.",
            car: 'Uns 5 minuts per la N-II, vorejant la costa. Hi ha aparcament lliure a la zona.',
            tip: "Com que és tan a prop, és fàcil encaixar la sessió abans o després de la feina sense dependre d'horaris de tren.",
            faq: [
                {
                    q: "A quina distància és la consulta d'Arenys de Mar?",
                    a: "A una parada de l'R1 (uns 4 minuts) o uns 5 minuts en cotxe per la N-II. La consulta és a la Ronda Dr. Anglès 74, a Canet de Mar.",
                },
                {
                    q: 'Atens en català?',
                    a: 'Sí. Joan Ramon Soto atén indistintament en català i castellà.',
                },
                {
                    q: 'Com és la primera visita?',
                    a: 'Una conversa clínica extensa, sense tests. Parlem de quan van aparèixer els símptomes, què els sosté i com seria el procés. La sessió individual són 75 €.',
                },
            ],
        },
    },
    {
        slug: 'arenys-de-munt',
        name: 'Arenys de Munt',
        es: {
            title: 'Psicoanalista para Arenys de Munt | Ansiedad · Canet de Mar',
            description:
                'Psicoanalista para la ansiedad a unos 10-15 minutos en coche de Arenys de Munt. Consulta en Canet de Mar y online, en catalán y castellano.',
            h1: 'Psicoanalista para Arenys de Munt:',
            h1Accent: 'consulta en Canet de Mar',
            lead:
                'Arenys de Munt no tiene estación de tren, así que la mayoría de personas vienen en coche: la consulta de Canet de Mar queda a unos 10-15 minutos bajando hacia la costa.',
            body: [
                'Al estar en el interior, desde Arenys de Munt suele ser más práctico el coche que el transporte público. Si en algún momento no puedes desplazarte, las sesiones online mantienen la continuidad del tratamiento sin perder profundidad.',
                'En consulta trabajamos la ansiedad, la depresión, las crisis de pánico y los celos desde el psicoanálisis directo: entender qué conflicto produce el síntoma en lugar de entrenar técnicas para contenerlo.',
            ],
            train: 'No hay tren en Arenys de Munt. La estación más cercana es Arenys de Mar, a una parada de R1 de Canet de Mar.',
            car: 'Unos 10-15 minutos bajando hacia Arenys de Mar y la N-II hasta Canet de Mar. Hay aparcamiento libre en la zona.',
            tip: 'Si te cuesta encajar el desplazamiento algunas semanas, puedes alternar sesiones presenciales y online sin cambiar de profesional.',
            faq: [
                {
                    q: '¿Cómo llego desde Arenys de Munt sin coche?',
                    a: 'Hasta Arenys de Mar en transporte público y desde allí una parada de R1 hasta Canet de Mar. Si el trayecto se complica, ofrecemos sesiones online.',
                },
                {
                    q: '¿Las sesiones online son igual de eficaces?',
                    a: 'Para el trabajo psicoanalítico lo esencial es la palabra y la continuidad. La sesión online se hace por videollamada, con el mismo tiempo y precio que la presencial.',
                },
                {
                    q: '¿Qué problemas tratáis?',
                    a: 'Ansiedad, crisis de pánico, depresión, celos, ludopatía y dificultades de pareja y familiares, siempre desde el psicoanálisis.',
                },
            ],
        },
        ca: {
            title: "Psicoanalista per a Arenys de Munt | Ansietat · Canet de Mar",
            description:
                "Psicoanalista per a l'ansietat a uns 10-15 minuts en cotxe d'Arenys de Munt. Consulta a Canet de Mar i en línia, en català i castellà.",
            h1: 'Psicoanalista per a Arenys de Munt:',
            h1Accent: 'consulta a Canet de Mar',
            lead:
                "Arenys de Munt no té estació de tren, així que la majoria de persones vénen en cotxe: la consulta de Canet de Mar queda a uns 10-15 minuts baixant cap a la costa.",
            body: [
                "Com que és a l'interior, des d'Arenys de Munt sol ser més pràctic el cotxe que el transport públic. Si en algun moment no et pots desplaçar, les sessions en línia mantenen la continuïtat del tractament sense perdre profunditat.",
                "A la consulta treballem l'ansietat, la depressió, les crisis de pànic i la gelosia des de la psicoanàlisi directa: entendre quin conflicte produeix el símptoma en lloc d'entrenar tècniques per contenir-lo.",
            ],
            train: "No hi ha tren a Arenys de Munt. L'estació més propera és Arenys de Mar, a una parada d'R1 de Canet de Mar.",
            car: "Uns 10-15 minuts baixant cap a Arenys de Mar i la N-II fins a Canet de Mar. Hi ha aparcament lliure a la zona.",
            tip: 'Si algunes setmanes et costa encaixar el desplaçament, pots alternar sessions presencials i en línia sense canviar de professional.',
            faq: [
                {
                    q: "Com hi arribo des d'Arenys de Munt sense cotxe?",
                    a: "Fins a Arenys de Mar en transport públic i des d'allà una parada d'R1 fins a Canet de Mar. Si el trajecte es complica, oferim sessions en línia.",
                },
                {
                    q: 'Les sessions en línia són igual d\'eficaces?',
                    a: 'Per al treball psicoanalític, l\'essencial és la paraula i la continuïtat. La sessió en línia es fa per videotrucada, amb el mateix temps i preu que la presencial.',
                },
                {
                    q: 'Quins problemes tracteu?',
                    a: 'Ansietat, crisis de pànic, depressió, gelosia, ludopatia i dificultats de parella i familiars, sempre des de la psicoanàlisi.',
                },
            ],
        },
    },
    {
        slug: 'sant-pol-de-mar',
        name: 'Sant Pol de Mar',
        es: {
            title: 'Psicoanalista para Sant Pol de Mar | Ansiedad · Canet',
            description:
                'Psicoanalista para la ansiedad a una parada de R1 de Sant Pol de Mar. Consulta en Canet de Mar, en catalán y castellano. Desde 1993.',
            h1: 'Psicoanalista para Sant Pol de Mar:',
            h1Accent: 'el pueblo de al lado',
            lead:
                'Sant Pol de Mar y Canet son vecinos: una parada de R1 o unos minutos por la N-II separan tu casa de la consulta.',
            body: [
                'En un municipio pequeño como Sant Pol, mucha gente prefiere no hacer terapia donde todo el mundo se conoce. Canet está lo bastante cerca para que el trayecto no sea un obstáculo y lo bastante fuera para preservar la discreción.',
                'Trabajamos desde el psicoanálisis directo: la ansiedad, la angustia o la tristeza persistente se entienden como señales de un conflicto que se puede poner en palabras y resolver, no como algo que hay que aprender a soportar.',
            ],
            train: 'R1 de Rodalies: una parada, unos 4 minutos de Sant Pol de Mar a Canet de Mar. La consulta está a pocos minutos a pie de la estación.',
            car: 'Unos 5-10 minutos por la N-II. Hay aparcamiento libre en la zona.',
            tip: 'Ten en cuenta que al norte de Arenys de Mar la R1 pasa con menos frecuencia: consulta el horario para no esperar en el andén.',
            faq: [
                {
                    q: '¿A cuánto está la consulta de Sant Pol de Mar?',
                    a: 'A una parada de R1 (unos 4 minutos) o unos 5-10 minutos en coche por la N-II, en Ronda Dr. Anglès 74, Canet de Mar.',
                },
                {
                    q: '¿Es confidencial?',
                    a: 'Sí. Todo lo que se habla en consulta está sujeto a secreto profesional. Además, venir desde Sant Pol a Canet ayuda a quien prefiere no hacer terapia en su propio pueblo.',
                },
                {
                    q: '¿Cuánto cuesta?',
                    a: 'La sesión individual son 75 € (50 minutos) y la de pareja 100 € (1 hora).',
                },
            ],
        },
        ca: {
            title: 'Psicoanalista per a Sant Pol de Mar | Ansietat · Canet',
            description:
                "Psicoanalista per a l'ansietat a una parada d'R1 de Sant Pol de Mar. Consulta a Canet de Mar, en català i castellà. Des del 1993.",
            h1: 'Psicoanalista per a Sant Pol de Mar:',
            h1Accent: 'el poble del costat',
            lead:
                "Sant Pol de Mar i Canet són veïns: una parada d'R1 o uns minuts per la N-II separen casa teva de la consulta.",
            body: [
                "En un municipi petit com Sant Pol, molta gent prefereix no fer teràpia on tothom es coneix. Canet és prou a prop perquè el trajecte no sigui un obstacle i prou fora per preservar la discreció.",
                "Treballem des de la psicoanàlisi directa: l'ansietat, l'angoixa o la tristesa persistent s'entenen com a senyals d'un conflicte que es pot posar en paraules i resoldre, no com una cosa que s'ha d'aprendre a suportar.",
            ],
            train: "R1 de Rodalies: una parada, uns 4 minuts de Sant Pol de Mar a Canet de Mar. La consulta és a pocs minuts a peu de l'estació.",
            car: 'Uns 5-10 minuts per la N-II. Hi ha aparcament lliure a la zona.',
            tip: "Tingues en compte que al nord d'Arenys de Mar l'R1 passa amb menys freqüència: consulta l'horari per no esperar a l'andana.",
            faq: [
                {
                    q: 'A quant és la consulta de Sant Pol de Mar?',
                    a: "A una parada d'R1 (uns 4 minuts) o uns 5-10 minuts en cotxe per la N-II, a la Ronda Dr. Anglès 74, Canet de Mar.",
                },
                {
                    q: 'És confidencial?',
                    a: 'Sí. Tot el que es parla a la consulta està subjecte a secret professional. A més, venir de Sant Pol a Canet ajuda qui prefereix no fer teràpia al seu propi poble.',
                },
                {
                    q: 'Quant costa?',
                    a: 'La sessió individual són 75 € (50 minuts) i la de parella 100 € (1 hora).',
                },
            ],
        },
    },
    {
        slug: 'calella',
        name: 'Calella',
        es: {
            title: 'Psicoanalista cerca de Calella | Ansiedad · Canet de Mar',
            description:
                'Psicoanalista para la ansiedad a unos 10 minutos de Calella en R1. Consulta en Canet de Mar y online, horarios compatibles con temporada alta.',
            h1: 'Psicoanalista cerca de Calella:',
            h1Accent: 'a 10 minutos en tren',
            lead:
                'Desde Calella, la consulta de Canet de Mar está a unos 10 minutos en R1, a dos paradas, o a unos 10-15 minutos en coche por la N-II.',
            body: [
                'Muchas personas de Calella trabajan en hostelería o comercio y sus horarios cambian mucho entre invierno y verano. Un tratamiento psicoanalítico necesita continuidad, así que en temporada alta es habitual ajustar el horario de la sesión o pasar algunas semanas a modalidad online sin interrumpir el proceso.',
                'La ansiedad que aparece con la sobrecarga de trabajo no siempre se explica solo por el exceso de horas. En consulta buscamos qué hay debajo: qué exigencia interna la sostiene y por qué cuesta tanto parar.',
            ],
            train: 'R1 de Rodalies: dos paradas (Sant Pol de Mar y Canet de Mar), unos 10 minutos. La consulta está a pocos minutos a pie de la estación.',
            car: 'Unos 10-15 minutos por la N-II. Hay aparcamiento libre en la zona.',
            tip: 'Si tus horarios cambian con la temporada, avísanos: podemos combinar sesiones presenciales y online para no cortar el proceso.',
            faq: [
                {
                    q: '¿Cómo llego desde Calella?',
                    a: 'En R1, dos paradas hasta Canet de Mar (unos 10 minutos), o en coche por la N-II en unos 10-15 minutos. La consulta está en Ronda Dr. Anglès 74.',
                },
                {
                    q: 'Trabajo en temporada alta, ¿puedo hacer terapia igualmente?',
                    a: 'Sí. Ajustamos el horario y, si hace falta, algunas semanas se hacen online para mantener la continuidad del tratamiento.',
                },
                {
                    q: '¿Atendéis en catalán y castellano?',
                    a: 'Sí, indistintamente, para que puedas hablar en la lengua en la que te expresas mejor.',
                },
            ],
        },
        ca: {
            title: 'Psicoanalista a prop de Calella | Ansietat · Canet de Mar',
            description:
                "Psicoanalista per a l'ansietat a uns 10 minuts de Calella amb R1. Consulta a Canet de Mar i en línia, horaris compatibles amb la temporada alta.",
            h1: 'Psicoanalista a prop de Calella:',
            h1Accent: 'a 10 minuts en tren',
            lead:
                "Des de Calella, la consulta de Canet de Mar és a uns 10 minuts amb R1, a dues parades, o a uns 10-15 minuts en cotxe per la N-II.",
            body: [
                "Moltes persones de Calella treballen en hostaleria o comerç i els seus horaris canvien molt entre l'hivern i l'estiu. Un tractament psicoanalític necessita continuïtat, així que en temporada alta és habitual ajustar l'horari de la sessió o passar algunes setmanes a la modalitat en línia sense interrompre el procés.",
                "L'ansietat que apareix amb la sobrecàrrega de feina no sempre s'explica només per l'excés d'hores. A la consulta busquem què hi ha a sota: quina exigència interna la sosté i per què costa tant parar.",
            ],
            train: "R1 de Rodalies: dues parades (Sant Pol de Mar i Canet de Mar), uns 10 minuts. La consulta és a pocs minuts a peu de l'estació.",
            car: 'Uns 10-15 minuts per la N-II. Hi ha aparcament lliure a la zona.',
            tip: 'Si els teus horaris canvien amb la temporada, avisa\'ns: podem combinar sessions presencials i en línia per no tallar el procés.',
            faq: [
                {
                    q: 'Com hi arribo des de Calella?',
                    a: "Amb R1, dues parades fins a Canet de Mar (uns 10 minuts), o en cotxe per la N-II en uns 10-15 minuts. La consulta és a la Ronda Dr. Anglès 74.",
                },
                {
                    q: 'Treballo en temporada alta, puc fer teràpia igualment?',
                    a: 'Sí. Ajustem l\'horari i, si cal, algunes setmanes es fan en línia per mantenir la continuïtat del tractament.',
                },
                {
                    q: 'Atens en català i castellà?',
                    a: 'Sí, indistintament, perquè puguis parlar en la llengua en què t\'expresses millor.',
                },
            ],
        },
    },
    {
        slug: 'pineda-de-mar',
        name: 'Pineda de Mar',
        es: {
            title: 'Psicoanalista cerca de Pineda de Mar | Ansiedad · Canet',
            description:
                'Psicoanalista para la ansiedad a unos 15 minutos de Pineda de Mar en R1, sin transbordos. Consulta en Canet de Mar y online, en catalán y castellano.',
            h1: 'Psicoanalista cerca de Pineda de Mar:',
            h1Accent: 'R1 directa, sin transbordos',
            lead:
                'Desde Pineda de Mar, la R1 llega directa a Canet de Mar en unos 15 minutos, y en coche son unos 15 minutos por la N-II.',
            body: [
                'Pineda queda en la mitad norte de la comarca. El trayecto es directo, pero con la frecuencia de trenes del norte del Maresme conviene planificarlo. Por eso, a quien viene de Pineda le solemos proponer un horario fijo semanal que encaje con un tren concreto, y la opción online para las semanas complicadas.',
                'El tratamiento es psicoanalítico: no se trata de aprender técnicas de relajación, sino de comprender qué conflicto mantiene activa la ansiedad, las crisis de pánico o la tristeza, para que pierdan su razón de ser.',
            ],
            train: 'R1 de Rodalies directa, sin transbordos: unos 15 minutos de Pineda de Mar a Canet de Mar. La consulta está a pocos minutos a pie de la estación.',
            car: 'Unos 15 minutos por la N-II. Hay aparcamiento libre en la zona.',
            tip: 'Fijar la sesión siempre a la misma hora ayuda a encajarla con el mismo tren cada semana.',
            faq: [
                {
                    q: '¿Cuánto se tarda de Pineda de Mar a la consulta?',
                    a: 'Unos 15 minutos en R1 directa o unos 15 minutos en coche por la N-II. La consulta está en Ronda Dr. Anglès 74, Canet de Mar.',
                },
                {
                    q: '¿Puedo combinar presencial y online?',
                    a: 'Sí. Muchas personas hacen la primera visita en Canet y alternan sesiones online cuando el desplazamiento se complica.',
                },
                {
                    q: '¿Qué pasa en la primera visita?',
                    a: 'Es una conversación clínica, sin cuestionarios. Exploramos tu historia y lo que te trae, y al final tendrás una idea clara de cómo sería el proceso.',
                },
            ],
        },
        ca: {
            title: 'Psicoanalista a prop de Pineda de Mar | Ansietat · Canet',
            description:
                "Psicoanalista per a l'ansietat a uns 15 minuts de Pineda de Mar amb R1, sense transbordaments. Consulta a Canet de Mar i en línia, en català i castellà.",
            h1: 'Psicoanalista a prop de Pineda de Mar:',
            h1Accent: 'R1 directa, sense transbordaments',
            lead:
                "Des de Pineda de Mar, l'R1 arriba directa a Canet de Mar en uns 15 minuts, i en cotxe són uns 15 minuts per la N-II.",
            body: [
                "Pineda queda a la meitat nord de la comarca. El trajecte és directe, però amb la freqüència de trens del nord del Maresme convé planificar-lo. Per això, a qui ve de Pineda li solem proposar un horari fix setmanal que encaixi amb un tren concret, i l'opció en línia per a les setmanes complicades.",
                "El tractament és psicoanalític: no es tracta d'aprendre tècniques de relaxació, sinó de comprendre quin conflicte manté activa l'ansietat, les crisis de pànic o la tristesa, perquè perdin la seva raó de ser.",
            ],
            train: "R1 de Rodalies directa, sense transbordaments: uns 15 minuts de Pineda de Mar a Canet de Mar. La consulta és a pocs minuts a peu de l'estació.",
            car: 'Uns 15 minuts per la N-II. Hi ha aparcament lliure a la zona.',
            tip: 'Fixar la sessió sempre a la mateixa hora ajuda a encaixar-la amb el mateix tren cada setmana.',
            faq: [
                {
                    q: 'Quant es triga de Pineda de Mar a la consulta?',
                    a: "Uns 15 minuts amb R1 directa o uns 15 minuts en cotxe per la N-II. La consulta és a la Ronda Dr. Anglès 74, Canet de Mar.",
                },
                {
                    q: 'Puc combinar presencial i en línia?',
                    a: 'Sí. Moltes persones fan la primera visita a Canet i alternen sessions en línia quan el desplaçament es complica.',
                },
                {
                    q: 'Què passa a la primera visita?',
                    a: 'És una conversa clínica, sense qüestionaris. Explorem la teva història i el que et porta, i al final tindràs una idea clara de com seria el procés.',
                },
            ],
        },
    },
    {
        slug: 'malgrat-de-mar',
        name: 'Malgrat de Mar',
        es: {
            title: 'Psicoanalista cerca de Malgrat de Mar | Ansiedad · Canet',
            description:
                'Psicoanalista para la ansiedad a unos 20 minutos de Malgrat de Mar en R1. Consulta en Canet de Mar y terapia online, en catalán y castellano.',
            h1: 'Psicoanalista cerca de Malgrat de Mar:',
            h1Accent: 'presencial u online',
            lead:
                'Malgrat de Mar está en el extremo norte del Maresme, a unos 20 minutos de Canet de Mar tanto en R1 como en coche.',
            body: [
                'Es el municipio más lejano de los que solemos atender presencialmente, y por eso aquí la terapia online tiene más peso. Una fórmula habitual es hacer la primera visita en la consulta de Canet, para conocerse en persona, y continuar por videollamada con la misma frecuencia y duración.',
                'En ambos formatos el trabajo es el mismo: psicoanálisis directo, orientado a comprender y resolver el conflicto que origina la ansiedad o la depresión, no a gestionarlas indefinidamente.',
            ],
            train: 'R1 de Rodalies directa: unos 20 minutos de Malgrat de Mar a Canet de Mar. La consulta está a pocos minutos a pie de la estación.',
            car: 'Unos 20 minutos por la N-II o la C-32. Hay aparcamiento libre en la zona.',
            tip: 'Si el trayecto semanal se te hace largo, empieza presencial y pasa a online: el proceso no se resiente.',
            faq: [
                {
                    q: '¿Merece la pena ir desde Malgrat de Mar?',
                    a: 'Son unos 20 minutos en tren o en coche. Si el desplazamiento semanal es un problema, puedes hacer la primera visita presencial y continuar online con el mismo profesional.',
                },
                {
                    q: '¿Cómo funcionan las sesiones online?',
                    a: 'Por videollamada cifrada y sin grabación, con la misma duración (50 minutos) y el mismo precio (75 €) que la sesión presencial.',
                },
                {
                    q: '¿Atendéis en catalán?',
                    a: 'Sí. Joan Ramon Soto atiende indistintamente en catalán y castellano.',
                },
            ],
        },
        ca: {
            title: 'Psicoanalista a prop de Malgrat de Mar | Ansietat · Canet',
            description:
                "Psicoanalista per a l'ansietat a uns 20 minuts de Malgrat de Mar amb R1. Consulta a Canet de Mar i teràpia en línia, en català i castellà.",
            h1: 'Psicoanalista a prop de Malgrat de Mar:',
            h1Accent: 'presencial o en línia',
            lead:
                "Malgrat de Mar és a l'extrem nord del Maresme, a uns 20 minuts de Canet de Mar tant amb R1 com en cotxe.",
            body: [
                "És el municipi més llunyà dels que solem atendre presencialment, i per això aquí la teràpia en línia hi té més pes. Una fórmula habitual és fer la primera visita a la consulta de Canet, per conèixer-se en persona, i continuar per videotrucada amb la mateixa freqüència i durada.",
                "En tots dos formats el treball és el mateix: psicoanàlisi directa, orientada a comprendre i resoldre el conflicte que origina l'ansietat o la depressió, no a gestionar-les indefinidament.",
            ],
            train: "R1 de Rodalies directa: uns 20 minuts de Malgrat de Mar a Canet de Mar. La consulta és a pocs minuts a peu de l'estació.",
            car: 'Uns 20 minuts per la N-II o la C-32. Hi ha aparcament lliure a la zona.',
            tip: 'Si el trajecte setmanal se\'t fa llarg, comença presencial i passa a en línia: el procés no se\'n ressent.',
            faq: [
                {
                    q: 'Val la pena venir des de Malgrat de Mar?',
                    a: 'Són uns 20 minuts en tren o en cotxe. Si el desplaçament setmanal és un problema, pots fer la primera visita presencial i continuar en línia amb el mateix professional.',
                },
                {
                    q: 'Com funcionen les sessions en línia?',
                    a: 'Per videotrucada xifrada i sense gravació, amb la mateixa durada (50 minuts) i el mateix preu (75 €) que la sessió presencial.',
                },
                {
                    q: 'Atens en català?',
                    a: 'Sí. Joan Ramon Soto atén indistintament en català i castellà.',
                },
            ],
        },
    },
];

export function getMunicipio(slug: string): Municipio | undefined {
    return MUNICIPIOS.find((m) => m.slug === slug);
}
