import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Solix Hub - Advanced Executor",
  description: "Unlock the full potential of your cheating experience with Solix Hub",
  generator: "v0.app",
  icons: {
    icon: "https://cdn.imgchest.com/files/5a2b4cb4f053.webp",
    apple: "https://cdn.imgchest.com/files/5a2b4cb4f053.webp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
        <Script
          src="https://checkout.komerza.com/embed/embed.iife.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

