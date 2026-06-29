import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteHautRhin = () => (
  <CityLandingPage
    data={{
      city: "Haut-Rhin",
      citySlug: "haut-rhin",
      region: "Grand Est",
      postalCode: "68",
      intro: "CyberSecure est votre expert cybersécurité Haut-Rhin (68) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Mulhouse, Colmar, Saint-Louis, Wittenheim, Cernay et tout le département.",
      localContext: "Le Haut-Rhin est un département frontalier avec l'Allemagne et la Suisse (Bâle est à quelques kilomètres de Saint-Louis). Mulhouse est le pôle industriel et technologique principal (ex-Peugeot, Electrolux, chimie). La région de Bâle (Basel Area) est l'un des plus grands clusters pharmaceutiques mondiaux (Novartis, Roche, Syngenta) avec des retombées économiques importantes en Haut-Rhin. L'industrie chimique est présente (BASF, Industries chimiques du Rhin). Colmar est la sous-préfecture avec une économie touristique (Route des Vins d'Alsace) et un tissu de PME.",
      sectors: [
        "Automobile (Stellantis Mulhouse, PSA — OT/IT production, TISAX)",
        "Pharma (industries pharm. Haut-Rhin, prestataires Basel Area — GxP)",
        "Chimie (BASF Mulhouse, industries chimiques — Seveso, ICS/SCADA)",
        "Textile et mode (DMC, Mulhouse textile industriel — IP, CAO mode)",
        "Tourisme alsacien (Route des Vins, Cité de l'Automobile — données visiteurs)",
        "Numérique (Alsace Digitale, ESN mulhousiennes — cloud, SaaS)",
        "Transfrontalier (Suisse Basel, Freiburg Allemagne — flux data tri-national)",
        "Collectivités (Mulhouse Alsace Agglomération, CD68 — cloud souverain)",
      ],
      neighborhoods: [
        "Mulhouse – Bourtzwiller – Dornach (68100)",
        "Colmar – Horbourg-Wihr (68000/68180)",
        "Saint-Louis – Hésingue (68300)",
        "Wittenheim – Wittelsheim (68270)",
        "Cernay – Thann (68700)",
        "Guebwiller – Soultz (68500)",
        "Illzach – Kingersheim (68110)",
        "Ribeauvillé – Sélestat (68150 — près de la limite 67/68)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Haut-Rhin (68) ?",
          a: "Oui, CyberSecure intervient dans tout le 68 : Mulhouse Alsace Agglomération, Colmar-Agglomération, Saint-Louis Agglomération, et zones frontalières. Nous avons une expertise dans les environnements industriels OT et les problématiques transfrontalières Alsace-Suisse-Allemagne. CERT d'urgence 24/7.",
        },
        {
          q: "Stellantis Mulhouse (PSA) fabrique des DS, des Peugeot : exigences TISAX pour les fournisseurs du 68 ?",
          a: "L'usine PSA de Mulhouse-Sausheim (chaîne principale Peugeot 208, DS 3 Crossback) impose à ses fournisseurs alsaciens une conformité TISAX (Trusted Information Security Assessment Exchange). TISAX couvre 3 niveaux : AL1 (protection minimale), AL2 (protection élevée pour les données confidentielles), AL3 (protection très élevée pour les données classifiées et les prototypes). Les PME fournisseurs du 68 doivent s'auto-évaluer puis se faire auditer par un auditeur certifié ENX Association. CyberSecure réalise les gap analysis et accompagne les PME alsaciennes dans leur démarche TISAX.",
        },
        {
          q: "Les entreprises haut-rhinoises proches de Bâle : les prestataires suisses imposent-ils des exigences cyber ?",
          a: "Les grandes pharmaceutiques bâloises (Novartis, Roche, Syngenta) imposent à leurs prestataires et sous-traitants des exigences de sécurité strictes. Novartis suit le framework NIST CSF et impose des questionnaires de sécurité (VSA — Vendor Security Assessment) à ses prestataires. Roche a son propre programme de gestion des risques tiers (Third Party Risk Management). Les PME haut-rhinoises qui travaillent avec Basel Area doivent se préparer à ces évaluations. CyberSecure accompagne les PME dans la préparation aux audits de sécurité des donneurs d'ordre suisses.",
        },
        {
          q: "La Cité de l'Automobile de Mulhouse et le tourisme alsacien : RGPD pour les parcs culturels et touristiques ?",
          a: "La Cité de l'Automobile (100 000 visiteurs/an) collecte des données lors de la billetterie (réservations en ligne, cartes membres), les paiements (PCI DSS), et éventuellement des données de vidéosurveillance (durée de conservation limitée à 30 jours max). La conformité RGPD pour un musée ou parc culturel impose : mentions d'information lors de la collecte, politique de conservation limitée des données clients, et droits des personnes documentés. Pour la vidéosurveillance, la CNIL impose une signalétique et une durée de conservation de 30 jours maximum. CyberSecure audite la conformité RGPD des sites touristiques.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Haut-Rhin ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Sud Alsace Mulhouse — diagnostics numériques. Mulhouse Alsace Agglomération — programmes innovation. BPI France Grand Est — prêts innovation. Alsace Digitale et le M2A accompagnent les PME dans leur transformation numérique. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteHautRhin;
