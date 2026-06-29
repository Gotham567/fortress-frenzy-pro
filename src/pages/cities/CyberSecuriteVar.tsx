import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteVar = () => (
  <CityLandingPage
    data={{
      city: "Var",
      citySlug: "var",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "83",
      intro: "CyberSecure est votre expert cybersécurité Var (83) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Toulon, La Seyne-sur-Mer, Hyères, Fréjus, Brignoles et tout le département.",
      localContext: "Le Var est un département stratégique pour la défense nationale française. Toulon est la 1ère base navale française et européenne (Marine Nationale, DCNS/Naval Group). La DCNS/Naval Group conçoit des sous-marins nucléaires (SNA) et des frégates pour la Marine et l'export. Le Centre d'Expertise de la Flotte de Toulon (CEF) et la BCRM (Base de Défense) génèrent une économie de sous-traitance importante soumise à des exigences de sécurité strictes. Au-delà de la défense, le Var est un département touristique majeur (Saint-Tropez, Var Méditerranée) et possède un tissu de PME industrielles.",
      sectors: [
        "Défense navale (Naval Group Toulon, DCNS, Marine Nationale — données classifiées)",
        "Base navale (BCRM Toulon, CEF — systèmes homologués, SI militaires)",
        "Sous-traitance défense (PME varoises sous-traitantes Naval Group — TISAX/sécurité)",
        "Tourisme luxe (Saint-Tropez, îles de Hyères — PCI DSS, RGPD, données VIP)",
        "Santé (Centre Hospitalier Toulon, Cliniques — HDS, télémédecine)",
        "Industrie (Dracénie, Brignoles — PME industrielles, ERP cloud)",
        "Aéronautique (Base aérienne Hyères, Draguignan — systèmes militaires)",
        "Collectivités (Toulon Provence Méditerranée, CD83 — cloud souverain)",
      ],
      neighborhoods: [
        "Toulon – La Seyne-sur-Mer (83000/83500)",
        "Hyères – Carqueiranne (83400)",
        "La Garde – La Valette-du-Var (83130)",
        "Fréjus – Saint-Raphaël (83600/83700)",
        "Brignoles – Saint-Maximin (83170/83470)",
        "Draguignan – Lorgues (83300)",
        "Six-Fours-les-Plages – Sanary (83140)",
        "Ollioules – Bandol (83190)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Var (83) ?",
          a: "Oui, CyberSecure intervient dans tout le Var : Toulon Provence Méditerranée, Dracénie, Pays Varois, et zones touristiques côtières. Nous avons une expertise dans les environnements de défense navale et les sous-traitants militaires varois. CERT d'urgence 24/7.",
        },
        {
          q: "Naval Group à Toulon : comment auditer un industriel de défense navale sans accéder aux données classifiées ?",
          a: "Naval Group traite des données allant de DIFFUSION RESTREINTE à SECRET DÉFENSE pour ses programmes (Barracuda, SNLE NG). Un prestataire de cybersécurité externe ne peut pas accéder aux données classifiées sans habilitation gouvernementale. L'audit se concentre sur les périmètres non classifiés : infrastructure IT corporate, réseaux de communication, sécurité des locaux (contrôles d'accès physique), et gestion des accès externes (maintenance, visiteurs). Pour les périmètres classifiés, Naval Group dispose d'équipes internes habilitées et de sociétés partenaires habilitées. CyberSecure audite les périmètres non classifiés et accompagne les sous-traitants varois.",
        },
        {
          q: "Les PME sous-traitantes de Naval Group à Toulon : quelles exigences cyber imposées par le donneur d'ordre ?",
          a: "Naval Group impose à ses fournisseurs un référentiel de sécurité (NSQ 1000) qui couvre : protection des données techniques (plans, spécifications), sécurité des systèmes de communication avec Naval Group (portail extranet, messagerie chiffrée), contrôle des accès physiques dans les ateliers, et surveillance des transferts de données. En cas de travaux sur site Naval Group, des habilitations du personnel et une revue de sécurité des équipements apportés sont requis. CyberSecure accompagne les PME varoises dans leur mise en conformité NSQ 1000.",
        },
        {
          q: "Saint-Tropez et les yachts de luxe : risques cyber liés à la clientèle UHNW (Ultra High Net Worth) ?",
          a: "Les services aux UHNW (milliardaires, célébrités, chefs d'état) impliquent des données extrêmement sensibles : planning de déplacement, données financières, coordonnées GPS des yachts. Les agences de location de yachts, les conciergeries et les marinas de Saint-Tropez traitent ces données dans des systèmes souvent sous-sécurisés (CRM cloud non configuré, Wi-Fi marina non sécurisé). Les risques : chantage, enlèvement facilité par des informations compromises, fraude à l'identité. CyberSecure propose des audits de sécurité adaptés aux services aux UHNW.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Var ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI du Var — diagnostics numériques. Toulon Provence Méditerranée — programmes numériques. BPI France PACA — prêts innovation. Toulon Var Technologies accompagne les startups et PME innovantes. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteVar;
