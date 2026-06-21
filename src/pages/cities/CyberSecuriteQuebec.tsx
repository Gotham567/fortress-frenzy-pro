import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteQuebec = () => (
  <CityLandingPage
    data={{
      city: "Québec",
      citySlug: "quebec",
      region: "Canada — Québec",
      postalCode: "G1R",
      intro: "CyberConform accompagne les PME, ETI et professions réglementées de Québec dans leur mise en conformité cybersécurité et protection des données. Cabinet francophone spécialisé, intervention rapide en Canada et dans toute la zone francophone.",
      localContext: "Québec et sa région Québec regroupent un tissu économique dynamique confronté à des obligations réglementaires croissantes en matière de cybersécurité. La principale réglementation applicable est : Loi 25 (protection des données personnelles au Québec) et Loi C-26 fédérale. CyberConform accompagne les entreprises de Canada avec une approche pragmatique, en français, adaptée aux budgets des PME et ETI.",
      sectors: [
        "PME et ETI de Québec",
        "Institutions financières et fiduciaires",
        "Cabinets juridiques et notaires",
        "Établissements de santé",
        "Organismes publics et parapublics",
        "Commerce et e-commerce",
      ],
      neighborhoods: [
        "Centre de Québec",
        "Capitale-Nationale",
        "Québec",
        "Canada",
        "Zone francophone (France, Belgique, Suisse, Luxembourg, Québec)",
        "Missions distancielles disponibles partout",
      ],
      faq: [
        {
          q: "Mon entreprise à Québec est-elle concernée par la réglementation cybersécurité ?",
          a: "Les entreprises de Québec sont soumises à : Loi 25 (protection des données personnelles au Québec) et Loi C-26 fédérale. CyberConform réalise un diagnostic d'éligibilité gratuit en 48h pour clarifier vos obligations et prioriser les actions.",
        },
        {
          q: "Proposez-vous vos services de conformité à Québec ?",
          a: "Oui. CyberConform intervient à Québec en présentiel pour les missions d'audit et de conseil, et à distance pour les travaux documentaires. Nos experts francophones maîtrisent les réglementations locales de Canada.",
        },
        {
          q: "Quel est le coût d'une mise en conformité à Québec ?",
          a: "Pour une PME de Québec, comptez entre 8 000 et 25 000 € HT (ou équivalent local) pour un accompagnement complet. Des aides publiques peuvent réduire ce coût selon votre pays. Devis gratuit personnalisé sous 48h.",
        },
        {
          q: "Proposez-vous un RSSI externalisé à Québec ?",
          a: "Oui. Notre service de RSSI à temps partagé est disponible à Québec : déplacements mensuels sur site, pilotage cyber, gestion des incidents. Tarif à partir de 1 500 € HT/mois selon les besoins.",
        },
        {
          q: "Quelle différence entre la réglementation de Canada et la réglementation française ?",
          a: "La principale réglementation applicable à Québec est : Loi 25 (protection des données personnelles au Québec) et Loi C-26 fédérale. CyberConform connaît les spécificités locales et vous aide à aligner vos pratiques sur les deux référentiels pour une conformité optimale.",
        },
      ],
    }}
  />
);

export default CyberSecuriteQuebec;
