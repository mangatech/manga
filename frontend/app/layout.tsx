import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MangaTech',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon-manga.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}