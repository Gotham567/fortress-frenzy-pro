import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteNord = () => (
  <CityLandingPage
    data={{
      city: "Nord",
      citySlug: "nord",
      region: "Hauts-de-France",
      postalCode: "59",
      intro: "CyberConform est votre prestataire cybersécurité Nord (59) : audit NIS2, pentest, conformité RGPD et réponse aux incidents pour les entreprises de Lille, Roubaix, Tourcoing, Valenciennes, Dunkerque, Maubeuge et tout le département.",
      localContext: "Le Nord est le 3e département français par sa population. La Métropole Européenne de Lille (MEL) est un carrefour économique franco-belge. L'industrie textile (Roubaix, Tourcoing) s'est reconvertie en hub numérique (EuraTechnologies, Eurasanté). Dunkerque concentre une industrie lourde exceptionnelle : aciérie ArcelorMittal, port industriel, et le projet GigaFactory ACC (batteries électriques). Valenciennes est un bassin automobile majeur (Toyota, Alstom Valenciennes, équipementiers). La Sambre-Avesnois garde une tradition industrielle (Maubeuge). Le numérique est en fort développement (EuraTechnologies, 3ème plus grand incubateur d'Europe).",
      sectors: [
        "Numérique et tech (EuraTechnologies Roubaix — 3e incubateur européen)",
        "Automobile (Toyota Valenciennes, Alstom TGV, équipementiers 59)",
        "Industrie lourde (ArcelorMittal Dunkerque, sidérurgie, GigaFactory ACC)",
        "E-commerce et logistique (Amazon Lauwin-Planque, Decathlon, La Redoute)",
        "Santé (CHU Lille, Eurasanté — 30+ entreprises de santé)",
        "Agroalimentaire (Bonduelle Villeneuve-d'Ascq, industries alimentaires 59)",
        "Textile et mode (Kiabi, Grain de Malice, industrie textile reconvertie)",
        "Collectivités (MEL, Dunkerque Grand Littoral, CD59)",
      ],
      neighborhoods: [
        "Lille – Roubaix – Tourcoing – MEL (59000)",
        "EuraTechnologies – Euratechnopole (59000)",
        "Valenciennes – Anzin – Maubeuge (59300)",
        "Dunkerque – Grande-Synthe – Loon-Plage (59140)",
        "Douai – Sin-le-Noble (59500)",
        "Cambrai – Caudry (59400)",
        "Villeneuve-d'Ascq – Mons-en-Barœul (59650)",
        "Haubourdin – Seclin – Lesquin (59273)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département du Nord (59) ?",
          a: "Oui, CyberConform intervient dans tout le département du Nord : MEL, Dunkerque Grand Littoral, Valenciennes Métropole, Douaisis, Cambrésis, et zones rurales. Nos consultants sont notamment présents sur EuraTechnologies à Roubaix. CERT d'urgence 24/7.",
        },
        {
          q: "La GigaFactory ACC de Dunkerque est-elle une infrastructure critique NIS2 ?",
          a: "Oui. La GigaFactory ACC (Automotive Cells Company — JV Stellantis/Mercedes/TotalEnergies) de Dunkerque est une infrastructure industrielle critique dans le secteur fabrication de véhicules électriques et d'équipements énergétiques. Ses systèmes industriels OT/IT et sa chaîne d'approvisionnement sont dans le périmètre NIS2. CyberConform propose des audits industriels OT spécialisés pour ce type d'infrastructure.",
        },
        {
          q: "EuraTechnologies à Roubaix : quels services pour les startups tech ?",
          a: "EuraTechnologies (3e plus grand incubateur numérique d'Europe) héberge plus de 300 entreprises tech. Les startups y ont des besoins croissants en cybersécurité : sécurisation des architectures cloud, conformité RGPD, audits avant levée de fonds, certifications ISO 27001. CyberConform propose des packages startup adaptés aux budgets et contraintes des entreprises d'EuraTechnologies.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Nord (59) ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Grand Lille — diagnostics numériques cofinancés. EuraTechnologies — ressources et partenariats pour les membres. BPI France Hauts-de-France — prêts innovation. La Région Hauts-de-France via ses fonds FEDER et le programme Hauts-de-France Numérique.",
        },
        {
          q: "Toyota Valenciennes est-il soumis à TISAX et NIS2 ?",
          a: "Oui. Toyota Manufacturing France (TMMF) à Valenciennes est soumis à NIS2 (entité importante — secteur fabrication de véhicules automobiles). Toyota impose également TISAX à ses fournisseurs et sous-traitants. Les équipementiers automobiles du bassin valenciennois doivent répondre à ces deux référentiels. CyberConform accompagne les sous-traitants automobiles nordistes dans leurs certifications TISAX et NIS2.",
        },
      ],
    }}
  />
);

export default CyberSecuriteNord;
