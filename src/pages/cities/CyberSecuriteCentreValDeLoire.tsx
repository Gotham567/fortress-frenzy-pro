import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteCentreValDeLoire = () => (
  <CityLandingPage
    data={{
      city: "Centre-Val de Loire",
      citySlug: "centre-val-de-loire",
      region: "Centre-Val de Loire",
      postalCode: "18 / 28 / 36 / 37 / 41 / 45",
      intro: "CyberConform est votre prestataire cybersécurité Centre-Val de Loire : audit NIS2, pentest, conformité RGPD et réponse aux incidents pour les entreprises d'Orléans, Tours, Chartres, Bourges, Blois, Châteauroux et toute la région.",
      localContext: "Le Centre-Val de Loire est une région industrielle souvent méconnue mais économiquement dense. Orléans accueille des entreprises pharmaceutiques (Servier, Novartis, la cosmétique avec Caudalie, Chanel), des industries électriques et électroniques, et une scène numérique en développement. Tours est un pôle universitaire et abrite la microélectronique (STMicroelectronics Tours). Chartres concentre le secteur cosmétique et pharmaceutique (Cosmétologue, laboratoires pharmaceutiques). L'agriculture et l'agroalimentaire (céréales, vins de Loire, productions maraîchères) sont omniprésents. La proximité avec Paris crée une forte dépendance aux DSI franciliens et aux infrastructures cloud d'Île-de-France.",
      sectors: [
        "Pharmaceutique et cosmétique (Servier, Caudalie, Chanel Chartres)",
        "Microélectronique (STMicroelectronics Tours)",
        "Agroalimentaire et viticulture (vins de Loire, céréales, productions maraîchères)",
        "Logistique et e-commerce (entrepôts Amazon, SEGRO, axe A10)",
        "Énergie (EDF centrale nucléaire Saint-Laurent-des-Eaux, Belleville-sur-Loire)",
        "Industries diverses (mécanique, plasturgie, aéronautique sous-traitance)",
        "Tourisme (châteaux de la Loire, Amboise, Chenonceau)",
        "Collectivités (Orléans Métropole, Tours Métropole, Région Centre-VdL)",
      ],
      neighborhoods: [
        "Orléans Métropole – Saint-Jean-de-Braye – Fleury-les-Aubrais (45)",
        "Tours Métropole Val de Loire – Saint-Cyr-sur-Loire (37)",
        "Chartres – Dreux – Châteaudun (28)",
        "Bourges – Vierzon – Saint-Amand-Montrond (18)",
        "Blois – Vendôme (41)",
        "Châteauroux – Issoudun (36)",
        "Amboise – Chinon – Loches (37)",
        "Gien – Montargis – Pithiviers (45)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 6 départements du Centre-Val de Loire ?",
          a: "Oui, CyberConform intervient dans les six départements : Cher (18), Eure-et-Loir (28), Indre (36), Indre-et-Loire (37), Loir-et-Cher (41) et Loiret (45). Nos consultants se déplacent sur site dans toute la région, y compris dans les zones rurales. La proximité avec Paris nous permet des délais courts (moins de 2h de trajet depuis la région). CERT d'urgence 24/7.",
        },
        {
          q: "Les laboratoires pharmaceutiques du Loiret sont-ils soumis à NIS2 ?",
          a: "Oui. Les laboratoires pharmaceutiques du Loiret (Servier à Orléans, etc.) sont des entités importantes NIS2 dans le secteur santé pour ceux qui dépassent les seuils, ou essentielles s'ils sont considérés critiques. Les enjeux cyber sont importants : protection de la propriété intellectuelle (brevets, formules), données des essais cliniques (RGPD données de santé), continuité de production. CyberConform accompagne les industriels pharmaceutiques du Centre-Val de Loire.",
        },
        {
          q: "L'entrepôt logistique de mon entreprise utilise des systèmes WMS — est-ce un risque cyber ?",
          a: "Oui. La région Centre-Val de Loire concentre de nombreux entrepôts logistiques (axe A10/A11) dont les WMS (Warehouse Management Systems) et les systèmes automatisés (convoyeurs, AGV) sont de plus en plus connectés et donc exposés. Ces systèmes OT sont souvent mal sécurisés et constituent des cibles pour les ransomwares. CyberConform propose des audits de sécurité OT adaptés à la logistique.",
        },
        {
          q: "Quels financements pour un audit cyber en Centre-Val de Loire ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit pour les PME. La Région Centre-Val de Loire via son programme Naissance d'une ETI et ses fonds FEDER. Les CCI de la région (CCI Loiret, CCI Indre-et-Loire, CCI Eure-et-Loir) proposent des accompagnements numériques. BPI France Centre propose des prêts pour les investissements cyber. Plusieurs pôles de compétitivité régionaux (Cosmetic Valley, S2E2) proposent aussi des accompagnements collectifs.",
        },
        {
          q: "Proposez-vous des formations cybersécurité pour les équipes en Centre-Val de Loire ?",
          a: "Oui. CyberConform propose des formations et sensibilisations en présentiel dans toute la région : ateliers phishing simulé, formation dirigeants (demi-journée), formation équipes IT, sensibilisation RGPD. Nos formations sont éligibles aux OPCO (financement formation professionnelle continue) et peuvent être organisées dans vos locaux à Orléans, Tours, Chartres ou ailleurs dans la région.",
        },
      ],
    }}
  />
);

export default CyberSecuriteCentreValDeLoire;
