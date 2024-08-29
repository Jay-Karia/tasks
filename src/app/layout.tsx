import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tasks",
  description: "📝 A simple task manager",
  icons: [
    {
      href: "/logo.png",
      url: "/logo.png",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn("h-full w-full border border-red-500", inter.className)}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
