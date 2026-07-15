import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft, MapPin, DollarSign, CheckCircle2 } from 'lucide-react'
import { getJobById, JOBS } from '@/lib/jobs-data'
import { ApplicationForm } from '@/components/application-form'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const job = getJobById(parseInt(id))

  if (!job) {
    return { title: 'Job nicht gefunden' }
  }

  return {
    title: `${job.title} – Karriere bei Spenglerei Peters`,
    description: job.short_description,
  }
}

export async function generateStaticParams() {
  return JOBS.map((job) => ({
    id: job.id.toString(),
  }))
}

export default async function JobDetailPage({ params }: Props) {
  const { id } = await params
  const job = getJobById(parseInt(id))

  if (!job) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center section-py section-px">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-foreground mb-2">Job nicht gefunden</h1>
            <p className="text-muted-foreground mb-4">Diese Position existiert leider nicht.</p>
            <Link href="/" className="btn-copper">
              Zurück zur Übersicht
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const tagStyle = job.level === 'Erfahren' ? 'tag-blue' : 'tag-copper'

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-foreground via-foreground/90 to-blue/20 text-white section-py section-px">
          <div className="mx-auto max-w-6xl">
            <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4">
              <ChevronLeft className="w-4 h-4" />
              Zurück
            </Link>
            <div className="flex flex-col gap-4 mt-6">
              <h1 className="text-4xl md:text-5xl font-extrabold font-display">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-3">
                <div className={tagStyle}>{job.level}</div>
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="w-5 h-5" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <DollarSign className="w-5 h-5" />
                  <span className="font-semibold">{job.salary_range}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="section-py section-px bg-background">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Job Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <p className="text-lg text-foreground/90 leading-relaxed">{job.full_description}</p>
              </div>

              {/* Key Tasks */}
              <div>
                <h2 className="text-2xl font-extrabold text-foreground mb-4">
                  Deine Aufgaben
                </h2>
                <ul className="space-y-3">
                  {job.key_tasks.map((task, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-extrabold text-foreground mb-4">
                  Das bringst Du mit
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: CTA + Benefits */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Apply Card */}
                <div className="job-card">
                  <h3 className="text-lg font-extrabold text-foreground mb-3">Jetzt bewerben</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Interessiert? Schicke uns Deine Bewerbung – wir melden uns schnell zurück!
                  </p>
                  <ApplicationForm jobId={job.id} minimal />
                </div>

                {/* Benefits Card */}
                <div className="bg-blue/5 border-l-4 border-blue p-4 rounded-lg">
                  <h3 className="text-lg font-extrabold text-foreground mb-3">Das erwartet Dich</h3>
                  <ul className="space-y-2">
                    {job.benefits.slice(0, 4).map((benefit, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <span className="text-blue font-bold">✓</span>
                        <span className="text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
