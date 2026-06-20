import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteNice = () => (
  <CityLandingPage
    data={{
      city: "Nice",
      citySlug: "nice",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "06000",
      intro: "CyberConform accompagne les entreprises nicois et les PME de la Cote d'Azur dans leur securite informatique et conformite NIS2. Audit, pentest et RSSI externalise pour Nice, Cannes, Antibes, Monaco et toute la region PACA.",
      localContext: "Nice et la Cote d'Azur concentrent un tissu economique unique : tourisme de luxe, tech (Sophia Antipolis), sante, finance offshore et jeux video. La proximite de Monaco et des entreprises internationales implantees dans la region cree des enjeux de cybersecurite specifiques, notamment sur la protection des donnees financieres et personnelles de clients internationaux.",
      sectors: [
        "Tech et numerique (Sophia Antipolis - 2 300 entreprises)",
        "Tourisme, hotellerie et luxe",
        "Sante et biotechnologies (CHU de Nice)",
        "Finance et gestion de patrimoine",
        "Jeux video et entertainment",
        "Commerce international et e-commerce",
      ],
      neighborhoods: [
        "Sophia Antipolis (Valbonne, Mougins)",
        "Nice Centre et Promenade des Anglais",
        "Cannes, Antibes, Grasse",
        "Monaco (Principaute)",
        "Toulon, Marseille (axe PACA)",
        "Toute la region Cote d'Azur",
      ],
      faq: [
        {
          q: "Les entreprises de Sophia Antipolis sont-elles soumises a NIS2 ?",
          a: "Sophia Antipolis abrite des entreprises tech, telecom, sante et numerique qui sont directement concernees par NIS2. Les editeurs de logiciels, les fournisseurs cloud et les societes de telecom doivent se mettre en conformite rapidement.",
        },
        {
          q: "Comment proteger les donnees de clients internationaux sur la Cote d'Azur ?",
          a: "La protection des donnees internationales requiert une conformite RGPD rigoureuse et potentiellement des conformites supplementaires (CCPA americain, PDPA asiatique). Nous realisons des audits RGPD et aidons a mettre en place les mecanismes de transfert de donnees adequats.",
        },
        {
          q: "Intervenez-vous a Monaco et sur toute la Cote d'Azur ?",
          a: "Oui. Nous intervenons a Nice, Cannes, Antibes, Sophia Antipolis, Monaco, Toulon et dans toute la region PACA. Certaines missions peuvent etre realisees entierement a distance.",
        },
        {
          q: "Quelles sont les menaces cyber specifiques au secteur du tourisme de luxe ?",
          a: "Le tourisme de luxe est expose aux escroqueries BEC (compromission des emails professionnels), aux attaques sur les systemes de reservation et au vol de donnees de clients VIP. Un audit specifique hotellerie-luxe permet d'identifier et corriger ces vulnerabilites.",
        },
      ],
    }}
  />
);

export default CyberSecuriteNice;
