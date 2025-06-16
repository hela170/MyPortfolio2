"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Terminal, Code, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const codeLines = [
    "class Developer {",
    "  constructor() {",
    "    this.name = 'Hela ADDAR';",
    "    this.role = 'Étudiante BUT Informatique';",
    "    this.location = 'Paris, France';",
    "    this.skills = ['Python', 'Java', 'JavaScript'];",
    "    this.passion = 'Nouvelles technologies';",
    "  }",
    "",
    "  getInfo() {",
    "    return `${this.name} - ${this.role}`;",
    "  }",
    "}",
    "",
    "const hela = new Developer();",
    "console.log(hela.getInfo());",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < codeLines.join("\n").length) {
        setTypedText(codeLines.join("\n").substring(0, currentIndex))
        setCurrentIndex((prev) => prev + 1)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-4 text-sm text-cyan-300">
            <span className="text-gray-500">user@portfolio:~$</span> whoami
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            <span className="text-white">Hela</span>
            <span className="gradient-text"> ADDAR</span>
          </h1>
          <div className="mb-8 text-xl text-purple-300">
            <span className="text-gray-500">{">"}</span> Étudiante BUT Informatique
          </div>
          <p className="mb-8 text-lg leading-relaxed text-gray-300 max-w-lg">
            <span className="text-blue-400">{"// "}</span>Étudiante en développement logiciel et nouvelles technologies.
            <br />
            <span className="text-green-400">{"// "}</span>En quête de défis techniques et de projets innovants.
            <br />
            <span className="text-pink-400">{"// "}</span>Actuellement à l'IUT Sorbonne Paris Nord.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 font-mono"
              asChild
            >
              <Link href="/contact">
                <Terminal className="mr-2 h-4 w-4" />
                ./contact.sh
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gradient-to-r from-green-500 to-cyan-500 text-green-400 hover:bg-green-500/10 font-mono border-2 border-green-500"
              asChild
            >
              <Link href="/projects">
                <Code className="mr-2 h-4 w-4" />
                ls ./projects
              </Link>
            </Button>
          </div>
        </div>
        <div className="bg-gray-800 border-2 border-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-lg p-6 shadow-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-400 ml-4">developer.js</span>
          </div>
          <pre className="text-sm leading-relaxed min-h-[300px]">
            <code className="gradient-text">
              {typedText}
              <span className="animate-pulse">|</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
