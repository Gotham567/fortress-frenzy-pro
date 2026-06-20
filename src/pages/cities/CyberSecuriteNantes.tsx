import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteNantes = () => (
  <CityLandingPage
    data={{
      city: "Nantes",
      citySlug: "nantes",
      region: "Pays de la Loire",
      postalCode: "44000",
      intro: "CyberConform accompagne les entreprises nantaises et ligeriennes dans leur strategie cybersecurite. Audit NIS2, pentest, RSSI externalise pour les PME et ETI de Nantes, Saint-Nazaire et toute la region Pays de la Loire.",
      localContext: "Nantes est la 6e metropole francaise et un hub numerique en plein essor avec plus de 1 200 entreprises tech. Son tissu economique diversifie — naval, agroalimentaire, sante, numerique — est fortement concerne par la directive NIS2. La proximite de Saint-Nazaire et des chantiers navals en fait un territoire strategique pour la cybersecurite industrielle.",
      sectors: [
        "Naval et aeronautique (Airbus Atlantic, Chantiers de l'Atlantique)",
        "Numerique et French Tech (Nantes Digital Week)",
        "Sante et pharmacie (CHU de Nantes)",
        "Agroalimentaire (Lu, Brossard)",
        "Banque et assurance",
        "Commerce et e-commerce",
      ],
      neighborhoods: [
        "Ile de Nantes (quartier numerique)",
        "Saint-Herblain et Orvault",
        "Saint-Nazaire et zone industrielle",
        "La Roche-sur-Yon, Angers",
        "Le Mans, Tours",
        "Toute la region Pays de la Loire",
      ],
      faq: [
        {
          q: "Quelles entreprises nantaises sont soumises a NIS2 ?",
          a: "A Nantes, les secteurs concernes incluent les chantiers navals, l'aeronautique, la sante, l'energie, les transports et le numerique. Les PME sous-traitantes des grands donneurs d'ordre sont egalement impactees. Notre diagnostic gratuit vous permet de verifier votre eligibilite.",
        },
        {
          q: "Comment proteger une startup nantaise contre les cybermenaces ?",
          a: "Pour une startup, les priorites sont la securisation du cloud (AWS, Azure), la gestion des acces (MFA, IAM), la protection des donnees clients (RGPD) et un plan de reponse aux incidents. CyberConform propose des offres adaptees aux budgets des startups.",
        },
        {
          q: "Intervenez-vous a Nantes et en Pays de la Loire ?",
          a: "Oui. Nous intervenons a Nantes, Saint-Nazaire, La Roche-sur-Yon, Angers et dans toute la region Pays de la Loire. Reponse a incident sous 24h sur toute la region.",
        },
        {
          q: "Quel budget prevoir pour un audit cybersecurite a Nantes ?",
          a: "Un audit de securite complet pour une PME nantaise de 50 a 200 salaries represente un investissement de 5 000 a 15 000 euros. Contactez-nous pour un devis personnalise apres notre diagnostic gratuit.",
        },
      ],
    }}
  />
);

export default CyberSecuriteNantes;
