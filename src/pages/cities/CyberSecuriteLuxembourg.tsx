import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteLuxembourg = () => (
  <CityLandingPage
    data={{
      city: "Luxembourg",
      citySlug: "luxembourg",
      region: "Luxembourg — Grand-Duché de Luxembourg",
      postalCode: "1009",
      intro: "CyberConform accompagne les PME, ETI et professions réglementées de Luxembourg dans leur mise en conformité cybersécurité et protection des données. Cabinet francophone spécialisé, intervention rapide en Luxembourg et dans toute la zone francophone.",
      localContext: "Luxembourg et sa région Grand-Duché de Luxembourg regroupent un tissu économique dynamique confronté à des obligations réglementaires croissantes en matière de cybersécurité. La principale réglementation applicable est : NIS2 et loi luxembourgeoise sur la cybersécurité (CSSF). CyberConform accompagne les entreprises de Luxembourg avec une approche pragmatique, en français, adaptée aux budgets des PME et ETI.",
      sectors: [
        "PME et ETI de Grand-Duché de Luxembourg",
        "Institutions financières et fiduciaires",
        "Cabinets juridiques et notaires",
        "Établissements de santé",
        "Organismes publics et parapublics",
        "Commerce et e-commerce",
      ],
      neighborhoods: [
        "Centre de Luxembourg",
        "Luxembourg-Ville",
        "Grand-Duché de Luxembourg",
        "Luxembourg",
        "Zone francophone (France, Belgique, Suisse, Luxembourg, Québec)",
        "Missions distancielles disponibles partout",
      ],
      faq: [
        {
          q: "Mon entreprise à Luxembourg est-elle concernée par la réglementation cybersécurité ?",
          a: "Les entreprises de Luxembourg sont soumises à : NIS2 et loi luxembourgeoise sur la cybersécurité (CSSF). CyberConform réalise un diagnostic d'éligibilité gratuit en 48h pour clarifier vos obligations et prioriser les actions.",
        },
        {
          q: "Proposez-vous vos services de conformité à Luxembourg ?",
          a: "Oui. CyberConform intervient à Luxembourg en présentiel pour les missions d'audit et de conseil, et à distance pour les travaux documentaires. Nos experts francophones maîtrisent les réglementations locales de Luxembourg.",
        },
        {
          q: "Quel est le coût d'une mise en conformité à Luxembourg ?",
          a: "Pour une PME de Luxembourg, comptez entre 8 000 et 25 000 € HT (ou équivalent local) pour un accompagnement complet. Des aides publiques peuvent réduire ce coût selon votre pays. Devis gratuit personnalisé sous 48h.",
        },
        {
          q: "Proposez-vous un RSSI externalisé à Luxembourg ?",
          a: "Oui. Notre service de RSSI à temps partagé est disponible à Luxembourg : déplacements mensuels sur site, pilotage cyber, gestion des incidents. Tarif à partir de 1 500 € HT/mois selon les besoins.",
        },
        {
          q: "Quelle différence entre la réglementation de Luxembourg et la réglementation française ?",
          a: "La principale réglementation applicable à Luxembourg est : NIS2 et loi luxembourgeoise sur la cybersécurité (CSSF). CyberConform connaît les spécificités locales et vous aide à aligner vos pratiques sur les deux référentiels pour une conformité optimale.",
        },
      ],
    }}
  />
);

export default CyberSecuriteLuxembourg;
