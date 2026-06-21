import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteCholet = () => (
  <CityLandingPage
    data={{
      city: "Cholet",
      citySlug: "cholet",
      region: "Pays de la Loire",
      postalCode: "49300",
      intro: "CyberConform accompagne les PME, ETI et professions réglementées de Cholet dans leur mise en conformité NIS2, RGPD et ISO 27001. Cabinet spécialisé, intervention rapide dans tout le département Maine-et-Loire.",
      localContext: "Cholet et son agglomération regroupent un tissu économique actif : PME industrielles, cabinets de conseil, professions libérales et établissements de santé. Avec l'entrée en vigueur de NIS2 en octobre 2026, les entreprises de Pays de la Loire doivent évaluer leur éligibilité et lancer leur plan de conformité. Notre cabinet accompagne les structures de Maine-et-Loire avec une approche pragmatique et adaptée aux budgets des PME.",
      sectors: [
        "PME et ETI de Pays de la Loire",
        "Cabinets d'avocats et notaires",
        "Experts-comptables et conseil",
        "Établissements de santé et médico-social",
        "Collectivités et organismes publics",
        "Industrie et sous-traitance",
      ],
      neighborhoods: [
        "Centre-ville de Cholet",
        "Zone d'activité économique locale",
        "Agglomération de Cholet",
        "Tout le département Maine-et-Loire",
        "Pays de la Loire",
        "France entière (missions distancielles disponibles)",
      ],
      faq: [
        {
          q: "Mon entreprise à Cholet est-elle concernée par NIS2 ?",
          a: "Les entreprises de Cholet dépassant 50 salariés ou 10 M€ de CA dans des secteurs essentiels (santé, énergie, transport, finance, numérique) sont potentiellement soumises à NIS2. Nous réalisons un diagnostic d'éligibilité gratuit en 48h.",
        },
        {
          q: "Combien coûte une mise en conformité NIS2 à Cholet ?",
          a: "Pour une PME de Cholet de 50 à 200 salariés, comptez entre 8 000 et 25 000 € HT pour un accompagnement complet (diagnostic, plan d'action, implémentation, déclaration ANSSI). Des financements publics régionaux peuvent couvrir jusqu'à 50% du coût.",
        },
        {
          q: "Proposez-vous un RSSI externalisé à Cholet ?",
          a: "Oui. Notre service RSSI à temps partagé est disponible à Cholet : présences mensuelles sur site, pilotage de la feuille de route cyber, gestion des incidents, préparation des audits NIS2 et ISO 27001. Tarif mensuel à partir de 1 500 € HT.",
        },
        {
          q: "Intervenez-vous sur site à Cholet ?",
          a: "Oui. Notre équipe se déplace à Cholet et dans tout le département Maine-et-Loire pour les missions d'audit, de sensibilisation et de conformité. Les missions de conseil et de documentation peuvent se réaliser à distance.",
        },
        {
          q: "Quelles sanctions en cas de non-conformité RGPD à Cholet ?",
          a: "La CNIL peut infliger jusqu'à 20 M€ ou 4% du CA mondial pour les violations RGPD. En matière de NIS2, les amendes vont jusqu'à 10 M€ pour les entités essentielles. Notre audit RGPD identifie vos risques et priorise les mesures correctives.",
        },
      ],
    }}
  />
);

export default CyberSecuriteCholet;
