'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Was erwartet Ihr von mir?',
    answer: 'Du solltest eine abgeschlossene Ausbildung als Spengler/Klempner haben und gerne selbstständig arbeiten. Der B-Führerschein ist erforderlich, da Du mit dem Sprinter zu den Baustellen fährst. Wichtig: Handwerkliches Geschick, Zuverlässigkeit und die Lust, Dein handwerkliches Know-how in einem eingespielten Team einzubringen.',
  },
  {
    question: 'Brauche ich Berufserfahrung?',
    answer: 'Ja, Du solltest als Geselle ausgebildet sein oder vergleichbare Erfahrung in der Spenglerbranche mitbringen. Wir suchen keine Anfänger, sondern erfahrene Fachkräfte, die selbstständig auf der Baustelle arbeiten können.',
  },
  {
    question: 'Wo sind die Baustellen? Muss ich auf Montage?',
    answer: 'Wir arbeiten regional im Umkreis von Kühbach/Aichach bis nach München. Es gibt keine Fernmontage – Du bist jeden Abend zu Hause. Allerdings können einzelne Projekte auch weiter entfernt sein, worüber wir vorher transparent kommunizieren.',
  },
  {
    question: 'Wird die Fahrzeit bezahlt?',
    answer: 'Ja, absolut. Die Fahrzeit vom Betrieb zur Baustelle wird vollständig als Arbeitszeit bezahlt. Das ist für uns eine Selbstverständlichkeit.',
  },
  {
    question: 'Gibt es Weiterbildungsmöglichkeiten?',
    answer: 'Ja, wir fördern Weiterbildungen aktiv. Wenn Du Dich entwickeln möchtest – sei es durch Fachkurse, Spezialisierungen oder sogar die Meisterausbildung – unterstützen wir Dich dabei. Wer sich bei uns reinhängt, hat echte Aufstiegschancen.',
  },
  {
    question: 'Wie schnell bekomme ich eine Rückmeldung?',
    answer: 'Sehr schnell. Wir prüfen Bewerbungen zeitnah und melden uns innerhalb weniger Tage. Wenn Deine Bewerbung bei uns ankommt, greifen wir zügig zum Telefon – nicht irgendwann, sondern zeitnah.',
  },
  {
    question: 'Kann ich mir den Betrieb vorher ansehen?',
    answer: 'Gerne! Kontaktiere uns, und wir vereinbaren einen Termin zum Kennenlernen. Du schaust Dir den Betrieb an, lernst das Team kennen und kriegst einen echten Eindruck von uns.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="border-t border-border bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            FAQ
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Was Du sonst noch wissen solltest
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background px-6 py-4 transition-all hover:border-accent/50 hover:bg-muted"
              >
                <h3 className="font-display font-bold text-foreground">
                  {faq.question}
                </h3>
                <ChevronDown
                  className="h-5 w-5 flex-shrink-0 text-accent transition-transform"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                  aria-hidden="true"
                />
              </div>
              {openIndex === index && (
                <div className="border-x border-b border-border bg-background px-6 py-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
