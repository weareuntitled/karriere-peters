import { Hammer, Phone, Mail, MapPin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <Hammer className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight">
              Spenglerei Peters
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Dein Familienbetrieb für Spenglerei, Dach und Fassade. Handwerk mit
            Anspruch – seit über 25 Jahren.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="tel:+490000000000" className="flex items-center gap-2.5 text-primary-foreground/85 transition-colors hover:text-accent">
                <Phone className="size-4 text-accent" aria-hidden="true" />
                Telefon aufnehmen
              </a>
            </li>
            <li>
              <a href="mailto:jobs@spenglerei-peters.de" className="flex items-center gap-2.5 text-primary-foreground/85 transition-colors hover:text-accent">
                <Mail className="size-4 text-accent" aria-hidden="true" />
                jobs@spenglerei-peters.de
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-primary-foreground/85">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              Spenglerei Peters, Deutschland
            </li>
          </ul>
        </div>

        <div className="md:text-right">
          <a
            href="#bewerben"
            className="inline-flex h-11 items-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Jetzt bewerben
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Spenglerei Peters. Alle Rechte vorbehalten.</p>
          <p>jobs.spenglerei-peters.de</p>
        </div>
      </div>
    </footer>
  )
}
