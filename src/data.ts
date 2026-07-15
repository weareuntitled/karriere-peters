export const site = {
  name: 'Spenglerei Peters',
  street: 'Dieselstraße 10',
  zip: '86556',
  city: 'Kühbach',
  radius: 20,
  phone: '+49 8251 81269',
  email: 'handwerk@spenglerei-peters.de',
  webformEndpoint: 'https://api.web3forms.com/submit',
  webformAccessKey: '038c7074-31a3-4195-934e-0fb00d6608d9',
  social: {
    facebook: '',
    instagram: '',
  },
};

export const hero = {
  pill: 'Wir stellen ein',
  title: 'Handwerk,',
  titleAccent: 'das sitzt.',
  brand: 'Spenglerei Meisterbetrieb Peters-GmbH',
  location: 'Kühbach · Aichach · München',
  body: 'Seit über 25 Jahren machen wir Spengler-, Folien- und Dachdeckerarbeiten im Raum Kühbach. Wir suchen Gesellen, die saubere Arbeit schätzen und abends wieder zu Hause sein wollen. Bei uns arbeitest du mit Hilti, fährst einen Mercedes-Sprinter und wirst übertariflich bezahlt – ganz ohne Anschreiben.',
  ctaPrimary: { label: 'Offene Stellen ansehen', href: '#stellen' },
  ctaSecondary: { label: 'So läuft die Bewerbung', href: '#prozess' },
  image: '/hero_02-3.png',
  statNum: '25+',
  statLabel: 'Jahre Handwerk',
};

export const heroMeta = [
  { label: 'Anstellungsart', value: 'Festanstellung · unbefristet' },
  { label: 'Standort', value: 'Kühbach · Aichach · München' },
  { label: 'Start', value: 'Ab sofort · ohne Anschreiben' },
];

export const nav = [
  { label: 'Offene Stellen', href: '#stellen' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Bewerbungsprozess', href: '#prozess' },
  { label: 'FAQ', href: '#faq' },
];

export type Job = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  level: 'erfahren' | 'azubi' | 'montage';
  location: string;
  short_description: string;
  key_tasks: string[];
  requirements: string[];
  we_offer: string[];
  salary_range: string;
};

export const stellen: Job[] = [
  {
    id: 1,
    slug: 'spengler',
    title: 'Spengler (m/w/d)',
    subtitle: 'Erfahren',
    level: 'erfahren',
    location: 'Kühbach & Umgebung',
    short_description: 'Du hast mehrere Jahre Erfahrung als Spengler und liebst Dein Handwerk? Dann bist Du hier richtig.',
    key_tasks: [
      'Herstellung und Montage von Dachrinnen, Verkleidungen und Fassaden aus Zink, Kupfer und Aluminium',
      'Eindeckung von Stehfalz- und Metalldächern',
      'Anfertigung von Bauteilen in der Werkstatt an der Abkantbank',
      'Reparatur- und Wartungsarbeiten beim Kunden',
    ],
    requirements: [
      'Abgeschlossene Ausbildung als Spengler, Klempner oder Flaschner',
      'Mehrjährige Berufserfahrung als Geselle',
      'Selbstständige und sorgfältige Arbeitsweise',
      'Führerschein Klasse B',
    ],
    we_offer: [
      'Übertarifliche Bezahlung – 18–24 €/h',
      'Fahrzeit wird voll vergütet',
      'Moderne Ausstattung mit Mercedes Sprinter & Hilti',
      'Eingespieltes Team, flache Hierarchien',
    ],
    salary_range: '€ 18 – 24 / Stunde',
  },
  {
    id: 2,
    slug: 'folientechniker',
    title: 'Folientechniker (m/w/d)',
    subtitle: 'Erfahren',
    level: 'erfahren',
    location: 'Kühbach & Umgebung',
    short_description: 'Spezialist für hochwertige Folienarbeiten und Oberflächentechnik? Werde Teil unseres Teams.',
    key_tasks: [
      'Folien dämmen und dichten an Dachflächen, Fassaden und Anschlüssen',
      'Oberflächenvorbereitung und Reinigung vor Folieneinbau',
      'Qualitätskontrolle und Dokumentation der Arbeiten',
      'Beratung mit Kunden zu Materialoptionen',
    ],
    requirements: [
      'Abgeschlossene Ausbildung oder mehrjährige Berufserfahrung',
      'Sorgfalt und Genauigkeit bei der Arbeit',
      'Technisches Verständnis für Folien und Abdichtungssysteme',
      'Führerschein Klasse B von Vorteil',
    ],
    we_offer: [
      'Übertarifliche Bezahlung – 16–22 €/h',
      'Fahrzeit wird voll vergütet',
      'Hilti-Werkzeuge & hochwertige Folien-Systeme',
      'Feste Einsatzregion (Kühbach–München)',
    ],
    salary_range: '€ 16 – 22 / Stunde',
  },
  {
    id: 3,
    slug: 'dachdecker',
    title: 'Dachdecker (m/w/d)',
    subtitle: 'Montage',
    level: 'montage',
    location: 'Kühbach & Umgebung',
    short_description: 'Erfahrener Dachdecker gesucht! Wir arbeiten in der Höhe, und das macht Dir Spaß.',
    key_tasks: [
      'Steil- und Flachdach – Eindeckung mit Ziegeln und Bitumen',
      'Montage verschiedener Dacheindeckungen',
      'Materialverarbeitung und -verbrauch optimieren',
      'Zusammenarbeit mit anderen Gewerken auf der Baustelle',
    ],
    requirements: [
      'Ausbildung als Dachdecker oder mehrjährige Erfahrung',
      'Schwindelfrei und körperlich fit',
      'Sichere Arbeitsweise auf dem Dach',
      'Führerschein Klasse B',
    ],
    we_offer: [
      'Übertarifliche Bezahlung – 19–25 €/h',
      'Fahrzeit wird voll vergütet',
      'Modernste Arbeitsmittel & Sicherheitsausrüstung',
      'Faires Team, kurze Entscheidungswege',
    ],
    salary_range: '€ 19 – 25 / Stunde',
  },
];

