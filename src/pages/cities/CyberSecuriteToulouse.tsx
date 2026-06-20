import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteToulouse = () => (
  <CityLandingPage
    data={{
      city: "Toulouse",
      citySlug: "toulouse",
      region: "Occitanie",
      postalCode: "31000",
      intro: "CyberConform accompagne les entreprises aéronautiques, spatiales et les PME occitanes dans leur stratégie cybersécurité, conformité NIS2 et RGPD. Audit, pentest et RSSI externalisé pour Toulouse et toute la région Occitanie.",
      localContext: "Toulouse est la capitale européenne de l'aéronautique et du spatial (Airbus, CNES, Thales). Ce tissu industriel très interconnecté est une cible prioritaire des cyberattaques étatiques et criminelles. La directive NIS2 impose des obligations strictes aux sous-traitants de la chaîne aéronautique. Nous intervenons dans toute la métropole toulousaine et accompagnons aussi bien les grands donneurs d'ordre que les PME sous-traitantes.",
      sectors: [
        "Aéronautique et spatial (Airbus, CNES, sous-traitants)",
        "Santé et biotech (CHU, Institut Claudius Régaud)",
        "Numérique et French Tech Toulouse",
        "Agroalimentaire et agriculture",
        "Enseignement supérieur et recherche",
        "PME industrielles sous-traitantes",
      ],
      neighborhoods: [
        "Blagnac et zone aéroportuaire",
        "Labège Innopole et Colomiers",
        "Toulouse Centre et Saint-Cyprien",
        "Montaudran Aerospace",
        "Montauban, Nîmes, Albi",
        "Toute la région Occitanie",
      ],
      faq: [
        {
          q: "Les sous-traitants aéronautiques toulousains sont-ils concernés par NIS2 ?",
          a: "Oui. La directive NIS2 s'applique directement aux fournisseurs critiques de la chaîne aéronautique. Les sous-traitants d'Airbus, de Thales ou du CNES doivent se conformer aux exigences de sécurité de leurs donneurs d'ordre et potentiellement à NIS2 selon leur taille et secteur.",
        },
        {
          q: "Comment protéger une PME industrielle toulousaine contre les cyberattaques ?",
          a: "La protection d'une PME industrielle passe par un audit de sécurité initial, la segmentation du réseau IT/OT, la mise en place d'une authentification multifacteur et une sensibilisation des employés. CyberConform propose des offres adaptées au budget des PME toulousaines.",
        },
        {
          q: "Intervenez-vous physiquement à Toulouse ?",
          a: "Oui. Nos consultants se déplacent à Toulouse, Blagnac, Labège et dans toute la région Occitanie pour les missions nécessitant une présence sur site : audit d'infrastructure, pentest physique, formation des équipes.",
        },
        {
          q: "Quel est le délai pour un audit cybersécurité à Toulouse ?",
          a: "Un audit initial de sécurité peut être réalisé en 1 à 3 semaines selon la taille de votre infrastructure. Contactez-nous pour un diagnostic gratuit de 15 minutes qui nous permettra de dimensionner la mission.",
        },
        {
          q: "Proposez-vous des formations cybersécurité pour les équipes toulousaines ?",
          a: "Oui. Nous proposons des formations de sensibilisation au phishing, aux ransomwares et aux bonnes pratiques de sécurité, adaptées aux contextes aéronautique et industriel de Toulouse.",
        },
      ],
    }}
  />
);

export default CyberSecuriteToulouse;
