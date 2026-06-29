import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteRhone = () => (
  <CityLandingPage
    data={{
      city: "Rhône",
      citySlug: "rhone",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "69",
      intro: "CyberConform est votre prestataire cybersécurité Rhône (69) : audit NIS2, pentest, conformité RGPD et réponse aux incidents pour les entreprises de Lyon, Villeurbanne, Vénissieux, Bron, Vaulx-en-Velin, Caluire et tout le département.",
      localContext: "Le Rhône est le 2e département économique français après Paris. La Métropole de Lyon est la 2e place financière et industrielle de France, avec une concentration exceptionnelle d'entreprises. La chimie et pharmacie (Sanofi, Boehringer Ingelheim, Aguettant) sont historiquement implantées. La biotech (Lyonbiopôle) et le numérique (French Tech Lyon, Axeleo) connaissent une forte croissance. Le textile de luxe (Hermès, tissus de soie) et l'alimentaire (halle de Lyon, producteurs AOC) complètent ce tissu. Lyon est aussi la 1ère destination datacenter hors Île-de-France (Equinix, SFR Business, Kyndryl).",
      sectors: [
        "Chimie et pharmacie (Sanofi Lyon, Boehringer Ingelheim, industrie chimique 69)",
        "Biotech (Lyonbiopôle, Sanofi, Institut Mérieux, BioMérieux)",
        "Numérique et tech (French Tech Lyon, Axeleo, éditeurs SaaS lyonnais)",
        "Luxe et textile (Hermès, Soierie lyonnaise, industries du luxe)",
        "Finance (Crédit Agricole, Banques régionales, cabinets comptables)",
        "Santé (HCL Lyon, hôpitaux, INSERM, Sanofi Pasteur)",
        "Datacenters (Equinix Lyon, SFR Business, Kyndryl)",
        "Collectivités (Métropole de Lyon, Villeurbanne, CD69)",
      ],
      neighborhoods: [
        "Lyon 2e – 3e – Part-Dieu (69002/69003)",
        "Lyon 6e – 8e – 9e – arrondissements résidentiels",
        "Villeurbanne – Bron – Vaulx-en-Velin (69100)",
        "Vénissieux – Saint-Fons – Feyzin (69200)",
        "Caluire-et-Cuire – Rillieux-la-Pape (69300)",
        "Écully – Craponne – Tassin (69130)",
        "Givors – Mornant (69700)",
        "Meyzieu – Décines-Charpieu (69330)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Rhône (69) et la Métropole de Lyon ?",
          a: "Oui, CyberConform intervient dans tout le département du Rhône : Lyon Métropole, Beaujolais, Monts du Lyonnais, et zones rurales. Nos consultants sont basés à Lyon et couvrent l'ensemble du département. Déplacement inclus pour les entreprises lyonnaises. CERT d'urgence 24/7.",
        },
        {
          q: "Les laboratoires pharmaceutiques de Lyon (Sanofi, BioMérieux) sont-ils soumis à NIS2 ?",
          a: "Oui. Sanofi (vaccins Pasteur, médicaments), BioMérieux (diagnostic in vitro) et les autres laboratoires pharmaceutiques lyonnais sont des entités importantes ou essentielles NIS2 dans le secteur santé. Les enjeux cyber incluent la protection de la R&D, des données d'essais cliniques (RGPD données sensibles), et la continuité de production. CyberConform accompagne les industriels pharmaceutiques lyonnais.",
        },
        {
          q: "La French Tech Lyon a-t-elle un écosystème de sécurité cloud spécifique ?",
          a: "Lyon dispose d'un riche écosystème tech (Axeleo, Incubateur de l'École Centrale, EM Lyon) avec de nombreux éditeurs SaaS en croissance. Ces startups ont besoin d'audits cloud, de conformité RGPD, et de certifications ISO 27001 pour leurs clients grands comptes. CyberConform propose des packages startup adaptés aux startups lyonnaises, de la levée de fonds à la certification.",
        },
        {
          q: "Les datacenters lyonnais (Equinix Lyon) ont-ils des obligations spécifiques ?",
          a: "Oui. Les datacenters qui hébergent des infrastructures critiques ou fournissent des services d'hébergement cloud à des entreprises NIS2 sont eux-mêmes concernés par NIS2 (secteur infrastructures numériques). Equinix, SFR Business et Kyndryl à Lyon ont des obligations de sécurité strictes. Leurs clients doivent aussi vérifier que leurs prestataires d'hébergement sont conformes.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Rhône ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Lyon Métropole — diagnostics numériques. Métropole de Lyon — programmes de soutien à l'innovation numérique. BPI France Auvergne-Rhône-Alpes — prêts innovation. Axeleo accompagne ses membres avec des ressources cybersécurité.",
        },
      ],
    }}
  />
);

export default CyberSecuriteRhone;
