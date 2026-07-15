import { Check } from 'lucide-react'

const tasks = [
  'Herstellung und Montage von Dachrinnen, Verkleidungen und Fassaden aus Zink, Kupfer und Aluminium',
  'Eindeckung von Stehfalz- und Metalldächern',
  'Anfertigung von Bauteilen in der Werkstatt an der Abkantbank',
  'Reparatur- und Wartungsarbeiten beim Kunden',
]

const profile = [
  'Abgeschlossene Ausbildung als Spengler, Klempner oder Flaschner (m/w/d)',
  'Auch motivierte Berufseinsteiger und Quereinsteiger willkommen',
  'Sorgfältige, selbstständige Arbeitsweise und Freude am Handwerk',
  'Führerschein Klasse B von Vorteil',
]

export function RoleDetails() {
  return (
    <section id="stelle" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <img
              src="/images/metal-detail.png"
              alt="Präzise gefalzte Stehfalz-Zinkdachdeckung mit Kupferrinne"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="mt-4 overflow-hidden rounded-xl border border-border shadow-sm">
            <img
              src="/images/workshop.png"
              alt="Aufgeräumte Werkstatt einer Spenglerei mit Abkantbank und Werkzeug"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Deine Stelle
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Deine Aufgaben
          </h2>
          <ul className="mt-6 space-y-3">
            {tasks.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">{t}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-display text-xl font-bold text-foreground">
            Das bringst du mit
          </h3>
          <ul className="mt-5 space-y-3">
            {profile.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
