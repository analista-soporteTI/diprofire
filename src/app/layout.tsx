import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import { META_PAGES } from '@consts/metaPages'
import { Navbar } from '@components/Navbar'
import { Footer } from '@components/sections/Footer'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: META_PAGES.HOME.title,
  description: META_PAGES.HOME.description
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={lato.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
