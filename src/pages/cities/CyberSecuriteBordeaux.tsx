import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteBordeaux = () => (
  <CityLandingPage
    data={{
      city: "Bordeaux",
      citySlug: "bordeaux",
      region: "Nouvelle-Aquitaine",
      postalCode: "33000",
      intro:
        "CyberConform accompagne les châteaux viticoles, négociants, ETI industrielles et PME bordelaises dans leur stratégie cybersécurité, NIS2 et RGPD. Audit, pentest et RSSI externalisé pour Bordeaux Métropole et toute la Nouvelle-Aquitaine.",
      localContext:
        "Bordeaux est un pôle économique majeur du sud-ouest, entre filière viticole prestigieuse, aéronautique-défense (Mérignac), numérique (Bordeaux Métropole French Tech) et tourisme international. Les châteaux et négociants viticoles sont devenus des cibles privilégiées du ransomware et de la fraude au président, tandis que les industriels de la défense et du spatial subissent un risque d'espionnage économique élevé. Notre cabinet accompagne ces acteurs avec une approche pragmatique et confidentielle.",
      sectors: [
        "Filière viticole (châteaux, négociants)",
        "Aéronautique, défense et spatial",
        "French Tech bordelaise et SaaS",
        "Tourisme et hôtellerie haut de gamme",
        "Banque privée et gestion de patrimoine",
        "Santé et biotech",
      ],
      neighborhoods: [
        "Bordeaux centre et Chartrons",
        "Mérignac, Pessac, Talence",
        "Bordeaux Métropole (28 communes)",
        "Bassin d'Arcachon",
        "Bayonne, Pau, La Rochelle, Limoges",
        "Nouvelle-Aquitaine (toute la région)",
      ],
      faq: [
        {
          q: "Les châteaux et négociants viticoles sont-ils concernés par NIS2 ?",
          a: "Les groupes viticoles dépassant 50 salariés ou 10 M€ de CA peuvent être concernés (chaîne d'approvisionnement alimentaire). Au-delà de NIS2, le risque ransomware et la fraude au président sont des menaces directes pour la filière.",
        },
        {
          q: "Intervenez-vous physiquement à Bordeaux et dans le vignoble ?",
          a: "Oui. Nous intervenons sur site à Bordeaux, dans le Médoc, Saint-Émilion et toute la Gironde. Notre équipe se déplace également à Mérignac (aéronautique), au Bassin d'Arcachon et dans toute la Nouvelle-Aquitaine.",
        },
        {
          q: "Comment protéger un château viticole d'une cyberattaque ?",
          a: "Sauvegardes immuables, MFA généralisée, sensibilisation des équipes administratives à la fraude au président, ségrégation des accès SI gestion / SI vinification. Notre offre 'Cyber Vignoble' adresse spécifiquement ces enjeux.",
        },
        {
          q: "Travaillez-vous avec les sous-traitants aéronautiques bordelais ?",
          a: "Oui. Les sous-traitants Airbus, Dassault et Thales sont soumis à des exigences strictes (SecNumCloud, ISO 27001, IRSE). Nous accompagnons la conformité, les audits clients et la préparation des certifications.",
        },
        {
          q: "Quel budget cybersécurité pour une PME bordelaise ?",
          a: "Pour une PME de 30 à 100 salariés, comptez 15 à 40 k€/an pour un dispositif de base : MFA, EDR, sauvegardes, sensibilisation et RSSI externalisé. Nous proposons un diagnostic gratuit pour cadrer votre besoin.",
        },
      ],
    }}
  />
);

export default CyberSecuriteBordeaux;