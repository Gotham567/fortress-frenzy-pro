import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteIlleEtVilaine = () => (
  <CityLandingPage
    data={{
      city: "Ille-et-Vilaine",
      citySlug: "ille-et-vilaine",
      region: "Bretagne",
      postalCode: "35",
      intro: "CyberConform est votre prestataire cybersécurité Ille-et-Vilaine (35) : audit NIS2, pentest, conformité RGPD et réponse aux incidents pour les entreprises de Rennes, Cesson-Sévigné, Saint-Malo, Bruz, Vitré, Fougères et tout le département.",
      localContext: "L'Ille-et-Vilaine est le cœur numérique et cybersécurité de la Bretagne. Rennes est la 10e métropole française et l'une des villes tech les plus dynamiques : Rennes Atalante héberge plus de 700 entreprises tech, et le campus Cyber Bretagne fait de Rennes un pôle cybersécurité de rang européen. Cesson-Sévigné est la Silicon Valley bretonne avec des entreprises comme Thales, Orange, Nokia et de nombreuses startups. Saint-Malo est un port majeur et une économie touristique très numérisée. Vitré concentre des industries agroalimentaires et logistiques importantes.",
      sectors: [
        "Cybersécurité (Thales Rennes, Orange Cyberdefense, Amossys, campus Cyber Bretagne)",
        "Numérique (Rennes Atalante, Cesson-Sévigné — 700+ entreprises tech)",
        "Agroalimentaire (Lactalis Laval, coopératives laitières, abattoirs 35)",
        "Automobile (équipementiers, logistique)",
        "Santé (CHU Rennes, cliniques, e-santé bretonne)",
        "Télécommunications (Orange, Nokia, SFR R&D à Rennes)",
        "Tourisme (Saint-Malo, Cancale, Mont-Saint-Michel)",
        "Collectivités (Rennes Métropole, CD35, Rennes Ville Numérique)",
      ],
      neighborhoods: [
        "Rennes – Centre – Beaulieu (35000)",
        "Cesson-Sévigné – Bruz – Vezin-le-Coquet (35510)",
        "Rennes Atalante – Via Silva – Technopole (35700)",
        "Saint-Malo – Paramé – Cancale (35400)",
        "Vitré – Fougères (35500)",
        "Redon – Bain-de-Bretagne (35600)",
        "Montfort-sur-Meu – Bédée (35160)",
        "Saint-Grégoire – Saint-Jacques-de-la-Lande (35760)",
      ],
      faq: [
        {
          q: "Couvrez-vous toute l'Ille-et-Vilaine (35) ?",
          a: "Oui, CyberConform intervient dans tout le département de l'Ille-et-Vilaine : Rennes Métropole, Pays de Fougères, Pays de Vitré, Pays de Saint-Malo et zones rurales. Nos consultants sont notamment présents dans l'écosystème Rennes Atalante. CERT d'urgence 24/7.",
        },
        {
          q: "Le campus Cyber Bretagne à Rennes : quel impact sur les PME locales ?",
          a: "Le campus Cyber Bretagne (Rennes Atalante) rassemble des acteurs publics et privés de la cybersécurité. Pour les PME rennaises, cela signifie un écosystème de partenaires qualifiés, des formations, et un accès facilité à des experts. CyberConform participe à cet écosystème et accompagne les PME dans leurs audits NIS2, pentests et conformité RGPD.",
        },
        {
          q: "Les startups de Cesson-Sévigné ont-elles des besoins spécifiques en cybersécurité ?",
          a: "Oui. Les startups tech de Cesson-Sévigné (beaucoup en SaaS, fintech, healthtech, deeptech) ont des besoins croissants : sécurisation des architectures cloud (AWS/Azure), conformité RGPD dès le lancement, audit de sécurité avant levée de fonds, et certifications ISO 27001 pour les clients enterprise. CyberConform propose des packages startup adaptés aux budgets des entreprises en amorçage.",
        },
        {
          q: "Quels financements pour un audit cyber en Ille-et-Vilaine ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Ille-et-Vilaine — diagnostics numériques cofinancés. Rennes Métropole — programmes de soutien aux entreprises numériques. BPI France Bretagne — prêts innovation. Rennes Atalante propose aussi des services aux membres de l'incubateur pour les questions de sécurité.",
        },
        {
          q: "Délai d'intervention pour un audit NIS2 en Ille-et-Vilaine ?",
          a: "Pour un audit NIS2 planifié en Ille-et-Vilaine, nos délais habituels sont de 5 à 10 jours ouvrés. La phase d'audit terrain dure en général 2 à 5 jours selon la taille de l'entreprise. Nous livrons le rapport sous 10 jours ouvrés après la phase terrain. Pour une réponse à incident, notre CERT intervient dans les 4 heures sur Rennes.",
        },
      ],
    }}
  />
);

export default CyberSecuriteIlleEtVilaine;
