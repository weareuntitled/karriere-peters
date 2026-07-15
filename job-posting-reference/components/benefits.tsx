import { Home, Lightbulb, Truck, Clock, Euro, Users } from 'lucide-react'

const benefits = [
  {
    icon: Home,
    title: 'Abends im eigenen Bett',
    text: 'Keine Fernmontage, kein Kofferpacken. Wir arbeiten regional im Umkreis von Kühbach/Aichach bis nach München. Du bist jeden Abend pünktlich zu Hause.',
  },
  {
    icon: Lightbulb,
    title: 'Freiraum & Vertrauen',
    text: 'Wer mitdenkt und sauber plant, dem vertrauen wir blind. Du organisierst Deinen Tag selbst – solange die Qualität stimmt, redet Dir keiner rein.',
  },
  {
    icon: Truck,
    title: 'Mercedes Sprinter & Hilti-Ausstattung',
    text: 'Mit schlechtem Material kann man nicht gut arbeiten. Hilti-Werkzeug statt Schrott. Nach der Einarbeitungszeit kannst Du auf einen unserer Sprinter warten.',
  },
  {
    icon: Clock,
    title: 'Fahrzeit = Arbeitszeit',
    text: 'Deine Fahrzeit zur Baustelle wird vollständig bezahlt. Überstunden verfallen nicht – sie werden fair mit Freizeit oder Auszahlung ausgeglichen.',
  },
  {
    icon: Euro,
    title: 'Top-Bezahlung, immer pünktlich',
    text: 'Leistungsgerechte, übertarifliche Bezahlung – pünktlich auf dem Konto. Wer sich reinhängt und Verantwortung übernimmt, kann bei uns aufsteigen.',
  },
  {
    icon: Users,
    title: 'Echtes Team statt anonymer Haufen',
    text: 'Wir arbeiten fest zusammen und wir feiern zusammen. Jährlich auf der Wiesn, ordentliche Weihnachtsfeier – ein Team, das zusammenhält.',
  },
]

export function Benefits() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Deine Benefits
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Das erwartet Dich bei Spenglerei Peters
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ein junges Team, gute Ausrüstung und ein Chef, der Dir vertraut.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <b.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
