import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteCoteDor = () => (
  <CityLandingPage
    data={{
      city: "Côte-d'Or",
      citySlug: "cote-dor",
      region: "Bourgogne-Franche-Comté",
      postalCode: "21",
      intro: "CyberSecure est votre expert cybersécurité Côte-d'Or (21) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Dijon, Beaune, Chenôve, Quetigny, Longvic et tout le département.",
      localContext: "La Côte-d'Or est connue pour sa gastronomie (moutarde, vignobles bourguignons UNESCO) et son chef-lieu Dijon qui se positionne comme smart city référence. Dijon Métropole a déployé OnDijon (plateforme IoT urbaine primée). L'industrie est diversifiée : Urgo Group (pansements et soins Chenôve), Nidec Global Appliance (moteurs électriques), Cargill (céréales), Dijon Céréales. Le CHU Dijon-Bourgogne est un établissement de santé majeur de l'Est. Le vitivinicole bourguignon (négoces de Beaune, caves coopératives) gère des données de traçabilité et de e-commerce. L'Université de Bourgogne et l'INRAE apportent un tissu de recherche et startups deeptech.",
      sectors: [
        "Agroalimentaire (Cargill Dijon, Dijon Céréales, IAA bourguignonnes — ERP, RGPD)",
        "Vitivinicole (négoces Beaune, caves coopératives — e-commerce, traçabilité, PCI DSS)",
        "Santé (CHU Dijon-Bourgogne — HDS, données patients, télémédecine, NIS2 santé)",
        "Industrie (Urgo Group Chenôve, Nidec Dijon — OT, ERP SAP, propriété intellectuelle)",
        "Logistique (Bolloré, FM Logistic Dijon — WMS, flux supply chain, sécurité entrepôts)",
        "Smart city (Dijon Métropole OnDijon — IoT urbain, open data, cloud souverain)",
        "Recherche (Université Bourgogne, INRAE — open data, RGPD, propriété intellectuelle)",
        "PME services (ESN dijonnaises, cabinets conseil — Microsoft 365, NIS2)",
      ],
      neighborhoods: [
        "Dijon – Quetigny (21000/21560)",
        "Chenôve – Marsannay (21300)",
        "Beaune (21200)",
        "Longvic – Chevigny-Saint-Sauveur (21600/21800)",
        "Talant – Fontaine-lès-Dijon (21240)",
        "Auxonne (21130)",
        "Nuits-Saint-Georges (21700)",
        "Montbard (21500)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Côte-d'Or (21) ?",
          a: "Oui, CyberSecure intervient dans toute la Côte-d'Or : Dijon Métropole, arrondissement de Beaune, Côte de Nuits, Auxois. Nos consultants accompagnent les PME dijonnaises, les acteurs vitivinicoles, et les établissements de santé. CERT d'urgence 24/7.",
        },
        {
          q: "Dijon Métropole a déployé OnDijon, plateforme IoT urbaine : comment sécuriser un réseau smart city ?",
          a: "OnDijon est une plateforme de gestion urbaine centralisée qui agrège des données de 170 caméras, capteurs de parking, feux intelligents, et relevés de consommation. Les risques cyber d'un tel système : prise de contrôle des feux tricolores (risque accidents), accès aux images de vidéosurveillance (RGPD), et attaques sur les protocoles IoT (MQTT, LoRaWAN, Zigbee). La sécurisation passe par : segmentation réseau stricte entre les réseaux IoT et IT de la ville, chiffrement de tous les flux IoT, gestion des identités des équipements (PKI IoT), et monitoring SOC dédié. CyberSecure audite les plateformes smart city et les déploiements IoT urbains.",
        },
        {
          q: "Urgo Group (pansements, Chenôve) : comment protéger les données de R&D d'un groupe pharmaceutico-médical ?",
          a: "Urgo Group développe des dispositifs médicaux (pansements techniques, cicatrisation) qui nécessitent des essais cliniques et une R&D sensible. Les données à protéger : formulations de produits (secret industriel), données d'essais cliniques (RGPD données de santé), certificats CE (falsification = risque réglementaire), et brevets déposés. La classification des données est essentielle : R&D = CONFIDENTIEL, brevets = TRÈS CONFIDENTIEL. CyberSecure réalise des audits de sécurité pour les fabricants de dispositifs médicaux et les acteurs pharma-médical en Bourgogne.",
        },
        {
          q: "Le vitivinicole bourguignon (négoces de Beaune, domaines) est-il une cible cyber ?",
          a: "Oui. Les grands domaines bourguignons (Romanée-Conti, Drouhin, Louis Jadot) sont des cibles privilégiées pour deux raisons : la valeur de leurs ventes en ligne (bouteilles à plusieurs milliers d'euros, paiements PCI DSS) et la valeur de leur réputation (une usurpation de leur identité pour vendre des contrefaçons peut coûter des millions). Les risques concrets : fraude sur le site de vente en ligne (typosquatting, phishing ciblé acheteurs), compromission de la base de données clients (milliers d'acheteurs fortunés = RGPD), et piratage des systèmes de traçabilité (étiquetage des grands crus). CyberSecure accompagne les domaines et négoces dans leur sécurisation.",
        },
        {
          q: "Quels financements pour un audit cyber en Côte-d'Or ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Côte-d'Or — diagnostics numériques entreprises. Dijon Métropole — programmes innovation et transformation numérique. BPI France Bourgogne-Franche-Comté — prêts innovation. La Région Bourgogne-Franche-Comté — aides à la numérisation des PME. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteCoteDor;
