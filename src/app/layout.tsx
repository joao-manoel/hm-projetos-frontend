import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '500', '700', '900'] })

export const metadata: Metadata = {
  title: 'HM Projetos',
  description: 'Escritório especializado em projetos arquitetônicos, segurança e inovação.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
