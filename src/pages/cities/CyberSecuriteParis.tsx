import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteParis = () => (
  <CityLandingPage
    data={{
      city: "Paris",
      citySlug: "paris",
      region: "Île-de-France",
      postalCode: "75008",
      intro:
        "CyberConform accompagne les PME, ETI et cabinets d'avocats parisiens dans leur mise en conformité NIS2, RGPD et ISO 27001. Implantation au cœur du 8ᵉ arrondissement, intervention rapide dans toute l'Île-de-France.",
      localContext:
        "Paris concentre la majorité des sièges sociaux français concernés par la directive NIS2 et représente la première cible des cyberattaques en France. Les PME du tertiaire (avocats, experts-comptables, conseil, finance) y sont particulièrement exposées au phishing ciblé et aux ransomwares. Notre cabinet, basé Avenue des Champs-Élysées, intervient sur site dans Paris intra-muros sous 24h en cas d'incident et propose des prestations d'audit, de pentest et de RSSI à temps partagé adaptées au tissu économique parisien.",
      sectors: [
        "Cabinets d'avocats et notaires",
        "Cabinets d'expertise-comptable",
        "Conseil et services financiers",
        "Médias, communication et publicité",
        "Santé privée (cliniques, laboratoires)",
        "E-commerce et SaaS",
      ],
      neighborhoods: [
        "Paris 1er à 20ème arrondissement",
        "La Défense (92)",
        "Boulogne-Billancourt, Levallois, Neuilly",
        "Saint-Denis, Aubervilliers (93)",
        "Issy-les-Moulineaux, Vanves (92)",
        "Île-de-France (toute la région)",
      ],
      faq: [
        {
          q: "Combien coûte un audit cybersécurité à Paris pour une PME ?",
          a: "Pour une PME parisienne de 50 à 250 salariés, comptez entre 6 000 € et 15 000 € HT pour un audit complet (organisationnel + technique). Le diagnostic initial de 15 minutes est gratuit et sans engagement.",
        },
        {
          q: "Mon entreprise est à Paris, êtes-vous capables d'intervenir sur site ?",
          a: "Oui, notre équipe intervient sur site dans Paris intra-muros et toute l'Île-de-France. En cas d'incident grave (ransomware, intrusion), nous activons une cellule de crise sur place sous 24h.",
        },
        {
          q: "Quelles obligations NIS2 pour les cabinets d'avocats parisiens ?",
          a: "Les cabinets d'avocats traitant de données sensibles ou dépassant 50 salariés / 10 M€ de CA peuvent être concernés par NIS2 en tant qu'entités importantes. Nous proposons un diagnostic d'éligibilité gratuit pour clarifier votre situation.",
        },
        {
          q: "Proposez-vous un RSSI externalisé à Paris ?",
          a: "Oui. Notre service RSSI à temps partagé inclut des présences mensuelles sur votre site parisien, le pilotage de votre feuille de route cyber, la gestion des incidents et la préparation des audits NIS2 / ISO 27001.",
        },
        {
          q: "Quels sont les délais pour une mise en conformité NIS2 à Paris ?",
          a: "Comptez 3 à 6 mois pour une PME, 6 à 12 mois pour une ETI multi-sites. Notre méthodologie ANSSI permet de prioriser les mesures à fort impact dès le premier mois.",
        },
      ],
    }}
  />
);

export default CyberSecuriteParis;