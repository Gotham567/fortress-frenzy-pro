import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteLoireAtlantique = () => (
  <CityLandingPage
    data={{
      city: "Loire-Atlantique",
      citySlug: "loire-atlantique",
      region: "Pays de la Loire",
      postalCode: "44",
      intro: "CyberSecure est votre expert cybersécurité Loire-Atlantique (44) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Nantes, Saint-Nazaire, Saint-Herblain, Rezé, Orvault et tout le département.",
      localContext: "La Loire-Atlantique est l'un des départements à la croissance économique la plus dynamique de France. Nantes est la 6e métropole française, hub d'innovation avec la French Tech Nantes (fintech, SaaS, medtech). Saint-Nazaire concentre l'industrie navale (Chantiers de l'Atlantique, Naval Group) et aéronautique (Airbus). Le pôle de compétitivité EMC2 (excellence manufacturing) rassemble des entreprises industrielles avancées. La filière agroalimentaire (LDC, SEB, Béghin-Say) est importante, ainsi que les mutuelles et assurances (Groupama, Macif).",
      sectors: [
        "Naval et aéronautique (Chantiers de l'Atlantique, Naval Group, Airbus Saint-Nazaire)",
        "Fintech et insurtech (Nantes French Tech, Crédit Agricole Atlantique, Groupama Loire Bretagne)",
        "Agroalimentaire (LDC, Lactalis Pays de Loire, Béghin-Say — ERP, traçabilité)",
        "Numérique (SII Nantes, Sopra Steria, Atos — ESN, cloud managed services)",
        "Santé (CHU Nantes, ICO, Institut du Thorax — HDS, recherche)",
        "Startups SaaS (Epitech, Nantes Digital Week, incubateurs — cloud-native)",
        "Logistique (Port Nantes-Saint-Nazaire, XPO — WMS, TMS cloud)",
        "Collectivités (Nantes Métropole — Numspot, cloud souverain, smart city)",
      ],
      neighborhoods: [
        "Nantes – Île de Nantes – Euronantes (44000)",
        "Saint-Herblain – Orvault (44800/44700)",
        "Rezé – Vertou – Saint-Sébastien (44400/44120)",
        "Saint-Nazaire – Trignac – Montoir (44600)",
        "La Baule – Guérande (44500)",
        "Ancenis-Saint-Géréon (44150)",
        "Châteaubriant (44110)",
        "Clisson – Vallet – Vertou (44190)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Loire-Atlantique (44) ?",
          a: "Oui, CyberSecure intervient dans tout le 44 : Nantes Métropole, Saint-Nazaire Agglomération, Pays de la Loire côtier, Pays d'Ancenis. Nos consultants connaissent les secteurs naval, aéronautique et fintech nantais. CERT d'urgence 24/7.",
        },
        {
          q: "Les Chantiers de l'Atlantique (Saint-Nazaire) : comment protéger les plans des paquebots de luxe ?",
          a: "Les plans de conception des grands paquebots (MSC World Europa, Icon of the Seas) représentent des milliards d'euros de propriété intellectuelle. Les risques : espionnage industriel (attaques APT ciblées sur les systèmes de CAO/DAO), compromission des accès partenaires (fournisseurs d'équipements comme ABB Marine, Wärtsilä), et attaques sur les systèmes de gestion de production (MES). Un pentest chez un constructeur naval couvre l'infrastructure IT, les environnements CAO, et les accès sous-traitants. CyberSecure audite les environnements industriels complexes.",
        },
        {
          q: "Les fintechs nantaises (PayFit, Younited) : comment passer l'audit de sécurité avant une levée de fonds série B ?",
          a: "Pour une levée série B, les investisseurs institutionnels exigent un rapport de pentest récent (moins de 6 mois), une conformité RGPD documentée, et souvent une certification ISO 27001 ou SOC 2. CyberSecure propose pour les fintechs nantaises : pentest applicatif de la plateforme SaaS (OWASP Top 10), audit de l'infrastructure cloud (AWS/Azure), évaluation de la conformité PCI DSS si paiements, et rapport exécutif investor-friendly. Délai : 3-4 semaines pour un audit complet.",
        },
        {
          q: "Naval Group à Nantes/Saint-Nazaire : quelles sont les contraintes cyber dans la défense navale ?",
          a: "Naval Group conçoit des sous-marins nucléaires (SNLEs) et des frégates pour la Marine Nationale. Les données liées à ces programmes sont classifiées CONFIDENTIEL DÉFENSE. Les prestataires de Naval Group doivent disposer d'habilitations gouvernementales et de systèmes d'information homologués ANSSI. Pour les données non classifiées (maintenance, logistique), des systèmes cloud sécurisés avec BYOK et accès conditionnel sont possibles. CyberSecure accompagne les sous-traitants de la défense dans leur conformité.",
        },
        {
          q: "Quels financements pour un audit cybersécurité en Loire-Atlantique ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Nantes-Saint-Nazaire — chèques transformation numérique. Nantes Métropole — programmes numériques. BPI France Pays de Loire — prêts innovation. Le pôle EMC2 et la French Tech Nantes accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteLoireAtlantique;
