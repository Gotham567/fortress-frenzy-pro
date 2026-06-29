import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteAuvergneRhoneAlpes = () => (
  <CityLandingPage
    data={{
      city: "Auvergne-Rhône-Alpes",
      citySlug: "auvergne-rhone-alpes",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "01 / 03 / 07 / 15 / 26 / 38 / 42 / 43 / 63 / 69 / 73 / 74",
      intro: "CyberConform est votre prestataire cybersécurité Auvergne-Rhône-Alpes : audit NIS2, pentest, conformité RGPD et réponse aux incidents pour les entreprises de Lyon, Grenoble, Saint-Étienne, Clermont-Ferrand, Annecy, Chambéry, Valence et toute la région.",
      localContext: "Auvergne-Rhône-Alpes est la 2e région économique de France après l'Île-de-France. Lyon est le 2e pôle économique national avec une concentration exceptionnelle de groupes internationaux (bioMérieux, Sanofi, EDF, Renault Trucks, Michelin à Clermont) et un écosystème tech (French Tech Lyon). Grenoble est le 3e pôle de recherche français (CEA, INRIA, STMicroelectronics) et un hub semis-conducteurs et photovoltaïque. Saint-Étienne maintient une industrie diversifiée (armement, vélo, design). La région compte aussi de nombreuses PME industrielles dans la vallée du Rhône et une économie touristique alpestre (Savoie, Haute-Savoie). La densité industrielle et la présence d'acteurs de défense font d'AuRA une région prioritaire pour la cybersécurité.",
      sectors: [
        "Pharmacie et biotech (bioMérieux, Sanofi, Boehringer, Lyon-Gerland)",
        "Semiconducteurs et électronique (STMicroelectronics Crolles, Soitec Bernin)",
        "Nucléaire et énergie (EDF Lyon, CEA Cadarache, Marcoule)",
        "Automobile et mobilité (Renault Trucks, Stellantis, Volvo Lyon)",
        "Pneus et caoutchouc (Michelin Clermont-Ferrand)",
        "Tech et startups (French Tech Lyon, Grenoble Alpes Métropole)",
        "Tourisme alpin (Savoie, Haute-Savoie, stations de ski)",
        "Luxe et montres (Annecy, Haute-Savoie, marques horlogères)",
      ],
      neighborhoods: [
        "Lyon Métropole – Villeurbanne – Vénissieux – Décines-Charpieu",
        "Grenoble-Alpes Métropole – Crolles – Meylan – Échirolles",
        "Saint-Étienne Métropole – Roanne (42)",
        "Clermont-Ferrand Métropole – Riom – Vichy (63)",
        "Annecy – Cran-Gevrier – Epagny (74)",
        "Chambéry – Aix-les-Bains – Albertville (73)",
        "Valence – Romans-sur-Isère (26)",
        "Bourg-en-Bresse – Ambérieu (01)",
      ],
      faq: [
        {
          q: "Couvrez-vous toute la région AuRA, des Alpes à l'Auvergne ?",
          a: "Oui, CyberConform intervient dans les 12 départements d'Auvergne-Rhône-Alpes : des métropoles (Lyon, Grenoble, Clermont-Ferrand) aux zones rurales (Ardèche, Cantal, Haute-Loire) et aux stations alpines (Savoie, Haute-Savoie). Nos consultants se déplacent sur site partout dans la région, y compris dans les zones de montagne et les sites industriels isolés. CERT d'urgence 24/7.",
        },
        {
          q: "Les laboratoires et biotechs lyonnais sont-ils concernés par NIS2 et HDS ?",
          a: "Oui. Les laboratoires pharmaceutiques et les biotechs lyonnais (bioMérieux, Sanofi, Boehringer) sont des entités essentielles NIS2 dans le secteur santé. Les logiciels médicaux et les plateformes de télémédecine doivent aussi obtenir la certification HDS (Hébergement Données de Santé). CyberConform accompagne les acteurs lyonnais de la santé sur ces deux certifications : audit NIS2, préparation HDS, sécurité des systèmes de recherche clinique et conformité RGPD données de santé.",
        },
        {
          q: "STMicroelectronics à Crolles est-il concerné par NIS2 ?",
          a: "Oui. STMicroelectronics et son écosystème (Soitec, fournisseurs de la filière semi-conducteurs grenobloise) sont concernés par NIS2 dans plusieurs catégories : fabrication de produits électroniques et optiques (entité importante), et potentiellement comme fournisseurs d'infrastructures numériques critiques. La sécurité des systèmes de production de semi-conducteurs (salles blanches connectées, ERP industriels, propriété intellectuelle des procédés) est un enjeu majeur. CyberConform a des experts OT spécialisés pour ce secteur.",
        },
        {
          q: "Mon hôtel ou resort alpin (Savoie, Haute-Savoie) doit-il se conformer au RGPD ?",
          a: "Oui. Les établissements touristiques alpins collectent des données clients via les réservations (OTA : Booking, Airbnb), les check-in, les activités proposées et les programmes de fidélité. Le RGPD s'applique pleinement, avec des obligations particulières si vous hébergez des ressortissants non-européens. La sécurité des systèmes de paiement (PCI DSS pour les TPE et systèmes de réservation) est aussi obligatoire. CyberConform propose des audits RGPD adaptés à l'hôtellerie de montagne.",
        },
        {
          q: "Quelle est l'offre de CyberConform pour les PME industrielles de la Vallée du Rhône ?",
          a: "La Vallée du Rhône (Valence, Romans, Montélimar) concentre de nombreuses PME industrielles (plasturgie, mécanique, agroalimentaire) qui sont souvent sous-traitantes de grands groupes. CyberConform propose des packages PME adaptés : diagnostic NIS2 gratuit, audit de sécurité IT ciblé, mise en conformité RGPD et réponse aux questionnaires fournisseurs des grands comptes. Prix transparents, délais courts.",
        },
      ],
    }}
  />
);

export default CyberSecuriteAuvergneRhoneAlpes;
