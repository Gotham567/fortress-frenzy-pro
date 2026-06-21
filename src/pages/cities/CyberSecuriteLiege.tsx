import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteLiege = () => (
  <CityLandingPage
    data={{
      city: "Liège",
      citySlug: "liege",
      region: "Belgique — Wallonie",
      postalCode: "4000",
      intro: "CyberConform accompagne les PME, ETI et professions réglementées de Liège dans leur mise en conformité cybersécurité et protection des données. Cabinet francophone spécialisé, intervention rapide en Belgique et dans toute la zone francophone.",
      localContext: "Liège et sa région Wallonie regroupent un tissu économique dynamique confronté à des obligations réglementaires croissantes en matière de cybersécurité. La principale réglementation applicable est : NIS2 (directive européenne transposée en droit belge). CyberConform accompagne les entreprises de Belgique avec une approche pragmatique, en français, adaptée aux budgets des PME et ETI.",
      sectors: [
        "PME et ETI de Wallonie",
        "Institutions financières et fiduciaires",
        "Cabinets juridiques et notaires",
        "Établissements de santé",
        "Organismes publics et parapublics",
        "Commerce et e-commerce",
      ],
      neighborhoods: [
        "Centre de Liège",
        "Province de Liège",
        "Wallonie",
        "Belgique",
        "Zone francophone (France, Belgique, Suisse, Luxembourg, Québec)",
        "Missions distancielles disponibles partout",
      ],
      faq: [
        {
          q: "Mon entreprise à Liège est-elle concernée par la réglementation cybersécurité ?",
          a: "Les entreprises de Liège sont soumises à : NIS2 (directive européenne transposée en droit belge). CyberConform réalise un diagnostic d'éligibilité gratuit en 48h pour clarifier vos obligations et prioriser les actions.",
        },
        {
          q: "Proposez-vous vos services de conformité à Liège ?",
          a: "Oui. CyberConform intervient à Liège en présentiel pour les missions d'audit et de conseil, et à distance pour les travaux documentaires. Nos experts francophones maîtrisent les réglementations locales de Belgique.",
        },
        {
          q: "Quel est le coût d'une mise en conformité à Liège ?",
          a: "Pour une PME de Liège, comptez entre 8 000 et 25 000 € HT (ou équivalent local) pour un accompagnement complet. Des aides publiques peuvent réduire ce coût selon votre pays. Devis gratuit personnalisé sous 48h.",
        },
        {
          q: "Proposez-vous un RSSI externalisé à Liège ?",
          a: "Oui. Notre service de RSSI à temps partagé est disponible à Liège : déplacements mensuels sur site, pilotage cyber, gestion des incidents. Tarif à partir de 1 500 € HT/mois selon les besoins.",
        },
        {
          q: "Quelle différence entre la réglementation de Belgique et la réglementation française ?",
          a: "La principale réglementation applicable à Liège est : NIS2 (directive européenne transposée en droit belge). CyberConform connaît les spécificités locales et vous aide à aligner vos pratiques sur les deux référentiels pour une conformité optimale.",
        },
      ],
    }}
  />
);

export default CyberSecuriteLiege;
