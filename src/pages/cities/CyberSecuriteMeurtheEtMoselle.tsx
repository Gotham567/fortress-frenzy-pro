import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteMeurtheEtMoselle = () => (
  <CityLandingPage
    data={{
      city: "Meurthe-et-Moselle",
      citySlug: "meurthe-et-moselle",
      region: "Grand Est",
      postalCode: "54",
      intro: "CyberSecure est votre expert cybersécurité Meurthe-et-Moselle (54) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Nancy, Vandœuvre-lès-Nancy, Lunéville, Longwy, Briey et tout le département.",
      localContext: "La Meurthe-et-Moselle est un département lorrain avec Nancy pour capitale régionale. Nancy est une métropole universitaire et médicale de premier plan (Université de Lorraine, CHRU Nancy, CHR Metz-Thionville). Le bassin industriel du Sillon Lorrain (Nancy-Metz) concentre des entreprises sidérurgiques (ArcelorMittal Florange côté Moselle, Lorfonte côté 54), chimiques (Air Liquide, TotalEnergies), et de services. Le parc technologique du Plateau de Haye à Nancy accueille des entreprises innovantes. La frontière luxembourgeoise au nord-ouest génère des flux économiques transfrontaliers.",
      sectors: [
        "Sidérurgie et métallurgie (Lorfonte, IMC Arcelor — OT/SCADA industrie lourde)",
        "Chimie (Air Liquide Champigneulles, Solvay — sites Seveso, ICS)",
        "Cristallerie et luxe (Baccarat, Saint-Louis Cristal — IP artisanale, export)",
        "Numérique (Plateau de Haye Nancy, LORIA, startups lorraines — cloud, SaaS)",
        "Santé (CHRU Nancy, INJ — HDS, recherche médicale, neuro-sciences)",
        "Agroalimentaire (Bonne Maman-Andros Nancy, IAA lorraines — ERP cloud)",
        "Transfrontalier (nord 54 frontalier Luxembourg — finance, services, tech)",
        "Collectivités (Métropole Grand Nancy, CD54 — cloud souverain, smart city)",
      ],
      neighborhoods: [
        "Nancy – Vandœuvre – Essey (54000/54500)",
        "Maxéville – Malzéville (54320/54220)",
        "Tomblaine – Laxou (54510/54520)",
        "Longwy – Mont-Saint-Martin (54400)",
        "Briey – Conflans-en-Jarnisy (54150/54800)",
        "Lunéville (54300)",
        "Toul (54200)",
        "Homécourt – Jœuf (54310)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Meurthe-et-Moselle (54) ?",
          a: "Oui, CyberSecure intervient dans tout le 54 : Métropole du Grand Nancy, Pays du Bassin de Briey, Lunéville-Forêts, et zones frontalières Luxembourg. Nous avons une expertise dans les environnements industriels lorrains et les problématiques de conformité transfrontalières. CERT d'urgence 24/7.",
        },
        {
          q: "La cristallerie Baccarat (Baccarat, 54) : comment protéger un savoir-faire artisanal centenaire ?",
          a: "Baccarat (fondée en 1764) possède des formules de cristal, des techniques de gravure et des archives de design qui constituent un patrimoine immatériel inestimable. Ces données sont rarement dans des systèmes IT sophistiqués — mais le risque vient souvent d'un ERP mal sécurisé, de l'absence de sauvegarde des dessins de collection, ou d'un accès non sécurisé au réseau depuis les ateliers. Un audit de sécurité chez Baccarat couvre : sécurisation de l'ERP (Sage, SAP), protection des archives numériques de design, et sécurité des boutiques en ligne (e-commerce). CyberSecure propose des audits adaptés aux entreprises artisanales de luxe.",
        },
        {
          q: "Le CHRU de Nancy : comment gérer la cybersécurité d'un CHU de 13 000 salariés ?",
          a: "Le CHRU Nancy est l'un des plus grands hôpitaux de France (800 lits, 800 médecins). Sa direction informatique gère une infrastructure de 10 000+ postes, des centaines de serveurs, et des milliers d'appareils médicaux connectés. Les enjeux NIS2 santé : plan de réponse aux incidents documenté, audit annuel de sécurité par un PASSI qualifié ANSSI, exercices de crise cyber avec les équipes IT et médicales, et sauvegardes régulièrement testées avec un RPO < 4h. Le programme CaRE (Cyber Accélération et Résilience des Établissements) de l'ANS accompagne les hôpitaux publics. CyberSecure audite les systèmes de santé publics et privés.",
        },
        {
          q: "Les entreprises de la zone industrielle de Longwy (frontière Luxembourg-Belgique) : flux de données transfrontaliers ?",
          a: "Longwy est au cœur du triangle France-Luxembourg-Belgique. Les entreprises de la zone industrielle transfrontalière doivent gérer des flux de données vers 3 pays différents (France, GD Luxembourg, Belgique), tous soumis au RGPD mais avec des autorités de contrôle différentes (CNIL, CNPD Luxembourg, APD Belgique). Les problèmes courants : registre des traitements incomplet pour les flux transfrontaliers, sous-traitants belges ou luxembourgeois sans DPA signé, et systèmes de paye communs multi-pays. CyberSecure audite la conformité RGPD des entreprises transfrontalières.",
        },
        {
          q: "Quels financements pour un audit cyber en Meurthe-et-Moselle ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Meurthe-et-Moselle — diagnostics numériques. Métropole du Grand Nancy — programmes innovation. BPI France Grand Est — prêts innovation. La Région Grand Est (FEDER) co-finance des projets numériques. Le LORIA (labo IA Nancy) propose des ressources aux startups. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteMeurtheEtMoselle;
