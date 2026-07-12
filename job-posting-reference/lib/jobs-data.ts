export type Job = {
  id: number
  title: string
  subtitle: string
  level: 'Erfahren' | 'Azubi' | 'Montage'
  location: string
  short_description: string
  full_description: string
  key_tasks: string[]
  requirements: string[]
  benefits: string[]
  salary_range: string
}

export const JOBS: Job[] = [
  {
    id: 1,
    title: 'Spengler (m/w/d)',
    subtitle: 'Erfahren',
    level: 'Erfahren',
    location: 'Kühbach/Aichach',
    short_description:
      'Du hast mehrere Jahre Erfahrung als Spengler und liebst Dein Handwerk? Dann bist Du hier richtig.',
    full_description:
      'Wir suchen einen erfahrenen Spengler, der eigenverantwortlich arbeitet und mit modernen Materialien umgehen kann. Du wirst Teil eines starken Teams sein, das Qualität und Handwerkskunst lebt.',
    key_tasks: [
      'Planung und Durchführung von Spenglerarbeiten vor Ort',
      'Arbeiten mit Kupfer, Zink und anderen Materialien',
      'Zusammenarbeit mit dem Team auf verschiedenen Baustellen',
      'Wartung und Instandhaltung von Dachkonstruktionen',
    ],
    requirements: [
      'Mehrjährige Berufserfahrung als Spengler',
      'Meisterhaft im Umgang mit Handwerkzeugen',
      'Zuverlässigkeit und Verantwortungsbewusstsein',
      'Führerschein Klasse B',
      'Gute Deutschkenntnisse',
    ],
    benefits: [
      'Abends im eigenen Bett',
      'Freiraum & Vertrauen',
      'Mercedes Sprinter & Hilti-Ausstattung',
      'Fahrzeit = Arbeitszeit',
      'Top-Bezahlung, immer pünktlich',
      'Echtes Team statt anonymer Haufen',
    ],
    salary_range: '€ 18 - 24 / Stunde',
  },
  {
    id: 2,
    title: 'Folientechniker (m/w/d)',
    subtitle: 'Erfahren',
    level: 'Erfahren',
    location: 'München-Umland',
    short_description:
      'Spezialist für hochwertige Folienarbeiten und Oberflächentechnik? Werde Teil unseres innovativen Teams.',
    full_description:
      'Wir suchen einen Folientechniker mit Erfahrung in Oberflächenbeschichtung und modernen Verfahren. Deine Aufgabe ist es, Qualitätsstandards zu sichern und Projekte effizient umzusetzen.',
    key_tasks: [
      'Oberflächenvorbereitung und Reinigung',
      'Anwendung hochwertiger Folien und Beschichtungen',
      'Qualitätskontrolle und Dokumentation',
      'Beratung mit Kunden zu Materialoptionen',
    ],
    requirements: [
      'Abgeschlossene Ausbildung oder mehrjährige Berufserfahrung',
      'Sorgfalt und Genauigkeit',
      'Technisches Verständnis',
      'Teamfähigkeit',
      'Führerschein Klasse B von Vorteil',
    ],
    benefits: [
      'Abends im eigenen Bett',
      'Freiraum & Vertrauen',
      'Mercedes Sprinter & Hilti-Ausstattung',
      'Fahrzeit = Arbeitszeit',
      'Top-Bezahlung, immer pünktlich',
      'Echtes Team statt anonymer Haufen',
    ],
    salary_range: '€ 16 - 22 / Stunde',
  },
  {
    id: 3,
    title: 'Dachdecker (m/w/d)',
    subtitle: 'Montage',
    level: 'Montage',
    location: 'Bayern',
    short_description:
      'Erfahrener Dachdecker gesucht! Wir arbeiten in der Höhe, und das macht Dir Spaß.',
    full_description:
      'Wir sind auf der Suche nach einem erfahrenen Dachdecker, der mobil einsatzbereit ist und auf Baustellen unterschiedliche Eindeckungsarten durchführt. Deine Sicherheit und Qualität stehen an erster Stelle.',
    key_tasks: [
      'Montage verschiedener Dacheindeckungen',
      'Arbeiten in der Höhe und auf Leitern',
      'Materialverarbeitung und -verbrauch optimieren',
      'Zusammenarbeit mit anderen Gewerken auf der Baustelle',
    ],
    requirements: [
      'Ausbildung als Dachdecker oder mehrjährige Erfahrung',
      'Schwindelfrei und körperlich fit',
      'Sichere Arbeitsweise (Höhenangst sollte kein Problem sein)',
      'Führerschein Klasse B',
      'Bereitschaft zu Fahrten innerhalb Bayerns',
    ],
    benefits: [
      'Abends im eigenen Bett',
      'Freiraum & Vertrauen',
      'Mercedes Sprinter & Hilti-Ausstattung',
      'Fahrzeit = Arbeitszeit',
      'Top-Bezahlung, immer pünktlich',
      'Echtes Team statt anonymer Haufen',
    ],
    salary_range: '€ 19 - 25 / Stunde',
  },
]

export function getJobById(id: number): Job | undefined {
  return JOBS.find((job) => job.id === id)
}
