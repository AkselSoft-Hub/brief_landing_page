import '@/assets/styles/globals.css'

import type { Metadata } from 'next'
import Link from 'next/link'

import LightLogo from '@/assets/icons/LightLogo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { fontAntiqueOlive, fontLabGrotesque, fontSans } from '@/lib/constants/fonts'
import { cn } from '@/lib/utils/cn'

import Providers from './providers'

export const metadata: Metadata = {
  title: 'Manifest AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontAntiqueOlive.variable,
          fontLabGrotesque.variable,
        )}
      >
        <Providers>
          <main className="min-h-screen flex flex-col">
            <nav
              style={{
                background:
                  'linear-gradient(180deg, #F4F2F4 10.53%, rgba(244, 242, 244, 0.00) 100%)',
                backdropFilter: 'blur(1px)',
              }}
              className={`sticky top-0 w-full p-3 flex items-center justify-between z-10`}
            >
              <div className="flex items-center gap-3">
                <Link href="/">
                  <LightLogo />
                </Link>
                <Badge variant="secondary" className="sm:block hidden">
                  EARLY ACCESS
                </Badge>
              </div>
              <Button variant="secondary">
                <Link href="./login">Login</Link>
              </Button>
            </nav>
            {children}
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
