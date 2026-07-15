'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { submitApplication, type ApplyState } from '@/app/actions/apply'

const initialState: ApplyState = { status: 'idle' }

const fieldClass =
  'w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-60 sm:w-auto"
    >
      {pending ? 'Wird gesendet…' : 'Bewerbung absenden'}
      {!pending && <Send className="size-4" aria-hidden="true" />}
    </button>
  )
}

export function ApplicationForm({ jobId, minimal }: { jobId?: number; minimal?: boolean } = {}) {
  const [state, formAction] = useActionState(submitApplication, initialState)

  if (state.status === 'success') {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground">
          Bewerbung eingegangen
        </h3>
        <p className="mx-auto mt-2 max-w-md text-pretty text-muted-foreground">
          {state.message}
        </p>
      </div>
    )
  }

  const formClass = minimal
    ? 'space-y-4'
    : 'rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8'

  return (
    <form action={formAction} className={formClass}>
      {jobId && <input type="hidden" name="jobId" value={jobId} />}
      
      <div className={minimal ? 'space-y-4' : 'grid gap-5 sm:grid-cols-2'}>
        {!minimal && (
          <div className="sm:col-span-2">
            <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-foreground">
              Name <span className="text-copper">*</span>
            </label>
            <input id="fullName" name="fullName" required placeholder="Max Mustermann" className={fieldClass} />
          </div>
        )}
        {minimal && (
          <>
            <div>
              <label htmlFor="fullName" className="mb-1.5 block text-xs font-semibold text-foreground">
                Name <span className="text-copper">*</span>
              </label>
              <input id="fullName" name="fullName" required placeholder="Max Mustermann" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-foreground">
                E-Mail <span className="text-copper">*</span>
              </label>
              <input id="email" name="email" type="email" required placeholder="max@beispiel.de" className={fieldClass} />
            </div>
          </>
        )}
        {!minimal && (
          <>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">
                E-Mail <span className="text-copper">*</span>
              </label>
              <input id="email" name="email" type="email" required placeholder="max@beispiel.de" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-foreground">
                Telefon
              </label>
              <input id="phone" name="phone" type="tel" placeholder="0170 1234567" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="experience" className="mb-1.5 block text-sm font-semibold text-foreground">
                Berufserfahrung
              </label>
              <select id="experience" name="experience" defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Bitte wählen
                </option>
                <option>Berufseinsteiger / Azubi</option>
                <option>1–3 Jahre</option>
                <option>3–10 Jahre</option>
                <option>Über 10 Jahre</option>
                <option>Quereinsteiger</option>
              </select>
            </div>
            <div>
              <label htmlFor="availability" className="mb-1.5 block text-sm font-semibold text-foreground">
                Verfügbar ab
              </label>
              <input id="availability" name="availability" placeholder="z. B. sofort" className={fieldClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Erzähl uns kurz etwas über dich…"
                className={fieldClass + ' resize-y'}
              />
            </div>
          </>
        )}
      </div>

      {state.status === 'error' && (
        <p className="flex items-center gap-2 text-sm font-medium text-destructive" role="alert">
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          {state.message}
        </p>
      )}

      <div className={minimal ? 'pt-2' : 'mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between'}>
        <SubmitButton />
        {!minimal && (
          <p className="text-xs leading-relaxed text-muted-foreground">
            Mit dem Absenden stimmst du der Verarbeitung deiner Daten zur
            Bearbeitung der Bewerbung zu.
          </p>
        )}
      </div>
    </form>
  )
}
