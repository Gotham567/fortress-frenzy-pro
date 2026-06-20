import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteNantes = () => (
  <CityLandingPage
    data={{
      city: "Nantes",
      citySlug: "nantes",
      region: "Pays de la Loire",
      postalCode: "44000",
      intro: "CyberConform accompagne les entreprises nantaises et ligériennes dans leur stratégie cybersécurité. Audit NIS2, pentest, RSSI externalisé pour les PME et ETI de Nantes, Saint-Nazaire et toute la région Pays de la Loire.",
      localContext: "Nantes est la 6e métropole française et un hub numérique en plein essor avec plus de 1 200 entreprises tech. Son tissu économique diversifié — naval, agroalimentaire, santé, numérique — est fortement concerné par la directive NIS2. La proximité de Saint-Nazaire et des chantiers navals en fait un territoire stratégique pour la cybersécurité industrielle.",
      sectors: [
        "Naval et aéronautique (Airbus Atlantic, Chantiers de l'Atlantique)",
        "Numérique et French Tech (Nantes Digital Week)",
        "Santé et pharmacie (CHU de Nantes)",
        "Agroalimentaire (LU, Brossard)",
        "Banque et assurance",
        "Commerce et e-commerce",
      ],
      neighborhoods: [
        "Île de Nantes (quartier numérique)",
        "Saint-Herblain et Orvault",
        "Saint-Nazaire et zone industrielle",
        "La Roche-sur-Yon, Angers",
        "Le Mans, Tours",
        "Toute la région Pays de la Loire",
      ],
      faq: [
        {
          q: "Quelles entreprises nantaises sont soumises à NIS2 ?",
          a: "À Nantes, les secteurs concernés incluent les chantiers navals, l'aéronautique, la santé, l'énergie, les transports et le numérique. Les PME sous-traitantes des grands donneurs d'ordre sont également impactées. Notre diagnostic gratuit vous permet de vérifier votre éligibilité.",
        },
        {
          q: "Comment protéger une startup nantaise contre les cybermenaces ?",
          a: "Pour une startup, les priorités sont la sécurisation du cloud (AWS, Azure), la gestion des accès (MFA, IAM), la protection des données clients (RGPD) et un plan de réponse aux incidents. CyberConform propose des offres adaptées aux budgets des startups.",
        },
        {
          q: "Intervenez-vous à Nantes et en Pays de la Loire ?",
          a: "Oui. Nous intervenons à Nantes, Saint-Nazaire, La Roche-sur-Yon, Angers et dans toute la région Pays de la Loire. Réponse à incident sous 24h sur toute la région.",
        },
        {
          q: "Quel budget prévoir pour un audit cybersécurité à Nantes ?",
          a: "Un audit de sécurité complet pour une PME nantaise de 50 à 200 salariés représente un investissement de 5 000 à 15 000 euros. Contactez-nous pour un devis personnalisé après notre diagnostic gratuit.",
        },
      ],
    }}
  />
);

export default CyberSecuriteNantes;
