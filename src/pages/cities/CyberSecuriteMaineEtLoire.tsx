import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteMaineEtLoire = () => (
  <CityLandingPage
    data={{
      city: "Maine-et-Loire",
      citySlug: "maine-et-loire",
      region: "Pays de la Loire",
      postalCode: "49",
      intro: "CyberSecure est votre expert cybersécurité Maine-et-Loire (49) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises d'Angers, Saint-Barthélemy-d'Anjou, Avrillé, Saumur, Cholet et tout le département.",
      localContext: "Le Maine-et-Loire est un département industriel et technologique sous-estimé. Angers est le siège de STMicroelectronics France, leader mondial de la microélectronique (circuits intégrés, capteurs, power electronics). Le pôle de compétitivité EMC2 (excellance manufacturing) et Atlanpole connectent les acteurs innovants. Servier Pharmaceuticals (groupe familial français) a une R&D importante en Anjou. Le vignoble ligérien (Muscadet, Anjou Blanc, Savennières) génère une industrie viticole en digitalisation. L'agroalimentaire (Cointreau, industrie de la charcuterie) est un secteur économique majeur.",
      sectors: [
        "Microélectronique (STMicroelectronics Angers — conception circuits intégrés, IP R&D)",
        "Pharma (Servier Pharmaceuticals — données essais cliniques, R&D molécules)",
        "Agroalimentaire (Cointreau, charcuteries, distilleries — ERP cloud, traçabilité)",
        "Viticulture (Loire Valley wines, caves coopératives — e-commerce, données clients)",
        "Numérique (Angers French Tech, Atlanpole, ESN angevines — SaaS, cloud)",
        "Santé (CHU Angers, ICO Pays de Loire — HDS, oncologie)",
        "Mécanique et textile (industrie Maine-et-Loire — ERP, systèmes de production)",
        "Collectivités (Angers Loire Métropole, CD49 — cloud souverain, e-services)",
      ],
      neighborhoods: [
        "Angers – Belle-Beille – La Roseraie (49000)",
        "Saint-Barthélemy-d'Anjou – Trélazé (49124/49800)",
        "Avrillé – Beaucouzé (49240/49070)",
        "Saumur – Saint-Hilaire-Saint-Florent (49400)",
        "Cholet (49300)",
        "Les Ponts-de-Cé – Bouchemaine (49130/49080)",
        "Mauges-sur-Loire – Chemillé (49110)",
        "Doué-en-Anjou – Longué-Jumelles (49700/49160)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Maine-et-Loire (49) ?",
          a: "Oui, CyberSecure intervient dans tout le 49 : Angers Loire Métropole, Saumurois, Choletais, Baugeois. Nous connaissons le tissu industriel angevin et les exigences des secteurs microélectronique et pharma. CERT d'urgence 24/7.",
        },
        {
          q: "STMicroelectronics Angers : comment protéger la propriété intellectuelle de la conception de circuits intégrés ?",
          a: "STMicroelectronics Angers (R&D en circuits intégrés pour l'automobile et l'IoT) développe des IP (Intellectual Property) précieuses — layouts de circuits, algorithmes de contrôle, bibliothèques de conception. Un audit de sécurité chez STMicro couvre : sécurité des outils EDA (Electronic Design Automation — Cadence, Synopsys), accès aux serveurs de simulation (farm de calcul), gestion des licences logicielles (serveurs de licences souvent oubliés), protection des NDA avec les partenaires fondeurs (TSMC, GlobalFoundries), et contrôle des exports de données de conception (réglementation ITAR/EAR pour certaines conceptions). CyberSecure accompagne les entreprises de microélectronique.",
        },
        {
          q: "Servier Pharmaceuticals à Gidy (45)/Angers : conformité cyber pour un laboratoire indépendant français ?",
          a: "Servier est l'un des rares grands laboratoires pharmaceutiques entièrement français (non coté, fondation familiale). Ses données de R&D (découverte de molécules, résultats d'essais cliniques) sont d'une valeur considérable et font l'objet d'espionnage industriel ciblé. La conformité cyber chez Servier passe par : protection des systèmes GxP (validation CSV des systèmes informatiques en contact avec les données d'essais), sécurisation des plateformes de collaboration avec les CRO (Contract Research Organizations), et conformité NIS2 comme entité importante dans le secteur santé. CyberSecure réalise des audits pharma adaptés aux contraintes GxP.",
        },
        {
          q: "Cointreau (Saint-Barthélemy-d'Anjou) : risques cyber pour une marque de spiritueux premium mondiale ?",
          a: "Cointreau (groupe Rémy Cointreau) gère une marque mondiale avec des recettes secrètes (formule de la triple-distillation de l'orange), des réseaux de distribution dans 150 pays, et une clientèle haut de gamme. Les risques : contrefaçon facilitée par le vol de formules ou de données de production, fraude aux virements dans les transactions internationales (BEC), et violations RGPD sur les bases de données CRM clients. CyberSecure propose des audits de sécurité adaptés aux entreprises de spiritueux et boissons premium.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Maine-et-Loire ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Maine-et-Loire — diagnostics numériques. Angers Loire Métropole — programmes innovation. BPI France Pays de Loire — prêts innovation. Atlanpole et la French Tech Angers accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteMaineEtLoire;
