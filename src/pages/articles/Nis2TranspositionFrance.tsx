import ArticleLayout from "@/components/ArticleLayout";

const Nis2TranspositionFrance = () => {
  return (
    <ArticleLayout
      title="Transposition de NIS2 en France : calendrier, textes et obligations effectives"
      description="État de la transposition française de la directive NIS2 : LOPMI, décrets d'application ANSSI, calendrier d'entrée en vigueur, enregistrement des entités et premières obligations concrètes."
      date="28 juin 2026"
      dateISO="2026-06-28"
      readTime="11 min"
      tag="NIS2 France"
      slug="transposition-nis2-france-calendrier-obligations"
    >
      <p>
        La directive NIS2 a été adoptée par le Parlement européen en novembre 2022 et les États membres devaient la transposer avant le 17 octobre 2024. La France a finalement voté la loi de transposition en 2025, mais le calendrier réglementaire complet s'étale jusqu'en 2026-2027 pour les décrets d'application sectoriels. Voici l'état actuel de la transposition française et ce qui vous concerne concrètement.
      </p>

      <h2>Le cadre législatif français de NIS2</h2>
      <p>
        La France a choisi de transposer NIS2 via une loi spécifique modifiant le Code de la sécurité intérieure et plusieurs textes sectoriels. La loi transpose les définitions (entités essentielles, entités importantes, secteurs concernés), les obligations de sécurité et de notification, les pouvoirs de l'ANSSI comme autorité nationale compétente, et le régime de sanctions.
      </p>
      <p>
        L'ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information) est désignée comme l'autorité nationale compétente principale pour NIS2 en France. Elle est chargée de l'identification des entités, de la supervision et des contrôles, de la réception des notifications d'incidents et de la coopération avec ses homologues européens (ENISA, réseau CyCLONe).
      </p>

      <h2>Le calendrier d'application : ce qui est effectif en 2026</h2>

      <h3>Phase 1 — Identification des entités (effectif)</h3>
      <p>
        La première étape est l'identification des entités essentielles et importantes. Les entreprises des secteurs concernés doivent s'enregistrer auprès de l'ANSSI via le portail dédié MonEspaceNIS2. L'enregistrement déclenche l'accès aux ressources ANSSI et marque le début des obligations.
      </p>
      <p>
        L'ANSSI peut également identifier d'office des entités — notamment les opérateurs de taille significative dans les secteurs critiques — sans attente de leur auto-déclaration.
      </p>

      <h3>Phase 2 — Obligations minimales immédiates</h3>
      <p>
        Dès l'identification, les entités doivent respecter des obligations minimales qui s'appliquent sans délai supplémentaire :
      </p>
      <ul>
        <li>Désignation d'un point de contact NIS2 auprès de l'ANSSI (nom, email, téléphone 24/7 pour les entités essentielles)</li>
        <li>Mise en place d'une procédure de notification des incidents (même si les systèmes complets de détection ne sont pas encore en place)</li>
        <li>Engagement de la direction sur la politique de cybersécurité</li>
      </ul>

      <h3>Phase 3 — Conformité complète à l'article 21 (calendrier progressif)</h3>
      <p>
        La conformité complète aux 10 mesures de l'article 21 (politiques de risques, gestion des incidents, continuité, supply chain, sécurité des acquisitions, formation, chiffrement, RH, MFA, etc.) est attendue selon un calendrier progressif négocié avec l'ANSSI. En pratique, l'ANSSI a communiqué des délais indicatifs :
      </p>
      <ul>
        <li><strong>Entités essentielles :</strong> Conformité attendue dans les 18-24 mois suivant l'identification</li>
        <li><strong>Entités importantes :</strong> Conformité attendue dans les 24-36 mois suivant l'identification</li>
      </ul>
      <p>
        Ces délais sont indicatifs et l'ANSSI peut exercer des contrôles à tout moment. Les entités ayant déjà subi un incident grave s'exposeront à des contrôles prioritaires.
      </p>

      <h2>Les secteurs et seuils de la transposition française</h2>
      <p>
        La France a transposé fidèlement les annexes I et II de la directive NIS2. Les seuils de taille (50 salariés OU 10 M€ de CA pour les entités importantes ; 250 salariés OU 50 M€ de CA et 43 M€ de bilan pour les entités essentielles) s'appliquent avec quelques nuances sectorielles :
      </p>
      <ul>
        <li><strong>Secteurs "hautement critiques" (Annexe I) :</strong> Énergie, transport, banque, infrastructure des marchés financiers, santé, eau potable, eaux usées, infrastructure numérique, gestion des services TIC B2B, espace, administration publique. Pour certains sous-secteurs (énergie, santé), des entités en dessous des seuils de taille peuvent être identifiées si elles sont jugées critiques.</li>
        <li><strong>Secteurs "critiques" (Annexe II) :</strong> Services postaux, gestion des déchets, fabrication chimique, alimentation, fabrication industrielle (dispositifs médicaux, électronique, machines, automobile, transports), fournisseurs numériques (places de marché, moteurs de recherche, réseaux sociaux), recherche.</li>
        <li><strong>Entités critiques de facto :</strong> L'ANSSI peut identifier toute entité comme "essentielle" si une perturbation de ses services aurait un impact significatif sur l'économie ou la société française, indépendamment de sa taille.</li>
      </ul>

      <h2>Les 10 obligations de l'article 21 : ce que vous devez mettre en place</h2>
      <p>
        L'article 21 de NIS2 (transposé dans la loi française) impose 10 catégories de mesures de sécurité. Ces mesures sont proportionnées à la nature, la taille et les risques de chaque entité :
      </p>
      <ol>
        <li><strong>Politiques d'analyse et de gestion des risques :</strong> PSSI formalisée, analyse des risques documentée (EBIOS RM, ISO 27005), revue annuelle</li>
        <li><strong>Gestion des incidents :</strong> Procédure de détection, qualification, escalade et notification ANSSI. SOC ou service de surveillance adapté.</li>
        <li><strong>Continuité des activités :</strong> PCA/PRA documenté et testé, sauvegardes vérifiées, gestion de crise</li>
        <li><strong>Sécurité de la chaîne d'approvisionnement :</strong> Évaluation des risques fournisseurs TIC, clauses contractuelles, TPRM</li>
        <li><strong>Sécurité des acquisitions et du développement :</strong> Sécurité by design, tests de sécurité, gestion des vulnérabilités</li>
        <li><strong>Politiques d'évaluation de l'efficacité :</strong> Audits réguliers, KPI de sécurité, revues de direction</li>
        <li><strong>Formations et sensibilisation :</strong> Formation de la direction, sensibilisation des collaborateurs, formation continue des équipes cyber</li>
        <li><strong>Hygiène informatique et chiffrement :</strong> Chiffrement des données sensibles, MFA, gestion des accès, patches</li>
        <li><strong>Sécurité des ressources humaines :</strong> Vérification des antécédents, processus d'onboarding/offboarding, gestion des accès des sous-traitants</li>
        <li><strong>Authentification MFA et communications sécurisées :</strong> MFA généralisé, chiffrement des communications internes</li>
      </ol>

      <h2>Les obligations de notification : 3 étapes en 72 heures</h2>
      <p>
        L'article 23 de NIS2 (transposé en France) impose un processus de notification en 3 étapes pour les incidents ayant un impact significatif :
      </p>
      <ul>
        <li><strong>Alerte précoce — 24 heures :</strong> Notifier l'ANSSI dès la détection d'un incident significatif. Cette notification peut être succincte (nature de l'incident, impact préliminaire estimé). L'objectif est d'alerter rapidement pour permettre une assistance si nécessaire.</li>
        <li><strong>Notification d'incident — 72 heures :</strong> Notification complète incluant : description de l'incident, impact réel ou potentiel, mesures d'atténuation prises, systèmes affectés. Ce délai court à partir de la prise de connaissance de l'incident (pas de sa survenue).</li>
        <li><strong>Rapport final — 1 mois :</strong> Rapport complet sur l'incident : chronologie, cause racine identifiée, mesures correctives déployées, évaluation de l'impact définitif. Pour les incidents prolongés : rapport intermédiaire à 1 mois, rapport final à la clôture.</li>
      </ul>
      <p>
        Un incident est considéré comme "significatif" s'il a causé ou est susceptible de causer des perturbations opérationnelles graves, des pertes financières significatives, ou des préjudices matériels ou immatériels à d'autres entités ou personnes. L'ANSSI devrait publier des critères plus précis dans ses guides sectoriels.
      </p>

      <h2>Les sanctions NIS2 en France</h2>
      <p>
        La loi de transposition française prévoit des sanctions administratives proportionnées :
      </p>
      <ul>
        <li><strong>Entités essentielles :</strong> Amendes pouvant atteindre 10 000 000 € ou 2 % du chiffre d'affaires mondial annuel (le montant le plus élevé)</li>
        <li><strong>Entités importantes :</strong> Amendes pouvant atteindre 7 000 000 € ou 1,4 % du chiffre d'affaires mondial annuel</li>
        <li><strong>Responsabilité personnelle des dirigeants :</strong> NIS2 prévoit la possibilité de tenir les personnes physiques responsables (dirigeants, RSSI) en cas de négligence grave</li>
        <li><strong>Mesures conservatoires :</strong> L'ANSSI peut ordonner des mesures immédiates (mise en conformité forcée, suspension temporaire d'une certification, notification publique) en cas de risque grave</li>
      </ul>
      <p>
        En pratique, les premières sanctions françaises ne sont pas attendues avant 2026-2027. L'ANSSI privilégie dans un premier temps l'accompagnement et la mise en conformité plutôt que la sanction.
      </p>

      <h2>Plan d'action recommandé pour 2026</h2>
      <ol>
        <li><strong>Vérifier votre éligibilité NIS2 :</strong> Secteur + seuil de taille. En cas de doute, consultez l'ANSSI ou un prestataire spécialisé.</li>
        <li><strong>S'enregistrer sur MonEspaceNIS2 :</strong> Désigner un point de contact, déclarer vos activités et vos systèmes d'information essentiels.</li>
        <li><strong>Réaliser un gap analysis :</strong> Évaluer votre niveau de conformité actuel par rapport aux 10 obligations de l'article 21.</li>
        <li><strong>Prioriser les mesures à fort impact :</strong> MFA, gestion des incidents, sauvegardes testées, inventaire des actifs.</li>
        <li><strong>Formaliser la gouvernance :</strong> PSSI validée par la direction, désignation d'un RSSI (interne ou externalisé).</li>
      </ol>

      <div className="info-box">
        <h4>Accompagnement NIS2 — Transposition française</h4>
        <p>CyberConform suit l'évolution de la transposition NIS2 en France et accompagne les entités concernées : diagnostic d'éligibilité, enregistrement ANSSI, gap analysis article 21, plan de conformité priorisé et suivi. Mise à jour régulière selon les décrets d'application. Devis gratuit sous 48h.</p>
      </div>
    </ArticleLayout>
  );
};

export default Nis2TranspositionFrance;
