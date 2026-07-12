import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Karriere bei Spenglerei Peters | Spengler / Klempner (m/w/d) gesucht',
  description:
    'Werde Teil unseres Familienbetriebs. Wir suchen einen Spengler / Klempner (m/w/d) in Festanstellung. Faire Bezahlung, moderne Werkzeuge und ein starkes Team, das sein Handwerk liebt.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#3d6a8c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${archivo.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
