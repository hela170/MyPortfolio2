import { CardDescription } from "@/components/ui/card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Network, Terminal, Globe, BarChart3, FileText, Gamepad2 } from "lucide-react"
import ProjectModal from "../../components/project-modal"

export default function ProjectsPage() {
  const projects = [
    {
      title: "SAE_01 – Implémentation",
      subtitle: "Création d'un réseau social",
      description:
        "Développement en Python d'un mini réseau social modélisé sous forme de graphe. Analyse des interactions entre utilisateurs (popularité, isolement, suggestions de connexions) en respectant des contraintes de structure et de performance.",
      technologies: ["Python", "Graphes", "Réseaux sociaux"],
      status: "✓ Completed",
      difficulty: "★★★★★",
      icon: Network,
      borderColor: "border-blue-500/30",
      hoverColor: "hover:border-blue-400/50",
      pdfPath: "/pdfs/sae-01-implementation.pdf",
      details: [
        "Modélisation de graphes sociaux",
        "Analyse des interactions utilisateurs",
        "Algorithmes de suggestion de connexions",
        "Optimisation des performances",
      ],
      fullContent: {
        objective:
          "Développer un mini réseau social en Python modélisé sous forme de graphe pour analyser les interactions entre utilisateurs et implémenter des fonctionnalités de suggestion de connexions.",
        context:
          "Ce projet vise à comprendre les structures de données complexes et leur application dans les réseaux sociaux. L'accent est mis sur l'analyse des relations entre utilisateurs et l'optimisation des algorithmes de recommandation.",
        codeExample: `# Classe principale du réseau social
class ReseauSocial:
    def __init__(self):
        self.utilisateurs = {}
        self.connexions = {}
    
    def ajouter_utilisateur(self, nom, age, ville):
        """Ajoute un nouvel utilisateur au réseau"""
        if nom not in self.utilisateurs:
            self.utilisateurs[nom] = {
                'age': age,
                'ville': ville,
                'popularite': 0
            }
            self.connexions[nom] = set()
            return True
        return False
    
    def ajouter_connexion(self, user1, user2):
        """Crée une connexion bidirectionnelle entre deux utilisateurs"""
        if user1 in self.utilisateurs and user2 in self.utilisateurs:
            self.connexions[user1].add(user2)
            self.connexions[user2].add(user1)
            self.utilisateurs[user1]['popularite'] += 1
            self.utilisateurs[user2]['popularite'] += 1
    
    def suggerer_connexions(self, utilisateur, nb_suggestions=3):
        """Suggère des connexions basées sur les amis communs"""
        if utilisateur not in self.utilisateurs:
            return []
        
        amis = self.connexions[utilisateur]
        suggestions = {}
        
        for ami in amis:
            amis_de_ami = self.connexions[ami]
            for candidat in amis_de_ami:
                if candidat != utilisateur and candidat not in amis:
                    suggestions[candidat] = suggestions.get(candidat, 0) + 1
        
        # Trier par nombre d'amis communs
        suggestions_triees = sorted(suggestions.items(), 
                                  key=lambda x: x[1], reverse=True)
        return [nom for nom, _ in suggestions_triees[:nb_suggestions]]
    
    def analyser_popularite(self):
        """Analyse la popularité des utilisateurs"""
        popularites = [(nom, data['popularite']) 
                      for nom, data in self.utilisateurs.items()]
        return sorted(popularites, key=lambda x: x[1], reverse=True)`,
      },
    },
    {
      title: "SAE_02 – Comparaison d'algorithmes",
      subtitle: "Optimisation sur graphes sociaux",
      description:
        "Conception et expérimentation d'algorithmes en Python pour analyser des graphes sociaux. Comparaison des performances (temps d'exécution, complexité), visualisation graphique et optimisation des résultats.",
      technologies: ["Python", "NetworkX", "Matplotlib"],
      status: "✓ Completed",
      difficulty: "★★★★★",
      icon: BarChart3,
      borderColor: "border-purple-500/30",
      hoverColor: "hover:border-purple-400/50",
      pdfPath: "/pdfs/sae-02-algorithmes.pdf",
      details: [
        "Comparaison de performances algorithmiques",
        "Visualisation avec NetworkX et Matplotlib",
        "Analyse de complexité temporelle",
        "Optimisation des algorithmes de graphes",
      ],
      fullContent: {
        objective:
          "Concevoir et comparer différents algorithmes d'analyse de graphes sociaux en Python, avec focus sur les performances et la visualisation des résultats.",
        context:
          "Ce projet explore les différentes approches algorithmiques pour analyser les réseaux sociaux, en comparant leur efficacité et en visualisant les résultats pour une meilleure compréhension.",
        codeExample: `import networkx as nx
import matplotlib.pyplot as plt
import time
from collections import deque

class AnalyseurGraphe:
    def __init__(self, graphe):
        self.graphe = graphe
        self.resultats_performance = {}
    
    def mesurer_temps(self, fonction, *args):
        """Mesure le temps d'exécution d'une fonction"""
        debut = time.time()
        resultat = fonction(*args)
        fin = time.time()
        return resultat, fin - debut
    
    def parcours_largeur(self, noeud_depart):
        """Parcours en largeur (BFS) du graphe"""
        visites = set()
        queue = deque([noeud_depart])
        ordre_visite = []
        
        while queue:
            noeud = queue.popleft()
            if noeud not in visites:
                visites.add(noeud)
                ordre_visite.append(noeud)
                
                for voisin in self.graphe.neighbors(noeud):
                    if voisin not in visites:
                        queue.append(voisin)
        
        return ordre_visite
    
    def parcours_profondeur(self, noeud_depart):
        """Parcours en profondeur (DFS) du graphe"""
        visites = set()
        pile = [noeud_depart]
        ordre_visite = []
        
        while pile:
            noeud = pile.pop()
            if noeud not in visites:
                visites.add(noeud)
                ordre_visite.append(noeud)
                
                for voisin in self.graphe.neighbors(noeud):
                    if voisin not in visites:
                        pile.append(voisin)
        
        return ordre_visite
    
    def comparer_algorithmes(self, noeud_depart):
        """Compare les performances des différents algorithmes"""
        # Test BFS
        resultat_bfs, temps_bfs = self.mesurer_temps(
            self.parcours_largeur, noeud_depart)
        
        # Test DFS
        resultat_dfs, temps_dfs = self.mesurer_temps(
            self.parcours_profondeur, noeud_depart)
        
        # Test algorithme NetworkX
        resultat_nx, temps_nx = self.mesurer_temps(
            list, nx.bfs_tree(self.graphe, noeud_depart))
        
        return {
            'BFS': {'temps': temps_bfs, 'noeuds': len(resultat_bfs)},
            'DFS': {'temps': temps_dfs, 'noeuds': len(resultat_dfs)},
            'NetworkX': {'temps': temps_nx, 'noeuds': len(resultat_nx)}
        }
    
    def visualiser_graphe(self):
        """Visualise le graphe avec Matplotlib"""
        plt.figure(figsize=(12, 8))
        pos = nx.spring_layout(self.graphe)
        
        nx.draw(self.graphe, pos, 
                with_labels=True,
                node_color='lightblue',
                node_size=500,
                font_size=10,
                font_weight='bold')
        
        plt.title("Visualisation du Graphe Social")
        plt.show()`,
      },
    },
    {
      title: "SAE_03 – Installation de poste",
      subtitle: "Configuration complète d'un système Linux",
      description:
        "Installation d'un poste sous Linux depuis zéro. Mise en place de services réseau (SSH, DNS, DHCP), configuration des droits utilisateurs, sécurisation via pare-feu, et automatisation via scripts Bash.",
      technologies: ["Linux", "Bash", "SSH", "DNS", "DHCP"],
      status: "✓ Completed",
      difficulty: "★★★★★",
      icon: Terminal,
      borderColor: "border-green-500/30",
      hoverColor: "hover:border-green-400/50",
      pdfPath: "/pdfs/sae-03-installation.pdf",
      details: [
        "Installation complète de système Linux",
        "Configuration de services réseau",
        "Sécurisation via pare-feu",
        "Automatisation avec scripts Bash",
      ],
      fullContent: {
        objective:
          "Installer et configurer un poste Linux complet avec tous les services réseau nécessaires, en respectant les bonnes pratiques de sécurité.",
        context:
          "Ce projet couvre l'administration système complète, de l'installation à la configuration avancée des services, en passant par la sécurisation et l'automatisation.",
        codeExample: `#!/bin/bash
# Script d'installation et configuration automatique

# Variables de configuration
HOSTNAME="poste-linux"
USERNAME="utilisateur"
SSH_PORT="2222"

echo "=== Installation et Configuration du Poste Linux ==="

# Mise à jour du système
echo "Mise à jour du système..."
apt update && apt upgrade -y

# Installation des paquets essentiels
echo "Installation des paquets..."
apt install -y openssh-server bind9 isc-dhcp-server \
               ufw fail2ban htop vim git curl wget

# Configuration du hostname
echo "Configuration du hostname..."
hostnamectl set-hostname $HOSTNAME
echo "127.0.1.1 $HOSTNAME" >> /etc/hosts

# Configuration SSH
echo "Configuration SSH..."
cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup
sed -i "s/#Port 22/Port $SSH_PORT/" /etc/ssh/sshd_config
sed -i "s/#PermitRootLogin yes/PermitRootLogin no/" /etc/ssh/sshd_config
sed -i "s/#PasswordAuthentication yes/PasswordAuthentication no/" /etc/ssh/sshd_config

# Génération des clés SSH
echo "Génération des clés SSH..."
ssh-keygen -t rsa -b 4096 -f /home/$USERNAME/.ssh/id_rsa -N ""
chown -R $USERNAME:$USERNAME /home/$USERNAME/.ssh

# Configuration du pare-feu
echo "Configuration du pare-feu..."
ufw default deny incoming
ufw default allow outgoing
ufw allow $SSH_PORT/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

# Configuration DNS (BIND9)
echo "Configuration DNS..."
cat > /etc/bind/named.conf.local << EOF
zone "local.domain" {
    type master;
    file "/etc/bind/db.local.domain";
};
EOF

# Configuration DHCP
echo "Configuration DHCP..."
cat > /etc/dhcp/dhcpd.conf << EOF
subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.100 192.168.1.200;
    option routers 192.168.1.1;
    option domain-name-servers 192.168.1.10;
    option domain-name "local.domain";
}
EOF

# Démarrage des services
echo "Démarrage des services..."
systemctl enable ssh
systemctl start ssh
systemctl enable bind9
systemctl start bind9
systemctl enable isc-dhcp-server
systemctl start isc-dhcp-server

echo "Configuration terminée avec succès!"
echo "SSH disponible sur le port $SSH_PORT"`,
      },
    },
    {
      title: "SAE_04 – Conception de base de données",
      subtitle: "Modélisation et implémentation SQL",
      description:
        "Création d'un modèle relationnel sur le thème du climat, puis implémentation dans Looping. Requêtes avancées, intégration des contraintes d'intégrité et visualisation des données.",
      technologies: ["SQL", "PostgreSQL", "Looping"],
      status: "✓ Completed",
      difficulty: "★★★★★",
      icon: Database,
      borderColor: "border-cyan-500/30",
      hoverColor: "hover:border-cyan-400/50",
      pdfPath: "/pdfs/sae-04-bdd.pdf",
      details: [
        "Modélisation relationnelle complète",
        "Implémentation avec Looping",
        "Requêtes SQL avancées",
        "Contraintes d'intégrité",
      ],
      fullContent: {
        objective:
          "Concevoir et implémenter une base de données relationnelle sur le thème du climat, en respectant les règles de normalisation et en créant des requêtes complexes.",
        context:
          "Ce projet aborde la conception de bases de données depuis la modélisation conceptuelle jusqu'à l'implémentation physique, avec un focus sur les données climatiques.",
        codeExample: `-- Création des tables pour la base de données climatique

-- Table des stations météorologiques
CREATE TABLE Station (
    id_station SERIAL PRIMARY KEY,
    nom_station VARCHAR(100) NOT NULL,
    latitude DECIMAL(10,8) NOT NULL,
    longitude DECIMAL(11,8) NOT NULL,
    altitude INTEGER,
    pays VARCHAR(50) NOT NULL,
    region VARCHAR(50),
    date_installation DATE,
    CONSTRAINT chk_latitude CHECK (latitude BETWEEN -90 AND 90),
    CONSTRAINT chk_longitude CHECK (longitude BETWEEN -180 AND 180)
);

-- Table des mesures climatiques
CREATE TABLE Mesure (
    id_mesure SERIAL PRIMARY KEY,
    id_station INTEGER REFERENCES Station(id_station),
    date_mesure DATE NOT NULL,
    heure_mesure TIME NOT NULL,
    temperature DECIMAL(5,2),
    humidite INTEGER,
    pression DECIMAL(7,2),
    vitesse_vent DECIMAL(5,2),
    direction_vent INTEGER,
    precipitation DECIMAL(6,2),
    CONSTRAINT chk_humidite CHECK (humidite BETWEEN 0 AND 100),
    CONSTRAINT chk_direction_vent CHECK (direction_vent BETWEEN 0 AND 360),
    CONSTRAINT chk_precipitation CHECK (precipitation >= 0)
);

-- Table des événements climatiques
CREATE TABLE Evenement (
    id_evenement SERIAL PRIMARY KEY,
    id_station INTEGER REFERENCES Station(id_station),
    type_evenement VARCHAR(50) NOT NULL,
    date_debut DATE NOT NULL,
    date_fin DATE,
    intensite VARCHAR(20),
    description TEXT,
    CONSTRAINT chk_dates CHECK (date_fin IS NULL OR date_fin >= date_debut)
);

-- Requêtes d'analyse climatique

-- 1. Température moyenne par station et par mois
SELECT 
    s.nom_station,
    EXTRACT(YEAR FROM m.date_mesure) as annee,
    EXTRACT(MONTH FROM m.date_mesure) as mois,
    ROUND(AVG(m.temperature), 2) as temp_moyenne,
    COUNT(*) as nb_mesures
FROM Station s
JOIN Mesure m ON s.id_station = m.id_station
WHERE m.temperature IS NOT NULL
GROUP BY s.nom_station, EXTRACT(YEAR FROM m.date_mesure), 
         EXTRACT(MONTH FROM m.date_mesure)
ORDER BY s.nom_station, annee, mois;

-- 2. Stations avec le plus d'événements extrêmes
SELECT 
    s.nom_station,
    s.pays,
    COUNT(e.id_evenement) as nb_evenements,
    STRING_AGG(DISTINCT e.type_evenement, ', ') as types_evenements
FROM Station s
LEFT JOIN Evenement e ON s.id_station = e.id_station
WHERE e.intensite IN ('Forte', 'Extrême')
GROUP BY s.id_station, s.nom_station, s.pays
HAVING COUNT(e.id_evenement) > 0
ORDER BY nb_evenements DESC;

-- 3. Évolution des précipitations par région
WITH precipitations_mensuelles AS (
    SELECT 
        s.region,
        DATE_TRUNC('month', m.date_mesure) as mois,
        SUM(m.precipitation) as total_precipitation
    FROM Station s
    JOIN Mesure m ON s.id_station = m.id_station
    WHERE m.precipitation IS NOT NULL
    GROUP BY s.region, DATE_TRUNC('month', m.date_mesure)
)
SELECT 
    region,
    mois,
    total_precipitation,
    LAG(total_precipitation) OVER (
        PARTITION BY region ORDER BY mois
    ) as precipitation_mois_precedent,
    ROUND(
        (total_precipitation - LAG(total_precipitation) OVER (
            PARTITION BY region ORDER BY mois
        )) * 100.0 / LAG(total_precipitation) OVER (
            PARTITION BY region ORDER BY mois
        ), 2
    ) as evolution_pourcentage
FROM precipitations_mensuelles
ORDER BY region, mois;`,
      },
    },
    {
      title: "SAE_05 – Recueil des besoins",
      subtitle: "Analyse des attentes utilisateurs",
      description:
        "Élaboration d'un questionnaire via Google Forms pour identifier les besoins d'aménagement au sein de l'IUT. Analyse des résultats, synthèse des retours et formulation de recommandations dans un rapport détaillé.",
      technologies: ["Google Forms", "Analyse de données", "Rédaction"],
      status: "✓ Completed",
      difficulty: "★★★★★",
      icon: FileText,
      borderColor: "border-orange-500/30",
      hoverColor: "hover:border-orange-400/50",
      pdfPath: "/pdfs/sae-05-besoins.pdf",
      details: [
        "Conception de questionnaires",
        "Analyse statistique des réponses",
        "Synthèse des besoins utilisateurs",
        "Rédaction de recommandations",
      ],
      fullContent: {
        objective:
          "Mener une enquête complète pour identifier les besoins d'aménagement de l'IUT et formuler des recommandations basées sur l'analyse des retours utilisateurs.",
        context:
          "Ce projet vise à développer les compétences en analyse des besoins et en communication, essentielles pour tout projet informatique impliquant des utilisateurs finaux.",
        codeExample: `# Script Python pour analyser les résultats du questionnaire
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from collections import Counter

class AnalyseurEnquete:
    def __init__(self, fichier_donnees):
        self.donnees = pd.read_csv(fichier_donnees)
        self.resultats = {}
    
    def nettoyer_donnees(self):
        """Nettoie et prépare les données pour l'analyse"""
        # Suppression des réponses vides
        self.donnees = self.donnees.dropna(subset=['satisfaction_generale'])
        
        # Normalisation des réponses textuelles
        self.donnees['ameliorations'] = self.donnees['ameliorations'].str.lower()
        
        print(f"Nombre de réponses valides: {len(self.donnees)}")
    
    def analyser_satisfaction(self):
        """Analyse les niveaux de satisfaction"""
        satisfaction = self.donnees['satisfaction_generale'].value_counts()
        
        plt.figure(figsize=(10, 6))
        satisfaction.plot(kind='bar', color='skyblue')
        plt.title('Distribution de la Satisfaction Générale')
        plt.xlabel('Niveau de Satisfaction')
        plt.ylabel('Nombre de Réponses')
        plt.xticks(rotation=45)
        plt.tight_layout()
        plt.savefig('satisfaction_generale.png')
        
        return satisfaction
    
    def analyser_besoins_amenagement(self):
        """Analyse les besoins d'aménagement prioritaires"""
        besoins = []
        for reponse in self.donnees['besoins_amenagement'].dropna():
            besoins.extend([b.strip() for b in reponse.split(',')])
        
        compteur_besoins = Counter(besoins)
        top_besoins = compteur_besoins.most_common(10)
        
        # Visualisation
        plt.figure(figsize=(12, 8))
        besoins_df = pd.DataFrame(top_besoins, columns=['Besoin', 'Fréquence'])
        sns.barplot(data=besoins_df, x='Fréquence', y='Besoin', palette='viridis')
        plt.title('Top 10 des Besoins d\'Aménagement')
        plt.tight_layout()
        plt.savefig('besoins_amenagement.png')
        
        return top_besoins
    
    def analyser_par_profil(self):
        """Analyse les besoins par profil d'utilisateur"""
        profils = self.donnees.groupby('profil_utilisateur')
        
        for nom_profil, groupe in profils:
            satisfaction_moyenne = groupe['satisfaction_generale'].mean()
            besoins_principaux = groupe['besoins_amenagement'].mode().iloc[0] if not groupe['besoins_amenagement'].mode().empty else "Non spécifié"
            
            self.resultats[nom_profil] = {
                'satisfaction_moyenne': satisfaction_moyenne,
                'nombre_reponses': len(groupe),
                'besoins_principaux': besoins_principaux
            }
        
        return self.resultats
    
    def generer_rapport(self):
        """Génère un rapport de synthèse"""
        rapport = f"""
RAPPORT D'ANALYSE - ENQUÊTE BESOINS IUT
======================================

1. SYNTHÈSE GÉNÉRALE
   - Nombre total de réponses: {len(self.donnees)}
   - Satisfaction moyenne: {self.donnees['satisfaction_generale'].mean():.2f}/5
   
2. BESOINS PRIORITAIRES
   {self.analyser_besoins_amenagement()[:5]}
   
3. RECOMMANDATIONS
   - Améliorer les espaces de travail collaboratif
   - Renforcer l'équipement informatique
   - Optimiser les espaces de détente
   - Améliorer la signalétique
   
4. ACTIONS PROPOSÉES
   - Court terme: Réorganisation des espaces existants
   - Moyen terme: Investissement en équipement
   - Long terme: Rénovation des infrastructures
        """
        
        with open('rapport_enquete.txt', 'w', encoding='utf-8') as f:
            f.write(rapport)
        
        return rapport

# Utilisation
analyseur = AnalyseurEnquete('donnees_enquete.csv')
analyseur.nettoyer_donnees()
rapport = analyseur.generer_rapport()
print(rapport)`,
      },
    },
    {
      title: "SAE_08 – Développement d'une application",
      subtitle: "Jeu d'échecs en Java (terminal)",
      description:
        "Développement d'un jeu d'échecs en Java avec interface en ligne de commande. Modélisation des pièces, gestion des coups, vérification de la validité des mouvements et détection des situations d'échec et mat.",
      technologies: ["Java", "Programmation terminale", "GitHub"],
      status: "✓ Completed",
      difficulty: "★★★★★",
      icon: Gamepad2,
      borderColor: "border-red-500/30",
      hoverColor: "hover:border-red-400/50",
      pdfPath: "/pdfs/sae-08-echecs.pdf",
      details: [
        "Modélisation orientée objet complète",
        "Interface en ligne de commande",
        "Gestion des règles d'échecs",
        "Détection échec et mat",
      ],
      fullContent: {
        objective:
          "Développer un jeu d'échecs complet en Java avec interface terminal, en respectant toutes les règles du jeu et en implémentant une architecture orientée objet robuste.",
        context:
          "Ce projet permet de maîtriser la programmation orientée objet en Java à travers un cas d'usage complexe nécessitant une modélisation précise et une gestion d'états sophistiquée.",
        codeExample: `// Classe principale du jeu d'échecs
public class JeuEchecs {
    private Echiquier echiquier;
    private Joueur joueurBlanc;
    private Joueur joueurNoir;
    private Joueur joueurActuel;
    private boolean partieTerminee;
    
    public JeuEchecs() {
        this.echiquier = new Echiquier();
        this.joueurBlanc = new Joueur(Couleur.BLANC);
        this.joueurNoir = new Joueur(Couleur.NOIR);
        this.joueurActuel = joueurBlanc;
        this.partieTerminee = false;
        initialiserPlateau();
    }
    
    public void jouerPartie() {
        Scanner scanner = new Scanner(System.in);
        
        while (!partieTerminee) {
            afficherEchiquier();
            System.out.println("Tour du joueur " + joueurActuel.getCouleur());
            
            if (estEnEchec(joueurActuel.getCouleur())) {
                System.out.println("ÉCHEC !");
                if (estEchecEtMat(joueurActuel.getCouleur())) {
                    System.out.println("ÉCHEC ET MAT ! Victoire de " + 
                        (joueurActuel.getCouleur() == Couleur.BLANC ? "NOIR" : "BLANC"));
                    partieTerminee = true;
                    continue;
                }
            }
            
            System.out.print("Entrez votre coup (ex: e2-e4): ");
            String coup = scanner.nextLine();
            
            if (executerCoup(coup)) {
                changerJoueur();
            } else {
                System.out.println("Coup invalide ! Réessayez.");
            }
        }
        
        scanner.close();
    }
    
    private boolean executerCoup(String coup) {
        try {
            String[] parties = coup.split("-");
            if (parties.length != 2) return false;
            
            Position depart = new Position(parties[0]);
            Position arrivee = new Position(parties[1]);
            
            Piece piece = echiquier.getPiece(depart);
            
            // Vérifications de base
            if (piece == null) {
                System.out.println("Aucune pièce à cette position !");
                return false;
            }
            
            if (piece.getCouleur() != joueurActuel.getCouleur()) {
                System.out.println("Cette pièce ne vous appartient pas !");
                return false;
            }
            
            if (!piece.peutSeDeplacer(arrivee, echiquier)) {
                System.out.println("Mouvement invalide pour cette pièce !");
                return false;
            }
            
            // Simulation du coup pour vérifier l'échec
            Piece pieceCapturee = echiquier.getPiece(arrivee);
            echiquier.deplacerPiece(depart, arrivee);
            
            if (estEnEchec(joueurActuel.getCouleur())) {
                // Annuler le coup
                echiquier.deplacerPiece(arrivee, depart);
                if (pieceCapturee != null) {
                    echiquier.placerPiece(arrivee, pieceCapturee);
                }
                System.out.println("Ce coup vous mettrait en échec !");
                return false;
            }
            
            return true;
            
        } catch (Exception e) {
            return false;
        }
    }
    
    private boolean estEnEchec(Couleur couleur) {
        Position positionRoi = echiquier.trouverRoi(couleur);
        if (positionRoi == null) return false;
        
        // Vérifier si une pièce adverse peut capturer le roi
        for (int ligne = 0; ligne < 8; ligne++) {
            for (int colonne = 0; colonne < 8; colonne++) {
                Position pos = new Position(ligne, colonne);
                Piece piece = echiquier.getPiece(pos);
                
                if (piece != null && piece.getCouleur() != couleur) {
                    if (piece.peutSeDeplacer(positionRoi, echiquier)) {
                        return true;
                    }
                }
            }
        }
        
        return false;
    }
    
    private boolean estEchecEtMat(Couleur couleur) {
        // Tester tous les coups possibles pour voir si l'échec peut être évité
        for (int ligne = 0; ligne < 8; ligne++) {
            for (int colonne = 0; colonne < 8; colonne++) {
                Position depart = new Position(ligne, colonne);
                Piece piece = echiquier.getPiece(depart);
                
                if (piece != null && piece.getCouleur() == couleur) {
                    for (int l = 0; l < 8; l++) {
                        for (int c = 0; c < 8; c++) {
                            Position arrivee = new Position(l, c);
                            
                            if (piece.peutSeDeplacer(arrivee, echiquier)) {
                                // Simuler le coup
                                Piece pieceCapturee = echiquier.getPiece(arrivee);
                                echiquier.deplacerPiece(depart, arrivee);
                                
                                boolean encoreEnEchec = estEnEchec(couleur);
                                
                                // Annuler le coup
                                echiquier.deplacerPiece(arrivee, depart);
                                if (pieceCapturee != null) {
                                    echiquier.placerPiece(arrivee, pieceCapturee);
                                }
                                
                                if (!encoreEnEchec) {
                                    return false; // Un coup permet d'éviter l'échec
                                }
                            }
                        }
                    }
                }
            }
        }
        
        return true; // Aucun coup ne permet d'éviter l'échec
    }
    
    private void changerJoueur() {
        joueurActuel = (joueurActuel == joueurBlanc) ? joueurNoir : joueurBlanc;
    }
    
    private void afficherEchiquier() {
        System.out.println("\\n  a b c d e f g h");
        for (int ligne = 7; ligne >= 0; ligne--) {
            System.out.print((ligne + 1) + " ");
            for (int colonne = 0; colonne < 8; colonne++) {
                Piece piece = echiquier.getPiece(new Position(ligne, colonne));
                if (piece == null) {
                    System.out.print(". ");
                } else {
                    System.out.print(piece.getSymbole() + " ");
                }
            }
            System.out.println(ligne + 1);
        }
        System.out.println("  a b c d e f g h\\n");
    }
    
    public static void main(String[] args) {
        JeuEchecs jeu = new JeuEchecs();
        jeu.jouerPartie();
    }
}`,
      },
    },
    {
      title: "SAE_10 – Exploitation d'une base de données",
      subtitle: "Analyse de données via SQL",
      description:
        "Modélisation d'une base de données autour de problématiques climatiques. Requêtes complexes en SQL sur PostgreSQL et application de la méthode MERISE pour la conception.",
      technologies: ["SQL", "PostgreSQL", "MERISE"],
      status: "✓ Completed",
      difficulty: "★★★★★",
      icon: Database,
      borderColor: "border-indigo-500/30",
      hoverColor: "hover:border-indigo-400/50",
      pdfPath: "/pdfs/sae-10-sql.pdf",
      details: [
        "Modélisation MERISE complète",
        "Requêtes SQL complexes",
        "Analyse de données climatiques",
        "Optimisation des performances",
      ],
      fullContent: {
        objective:
          "Concevoir et exploiter une base de données climatique en utilisant la méthode MERISE et en développant des requêtes SQL avancées pour l'analyse de données.",
        context:
          "Ce projet approfondit les compétences en bases de données à travers un cas d'usage réel d'analyse de données climatiques, nécessitant des requêtes complexes et des optimisations.",
        codeExample: `-- Base de données climatique - Requêtes d'analyse avancées

-- 1. Analyse des tendances de température par décennie
WITH temperatures_decennales AS (
    SELECT 
        FLOOR(EXTRACT(YEAR FROM date_mesure) / 10) * 10 as decennie,
        s.region,
        AVG(m.temperature) as temp_moyenne,
        STDDEV(m.temperature) as ecart_type,
        COUNT(*) as nb_mesures
    FROM Mesure m
    JOIN Station s ON m.id_station = s.id_station
    WHERE m.temperature IS NOT NULL
    GROUP BY FLOOR(EXTRACT(YEAR FROM date_mesure) / 10) * 10, s.region
),
evolution_temperature AS (
    SELECT 
        region,
        decennie,
        temp_moyenne,
        LAG(temp_moyenne) OVER (PARTITION BY region ORDER BY decennie) as temp_precedente,
        temp_moyenne - LAG(temp_moyenne) OVER (PARTITION BY region ORDER BY decennie) as evolution
    FROM temperatures_decennales
)
SELECT 
    region,
    decennie,
    ROUND(temp_moyenne, 2) as temperature_moyenne,
    ROUND(evolution, 3) as evolution_depuis_decennie_precedente,
    CASE 
        WHEN evolution > 0.5 THEN 'Réchauffement significatif'
        WHEN evolution > 0.1 THEN 'Réchauffement modéré'
        WHEN evolution < -0.1 THEN 'Refroidissement'
        ELSE 'Stable'
    END as tendance
FROM evolution_temperature
WHERE temp_precedente IS NOT NULL
ORDER BY region, decennie;

-- 2. Détection d'anomalies climatiques
WITH statistiques_mensuelles AS (
    SELECT 
        s.id_station,
        s.nom_station,
        EXTRACT(MONTH FROM m.date_mesure) as mois,
        AVG(m.temperature) as temp_moyenne_historique,
        STDDEV(m.temperature) as ecart_type_historique
    FROM Mesure m
    JOIN Station s ON m.id_station = s.id_station
    WHERE EXTRACT(YEAR FROM m.date_mesure) BETWEEN 1990 AND 2020
    GROUP BY s.id_station, s.nom_station, EXTRACT(MONTH FROM m.date_mesure)
),
mesures_recentes AS (
    SELECT 
        m.id_station,
        m.date_mesure,
        m.temperature,
        EXTRACT(MONTH FROM m.date_mesure) as mois
    FROM Mesure m
    WHERE EXTRACT(YEAR FROM m.date_mesure) >= 2021
    AND m.temperature IS NOT NULL
)
SELECT 
    sm.nom_station,
    mr.date_mesure,
    mr.temperature as temperature_observee,
    ROUND(sm.temp_moyenne_historique, 2) as temperature_normale,
    ROUND((mr.temperature - sm.temp_moyenne_historique) / sm.ecart_type_historique, 2) as z_score,
    CASE 
        WHEN ABS((mr.temperature - sm.temp_moyenne_historique) / sm.ecart_type_historique) > 3 
        THEN 'Anomalie extrême'
        WHEN ABS((mr.temperature - sm.temp_moyenne_historique) / sm.ecart_type_historique) > 2 
        THEN 'Anomalie significative'
        ELSE 'Normal'
    END as classification
FROM mesures_recentes mr
JOIN statistiques_mensuelles sm ON mr.id_station = sm.id_station AND mr.mois = sm.mois
WHERE ABS((mr.temperature - sm.temp_moyenne_historique) / sm.ecart_type_historique) > 2
ORDER BY ABS((mr.temperature - sm.temp_moyenne_historique) / sm.ecart_type_historique) DESC;

-- 3. Analyse des corrélations entre variables climatiques
WITH donnees_correlations AS (
    SELECT 
        s.region,
        DATE_TRUNC('month', m.date_mesure) as mois,
        AVG(m.temperature) as temp_moy,
        AVG(m.humidite) as humidite_moy,
        AVG(m.pression) as pression_moy,
        SUM(m.precipitation) as precipitation_totale
    FROM Mesure m
    JOIN Station s ON m.id_station = s.id_station
    WHERE m.temperature IS NOT NULL 
    AND m.humidite IS NOT NULL 
    AND m.pression IS NOT NULL
    GROUP BY s.region, DATE_TRUNC('month', m.date_mesure)
    HAVING COUNT(*) >= 10  -- Au moins 10 mesures par mois
),
correlations_calculees AS (
    SELECT 
        region,
        COUNT(*) as nb_observations,
        -- Corrélation température-humidité
        ROUND(
            (COUNT(*) * SUM(temp_moy * humidite_moy) - SUM(temp_moy) * SUM(humidite_moy)) /
            SQRT(
                (COUNT(*) * SUM(temp_moy * temp_moy) - SUM(temp_moy) * SUM(temp_moy)) *
                (COUNT(*) * SUM(humidite_moy * humidite_moy) - SUM(humidite_moy) * SUM(humidite_moy))
            ), 3
        ) as correlation_temp_humidite,
        -- Corrélation température-pression
        ROUND(
            (COUNT(*) * SUM(temp_moy * pression_moy) - SUM(temp_moy) * SUM(pression_moy)) /
            SQRT(
                (COUNT(*) * SUM(temp_moy * temp_moy) - SUM(temp_moy) * SUM(temp_moy)) *
                (COUNT(*) * SUM(pression_moy * pression_moy) - SUM(pression_moy) * SUM(pression_moy))
            ), 3
        ) as correlation_temp_pression
    FROM donnees_correlations
    GROUP BY region
)
SELECT 
    region,
    nb_observations,
    correlation_temp_humidite,
    CASE 
        WHEN ABS(correlation_temp_humidite) > 0.7 THEN 'Forte'
        WHEN ABS(correlation_temp_humidite) > 0.3 THEN 'Modérée'
        ELSE 'Faible'
    END as force_correlation_temp_humidite,
    correlation_temp_pression,
    CASE 
        WHEN ABS(correlation_temp_pression) > 0.7 THEN 'Forte'
        WHEN ABS(correlation_temp_pression) > 0.3 THEN 'Modérée'
        ELSE 'Faible'
    END as force_correlation_temp_pression
FROM correlations_calculees
WHERE nb_observations >= 24  -- Au moins 2 ans de données
ORDER BY ABS(correlation_temp_humidite) DESC;`,
      },
    },
    {
      title: "SAE_12 – Travail d'équipe & innovation",
      subtitle: "Création d'un site web collaboratif",
      description:
        "Réalisation en équipe d'un site en HTML/CSS avec répartition des tâches, organisation d'une présentation finale et intégration de problématiques innovantes liées à la cybersécurité.",
      technologies: ["HTML", "CSS", "Travail d'équipe", "Créativité"],
      status: "🟡 En cours",
      difficulty: "★★★★★",
      icon: Globe,
      borderColor: "border-yellow-500/30",
      hoverColor: "hover:border-yellow-400/50",
      pdfPath: "/pdfs/sae-12-web.pdf",
      details: [
        "Développement web collaboratif",
        "Répartition des tâches en équipe",
        "Intégration de problématiques cybersécurité",
        "Présentation finale du projet",
      ],
      fullContent: {
        objective:
          "Explorer une exposition éphémère existante pour concevoir un événement éphémère projeté en 2026, en développant une stratégie de promotion complète incluant un site web et des supports de communication.",
        context:
          "Dans le cadre de ce projet, nous avons été invités à explorer une exposition éphémère, se déroulant du [à compléter avec les dates exactes], dans le but de nous en inspirer pour concevoir un événement éphémère projeté en 2026. L'objectif principal était double : 1) Comprendre et analyser une exposition existante, tant sur le plan artistique, thématique que scénographique. 2) Imaginer une réinterprétation créative sous la forme d'un nouvel événement temporaire, qui serait plausible et pertinent dans un futur proche, en 2026. Pour donner vie à cet événement fictif, nous avons élaboré une stratégie de promotion, indispensable à sa visibilité et son attractivité. Cette stratégie s'est concrétisée à travers : la création d'un flyer de communication, synthétique et visuel ; le développement d'un site web dédié à l'événement, permettant d'informer, de susciter l'intérêt et de créer une identité forte autour du projet. Ce projet mêle ainsi analyse culturelle, création de contenu, communication visuelle et outils numériques, avec une dimension prospective visant à se projeter dans un événement plausible et impactant en 2026.",
        codeExample: `<!-- Structure HTML du site collaboratif sur la cybersécurité -->
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CyberSecure - Sensibilisation à la Cybersécurité</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-brand">
                <i class="fas fa-shield-alt"></i>
                <span>CyberSecure</span>
            </div>
            <ul class="nav-menu">
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#menaces">Menaces</a></li>
                <li><a href="#protection">Protection</a></li>
                <li><a href="#quiz">Quiz</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>

    <main>
        <!-- Section Hero -->
        <section id="accueil" class="hero">
            <div class="hero-content">
                <h1>Protégez-vous dans le monde numérique</h1>
                <p>Découvrez les enjeux de la cybersécurité et apprenez à vous protéger efficacement</p>
                <button class="cta-button" onclick="scrollToSection('menaces')">
                    <i class="fas fa-play"></i> Commencer l'exploration
                </button>
            </div>
            <div class="hero-animation">
                <div class="cyber-grid"></div>
            </div>
        </section>

        <!-- Section Menaces -->
        <section id="menaces" class="threats-section">
            <div class="container">
                <h2>Les Principales Menaces</h2>
                <div class="threats-grid">
                    <div class="threat-card" data-threat="phishing">
                        <div class="threat-icon">
                            <i class="fas fa-fish"></i>
                        </div>
                        <h3>Phishing</h3>
                        <p>Tentatives de vol d'informations personnelles via de faux emails ou sites web.</p>
                        <div class="threat-stats">
                            <span class="stat">85% des cyberattaques</span>
                        </div>
                    </div>
                    
                    <div class="threat-card" data-threat="malware">
                        <div class="threat-icon">
                            <i class="fas fa-virus"></i>
                        </div>
                        <h3>Malware</h3>
                        <p>Logiciels malveillants conçus pour endommager ou infiltrer votre système.</p>
                        <div class="threat-stats">
                            <span class="stat">560 000 nouveaux malwares/jour</span>
                        </div>
                    </div>
                    
                    <div class="threat-card" data-threat="ransomware">
                        <div class="threat-icon">
                            <i class="fas fa-lock"></i>
                        </div>
                        <h3>Ransomware</h3>
                        <p>Chiffrement de vos données contre demande de rançon.</p>
                        <div class="threat-stats">
                            <span class="stat">1 attaque toutes les 11 secondes</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>CyberSecure</h3>
                    <p>Sensibilisation à la cybersécurité pour tous</p>
                </div>
                <div class="footer-section">
                    <h3>Équipe</h3>
                    <ul>
                        <li>Hela ADDAR - Chef de projet</li>
                        <li>Membre 2 - Développement</li>
                        <li>Membre 3 - Design</li>
                        <li>Membre 4 - Contenu</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>`,
      },
    },
  ]

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h1 className="text-4xl font-bold md:text-5xl mb-4">
            <span className="text-gray-500">$</span> <span className="gradient-text">ls -la ./projets/</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            <span className="text-green-400">{"// "}</span>Situations d'Apprentissage et d'Évaluation – 8 projets
            couvrant l'ensemble des domaines clés de l'informatique
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
                          <span>•</span>
                          <span className="text-yellow-400">{project.difficulty}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">Compétences développées :</h4>
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
                            techIndex % 6 === 0
                              ? "border-blue-500/50 text-blue-400"
                              : techIndex % 6 === 1
                                ? "border-green-500/50 text-green-400"
                                : techIndex % 6 === 2
                                  ? "border-purple-500/50 text-purple-400"
                                  : techIndex % 6 === 3
                                    ? "border-pink-500/50 text-pink-400"
                                    : techIndex % 6 === 4
                                      ? "border-orange-500/50 text-orange-400"
                                      : "border-cyan-500/50 text-cyan-400"
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

        {/* Bilan final */}
        <div className="mt-16">
          <Card className="bg-gray-800 border-2 border-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30">
            <CardHeader>
              <CardTitle className="gradient-text font-mono text-center">Bilan des SAE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-4 text-center">
                <div className="bg-gray-700 rounded-lg p-4 border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2">8</div>
                  <div className="text-gray-300 text-sm">SAE au total</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 border border-green-500/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">7</div>
                  <div className="text-gray-300 text-sm">Projets terminés</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 border border-yellow-500/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
                  <div className="text-gray-300 text-sm">Projet en cours</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 border border-red-500/20">
                  <div className="text-3xl font-bold text-red-400 mb-2">0</div>
                  <div className="text-gray-300 text-sm">Projet à venir</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="bg-gray-700 rounded-lg p-6 inline-block border border-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30">
                  <p className="text-gray-300 font-mono">
                    <span className="gradient-text">$</span> find ./SAE -name "*.completed" | wc -l
                  </p>
                  <p className="text-2xl font-bold gradient-text mt-2">87.5% de réussite</p>
                  <p className="text-gray-400 text-sm mt-1">Projets universitaires avec documentation complète</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
