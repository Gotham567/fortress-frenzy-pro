import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteLyon = () => (
  <CityLandingPage
    data={{
      city: "Lyon",
      citySlug: "lyon",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "69002",
      intro:
        "CyberConform accompagne les industriels, ETI et entreprises de la French Tech lyonnaise dans leur stratégie cybersécurité, NIS2 et ISO 27001. Audit, pentest, RSSI externalisé et gestion d'incident pour la métropole de Lyon et la région Auvergne-Rhône-Alpes.",
      localContext:
        "Lyon est la deuxième métropole économique française et le premier pôle industriel et chimique du pays. Le tissu économique lyonnais — industrie, santé, banque, French Tech — est particulièrement concerné par la directive NIS2 (secteurs essentiels). Notre cabinet intervient dans toute la métropole, du quartier de la Confluence à Vaise et la Part-Dieu, et accompagne aussi bien les ETI industrielles de la Vallée de la Chimie que les éditeurs SaaS du Carré de Soie.",
      sectors: [
        "Industrie et chimie (Vallée de la Chimie)",
        "Santé et biotech (Bioparc, hôpitaux)",
        "Banque, finance et assurance",
        "French Tech et SaaS (H7, Pôle Pixel)",
        "Logistique et transport",
        "ETI familiales rhônalpines",
      ],
      neighborhoods: [
        "Lyon Presqu'île (1er, 2ème)",
        "La Part-Dieu (3ème)",
        "Confluence et Gerland (7ème)",
        "Villeurbanne, Vaulx-en-Velin",
        "Saint-Étienne, Grenoble, Annecy",
        "Auvergne-Rhône-Alpes (toute la région)",
      ],
      faq: [
        {
          q: "Quels secteurs lyonnais sont concernés par NIS2 ?",
          a: "À Lyon, les secteurs prioritairement concernés sont l'industrie chimique et pharmaceutique (Vallée de la Chimie), la santé (HCL, cliniques), l'énergie, la banque-assurance et le numérique. Notre diagnostic gratuit permet de confirmer votre éligibilité.",
        },
        {
          q: "Intervenez-vous physiquement à Lyon et en Auvergne-Rhône-Alpes ?",
          a: "Oui. Nous intervenons sur site dans toute la métropole de Lyon (Part-Dieu, Confluence, Vaise) et en région : Saint-Étienne, Grenoble, Clermont-Ferrand, Annecy. Réponse à incident sous 24h.",
        },
        {
          q: "Comment sécuriser un site industriel lyonnais (OT/IT) ?",
          a: "La sécurité des environnements industriels (SCADA, automates) demande une approche IT/OT spécifique : segmentation réseau, IEC 62443, surveillance des flux. Nous accompagnons plusieurs industriels rhônalpins sur ces sujets.",
        },
        {
          q: "Quel budget cybersécurité pour une ETI lyonnaise ?",
          a: "Pour une ETI industrielle de 250 à 1 000 salariés, le budget cybersécurité représente en moyenne 1 à 3 % du budget IT, soit 50 à 200 k€/an. Nous bâtissons des feuilles de route adaptées à votre niveau de maturité.",
        },
        {
          q: "Proposez-vous des pentests pour les SaaS lyonnais ?",
          a: "Oui. Nous réalisons des tests d'intrusion applicatifs (web, API, mobile) pour les éditeurs SaaS lyonnais, selon la méthodologie OWASP, avec rapport et accompagnement à la remédiation.",
        },
      ],
    }}
  />
);

export default CyberSecuriteLyon;