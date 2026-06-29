import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteYvelines = () => (
  <CityLandingPage
    data={{
      city: "Yvelines",
      citySlug: "yvelines",
      region: "Île-de-France",
      postalCode: "78",
      intro: "CyberSecure est votre expert cybersécurité Yvelines (78) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Versailles, Vélizy-Villacoublay, Saint-Quentin-en-Yvelines, Mantes-la-Jolie, Rambouillet et tout le département.",
      localContext: "Les Yvelines sont un département stratégique de l'Île-de-France occidental. Vélizy-Villacoublay est l'un des plus grands parcs d'activités d'Île-de-France avec Thales Group (siège), Dassault Systèmes, Airbus Defence & Space, DXC Technology, et des dizaines d'autres acteurs tech et défense. Saint-Quentin-en-Yvelines accueille Renault (siège technique) et Toyota Europe (siège). Versailles est la préfecture avec une économie tertiaire importante. La ville de Poissy héberge également des sites industriels de Stellantis.",
      sectors: [
        "Défense et aérospatial (Thales Vélizy, Airbus D&S — données classifiées, TISAX)",
        "Automobile (Renault SQY, Toyota Europe, Stellantis Poissy — PLM, OT)",
        "CAO et PLM (Dassault Systèmes Vélizy — 3DExperience, plateformes collaboratives)",
        "Tech et consulting (DXC, Cap Gemini Vélizy, Atos — SI grands comptes)",
        "Pharma (Sanofi Montpellier proche, CRO yvelinois — GxP, essais)",
        "Santé (Hôpital André-Mignot, cliniques — HDS, télémédecine)",
        "Luxe et mode (Ralph Lauren, Lacoste — e-commerce, données clients)",
        "Collectivités (CASQY, CD78, villes nouvelles SQY — cloud souverain)",
      ],
      neighborhoods: [
        "Vélizy-Villacoublay (78140)",
        "Versailles (78000)",
        "Saint-Quentin-en-Yvelines – Guyancourt (78280)",
        "Mantes-la-Jolie – Limay (78200)",
        "Rambouillet (78120)",
        "Poissy – Carrières-sous-Poissy (78300)",
        "Élancourt – Maurepas (78990/78310)",
        "Les Mureaux – Buchelay (78130)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Yvelines (78) ?",
          a: "Oui, CyberSecure intervient dans tout le 78 : Saint-Quentin-en-Yvelines, Versailles Grand Parc, Mantes-en-Yvelines, Rambouillet Territoires. Nous avons une expertise dans les environnements défense/aérospatial de Vélizy et les systèmes automobiles de SQY. CERT d'urgence 24/7.",
        },
        {
          q: "Thales Group (siège à Vélizy) : comment réaliser un pentest dans un groupe de défense et technologie ?",
          a: "Thales est à la fois un acteur de la défense (soumis au SGDSN pour ses systèmes classifiés) et une entreprise technologique commerciale (télécoms, transport, digital identity). Un pentest chez Thales distingue deux périmètres : les SI sensibles/défense (non accessibles aux prestataires non habilités) et les SI commerciaux et corporate (site web, applications métiers, systèmes de gestion). Pour le périmètre commercial, CyberSecure peut réaliser : pentest web/API, audit de la sécurité de l'infrastructure cloud (Thales utilise AWS, Azure, GCP), et test d'ingénierie sociale pour les équipes ventes et support.",
        },
        {
          q: "Dassault Systèmes (Vélizy) : comment sécuriser une plateforme PLM collaborative utilisée par l'aéronautique mondiale ?",
          a: "Dassault Systèmes développe 3DExperience, la plateforme PLM utilisée par Airbus, Boeing, Ferrari, et des milliers d'industriels mondiaux. La sécurité de cette plateforme est critique : une vulnérabilité chez DS peut affecter l'ensemble de ses clients. DS maintient des programmes de bug bounty, des red team permanentes, et des certifications ISO 27001 pour ses offres cloud. Pour les clients industriels (sous-traitants aéro qui utilisent 3DExperience), CyberSecure vérifie la configuration de sécurité de leur instance DS : gestion des droits d'accès par projet, contrôle des exports de données, et intégration avec leur SSO d'entreprise.",
        },
        {
          q: "Renault (Technocentre de Guyancourt) : sécurité des données de conception des nouveaux véhicules électriques ?",
          a: "Le Technocentre Renault de Guyancourt emploie 13 000 ingénieurs travaillant sur la conception des futurs véhicules Renault (Mégane E-Tech, 5 électrique). Ces données de conception (maquettes numériques CATIA, spécifications des batteries, logiciels embarqués) sont d'une valeur immense pour les concurrents. Les mesures de sécurité : DRM (Digital Rights Management) sur les fichiers CATIA échangés avec les sous-traitants, segmentation réseau entre les environnements de conception et le réseau corporate, chiffrement des portables ingénieurs (Bitlocker), et formation aux risques de l'ingénierie sociale. CyberSecure audite les environnements R&D automobile.",
        },
        {
          q: "Quels financements pour un audit cyber dans les Yvelines ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Versailles-Yvelines — diagnostics numériques. CASQY et Versailles Grand Parc — programmes innovation. BPI France Île-de-France — prêts innovation. Paris-Saclay Université et Systematic Paris-Region accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteYvelines;
