import Link from 'next/link'
import { MapPin, ArrowRight, Briefcase } from 'lucide-react'
import type { Job } from '@/lib/jobs-data'

const levelConfig = {
  Erfahren: { color: 'bg-blue', textColor: 'text-blue', label: 'Erfahren' },
  Azubi: { color: 'bg-copper', textColor: 'text-copper', label: 'Azubi' },
  Montage: { color: 'bg-blue', textColor: 'text-blue', label: 'Montage' },
}

export function JobCard({ job }: { job: Job }) {
  const config = levelConfig[job.level as keyof typeof levelConfig] || levelConfig.Erfahren

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border-2 border-copper bg-white transition-all duration-300 hover:border-blue hover:shadow-xl">
      {/* Top accent bar */}
      <div className={`h-1.5 w-full ${config.color}`} aria-hidden="true" />

      {/* Card content */}
      <div className="flex flex-col gap-5 p-6 pb-7">
        {/* Icon + Badge section */}
        <div className="flex items-start justify-between gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${config.color} bg-opacity-10`}>
            <Briefcase className={`h-6 w-6 ${config.textColor}`} />
          </div>
          <span className={`inline-flex items-center gap-1 rounded-full ${config.color} px-3 py-1 text-xs font-bold text-white`}>
            {config.label}
          </span>
        </div>

        {/* Title + Subtitle */}
        <div className="space-y-1">
          <h3 className="text-xl font-extrabold leading-tight text-foreground transition-colors group-hover:text-copper">
            {job.title}
          </h3>
          <p className={`text-sm font-semibold ${config.textColor}`}>{job.subtitle}</p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          <span>{job.location}</span>
        </div>

        {/* Description */}
        <p className="line-clamp-3 text-sm leading-relaxed text-foreground/75">
          {job.short_description}
        </p>

        {/* Divider */}
        <div className="my-2 h-px bg-gradient-to-r from-copper/20 to-transparent" aria-hidden="true" />

        {/* Salary section */}
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Gehalt
          </span>
          <span className="font-display text-lg font-bold text-copper">
            {job.salary_range}
          </span>
        </div>
      </div>

      {/* CTA Button at bottom */}
      <Link
        href={`/jobs/${job.id}`}
        className="group/btn relative mx-6 mb-6 flex items-center justify-center gap-2 rounded-lg border-2 border-copper bg-copper px-4 py-3 font-semibold text-white transition-all duration-200 hover:bg-copper-dark hover:shadow-md focus:outline-none focus:ring-3 focus:ring-blue/50"
        aria-label={`Weitere Details zur Position ${job.title} ansehen`}
      >
        <span>Details ansehen</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  )
}
