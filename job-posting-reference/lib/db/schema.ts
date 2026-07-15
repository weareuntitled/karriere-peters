import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core'

export const jobApplications = pgTable('job_applications', {
  id: serial('id').primaryKey(),
  position: text('position').notNull().default('Spengler / Klempner (m/w/d)'),
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  experience: text('experience'),
  availability: text('availability'),
  message: text('message'),
  jobId: integer('job_id'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})
