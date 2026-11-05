import type { LocalPost } from './types';

const ITSS = 'https://www.mites.gob.es/itss/ITSS/ITSS_Descargas/Atencion_ciudadano/Normativa_documentacion/Docum_ITSS/Guia_psicosociales.pdf';

const post: LocalPost = {
    slug: 'burnout-sintomas-empresa',
    title: 'Burnout: señales de que no es solo cansancio y qué puede hacer la empresa',
    seoTitle: 'Burnout: síntomas, causas y qué puede hacer la empresa',
    description:
        'Agotamiento que no se va con el descanso, distancia con el trabajo y sensación de no rendir. Qué es el burnout, cómo reconocerlo y qué puede hacer la empresa para prevenirlo.',
    keywords: ['burnout', 'síndrome de burnout', 'síntomas burnout', 'estar quemado en el trabajo', 'burnout empresa', 'prevenir burnout'],
    category: 'Empresa',
    date: '2026-11-05',
    image: '/images/blog/burnout-sintomas-empresa.webp',
    imageAlt: 'Ilustración de una persona agotada apoyada en su escritorio junto a una batería casi vacía — Clínica de la Ansiedad Catalunya',
    body: `
**Respuesta breve:** el burnout es un agotamiento ligado al trabajo que no se recupera con el fin de semana ni con las vacaciones. La Organización Mundial de la Salud lo describe con tres rasgos: agotamiento, distancia mental o cinismo hacia el trabajo y sensación de ineficacia. No es una debilidad personal: aparece cuando la exigencia se mantiene durante mucho tiempo sin margen de recuperación, y por eso la prevención es responsabilidad de la persona y también de la organización.

«Llego el viernes vacío y el lunes ya estoy cansado.» Es una frase que escucho a menudo en consulta, casi siempre de personas responsables, implicadas y competentes. No se quejan de un mal día, sino de algo que se ha ido instalando poco a poco hasta que el trabajo, que antes daba sentido, solo da peso.

## Qué es el burnout

La Organización Mundial de la Salud incluye el burnout en su clasificación internacional como un fenómeno ocupacional, no como una enfermedad. Lo define como el resultado de un estrés laboral crónico que no se ha gestionado con éxito, y lo caracteriza por tres dimensiones:

- **Agotamiento:** sensación de estar sin energía, física y emocionalmente.
- **Distancia o cinismo:** desapego del trabajo, irritabilidad, sensación de que nada importa.
- **Ineficacia:** la impresión de rendir menos, de no llegar, de no ser capaz.

## Señales de que no es solo cansancio

- El descanso ya no repara: vuelves de vacaciones y a los dos días estás igual.
- Te cuesta concentrarte y cometes errores que antes no cometías.
- Duermes mal, te despiertas pensando en el trabajo o te cuesta desconectar.
- Estás más irritable con compañeros, clientes o en casa.
- Sientes una mezcla de culpa y rechazo: «debería poder con esto» y «no quiero volver».
- Aparecen molestias físicas: dolores de cabeza, tensión muscular, problemas digestivos.

Si además notas tristeza persistente, pérdida de interés por casi todo o pensamientos muy negativos, consulta con un profesional: el burnout y la [depresión](/es/blog/que-es-la-depresion) pueden solaparse.

## Por qué aparece

El burnout no depende solo de cuántas horas trabajas. Suele surgir cuando se combinan una carga alta y poco control sobre cómo hacer el trabajo, falta de reconocimiento, conflictos de valores o la sensación de que el esfuerzo no sirve. También influye la manera en que cada persona se relaciona con la exigencia: quien no sabe decir que no, quien vive cada error como un fracaso o quien sostiene a todos sin pedir nada para sí.

Desde el trabajo psicoanalítico vemos que muchas veces el agotamiento no es solo del trabajo, sino de un papel: el de quien siempre puede, siempre resuelve y nunca falla. Mientras ese papel no se revisa, el cansancio vuelve aunque cambien las condiciones.

## Qué puedes hacer tú

1. **Ponle nombre.** Reconocer que no es pereza ni falta de compromiso es el primer paso.
2. **Recupera límites concretos:** una hora de salida, el móvil del trabajo apagado por la noche, pausas reales.
3. **Habla con tu responsable** sobre carga y prioridades antes de llegar al límite.
4. **Cuida lo básico:** sueño, movimiento y tiempo con personas que no tengan que ver con el trabajo.
5. **Pide ayuda profesional** si el malestar dura semanas o afecta a tu salud.

## Qué puede hacer la empresa

En España, la Ley de Prevención de Riesgos Laborales obliga a las empresas a evaluar los riesgos de su actividad, y la Inspección de Trabajo considera incluidos los riesgos psicosociales, como el estrés laboral ([guía de la Inspección de Trabajo](${ITSS})). Más allá de la obligación, prevenir el burnout reduce bajas, rotación y errores.

- Revisar cargas de trabajo y prioridades de forma realista.
- Dar margen de decisión a los equipos sobre cómo organizar su trabajo.
- Formar a los mandos para detectar señales de agotamiento y hablar de ello sin estigma.
- Ofrecer herramientas prácticas de gestión del estrés a las personas.

Para esto último ofrecemos un [taller práctico de gestión del estrés y la ansiedad para empresas](/es/taller-gestion-estres-empresas): tres sesiones presenciales de 1 h 30 en grupos de 4 a 10 personas, en las instalaciones de la empresa, en el Maresme y Barcelona.

Atiendo de forma **presencial en Canet de Mar (Maresme)** y [**online para toda España**](/es/terapia-online), en catalán y castellano.

*Si estás en crisis o tienes pensamientos de hacerte daño, llama al 112 o al 024.*
`,
    faq: [
        { question: '¿El burnout es una enfermedad?', answer: 'La OMS lo clasifica como un fenómeno ocupacional, no como una enfermedad. Aun así, puede acompañarse de problemas de salud como ansiedad, insomnio o depresión, que sí requieren atención.' },
        { question: '¿Cuánto se tarda en recuperarse del burnout?', answer: 'Depende de cada persona y de si cambian las condiciones que lo provocaron. Descansar ayuda, pero si al volver todo sigue igual, el agotamiento suele reaparecer.' },
        { question: '¿Burnout y estrés son lo mismo?', answer: 'No. El estrés puede ser puntual y hasta útil. El burnout es el resultado de un estrés que se mantiene durante mucho tiempo sin recuperación.' },
        { question: '¿La empresa tiene responsabilidad?', answer: 'Sí. La normativa de prevención obliga a evaluar y prevenir los riesgos psicosociales, entre ellos el estrés laboral.' },
    ],
    ca: {
        title: "Burnout: senyals que no és només cansament i què pot fer l'empresa",
        seoTitle: "Burnout: símptomes, causes i què pot fer l'empresa",
        description:
            "Esgotament que no marxa amb el descans, distància amb la feina i sensació de no rendir. Què és el burnout, com reconèixer-lo i què pot fer l'empresa per prevenir-lo.",
        keywords: ['burnout', 'síndrome de burnout', 'símptomes burnout', 'estar cremat a la feina', 'burnout empresa', 'prevenir burnout'],
        category: 'Empresa',
        image: '/images/blog/burnout-simptomes-empresa-ca.webp',
        imageAlt: "Il·lustració d'una persona esgotada recolzada a l'escriptori al costat d'una bateria gairebé buida — Clínica de l'Ansietat Catalunya",
        body: `
**Resposta breu:** el burnout és un esgotament lligat a la feina que no es recupera amb el cap de setmana ni amb les vacances. L'Organització Mundial de la Salut el descriu amb tres trets: esgotament, distància mental o cinisme envers la feina i sensació d'ineficàcia. No és una debilitat personal: apareix quan l'exigència es manté durant molt de temps sense marge de recuperació, i per això la prevenció és responsabilitat de la persona i també de l'organització.

«Arribo al divendres buit i el dilluns ja estic cansat.» És una frase que sento sovint a la consulta, gairebé sempre de persones responsables, implicades i competents. No es queixen d'un mal dia, sinó d'una cosa que s'ha anat instal·lant a poc a poc fins que la feina, que abans donava sentit, només pesa.

## Què és el burnout

L'Organització Mundial de la Salut inclou el burnout en la seva classificació internacional com un fenomen ocupacional, no com una malaltia. El defineix com el resultat d'un estrès laboral crònic que no s'ha gestionat amb èxit, i el caracteritza per tres dimensions:

- **Esgotament:** sensació d'estar sense energia, física i emocionalment.
- **Distància o cinisme:** desafecció per la feina, irritabilitat, sensació que res no importa.
- **Ineficàcia:** la impressió de rendir menys, de no arribar, de no ser-ne capaç.

## Senyals que no és només cansament

- El descans ja no repara: tornes de vacances i als dos dies estàs igual.
- Et costa concentrar-te i fas errors que abans no feies.
- Dorms malament, et despertes pensant en la feina o et costa desconnectar.
- Estàs més irritable amb companys, clients o a casa.
- Sents una barreja de culpa i rebuig: «hauria de poder-ho fer» i «no hi vull tornar».
- Apareixen molèsties físiques: mals de cap, tensió muscular, problemes digestius.

Si a més notes tristesa persistent, pèrdua d'interès per gairebé tot o pensaments molt negatius, consulta un professional: el burnout i la [depressió](/ca/blog/que-es-la-depresion) es poden solapar.

## Per què apareix

El burnout no depèn només de quantes hores treballes. Sol sorgir quan es combinen una càrrega alta i poc control sobre com fer la feina, manca de reconeixement, conflictes de valors o la sensació que l'esforç no serveix. També hi influeix la manera com cada persona es relaciona amb l'exigència: qui no sap dir que no, qui viu cada error com un fracàs o qui sosté tothom sense demanar res per a si mateix.

Des del treball psicoanalític veiem que sovint l'esgotament no és només de la feina, sinó d'un paper: el de qui sempre pot, sempre resol i mai falla. Mentre aquest paper no es revisa, el cansament torna encara que canviïn les condicions.

## Què pots fer tu

1. **Posa-hi nom.** Reconèixer que no és mandra ni manca de compromís és el primer pas.
2. **Recupera límits concrets:** una hora de sortida, el mòbil de la feina apagat a la nit, pauses reals.
3. **Parla amb el teu responsable** sobre càrrega i prioritats abans d'arribar al límit.
4. **Cuida el bàsic:** son, moviment i temps amb persones que no tinguin res a veure amb la feina.
5. **Demana ajuda professional** si el malestar dura setmanes o afecta la teva salut.

## Què pot fer l'empresa

A Espanya, la Llei de prevenció de riscos laborals obliga les empreses a avaluar els riscos de la seva activitat, i la Inspecció de Treball hi considera inclosos els riscos psicosocials, com l'estrès laboral ([guia de la Inspecció de Treball](${ITSS})). Més enllà de l'obligació, prevenir el burnout redueix baixes, rotació i errors.

- Revisar càrregues de feina i prioritats de manera realista.
- Donar marge de decisió als equips sobre com organitzar la feina.
- Formar els comandaments per detectar senyals d'esgotament i parlar-ne sense estigma.
- Oferir eines pràctiques de gestió de l'estrès a les persones.

Per a això darrer oferim un [taller pràctic de gestió de l'estrès i l'ansietat per a empreses](/ca/taller-gestion-estres-empresas): tres sessions presencials d'1 h 30 en grups de 4 a 10 persones, a les instal·lacions de l'empresa, al Maresme i Barcelona.

Atenc de manera **presencial a Canet de Mar (Maresme)** i [**en línia per a tot l'Estat**](/ca/terapia-online), en català i castellà.

*Si estàs en crisi o tens pensaments de fer-te mal, truca al 112 o al 024.*
`,
        faq: [
            { question: 'El burnout és una malaltia?', answer: "L'OMS el classifica com un fenomen ocupacional, no com una malaltia. Tot i així, pot anar acompanyat de problemes de salut com ansietat, insomni o depressió, que sí que requereixen atenció." },
            { question: 'Quant es triga a recuperar-se del burnout?', answer: "Depèn de cada persona i de si canvien les condicions que el van provocar. Descansar ajuda, però si en tornar tot continua igual, l'esgotament sol reaparèixer." },
            { question: 'Burnout i estrès són el mateix?', answer: "No. L'estrès pot ser puntual i fins i tot útil. El burnout és el resultat d'un estrès que es manté durant molt de temps sense recuperació." },
            { question: "L'empresa en té responsabilitat?", answer: "Sí. La normativa de prevenció obliga a avaluar i prevenir els riscos psicosocials, entre els quals l'estrès laboral." },
        ],
    },
};

export default post;
