import { ApplicationForm } from './application-form'

export function ApplySection() {
  return (
    <section id="bewerben" className="border-t border-border bg-card scroll-mt-16">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Bewerbung
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            In 2 Minuten beworben
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            Kein langes Anschreiben nötig. Füll einfach das Formular aus – wir
            melden uns persönlich bei dir zurück.
          </p>
        </div>
        <div className="mt-10">
          <ApplicationForm />
        </div>
      </div>
    </section>
  )
}
