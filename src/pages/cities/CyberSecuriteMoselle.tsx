import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteMoselle = () => (
  <CityLandingPage
    data={{
      city: "Moselle",
      citySlug: "moselle",
      region: "Grand Est",
      postalCode: "57",
      intro: "CyberSecure est votre expert cybersécurité Moselle (57) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Metz, Thionville, Forbach, Sarreguemines, Sarrebourg et tout le département.",
      localContext: "La Moselle est un département transfrontalier stratégique, à la croisée de la France, de l'Allemagne et du Luxembourg. Metz est un hub numérique émergent avec la technopole de l'ancienne base militaire (Technopole de Metz). ArcelorMittal Florange/Gandrange, la sidérurgie et la metallurgie restent des piliers industriels. Thionville est le centre des travailleurs frontaliers vers le Luxembourg (100 000+ frontaliers), avec des enjeux de sécurité informatique transfrontaliers. La présence militaire (Région Militaire de Metz, DPSD) et l'histoire du bassin minier génèrent un tissu industriel particulier.",
      sectors: [
        "Sidérurgie et métallurgie (ArcelorMittal Florange, Aperam — OT/SCADA, MES)",
        "Transfrontalier Luxembourg (entreprises Thionville, frontaliers — cloud LU/FR)",
        "Défense (Région Militaire Metz, DPSD — systèmes homologués)",
        "Numérique (Technopole Metz, startups Grand Est — SaaS, cloud)",
        "Logistique (plateforme multimodale Metz, Amazon Cournon — WMS cloud)",
        "Santé (CHR Metz-Thionville, hôpitaux — HDS, télémédecine)",
        "Agroalimentaire (Bettendorf, industrie alimentaire mosellane — ERP cloud)",
        "Collectivités (Metz Métropole, CD57 — cloud souverain, dématérialisation)",
      ],
      neighborhoods: [
        "Metz – Technopole – Borny (57000)",
        "Thionville – Hayange (57100/57700)",
        "Forbach – Freyming-Merlebach (57600)",
        "Sarreguemines – Sarrebourg (57200/57400)",
        "Yutz – Algrange (57970)",
        "Woippy – Montigny-lès-Metz (57140/57158)",
        "Fameck – Uckange – Florange (57290)",
        "Saint-Avold – Forbach (57500)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Moselle (57) ?",
          a: "Oui, CyberSecure intervient dans toute la Moselle : Metz Métropole, le Pays de Thionville-Fensch, le bassin houiller, le Pays de Sarrebourg. Nous avons une expertise dans les environnements industriels OT et dans les problématiques transfrontalières (France/Luxembourg/Allemagne). CERT d'urgence 24/7.",
        },
        {
          q: "Les travailleurs frontaliers mosellans au Luxembourg : quels risques cyber liés au télétravail transfrontalier ?",
          a: "Plus de 100 000 Mosellans travaillent au Luxembourg pour des banques (BGL BNP Paribas, ING), des fonds d'investissement (Clearstream, Euroclear), et des entreprises tech. Le télétravail transfrontalier implique : accès VPN depuis des réseaux domestiques français vers des SI luxembourgeois, utilisation d'équipements personnels non contrôlés, et risques de phishing ciblé. Les entreprises luxembourgeoises qui emploient des frontaliers mosellans doivent sécuriser ces accès (MDM, MFA, conditional access). CyberSecure audite ces configurations.",
        },
        {
          q: "ArcelorMittal à Florange : comment sécuriser un environnement sidérurgique OT/IT convergent ?",
          a: "Les hauts fourneaux et convertisseurs d'ArcelorMittal fonctionnent avec des DCS Siemens, des automates Rockwell, et des SCADA propriétaires. La convergence OT/IT pour l'industrie 4.0 (maintenance prédictive via IoT, analytics de production sur cloud Azure Industrial IoT) crée de nouvelles surfaces d'attaque. Un audit OT chez ArcelorMittal Florange couvre : cartographie des actifs OT, analyse des flux réseaux OT/IT (PROFINET, MODBUS), vérification des zones DMZ industrielles, et conformité IEC 62443. CyberSecure est certifié pour les audits OT industriels.",
        },
        {
          q: "La Technopole de Metz : quels services cyber pour les startups et ETI numériques ?",
          a: "La Technopole de Metz héberge des entreprises IT, des ESN, et des startups en développement logiciel. Leurs besoins cyber : pentest de plateformes SaaS (OWASP Top 10), audit de la sécurité cloud (AWS/Azure), conformité ISO 27001, et accompagnement NIS2. CyberSecure propose des audits adaptés aux entreprises numériques messines : délais rapides (2-3 semaines), rapport exécutif, et accompagnement dans la correction des vulnérabilités.",
        },
        {
          q: "Quels financements pour un audit cyber en Moselle ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Moselle — diagnostics numériques. Metz Métropole — programmes innovation. BPI France Grand Est — prêts innovation. La Région Grand Est (FEDER numérique) co-finance des projets de transformation digitale sécurisée. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteMoselle;
