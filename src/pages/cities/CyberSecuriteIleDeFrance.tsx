import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteIleDeFrance = () => (
  <CityLandingPage
    data={{
      city: "Île-de-France",
      citySlug: "ile-de-france",
      region: "Île-de-France",
      postalCode: "75 / 77 / 78 / 91 / 92 / 93 / 94 / 95",
      intro: "CyberConform est votre prestataire cybersécurité Île-de-France : audit NIS2, pentest PASSI, conformité RGPD et DORA, réponse aux incidents cyber 24/7 pour les entreprises franciliennes — startups, ETI, groupes du CAC40, cabinets d'avocats, fintechs et collectivités de la région capitale.",
      localContext: "L'Île-de-France concentre 30 % du PIB français et la quasi-totalité des sièges sociaux des grands groupes français. Cette densité économique en fait la région la plus ciblée par les cyberattaques sophistiquées : groupes APT ciblant les industriels de défense (Safran, Thales, Airbus Defence), ransomwares ciblant les PME de la Seine-Saint-Denis et du Val-de-Marne, phishing ciblant les fintechs de Paris et de La Défense, attaques sur les hôpitaux (AP-HP, GHU Paris). La région compte aussi l'écosystème startup le plus dense d'Europe (Station F, Schoolab, 50 Partners) avec des enjeux forts de sécurité pre-levée de fonds. CyberConform intervient dans toute l'Île-de-France avec des délais d'intervention parmi les plus courts du marché.",
      sectors: [
        "Finance, banque et assurance (La Défense, Paris 8e/9e)",
        "Fintechs et néobanques (Paris, Neuilly-sur-Seine)",
        "Industrie de défense et aérospatiale (Safran, Thales, Dassault)",
        "Tech et startups (Station F, Station Tech, French Tech Paris)",
        "Santé et biotech (AP-HP, Institut Pasteur, start-ups medtech)",
        "Médias, édition et divertissement",
        "Cabinets d'avocats et professions réglementées",
        "Administrations, ministères et collectivités",
      ],
      neighborhoods: [
        "Paris intramuros (arrondissements 1-20)",
        "La Défense – Nanterre – Puteaux (92)",
        "Boulogne-Billancourt – Issy-les-Moulineaux (92)",
        "Saint-Denis – Aubervilliers – Bobigny (93)",
        "Créteil – Vitry-sur-Seine – Ivry (94)",
        "Versailles – Saint-Quentin-en-Yvelines (78)",
        "Marne-la-Vallée – Melun – Sénart (77/91)",
        "Cergy-Pontoise – Argenteuil – Val-d'Oise (95)",
      ],
      faq: [
        {
          q: "Intervenez-vous dans tout le Grand Paris et la grande couronne ?",
          a: "Oui, CyberConform intervient dans toute la région Île-de-France : Paris intramuros, petite couronne (92, 93, 94) et grande couronne (77, 78, 91, 95). Pour les missions d'audit terrain (infrastructure physique, réseaux OT), nos consultants se déplacent sur site. Pour les missions de conseil et de conformité, nous intervenons également à distance. Notre CERT est disponible 24/7 pour les incidents cyber urgents (ransomware, intrusion) dans toute la région.",
        },
        {
          q: "Mon entreprise francilienne est soumise à NIS2 — que dois-je faire maintenant ?",
          a: "NIS2 concerne de nombreuses entreprises franciliennes : fintechs soumises à DORA, sous-traitants de la défense, éditeurs de logiciels critiques, acteurs du cloud et des télécoms, hôpitaux et cliniques. La première étape est un diagnostic d'éligibilité (gratuit chez CyberConform en 30 minutes), suivi de l'enregistrement sur MonEspaceNIS2 auprès de l'ANSSI. CyberConform accompagne les entreprises franciliennes de bout en bout : diagnostic, gap analysis article 21, plan de conformité et suivi annuel.",
        },
        {
          q: "Travaillez-vous avec les startups de la French Tech Paris (pre-seed, seed) ?",
          a: "Oui, c'est un de nos profils clients fréquents. Les startups ont des besoins spécifiques : sécuriser une architecture cloud AWS/GCP dès le départ, préparer la due diligence sécurité des VC (qui vérifient systématiquement la sécurité avant d'investir en série A), obtenir une certification SOC 2 ou ISO 27001 exigée par les clients enterprise. CyberConform propose des packages startup adaptés aux budgets de pre-seed et seed, avec des missions modulables selon l'avancement.",
        },
        {
          q: "Quels sont les délais d'intervention pour un audit en Île-de-France ?",
          a: "Pour les audits planifiés, nous pouvons démarrer sous 3 à 7 jours ouvrés. Pour les incidents cyber urgents (ransomware, intrusion, compromission de données), notre CERT intervient sous 2 heures en Île-de-France, en présentiel ou à distance selon la situation. Nous disposons d'une équipe dédiée sur Paris et la petite couronne pour les interventions urgentes.",
        },
        {
          q: "Proposez-vous des audits PASSI certifiés pour les organismes publics franciliens ?",
          a: "CyberConform travaille avec des experts qualifiés PASSI (Prestataire d'Audit de Sécurité des Systèmes d'Information labellisé ANSSI) pour les missions nécessitant cette qualification : audits de ministères, de collectivités franciliennes (Conseil régional, mairies), d'établissements de santé et d'opérateurs d'importance vitale. Nos rapports respectent les standards ANSSI et sont exploitables pour les procédures de mise en conformité réglementaire.",
        },
      ],
    }}
  />
);

export default CyberSecuriteIleDeFrance;
