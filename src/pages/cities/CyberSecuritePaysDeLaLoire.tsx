import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuritePaysDeLaLoire = () => (
  <CityLandingPage
    data={{
      city: "Pays de la Loire",
      citySlug: "pays-de-la-loire",
      region: "Pays de la Loire",
      postalCode: "44 / 49 / 53 / 72 / 85",
      intro: "CyberConform est votre prestataire cybersécurité Pays de la Loire : audit NIS2, pentest, conformité RGPD et réponse aux incidents pour les entreprises de Nantes, Saint-Nazaire, Angers, Le Mans, La Roche-sur-Yon et toute la région.",
      localContext: "Les Pays de la Loire combinent une économie industrielle puissante et un dynamisme numérique croissant. Nantes est la 4e métropole française et l'une des villes tech les plus attractives d'Europe (French Tech Nantes, Digital League, 1er réseau de French Tech hors Paris). Saint-Nazaire concentre la construction navale et aéronautique (Airbus, Chantiers de l'Atlantique, STX France). Le Mans abrile des industries automobile et logistique. La filière agroalimentaire (Lactalis, Maine Viande, conserveries vendéennes) est omniprésente. CyberConform connaît les spécificités de ce tissu économique régional.",
      sectors: [
        "Naval et aéronautique (Chantiers de l'Atlantique, Airbus Saint-Nazaire)",
        "Automobile et équipementiers (Renault Le Mans, sous-traitants 72)",
        "Agroalimentaire (Lactalis, Maine Viande, LDC, conserveries vendéennes)",
        "Numérique et tech (French Tech Nantes, startups ligériennes)",
        "Santé (CHU Nantes, Angers, cliniques régionales)",
        "Énergie et offshore (EMR, éolien offshore Saint-Nazaire)",
        "Commerce et distribution (Fnac Darty, E.Leclerc région)",
        "Collectivités (Nantes Métropole, Région Pays de la Loire)",
      ],
      neighborhoods: [
        "Nantes Métropole – Rezé – Saint-Herblain – Orvault",
        "Saint-Nazaire Agglomération – Montoir-de-Bretagne (44)",
        "Angers – Cholet – Saumur (49)",
        "Le Mans Métropole (72)",
        "La Roche-sur-Yon – Les Sables-d'Olonne (85)",
        "Laval – Mayenne (53)",
        "Châteaubriant – Ancenis (44)",
        "Saint-Jean-de-Monts – Les Herbiers – Fontenay-le-Comte (85)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 5 départements des Pays de la Loire (44, 49, 53, 72, 85) ?",
          a: "Oui, CyberConform intervient dans toute la région Pays de la Loire : Loire-Atlantique (44), Maine-et-Loire (49), Mayenne (53), Sarthe (72) et Vendée (85). Nos consultants se déplacent sur site partout dans la région, des métropoles (Nantes, Angers, Le Mans) aux zones rurales et littorales. CERT d'urgence 24/7 disponible dans toute la région.",
        },
        {
          q: "Les Chantiers de l'Atlantique et l'aéronautique de Saint-Nazaire sont-ils soumis à NIS2 ?",
          a: "Oui. Les Chantiers de l'Atlantique (construction navale) et Airbus (Saint-Nazaire, assemblage des fuselages A320/A330) sont des entités importantes NIS2 dans les catégories transport et fabrication de matériels de transport. Leurs sous-traitants et fournisseurs ayant plus de 50 salariés sont également concernés. CyberConform accompagne l'écosystème industriel de Saint-Nazaire dans cette mise en conformité.",
        },
        {
          q: "La French Tech Nantes a-t-elle des besoins spécifiques en cybersécurité ?",
          a: "Nantes est l'une des premières communautés French Tech de France en dehors de Paris (2 500+ startups, scale-ups et partenaires). Les startups nantaises ont des besoins croissants : sécurisation des architectures cloud AWS/Azure/GCP, conformité RGPD dès le lancement, audit de sécurité avant levée de fonds (exigé en série A), certification ISO 27001 pour les clients enterprise. CyberConform propose des packages startup adaptés aux budgets des entreprises en amorçage.",
        },
        {
          q: "Quels financements pour un audit cybersécurité en Pays de la Loire ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Pays de la Loire via ses dispositifs de soutien au numérique (programme Numérique en Entreprise, fonds FEDER). Les CCI régionales (CCI Loire-Atlantique, CCI Maine-et-Loire, CCI Vendée) proposent des diagnostics numériques co-financés. BPI France Pays de la Loire — prêts numériques. La Digital League (association numérique régionale) accompagne aussi ses membres. Diagnostic gratuit chez CyberConform.",
        },
        {
          q: "Mon entreprise agroalimentaire vendéenne est-elle concernée par NIS2 ?",
          a: "Les entreprises agroalimentaires vendéennes et ligériennes dépassant 50 salariés ou 10 M€ de CA sont des entités importantes NIS2 dans le secteur alimentation. La Vendée est l'un des premiers départements agroalimentaires français (élevage, conserveries, abattoirs) — beaucoup d'acteurs sont dans le périmètre. CyberConform propose un diagnostic NIS2 gratuit et adapté à l'agroalimentaire : enjeux IT/OT, chaîne d'approvisionnement, plans de continuité.",
        },
      ],
    }}
  />
);

export default CyberSecuritePaysDeLaLoire;
