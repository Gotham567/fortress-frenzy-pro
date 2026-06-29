import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteDoubs = () => (
  <CityLandingPage
    data={{
      city: "Doubs",
      citySlug: "doubs",
      region: "Bourgogne-Franche-Comté",
      postalCode: "25",
      intro: "CyberSecure est votre expert cybersécurité Doubs (25) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Besançon, Montbéliard, Pontarlier, Morteau, Audincourt et tout le département.",
      localContext: "Le Doubs est un département industriel fort du Grand Est avec deux pôles économiques distincts. Besançon est la capitale régionale, historiquement centre de la microtechnique et de l'horlogerie (FEMTO-ST, Statice, Percipio Robotics). Montbéliard-Sochaux concentre le groupe Stellantis (Peugeot, usine de Sochaux — plus de 100 ans de production automobile) avec tout un tissu de sous-traitants équipementiers (Faurecia, Plastic Omnium). La frontière suisse génère des relations économiques transfrontalières intenses (horlogerie, microtechnique, pharmacie). Besançon est aussi un centre médical régional avec le CHRU Jean-Minjoz.",
      sectors: [
        "Automobile (Stellantis Sochaux, Faurecia, Plastic Omnium — PLM, OT industriel)",
        "Microtechnique (FEMTO-ST, Statice, horlogerie — IP, données de précision)",
        "Pharmacie (Novartis Pharma, Nestlé Purina Pontarlier, Lactalis Besançon)",
        "Transfrontalier Suisse (horlogers suisses, finance Bâle — flux data CH/FR)",
        "Numérique (TEMIS, startups bisontines, ESN locales — cloud, SaaS)",
        "Santé (CHRU Besançon, NCI — HDS, e-santé, recherche clinique)",
        "Bois et plasturgie (filière forêts Doubs — ERP, traçabilité bois)",
        "Collectivités (Grand Besançon Métropole, CD25 — cloud souverain, dématérialisation)",
      ],
      neighborhoods: [
        "Besançon – Battant – Planoise (25000)",
        "Montbéliard – Sochaux – Audincourt (25200/25600)",
        "Pontarlier – Morteau (25300/25500)",
        "Baume-les-Dames (25110)",
        "Ornans – Quingey (25290/25440)",
        "Héricourt – Luxeuil (70400 proche)",
        "Valentigney – Seloncourt (25700)",
        "Exincourt – Grand-Charmont (25400)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Doubs (25) ?",
          a: "Oui, CyberSecure intervient dans tout le Doubs : Grand Besançon Métropole, Pays de Montbéliard, Haut-Doubs, et zones frontalières Suisse. Nous avons une expertise dans les environnements industriels automobiles et microtechniques. CERT d'urgence 24/7.",
        },
        {
          q: "Stellantis Sochaux (Peugeot) : comment sécuriser une usine automobile historique en transformation numérique 4.0 ?",
          a: "L'usine de Sochaux (140 000 m², 10 000 salariés) intègre progressivement des technologies Industrie 4.0 : robots collaboratifs, AGV (Automated Guided Vehicles), capteurs IoT de maintenance prédictive, et tableaux de bord de production en temps réel. Cette transformation OT/IT crée des surfaces d'attaque inédites. Un audit de sécurité industrielle chez Stellantis Sochaux couvre : cartographie OT (Purdue Model Layer 1-4), sécurité des réseaux industriels (PROFINET, EtherCAT), gestion des accès des sous-traitants de maintenance, et conformité aux politiques cybersécurité du groupe Stellantis (basé sur IEC 62443).",
        },
        {
          q: "L'industrie microtechnique de Besançon (FEMTO-ST) : risques cyber pour la micro-fabrication de précision ?",
          a: "FEMTO-ST est un laboratoire de recherche de niveau mondial en microtechniques, MEMS (Micro Electro-Mechanical Systems), et optique. Ses recherches peuvent avoir des applications dans la défense et le luxe (mouvements de montre ultra-précis). Les risques : espionnage de la R&D (attaques APT sur les systèmes de publication et de gestion des brevets), compromission des instruments de mesure connectés (microscopes électroniques, salles blanches connectées), et fuites via les partenariats industriels. CyberSecure accompagne les laboratoires de recherche industrielle dans leur sécurité.",
        },
        {
          q: "Les relations économiques transfrontalières Doubs-Suisse : RGPD vs loi suisse sur la protection des données ?",
          a: "La Suisse a une loi sur la protection des données (nLPD, entrée en vigueur en septembre 2023) calquée sur le RGPD mais avec des différences. Les entreprises doubistes qui transfèrent des données vers des partenaires suisses doivent : utiliser les clauses contractuelles types (CCT) appropriées (la Suisse n'est pas dans l'UE mais bénéficie d'une décision d'adéquation), documenter ces transferts dans le registre des traitements RGPD, et s'assurer que le partenaire suisse respecte un niveau de protection équivalent. CyberSecure conseille sur les transferts de données France-Suisse.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Doubs ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI du Doubs — diagnostics numériques. Grand Besançon Métropole — programmes innovation. BPI France Bourgogne-Franche-Comté — prêts innovation. Le TEMIS et la Cité des Microtechniques accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteDoubs;
