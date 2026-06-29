import ArticleLayout from "@/components/ArticleLayout";

const EvaluationRisqueFournisseurs = () => {
  return (
    <ArticleLayout
      title="Évaluer les risques cyber de vos fournisseurs NIS2 : questionnaire et méthode"
      description="Sécurité de la chaîne d'approvisionnement NIS2 : comment évaluer vos prestataires IT, sous-traitants et fournisseurs SaaS. Questionnaire cyber, clauses contractuelles et audits tiers."
      date="29 juin 2026"
      dateISO="2026-06-29"
      readTime="12 min"
      tag="Supply chain"
      slug="evaluation-risque-fournisseurs-nis2-supply-chain"
    >
      <p>
        L'article 21 de NIS2 impose aux entités essentielles et importantes de sécuriser leur chaîne d'approvisionnement. Concrètement, cela signifie évaluer les risques de sécurité posés par vos fournisseurs, prestataires IT, éditeurs de logiciels et hébergeurs cloud. Cette obligation découle d'un constat : une grande partie des cyberattaques réussies passent par des tiers de confiance mal sécurisés (attaques supply chain comme SolarWinds, Kaseya, 3CX).
      </p>

      <h2>Pourquoi NIS2 cible la chaîne d'approvisionnement</h2>
      <p>
        NIS2 s'attaque spécifiquement aux risques de la supply chain pour plusieurs raisons :
      </p>
      <ul>
        <li><strong>Les attaques via fournisseurs ont explosé</strong> : +633% entre 2021 et 2024 selon Gartner, avec des incidents comme SolarWinds (18 000 organisations compromises via une mise à jour logicielle)</li>
        <li><strong>Les PME sont des portes d'entrée</strong> : un sous-traitant d'un opérateur critique avec des mesures de sécurité insuffisantes peut ouvrir la voie à une attaque sur l'infrastructure principale</li>
        <li><strong>La dépendance au SaaS</strong> : une entreprise utilise en moyenne 130 applications SaaS ; chacune représente un vecteur d'attaque potentiel</li>
        <li><strong>Les accès distants fournisseurs</strong> : les prestataires de maintenance, les infogérants et les éditeurs avec accès remote sont des cibles privilégiées</li>
      </ul>

      <h2>Cartographie de vos fournisseurs critiques</h2>
      <p>
        Avant d'évaluer, il faut identifier. La première étape est de dresser une liste exhaustive de tous les tiers ayant accès à votre SI ou traitant vos données :
      </p>
      <h3>Catégorie 1 : accès direct au SI</h3>
      <ul>
        <li>Prestataires d'infogérance et maintenance IT</li>
        <li>MSSP (Managed Security Service Providers)</li>
        <li>Éditeurs de logiciels avec accès de maintenance à distance</li>
        <li>Intégrateurs ERP/CRM avec accès à la production</li>
      </ul>
      <h3>Catégorie 2 : hébergeurs et cloud</h3>
      <ul>
        <li>Hébergeurs de vos applications critiques (AWS, Azure, OVH, etc.)</li>
        <li>Fournisseurs SaaS traitant vos données métier sensibles</li>
        <li>CDN, providers DNS, fournisseurs de messagerie (Microsoft 365, Google Workspace)</li>
      </ul>
      <h3>Catégorie 3 : sous-traitants de données</h3>
      <ul>
        <li>Sous-traitants RGPD (article 28) : traitent des données personnelles pour votre compte</li>
        <li>Prestataires RH, cabinets de paie, assureurs avec accès aux données employés</li>
        <li>Partenaires commerciaux avec interconnexion de données</li>
      </ul>

      <h2>Le questionnaire d'évaluation cyber fournisseur</h2>
      <p>
        Un questionnaire structuré permet d'évaluer la maturité cyber de vos fournisseurs. Les questions essentielles à poser :
      </p>
      <h3>Gouvernance et certification</h3>
      <ul>
        <li>Disposez-vous d'une certification ISO 27001, SOC 2 Type II ou équivalente ? (Date et périmètre)</li>
        <li>Avez-vous un RSSI ou responsable sécurité dédié ?</li>
        <li>Réalisez-vous des audits de sécurité annuels ? Pouvez-vous partager le rapport d'exécutif ?</li>
        <li>Êtes-vous soumis à NIS2 ? Comment gérez-vous votre conformité ?</li>
      </ul>
      <h3>Gestion des incidents</h3>
      <ul>
        <li>Disposez-vous d'un plan de réponse aux incidents documenté ?</li>
        <li>Dans quel délai notifiez-vous vos clients en cas d'incident affectant leurs données ou services ?</li>
        <li>Avez-vous subi des incidents de sécurité ces 3 dernières années ? Comment ont-ils été gérés ?</li>
      </ul>
      <h3>Sécurité technique</h3>
      <ul>
        <li>Utilisez-vous le MFA pour tous les accès à vos systèmes, y compris ceux vers nos environnements ?</li>
        <li>Comment gérez-vous les mises à jour et patches de sécurité ? Délai moyen pour les patches critiques ?</li>
        <li>Chiffrez-vous les données de nos clients au repos et en transit ?</li>
        <li>Réalisez-vous des tests de pénétration annuels ? Par qui ?</li>
      </ul>
      <h3>Continuité et sous-traitance</h3>
      <ul>
        <li>Disposez-vous d'un PCA/PRA testé ? Quel est le RTO/RPO garanti pour vos services critiques ?</li>
        <li>Avez-vous des sous-traitants qui ont accès à nos données ou systèmes ? Lesquels ?</li>
        <li>Comment évaluez-vous vous-mêmes la sécurité de vos propres fournisseurs ?</li>
      </ul>

      <h2>Clauses contractuelles de sécurité à inclure</h2>
      <p>
        Le contrat avec vos fournisseurs critiques doit inclure des clauses de sécurité explicites :
      </p>
      <ul>
        <li><strong>Obligation de notification d'incident</strong> : délai maximum (ex. 24-48h) pour vous notifier de tout incident affectant vos données ou services</li>
        <li><strong>Droit d'audit</strong> : possibilité de demander un audit de sécurité ou un questionnaire annuel, avec accès aux rapports de certification</li>
        <li><strong>Niveau de sécurité minimum</strong> : exigences techniques (MFA, chiffrement, patch management) comme conditions contractuelles</li>
        <li><strong>Sous-traitance encadrée</strong> : obligation d'informer et d'obtenir accord avant de sous-traiter à un tiers l'accès à vos données</li>
        <li><strong>Effacement des données</strong> : procédure certifiée d'effacement des données en fin de contrat</li>
        <li><strong>Pénalités</strong> : mécanismes de sanction contractuelle en cas de violation des obligations de sécurité</li>
      </ul>

      <h2>Gestion des accès fournisseurs</h2>
      <p>
        Au-delà de l'évaluation, la gestion opérationnelle des accès fournisseurs est un enjeu majeur :
      </p>
      <ul>
        <li><strong>Comptes dédiés</strong> : un compte unique par prestataire avec les droits minimum nécessaires (principe du moindre privilège)</li>
        <li><strong>Accès temporaires</strong> : désactiver automatiquement les accès après la fin d'une intervention ou d'un contrat</li>
        <li><strong>MFA imposé</strong> : exiger le MFA pour tous les accès distants des prestataires à vos systèmes</li>
        <li><strong>Journalisation</strong> : tracer tous les accès fournisseurs avec capacité de rejeu en cas d'incident</li>
        <li><strong>Bastion SSH / PAM</strong> : centraliser les accès distants via une solution PAM (Privileged Access Management) comme CyberArk ou BeyondTrust</li>
        <li><strong>Revue semestrielle</strong> : auditer régulièrement la liste des accès fournisseurs actifs et supprimer les comptes obsolètes</li>
      </ul>

      <h2>Outils TPRM (Third-Party Risk Management)</h2>
      <p>
        Pour les organisations avec de nombreux fournisseurs, les outils TPRM automatisent l'évaluation et le suivi :
      </p>
      <ul>
        <li><strong>OneTrust / ProcessUnity</strong> : plateformes TPRM avec questionnaires automatisés, scoring et suivi des remontées</li>
        <li><strong>SecurityScorecard / BitSight</strong> : évaluation automatique de la posture cyber des fournisseurs via des données externes (scan de leur exposition internet)</li>
        <li><strong>Prevalent</strong> : TPRM avec intégration des questionnaires standard (SIG Lite, CAIQ) et suivi contractuel</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        La sécurité de la chaîne d'approvisionnement n'est plus une option sous NIS2. Les attaques via tiers se multiplient, et les régulateurs tiennent les entités responsables même quand l'incident provient d'un fournisseur. CyberConform accompagne les PME et ETI dans la mise en place d'un programme TPRM adapté à leur taille et à leur secteur : cartographie des fournisseurs, questionnaires personnalisés, revue des contrats et outil de suivi des évaluations annuelles.
      </p>
    </ArticleLayout>
  );
};

export default EvaluationRisqueFournisseurs;
