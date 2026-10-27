// Versió en català dels articles que viuen a Contentful.
// Contentful només té els textos en castellà; quan es visita /ca/blog/<slug>
// es mostren aquests textos (Markdown) en lloc del contingut original.
// Si s'edita un article a Contentful, cal actualitzar aquí la traducció.

export interface ContentfulTranslation {
    title: string;
    description: string;
    body: string;
}

/** Noms de categoria de Contentful -> català. */
export const CATEGORY_CA: Record<string, string> = {
    'Ansiedad': 'Ansietat',
    'Celos': 'Gelosia',
    'Depresión': 'Depressió',
    'Dimensión Familiar': 'Dimensió Familiar',
    'Psicología': 'Psicologia',
    'Psicología News': 'Psicologia News',
    'Pareja': 'Parella',
    'Terapia de pareja': 'Teràpia de parella',
    'Pánico': 'Pànic',
    'Ludopatía': 'Ludopatia',
};

export function categoryCa(name: string): string {
    return CATEGORY_CA[name] || name;
}

export const CONTENTFUL_CA: Record<string, ContentfulTranslation> = {
    'que-es-la-ansiedad-y-por-que-se-produce': {
        title: "Què és l'ansietat i per què es produeix?",
        description:
            "Què és l'ansietat i quina és la seva causa real? Psicoanalista a Canet de Mar (Maresme) i en línia. Entén els símptomes, el conflicte intern i la solució d'arrel.",
        body: `
En la meva experiència clínica, veig constantment que moltes persones arriben dient "tinc ansietat" sense comprendre realment què els passa. Han provat tècniques ràpides, consells a les xarxes o intents de controlar la ment, però continuen amb taquicàrdia, anticipació constant o una sensació de perill sense causa clara. El més freqüent és que confonguin el símptoma amb l'origen.

Hi ha la creença que l'ansietat és simplement nerviosisme o una debilitat emocional. Tanmateix, clínicament l'ansietat sol ser un senyal psíquic: alguna cosa interna pressiona, exigeix o entra en conflicte, i el cos ho expressa com una alarma.

## Definició clínica de l'ansietat

L'ansietat és una resposta d'alerta de l'organisme davant d'una amenaça real o percebuda. En nivells moderats pot ser útil: prepara per reaccionar, concentrar-se o protegir-se.

El problema apareix quan aquesta alarma s'activa sense un perill proporcional o es manté de manera constant. Llavors deixa de ser adaptació i es converteix en patiment.

No tota ansietat és patològica. De vegades és una emoció transitòria; altres vegades expressa una estructura interna sostinguda per la por, l'exigència o un conflicte inconscient.

## L'ansietat com a mecanisme de defensa (visió psicoanalítica)

Des d'una perspectiva clínica profunda, l'ansietat no sempre sorgeix pel que passa a fora, sinó pel que es mou a dins.

Pot aparèixer quan:

- Un desig entra en conflicte amb normes internes rígides
- Hi ha por al rebuig, a l'abandonament o al fracàs
- La persona intenta controlar emocions intenses
- Hi ha mandats inconscients de perfecció o vigilància
- Es reprimeix la ràbia, la tristesa o la dependència

En aquests casos, l'ansietat funciona com a senyal d'un conflicte intern no resolt. El símptoma protegeix d'alguna cosa… però també tanca.

## Tipus d'ansietat més freqüents

### Ansietat generalitzada

Preocupació constant sobre múltiples àrees: salut, feina, futur o relacions.

### Crisis de pànic

Episodis intensos de por amb símptomes físics com palpitacions, mareig o sensació de perdre el control.

### Ansietat social

Temor al judici, a l'exposició pública o a les situacions relacionals.

### Ansietat anticipatòria

Patiment previ davant d'esdeveniments que encara no han passat.

### Ansietat obsessiva

Pensaments repetitius i necessitat de certesa o de control.

## Factors desencadenants

El problema de molts enfocaments és buscar una sola causa. L'ansietat sol sorgir per una combinació de factors:

- Estrès sostingut
- Canvis vitals importants
- Dol o pèrdua
- Relacions conflictives
- Exigència crònica
- Història familiar ansiosa
- Trauma emocional
- Conflicte intern acumulat

De vegades el detonant extern només activa alguna cosa que ja era latent.

## L'ansietat té solució?

Molts pacients arriben després de provar mètodes per calmar-se temporalment. Algunes eines ajuden, però no sempre resolen l'arrel.

Quan es comprèn:

- Quina funció compleix l'ansietat
- Quin conflicte intern l'alimenta
- Quin mandat inconscient sosté l'alerta
- Quines emocions van quedar bloquejades

…el símptoma pot començar a perdre necessitat.

La solució real no sempre consisteix a lluitar contra l'ansietat, sinó a entendre per què va aparèixer.

## Psicoanalista a Canet de Mar i en línia

Treballo amb persones que pateixen ansietat, crisis de pànic, pensaments repetitius i bloqueig emocional a la consulta de Canet de Mar (Maresme) i també en format en línia, des d'una orientació centrada en la causa i no només en el símptoma.

## Primera visita

La primera consulta permet situar quin tipus d'ansietat estàs vivint, què la sosté i quin tractament et pot ajudar de manera profunda.

## La pregunta real és…

Si l'ansietat insisteix una vegada i una altra, està avisant d'un perill extern… o d'una veritat interna que fa temps que no s'escolta?
`,
    },

    'terapia-familiar': {
        title: 'Teràpia familiar: quan el problema afecta tota la família',
        description:
            "Quan anar a teràpia familiar? Psicoanalista a Canet de Mar (Maresme) i en línia. Entén els conflictes, l'ansietat i les dinàmiques familiars des de la causa arrel.",
        body: `
En la meva experiència clínica, veig constantment que moltes famílies consulten pensant que "el problema" és en una sola persona: el fill amb ansietat, la parella conflictiva, l'adolescent rebel o qui somatitza. Tanmateix, en escoltar la història completa, apareix una altra realitat: el símptoma individual moltes vegades expressa un malestar que travessa tot el sistema familiar.

Hi ha la creença que la **teràpia familiar** consisteix únicament a seure a parlar per deixar de discutir. Però no es tracta només de millorar la comunicació. En molts casos, el conflicte visible encobreix posicions rígides, lleialtats inconscients, silencis heretats i dinàmiques repetides que sostenen el patiment.

## Què és la teràpia familiar?

La teràpia familiar és un espai clínic on es treballa amb l'estructura relacional de la família. No busca trobar culpables, sinó comprendre com s'organitza el vincle, quin lloc ocupa cada membre i de quina manera certs símptomes mantenen un equilibri problemàtic.

De vegades l'ansietat d'un sosté l'ordre de tots. Altres vegades el conflicte permanent evita parlar de temes més profunds: pèrdues, frustracions, rivalitats o dols no elaborats.

## Situacions que es treballen en teràpia familiar

### Conflictes constants a casa

- Discussions repetides
- Mal clima familiar
- Distància emocional
- Manca de límits clars

### Problemes amb fills o adolescents

- Conductes desafiadores
- Aïllament
- Ansietat escolar
- Problemes de convivència

### Crisis familiars

- Separacions
- Defuncions
- Canvis importants
- Malaltia d'un membre

### Símptomes individuals amb impacte col·lectiu

- Ansietat
- Depressió
- Addiccions
- Trastorns de conducta
- Somatitzacions

## El paper de l'ansietat en les dinàmiques familiars

El problema de molts enfocaments és tractar l'ansietat com una cosa exclusivament individual. A la consulta, sovint veiem que l'ansietat també circula en l'ambient familiar.

Es pot expressar com:

- Excés de control entre membres
- Sobreprotecció
- Por constant que passi alguna cosa
- Dificultat per tolerar l'autonomia
- Necessitat de tenir tothom pendent d'un símptoma

Quan això passa, l'ansietat deixa de pertànyer només a una persona i passa a formar part de l'organització familiar.

## Com s'organitzen les sessions

Les sessions es poden fer amb tota la família o amb alguns membres segons cada cas. No sempre cal que hi vagin tots a l'inici.

Es treballa observant:

- Formes de comunicació
- Rols assignats
- Aliances i conflictes ocults
- Repeticions transgeneracionals
- Llocs de poder i de dependència

L'objectiu no és imposar normes externes, sinó permetre moviments nous allà on tot semblava fix.

## Teràpia familiar a Canet de Mar i en línia

Ofereixo teràpia familiar a **Canet de Mar (Maresme)** i en format **en línia** per a famílies que travessen conflictes persistents, ansietat compartida o situacions que afecten l'equilibri de la llar.

## Primera visita

La primera consulta permet entendre què està passant, com se sosté el problema i quin tipus d'intervenció pot ajudar realment.

## La pregunta real és…

Si tota la família gira al voltant del símptoma d'un, el problema és en aquella persona… o en una dinàmica que ningú no ha pogut anomenar encara?
`,
    },

    'por-que-soledad-salud-mental-no-se-resuelve-relaciones': {
        title: 'Soledat i salut mental: l\'epidèmia silenciosa del segle XXI',
        description:
            "Sents soledat fins i tot acompanyat? Un psicoanalista del Maresme analitza la causa arrel de l'aïllament emocional més enllà del símptoma. Entén què passa.",
        body: `
En la meva experiència, veig constantment que pacients que aparentment "ho tenen tot" —feina estable, vida social activa, fins i tot parella— descriuen una sensació persistent de buit difícil d'explicar. Recordo especialment un cas que deia: "No estic sol, però em sento completament desconnectat". Aquest tipus de malestar no se sol identificar immediatament com un problema d'ansietat o de salut mental, però és precisament aquí on comença a prendre forma.

Hi ha la creença que la soledat és simplement l'absència de companyia. La majoria d'enfocaments psicològics plantegen que n'hi ha prou d'augmentar la interacció social per resoldre-la: sortir més, conèixer gent, mantenir-se ocupat. Tanmateix, aquesta idea confon una condició externa amb una experiència interna molt més complexa.

## Què distingeix estar sol de sentir-se sol?

Estar sol és un fet objectiu. Sentir-se sol, en canvi, és una experiència subjectiva que no depèn necessàriament de la presència d'altres.

Des d'una perspectiva clínica, la soledat apareix quan hi ha una desconnexió entre el subjecte i la seva pròpia estructura interna. No és només la manca de vincles, sinó la dificultat per sostenir un llaç significatiu, fins i tot quan existeix.

Aquí comença a aparèixer el conflicte intern: una part del subjecte busca connexió, mentre una altra es replega, es protegeix o evita exposar-se. Aquest moviment no és conscient; respon a un mandat inconscient que organitza la manera com l'individu es relaciona.

## Conseqüències psicològiques de la soledat crònica

Quan aquesta experiència es manté en el temps, comencen a aparèixer efectes més estructurals en la salut mental:

- Increment de l'ansietat
- Estats depressius persistents
- Pensaments repetitius o rumiació
- Sensació de buit o de manca de sentit
- Dificultats en la regulació emocional

La soledat crònica no és simplement un estat emocional passatger, sinó una configuració que afecta directament la manera com el subjecte interpreta la seva realitat i les seves relacions.

## Grups de població més vulnerables

Tot i que pot afectar qualsevol persona, hi ha certs perfils on aquesta problemàtica apareix amb més freqüència:

- Persones grans amb pèrdua de vincles
- Joves amb una alta exposició digital però poca connexió real
- Adults en entorns urbans amb relacions superficials
- Persones en transició vital (mudances, ruptures, canvis laborals)

Tanmateix, reduir-ho a factors externs seria simplificar el problema. Dues persones en la mateixa situació poden viure la soledat de maneres completament diferents, cosa que torna a assenyalar l'estructura interna com a eix central.

## Què pot fer la psicologia (i on sol fallar)

El problema de molts enfocaments actuals és que intenten intervenir directament sobre la conducta: fomentar activitats socials, habilitats comunicatives o pensament positiu. Aquestes estratègies poden generar un alleujament temporal, però no aborden la causa arrel.

Molts pacients arriben després d'haver intentat "omplir" la soledat amb activitats, relacions o distraccions. El resultat sol ser el mateix: una sensació persistent de desconnexió.

Des d'una perspectiva de psicoanàlisi directa, la pregunta no és quantes relacions tens, sinó com t'hi poses. Quin lloc ocupes? Què evites? Què es repeteix?

La soledat, en aquest sentit, no és el problema, sinó el senyal d'alguna cosa que no s'ha pogut articular d'una altra manera.

La pregunta real és: si envoltar-te de persones no ha resolt la soledat… quina part de tu continua quedant fora del vincle?
`,
    },

    'cuales-son-los-sintomas-de-la-ansiedad': {
        title: "Quins són els símptomes de l'ansietat? Guia completa",
        description:
            "Sents palpitacions, pressió al pit o por constant? Coneix els principals símptomes físics i psicològics de l'ansietat, i quan demanar ajuda.",
        body: `
Sentir ansietat en certs moments de la vida és una experiència completament humana. Tanmateix, quan aquesta sensació d'alerta es torna constant, el cos i la ment comencen a enviar senyals d'esgotament. Moltes persones arriben a la nostra consulta aclaparades perquè no entenen què els està passant físicament, sense saber que el que experimenten són els **símptomes de l'ansietat**.

L'ansietat és, en el seu origen, un mecanisme de defensa natural. Apareix per preparar-nos davant d'un perill (real o imaginari) activant el nostre sistema nerviós. El problema sorgeix quan aquest "sistema d'alarma" es queda encallat en la posició d'encès. A continuació, desglossem els principals **senyals d'ansietat** per ajudar-te a entendre què passa al teu interior.

## Símptomes físics de l'ansietat: quan el cos parla

Sovint es pensa que l'ansietat és només "al cap", però la realitat és que té un component corporal fortíssim. Els **símptomes físics de l'ansietat** apareixen perquè el cervell allibera hormones com el cortisol i l'adrenalina, preparant el cos per fugir o lluitar. Els més comuns són:

- **Palpitacions o taquicàrdia:** sents que el cor batega massa de pressa o amb molta força, fins i tot en repòs.
- **Tensió muscular:** especialment a la mandíbula, el coll, les espatlles i l'esquena. Pot derivar en dolors crònics o mals de cap tensionals.
- **Marejos i sensació d'inestabilitat:** una sensació d'irrealitat, vertigen o por de desmaiar-se.
- **Suor i calfreds:** canvis bruscos en la temperatura corporal, suor freda a les mans o sufocacions.
- **Dificultat per respirar:** sensació d'ofec, hiperventilació o pressió al pit.

## Símptomes psicològics: el soroll mental

Al costat de les reaccions del cos, la ment entra en un estat d'hipervigilància. Els **símptomes de l'ansietat** a nivell cognitiu i emocional solen ser molt desgastadors:

- **Preocupació excessiva i constant:** donar voltes a problemes quotidians anticipant sempre el pitjor escenari possible (pensament catastròfic).
- **Por irracional:** sensació de perill imminent o terror a perdre el control.
- **Irritabilitat:** poca tolerància a la frustració; saltar a la mínima provocació.
- **Problemes de concentració:** dificultat per enfocar l'atenció o sensació de tenir la ment "en blanc".

## Símptomes conductuals: com canvia la nostra rutina

L'ansietat no només se sent; també canvia la nostra manera d'actuar i de relacionar-nos amb el món:

- **Evitació:** deixar d'anar a llocs o de fer activitats per por de desencadenar una crisi (per exemple, evitar el transport públic o les aglomeracions).
- **Aïllament social:** distanciar-se d'amics i familiars perquè la interacció suposa una despesa d'energia massa alta.
- **Alteracions en els hàbits:** canvis dràstics en els patrons de son (insomni o dormir en excés) i en l'alimentació (menjar compulsivament o perdre la gana).

## Ansietat normal vs. ansietat patològica: on és el límit?

És fonamental diferenciar entre l'estrès natural del dia a dia i un possible trastorn que requereixi atenció clínica. A la taula següent et mostrem les diferències clau:

| **Característica** | **Ansietat normal (adaptativa)** | **Ansietat patològica (trastorn)** |
| --- | --- | --- |
| **Durada** | Temporal. Desapareix quan el problema o la situació estressant es resol. | Crònica. Es manté en el temps (mesos) fins i tot sense un detonant clar. |
| **Intensitat** | Proporcional a l'amenaça real (p. ex. nervis abans d'un examen). | Desproporcionada. La reacció és exagerada davant de l'estímul real. |
| **Impacte en la vida** | No impedeix portar una rutina normal. | Interfereix greument en la feina, les relacions i el dia a dia. |
| **Control** | Manejable amb tècniques de relaxació o distraccions. | Sensació absoluta de pèrdua de control. |

---

## Què fer si t'identifiques amb aquests símptomes?

Si en llegir aquest article has reconegut diversos d'aquests senyals d'ansietat en el teu dia a dia, el primer pas i el més important ja l'has fet: **prendre consciència**.

És habitual intentar ignorar el malestar o automedicar-se per silenciar els símptomes, però des de l'enfocament psicoanalític i clínic sabem que l'ansietat és un missatge. Apagar l'alarma no apaga l'incendi; cal entendre què està generant aquesta alerta en la teva història personal i en el teu inconscient.

No t'has d'acostumar a viure amb por o esgotament. Demanar ajuda professional et permetrà comptar amb un espai segur per desembolicar l'origen d'aquests símptomes i recuperar el teu benestar.

**Sents que l'ansietat t'està limitant la vida?** No esperis que els símptomes empitjorin. [**Reserva aquí la teva primera consulta**](https://clinicadelaansiedad.setmore.com/?utm_source=qr-code&utm_medium=more-share-bp) i comencem a treballar junts perquè recuperis la tranquil·litat.
`,
    },

    'cuando-acudir-terapia-de-pareja': {
        title: 'Quan anar a teràpia de parella? 5 senyals d\'alerta',
        description:
            "Sents desconnexió, hi ha discussions constants o problemes de confiança? Descobreix els 5 senyals que indiquen que és el moment d'anar a teràpia de parella.",
        body: `
Totes les relacions passen per alts i baixos. És completament normal que hi hagi desacords, etapes d'estrès o moments en què la rutina sembla apoderar-se del dia a dia. Tanmateix, hi ha una gran diferència entre travessar un sotrac temporal i estar atrapats en una dinàmica tòxica o dolorosa que amenaça de trencar el vincle.

Sovint, les parelles esperen a ser a la vora del col·lapse per buscar ajuda professional. Des de la nostra experiència clínica, sabem que com més aviat s'abordin les fractures, més probabilitats hi ha de guarir la relació. Si et preguntes si ha arribat el moment de fer el pas, aquí t'expliquem els **5 senyals d'alerta que indiquen que us hauríeu de plantejar la teràpia de parella**.

## 1. Problemes de comunicació crònics

La base de qualsevol relació sana és la comunicació, però de vegades es trenca. Sents que, parlis del que parlis, la teva parella no t'entén o malinterpreta les teves paraules.

Potser heu caigut en la "llei del gel" (dies de silenci de càstig després d'un enuig), potser us comuniqueu a través de retrets constants, o simplement heu deixat de parlar de com us sentiu per por d'iniciar un conflicte. La **teràpia de parella** ofereix un espai neutral i segur on un professional us ajuda a traduir el que realment us esteu intentant dir, treballant des de l'arrel emocional del bloqueig.

## 2. Discussions constants (i destructives)

Discutir no és dolent *per se*; el problema és *com* es discuteix. Si les baralles són el pa de cada dia, escalen ràpidament a crits, insults o faltes de respecte, i mai no arriben a una resolució, esteu atrapats en un bucle destructiu.

A teràpia, analitzem què s'amaga realment darrere d'aquestes explosions d'ira. Moltes vegades no discutiu per qui treu les escombraries o qui gasta més diners, sinó per ferides emocionals més profundes, expectatives no complertes o la sensació de no ser valorat per l'altre.

## 3. Manca d'intimitat i desconnexió emocional

La intimitat no es limita únicament a les relacions sexuals, tot i que solen ser un excel·lent termòmetre de la salut de la parella. Parlem d'aquella sensació de desconnexió profunda: viviu sota el mateix sostre, però us sentiu com companys de pis.

Falten les mostres d'afecte, les mirades còmplices, l'interès genuí pel dia a dia de l'altre. Quan l'abisme emocional es fa cada vegada més gran, la teràpia ajuda a restablir el pont perquè us torneu a trobar.

## 4. Superar una infidelitat o una crisi de confiança

La traïció (ja sigui física, emocional o econòmica) és un dels cops més durs que pot patir una relació. La confiança, un cop trencada, no es repara sola amb el pas del temps ni amb simples disculpes.

Per a moltes parelles, una infidelitat marca el final. Per a d'altres, pot ser un punt d'inflexió per reconstruir la relació sobre unes bases molt més sòlides i sinceres. Aquest procés és extremadament complex i dolorós per a totes dues parts, per la qual cosa l'acompanyament psicològic esdevé indispensable per gestionar la culpa, el ressentiment i el perdó veritable.

## 5. Pensaments recurrents de separació

Si et sorprens fantasiejant sovint amb com seria la teva vida sense la teva parella, o si la paraula "divorci" o "ruptura" apareix habitualment en les vostres discussions com una amenaça constant, la relació està en estat crític.

Abans de prendre una decisió dràstica (especialment si hi ha fills pel mig o un projecte de vida en comú), la teràpia ofereix l'espai per avaluar si la relació té salvació o si, al contrari, el treball s'ha d'enfocar a aconseguir una separació amistosa i el menys traumàtica possible per a tots dos.

## Fer el pas no és fracassar, és voler solucionar

Hi ha el fals mite que anar al psicòleg de parelles vol dir que la relació ha fracassat. Tot el contrari. Anar a **teràpia de parella** és un acte de valentia, d'amor i de responsabilitat. Vol dir que tots dos reconeixeu que hi ha un problema i que esteu disposats a treballar en equip per solucionar-lo.

No espereu que la distància sigui insalvable. De vegades, unes poques sessions són suficients per reajustar les dinàmiques i tornar a caminar en la mateixa direcció.

**Us reconeixeu en algun d'aquests senyals?** Al nostre centre us escoltarem sense judicis. [**Reserveu aquí la vostra primera visita**](https://clinicadelaansiedad.setmore.com/?utm_source=qr-code&utm_medium=more-share-bp) i feu el primer pas per recuperar el benestar en la vostra relació.
`,
    },

    'depresion-sintomas': {
        title: 'Què és la depressió? Símptomes, tipus i diferència amb la tristesa',
        description:
            "Què és el trastorn d'ansietat generalitzada i quina és la seva causa real? Psicoanalista a Canet de Mar (Maresme) i en línia. Entén els símptomes, l'arrel i el tractament.",
        body: `
En la meva experiència clínica, veig constantment que moltes persones arriben a la consulta després d'anys convivint amb una preocupació constant que consideren "normal". Ho revisen tot dues vegades, anticipen problemes que encara no existeixen i senten un esgotament mental diari. Sovint han llegit sobre l'ansietat, han provat tècniques ràpides o medicació puntual, però continuen atrapades en el mateix circuit intern.

Hi ha la creença que el **trastorn d'ansietat generalitzada (TAG)** consisteix únicament a "pensar massa" o en una personalitat nerviosa. Tanmateix, reduir-lo a això deixa fora l'essencial: no parlem només de pensaments, sinó d'una estructura psíquica sostinguda per un conflicte intern que manté l'alerta activa fins i tot quan no hi ha un perill real.

## Què és el trastorn d'ansietat generalitzada (TAG)?

El TAG és una forma d'ansietat caracteritzada per una **preocupació excessiva, persistent i difícil de controlar** sobre diferents àrees de la vida: salut, feina, economia, relacions, futur o petits assumptes quotidians.

No es limita a un tema concret. Quan una preocupació desapareix, una altra n'ocupa el lloc. El símptoma visible és la preocupació; la causa profunda sol ser un mandat inconscient de control, d'exigència o d'anticipació constant.

## Criteris DSM-5 del TAG

Per a un diagnòstic clínic, habitualment s'observen aquests elements:

### Preocupació excessiva

Present la major part dels dies durant almenys diversos mesos, sobre múltiples assumptes.

### Dificultat per controlar la preocupació

La persona intenta aturar-la, racionalitzar-la o distreure's, però torna una vegada i una altra.

### Símptomes associats

Solen aparèixer diversos dels següents:

- Inquietud o sensació d'estar al límit
- Fatiga freqüent
- Dificultat de concentració
- Irritabilitat
- Tensió muscular
- Problemes de son

## Símptomes físics i psicològics del TAG

### Símptomes físics

Moltes persones consulten primer pel cos:

- Contractures cervicals
- Molèsties digestives
- Palpitacions
- Cansament persistent
- Bruxisme
- Insomni

### Símptomes psicològics

- Pensar escenaris negatius repetidament
- Necessitat de certesa absoluta
- Sensació de no descansar mai mentalment
- Por difusa sense causa clara
- Dificultat per desconnectar

## Diferències amb altres trastorns d'ansietat

### TAG vs crisis de pànic

En la crisi de pànic hi ha episodis intensos i aguts. En el TAG predomina una ansietat sostinguda, més silenciosa però constant.

### TAG vs TOC

En el TOC apareixen obsessions i rituals específics. En el TAG la preocupació és més àmplia i canviant.

### TAG vs estrès comú

L'estrès respon a demandes externes. En el TAG, fins i tot quan tot sembla estable, la ment continua buscant amenaces.

## Causes i factors de risc

El problema de molts enfocaments és centrar-se només a "calmar símptomes" sense preguntar per què la ment necessita mantenir-se preocupada.

A la consulta, sovint apareixen aquests nuclis:

- Història d'alta exigència familiar
- Necessitat de perfecció
- Temor a l'error o al judici
- Responsabilitat excessiva cap als altres
- Conflictes afectius no elaborats
- Mandat inconscient d'estar sempre alerta

L'ansietat generalitzada no sorgeix per casualitat. Moltes vegades compleix una funció psíquica: evitar sentir alguna cosa més profunda, sostenir una identitat de control o defensar-se de conflictes no reconeguts.

## Tractament psicoanalític del TAG

Molts pacients arriben després de provar respiracions, mindfulness o estratègies cognitives que els van aportar un alleujament parcial. Això pot ajudar, però no sempre resol l'arrel.

L'enfocament psicoanalític busca comprendre:

- Quina funció compleix la preocupació
- Quin conflicte intern alimenta l'ansietat
- Quin mandat inconscient exigeix vigilància constant
- Per què descansar genera culpa o temor
- Quin desig propi va quedar desplaçat per l'exigència

Quan s'interpreta la lògica interna del símptoma, l'ansietat deixa de ser un enemic misteriós i comença a perdre força.

## Psicoanalista a Canet de Mar i en línia

Treballo amb persones que pateixen ansietat persistent, pensaments repetitius i esgotament mental, tant a **Canet de Mar (Maresme)** com en format **en línia**, des d'una orientació clínica centrada en la causa i no només en el símptoma.

## La pregunta real és…

Si la teva ment no deixa de preocupar-se fins i tot quan tot sembla anar bé, està intentant protegir-te… o mantenir intacte un conflicte intern que encara no ha estat escoltat?
`,
    },

    'celos-patologicos': {
        title: 'Gelosia patològica: quan la gelosia es converteix en un problema',
        description:
            "Gelosia patològica: què és, en què es diferencia de la gelosia normal, quins símptomes i conductes implica, i la seva relació amb l'ansietat i l'aferrament insegur.",
        body: `
La gelosia patològica és una preocupació obsessiva i incontrolable per una suposada infidelitat de la parella, sostinguda per sospites sense proves i acompanyada de conductes de comprovació, control i ansietat intensa. Es diferencia de la gelosia normal en què no respon a un fet real, no es calma amb explicacions i ocupa bona part de la vida mental de qui la pateix. No és un problema de confiança ni de caràcter: és un símptoma que apunta a un conflicte inconscient que es pot tractar amb Psicoanàlisi Directa.

Soc Joan Ramon Soto, psicoanalista, fundador i director de la Clínica de l'Ansietat Catalunya, a Canet de Mar. Fa més de trenta anys que escolto persones que arriben a la consulta dient gairebé la mateixa frase: «sé que no tinc motius, però no puc parar de pensar-hi». La gelosia patològica és una de les formes de patiment més silenciades, perquè qui la pateix sol sentir vergonya i qui la rep sol sentir-se ofegat.

Qui viu amb gelosia patològica no intenta controlar ningú per gust. Intenta apagar una angoixa que li resulta insuportable, i ho fa amb l'únic recurs que ha trobat: mirar, preguntar, comprovar, reconstruir converses, buscar senyals. L'alleujament dura minuts. Després el dubte torna, més gran.

## Diferència entre la gelosia normal i la patològica

La gelosia normal és una reacció emocional puntual davant d'una amenaça real o versemblant per al vincle: apareix, se'n parla, es contrasta amb la realitat i es dissol. La gelosia patològica, també anomenada gelosia obsessiva o malaltissa, és una preocupació persistent i intrusiva per la lleialtat de la parella que es manté sense proves, resisteix qualsevol explicació tranquil·litzadora i genera conductes repetides de vigilància i comprovació.

La diferència clínica no és en la intensitat del sentiment, sinó en la seva lògica. La gelosia normal s'orienta a un fet; la gelosia patològica s'orienta a un dubte que no admet tancament. Per això les proves d'innocència no funcionen: **el dubte no busca una resposta, busca una certesa absoluta que cap realitat no pot donar**.

### Senyals que la gelosia ha deixat de ser normal

- La sospita apareix sense cap fet concret que la sostingui.
- Les explicacions de la parella calmen durant una estona i després el dubte torna igual o pitjor.
- Es dediquen hores al dia a pensar, revisar o reconstruir escenes.
- Apareixen conductes de control: revisar el mòbil, les xarxes, els horaris, la roba, el cotxe.
- S'organitzen interrogatoris repetits buscant contradiccions.
- La relació comença a girar al voltant del tema i es perden altres interessos.
- Hi ha consciència d'exageració i, tot i així, no es pot parar.

## Símptomes i conductes associades

La gelosia patològica no és només un pensament. És un quadre que combina pensament obsessiu, activació corporal d'ansietat i conductes compulsives de comprovació. A la consulta es presenta amb una estructura molt reconeixible, semblant a la que veig en el TOC i en la hipocondria: dubte, angoixa, ritual de comprovació, alleujament breu, recaiguda.

### Símptomes mentals

- Pensaments intrusius amb imatges de la parella amb una altra persona.
- Rumiació contínua sobre el passat de la parella, fins i tot anterior a la relació.
- Interpretació de detalls neutres com a proves: un silenci, un retard, un canvi d'humor.
- Necessitat de certesa absoluta i impossibilitat de tolerar el dubte.
- Por anticipatòria a l'abandonament o a la humiliació.

### Conductes associades

- Revisar missatges, trucades, xarxes socials o geolocalització.
- Preguntar de manera repetida buscant confessions.
- Seguir, vigilar o aparèixer per sorpresa.
- Demanar que la parella renunciï a amistats, feina o activitats.
- Buscar terceres persones per verificar versions.

A això s'hi sumen símptomes físics d'ansietat: taquicàrdia, opressió al pit, insomni, tensió muscular, irritabilitat, dificultat per concentrar-se. Moltes persones arriben a la Clínica de l'Ansietat Catalunya pensant que tenen un problema d'ansietat general i descobreixen que el motor d'aquesta ansietat és un quadre de gelosia obsessiva que feia anys que estava instal·lat.

## Relació amb l'ansietat i l'aferrament insegur

La gelosia patològica funciona com una màquina d'ansietat anticipatòria. L'ansietat anticipatòria és el malestar intens que es produeix davant d'un dany que encara no ha passat i que la persona viu com si ja estigués passant. En la gelosia malaltissa, la traïció s'anticipa sense parar, i el cos respon com si fos real: això explica que algú pugui passar la nit en blanc per una escena que només ha existit al seu cap.

L'aferrament insegur és una manera de vincular-se, formada en les primeres relacions de la vida, en què l'amor apareix associat a l'amenaça de pèrdua i la proximitat no produeix calma, sinó alerta. Quan algú ha crescut amb un vincle imprevisible, en què l'afecte es podia retirar de cop, l'amor adult queda marcat per una convicció silenciosa: si no vigilo, em quedo sense res.

> La gelosia patològica no parla tant de la parella com d'una ferida anterior a la parella. El símptoma és el missatger; la nostra feina és desxifrar el missatge.

Per això la gelosia patològica gairebé mai no canvia en canviar de parella. L'escena es repeteix amb una altra persona, un altre nom i la mateixa angoixa. El que es repeteix no és una relació: és un conflicte inconscient que busca escenari.

## Impacte en la relació de parella

El trastorn de gelosia en la parella produeix un desgast progressiu i força previsible. Primer apareixen les preguntes, després les explicacions, i després les discussions circulars que sempre acaben al mateix punt. La parella comença a modificar la seva conducta per evitar conflictes: deixa d'explicar coses, amaga detalls innocents, s'aïlla. I aquest ocultament, que neix del cansament, alimenta la sospita.

Qui pateix la gelosia viu en tensió permanent i amb una culpa sorda, perquè sol saber que està fent mal a algú que estima. Qui la rep passa de sentir-se desitjat a sentir-se sospitós, i amb el temps la intimitat se substitueix per vigilància. **La gelosia patològica no destrueix la relació pels fets que imagina, sinó per la desconfiança que instal·la com a forma de convivència.**

### Una escena habitual a la consulta

Un exemple genèric, sense dades identificables, dels molts que es repeteixen: una persona d'uns quaranta anys que revisa cada nit el mòbil de la seva parella mentre dorm. Mai no troba res. L'endemà se sent ridícula i es promet no tornar-ho a fer. Quatre dies després, un missatge sense resposta reactiva el dubte i el ritual torna a començar. El que porta a la consulta no és la sospita, sinó l'esgotament de viure així.

## Tractament psicològic de la gelosia patològica

La gelosia patològica es pot tractar. L'error més freqüent és tractar-la com un problema de confiança que s'arregla amb acords, normes o proves de transparència, o intentar contenir-la amb tècniques de control del pensament. Això sol donar alleujaments curts i recaigudes, perquè no toca l'origen. Mentre el conflicte de fons continuï intacte, el símptoma tornarà amb una altra disfressa.

### Què aporta la Psicoanàlisi Directa

A la Clínica de l'Ansietat Catalunya treballo amb Psicoanàlisi Directa, un mètode orientat a identificar i resoldre el conflicte inconscient que origina el símptoma, no a administrar-lo. En la gelosia obsessiva això vol dir preguntar-se quina funció compleix la sospita en la vida psíquica d'aquella persona: quina angoixa està tapant, a quina escena antiga respon, què li permet no mirar. Quan el conflicte es desxifra, el dubte deixa de tenir feina a fer i el símptoma perd força per si mateix.

L'objectiu no és aprendre a conviure amb la gelosia, sinó un canvi estructural que redueixi de manera sostinguda la necessitat de vigilar i previngui les recaigudes. És un treball de conversa clínica, no d'exercicis. En més de trenta anys i més de mil pacients tractats, al voltant del 80% dels processos es resolen amb l'alta en menys de sis mesos.

### Com és la primera visita

La primera visita és una conversa clínica real, sense qüestionaris ni tests mecànics. Es parla de com va aparèixer la gelosia, en quin moment de la vida, com es comporta, què la dispara i què la calma, i de la història afectiva de la persona. Al final d'aquesta primera sessió sol quedar clar què està passant i com es pot treballar. Atenc de manera presencial a Canet de Mar, al Maresme, i en línia per a tot Catalunya i Espanya, en català o en castellà.

## Quan demanar ajuda

- Quan la gelosia ocupa diverses hores al dia de pensament.
- Quan ja hi ha conductes de control que un mateix desaprova.
- Quan la relació gira al voltant del tema i s'han perdut altres converses.
- Quan hi ha insomni, ansietat física o irritabilitat sostinguda.
- Quan el patró s'ha repetit amb més d'una parella.
- Quan apareix qualsevol forma d'agressivitat, verbal o física, cap a un mateix o cap a l'altre.

Demanar ajuda per gelosia patològica no és reconèixer un defecte de caràcter. És fer cas a un símptoma que insisteix perquè té alguna cosa a dir. L'ansietat i la gelosia no són enemigues: són la solució desesperada que el psiquisme va trobar quan no tenia altres recursos. Si fa temps que es viu així, es pot consultar sense compromís i amb la tranquil·litat que hi ha un camí clínic seriós per tractar-ho.

Joan Ramon Soto Cifuentes, psicoanalista, col·legiat COPC núm. 3852, fundador i director de la Clínica de l'Ansietat Catalunya (Canet de Mar, Barcelona), en funcionament des del 1993. Consulta presencial i en línia.

## Preguntes freqüents

### Què és exactament la gelosia patològica?

La gelosia patològica és una preocupació obsessiva i intrusiva per la possible infidelitat de la parella que es manté sense proves reals i no es calma amb explicacions. Sol anar acompanyada de conductes repetides de comprovació i control, com revisar el mòbil o interrogar, i de símptomes d'ansietat com l'insomni i la taquicàrdia. Es considera un símptoma clínic tractable, no un tret de caràcter.

### Com sé si la meva gelosia és normal o patològica?

La gelosia normal apareix davant d'un fet concret, se'n pot parlar i es dissol en contrastar-la amb la realitat. La gelosia patològica sorgeix sense fets, resisteix qualsevol explicació, ocupa hores de pensament al dia i porta a comprovar o vigilar encara que la mateixa persona sàpiga que està exagerant. Si el dubte torna sempre al mateix punt malgrat les proves, convé consultar.

### La gelosia patològica té a veure amb l'ansietat?

Sí. La gelosia obsessiva funciona com una fàbrica d'ansietat anticipatòria: la traïció s'imagina una vegada i una altra i el cos respon com si ja hagués passat, amb taquicàrdia, tensió, insomni i irritabilitat. Moltes persones arriben a la consulta creient que el seu problema és només ansietat i descobreixen que el motor és un quadre de gelosia malaltissa instal·lat des de fa anys.

### Es pot curar la gelosia patològica o només controlar-la?

La gelosia patològica es pot tractar en el seu origen, no només contenir. Quan es treballa el conflicte inconscient que sosté la sospita, el dubte deixa de complir la seva funció i el símptoma perd força de manera estable. A la Clínica de l'Ansietat Catalunya treballo amb Psicoanàlisi Directa buscant aquest canvi estructural, amb l'objectiu de reduir el risc de recaiguda.

### El tractament de la gelosia patològica requereix que vingui la parella?

No cal. El procés es fa amb la persona que pateix la gelosia, perquè el conflicte que l'origina és individual i sol ser anterior a la relació actual. La parella pot notar els canvis en la convivència a mesura que avança el treball, però no es tracta d'una teràpia de parella.

### Com és la primera sessió i quant sol durar el procés?

La primera visita és una conversa clínica real, sense qüestionaris ni tests mecànics, en què s'explora quan va aparèixer la gelosia, com es comporta i quina història afectiva hi ha al darrere. En la meva experiència de més de trenta anys i més de mil pacients atesos, al voltant del 80% dels processos es tanquen amb l'alta en menys de sis mesos. Atenc presencialment a Canet de Mar i en línia per a tot Catalunya i Espanya.
`,
    },

    'problemas/ansiedad-generalizada': {
        title: "Trastorn d'ansietat generalitzada (TAG): guia completa de símptomes, diagnòstic i tractament",
        description:
            "Trastorn d'ansietat generalitzada (TAG): què és, símptomes físics i psicològics, criteris DSM-5, diferències amb altres trastorns i tractament.",
        body: `
El trastorn d'ansietat generalitzada (TAG) és un quadre clínic caracteritzat per una preocupació excessiva, difícil de controlar i present la majoria dels dies durant almenys sis mesos, acompanyada de símptomes físics com tensió muscular, insomni, fatiga i irritabilitat. A diferència d'altres trastorns d'ansietat, en el TAG la inquietud no es fixa en un objecte concret: salta d'un tema a un altre, de la feina a la salut, dels fills als diners. Des de la psicoanàlisi, aquesta preocupació flotant no és un defecte del caràcter, sinó el senyal d'un conflicte inconscient que encara no ha trobat paraules.

Soc Joan Ramon Soto, psicoanalista, fundador i director de la Clínica de l'Ansietat Catalunya, a Canet de Mar (Maresme, Barcelona). Des del 1993 escolto persones que arriben dient gairebé el mateix: «no sé què em passa, però estic sempre en tensió». El trastorn d'ansietat generalitzada és probablement el motiu de consulta que més vegades he sentit formulat amb aquesta frase.

Qui conviu amb un trastorn d'ansietat generalitzada rarament pot assenyalar una causa clara. No hi ha un ascensor que faci por, ni una aranya, ni una sala plena de gent. Hi ha un fons continu d'alarma que acompanya tot el dia i que s'aferra a qualsevol tema disponible. Aquesta és la seva característica més desconcertant i també la pista més valuosa per entendre de què es tracta.

## Què és el TAG: definició clínica

El TAG, o trastorn d'ansietat generalitzada, és un trastorn d'ansietat definit per una preocupació crònica, desproporcionada respecte al risc real i percebuda per la mateixa persona com a incontrolable. No es limita a una situació concreta ni desapareix en resoldre's un problema: quan un motiu d'inquietud es tanca, un altre n'ocupa el lloc en qüestió d'hores.

La paraula clau de la definició és «generalitzada». L'ansietat no està ancorada a un objecte, està flotant. En la literatura clàssica es parla d'angoixa lliurement flotant: una tensió sense representació fixa que busca contínuament on posar-se. Per això moltes persones amb TAG descriuen el seu estat com «estar esperant sempre que passi alguna cosa dolenta», sense poder dir què.

> L'ansietat no és la teva enemiga. És la solució desesperada que el teu psiquisme va trobar quan no tenia altres recursos.

## Criteris DSM-5 del trastorn d'ansietat generalitzada

El DSM-5, manual diagnòstic de referència en salut mental, descriu el trastorn d'ansietat generalitzada a partir d'un conjunt de criteris que convé conèixer, tot i que llegir-los mai no substitueix una valoració clínica feta per un professional. Aquests són, en termes generals, els elements que es tenen en compte.

- Ansietat i preocupació excessives sobre diversos esdeveniments o activitats, presents la majoria dels dies durant almenys sis mesos.
- Dificultat per controlar aquesta preocupació, encara que la persona reconegui que és desproporcionada.
- Associació amb tres o més símptomes com inquietud, fatigabilitat fàcil, dificultat per concentrar-se, irritabilitat, tensió muscular o alteracions del son.
- Malestar clínicament significatiu o deteriorament en l'àmbit laboral, social, familiar o acadèmic.
- Els símptomes no s'expliquen millor pel consum de substàncies, una altra condició mèdica o un altre trastorn mental.

Els criteris diagnòstics serveixen per anomenar i ordenar, i en això són útils. Però un criteri descriu la forma del patiment, no la seva causa. Saber que es compleixen els criteris de TAG explica tan poc el perquè com saber que algú té febre explica la infecció. El diagnòstic és un punt de partida, mai una explicació.

## Símptomes físics i psicològics de l'ansietat generalitzada

Els símptomes de l'ansietat generalitzada es reparteixen entre el cos i el pensament, i gairebé sempre es reforcen entre si: el cos tens alimenta la preocupació i la preocupació manté el cos tens. Moltes persones arriben a la meva consulta després d'anys de proves mèdiques normals.

### Símptomes físics més freqüents

- Tensió muscular persistent, sobretot al coll, la mandíbula, les espatlles i l'esquena.
- Fatiga que no millora amb el descans i sensació d'esgotament des de primera hora.
- Insomni de conciliació o despertars nocturns amb el cap ja en marxa.
- Molèsties digestives: nus a l'estómac, còlon irritable, nàusees, manca de gana o gana desordenada.
- Palpitacions, opressió toràcica, sensació de respiració incompleta o sospirs freqüents.
- Suor, tremolor fi, mareig inespecífic, cefalees tensionals.

### Símptomes psicològics i cognitius

- Preocupació contínua que salta d'un tema a un altre sense resoldre's mai.
- Anticipació sistemàtica d'escenaris negatius i necessitat de tenir-ho tot previst.
- Irritabilitat i baixa tolerància al soroll, a la interrupció o als imprevistos.
- Dificultat de concentració i sensació de tenir la ment ocupada permanentment.
- Recerca repetida de tranquil·litzar-se: preguntar, consultar, comprovar.
- Sensació d'amenaça difusa que no cedeix encara que tot vagi objectivament bé.

Un tret clínic que observo sovint és la culpa afegida. Qui pateix un trastorn d'ansietat generalitzada sol retreure's el seu propi estat: «no tinc motius per estar així». Aquest retret és, en si mateix, una part del quadre i l'escolto amb atenció a la consulta, perquè assenyala una exigència interna molt anterior al símptoma.

## Diferències amb altres trastorns d'ansietat

Distingir el TAG d'altres quadres importa perquè la meva escolta clínica canvia segons de què es tracti. Aquestes són les diferències que més vegades he d'aclarir en una primera visita.

### TAG i crisis de pànic

La crisi de pànic és un episodi agut, d'inici brusc i durada limitada, amb símptomes físics intensos i por de morir o de perdre el control. El trastorn d'ansietat generalitzada, en canvi, és un estat sostingut de baixa intensitat i llarga durada. Poden coexistir: no és estrany que una persona amb TAG des de fa anys acabi presentant una primera crisi de pànic.

### TAG i fòbia social o agorafòbia

En la fòbia social i en l'agorafòbia l'ansietat té un objecte identificable: la mirada dels altres, els espais d'on costa sortir. En el trastorn d'ansietat generalitzada no hi ha objecte, hi ha preocupació migratòria. Aquesta absència d'objecte és precisament el que fa que moltes persones trigin anys a consultar, perquè no saben què dir que els passa.

### TAG i TOC

En el trastorn obsessiu compulsiu les idees intrusives se solen viure com a alienes i absurdes, i s'acompanyen de rituals que calmen momentàniament. En el TAG les preocupacions es viuen com a pròpies i versemblants, versions exagerades de problemes reals. La frontera no sempre és nítida, i en la meva pràctica clínica veig quadres mixtos amb certa freqüència.

### TAG i depressió

L'ansietat generalitzada i la depressió se solapen molt sovint, fins al punt que l'insomni, la fatiga i la dificultat de concentració apareixen en totes dues. La diferència orientativa és en la direcció del temps: l'ansietat mira endavant, cap al que pot passar; la depressió mira enrere, cap al que s'ha perdut. Quan conviuen, treballar només la superfície ansiosa sol ser insuficient.

## Causes i factors de risc del trastorn d'ansietat generalitzada

No hi ha una causa única del trastorn d'ansietat generalitzada. Solen confluir una predisposició temperamental, una història familiar amb adults ansiosos o exigents, esdeveniments vitals de pèrdua o amenaça, i un entorn actual de sobrecàrrega. Però la pregunta clínica que em faig no és només quins factors hi ha, sinó per què aquesta persona, en aquest moment de la seva vida, respon així.

En més de trenta anys de consulta he trobat amb regularitat alguns denominadors comuns en les històries de qui desenvolupa un TAG: infàncies en què calia estar pendent de l'estat d'ànim d'un adult, exigències de responsabilitat prematura, ambients on mostrar debilitat tenia un cost, decisions importants preses per no decebre un altre. La preocupació constant va ser, en el seu moment, una forma d'anticipació útil. El problema és que va continuar funcionant quan ja no calia.

Poso un exemple genèric, sense correspondència amb cap pacient concret. Una persona de quaranta i pocs anys consulta per ansietat diària sense motiu aparent. La seva vida està objectivament ordenada. En el treball analític apareix que fa dues dècades que sosté una decisió professional que va prendre per tranquil·litzar la seva família, i que mai no s'ha permès formular la insatisfacció que això li produeix. La preocupació per mil temes menors era la manera com aquella pregunta impronunciable es feia present cada dia.

## Tractament psicoanalític del TAG: la Psicoanàlisi Directa

La Psicoanàlisi Directa és el mètode amb què treballo a la Clínica de l'Ansietat Catalunya. Consisteix a anar al conflicte inconscient que origina el símptoma en lloc d'entrenar recursos per conviure-hi. No treballo amb tècniques de respiració, mindfulness ni reestructuració cognitiva: l'objectiu no és gestionar millor l'ansietat, sinó que deixi de ser necessària.

La diferència és important en un quadre com el trastorn d'ansietat generalitzada. Quan l'ansietat no té objecte, qualsevol estratègia dirigida a un contingut concret es queda curta: es calma aquella preocupació i n'apareix una altra. El que sosté el símptoma no és el tema del dia, és allò que no s'ha pogut dir i que reapareix disfressat de preocupació.

### Com és la primera visita

La primera visita a la Clínica de l'Ansietat Catalunya és una conversa clínica real, sense qüestionaris ni tests mecànics. Escolto el motiu de consulta, com va aparèixer, en quin moment de la vida ho va fer i què es mou al voltant. Al final d'aquesta primera sessió sovint puc oferir una orientació sobre què està sostenint el quadre i com seria el treball.

### Com avança el procés

El treball analític segueix el fil del que la persona diu: repeticions, contradiccions, silencis, escenes de la història que tornen una vegada i una altra. No es tracta de recordar per recordar, sinó de localitzar el punt en què l'ansietat es va convertir en l'única sortida possible. Quan aquest punt es posa en paraules, la preocupació generalitzada comença a perdre combustible.

A la Clínica de l'Ansietat Catalunya, al voltant del 80% dels processos acaben en alta en menys de sis mesos. No prometo terminis ni resultats, perquè cada història és diferent i seria deshonest fer-ho. Sí que puc dir, després de més de 1.000 pacients atesos des del 1993, que el treball sobre la causa tendeix a produir canvis més estables que l'entrenament d'estratègies de control.

## Quan demanar ajuda per ansietat generalitzada

No cal arribar al límit per consultar. Convé demanar ajuda quan la preocupació ocupa la major part del dia, quan el cos fa mesos que està en tensió, quan el son s'ha deteriorat, quan s'eviten plans o decisions per anticipació, o quan l'entorn proper comença a notar la irritabilitat. Com més aviat s'aborda el conflicte de fons, menys capes d'evitació cal desfer després.

Atenc a Canet de Mar, al Maresme, i també en línia per a la resta de Catalunya i Espanya, en català o en castellà. Si es reconeix en el que ha llegit, una primera conversa pot aclarir molt més del que s'imagina. No cal arribar amb les idees ordenades: precisament d'això es tracta el treball.

Soc Joan Ramon Soto Cifuentes, psicoanalista, col·legiat COPC núm. 3852. Fundador i director de la Clínica de l'Ansietat Catalunya des del 1993. Tinc més de 30 anys de pràctica clínica i la clínica té una valoració de 5,0★ amb més de 150 ressenyes a Google.

## Preguntes freqüents

### Què és el trastorn d'ansietat generalitzada (TAG)?

El trastorn d'ansietat generalitzada és un quadre clínic en què la persona experimenta una preocupació excessiva i difícil de controlar la majoria dels dies durant almenys sis mesos, acompanyada de símptomes físics com tensió muscular, fatiga, irritabilitat i insomni. El seu tret distintiu és que l'ansietat no es dirigeix a un objecte concret, sinó que salta d'un tema a un altre. Per això moltes persones diuen que estan en alerta constant sense poder explicar per què.

### Quins són els símptomes de l'ansietat generalitzada?

Els símptomes físics més freqüents són tensió muscular al coll i a l'esquena, fatiga persistent, insomni, molèsties digestives, palpitacions i cefalees tensionals. En el pla psicològic apareixen preocupació contínua, anticipació d'escenaris negatius, irritabilitat, dificultat de concentració i necessitat de tenir-ho tot previst. És habitual que la persona hagi passat per múltiples proves mèdiques amb resultats normals abans de consultar.

### Com es diagnostica el TAG segons el DSM-5?

El DSM-5 requereix ansietat i preocupació excessives sobre diversos esdeveniments, presents la majoria dels dies durant almenys sis mesos, amb dificultat per controlar-les i almenys tres símptomes associats com inquietud, fatiga, irritabilitat, tensió muscular, problemes de concentració o alteracions del son. A més, hi ha d'haver un malestar significatiu o un deteriorament en la vida laboral, social o familiar. Aquests criteris descriuen la forma del quadre, però no n'expliquen la causa, que és el que es treballa a la consulta.

### En què es diferencia el TAG de les crisis de pànic?

La crisi de pànic és un episodi agut i breu, d'inici brusc, amb símptomes físics intensos i por de morir o de perdre el control. El trastorn d'ansietat generalitzada és un estat sostingut de tensió i preocupació de menys intensitat però de molta més durada. Tots dos poden coexistir: és freqüent que una ansietat generalitzada mantinguda durant anys desemboqui en una primera crisi de pànic.

### Com es tracta el trastorn d'ansietat generalitzada des de la psicoanàlisi?

A la Clínica de l'Ansietat Catalunya, Joan Ramon Soto, psicoanalista, treballa amb Psicoanàlisi Directa, un mètode que va al conflicte inconscient que origina el símptoma en lloc d'ensenyar tècniques per gestionar-lo. L'objectiu és que l'ansietat deixi de ser necessària per al psiquisme, no que la persona aprengui a conviure-hi. Al voltant del 80% dels processos acaben en alta en menys de sis mesos, tot i que cada història té el seu propi ritme.

### Com és la primera visita a la Clínica de l'Ansietat Catalunya?

És una conversa clínica real, sense qüestionaris ni tests mecànics. El psicoanalista Joan Ramon Soto escolta el motiu de consulta, quan va aparèixer, en quin moment vital ho va fer i què es mou al voltant, i al final sol poder oferir una orientació sobre què sosté el quadre i com seria el treball. Atén presencialment a Canet de Mar, al Maresme, i en línia per a tot Catalunya i Espanya, en català o castellà.
`,
    },
};

export function getContentfulCa(slug: string): ContentfulTranslation | undefined {
    return CONTENTFUL_CA[(slug || '').replace(/^\/|\/$/g, '')];
}
