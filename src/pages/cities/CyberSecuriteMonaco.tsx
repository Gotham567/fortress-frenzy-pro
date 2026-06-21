import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteMonaco = () => (
  <CityLandingPage
    data={{
      city: "Monaco",
      citySlug: "monaco",
      region: "Monaco — Principauté de Monaco",
      postalCode: "98000",
      intro: "CyberConform accompagne les PME, ETI et professions réglementées de Monaco dans leur mise en conformité cybersécurité et protection des données. Cabinet francophone spécialisé, intervention rapide en Monaco et dans toute la zone francophone.",
      localContext: "Monaco et sa région Principauté de Monaco regroupent un tissu économique dynamique confronté à des obligations réglementaires croissantes en matière de cybersécurité. La principale réglementation applicable est : Loi n° 1.383 sur la protection des données personnelles et règlements CCIN. CyberConform accompagne les entreprises de Monaco avec une approche pragmatique, en français, adaptée aux budgets des PME et ETI.",
      sectors: [
        "PME et ETI de Principauté de Monaco",
        "Institutions financières et fiduciaires",
        "Cabinets juridiques et notaires",
        "Établissements de santé",
        "Organismes publics et parapublics",
        "Commerce et e-commerce",
      ],
      neighborhoods: [
        "Centre de Monaco",
        "Monaco",
        "Principauté de Monaco",
        "Monaco",
        "Zone francophone (France, Belgique, Suisse, Luxembourg, Québec)",
        "Missions distancielles disponibles partout",
      ],
      faq: [
        {
          q: "Mon entreprise à Monaco est-elle concernée par la réglementation cybersécurité ?",
          a: "Les entreprises de Monaco sont soumises à : Loi n° 1.383 sur la protection des données personnelles et règlements CCIN. CyberConform réalise un diagnostic d'éligibilité gratuit en 48h pour clarifier vos obligations et prioriser les actions.",
        },
        {
          q: "Proposez-vous vos services de conformité à Monaco ?",
          a: "Oui. CyberConform intervient à Monaco en présentiel pour les missions d'audit et de conseil, et à distance pour les travaux documentaires. Nos experts francophones maîtrisent les réglementations locales de Monaco.",
        },
        {
          q: "Quel est le coût d'une mise en conformité à Monaco ?",
          a: "Pour une PME de Monaco, comptez entre 8 000 et 25 000 € HT (ou équivalent local) pour un accompagnement complet. Des aides publiques peuvent réduire ce coût selon votre pays. Devis gratuit personnalisé sous 48h.",
        },
        {
          q: "Proposez-vous un RSSI externalisé à Monaco ?",
          a: "Oui. Notre service de RSSI à temps partagé est disponible à Monaco : déplacements mensuels sur site, pilotage cyber, gestion des incidents. Tarif à partir de 1 500 € HT/mois selon les besoins.",
        },
        {
          q: "Quelle différence entre la réglementation de Monaco et la réglementation française ?",
          a: "La principale réglementation applicable à Monaco est : Loi n° 1.383 sur la protection des données personnelles et règlements CCIN. CyberConform connaît les spécificités locales et vous aide à aligner vos pratiques sur les deux référentiels pour une conformité optimale.",
        },
      ],
    }}
  />
);

export default CyberSecuriteMonaco;
