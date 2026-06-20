import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteNice = () => (
  <CityLandingPage
    data={{
      city: "Nice",
      citySlug: "nice",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "06000",
      intro: "CyberConform accompagne les entreprises niçoises et les PME de la Côte d'Azur dans leur sécurité informatique et conformité NIS2. Audit, pentest et RSSI externalisé pour Nice, Cannes, Antibes, Monaco et toute la région PACA.",
      localContext: "Nice et la Côte d'Azur concentrent un tissu économique unique : tourisme de luxe, tech (Sophia Antipolis), santé, finance et jeux vidéo. La proximité de Monaco et des entreprises internationales implantées dans la région crée des enjeux de cybersécurité spécifiques, notamment sur la protection des données financières et personnelles de clients internationaux.",
      sectors: [
        "Tech et numérique (Sophia Antipolis — 2 300 entreprises)",
        "Tourisme, hôtellerie et luxe",
        "Santé et biotechnologies (CHU de Nice)",
        "Finance et gestion de patrimoine",
        "Jeux vidéo et entertainment",
        "Commerce international et e-commerce",
      ],
      neighborhoods: [
        "Sophia Antipolis (Valbonne, Mougins)",
        "Nice Centre et Promenade des Anglais",
        "Cannes, Antibes, Grasse",
        "Monaco (Principauté)",
        "Toulon, Marseille (axe PACA)",
        "Toute la région Côte d'Azur",
      ],
      faq: [
        {
          q: "Les entreprises de Sophia Antipolis sont-elles soumises à NIS2 ?",
          a: "Sophia Antipolis abrite des entreprises tech, télécom, santé et numérique qui sont directement concernées par NIS2. Les éditeurs de logiciels, les fournisseurs cloud et les sociétés de télécom doivent se mettre en conformité rapidement.",
        },
        {
          q: "Comment protéger les données de clients internationaux sur la Côte d'Azur ?",
          a: "La protection des données internationales requiert une conformité RGPD rigoureuse et potentiellement des conformités supplémentaires (CCPA américain, PDPA asiatique). Nous réalisons des audits RGPD et aidons à mettre en place les mécanismes de transfert de données adéquats.",
        },
        {
          q: "Intervenez-vous à Monaco et sur toute la Côte d'Azur ?",
          a: "Oui. Nous intervenons à Nice, Cannes, Antibes, Sophia Antipolis, Monaco, Toulon et dans toute la région PACA. Certaines missions peuvent être réalisées entièrement à distance.",
        },
        {
          q: "Quelles sont les menaces cyber spécifiques au secteur du tourisme de luxe ?",
          a: "Le tourisme de luxe est exposé aux escroqueries BEC (compromission des emails professionnels), aux attaques sur les systèmes de réservation et au vol de données de clients VIP. Un audit spécifique hôtellerie-luxe permet d'identifier et corriger ces vulnérabilités.",
        },
      ],
    }}
  />
);

export default CyberSecuriteNice;
