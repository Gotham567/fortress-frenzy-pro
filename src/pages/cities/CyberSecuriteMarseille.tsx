import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteMarseille = () => (
  <CityLandingPage
    data={{
      city: "Marseille",
      citySlug: "marseille",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "13001",
      intro:
        "CyberConform accompagne les entreprises marseillaises et de la région PACA dans leur conformité NIS2, RGPD et leur cybersécurité opérationnelle. Audit, pentest, RSSI externalisé et réponse à incident pour le port, la logistique, le tourisme et la santé en région.",
      localContext:
        "Marseille est le premier port de France, hub méditerranéen majeur et place forte du numérique avec plus de 200 km de câbles sous-marins atterrissant dans la cité phocéenne (Marseille = top 5 mondial pour le trafic Internet). Cette position stratégique en fait une cible privilégiée des cyberattaques. Notre cabinet accompagne aussi bien les acteurs portuaires (logistique, transport maritime) que les data centers, les PME du tertiaire de la Joliette et les ETI de la région PACA.",
      sectors: [
        "Logistique portuaire et maritime",
        "Data centers et opérateurs télécoms",
        "Tourisme et hôtellerie",
        "Santé et établissements hospitaliers",
        "Industrie et énergie (Fos-sur-Mer)",
        "PME et ETI provençales",
      ],
      neighborhoods: [
        "Marseille (1er à 16ème arrondissement)",
        "La Joliette et Euroméditerranée",
        "Aix-en-Provence",
        "Toulon, Nice, Cannes, Monaco",
        "Avignon, Montpellier",
        "Région Sud / PACA et Occitanie",
      ],
      faq: [
        {
          q: "Pourquoi Marseille est-elle une cible cyber prioritaire ?",
          a: "Avec 16 câbles sous-marins, Marseille est l'un des premiers hubs Internet mondiaux. Ses data centers, son port (1er port français) et son écosystème numérique en font une cible stratégique pour les cyberattaques étatiques et criminelles.",
        },
        {
          q: "Accompagnez-vous les acteurs portuaires et logistiques ?",
          a: "Oui. Le secteur portuaire est entité essentielle au sens de NIS2. Nous accompagnons commissionnaires, transitaires et opérateurs logistiques sur la conformité NIS2, la sécurisation EDI et la résilience opérationnelle.",
        },
        {
          q: "Intervenez-vous à Aix-en-Provence et sur la Côte d'Azur ?",
          a: "Oui, notre zone d'intervention couvre Marseille, Aix-en-Provence, Toulon, Nice, Cannes et Monaco. Audit sur site, pentest et formation possible partout en région PACA.",
        },
        {
          q: "Quels enjeux cybersécurité pour les hôtels et établissements touristiques marseillais ?",
          a: "Les hôtels traitent volumes importants de données personnelles et bancaires (RGPD, PCI-DSS) et sont exposés au phishing, fraude au président et compromission de PMS. Nous proposons des audits ciblés pour le secteur hôtelier.",
        },
        {
          q: "Combien coûte un pentest à Marseille ?",
          a: "Un test d'intrusion applicatif coûte entre 5 000 € et 15 000 € HT selon la complexité. Nous opérons à distance ou sur site dans toute la région PACA, avec rapport conforme PASSI et plan de remédiation détaillé.",
        },
      ],
    }}
  />
);

export default CyberSecuriteMarseille;