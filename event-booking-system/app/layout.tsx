import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "../components/Header"
import Footer from "../components/Footer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Event Booking and Management System",
  description: "Book and manage events easily",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gray-100 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

