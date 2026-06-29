import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuritePuyDeDome = () => (
  <CityLandingPage
    data={{
      city: "Puy-de-Dôme",
      citySlug: "puy-de-dome",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "63",
      intro: "CyberSecure est votre expert cybersécurité Puy-de-Dôme (63) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Clermont-Ferrand, Riom, Thiers, Issoire, Ambert et tout le département.",
      localContext: "Le Puy-de-Dôme est le département auvergnate le plus peuplé, centré sur Clermont-Ferrand. La ville est le siège mondial de Michelin (pneumatiques, MICHELIN Guide), l'un des grands groupes industriels français. Michelin est en pleine transformation numérique avec d'importants déploiements cloud et de l'IA pour l'optimisation de production. Clermont est aussi un pôle technologique avec la French Tech Clermont-Ferrand et un tissu de PME innovantes. L'Université Clermont Auvergne et le CNRS génèrent de la recherche dans des domaines sensibles (chimie, physique des matériaux).",
      sectors: [
        "Pneumatiques et mobilité (Michelin siège mondial — IP, plateformes cloud, IA)",
        "Chimie fine (Arkema Clermont, Limagrain — R&D propriétaire, données brevets)",
        "Agritech et semences (Limagrain, Vilmorin — séquences génomiques, R&D)",
        "Industrie mécanique (Thiers coutellerie, Issoire — PME industrielles, ERP)",
        "Santé (CHU Clermont, CHRU Gabriel-Montpied — HDS, e-santé)",
        "Tourisme et volcans (Chaîne des Puys, thermalisme Vichy — réservation cloud)",
        "Recherche (UCA, CNRS, INSERM — données recherche, brevets)",
        "Collectivités (Clermont Auvergne Métropole, CD63 — cloud souverain, smart city)",
      ],
      neighborhoods: [
        "Clermont-Ferrand – La Pardieu – Cézeaux (63000)",
        "Cournon-d'Auvergne – Aubière (63800/63170)",
        "Chamalières – Royat – Beaumont (63400/63110)",
        "Riom – Mozac (63200)",
        "Thiers (63300)",
        "Issoire – Brioude (63500/63100)",
        "Vichy (03200 — Allier voisin mais économie liée)",
        "Ambert – Arlanc (63600)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Puy-de-Dôme (63) ?",
          a: "Oui, CyberSecure intervient dans tout le 63 : Clermont Auvergne Métropole, Riom-Limagne, Ambert, Issoire, et zones rurales. Nos consultants connaissent l'écosystème économique auvergnate centré sur Michelin et les PME industrielles. CERT d'urgence 24/7.",
        },
        {
          q: "Michelin (siège mondial à Clermont-Ferrand) : comment sécuriser une multinationale avec des filiales dans 175 pays ?",
          a: "Michelin est une cible d'espionnage industriel majeure (formules de caoutchouc, algorithmes de conception de pneumatiques, données de mobilité). Leur groupe de sécurité interne (CERT Michelin) utilise des outils SIEM/XDR pour surveiller leur réseau mondial. Pour leurs filiales et fournisseurs qui font appel à des prestataires externos : pentest des applications web et mobiles, audit des configurations cloud (Michelin utilise AWS et Azure), et tests d'ingénierie sociale pour les équipes de R&D. CyberSecure peut compléter les dispositifs internes Michelin pour les périmètres externalisés.",
        },
        {
          q: "Limagrain (Riom) est le 4e semencier mondial : comment protéger les données génomiques des semences ?",
          a: "Les séquences génomiques des variétés végétales développées par Limagrain (blé, maïs, tournesol) valent des milliards d'euros. Ces données sont stockées dans des bases de données bioinformatiques (NGS data, GWAS data) sur des plateformes cloud ou HPC. Les risques : vol par des concurrents, modification malveillante des données de criblage génomique, et cyberattaques sur les systèmes de gestion des essais au champ. Mesures : chiffrement des bases de données génomiques, contrôle strict des accès chercheurs, audit des serveurs bioinformatiques, et DLP pour bloquer les exfiltrations de données. CyberSecure audite les environnements de recherche en sciences du vivant.",
        },
        {
          q: "Les coutelliers de Thiers : comment une PME artisanale peut-elle se protéger des cyberattaques ?",
          a: "Les entreprises de coutellerie de Thiers (Laguiole, Thiers-Issard) ont digitalisé leurs ventes (boutiques en ligne, export international) mais pas toujours leur sécurité. Leurs risques principaux : fraude aux virements (BEC sur les commandes export), ransomware bloquant la production, et vol de données clients sur les boutiques e-commerce. Pour une PME artisanale, Mon Aide Cyber (ANSSI) offre un diagnostic gratuit. CyberSecure peut ensuite proposer un plan de sécurisation adapté au budget d'une PME artisanale : antivirus managé, sauvegarde cloud, et formation du personnel.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Puy-de-Dôme ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI du Puy-de-Dôme — diagnostics numériques. Clermont Auvergne Métropole — programmes innovation. BPI France Auvergne-Rhône-Alpes — prêts innovation. Le cluster VIAMECA (industrie) et Clermont Métropole Innovation accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuritePuyDeDome;