export const benefits = {
  title: 'Das erwartet Dich bei Spenglerei Peters',
  eyebrow: 'Deine Benefits',
  body: 'Sechs Punkte, die bei uns nicht auf dem Papier stehen, sondern gelebt werden.',
  items: [
    { num: '01', title: 'Jeden Abend im eigenen Bett.', body: 'Keine Koffer, keine Hotelbetten. Wir arbeiten strikt regional zwischen Kühbach und München. Das bedeutet für dich: Kurze Wege und ein verlässlicher Feierabend bei deiner Familie.' },
    { num: '02', title: 'Mercedes Sprinter & echtes Werkzeug.', body: 'Wer saubere Arbeit verlangt, muss Top-Material stellen. Wir arbeiten mit Hilti und sind mit einem gut ausgestatteten Fuhrpark unterwegs. Material fehlt auf der Baustelle? Chef Norbert hält dir den Rücken frei und liefert nach.' },
    { num: '03', title: 'Starke Bezahlung, faire Absprachen.', body: 'Gute Arbeit ist gutes Geld wert. Wir zahlen leistungsgerecht, übertariflich und absolut pünktlich. Anfahrtswege und Überstunden regeln wir offen und fair mit dir – ob als Ausgleich oder bar. Keine Tricks, kein Kleingedrucktes.' },
    { num: '04', title: 'Dein Job. Dein Rhythmus.', body: 'Wir hassen Helikopter-Chefs genauso wie du. Du weißt, was du tust, also plane deinen Tag selbst. Und wenn die Baustelle in Top-Qualität abgeschlossen ist? Dann hast du Feierabend. Punkt.' },
    { num: '05', title: 'Klartext auf Augenhöhe.', body: 'Bei uns gibt es keinen Flurfunk. Wenn was klemmt, packen wir es direkt und fair auf den Tisch. Wir helfen uns gegenseitig, anstatt mit dem Finger aufeinander zu zeigen.' },
    { num: '06', title: 'Ein Team, kein anonymer Haufen.', body: 'Der Morgen startet gemeinsam in der Werkstatt, gearbeitet wird meist entspannt im Zweier-Team. Und weil wir uns aufeinander verlassen können, stoßen wir auf der Wiesn oder an Weihnachten auch gerne gemeinsam an.' },
  ],
};

