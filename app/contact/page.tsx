import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Terminal, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h1 className="text-4xl font-bold md:text-5xl mb-4">
            <span className="text-gray-500">$</span> <span className="gradient-text">./contact.sh</span>
          </h1>
          <p className="text-xl text-gray-300">
            <span className="text-cyan-400">{"// "}</span>Établissons une connexion
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gray-800 border-2 border-cyan-500/30 hover:border-cyan-400/50 transition-all">
              <CardHeader>
                <CardTitle className="text-cyan-400 font-mono flex items-center">
                  <Terminal className="mr-2 h-5 w-5" />
                  Connection established
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4 font-mono">
                  <div className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg border border-blue-500/20">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-gray-400 text-xs">EMAIL</p>
                      <a
                        href="mailto:hela.addar17@gmail.com"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        hela.addar17@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg border border-green-500/20">
                    <Phone className="h-5 w-5 text-green-400" />
                    <div>
                      <p className="text-gray-400 text-xs">TÉLÉPHONE</p>
                      <span className="text-white">07-43-10-44-52</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg border border-purple-500/20">
                    <MapPin className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="text-gray-400 text-xs">LOCALISATION</p>
                      <span className="text-white">Paris, France</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-pink-500/30 hover:border-pink-400/50 transition-all">
              <CardHeader>
                <CardTitle className="text-pink-400 font-mono">Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/10 font-mono justify-start"
                  asChild
                >
                  <a href="https://github.com/hela170" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    github.com/hela170
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/10 font-mono justify-start"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/hela-addar-39953532b/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    linkedin.com/in/hela-addar
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-green-500/30 hover:border-green-400/50 transition-all">
              <CardHeader>
                <CardTitle className="text-green-400 font-mono">Disponibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Status:</span>
                    <span className="text-green-400">🟢 Disponible</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Réponse:</span>
                    <span className="text-blue-400">{"< 24h"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Timezone:</span>
                    <span className="text-purple-400">UTC+1 (Paris)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-2 border-orange-500/30 hover:border-orange-400/50 transition-all">
            <CardHeader>
              <CardTitle className="text-orange-400 font-mono flex items-center">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-blue-400 font-mono">
                      firstName *
                    </Label>
                    <Input
                      id="firstName"
                      className="bg-gray-700 border-blue-500/50 text-white font-mono focus:border-blue-400"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-purple-400 font-mono">
                      lastName *
                    </Label>
                    <Input
                      id="lastName"
                      className="bg-gray-700 border-purple-500/50 text-white font-mono focus:border-purple-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-green-400 font-mono">
                    email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-gray-700 border-green-500/50 text-white font-mono focus:border-green-400"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-pink-400 font-mono">
                    subject *
                  </Label>
                  <Input
                    id="subject"
                    className="bg-gray-700 border-pink-500/50 text-white font-mono focus:border-pink-400"
                    placeholder="Collaboration opportunity"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-cyan-400 font-mono">
                    message *
                  </Label>
                  <Textarea
                    id="message"
                    className="bg-gray-700 border-cyan-500/50 text-white font-mono min-h-[150px] focus:border-cyan-400"
                    placeholder="Bonjour Hela,&#10;&#10;Je vous contacte concernant..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 font-mono text-lg py-3"
                >
                  <Terminal className="mr-2 h-5 w-5" />
                  execute send()
                </Button>
              </form>

              <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-cyan-500/20">
                <p className="text-gray-400 font-mono text-xs">
                  <span className="text-cyan-400">$</span> echo "Merci pour votre message !"
                </p>
                <p className="text-gray-400 font-mono text-xs mt-1">
                  <span className="text-cyan-400">{"// "}</span>Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Terminal Output */}
        <div className="mt-16">
          <Card className="bg-gray-800 border-2 border-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30">
            <CardContent className="p-6">
              <pre className="font-mono text-sm">
                <code className="gradient-text">
                  {`$ curl -X POST https://hela-addar.dev/api/contact
{
  "status": "ready",
  "message": "Système de contact opérationnel",
  "response_time": "< 24h",
  "languages": ["fr", "ar", "en"],
  "topics": [
    "Opportunités de stage",
    "Projets collaboratifs", 
    "Questions techniques",
    "Networking professionnel"
  ]
}`}
                </code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
