import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - Full Stack Developer & AI Specialist',
  description: 'Showcasing cutting-edge projects and expertise in AI, machine learning, and full-stack development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-text`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

