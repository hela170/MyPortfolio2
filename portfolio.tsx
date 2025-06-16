"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, Terminal, Code, Database, Cpu, Monitor } from "lucide-react"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const codeLines = [
    "class Developer {",
    "  constructor() {",
    "    this.name = 'Hela ADDAR';",
    "    this.role = 'Étudiante BUT Informatique';",
    "    this.location = 'Paris, France';",
    "    this.skills = ['Python', 'Java', 'JavaScript'];",
    "  }",
    "}",
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      if (currentIndex < codeLines.join("\n").length) {
        setTypedText(codeLines.join("\n").substring(0, currentIndex))
        setCurrentIndex((prev) => prev + 1)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [currentIndex])

  const skills = [
    { name: "Python", icon: Code, color: "from-yellow-400 to-yellow-600" },
    { name: "JavaScript", icon: Code, color: "from-yellow-300 to-yellow-500" },
    { name: "Java", icon: Code, color: "from-red-400 to-red-600" },
    { name: "HTML/CSS", icon: Monitor, color: "from-orange-400 to-orange-600" },
    { name: "SQL", icon: Database, color: "from-blue-400 to-blue-600" },
    { name: "Linux", icon: Terminal, color: "from-green-400 to-green-600" },
    { name: "Git", icon: Code, color: "from-purple-400 to-purple-600" },
    { name: "Shell", icon: Terminal, color: "from-gray-400 to-gray-600" },
  ]

  const projects = [
    {
      title: "SAE_Python_ModuleConception",
      description:
        "Développement modulaire avec analyse de complexité algorithmique et manipulation de structures de données avancées.",
      technologies: ["Python", "Algorithmique", "POO"],
      lines: "~500 lignes",
      status: "✓ Completed",
    },
    {
      title: "SAE_Database_Management",
      description: "Conception de bases de données relationnelles avec requêtes SQL optimisées et modélisation UML.",
      technologies: ["SQL", "UML", "PostgreSQL"],
      lines: "~300 lignes",
      status: "✓ Completed",
    },
    {
      title: "SAE_Interface_Development",
      description:
        "Création d'interfaces utilisateur responsives avec focus sur l'expérience utilisateur et l'accessibilité.",
      technologies: ["HTML", "CSS", "JavaScript"],
      lines: "~800 lignes",
      status: "✓ Completed",
    },
    {
      title: "SAE_Linux_Configuration",
      description: "Administration système Linux complète avec scripts d'automatisation et configuration réseau.",
      technologies: ["Linux", "Bash", "Networking"],
      lines: "~200 lignes",
      status: "✓ Completed",
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono relative overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500/20 text-xs animate-bounce"
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

      {/* Scan lines effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-green-500/30 bg-gray-900/90 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <Terminal className="h-5 w-5 text-green-400" />
            <span className="text-lg font-bold">~/hela-addar</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm hover:text-green-300 transition-colors">
              ./about
            </a>
            <a href="#projects" className="text-sm hover:text-green-300 transition-colors">
              ./projects
            </a>
            <a href="#skills" className="text-sm hover:text-green-300 transition-colors">
              ./skills
            </a>
            <a href="#contact" className="text-sm hover:text-green-300 transition-colors">
              ./contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-6 pt-16">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4 text-sm text-green-300">
              <span className="text-gray-500">user@portfolio:~$</span> whoami
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              <span className="text-white">Hela</span>
              <span className="text-green-400">ADDAR</span>
            </h1>
            <div className="mb-8 text-xl text-green-300">
              <span className="text-gray-500">{">"}</span> Étudiante BUT Informatique
            </div>
            <p className="mb-8 text-lg leading-relaxed text-gray-300 max-w-lg">
              <span className="text-green-400">{"// "}</span>Passionnée par le développement logiciel et les nouvelles
              technologies.
              <br />
              <span className="text-green-400">{"// "}</span>En quête de défis techniques et de projets innovants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-500 text-black hover:bg-green-400 font-mono" asChild>
                <a href="#contact">
                  <Terminal className="mr-2 h-4 w-4" />
                  ./contact.sh
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10 font-mono"
                asChild
              >
                <a href="#projects">
                  <Code className="mr-2 h-4 w-4" />
                  ls ./projects
                </a>
              </Button>
            </div>
          </div>
          <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6 shadow-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-400 ml-4">developer.js</span>
            </div>
            <pre className="text-sm text-green-400 leading-relaxed">
              <code>
                {typedText}
                <span className="animate-pulse">|</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-green-500/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-16 text-3xl font-bold md:text-4xl">
            <span className="text-gray-500">$</span> cat about.md
          </h2>
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="bg-gray-800 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Monitor className="mr-2 h-5 w-5" />
                  Formation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-green-500 pl-6">
                  <h4 className="font-bold text-white">BUT Informatique</h4>
                  <p className="text-gray-300">IUT Sorbonne Paris Nord - Villetaneuse</p>
                  <p className="text-sm text-green-400">2024-2027 | En cours</p>
                </div>
                <div className="border-l-2 border-green-500/50 pl-6">
                  <h4 className="font-bold text-white">Prépa TSI</h4>
                  <p className="text-gray-300">Formation validée</p>
                  <p className="text-sm text-green-400">2023-2024 | ✓ Completed</p>
                </div>
                <div className="border-l-2 border-green-500/50 pl-6">
                  <h4 className="font-bold text-white">Bac STI2D</h4>
                  <p className="text-gray-300">Mention Bien</p>
                  <p className="text-sm text-green-400">2023 | ✓ Completed</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Cpu className="mr-2 h-5 w-5" />
                  Expérience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-green-500 pl-6">
                  <h4 className="font-bold text-white">Stage Worldline</h4>
                  <p className="text-gray-300">Découverte du développement informatique</p>
                  <p className="text-sm text-green-400">2023 | Stage de 3ème</p>
                </div>
                <div className="border-l-2 border-green-500/50 pl-6">
                  <h4 className="font-bold text-white">Bénévolat Mairie</h4>
                  <p className="text-gray-300">Support administratif et organisationnel</p>
                  <p className="text-sm text-green-400">En cours</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-800/50 border-t border-green-500/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-16 text-3xl font-bold md:text-4xl">
            <span className="text-gray-500">$</span> ls -la ./projects/
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800 border-green-500/30 hover:border-green-400 transition-all group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-green-400 font-mono text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400 flex items-center space-x-4 mt-2">
                        <span>{project.status}</span>
                        <span>•</span>
                        <span>{project.lines}</span>
                      </CardDescription>
                    </div>
                    <Code className="h-5 w-5 text-green-500 group-hover:text-green-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-green-500/50 text-green-400 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 border-t border-green-500/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-16 text-3xl font-bold md:text-4xl">
            <span className="text-gray-500">$</span> cat skills.json
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-800 border-green-500/30 hover:border-green-400 transition-all group text-center p-6"
                >
                  <div
                    className={`mx-auto mb-4 w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-mono text-green-400 font-bold">{skill.name}</h3>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Card className="bg-gray-800 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-green-400 font-mono">Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 font-mono">
                <div className="flex justify-between">
                  <span className="text-white">Français</span>
                  <span className="text-green-400">native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Arabe</span>
                  <span className="text-green-400">fluent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">English</span>
                  <span className="text-green-400">intermediate</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-green-400 font-mono">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 font-mono">
                {[
                  "Communication",
                  "Collaboration",
                  "Problem Solving",
                  "Time Management",
                  "Critical Thinking",
                  "Curiosity",
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-400">{">"}</span>
                    <span className="text-white">{skill}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-800/50 border-t border-green-500/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-16 text-3xl font-bold md:text-4xl">
            <span className="text-gray-500">$</span> ./contact.sh
          </h2>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-8 text-xl font-bold text-green-400 font-mono">
                <Terminal className="inline mr-2 h-5 w-5" />
                Connection established
              </h3>
              <div className="space-y-6 font-mono">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-green-400" />
                  <a href="mailto:hela.addar17@gmail.com" className="text-white hover:text-green-400 transition-colors">
                    hela.addar17@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-green-400" />
                  <span className="text-white">07-43-10-44-52</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span className="text-white">Paris, France</span>
                </div>
              </div>
              <div className="mt-8 flex space-x-4">
                <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10 font-mono">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10 font-mono">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>

            <Card className="bg-gray-800 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-green-400 font-mono flex items-center">
                  <Terminal className="mr-2 h-5 w-5" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-green-400 font-mono">
                        firstName
                      </Label>
                      <Input id="firstName" className="bg-gray-700 border-green-500/50 text-white font-mono" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-green-400 font-mono">
                        lastName
                      </Label>
                      <Input id="lastName" className="bg-gray-700 border-green-500/50 text-white font-mono" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-green-400 font-mono">
                      email
                    </Label>
                    <Input id="email" type="email" className="bg-gray-700 border-green-500/50 text-white font-mono" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-green-400 font-mono">
                      message
                    </Label>
                    <Textarea
                      id="message"
                      className="bg-gray-700 border-green-500/50 text-white font-mono min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-500 text-black hover:bg-green-400 font-mono">
                    <Terminal className="mr-2 h-4 w-4" />
                    execute send()
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/20 py-8 px-6">
        <div className="container mx-auto max-w-6xl text-center font-mono">
          <p className="text-gray-400">
            <span className="text-green-400">©</span> 2024 Hela ADDAR
            <span className="text-green-400 mx-2">|</span>
            <span className="text-gray-500">Built with ❤️ and lots of ☕</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
