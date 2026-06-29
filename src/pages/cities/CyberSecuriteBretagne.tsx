import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteBretagne = () => (
  <CityLandingPage
    data={{
      city: "Bretagne",
      citySlug: "bretagne",
      region: "Bretagne",
      postalCode: "22 / 29 / 35 / 56",
      intro: "CyberConform est votre prestataire cybersécurité Bretagne : audit NIS2 et RGPD, pentest, conformité et réponse aux incidents pour les entreprises, PME, ETI, collectivités et industries de la région bretonne — Rennes, Brest, Quimper, Lorient, Vannes, Saint-Brieuc.",
      localContext: "La Bretagne est une région aux profils numériques contrastés : Rennes Métropole est l'un des écosystèmes tech les plus dynamiques de France (Cesson-Sévigné abrite Orange Cyberdefense, Thales, la DGA), Brest concentre des activités de défense maritime (Naval Group, DGA Techniques navales), et le tissu breton inclut une forte proportion d'agroalimentaires (Lactalis, Saupiquet, Bigard) et de pêche industrielle. Le tourisme côtier est aussi une cible croissante des attaques phishing en saison. La Bretagne est l'une des régions françaises les plus avancées en matière de transformation numérique des PME, ce qui accroît la surface d'exposition cyber.",
      sectors: [
        "Défense et naval (Naval Group, DGA, Thales Brest)",
        "Télécom et tech (Orange, Sagem, startups rennaises)",
        "Agroalimentaire et pêche industrielle (Lactalis, Bigard, coopératives)",
        "Tourisme, hôtellerie et restauration côtière",
        "Collectivités et administrations (Rennes Métropole, Brest Métropole, Région Bretagne)",
        "Santé (CHU Rennes, CHRU Brest, cliniques)",
        "PME industrielles et de services",
        "Agriculture et coopératives agricoles",
      ],
      neighborhoods: [
        "Rennes Métropole – Cesson-Sévigné – Bruz",
        "Brest Métropole – Guipavas – Plouzané",
        "Quimper – Cornouaille",
        "Lorient – Lanester – Hennebont",
        "Vannes – Golfe du Morbihan",
        "Saint-Brieuc – Plérin – Lamballe",
        "Saint-Malo – Dinard",
        "Concarneau – Douarnenez – Pont-l'Abbé",
      ],
      faq: [
        {
          q: "Couvrez-vous les 4 départements bretons (22, 29, 35, 56) ?",
          a: "Oui, CyberConform intervient dans les quatre départements bretons : Côtes-d'Armor (22), Finistère (29), Ille-et-Vilaine (35) et Morbihan (56). Nos consultants se déplacent sur site partout en Bretagne pour les audits terrain. La distance ne nous empêche pas d'intervenir dans les zones rurales ou côtières — nous avons l'habitude des missions dans les zones moins denses. CERT d'urgence disponible 24/7 dans toute la région.",
        },
        {
          q: "Les entreprises bretonnes sont-elles ciblées par NIS2 ?",
          a: "Oui, plusieurs secteurs bretonnes majeurs sont concernés : les industriels de la défense (Naval Group, sous-traitants DGA) comme entités essentielles, les agroalimentaires de grande taille (250+ salariés) comme entités importantes, les opérateurs de réseaux de télécommunications (Orange, SFR en Bretagne), les hôpitaux (CHU Rennes, CHRU Brest) et les collectivités. CyberConform propose un diagnostic NIS2 gratuit en 30 minutes pour évaluer votre situation. Nous connaissons bien le tissu économique breton.",
        },
        {
          q: "Mon entreprise agroalimentaire bretonne doit sécuriser ses systèmes OT — pouvez-vous aider ?",
          a: "Absolument. Les systèmes de contrôle industriel (SCADA, automates, MES de traçabilité alimentaire) sont une priorité de sécurité pour l'agroalimentaire breton, notamment depuis les attaques sur des coopératives agricoles et des abattoirs en France. CyberConform propose des audits IT/OT spécialisés : inventaire des équipements industriels, segmentation réseau, monitoring OT passif, conformité NIS2 pour l'industrie alimentaire. Expérience avec les coopératives et les PME agroalimentaires bretonnes.",
        },
        {
          q: "Quelles aides pour financer un audit cybersécurité en Bretagne ?",
          a: "La Bretagne dispose de plusieurs dispositifs : Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Bretagne soutient la transformation numérique des PME via ses fonds (FEDER, programme Breizh Up). Les CCI bretonnes (CCI Rennes, CCI Brest Iroise, CCI Bretagne) proposent des diagnostics numériques co-financés. BPI France intervient sur toute la Bretagne pour les prêts numériques. L'ADN Quest (ancienne CCI Nord Bretagne) propose aussi des accompagnements PME. Nous vous guidons vers le bon dispositif.",
        },
        {
          q: "Avez-vous de l'expérience avec les entreprises du secteur naval et de la défense en Bretagne ?",
          a: "Oui, c'est l'un de nos secteurs d'expertise. Les industriels de la défense maritime (Naval Group, DCNS, sous-traitants) ont des exigences de sécurité spécifiques : habilitations, cloisonnement des réseaux, normes OTAN, conformité NIS2 comme entités essentielles. CyberConform accompagne les sous-traitants et équipementiers dans leur mise en conformité, la réponse aux questionnaires de sécurité des donneurs d'ordre et la sécurisation des systèmes CAO/ERP contenant des données sensibles.",
        },
      ],
    }}
  />
);

export default CyberSecuriteBretagne;
