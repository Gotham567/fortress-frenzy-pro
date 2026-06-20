import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteLille = () => (
  <CityLandingPage
    data={{
      city: "Lille",
      citySlug: "lille",
      region: "Hauts-de-France",
      postalCode: "59000",
      intro: "CyberConform accompagne les entreprises lilloises et les PME des Hauts-de-France dans leur securite informatique, conformite NIS2 et RGPD. Audit, pentest et RSSI externalise pour Lille, Roubaix, Tourcoing et toute la metropole.",
      localContext: "Lille est la capitale economique du Nord de la France et un carrefour europeen strategique. Sa position frontaliere avec la Belgique et sa forte concentration d'entreprises dans le commerce, la logistique et le numerique en font une cible privilegiee des cyberattaques. La Euratechnologies, premier incubateur francais, abrite de nombreuses startups tech qui doivent securiser leurs produits.",
      sectors: [
        "Commerce et grande distribution (Auchan, Leroy Merlin)",
        "Logistique et transport",
        "Numerique (Euratechnologies, Plaine Images)",
        "Sante (CHU de Lille, Institut Pasteur)",
        "Industrie textile et agroalimentaire",
        "Banque et assurance (Credit du Nord)",
      ],
      neighborhoods: [
        "Euralille et quartier d'affaires",
        "Euratechnologies (Saint-Philibert)",
        "Roubaix, Tourcoing, Villeneuve d'Ascq",
        "Valenciennes, Douai, Bethune",
        "Dunkerque, Calais, Boulogne",
        "Toute la region Hauts-de-France",
      ],
      faq: [
        {
          q: "Les entreprises de commerce lillois sont-elles concernees par NIS2 ?",
          a: "Les grandes enseignes de distribution (Auchan, Decathlon) et leurs sous-traitants logistiques sont directement concernes par NIS2 si elles depassent les seuils de taille. Les PME fournisseurs doivent egalement anticiper les exigences de leurs donneurs d'ordre.",
        },
        {
          q: "Comment securiser une startup lilloise (Euratechnologies) ?",
          a: "Les startups d'Euratechnologies doivent prioritairement securiser leur code source, leurs APIs, la gestion des acces et les donnees clients. Un pentest applicatif et un audit cloud sont les premieres etapes recommandees.",
        },
        {
          q: "Intervenez-vous dans toute la metropole lilloise ?",
          a: "Oui. Nos consultants interviennent a Lille, Roubaix, Tourcoing, Villeneuve d'Ascq, Valenciennes et dans tout le departement du Nord et du Pas-de-Calais.",
        },
        {
          q: "Proposez-vous des formations anti-phishing a Lille ?",
          a: "Oui. Nous organisons des sessions de sensibilisation et des simulations de phishing pour les equipes lilloise. Ces formations peuvent se tenir en presentiel dans vos locaux ou en ligne.",
        },
      ],
    }}
  />
);

export default CyberSecuriteLille;
