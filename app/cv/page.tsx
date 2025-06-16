"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

export default function CVPage() {
  const handleDownloadCV = () => {
    window.open("https://kapitainecrochet.my.canva.site/cv-professionnel-gris-simple", "_blank")
  }

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold md:text-5xl mb-4">
            <span className="text-gray-500">$</span> <span className="gradient-text">cat cv.pdf</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            <span className="text-orange-400">{"// "}</span>Curriculum Vitae - Hela ADDAR
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="bg-gray-800 border-2 border-gradient-to-r from-orange-500/30 via-pink-500/30 to-purple-500/30 w-full max-w-md hover:border-orange-400/50 transition-all">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">CV Professionnel</h2>
                <p className="text-gray-300 font-mono">Hela ADDAR - BUT Informatique</p>
              </div>

              <Button
                onClick={handleDownloadCV}
                className="w-full bg-gradient-to-r from-orange-600 to-pink-600 text-white hover:from-orange-500 hover:to-pink-500 font-mono text-lg py-3"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Voir le CV en ligne
              </Button>

              <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                <p className="text-gray-400 font-mono text-xs">
                  <span className="text-orange-400">$</span> file cv.pdf
                </p>
                <p className="text-gray-400 font-mono text-xs mt-1">
                  <span className="text-orange-400">{"// "}</span>Document PDF complet avec toutes les informations
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
