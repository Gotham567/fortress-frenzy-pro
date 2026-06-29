import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteNouvelleAquitaine = () => (
  <CityLandingPage
    data={{
      city: "Nouvelle-Aquitaine",
      citySlug: "nouvelle-aquitaine",
      region: "Nouvelle-Aquitaine",
      postalCode: "16 / 17 / 19 / 23 / 24 / 33 / 40 / 47 / 64 / 79 / 86 / 87",
      intro: "CyberConform est votre prestataire cybersécurité Nouvelle-Aquitaine : audit NIS2, pentest, conformité RGPD et réponse aux incidents pour les entreprises de Bordeaux, Bayonne, Pau, Poitiers, La Rochelle, Limoges, Périgueux et toute la région.",
      localContext: "La Nouvelle-Aquitaine est la plus grande région de France métropolitaine par superficie et une région économiquement diversifiée : l'aéronautique et le spatial autour de Bordeaux (Airbus, Thales Alenia Space, Dassault Aviation), la filière bois-papier-carton (Smurfit Kappa, groupe Gascogne), la viticulture et l'agroalimentaire (Bordeaux, Cognac, Bergerac), le tourisme côtier (Arcachon, Biarritz), la défense à Bordeaux (DGA, MBDA) et une scène startup dynamique (Bordeaux Métropole, La French Tech Bordeaux). Cette diversité économique crée des profils de risque cyber variés : les PME du Bordelais sont ciblées par les ransomwares, les sous-traitants aéronautiques par les attaques de type supply chain.",
      sectors: [
        "Aéronautique et spatial (Airbus, Dassault, Thales, sous-traitants)",
        "Viticulture, vins et spiritueux (Bordeaux, Cognac, Armagnac)",
        "Agroalimentaire et industrie alimentaire",
        "Bois, papier et emballage (filière forêt landaise)",
        "Tourisme, hôtellerie et thermalisme (Biarritz, Arcachon, Pyrénées)",
        "Défense et armement (DGA Bordeaux, MBDA)",
        "Tech et startups (French Tech Bordeaux, Bordeaux Technowest)",
        "Santé (CHU Bordeaux, Pellegrin, cliniques)",
      ],
      neighborhoods: [
        "Bordeaux Métropole (CUB) — Mérignac, Pessac, Talence",
        "Bayonne – Anglet – Biarritz (Pays Basque)",
        "Pau – Lons – Billère (64)",
        "Poitiers – Chasseneuil (86)",
        "La Rochelle – Rochefort (17)",
        "Limoges – Isle (87)",
        "Périgueux – Bergerac (24)",
        "Agen – Villeneuve-sur-Lot (47)",
      ],
      faq: [
        {
          q: "Couvrez-vous toute la Nouvelle-Aquitaine ou seulement Bordeaux ?",
          a: "CyberConform couvre toute la Nouvelle-Aquitaine : les 12 départements, de la Charente-Maritime au Pays Basque en passant par la Corrèze, la Creuse et la Haute-Vienne. Nos consultants se déplacent sur site partout dans la région. Pour les zones rurales et les villes moyennes (Agen, Périgueux, Angoulême, Niort), nous intervenons en déplacement ou à distance selon la mission. CERT d'urgence disponible 24/7.",
        },
        {
          q: "Les sous-traitants aéronautiques de Bordeaux sont-ils concernés par NIS2 ?",
          a: "Oui. Les sous-traitants aéronautiques bordelais (Tier 1, Tier 2 d'Airbus, Dassault) sont concernés à deux titres : d'abord, ceux dépassant les seuils NIS2 (50 salariés / 10 M€ CA dans la fabrication de matériels de transport) sont des entités importantes NIS2. Ensuite, même en dessous des seuils, les grands donneurs d'ordre imposent des exigences de sécurité via leurs questionnaires fournisseurs (TISAX pour Airbus, questionnaires Dassault). CyberConform accompagne les sous-traitants sur les deux volets.",
        },
        {
          q: "Mon château bordelais ou ma maison de négoce doit-il se conformer au RGPD ?",
          a: "Oui. Dès que vous collectez des données personnelles (clients B2C, cave numérique, mailing liste de cavistes), vous êtes soumis au RGPD. Pour les propriétés de taille significative avec des données clients étrangers (marchés asiatiques, américains), les obligations sont les mêmes. CyberConform propose un audit RGPD adapté aux PME du secteur viti-vinicole : registre des traitements, politique de confidentialité, sécurité du CRM et conformité des communications commerciales. Diagnostic gratuit.",
        },
        {
          q: "Avez-vous des références dans le secteur aéro/défense de Bordeaux ?",
          a: "CyberConform accompagne des industriels du secteur aéro-défense dans leurs audits de sécurité, mise en conformité NIS2 et réponse aux questionnaires fournisseurs. Notre discrétion est totale — nous ne communiquons pas publiquement nos références dans ce secteur sensible. Nous pouvons vous mettre en relation avec des clients ayant accepté d'être référencés lors des premiers échanges. Devis gratuit sous 48h.",
        },
        {
          q: "Quelle est la différence entre CyberConform et les prestataires bordelais locaux ?",
          a: "CyberConform combine une expertise réglementaire NIS2/RGPD approfondie (rares à Bordeaux) avec des capacités techniques complètes (pentest, audit OT, CERT 24/7). Nos consultants sont certifiés (CISSP, CISM, OSCP, ISO 27001 LA) et connaissent les spécificités régionales (secteur aéro-défense, filière bois). Contrairement aux cabinets locaux généralistes, nous intervenons exclusivement en cybersécurité.",
        },
      ],
    }}
  />
);

export default CyberSecuriteNouvelleAquitaine;
