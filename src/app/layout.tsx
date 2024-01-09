import type { Metadata } from 'next'
import { barlow } from '@/app/ui/fonts';
import '@/app/ui/global.css';

export const metadata: Metadata = {
  title: 'Frontend Mentor | Rock, Paper, Scissors, Lizard, Spock',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${barlow.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}