import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteBourgogneFrancheComte = () => (
  <CityLandingPage
    data={{
      city: "Bourgogne-Franche-Comté",
      citySlug: "bourgogne-franche-comte",
      region: "Bourgogne-Franche-Comté",
      postalCode: "21 / 25 / 39 / 58 / 70 / 71 / 89 / 90",
      intro: "CyberConform est votre prestataire cybersécurité Bourgogne-Franche-Comté : audit NIS2, pentest, conformité RGPD et réponse aux incidents pour les entreprises de Dijon, Besançon, Belfort, Auxerre, Chalon-sur-Saône, Mâcon et toute la région.",
      localContext: "Bourgogne-Franche-Comté est une région industrielle avec des secteurs d'excellence reconnus mondialement. La filière viticole bourguignonne (Bourgogne, Chablis, Mâconnais) représente un patrimoine économique exceptionnel avec des enjeux de traçabilité et de protection de la réputation. L'horlogerie et la micromécanique comtoises (Besançon, Morbier) sont de renommée mondiale. La région accueille aussi des industries de pointe : Alstom à Belfort (TGV), Peugeot-Citroën à Sochaux (Stellantis), General Electric à Belfort (turbines). Le Territoire de Belfort (90) est le plus petit département français avec une densité industrielle exceptionnelle. La cybersécurité des systèmes industriels est un enjeu majeur pour cette région.",
      sectors: [
        "Automobile (Stellantis Sochaux, PSA, équipementiers 25/70)",
        "Ferroviaire et énergie (Alstom Belfort, General Electric turbines)",
        "Viticulture et négoce de vins (Bourgogne, Chablis, Mâcon, Côte de Nuits)",
        "Horlogerie et micromécanique (Besançon, Morteau, filière chrono)",
        "Agroalimentaire (Bresse, fromages AOP, moutarde Dijon)",
        "Santé (CHU Dijon Bourgogne, CHRU Besançon)",
        "Nucléaire et énergie (centrale nucléaire de Belleville, Bugey)",
        "Collectivités (Dijon Métropole, Grand Besançon, Région BFC)",
      ],
      neighborhoods: [
        "Dijon Métropole – Chenôve – Quetigny (21)",
        "Grand Besançon Métropole – Pontarlier (25)",
        "Belfort – Montbéliard – Héricourt (Territoire de Belfort / 25)",
        "Auxerre – Avallon – Joigny (89)",
        "Chalon-sur-Saône – Mâcon – Le Creusot (71)",
        "Nevers – Cosne-sur-Loire (58)",
        "Vesoul – Lure – Gray (70)",
        "Lons-le-Saunier – Dole – Saint-Claude (39)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 8 départements de Bourgogne-Franche-Comté ?",
          a: "Oui, CyberConform intervient dans les huit départements : Côte-d'Or (21), Doubs (25), Jura (39), Nièvre (58), Haute-Saône (70), Saône-et-Loire (71), Yonne (89) et Territoire de Belfort (90). Nos consultants se déplacent sur site partout dans la région. CERT d'urgence 24/7. Délai d'intervention pour audits planifiés : 5-10 jours ouvrés.",
        },
        {
          q: "Stellantis Sochaux et ses sous-traitants sont-ils soumis à NIS2 ?",
          a: "Oui. Stellantis Sochaux (fabrication de véhicules automobiles) est une entité importante NIS2. Ses sous-traitants dépassant 50 salariés / 10 M€ CA dans la fabrication automobile le sont aussi. Stellantis impose également TISAX à ses fournisseurs (Trusted Information Security Assessment Exchange), le standard de sécurité de l'industrie automobile. CyberConform accompagne les équipementiers et sous-traitants du bassin de Montbéliard et Belfort dans ces conformités.",
        },
        {
          q: "Les domaines viticoles de Bourgogne ont-ils des obligations cyber ?",
          a: "Les domaines viticoles de Bourgogne qui exportent (Côte de Nuits, Côte de Beaune, Chablis) traitent des données clients internationaux (États-Unis, Japon, Chine) et sont pleinement soumis au RGPD. Les grandes maisons de négoce bourguignonnes (Louis Jadot, Bouchard, Drouhin) dépassent souvent les seuils NIS2. Les enjeux cyber incluent aussi la protection de la réputation (une cyberattaque révélée peut faire chuter la valeur d'un domaine) et la traçabilité numérique des millésimes.",
        },
        {
          q: "Avez-vous de l'expérience avec le secteur horloger comtois ?",
          a: "L'horlogerie et la micromécanique comtoises (Besançon, Morteau, Pontarlier) ont des enjeux cyber spécifiques : protection des plans de fabrication (propriété intellectuelle), sécurisation des machines-outils connectées (CNC, centres d'usinage), et conformité NIS2 pour les fabricants d'équipements. CyberConform accompagne les entreprises de la Technopole de Besançon et du bassin horloger dans leurs audits de sécurité.",
        },
        {
          q: "Quels financements disponibles pour un audit cyber en BFC ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Bourgogne-Franche-Comté via ses fonds FEDER et son programme BFC Numérique. Les CCI de BFC (CCI de Côte-d'Or, CCI du Doubs, CCI de Saône-et-Loire). BPI France Bourgogne — prêts numériques. Des clusters industriels comme la Bourgogne Franche-Comté Alliance (BFCA) et le Pôle Véhicule du Futur accompagnent aussi leurs membres sur la cybersécurité.",
        },
      ],
    }}
  />
);

export default CyberSecuriteBourgogneFrancheComte;
