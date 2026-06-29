import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteOccitanie = () => (
  <CityLandingPage
    data={{
      city: "Occitanie",
      citySlug: "occitanie",
      region: "Occitanie",
      postalCode: "09 / 11 / 12 / 30 / 31 / 32 / 34 / 46 / 48 / 65 / 66 / 81 / 82",
      intro: "CyberConform est votre prestataire cybersécurité Occitanie : audit NIS2, pentest, conformité RGPD et DORA, réponse aux incidents pour les entreprises de Toulouse, Montpellier, Nîmes, Perpignan, Narbonne, Albi, Béziers et toute la région.",
      localContext: "L'Occitanie est la deuxième région de France par superficie et un territoire économiquement dynamique. Toulouse est la capitale de l'aéronautique et du spatial européens (Airbus, CNES, Thales Alenia Space, ATR, Safran) et abrite un écosystème tech majeur (Labège, Aéroconstellation). Montpellier est une métropole universitaire en forte croissance avec une scène numérique active. La région compte aussi une forte agriculture et viticulture (Languedoc-Roussillon, Gaillac, Cahors), un tourisme balnéaire (Languedoc) et pyrénéen, et des activités industrielles variées. Les cyberattaques dans la région ont ciblé des hôpitaux (Cahors, Millau), des collectivités et des sous-traitants aéronautiques.",
      sectors: [
        "Aéronautique et spatial (Airbus, CNES, Thales, Safran, ATR Toulouse)",
        "Numérique et tech (Labège, Montpellier, French Tech Toulouse et Montpellier)",
        "Santé, biotech et medtech (CHU Toulouse, CHU Montpellier, laboratoires)",
        "Viticulture et agroalimentaire (Languedoc-Roussillon, Gaillac, Cahors)",
        "Tourisme, hôtellerie et camping (littoral languedocien, Pyrénées)",
        "Agriculture et coopératives agricoles",
        "Collectivités (Toulouse Métropole, Montpellier Méditerranée Métropole, Région Occitanie)",
        "PME et artisans (Albi, Béziers, Narbonne, Perpignan)",
      ],
      neighborhoods: [
        "Toulouse Métropole – Labège – Blagnac – Colomiers",
        "Montpellier Méditerranée Métropole – Lattes – Pérols",
        "Nîmes – Alès – Bagnols-sur-Cèze (30)",
        "Perpignan – Canet-en-Roussillon (66)",
        "Narbonne – Lézignan-Corbières (11)",
        "Albi – Castres – Mazamet (81)",
        "Béziers – Agde – Sète (34)",
        "Tarbes – Lourdes – Pau (65)",
      ],
      faq: [
        {
          q: "Couvrez-vous toute l'Occitanie, des Pyrénées au Gard ?",
          a: "Oui, CyberConform intervient dans l'ensemble des 13 départements occitans : de l'Ariège (09) aux Pyrénées-Orientales (66) en passant par l'Hérault, le Gard, le Tarn et la Haute-Garonne. Nos consultants se déplacent sur site partout dans la région — y compris dans les zones rurales et les villes moyennes (Millau, Figeac, Mende, Rodez). CERT d'urgence 24/7 dans toute la région.",
        },
        {
          q: "Les sous-traitants aéronautiques de Toulouse sont-ils soumis à NIS2 ?",
          a: "Oui. La filière aéronautique toulousaine est particulièrement concernée par NIS2. Les sous-traitants de rang 1 et 2 d'Airbus, ATR et Safran dans la fabrication d'équipements sont des entités importantes NIS2 (dès 50 salariés ou 10 M€ de CA). Airbus impose également ses propres exigences de sécurité (programme Safeguard, questionnaires TISAX). CyberConform accompagne les sous-traitants toulousains sur ces deux volets : conformité NIS2 et réponse aux exigences des donneurs d'ordre.",
        },
        {
          q: "Mon hôtel ou camping en Languedoc doit-il se conformer au RGPD ?",
          a: "Oui, et c'est souvent sous-estimé dans le secteur touristique. Un hôtel ou camping collecte des données personnelles via les réservations (BookingEngine, Booking.com, direct), les paiements par carte, la gestion des séjours et les programmes de fidélité. Le RGPD impose : un registre des traitements, des mentions d'information lors de la collecte, une sécurité des données de paiement (PCI DSS), et des durées de conservation limitées. CyberConform propose un audit RGPD adapté au tourisme et à l'hôtellerie.",
        },
        {
          q: "Y a-t-il des spécificités pour les entreprises du secteur viti-vinicole occitan ?",
          a: "Le secteur viti-vinicole languedocien (coopératives vinicoles, négociants, domaines exportateurs) a des enjeux RGPD liés aux fichiers clients export (marchés asiatiques, américains), à la gestion des adhérents des coopératives, et à la sécurité des systèmes de traçabilité (logiciels de cave connectés). Les coopératives vinicoles dépassant 50 salariés peuvent être entités importantes NIS2 dans l'alimentation. CyberConform propose des diagnostics adaptés à ce secteur.",
        },
        {
          q: "Intervenez-vous sur les systèmes de la DGA et de la Région Occitanie ?",
          a: "CyberConform travaille avec des prestataires qualifiés PASSI pour les audits des organismes publics et des entités sensibles (DGA, collectivités, hôpitaux). La Région Occitanie, Toulouse Métropole et Montpellier Méditerranée Métropole ont des obligations NIS2 et réglementaires spécifiques que nous maîtrisons. Pour les organismes de défense, nos consultants disposent des habilitations requises et de l'expérience sectorielle nécessaire.",
        },
      ],
    }}
  />
);

export default CyberSecuriteOccitanie;
