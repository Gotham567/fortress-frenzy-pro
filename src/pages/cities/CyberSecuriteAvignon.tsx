import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteAvignon = () => (
  <CityLandingPage
    data={{
      city: "Avignon",
      citySlug: "avignon",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "84000",
      intro: "CyberConform accompagne les PME, ETI et professions réglementées de Avignon dans leur mise en conformité NIS2, RGPD et ISO 27001. Cabinet spécialisé, intervention rapide dans tout le département Vaucluse.",
      localContext: "Avignon et son agglomération concentrent un tissu économique diversifié : PME industrielles, cabinets de conseil, professions libérales et établissements de santé. Avec l'entrée en vigueur de NIS2 en octobre 2026, les entreprises de Provence-Alpes-Côte d'Azur doivent impérativement évaluer leur éligibilité et lancer leur plan de conformité. Notre cabinet accompagne les structures de Vaucluse avec une approche pragmatique et adaptée aux budgets des PME.",
      sectors: [
        "PME et ETI de Provence-Alpes-Côte d'Azur",
        "Cabinets d'avocats et notaires",
        "Experts-comptables et conseil",
        "Établissements de santé et médico-social",
        "Collectivités et organismes publics",
        "Industrie et sous-traitance",
      ],
      neighborhoods: [
        "Centre-ville de Avignon",
        "Zone d'activité économique locale",
        "Agglomération de Avignon",
        "Tout le département Vaucluse",
        "Provence-Alpes-Côte d'Azur",
        "France entière (missions distancielles disponibles)",
      ],
      faq: [
        {
          q: "Mon entreprise à Avignon est-elle concernée par NIS2 ?",
          a: "Les entreprises de Avignon dépassant 50 salariés ou 10 M€ de CA dans des secteurs essentiels (santé, énergie, transport, finance, numérique) sont potentiellement soumises à NIS2. Nous réalisons un diagnostic d'éligibilité gratuit en 48h.",
        },
        {
          q: "Combien coûte une mise en conformité NIS2 à Avignon ?",
          a: "Pour une PME de Avignon de 50 à 200 salariés, comptez entre 8 000 et 25 000 € HT pour un accompagnement complet (diagnostic, plan d'action, implémentation, déclaration ANSSI). Des financements publics régionaux peuvent couvrir jusqu'à 50% du coût.",
        },
        {
          q: "Proposez-vous un RSSI externalisé à Avignon ?",
          a: "Oui. Notre service RSSI à temps partagé est disponible à Avignon : présences mensuelles sur site, pilotage de la feuille de route cyber, gestion des incidents, préparation des audits NIS2 et ISO 27001. Tarif mensuel à partir de 1 500 € HT.",
        },
        {
          q: "Intervenez-vous sur site à Avignon ?",
          a: "Oui. Notre équipe se déplace à Avignon et dans tout le département Vaucluse pour les missions d'audit, de sensibilisation et de conformité. Les missions de conseil et de documentation peuvent se réaliser à distance.",
        },
        {
          q: "Quelles sanctions en cas de non-conformité RGPD à Avignon ?",
          a: "La CNIL peut infliger jusqu'à 20 M€ ou 4% du CA mondial pour les violations RGPD. En matière de NIS2, les amendes vont jusqu'à 10 M€ pour les entités essentielles. Notre audit RGPD identifie vos risques et priorise les mesures correctives.",
        },
      ],
    }}
  />
);

export default CyberSecuriteAvignon;
