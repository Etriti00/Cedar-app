import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument",
})

export const metadata: Metadata = {
  title: "Cedar — AI Sales Fleet",
  description: "Deploy a fleet of 20 AI agents to automate your entire sales pipeline. Replace your SDR team, not your ambition.",
  openGraph: {
    title: "Cedar — AI Sales Fleet",
    description: "Deploy a fleet of 20 AI agents to automate your entire sales pipeline.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
