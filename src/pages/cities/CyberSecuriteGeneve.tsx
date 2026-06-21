import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteGeneve = () => (
  <CityLandingPage
    data={{
      city: "Genève",
      citySlug: "geneve",
      region: "Suisse — Suisse romande",
      postalCode: "1200",
      intro: "CyberConform accompagne les PME, ETI et professions réglementées de Genève dans leur mise en conformité cybersécurité et protection des données. Cabinet francophone spécialisé, intervention rapide en Suisse et dans toute la zone francophone.",
      localContext: "Genève et sa région Suisse romande regroupent un tissu économique dynamique confronté à des obligations réglementaires croissantes en matière de cybersécurité. La principale réglementation applicable est : LPD (Loi sur la Protection des Données) révisée et recommandations OFCS. CyberConform accompagne les entreprises de Suisse avec une approche pragmatique, en français, adaptée aux budgets des PME et ETI.",
      sectors: [
        "PME et ETI de Suisse romande",
        "Institutions financières et fiduciaires",
        "Cabinets juridiques et notaires",
        "Établissements de santé",
        "Organismes publics et parapublics",
        "Commerce et e-commerce",
      ],
      neighborhoods: [
        "Centre de Genève",
        "Canton de Genève",
        "Suisse romande",
        "Suisse",
        "Zone francophone (France, Belgique, Suisse, Luxembourg, Québec)",
        "Missions distancielles disponibles partout",
      ],
      faq: [
        {
          q: "Mon entreprise à Genève est-elle concernée par la réglementation cybersécurité ?",
          a: "Les entreprises de Genève sont soumises à : LPD (Loi sur la Protection des Données) révisée et recommandations OFCS. CyberConform réalise un diagnostic d'éligibilité gratuit en 48h pour clarifier vos obligations et prioriser les actions.",
        },
        {
          q: "Proposez-vous vos services de conformité à Genève ?",
          a: "Oui. CyberConform intervient à Genève en présentiel pour les missions d'audit et de conseil, et à distance pour les travaux documentaires. Nos experts francophones maîtrisent les réglementations locales de Suisse.",
        },
        {
          q: "Quel est le coût d'une mise en conformité à Genève ?",
          a: "Pour une PME de Genève, comptez entre 8 000 et 25 000 € HT (ou équivalent local) pour un accompagnement complet. Des aides publiques peuvent réduire ce coût selon votre pays. Devis gratuit personnalisé sous 48h.",
        },
        {
          q: "Proposez-vous un RSSI externalisé à Genève ?",
          a: "Oui. Notre service de RSSI à temps partagé est disponible à Genève : déplacements mensuels sur site, pilotage cyber, gestion des incidents. Tarif à partir de 1 500 € HT/mois selon les besoins.",
        },
        {
          q: "Quelle différence entre la réglementation de Suisse et la réglementation française ?",
          a: "La principale réglementation applicable à Genève est : LPD (Loi sur la Protection des Données) révisée et recommandations OFCS. CyberConform connaît les spécificités locales et vous aide à aligner vos pratiques sur les deux référentiels pour une conformité optimale.",
        },
      ],
    }}
  />
);

export default CyberSecuriteGeneve;
