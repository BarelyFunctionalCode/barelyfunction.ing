import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from './registry';

const font = Roboto_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Barely Functional',
  description: 'The Collection of everything I have done so far',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={font.className}>
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}