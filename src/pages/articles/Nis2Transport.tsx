import ArticleLayout from "@/components/ArticleLayout";

const Nis2Transport = () => {
  return (
    <ArticleLayout
      title="NIS2 et secteur transport-logistique : entités concernées et obligations 2026"
      description="Guide NIS2 pour le secteur transport et logistique : entités concernées (ferroviaire, aérien, routier, maritime, logistique), obligations de cybersécurité, sanctions et calendrier de mise en conformité."
      date="8 juin 2026"
      dateISO="2026-06-08"
      readTime="13 min"
      tag="NIS2 Transport"
      slug="nis2-secteur-transport-logistique-obligations"
    >
      <p>
        La directive NIS2, transposée en droit français, classe le secteur des transports parmi
        les <strong>secteurs hautement critiques</strong> (Annexe I). Les opérateurs de transport
        et de logistique sont en première ligne des nouvelles obligations de cybersécurité —
        avec des sanctions pouvant atteindre <strong>10 millions d'euros ou 2 % du chiffre
        d'affaires mondial</strong> pour les entités essentielles.
      </p>

      <h2>Qui est concerné dans le secteur transport ?</h2>
      <p>
        L'Annexe I de la directive NIS2 liste les sous-secteurs du transport concernés :
      </p>

      <h3>Transport aérien</h3>
      <ul>
        <li>Transporteurs aériens (compagnies aériennes) utilisés à des fins commerciales.</li>
        <li>Gestionnaires d'aéroports (aéroports ouverts à la circulation aérienne publique).</li>
        <li>Organismes de gestion du trafic aérien fournissant des services de contrôle du trafic aérien (ATC).</li>
      </ul>

      <h3>Transport ferroviaire</h3>
      <ul>
        <li>Gestionnaires d'infrastructure ferroviaire (SNCF Réseau, gestionnaires régionaux).</li>
        <li>Entreprises ferroviaires (SNCF Voyageurs, opérateurs de fret).</li>
        <li>Opérateurs de service d'entretien.</li>
      </ul>

      <h3>Transport par voie navigable</h3>
      <ul>
        <li>Compagnies de transport de passagers et de marchandises par voies maritime et fluviale.</li>
        <li>Opérateurs portuaires et autorités portuaires gérant des ports au-delà d'un certain seuil de trafic.</li>
        <li>Opérateurs de systèmes de gestion du trafic maritime (VTS).</li>
      </ul>

      <h3>Transport routier</h3>
      <ul>
        <li>Autorités routières responsables du contrôle de la gestion du trafic.</li>
        <li>Opérateurs de systèmes de transport intelligents (ITS).</li>
      </ul>

      <h3>Logistique</h3>
      <p>
        Les opérateurs logistiques (entrepôts, plateformes de distribution, messagerie) ne figurent pas
        directement dans l'Annexe I mais peuvent être concernés s'ils sont fournisseurs critiques d'entités
        NIS2, ou si leur propre État membre les a inclus dans son périmètre national étendu.
        En France, le décret de transposition peut élargir le périmètre aux opérateurs logistiques critiques.
      </p>

      <h2>Critères de taille : entité essentielle vs importante</h2>
      <ul>
        <li><strong>Entité essentielle</strong> : grande entreprise (≥250 salariés OU CA ≥ 50 M€ ET bilan ≥ 43 M€) dans les secteurs hautement critiques (transport aérien, ferroviaire, maritime).</li>
        <li><strong>Entité importante</strong> : moyenne entreprise (≥50 salariés OU CA ≥ 10 M€) dans les mêmes secteurs, ou grande entreprise dans les secteurs critiques (routier, logistique).</li>
        <li><strong>Exception taille</strong> : même les PME peuvent être qualifiées d'entités essentielles si elles sont le seul fournisseur d'un service critique ou si une perturbation de leur activité aurait un impact transfrontalier significatif.</li>
      </ul>

      <h2>Obligations spécifiques pour les opérateurs transport NIS2</h2>

      <h3>Mesures de gestion des risques (art. 21)</h3>
      <p>
        Les entités transport doivent mettre en œuvre des mesures techniques, opérationnelles et organisationnelles proportionnées, incluant :
      </p>
      <ul>
        <li><strong>Politique de sécurité des réseaux et SIC</strong> : PSSI approuvée par la direction, révisée annuellement.</li>
        <li><strong>Gestion des incidents</strong> : processus de détection, réponse et notification. CSIRT sectoriel transport à notifier.</li>
        <li><strong>Continuité d'activité</strong> : PCA/PRA avec tests réguliers, gestion de crise, sauvegardes testées.</li>
        <li><strong>Sécurité de la chaîne d'approvisionnement</strong> : évaluation des fournisseurs de logiciels embarqués, équipementiers, prestataires IT/OT.</li>
        <li><strong>Sécurité dans le développement</strong> : si systèmes développés en interne (GTC, billetterie, gestion des flux).</li>
        <li><strong>Gestion des vulnérabilités</strong> : scan régulier, patch management avec SLA définis.</li>
        <li><strong>Cryptographie et chiffrement</strong> : communications chiffrées, protection des données en transit et au repos.</li>
        <li><strong>Ressources humaines</strong> : habilitation du personnel, sensibilisation, accès minimaux.</li>
        <li><strong>Authentification multifacteur</strong> : MFA obligatoire sur tous les accès distants et systèmes critiques.</li>
      </ul>

      <h3>Enjeux spécifiques IT/OT dans le transport</h3>
      <p>
        Le secteur transport présente une convergence IT/OT particulièrement critique :
      </p>
      <ul>
        <li><strong>Systèmes embarqués</strong> : avionique, systèmes de signalisation ferroviaire (ERTMS), systèmes de navigation maritime — connectivité croissante, durées de vie longues, difficultés de patch.</li>
        <li><strong>SCADA et automates</strong> : contrôle des aiguillages, systèmes d'éclairage d'aéroports, gestion des portes d'embarquement — faible sécurité native.</li>
        <li><strong>Systèmes de gestion du trafic</strong> : ATM (aérien), ERTMS (ferroviaire), VTS (maritime) — cibles de haute valeur pour les attaquants étatiques.</li>
        <li><strong>Applications passagers</strong> : billetterie, enregistrement en ligne, applications mobiles — données personnelles sensibles (mouvements, habitudes de voyage).</li>
      </ul>

      <h2>Obligations de notification des incidents</h2>
      <p>
        En cas d'incident significatif affectant les services essentiels :
      </p>
      <ul>
        <li><strong>Alerte préliminaire</strong> : dans les <strong>24 heures</strong> à l'autorité compétente (ANSSI en France) et au CSIRT national.</li>
        <li><strong>Notification d'incident</strong> : dans les <strong>72 heures</strong> — confirmation de l'incident, évaluation préliminaire, gravité et impact.</li>
        <li><strong>Rapport intermédiaire</strong> : sur demande de l'autorité compétente.</li>
        <li><strong>Rapport final</strong> : dans le <strong>mois suivant la notification</strong> — description complète, cause profonde, mesures de remédiation, impact transfrontalier.</li>
      </ul>
      <p>
        Un incident est "significatif" s'il a causé ou pourrait causer une perturbation opérationnelle grave,
        des pertes financières importantes pour l'entité, ou des dommages matériels ou immatériels substantiels
        pour d'autres personnes.
      </p>

      <h2>Calendrier et sanctions</h2>
      <ul>
        <li><strong>Octobre 2024</strong> : date limite de transposition de NIS2 en droit national dans les États membres.</li>
        <li><strong>2025-2026</strong> : montée en charge des contrôles de l'ANSSI, premiers enregistrements obligatoires des entités.</li>
        <li><strong>Sanctions entités essentielles</strong> : jusqu'à 10 M€ ou 2 % du CA mondial total annuel.</li>
        <li><strong>Sanctions entités importantes</strong> : jusqu'à 7 M€ ou 1,4 % du CA mondial total annuel.</li>
        <li><strong>Responsabilité des dirigeants</strong> : possibilité de suspension temporaire des dirigeants en cas de manquements graves répétés.</li>
      </ul>

      <h2>Plan d'action pour les opérateurs transport</h2>
      <ol>
        <li>Vérifier si votre entité est concernée par NIS2 et déterminer sa classification (essentielle/importante).</li>
        <li>S'enregistrer auprès de l'ANSSI sur la plateforme de déclaration NIS2.</li>
        <li>Réaliser un gap analysis par rapport aux exigences de l'article 21 de NIS2.</li>
        <li>Cartographier votre SI, vos systèmes OT embarqués et vos fournisseurs critiques.</li>
        <li>Élaborer ou mettre à jour votre PSSI, PCA et processus de gestion des incidents.</li>
        <li>Mettre en place ou renforcer la détection (SOC, SIEM) pour satisfaire aux exigences de notification.</li>
        <li>Former les équipes et la direction aux obligations NIS2 et aux réflexes en cas d'incident.</li>
      </ol>
    </ArticleLayout>
  );
};

export default Nis2Transport;
