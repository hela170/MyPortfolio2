"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Code } from "lucide-react"

interface ProjectModalProps {
  project: {
    title: string
    subtitle?: string
    description: string
    technologies: string[]
    details: string[]
    pdfPath?: string
    fullContent?: {
      objective: string
      context: string
      codeExample?: string
      sqlExample?: string
    }
  }
  children: React.ReactNode
}

export default function ProjectModal({ project, children }: ProjectModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownloadPDF = () => {
    if (project.pdfPath) {
      // Créer un lien de téléchargement
      const link = document.createElement("a")
      link.href = project.pdfPath
      link.download = `${project.title.replace(".md", "")}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-800 border-2 border-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30">
        <DialogHeader>
          <DialogTitle className="gradient-text font-mono text-xl">{project.subtitle || project.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`font-mono ${
                  index % 5 === 0
                    ? "border-blue-500/50 text-blue-400"
                    : index % 5 === 1
                      ? "border-green-500/50 text-green-400"
                      : index % 5 === 2
                        ? "border-purple-500/50 text-purple-400"
                        : index % 5 === 3
                          ? "border-pink-500/50 text-pink-400"
                          : "border-orange-500/50 text-orange-400"
                }`}
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Objective */}
          {project.fullContent?.objective && (
            <Card className="bg-gray-700 border-2 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-blue-400 text-lg">Objectif</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{project.fullContent.objective}</p>
              </CardContent>
            </Card>
          )}

          {/* Context */}
          {project.fullContent?.context && (
            <Card className="bg-gray-700 border-2 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-purple-400 text-lg">Contexte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{project.fullContent.context}</p>
              </CardContent>
            </Card>
          )}

          {/* Code Example */}
          {project.fullContent?.codeExample && (
            <Card className="bg-gray-700 border-2 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-green-400 text-lg flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Exemple de Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto border border-cyan-500/20">
                  <code className="gradient-text text-sm font-mono">{project.fullContent.codeExample}</code>
                </pre>
              </CardContent>
            </Card>
          )}

          {/* SQL Example */}
          {project.fullContent?.sqlExample && (
            <Card className="bg-gray-700 border-2 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-orange-400 text-lg">Requêtes SQL Générées</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto border border-pink-500/20">
                  <code className="gradient-text text-sm font-mono">{project.fullContent.sqlExample}</code>
                </pre>
              </CardContent>
            </Card>
          )}

          {/* Download Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleDownloadPDF}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 font-mono"
            >
              <Download className="mr-2 h-4 w-4" />
              Télécharger le PDF
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
