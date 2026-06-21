import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteLausanne = () => (
  <CityLandingPage
    data={{
      city: "Lausanne",
      citySlug: "lausanne",
      region: "Suisse — Suisse romande",
      postalCode: "1000",
      intro: "CyberConform accompagne les PME, ETI et professions réglementées de Lausanne dans leur mise en conformité cybersécurité et protection des données. Cabinet francophone spécialisé, intervention rapide en Suisse et dans toute la zone francophone.",
      localContext: "Lausanne et sa région Suisse romande regroupent un tissu économique dynamique confronté à des obligations réglementaires croissantes en matière de cybersécurité. La principale réglementation applicable est : LPD révisée et recommandations OFCS. CyberConform accompagne les entreprises de Suisse avec une approche pragmatique, en français, adaptée aux budgets des PME et ETI.",
      sectors: [
        "PME et ETI de Suisse romande",
        "Institutions financières et fiduciaires",
        "Cabinets juridiques et notaires",
        "Établissements de santé",
        "Organismes publics et parapublics",
        "Commerce et e-commerce",
      ],
      neighborhoods: [
        "Centre de Lausanne",
        "Canton de Vaud",
        "Suisse romande",
        "Suisse",
        "Zone francophone (France, Belgique, Suisse, Luxembourg, Québec)",
        "Missions distancielles disponibles partout",
      ],
      faq: [
        {
          q: "Mon entreprise à Lausanne est-elle concernée par la réglementation cybersécurité ?",
          a: "Les entreprises de Lausanne sont soumises à : LPD révisée et recommandations OFCS. CyberConform réalise un diagnostic d'éligibilité gratuit en 48h pour clarifier vos obligations et prioriser les actions.",
        },
        {
          q: "Proposez-vous vos services de conformité à Lausanne ?",
          a: "Oui. CyberConform intervient à Lausanne en présentiel pour les missions d'audit et de conseil, et à distance pour les travaux documentaires. Nos experts francophones maîtrisent les réglementations locales de Suisse.",
        },
        {
          q: "Quel est le coût d'une mise en conformité à Lausanne ?",
          a: "Pour une PME de Lausanne, comptez entre 8 000 et 25 000 € HT (ou équivalent local) pour un accompagnement complet. Des aides publiques peuvent réduire ce coût selon votre pays. Devis gratuit personnalisé sous 48h.",
        },
        {
          q: "Proposez-vous un RSSI externalisé à Lausanne ?",
          a: "Oui. Notre service de RSSI à temps partagé est disponible à Lausanne : déplacements mensuels sur site, pilotage cyber, gestion des incidents. Tarif à partir de 1 500 € HT/mois selon les besoins.",
        },
        {
          q: "Quelle différence entre la réglementation de Suisse et la réglementation française ?",
          a: "La principale réglementation applicable à Lausanne est : LPD révisée et recommandations OFCS. CyberConform connaît les spécificités locales et vous aide à aligner vos pratiques sur les deux référentiels pour une conformité optimale.",
        },
      ],
    }}
  />
);

export default CyberSecuriteLausanne;
