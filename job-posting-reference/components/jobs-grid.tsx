import { JOBS } from '@/lib/jobs-data'
import { JobCard } from './job-card'

export function JobsGrid() {
  return (
    <section id="jobs" className="relative section-py section-px bg-background">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />
            Jetzt bewerben
          </span>
          <h2 className="mt-6 text-balance font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            Offene Stellen in Bayern
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground">
            Drei Positionen, drei starke Teams, ein gemeinsames Ziel: Handwerkskunst auf höchstem Niveau. 
            Wähle deine Chance und werde Teil der Spenglerei Peters Familie.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {JOBS.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Keine passende Stelle dabei?{' '}
            <a href="#bewerben" className="font-semibold text-copper hover:text-copper-dark transition-colors">
              Bewirb dich trotzdem →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
