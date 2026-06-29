import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteVendee = () => (
  <CityLandingPage
    data={{
      city: "Vendée",
      citySlug: "vendee",
      region: "Pays de la Loire",
      postalCode: "85",
      intro: "CyberSecure est votre expert cybersécurité Vendée (85) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de La Roche-sur-Yon, Les Herbiers, Montaigu-Vendée, Les Sables-d'Olonne, Challans et tout le département.",
      localContext: "La Vendée est un département dynamique souvent cité comme modèle de développement économique. La Roche-sur-Yon est la préfecture avec un tissu tertiaire croissant. Le nord Vendée (Les Herbiers, Montaigu) est un pôle industriel très fort : zone du Bocage vendéen avec de nombreuses PME et ETI familiales en mécanique, électronique, et plasturgie. L'ameublement (Gautier, Parisot) et l'alimentaire (Fleury Michon, Sodebo) sont des secteurs emblématiques. Le Vendée Globe (Les Sables-d'Olonne) génère une industrie maritime et nautique avec des technologies avancées.",
      sectors: [
        "Industrie mécanique (Bocage vendéen — PME, ETI, mécatronique, robotique)",
        "Agroalimentaire (Fleury Michon, Sodebo, Tipiak — ERP, traçabilité, export)",
        "Ameublement (Gautier, Parisot — conception numérique, e-commerce)",
        "Nautisme (Bénéteau, Jeanneau, Grand Large Yachting — CAO, techno embarquée)",
        "Tourisme (côte vendéenne, Puy du Fou — réservation cloud, données visiteurs)",
        "Santé (CHD Vendée La Roche, cliniques — HDS, e-santé)",
        "Numérique (Atlantech, tech vendéenne — startups, cloud, SaaS)",
        "Collectivités (La Roche-sur-Yon Agglomération, CD85 — cloud souverain)",
      ],
      neighborhoods: [
        "La Roche-sur-Yon (85000)",
        "Les Herbiers – Montaigu-Vendée (85500/85600)",
        "Les Sables-d'Olonne (85100)",
        "Challans – Saint-Jean-de-Monts (85300/85160)",
        "Fontenay-le-Comte – Luçon (85200/85400)",
        "Saint-Gilles-Croix-de-Vie (85800)",
        "La Châtaigneraie (85120)",
        "Chantonnay – Sainte-Hermine (85110)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Vendée (85) ?",
          a: "Oui, CyberSecure intervient dans toute la Vendée : La Roche-sur-Yon Agglomération, Nord Vendée, Bocage Vendéen, Marais Poitevin. Nous connaissons bien le tissu d'ETI familiales vendéennes et les enjeux cyber des PME industrielles. CERT d'urgence 24/7.",
        },
        {
          q: "Les ETI familiales du Bocage vendéen (Fleury Michon, Gautier) : vulnérables aux attaques ransomware ?",
          a: "Les ETI familiales vendéennes sont des cibles privilégiées des ransomwares (LockBit, BlackCat, Akira) car elles ont souvent des moyens IT limités et des données de valeur (carnets de commandes clients, données RH, secrets de fabrication). Une attaque peut bloquer complètement une ligne de production. Les mesures essentielles : sauvegardes immuables testées (3-2-1), EDR managé sur tous les postes, segmentation entre OT industriel et IT bureautique, et plan de reprise (RTO < 4h pour une ETI industrielle). CyberSecure propose des audits adaptés aux ETI vendéennes avec des solutions économiquement viables.",
        },
        {
          q: "Bénéteau (Les Herbiers) fabrique des voiliers et bateaux à moteur : quels sont les risques cyber dans la construction navale de plaisance ?",
          a: "Bénéteau groupe (Jeanneau, Bénéteau, Lagoon, Prestige) conçoit des navires avec des outils CAO avancés (CATIA Marine, Rhino 3D) et gère des systèmes de production complexes (lignes d'infusion de carbone, assemblage composite). Les risques : vol des plans de conception des nouveaux modèles (espionnage industriel par des chantiers asiatiques), compromission des systèmes MES de production (perturbation de la chaîne), et attaques ransomware sur les ERP (SAP, Sage). CyberSecure accompagne les constructeurs navals dans leurs audits de sécurité.",
        },
        {
          q: "Le Puy du Fou (50 millions de visiteurs cumulés) : conformité RGPD et PCI DSS pour un parc d'attractions premium ?",
          a: "Le Puy du Fou collecte des données de millions de visiteurs (réservations, emails, données de paiement, photos). La conformité PCI DSS est obligatoire pour les paiements par carte (Le Puy du Fou traite des millions de transactions/an). Le RGPD impose : minimisation des données collectées, politique de conservation limitée, et droit d'accès et d'effacement. Un audit de sécurité du Puy du Fou couvre : sécurité du site de réservation en ligne, protection des terminaux de paiement (TPE), sécurité du réseau Wi-Fi visiteurs, et protection des systèmes de contrôle d'accès (billetterie). CyberSecure audite les parcs d'attractions.",
        },
        {
          q: "Quels financements pour un audit cyber en Vendée ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI de Vendée — diagnostics numériques. La Roche-sur-Yon Agglomération — programmes innovation. BPI France Pays de Loire — prêts innovation. Vendée Expansion accompagne les PME vendéennes dans leur développement. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteVendee;
