import ArticleLayout from "@/components/ArticleLayout";

const Nis2SecteurBancaire = () => {
  return (
    <ArticleLayout
      title="NIS2 et secteur bancaire : banques, fintech et assurances face aux obligations 2026"
      description="NIS2 dans le secteur financier : banques, néo-banques, fintech, assurances et gestionnaires d'actifs — cumul avec DORA, obligations spécifiques, délais et stratégie de conformité."
      date="28 juin 2026"
      dateISO="2026-06-28"
      readTime="12 min"
      tag="NIS2 Banque"
      slug="nis2-secteur-bancaire-fintech"
    >
      <p>
        Le secteur financier est au cœur de la directive NIS2 : les banques, assurances et fournisseurs d'infrastructures de marchés figurent parmi les entités essentielles les plus strictement régulées. Mais la grande particularité du secteur financier est qu'il est également soumis à DORA (Digital Operational Resilience Act), entré en vigueur le 17 janvier 2025. Comprendre l'articulation NIS2/DORA est indispensable pour les acteurs financiers.
      </p>

      <h2>Quels acteurs financiers sont concernés par NIS2 ?</h2>
      <p>
        NIS2 classe le secteur financier en deux sous-secteurs dans l'annexe I (secteurs hautement critiques, entités essentielles) :
      </p>
      <h3>Secteur bancaire (Annexe I)</h3>
      <ul>
        <li><strong>Établissements de crédit :</strong> toutes les banques agréées CRD IV (BNP Paribas, Crédit Agricole, Société Générale, Banque Populaire, CIC, banques régionales)</li>
        <li><strong>Établissements de paiement :</strong> PSP agréés par la BCE ou l'ACPR (PayPal France, Stripe, Adyen, néo-banques type N26, Revolut, Lydia)</li>
        <li><strong>Monnaie électronique :</strong> établissements émetteurs de monnaie électronique</li>
        <li><strong>Seuils :</strong> toutes les entités du secteur bancaire sont essentielles quelle que soit leur taille si elles sont agréées</li>
      </ul>
      <h3>Infrastructures des marchés financiers (Annexe I)</h3>
      <ul>
        <li>Plateformes de négociation (Euronext Paris, AMF-régulées)</li>
        <li>Contreparties centrales (LCH SA, chambres de compensation)</li>
        <li>Dépositaires centraux (Euroclear France)</li>
      </ul>
      <h3>Acteurs financiers en Annexe II (entités importantes)</h3>
      <ul>
        <li>Entreprises d'investissement (gérants d'actifs, conseillers en investissement AGR)</li>
        <li>Gestionnaires de fonds alternatifs (AIFMD)</li>
        <li>Assurances (mutuelles, sociétés d'assurance vie et non-vie de plus de 250 salariés)</li>
        <li>Intermédiaires d'assurance de taille moyenne</li>
      </ul>

      <h2>NIS2 et DORA : comment s'articulent-ils ?</h2>
      <p>
        DORA (Règlement UE 2022/2554) est un règlement sectoriel spécifiquement conçu pour la résilience opérationnelle numérique du secteur financier. Il est entré en application le 17 janvier 2025. La question centrale : faut-il être conforme à NIS2 ET à DORA ?
      </p>
      <p>
        La réponse est nuancée. L'article 4 de NIS2 prévoit une clause de spécificité sectorielle : si un acte juridique sectoriel de l'UE impose des obligations de sécurité et de notification au moins équivalentes à NIS2, les entités concernées peuvent être exemptées des obligations NIS2 correspondantes. DORA remplit généralement cette condition pour les entités financières qu'il couvre directement (banques, CIF, assurances régulées).
      </p>
      <p>
        En pratique : les banques systémiques et les grandes assurances françaises appliquent DORA en priorité (supervision BCE/ACPR). Les fintech et établissements de paiement plus modestes peuvent relever principalement de NIS2 si DORA ne les couvre pas directement. CyberConform vous aide à identifier votre régime applicable.
      </p>

      <h2>Les obligations DORA pour les entités financières</h2>
      <p>
        DORA impose 5 piliers de conformité avec des obligations très précises :
      </p>
      <h3>1. Gouvernance et gestion du risque ICT</h3>
      <ul>
        <li>L'organe de direction est personnellement responsable de la gestion du risque ICT (article 5)</li>
        <li>Stratégie de résilience numérique, politique de sécurité des informations, gestion des actifs ICT</li>
        <li>Formation des dirigeants à la gestion du risque numérique (au moins annuelle)</li>
        <li>Revue annuelle du cadre de gestion du risque ICT par l'organe de direction</li>
      </ul>
      <h3>2. Gestion des incidents ICT et notification</h3>
      <ul>
        <li>Classification des incidents ICT (majeurs, non majeurs) selon des critères précis (nombre de clients impactés, durée, pertes financières)</li>
        <li>Notification initiale à l'ACPR/AMF sous 4 heures pour les incidents majeurs</li>
        <li>Rapport intermédiaire sous 72 heures</li>
        <li>Rapport final sous 1 mois</li>
      </ul>
      <h3>3. Tests de résilience opérationnelle numérique</h3>
      <ul>
        <li>Tests annuels des outils et systèmes ICT (au moins un test d'intrusion annuel)</li>
        <li>Tests de pénétration basés sur la menace (TLPT — Threat-Led Penetration Testing) tous les 3 ans pour les entités significatives, en coordination avec l'autorité de supervision</li>
        <li>Scénarios de crise cyber et plans de continuité testés</li>
      </ul>
      <h3>4. Gestion du risque lié aux tiers ICT</h3>
      <ul>
        <li>Registre de toutes les dépendances ICT vers des tiers (fournisseurs cloud, éditeurs logiciels, datacenters)</li>
        <li>Clauses contractuelles obligatoires dans les contrats avec les prestataires ICT critiques</li>
        <li>Concentration risk monitoring (dépendance à un seul fournisseur cloud)</li>
        <li>Surveillance des fournisseurs ICT tiers critiques (CTPP — Critical Third-Party Providers)</li>
      </ul>
      <h3>5. Partage d'informations sur les cybermenaces</h3>
      <ul>
        <li>Participation volontaire aux dispositifs de partage d'information sur les menaces cyber (CTI)</li>
        <li>Coopération avec les autorités de supervision en cas d'incident systémique</li>
      </ul>

      <h2>Fintech et néo-banques : obligations spécifiques</h2>
      <p>
        Les fintech et néo-banques françaises (Lydia, Shine, Qonto, Pennylane, Alan) évoluent dans un cadre réglementaire dual NIS2/DORA selon leur taille et leur agrément. Les points clés pour les fintech :
      </p>
      <ul>
        <li><strong>Cloud providers :</strong> AWS, Azure et GCP sont des CTPP potentiels. Les fintech doivent gérer le concentration risk et avoir des plans de sortie (exit strategies) de leurs providers cloud.</li>
        <li><strong>Open Banking et API :</strong> Les API PSD2 (DSP2) sont des surfaces d'attaque. La sécurisation des API (OAuth 2.0, mTLS, rate limiting) est obligatoire et doit être auditée.</li>
        <li><strong>Crypto-actifs :</strong> Les prestataires de services sur crypto-actifs (PSAN/PSCA sous MiCA) ont des obligations de sécurité spécifiques et peuvent relever de NIS2.</li>
        <li><strong>Recrutement :</strong> DORA/NIS2 nécessitent un RSSI ou responsable sécurité ICT dédié — les fintech doivent anticiper ce besoin en ressources humaines.</li>
      </ul>

      <h2>Assurances : qui est concerné par NIS2/DORA ?</h2>
      <p>
        Le secteur assurance est complexe car il est partiellement couvert par DORA (assurances systémiques) et partiellement par NIS2. La règle générale :
      </p>
      <ul>
        <li><strong>Assurances de plus de 250 salariés OU 50 M€ CA :</strong> entités importantes NIS2 (Annexe II secteur financier)</li>
        <li><strong>Mutuelles et institutions de prévoyance :</strong> concernées par NIS2 si elles dépassent les seuils, avec des obligations allégées par rapport aux assurances systémiques</li>
        <li><strong>Courtiers et IOBSP :</strong> les intermédiaires d'assurance sont concernés par NIS2 s'ils dépassent les seuils PME (50 salariés / 10 M€)</li>
        <li><strong>InsurTech :</strong> les startups de l'assurance numérique doivent anticiper leur conformité dès leur phase de croissance</li>
      </ul>

      <h2>Stratégie de conformité recommandée</h2>
      <p>
        Pour un établissement financier français, CyberConform recommande la démarche suivante :
      </p>
      <ul>
        <li><strong>Étape 1 :</strong> Déterminer votre régime (DORA seul, NIS2 seul, ou les deux) selon votre agrément et votre taille</li>
        <li><strong>Étape 2 :</strong> Réaliser un gap analysis DORA/NIS2 pour identifier les écarts</li>
        <li><strong>Étape 3 :</strong> Prioriser les obligations : gouvernance ICT (responsabilité dirigeant), classification des actifs, gestion des incidents et notification</li>
        <li><strong>Étape 4 :</strong> Réaliser le TLPT ou pentest annuel exigé</li>
        <li><strong>Étape 5 :</strong> Mettre à jour les contrats avec les prestataires ICT (clauses DORA obligatoires)</li>
        <li><strong>Étape 6 :</strong> Former les dirigeants et l'organe de direction</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Le secteur financier est en première ligne de la réglementation cyber européenne, avec NIS2 et DORA comme cadres structurants. La bonne nouvelle est que ces deux textes sont complémentaires et que la conformité DORA satisfait généralement les exigences NIS2. CyberConform accompagne les acteurs financiers dans cette double conformité : audit de maturité, gap analysis, plan de remédiation, tests d'intrusion TLPT, et formation des dirigeants.
      </p>
    </ArticleLayout>
  );
};

export default Nis2SecteurBancaire;
