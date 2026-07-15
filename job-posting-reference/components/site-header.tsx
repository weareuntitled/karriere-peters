import { Hammer } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Hammer className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-extrabold tracking-tight text-foreground">
              Spenglerei Peters
            </span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
              Karriere
            </span>
          </span>
        </a>
        <a
          href="#bewerben"
          className="inline-flex h-10 items-center rounded-md bg-accent px-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
        >
          Jetzt bewerben
        </a>
      </div>
    </header>
  )
}
