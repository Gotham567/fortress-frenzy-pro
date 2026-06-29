import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteBouchesduRhone = () => (
  <CityLandingPage
    data={{
      city: "Bouches-du-Rhône",
      citySlug: "bouches-du-rhone",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "13",
      intro: "CyberSecure est votre expert cybersécurité Bouches-du-Rhône (13) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Marseille, Aix-en-Provence, Vitrolles, Aubagne, Martigues et tout le département.",
      localContext: "Les Bouches-du-Rhône est le département le plus peuplé de PACA avec une économie très diversifiée. Marseille est le 2e port de commerce européen (Grand Port Maritime) et un hub logistique méditerranéen. La zone industrialo-portuaire de Fos-sur-Mer concentre raffinage (TotalEnergies), pétrochimie, sidérurgie (ArcelorMittal) avec des systèmes OT/SCADA critiques. La technopole de l'Arbois et Sophia Antipolis (frontière Var) accueillent des entreprises high-tech. Marseille est aussi un hub de connectivité internationale (câbles sous-marins SEACOM, PEACE).",
      sectors: [
        "Port et logistique (Grand Port Maritime Marseille, CMA CGM siège, transitaires)",
        "Énergie (TotalEnergies Lavera, GRT Gaz, Engie Martigues — OT/SCADA)",
        "Pétrochimie (Ineos, Kem One, Arkema Fos — ICS, systèmes industriels critiques)",
        "Sidérurgie (ArcelorMittal Fos-sur-Mer — OT, MES, gestion production)",
        "Tourisme (Aéroport Marseille-Provence, hôtellerie — réservation cloud, données clients)",
        "Santé (AP-HM, Fondation Hôpital Saint-Joseph, IPC — HDS, e-santé)",
        "High-tech (Technopole Arbois, startups Aix, Capgemini Aix — cloud, SaaS)",
        "Collectivités (Métropole Aix-Marseille-Provence, CD13 — cloud souverain)",
      ],
      neighborhoods: [
        "Marseille – Euroméditerranée – La Joliette (13001)",
        "Aix-en-Provence – Technopole Arbois (13100)",
        "Vitrolles – Aéroport Marseille-Provence (13127)",
        "Martigues – Fos-sur-Mer – Port-Saint-Louis (13500)",
        "Aubagne – La Ciotat (13400/13600)",
        "Salon-de-Provence – Miramas (13300)",
        "Arles – Tarascon (13200)",
        "Istres – Miramas – Marignane (13800)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département des Bouches-du-Rhône (13) ?",
          a: "Oui, CyberSecure intervient dans tout le 13 : Métropole Aix-Marseille-Provence, Pays d'Arles, Pays de Martigues, et le Pays Salonais. Nous avons une expertise forte dans les environnements industriels OT/SCADA de la zone de Fos-sur-Mer et dans les systèmes d'information portuaires. CERT d'urgence 24/7.",
        },
        {
          q: "Le Grand Port Maritime de Marseille : quelles sont les obligations NIS2 pour les infrastructures portuaires ?",
          a: "Les ports maritimes sont des opérateurs d'importance vitale (OIV) et des entités essentielles NIS2 dans la catégorie 'transport maritime'. Le Grand Port Maritime de Marseille doit respecter l'article 21 NIS2 : mesures de gestion des risques cyber, plan de réponse aux incidents, sécurité de la chaîne d'approvisionnement numérique. Les systèmes de gestion du trafic portuaire (VTS, AIS), les systèmes de gestion des terminaux (TOS), et les contrôles d'accès physique et logique sont des périmètres prioritaires. CyberSecure audite les environnements portuaires.",
        },
        {
          q: "TotalEnergies à Lavera : comment auditer un site pétrochimique avec des systèmes OT anciens ?",
          a: "Les raffineries et sites pétrochimiques du 13 fonctionnent souvent avec des DCS (Distributed Control Systems), des PLC et des SCADA déployés depuis les années 1990-2000. Ces systèmes OT ont des vulnérabilités connues mais ne peuvent pas être patchés facilement (risque de production, cycles de maintenance longs). L'audit OT passe par : cartographie OT (sans impact sur la production), identification des interfaces OT/IT, évaluation des zones de sécurité (modèle Purdue), et tests de pénétration limités aux couches réseau. CyberSecure réalise des audits OT adaptés aux contraintes industrielles.",
        },
        {
          q: "CMA CGM (Marseille) a subi une cyberattaque en 2020 : quelles leçons pour les armateurs ?",
          a: "La cyberattaque Ragnar Locker contre CMA CGM en octobre 2020 a mis hors ligne une partie de leurs systèmes de réservation et de gestion pendant plusieurs jours. Les leçons : segmentation réseau entre systèmes IT et OT maritime (ECDIS, AIS), protection des accès distants pour les équipages, sauvegardes immuables des données de fret, plan de continuité d'activité (PCA) testable en conditions réelles. CyberSecure accompagne les armateurs et transitaires dans la sécurisation de leurs systèmes.",
        },
        {
          q: "Quels financements pour un audit cybersécurité dans les Bouches-du-Rhône ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Marseille-Provence — diagnostics numériques. Métropole Aix-Marseille-Provence — programmes innovation. BPI France PACA — prêts innovation. La French Tech Aix-Marseille accompagne ses startups. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteBouchesduRhone;
