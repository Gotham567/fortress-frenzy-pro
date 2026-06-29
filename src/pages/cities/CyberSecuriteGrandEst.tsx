import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteGrandEst = () => (
  <CityLandingPage
    data={{
      city: "Grand Est",
      citySlug: "grand-est",
      region: "Grand Est",
      postalCode: "08 / 10 / 51 / 52 / 54 / 55 / 57 / 67 / 68 / 88",
      intro: "CyberConform est votre prestataire cybersécurité Grand Est : audit NIS2, pentest, conformité RGPD, réponse aux incidents pour les entreprises de Strasbourg, Metz, Nancy, Mulhouse, Colmar, Reims, Troyes, Épinal et toute la région.",
      localContext: "Le Grand Est est une région frontalière avec l'Allemagne, la Belgique, le Luxembourg et la Suisse, ce qui crée des enjeux cybersécurité transfrontaliers uniques. Strasbourg accueille des institutions européennes (Parlement européen, Conseil de l'Europe) et est un hub de la fintech alsacienne. Metz et Nancy ont une tradition industrielle (sidérurgie, plasturgie, chimie) en reconversion numérique. La région compte de nombreuses entreprises allemandes implantées (flux de données transfrontaliers, conformité RGPD et DSGVO simultanée) et une forte filière automobile (Stellantis Mulhouse, Smart). Les relations commerciales frontalières font du Grand Est une région très exposée aux cybermenaces d'Europe de l'Est.",
      sectors: [
        "Institutions européennes et organisations internationales (Strasbourg)",
        "Automobile et équipementiers (Stellantis Mulhouse, Smart, sous-traitants)",
        "Chimie et pharmaceutique (Alsace, Colmar, Mulhouse)",
        "Sidérurgie et métallurgie (Metz, Thionville, Hayange)",
        "Agroalimentaire et brasserie (Kronenbourg, choucroute, foie gras)",
        "Tourisme (Route des Vins, Strasbourg marchés de Noël, Vosges)",
        "Banque et finance alsacienne (Strasbourg, Mulhouse)",
        "PME industrielles transfrontalières (franco-allemandes, franco-suisses)",
      ],
      neighborhoods: [
        "Eurométropole de Strasbourg – Schiltigheim – Illkirch",
        "Metz Métropole – Metz nord – Woippy",
        "Nancy – Vandoeuvre-lès-Nancy (54)",
        "Mulhouse Alsace Agglomération – Kingersheim – Illzach",
        "Reims – Épernay (51)",
        "Troyes – Sainte-Savine (10)",
        "Colmar – Munster – Sélestat (68)",
        "Thionville – Hayange – Longwy (57)",
      ],
      faq: [
        {
          q: "Les entreprises du Grand Est qui travaillent avec des partenaires allemands ont-elles des obligations cyber spécifiques ?",
          a: "Oui. Les entreprises franco-allemandes doivent gérer une double conformité : RGPD (France/UE) et DSGVO (l'équivalent allemand — même règlement, mais contrôle par le BfDI ou les autorités régionales allemandes). Les transferts de données personnelles entre la France et l'Allemagne sont intra-UE et donc libres, mais doivent être documentés dans le registre des traitements. NIS2 s'applique de façon harmonisée dans les deux pays. CyberConform accompagne les entreprises transfrontalières sur ces enjeux.",
        },
        {
          q: "Le Parlement européen et les institutions de Strasbourg ont-ils des règles cyber spéciales ?",
          a: "Les institutions de l'UE sont soumises à leurs propres règlements cyber (règlement EU 2018/1725 pour les données personnelles, politique de cybersécurité des institutions UE). Les fournisseurs et prestataires des institutions européennes à Strasbourg peuvent être soumis à des exigences contractuelles strictes. CyberConform accompagne les prestataires d'organisations européennes dans la mise en conformité de leurs systèmes d'information.",
        },
        {
          q: "L'industrie automobile de Mulhouse (Stellantis) est-elle concernée par NIS2 ?",
          a: "Oui. L'usine Stellantis de Mulhouse et ses équipementiers sont concernés par NIS2 dans la catégorie 'fabrication de véhicules automobiles'. Stellantis impose également à ses fournisseurs des exigences TISAX (Trusted Information Security Assessment Exchange), le standard d'échange de données sécurisées de l'industrie automobile. CyberConform accompagne les sous-traitants alsaciens dans la conformité NIS2 et la réponse aux questionnaires TISAX.",
        },
        {
          q: "Couvrez-vous les entreprises luxembourgeoises et belges du Grand Est ?",
          a: "CyberConform intervient également au Luxembourg et en Belgique. La région Grand Est est étroitement liée aux marchés luxembourgeois (nombreux travailleurs frontaliers, entreprises basées au Luxembourg) et belge (Ardennes). Nous connaissons les spécificités de la réglementation luxembourgeoise (CNPD, NIS2 transposition luxembourgeoise) et proposons des audits transfrontaliers. Nos experts interviennent à Metz, Thionville, Longwy et dans toute la zone frontalière.",
        },
        {
          q: "Quels sont les délais pour un audit cybersécurité à Strasbourg ou Metz ?",
          a: "Pour une mission d'audit planifiée dans le Grand Est (Strasbourg, Metz, Nancy, Mulhouse), nous pouvons démarrer sous 5 à 10 jours ouvrés. Pour les incidents cyber urgents (ransomware, intrusion), notre CERT intervient sous 4 heures. CyberConform dispose de consultants basés dans la région Grand Est, ce qui garantit des délais d'intervention courts et une connaissance du tissu économique local.",
        },
      ],
    }}
  />
);

export default CyberSecuriteGrandEst;
