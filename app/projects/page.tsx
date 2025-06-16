import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Network, Users } from "lucide-react"
import ProjectModal from "../../components/project-modal"

export default function ProjectsPage() {
  const projects = [
    {
      title: "jeu-echecs-java.md",
      subtitle: "SAE R 201 - Jeu d'Échecs en Java",
      description:
        "Développement d'un jeu d'échecs complet en Java avec interface graphique. Implémentation des règles du jeu, gestion des mouvements des pièces et interface utilisateur intuitive.",
      technologies: ["Java", "UML", "POO", "Modélisation"],
      status: "✓ Completed",
      icon: Code,
      borderColor: "border-blue-500/30",
      hoverColor: "hover:border-blue-400/50",
      pdfPath: "/pdfs/jeu-echecs-java.pdf",
      details: [
        "Modélisation UML complète",
        "Implémentation des règles d'échecs",
        "Interface graphique intuitive",
        "Architecture orientée objet",
      ],
      fullContent: {
        objective:
          "Modéliser en UML (diagramme de classes) et implémenter en Java une partie d'échecs simplifiée (ni roque, ni promotion, ni prise en passant) entre 2 joueurs humains, la partie étant arbitrée par le programme.",
        context:
          "Développement d'un jeu d'échecs complet respectant les règles de base, avec une interface utilisateur permettant à deux joueurs humains de s'affronter.",
        codeExample: `// Exemple de classe Piece
public abstract class Piece {
    protected Couleur couleur;
    protected Position position;
    
    public Piece(Couleur couleur, Position position) {
        this.couleur = couleur;
        this.position = position;
    }
    
    public abstract boolean peutSeDeplacer(Position destination, Echiquier echiquier);
    
    public Couleur getCouleur() {
        return couleur;
    }
}

// Exemple de classe Roi
public class Roi extends Piece {
    public Roi(Couleur couleur, Position position) {
        super(couleur, position);
    }
    
    @Override
    public boolean peutSeDeplacer(Position destination, Echiquier echiquier) {
        int deltaX = Math.abs(destination.getX() - position.getX());
        int deltaY = Math.abs(destination.getY() - position.getY());
        
        // Le roi peut se déplacer d'une case dans toutes les directions
        return deltaX <= 1 && deltaY <= 1;
    }
}`,
      },
    },
    {
      title: "exploitation-base-donnees.md",
      subtitle: "SAE 1.03 - Exploitation d'une Base de Données",
      description:
        "Conception, création et exploitation d'une base de données relationnelle pour un système de gestion. Écriture de requêtes SQL complexes, optimisation des performances et gestion des données.",
      technologies: ["SQL", "MySQL", "Python", "Modélisation"],
      status: "✓ Completed",
      icon: Database,
      borderColor: "border-purple-500/30",
      hoverColor: "hover:border-purple-400/50",
      pdfPath: "/pdfs/exploitation-base-donnees.pdf",
      details: [
        "Modélisation de bases de données",
        "Requêtes SQL complexes",
        "Script Python de génération",
        "Optimisation des performances",
      ],
      fullContent: {
        objective:
          "Conception, création et exploitation d'une base de données relationnelle pour un système de gestion. Écriture de requêtes SQL complexes, optimisation des performances et gestion des données.",
        context:
          "L'entreprise fictive SocialConnect, un réseau social en pleine croissance, souhaite disposer d'un outil performant pour centraliser, gérer et analyser les données liées à l'engagement des utilisateurs. Actuellement, les données sont dispersées dans différents fichiers, ce qui complique leur exploitation. Le projet vise à concevoir une base de données relationnelle regroupant ces informations et à produire des visualisations claires pour faciliter la prise de décision stratégique.",
        codeExample: `# Script Python pour générer des requêtes SQL
import pandas as pd

with open(sql_file, "w", encoding="utf-8") as sql:
    for _, row in data.iterrows():
        # Préparer les données pour la table utilisateur
        genre = f"'{row['F (Sexe)']}'" if not pd.isnull(row['F (Sexe)']) else "NULL"
        username = f"'Utilisateur_{row['Id']}'"  # Exemple de nom utilisateur généré
        date_naissance = "NULL"  # A adapter si les dates sont présentes
        niveau_education = f"'{row['I (Niveau d éducation)']}'" if not pd.isnull(row['I (Niveau d éducation)']]) else "NULL"
        type_abonnement = f"'{row['J (Type d abonnement)']}'" if not pd.isnull(row['J (Type d abonnement)']]) else "NULL"

        sql.write(f"INSERT INTO utilisateur (genre, username, date_de_naissance, niveau_d_education, type_d_abonnement) "
                  f"VALUES ({genre}, {username}, {date_naissance}, {niveau_education}, {type_abonnement});\\n")`,
        sqlExample: `-- Exemples d'insertions générées pour SocialConnect
INSERT INTO Session (datedebut, date_fin, localisation, Id_utilisateur) VALUES (NULL, NULL, 'Paris', 2);
INSERT INTO Notification (Id_utilisateur, contenu) VALUES (2, 'Notification utilisateur 2');
INSERT INTO publication (Id_page, Id_utilisateur, contenu, date_publication) VALUES (1, 2, 'Publication utilisateur 2', NULL);
INSERT INTO reaction (Id_page, Id_utilisateur, Id_publication, Id_utilisateur_1, type, contenu) VALUES (1, 2, 1, 2, 'like', 'Réaction de l'utilisateur 2');
INSERT INTO rejoint (Id_utilisateur, Id_page, Id_groupe) VALUES (2, 1, 1);
INSERT INTO utilisateur (genre, username, date_de_naissance, niveau_d_education, type_d_abonnement) VALUES ('Homme', 'Utilisateur_3', NULL, 'Doctorat', 'Premium');`,
      },
    },
    {
      title: "sae-systemes-reseaux.md",
      subtitle: "SAE 2.03 & 1.03 - Systèmes & Réseaux",
      description:
        "Configuration et déploiement complet de services réseau avec administration système Linux. Installation de serveurs, configuration des protocoles réseau, sécurisation des communications et scripts d'automatisation.",
      technologies: ["Linux", "Apache", "DNS", "DHCP", "Firewall", "Bash", "Administration"],
      status: "✓ Completed",
      icon: Network,
      borderColor: "border-green-500/30",
      hoverColor: "hover:border-green-400/50",
      pdfPath: "/pdfs/sae-systemes-reseaux.pdf",
      details: [
        "Configuration de serveurs Linux complets",
        "Mise en place de services DNS/DHCP",
        "Sécurisation avec firewall et règles iptables",
        "Scripts d'automatisation et monitoring",
        "Administration système avancée",
        "Configuration réseau et troubleshooting",
      ],
      fullContent: {
        objective:
          "Installer, configurer et sécuriser un environnement de services réseau complet sous Linux. Mettre en place une infrastructure réseau fonctionnelle avec des services essentiels et des mesures de sécurité appropriées.",
        context:
          "Dans le cadre de la formation BUT Informatique, ce projet combine l'installation de services réseau (SAE 2.03) et la configuration système Linux (SAE 1.03). L'objectif est de créer une infrastructure réseau complète et sécurisée pour une petite entreprise.",
        codeExample: `#!/bin/bash
# Script d'installation et configuration automatique des services

# Installation des paquets nécessaires
apt update && apt upgrade -y
apt install -y apache2 bind9 isc-dhcp-server iptables-persistent

# Configuration Apache
systemctl enable apache2
systemctl start apache2

# Configuration DNS (BIND9)
cat > /etc/bind/named.conf.local << EOF
zone "entreprise.local" {
    type master;
    file "/etc/bind/db.entreprise.local";
};
EOF

# Configuration DHCP
cat > /etc/dhcp/dhcpd.conf << EOF
subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.100 192.168.1.200;
    option routers 192.168.1.1;
    option domain-name-servers 192.168.1.10;
}
EOF

# Configuration du firewall
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT
iptables -A INPUT -p udp --dport 53 -j ACCEPT
iptables -A INPUT -p udp --dport 67 -j ACCEPT

echo "Configuration terminée avec succès!"`,
      },
    },
    {
      title: "sae-gestion-projet.md",
      subtitle: "SAE 1.05 - Gestion de Projet & Travail d'Équipe",
      description:
        "Analyse et recueil des besoins pour améliorer les services de l'IUT, combiné avec la coordination et organisation du travail en équipe. Enquêtes, interviews, propositions d'améliorations et mise en place d'outils collaboratifs.",
      technologies: ["Analyse", "UML", "Enquêtes", "Git", "GitHub", "Communication", "Méthodologie"],
      status: "✓ Completed",
      icon: Users,
      borderColor: "border-pink-500/30",
      hoverColor: "hover:border-pink-400/50",
      pdfPath: "/pdfs/sae-gestion-projet.pdf",
      details: [
        "Analyse des besoins utilisateurs et clients",
        "Réalisation d'enquêtes et interviews terrain",
        "Modélisation UML des processus métier",
        "Coordination d'équipe de développement",
        "Mise en place d'outils collaboratifs (Git, Slack)",
        "Gestion de conflits et communication",
        "Application des méthodologies Agiles",
        "Propositions d'améliorations concrètes",
      ],
      fullContent: {
        objective:
          "Mener une enquête complète pour l'amélioration des services de l'IUT tout en coordonnant efficacement le travail d'équipe. Formaliser les attentes clients et organiser la collaboration pour maximiser la productivité.",
        context:
          "Ce projet combine deux aspects essentiels : le recueil de besoins auprès de la commission de la vie étudiante de l'IUT et l'organisation du travail collaboratif. L'équipe doit analyser les besoins, proposer des solutions et gérer efficacement la collaboration entre les membres.",
        codeExample: `# Exemple de script d'analyse des données d'enquête
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Chargement des données d'enquête
data = pd.read_csv('enquete_iut.csv')

# Analyse des réponses
satisfaction_moyenne = data['satisfaction'].mean()
print(f"Satisfaction moyenne: {satisfaction_moyenne:.2f}/5")

# Visualisation des résultats
plt.figure(figsize=(10, 6))
sns.countplot(data=data, x='service_utilise', hue='satisfaction_niveau')
plt.title('Satisfaction par service utilisé')
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('analyse_satisfaction.png')

# Génération du rapport automatique
rapport = f"""
RAPPORT D'ANALYSE - ENQUÊTE IUT
==============================

Participants: {len(data)} étudiants
Satisfaction moyenne: {satisfaction_moyenne:.2f}/5

Recommandations:
- Améliorer les services les moins bien notés
- Renforcer la communication sur les services existants
- Mettre en place un système de feedback continu
"""

with open('rapport_enquete.txt', 'w') as f:
    f.write(rapport)`,
      },
    },
    {
      title: "SAE_Python_ModuleConception",
      subtitle: "SAE Python - Conception Modulaire",
      description:
        "Développement modulaire avec analyse de complexité algorithmique et manipulation de structures de données avancées. Conception d'un programme Python respectant les bonnes pratiques de développement.",
      technologies: ["Python", "Algorithmique", "POO", "Analyse de complexité", "Tests unitaires"],
      status: "✓ Completed",
      icon: Code,
      borderColor: "border-cyan-500/30",
      hoverColor: "hover:border-cyan-400/50",
      pdfPath: "/pdfs/sae-python-module.pdf",
      details: [
        "Conception modulaire d'un programme Python",
        "Analyse de la complexité algorithmique",
        "Manipulation avancée de tableaux et chaînes",
        "Implémentation de structures de données",
        "Tests unitaires et documentation complète",
        "Optimisation des performances",
      ],
      fullContent: {
        objective:
          "Concevoir et développer un programme Python modulaire en appliquant les principes de la programmation orientée objet et en analysant la complexité algorithmique des solutions proposées.",
        context:
          "Ce projet vise à développer les compétences en conception logicielle à travers la création d'un programme Python complexe. L'accent est mis sur la modularité, la réutilisabilité du code et l'efficacité algorithmique.",
        codeExample: `"""
Module de gestion des structures de données avancées
Analyse de complexité: O(n log n) pour le tri, O(1) pour l'accès
"""

class StructureDonnees:
    def __init__(self):
        self.donnees = []
        self.index = {}
    
    def ajouter(self, element, cle=None):
        """
        Ajoute un élément à la structure
        Complexité: O(1) amortie
        """
        if cle:
            self.index[cle] = len(self.donnees)
        self.donnees.append(element)
    
    def rechercher(self, cle):
        """
        Recherche un élément par sa clé
        Complexité: O(1)
        """
        if cle in self.index:
            return self.donnees[self.index[cle]]
        return None
    
    def trier(self, reverse=False):
        """
        Trie les données
        Complexité: O(n log n)
        """
        self.donnees.sort(reverse=reverse)
        # Reconstruction de l'index après tri
        self._reconstruire_index()
    
    def _reconstruire_index(self):
        """Méthode privée pour reconstruire l'index"""
        # Implémentation de la reconstruction
        pass

# Tests unitaires
import unittest

class TestStructureDonnees(unittest.TestCase):
    def setUp(self):
        self.structure = StructureDonnees()
    
    def test_ajout_element(self):
        self.structure.ajouter("test", "cle1")
        self.assertEqual(self.structure.rechercher("cle1"), "test")
    
    def test_tri_elements(self):
        elements = [3, 1, 4, 1, 5]
        for elem in elements:
            self.structure.ajouter(elem)
        self.structure.trier()
        self.assertEqual(self.structure.donnees, [1, 1, 3, 4, 5])

if __name__ == "__main__":
    unittest.main()`,
      },
    },
  ]

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h1 className="text-4xl font-bold md:text-5xl mb-4">
            <span className="text-gray-500">$</span> <span className="gradient-text">ls -la ./projects/</span>
          </h1>
          <p className="text-xl text-gray-300">
            <span className="text-green-400">{"// "}</span>Mes projets universitaires et réalisations techniques
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <ProjectModal key={index} project={project}>
                <Card
                  className={`bg-gray-800 border-2 ${project.borderColor} ${project.hoverColor} transition-all group cursor-pointer`}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="gradient-text font-mono text-lg flex items-center">
                          <Icon className="mr-2 h-5 w-5" />
                          {project.title}
                        </CardTitle>
                        {project.subtitle && <p className="text-gray-400 text-sm mt-1 font-mono">{project.subtitle}</p>}
                        <CardDescription className="text-gray-400 flex items-center space-x-4 mt-2">
                          <span>{project.status}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">Réalisations :</h4>
                      <ul className="space-y-1">
                        {project.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-gray-400 text-xs flex items-start">
                            <span
                              className={`mr-2 ${
                                detailIndex % 4 === 0
                                  ? "text-blue-400"
                                  : detailIndex % 4 === 1
                                    ? "text-green-400"
                                    : detailIndex % 4 === 2
                                      ? "text-purple-400"
                                      : "text-pink-400"
                              }`}
                            >
                              •
                            </span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className={`font-mono text-xs ${
                            techIndex % 5 === 0
                              ? "border-blue-500/50 text-blue-400"
                              : techIndex % 5 === 1
                                ? "border-green-500/50 text-green-400"
                                : techIndex % 5 === 2
                                  ? "border-purple-500/50 text-purple-400"
                                  : techIndex % 5 === 3
                                    ? "border-pink-500/50 text-pink-400"
                                    : "border-orange-500/50 text-orange-400"
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ProjectModal>
            )
          })}
        </div>

        <div className="mt-16">
          <Card className="bg-gray-800 border-2 border-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30">
            <CardHeader>
              <CardTitle className="gradient-text font-mono">competences-developpees.log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <h4 className="text-white font-bold mb-3">Développement Logiciel</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>Maîtrise des langages Java et Python
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-green-400 mr-2">•</span>Création d'applications web avec Flask
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>Conception d'interfaces utilisateur ergonomiques
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-pink-400 mr-2">•</span>Application des principes de la POO
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3">Infrastructure & Données</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="text-gray-300 flex items-start">
                      <span className="text-orange-400 mr-2">•</span>Administration de systèmes Linux
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>Déploiement et configuration de serveurs
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-red-400 mr-2">•</span>Mise en place de solutions de sécurité réseau
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>Conception et gestion de bases de données SQL
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3">Management & Collaboration</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="text-gray-300 flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>Application des méthodologies Agiles
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-teal-400 mr-2">•</span>Coordination d'équipes de développement
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-rose-400 mr-2">•</span>Conduite d'analyses de besoins clients
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>Rédaction de documentation technique détaillée
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800 border-2 border-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-lg p-6 inline-block">
            <p className="text-gray-300 font-mono">
              <span className="gradient-text">$</span> find ./projects -name "*.py" -o -name "*.js" -o -name "*.sql" -o
              -name "*.java" | wc -l
            </p>
            <p className="text-2xl font-bold gradient-text mt-2">5 projets majeurs</p>
            <p className="text-gray-400 text-sm mt-1">Projets universitaires complets avec documentation PDF</p>
          </div>
        </div>
      </div>
    </div>
  )
}
