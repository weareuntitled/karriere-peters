import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { JobsGrid } from '@/components/jobs-grid'
import { Benefits } from '@/components/benefits'
import { RoleDetails } from '@/components/role-details'
import { Process } from '@/components/process'
import { FAQ } from '@/components/faq'
import { ApplySection } from '@/components/apply-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <JobsGrid />
        <Benefits />
        <RoleDetails />
        <Process />
        <FAQ />
        <ApplySection />
      </main>
      <SiteFooter />
    </div>
  )
}
