const steps = [
  {
    number: '01',
    title: 'Kurzbewerbung',
    description: 'Schick uns einfach Deine Daten. Ein langes Anschreiben brauchst Du nicht. Uns ist wichtig, dass Du als Geselle selbstständig anpacken kannst und den B-Führerschein hast.',
  },
  {
    number: '02',
    title: 'Zügiger Rückruf',
    description: 'Wir lassen Dich nicht in der Luft hängen. Wenn Deine Bewerbung reinkommt, greifen wir zeitnah zum Hörer. In einem kurzen Telefonat klären wir direkt ab, ob die Chemie passt.',
  },
  {
    number: '03',
    title: 'Kennenlernen im Betrieb',
    description: 'Wir quatschen nicht nur am Telefon. Du kommst vorbei, wir trinken einen Kaffee, Du lernst Norbert und das Team kennen. Wir zeigen Dir den Betrieb, die Autos und die Baustellen.',
  },
  {
    number: '04',
    title: 'Schnuppertag (wenn Du willst)',
    description: 'Damit Du nicht die Katze im Sack kaufst: Komm einfach einen Tag mit raus. Schau Dir die Kollegen, unsere Arbeitsweise und das Material live in Action an.',
  },
  {
    number: '05',
    title: 'Handschlag & Vertrag',
    description: 'Passt alles für Dich und uns? Dann machen wir Nägel mit Köpfen. Du kriegst Deinen Arbeitsvertrag und wir legen gemeinsam los.',
  },
]

export function Process() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Bewerbungsprozess
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Kein ewiges Warten, kein Papierkram-Wahnsinn
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Bei uns geht das schnell und direkt. In 5 einfachen Schritten aufs Dach:
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
