import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "../components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hela ADDAR - Portfolio",
  description: "Portfolio de Hela ADDAR, étudiante en BUT Informatique",
  generator: "MyPortfolio | H.A",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-900 text-cyan-400 font-mono`}>
        <div className="min-h-screen relative overflow-hidden">
          {/* Matrix-like background effect */}
          <div className="fixed inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-pulse"></div>
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`absolute text-xs animate-bounce ${
                  i % 4 === 0
                    ? "text-blue-500/20"
                    : i % 4 === 1
                      ? "text-purple-500/20"
                      : i % 4 === 2
                        ? "text-pink-500/20"
                        : "text-green-500/20"
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </div>
            ))}
          </div>

          <Navigation />
          <main className="pt-16">{children}</main>
        </div>
      </body>
    </html>
  )
}
