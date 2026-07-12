'use server'

import { db } from '@/lib/db'
import { jobApplications } from '@/lib/db/schema'

export type ApplyState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitApplication(
  _prev: ApplyState,
  formData: FormData,
): Promise<ApplyState> {
  const fullName = String(formData.get('fullName') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const experience = String(formData.get('experience') ?? '').trim()
  const availability = String(formData.get('availability') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const jobIdRaw = String(formData.get('jobId') ?? '').trim()
  const jobId = jobIdRaw ? parseInt(jobIdRaw, 10) : null

  if (!fullName || fullName.length < 2) {
    return { status: 'error', message: 'Bitte gib deinen vollständigen Namen an.' }
  }
  if (!EMAIL_RE.test(email)) {
    return { status: 'error', message: 'Bitte gib eine gültige E-Mail-Adresse an.' }
  }

  try {
    await db.insert(jobApplications).values({
      fullName,
      email,
      phone: phone || null,
      experience: experience || null,
      availability: availability || null,
      message: message || null,
      jobId: jobId,
    })
  } catch (error) {
    console.log('[v0] submitApplication error:', error)
    return {
      status: 'error',
      message: 'Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.',
    }
  }

  return {
    status: 'success',
    message: 'Vielen Dank! Deine Bewerbung ist bei uns eingegangen. Wir melden uns in Kürze.',
  }
}
