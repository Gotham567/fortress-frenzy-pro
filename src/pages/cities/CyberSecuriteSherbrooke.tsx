import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteSherbrooke = () => (
  <CityLandingPage
    data={{
      city: "Sherbrooke",
      citySlug: "sherbrooke",
      region: "Canada — Québec",
      postalCode: "J1H",
      intro: "CyberConform accompagne les PME, ETI et professions réglementées de Sherbrooke dans leur mise en conformité cybersécurité et protection des données. Cabinet francophone spécialisé, intervention rapide en Canada et dans toute la zone francophone.",
      localContext: "Sherbrooke et sa région Québec regroupent un tissu économique dynamique confronté à des obligations réglementaires croissantes en matière de cybersécurité. La principale réglementation applicable est : Loi 25 et Loi C-26 fédérale sur la cybersécurité. CyberConform accompagne les entreprises de Canada avec une approche pragmatique, en français, adaptée aux budgets des PME et ETI.",
      sectors: [
        "PME et ETI de Québec",
        "Institutions financières et fiduciaires",
        "Cabinets juridiques et notaires",
        "Établissements de santé",
        "Organismes publics et parapublics",
        "Commerce et e-commerce",
      ],
      neighborhoods: [
        "Centre de Sherbrooke",
        "Estrie",
        "Québec",
        "Canada",
        "Zone francophone (France, Belgique, Suisse, Luxembourg, Québec)",
        "Missions distancielles disponibles partout",
      ],
      faq: [
        {
          q: "Mon entreprise à Sherbrooke est-elle concernée par la réglementation cybersécurité ?",
          a: "Les entreprises de Sherbrooke sont soumises à : Loi 25 et Loi C-26 fédérale sur la cybersécurité. CyberConform réalise un diagnostic d'éligibilité gratuit en 48h pour clarifier vos obligations et prioriser les actions.",
        },
        {
          q: "Proposez-vous vos services de conformité à Sherbrooke ?",
          a: "Oui. CyberConform intervient à Sherbrooke en présentiel pour les missions d'audit et de conseil, et à distance pour les travaux documentaires. Nos experts francophones maîtrisent les réglementations locales de Canada.",
        },
        {
          q: "Quel est le coût d'une mise en conformité à Sherbrooke ?",
          a: "Pour une PME de Sherbrooke, comptez entre 8 000 et 25 000 € HT (ou équivalent local) pour un accompagnement complet. Des aides publiques peuvent réduire ce coût selon votre pays. Devis gratuit personnalisé sous 48h.",
        },
        {
          q: "Proposez-vous un RSSI externalisé à Sherbrooke ?",
          a: "Oui. Notre service de RSSI à temps partagé est disponible à Sherbrooke : déplacements mensuels sur site, pilotage cyber, gestion des incidents. Tarif à partir de 1 500 € HT/mois selon les besoins.",
        },
        {
          q: "Quelle différence entre la réglementation de Canada et la réglementation française ?",
          a: "La principale réglementation applicable à Sherbrooke est : Loi 25 et Loi C-26 fédérale sur la cybersécurité. CyberConform connaît les spécificités locales et vous aide à aligner vos pratiques sur les deux référentiels pour une conformité optimale.",
        },
      ],
    }}
  />
);

export default CyberSecuriteSherbrooke;
