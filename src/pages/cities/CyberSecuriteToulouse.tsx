import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteToulouse = () => (
  <CityLandingPage
    data={{
      city: "Toulouse",
      citySlug: "toulouse",
      region: "Occitanie",
      postalCode: "31000",
      intro: "CyberConform accompagne les entreprises aeronautiques, spatiales et les PME occitanes dans leur strategie cybersecurite, conformite NIS2 et RGPD. Audit, pentest et RSSI externalise pour Toulouse et toute la region Occitanie.",
      localContext: "Toulouse est la capitale europeenne de l'aeronautique et du spatial (Airbus, CNES, Thales). Ce tissu industriel tres interconnecte est une cible prioritaire des cyberattaques etatiques et criminelles. La directive NIS2 impose des obligations strictes aux sous-traitants de la chaine aeronautique. Nous intervenons dans toute la metropole toulousaine et accompagnons aussi bien les grands donneurs d'ordre que les PME sous-traitantes.",
      sectors: [
        "Aeronautique et spatial (Airbus, CNES, sous-traitants)",
        "Sante et biotech (CHU, Institut Claudius Regaud)",
        "Numerique et French Tech (EuraTechnologies Toulouse)",
        "Agroalimentaire et agriculture",
        "Enseignement superieur et recherche",
        "PME industrielles sous-traitantes",
      ],
      neighborhoods: [
        "Blagnac et zone aeroportuaire",
        "Labege Innopole et Colomiers",
        "Toulouse Centre et Saint-Cyprien",
        "Montaudran Aerospace",
        "Montpellier, Nimes, Montauban",
        "Toute la region Occitanie",
      ],
      faq: [
        {
          q: "Les sous-traitants aeronautiques toulousains sont-ils concernes par NIS2 ?",
          a: "Oui. La directive NIS2 s'applique directement aux fournisseurs critiques de la chaine aeronautique. Les sous-traitants d'Airbus, de Thales ou du CNES doivent se conformer aux exigences de securite de leurs donneurs d'ordre et potentiellement a NIS2 selon leur taille et secteur.",
        },
        {
          q: "Comment proteger une PME industrielle toulousaine contre les cyberattaques ?",
          a: "La protection d'une PME industrielle passe par un audit de securite initial, la segmentation du reseau IT/OT, la mise en place d'une authentification multifacteur et une sensibilisation des employes. CyberConform propose des offres adaptees au budget des PME toulousaines.",
        },
        {
          q: "Intervenez-vous physiquement a Toulouse ?",
          a: "Oui. Nos consultants se deplacent a Toulouse, Blagnac, Labege et dans toute la region Occitanie pour les missions necessitant une presence sur site : audit d'infrastructure, pentest physique, formation des equipes.",
        },
        {
          q: "Quel est le delai pour un audit cybersecurite a Toulouse ?",
          a: "Un audit initial de securite peut etre realise en 1 a 3 semaines selon la taille de votre infrastructure. Contactez-nous pour un diagnostic gratuit de 15 minutes qui nous permettra de dimensionner la mission.",
        },
        {
          q: "Proposez-vous des formations cybersecurite pour les equipes toulousaines ?",
          a: "Oui. Nous proposons des formations de sensibilisation au phishing, aux ransomwares et aux bonnes pratiques de securite, adaptees aux contextes aeronautique et industriel de Toulouse.",
        },
      ],
    }}
  />
);

export default CyberSecuriteToulouse;
