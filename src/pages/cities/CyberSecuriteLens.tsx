import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteLens = () => (
  <CityLandingPage
    data={{
      city: "Lens",
      citySlug: "lens",
      region: "Hauts-de-France",
      postalCode: "62300",
      intro: "CyberConform accompagne les entreprises de Lens, Liévin, Hénin-Beaumont et de l'agglomération Lens-Liévin dans leur conformité NIS2, RGPD et ISO 27001. Prestataire de confiance pour la mise en conformité réglementaire des PME et ETI du Pas-de-Calais.",
      localContext: "L'agglomération Lens-Liévin constitue un bassin économique en plein essor, porté par la logistique (A26, proximité de la zone logistique de Dourges), l'industrie, le tourisme culturel (Louvre-Lens) et les services. La directive NIS2, transposée en droit français en 2026, impacte directement les entreprises de logistique et de transport de la région, classées en entités importantes. Les professions libérales (avocats, experts-comptables, médecins) sont quant à elles tenues de respecter le RGPD et de disposer d'un registre des traitements à jour. CyberConform propose des audits de conformité adaptés au tissu économique lensois.",
      sectors: [
        "Logistique et transport",
        "Industrie et sous-traitance automobile",
        "Tourisme et culture",
        "Professions libérales",
        "Commerce de détail et grande distribution",
        "Santé et établissements médico-sociaux",
        "Collectivités territoriales et services publics",
        "BTP et construction",
      ],
      neighborhoods: [
        "Lens centre",
        "Liévin",
        "Hénin-Beaumont",
        "Carvin",
        "Harnes",
        "Billy-Montigny",
        "Agglomération Lens-Liévin",
        "Pas-de-Calais et Hauts-de-France",
      ],
      faq: [
        {
          q: "Mon entreprise de logistique à Lens est-elle soumise à NIS2 ?",
          a: "Le secteur transport et logistique est explicitement listé comme secteur important sous NIS2. Si votre entreprise dépasse 50 salariés ou 10 M€ de CA, vous êtes très probablement concerné. Nous réalisons un diagnostic d'éligibilité NIS2 gratuit pour les entreprises de Lens.",
        },
        {
          q: "Combien coûte une mise en conformité NIS2 à Lens ?",
          a: "Pour une PME ou ETI de l'agglomération Lens-Liévin, l'accompagnement NIS2 (diagnostic, plan d'action, implémentation documentaire, préparation déclaration ANSSI) varie entre 8 000 et 30 000 € HT. Des subventions Hauts-de-France peuvent couvrir jusqu'à 50 % du coût.",
        },
        {
          q: "Mon cabinet d'expertise comptable à Lens doit-il respecter le RGPD ?",
          a: "Absolument. Les cabinets d'expertise comptable traitent des données personnelles sensibles (données financières, patrimoniales, RH de leurs clients). Un registre des traitements, une politique de protection des données et des mesures de sécurité adaptées (chiffrement, MFA, sauvegardes) sont obligatoires.",
        },
        {
          q: "Proposez-vous un accompagnement RSSI externalisé à Lens ?",
          a: "Oui. Notre RSSI à temps partagé peut piloter votre conformité NIS2 et votre sécurité informatique à Lens et dans l'agglomération. Présences mensuelles sur site, hotline pour les urgences, pilotage des audits et des formations. À partir de 1 500 € HT/mois.",
        },
      ],
    }}
  />
);

export default CyberSecuriteLens;
