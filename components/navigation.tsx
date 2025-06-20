"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Terminal } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "./accueil", command: "cd ~", color: "hover:text-blue-400" },
    { href: "/about", label: "./à-propos", command: "cat about.md", color: "hover:text-purple-400" },
    { href: "/projects", label: "./projets", command: "ls projects/", color: "hover:text-green-400" },
    { href: "/skills", label: "./compétences", command: "cat skills.json", color: "hover:text-pink-400" },
    { href: "/cv", label: "./cv", command: "cat cv.pdf", color: "hover:text-orange-400" },
    { href: "/contact", label: "./contact", command: "./contact.sh", color: "hover:text-cyan-400" },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 bg-gray-900/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
          <Terminal className="h-5 w-5 text-cyan-400" />
          <span className="text-lg font-bold gradient-text">~/hela-addar</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${item.color} ${
                pathname === item.href ? "gradient-text font-bold" : "text-gray-300"
              }`}
              title={item.command}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <span className="text-sm text-gray-400">Menu</span>
        </div>
      </div>
    </nav>
  )
}