export const prozess = {
  title: 'Kein ewiges Warten, kein Papierkram-Wahnsinn',
  eyebrow: 'Bewerbungsprozess',
  body: 'Bei uns geht das schnell und direkt. In 5 einfachen Schritten aufs Dach:',
  steps: [
    { num: '01', title: 'Kurzbewerbung', body: 'Schick uns einfach Deine Daten. Ein langes Anschreiben brauchst Du nicht. Uns ist wichtig, dass Du als Geselle selbstständig anpacken kannst und den B-Führerschein hast.' },
    { num: '02', title: 'Zügiger Rückruf', body: 'Wir lassen Dich nicht in der Luft hängen. Wenn Deine Bewerbung reinkommt, greifen wir zeitnah zum Hörer. In einem kurzen Telefonat klären wir direkt ab, ob die Chemie passt.' },
    { num: '03', title: 'Kennenlernen im Betrieb', body: 'Wir quatschen nicht nur am Telefon. Du kommst vorbei, wir trinken einen Kaffee, Du lernst Norbert und das Team kennen. Wir zeigen Dir den Betrieb, die Autos und die Baustellen.' },
    { num: '04', title: 'Schnuppertag (wenn Du willst)', body: 'Damit Du nicht die Katze im Sack kaufst: Komm einfach einen Tag mit raus. Schau Dir die Kollegen, unsere Arbeitsweise und das Material live in Action an.' },
    { num: '05', title: 'Handschlag & Vertrag', body: 'Passt alles für Dich und uns? Dann machen wir Nägel mit Köpfen. Du kriegst Deinen Arbeitsvertrag und wir legen gemeinsam los.' },
  ],
};

export const faq = {
  title: 'Was Du sonst noch wissen solltest',
  eyebrow: 'FAQ',
  items: [
    { q: 'Was erwartet Ihr von mir?', a: 'Ganz klar: Verlässlichkeit, Mitdenken und Kommunikation. Wir geben Dir den Freiraum, Deine Baustelle so zu organisieren, wie Du es für richtig hältst. Aber diese Freiheit muss man sich durch selbstständiges und sauberes Arbeiten verdienen.' },
    { q: 'Brauche ich Berufserfahrung?', a: 'Ja. Du solltest Dein Handwerk gelernt haben und als Geselle wissen, was Du tust. Führerschein Klasse B ist Pflicht – wir haben 3 Sprinter und einen Citan, und wer eingespielt ist, kann auf einen unserer Firmenwagen warten.' },
    { q: 'Wo sind die Baustellen? Muss ich auf Montage?', a: 'Ganz klares Nein zur Fernmontage. Du bist abends immer zu Hause. Unser Kerngebiet ist ein Umkreis von ca. 20 km rund um Kühbach/Aichach bis rüber nach München.' },
    { q: 'Wird die Fahrzeit bezahlt?', a: 'Selbstverständlich. Wenn Du im Sprinter sitzt und zur Baustelle fährst, ist das Arbeitszeit und wird voll vergütet. Wenn mal Überstunden anfallen, werden die fair mit Freizeit oder Auszahlung ausgeglichen.' },
    { q: 'Gibt es Weiterbildungsmöglichkeiten?', a: 'Ja. Wer bei uns zeigt, dass er eigenständig arbeitet und Verantwortung übernehmen kann, dem stehen alle Türen offen. Eine Entwicklung zum Kolonnenführer oder Vorarbeiter ist absolut drin.' },
    { q: 'Wie schnell bekomme ich eine Rückmeldung?', a: 'Wir lassen keine Bewerbungen wochenlang liegen. Wenn Du Dich bei uns meldest, rufen wir zeitig bei Dir zurück.' },
    { q: 'Kann ich mir den Betrieb vorher ansehen?', a: 'Klar. Du kommst vorbei, lernst das Team kennen und kriegst einen echten Eindruck von uns – bevor Du Dich entscheidest.' },
  ],
};

export const footer = {
  description: 'Dein Familienbetrieb für Spenglerei, Dach und Fassade. Handwerk mit Anspruch – seit über 25 Jahren.',
  contact: {
    phone: '+49 8251 81269',
    email: 'handwerk@spenglerei-peters.de',
  },
};
