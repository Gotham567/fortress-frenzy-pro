import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteLille = () => (
  <CityLandingPage
    data={{
      city: "Lille",
      citySlug: "lille",
      region: "Hauts-de-France",
      postalCode: "59000",
      intro: "CyberConform accompagne les entreprises lilloises et les PME des Hauts-de-France dans leur sécurité informatique, conformité NIS2 et RGPD. Audit, pentest et RSSI externalisé pour Lille, Roubaix, Tourcoing et toute la métropole.",
      localContext: "Lille est la capitale économique du Nord de la France et un carrefour européen stratégique. Sa position frontalière avec la Belgique et sa forte concentration d'entreprises dans le commerce, la logistique et le numérique en font une cible privilégiée des cyberattaques. EuraTechnologies, premier incubateur français, abrite de nombreuses startups tech qui doivent sécuriser leurs produits.",
      sectors: [
        "Commerce et grande distribution (Auchan, Leroy Merlin, Decathlon)",
        "Logistique et transport",
        "Numérique (EuraTechnologies, Plaine Images)",
        "Santé (CHU de Lille, Institut Pasteur)",
        "Industrie textile et agroalimentaire",
        "Banque et assurance",
      ],
      neighborhoods: [
        "Euralille et quartier d'affaires",
        "EuraTechnologies (Saint-Philibert)",
        "Roubaix, Tourcoing, Villeneuve-d'Ascq",
        "Valenciennes, Douai, Béthune",
        "Dunkerque, Calais, Boulogne",
        "Toute la région Hauts-de-France",
      ],
      faq: [
        {
          q: "Les entreprises de commerce lilloises sont-elles concernées par NIS2 ?",
          a: "Les grandes enseignes de distribution (Auchan, Decathlon) et leurs sous-traitants logistiques sont directement concernés par NIS2 si elles dépassent les seuils de taille. Les PME fournisseurs doivent également anticiper les exigences de leurs donneurs d'ordre.",
        },
        {
          q: "Comment sécuriser une startup lilloise (EuraTechnologies) ?",
          a: "Les startups d'EuraTechnologies doivent prioritairement sécuriser leur code source, leurs APIs, la gestion des accès et les données clients. Un pentest applicatif et un audit cloud sont les premières étapes recommandées.",
        },
        {
          q: "Intervenez-vous dans toute la métropole lilloise ?",
          a: "Oui. Nos consultants interviennent à Lille, Roubaix, Tourcoing, Villeneuve-d'Ascq, Valenciennes et dans tout le département du Nord et du Pas-de-Calais.",
        },
        {
          q: "Proposez-vous des formations anti-phishing à Lille ?",
          a: "Oui. Nous organisons des sessions de sensibilisation et des simulations de phishing pour les équipes lilloises. Ces formations peuvent se tenir en présentiel dans vos locaux ou en ligne.",
        },
      ],
    }}
  />
);

export default CyberSecuriteLille;
