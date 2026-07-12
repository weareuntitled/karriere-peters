import { MapPin, Clock, ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20">
        {/* Copy */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue">
            <span className="size-1.5 rounded-full bg-blue" aria-hidden="true" />
            Wir stellen ein
          </span>

          <h1 className="mt-5 text-pretty font-display text-4xl font-extrabold leading-[1.03] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Deine Handwerks-Karriere{' '}
            <span className="text-copper">startet jetzt</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Werde Teil unseres Familienbetriebs. Bei uns arbeitest du mit modernen
            Werkzeugen an echten Projekten – als Spengler, Folientechniker oder Dachdecker.
            Faire Bezahlung, ein eingespieltes Team und Handwerk, auf das wir stolz sind.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#jobs"
              className="btn-copper italic inline-flex gap-2"
            >
              Offene Stellen ansehen
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#bewerben"
              className="btn-copper-outline italic"
            >
              Jetzt bewerben
            </a>
          </div>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="size-4 text-copper" aria-hidden="true" />
              <dt className="sr-only">Anstellungsart</dt>
              <dd>Vollzeit · Festanstellung</dd>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 text-copper" aria-hidden="true" />
              <dt className="sr-only">Standort</dt>
              <dd>Bayern · regional</dd>
            </div>
          </dl>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border shadow-sm sm:aspect-[3/2] lg:aspect-[4/5]">
            <img
              src="/images/spengler-roof.png"
              alt="Spengler bei der Arbeit an einem Stehfalz-Metalldach"
              className="size-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-lg border border-border bg-card px-5 py-4 shadow-md sm:block">
            <p className="font-display text-2xl font-extrabold text-foreground">25+</p>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Jahre Handwerk
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
