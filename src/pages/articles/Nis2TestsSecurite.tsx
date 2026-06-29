import ArticleLayout from "@/components/ArticleLayout";

const Nis2TestsSecurite = () => {
  return (
    <ArticleLayout
      title="Tests de sécurité NIS2 : pentest, scan de vulnérabilités et fréquence obligatoire"
      description="NIS2 impose des tests réguliers de sécurité. Pentest, scan de vulnérabilités, test de phishing : fréquence, prestataires qualifiés PASSI et intégration dans la politique de sécurité."
      date="29 juin 2026"
      dateISO="2026-06-29"
      readTime="10 min"
      tag="Tests sécurité"
      slug="tests-securite-nis2-pentest-frequence"
    >
      <p>
        L'article 21 de NIS2 impose aux entités essentielles et importantes de mettre en place des mesures pour "évaluer l'efficacité des mesures de gestion des risques de cybersécurité". En pratique, cela se traduit par l'obligation de réaliser des tests de sécurité réguliers : pentests, scans de vulnérabilités, tests de phishing simulé. Ces tests ne sont plus optionnels — ils font partie des preuves que les autorités de contrôle peuvent exiger.
      </p>

      <h2>Ce que dit NIS2 sur les tests de sécurité</h2>
      <p>
        NIS2 ne fixe pas de fréquence exacte pour les tests, mais elle impose que les entités :
      </p>
      <ul>
        <li><strong>Évaluent régulièrement</strong> l'efficacité de leurs mesures de sécurité</li>
        <li><strong>Corrigent</strong> les vulnérabilités identifiées dans des délais raisonnables selon leur criticité</li>
        <li><strong>Documentent</strong> leurs tests et leurs résultats pour pouvoir les présenter aux autorités de contrôle</li>
        <li><strong>Intègrent</strong> les résultats des tests dans leur processus de gestion des risques</li>
      </ul>
      <p>
        Pour les entités essentielles, les autorités peuvent demander des audits de sécurité réalisés par des auditeurs qualifiés indépendants — c'est-à-dire des prestataires qualifiés PASSI (Prestataires d'Audit de la Sécurité des Systèmes d'Information) par l'ANSSI.
      </p>

      <h2>Les trois types de tests de sécurité</h2>
      <h3>1. Test d'intrusion (pentest)</h3>
      <p>
        Le pentest est la simulation d'une attaque réelle par un hacker éthique pour identifier les vulnérabilités exploitables dans votre SI. Il peut être réalisé en :
      </p>
      <ul>
        <li><strong>Boîte noire</strong> : le testeur n'a aucune information préalable, comme un attaquant externe</li>
        <li><strong>Boîte grise</strong> : le testeur dispose de quelques informations (compte utilisateur, documentation partielle)</li>
        <li><strong>Boîte blanche</strong> : le testeur a accès à tout (code source, architecture, comptes admin) pour une analyse exhaustive</li>
      </ul>
      <p>
        <strong>Fréquence recommandée :</strong> au minimum une fois par an pour les systèmes exposés sur Internet. Après chaque changement majeur d'infrastructure ou de périmètre (refonte d'application, migration cloud, ouverture d'un nouveau service).
      </p>
      <p>
        <strong>Prestataires :</strong> pour les entités essentielles soumises à NIS2, privilégier des prestataires qualifiés PASSI par l'ANSSI. La liste des prestataires qualifiés est disponible sur le site de l'ANSSI.
      </p>
      <h3>2. Scan de vulnérabilités</h3>
      <p>
        Le scan de vulnérabilités est une analyse automatisée de vos systèmes pour identifier les failles connues (CVE) et les mauvaises configurations. Il est complémentaire au pentest mais moins profond :
      </p>
      <ul>
        <li><strong>Scan interne</strong> : depuis l'intérieur du réseau, pour identifier toutes les vulnérabilités y compris sur les systèmes non exposés</li>
        <li><strong>Scan externe</strong> : depuis Internet, pour identifier ce qu'un attaquant peut voir et exploiter</li>
        <li><strong>Outils</strong> : Tenable Nessus, Qualys, OpenVAS (open source), Nuclei pour les applications web</li>
      </ul>
      <p>
        <strong>Fréquence recommandée :</strong> mensuelle pour les systèmes critiques exposés, trimestrielle pour le reste. Les scans peuvent être automatisés et schedulés.
      </p>
      <h3>3. Test de phishing simulé</h3>
      <p>
        Le phishing simulé teste la résistance de vos collaborateurs aux emails malveillants, qui représentent encore 80% des vecteurs d'entrée des cyberattaques :
      </p>
      <ul>
        <li>Envoi de faux emails de phishing à l'ensemble des collaborateurs (ou à des échantillons)</li>
        <li>Mesure du taux de clic, de saisie de credentials, et de signalement</li>
        <li>Formation ciblée pour les collaborateurs ayant "mordu" à l'hameçon</li>
        <li>Rapport et KPIs pour mesurer l'évolution dans le temps</li>
      </ul>
      <p>
        <strong>Fréquence recommandée :</strong> au moins 2 à 4 campagnes par an, avec des scénarios variés (usurpation d'identité RH, faux Urssaf, fausses factures, faux support IT).
      </p>

      <h2>Fréquences recommandées selon la criticité</h2>
      <p>
        La fréquence des tests doit être proportionnée à la criticité des actifs et au niveau de risque :
      </p>
      <ul>
        <li><strong>Entités essentielles, services exposés critiques</strong> : pentest semestriel + scan mensuel + phishing trimestriel</li>
        <li><strong>Entités importantes, services exposés standards</strong> : pentest annuel + scan trimestriel + phishing semestriel</li>
        <li><strong>PME hors périmètre NIS2</strong> : pentest annuel (recommandé) + scan semestriel + phishing annuel</li>
        <li><strong>Après incident majeur</strong> : pentest systématique pour vérifier l'éradication complète de la menace</li>
      </ul>

      <h2>Intégration des tests dans la PSSI</h2>
      <p>
        Pour satisfaire les exigences NIS2, les tests de sécurité doivent être formalisés dans votre Politique de Sécurité des Systèmes d'Information (PSSI) :
      </p>
      <ul>
        <li>Définir le périmètre des tests (systèmes inclus, exclus, méthodes autorisées)</li>
        <li>Fixer le calendrier annuel des tests et les responsables</li>
        <li>Définir le processus de remédiation des vulnérabilités identifiées avec des délais par criticité</li>
        <li>Établir le processus de validation que les correctifs ont bien été appliqués (retest)</li>
        <li>Archiver les rapports de tests pour les présenter lors des contrôles ANSSI</li>
      </ul>

      <h2>Budget et ROI des tests de sécurité</h2>
      <p>
        Le coût d'un pentest varie selon la taille du périmètre et la méthode :
      </p>
      <ul>
        <li><strong>Pentest web application</strong> (1-2 apps) : 5 000 à 15 000 €</li>
        <li><strong>Pentest infrastructure interne</strong> : 8 000 à 25 000 €</li>
        <li><strong>Pentest complet (interne + externe + AD)</strong> : 15 000 à 50 000 € selon la taille</li>
        <li><strong>Scan de vulnérabilités automatisé</strong> : 2 000 à 8 000 €/an en SaaS</li>
      </ul>
      <p>
        Ces coûts sont à mettre en regard du coût moyen d'une cyberattaque pour une PME (230 000 € selon le Cesin) et des amendes NIS2 potentielles. Le ROI des tests de sécurité est positif dès qu'une vulnérabilité critique est identifiée et corrigée avant d'être exploitée.
      </p>

      <h2>Conclusion</h2>
      <p>
        Les tests de sécurité réguliers sont devenus une obligation réglementaire sous NIS2 et une nécessité opérationnelle face à la multiplication des cyberattaques. CyberConform réalise des tests d'intrusion qualifiés PASSI, des scans de vulnérabilités et des campagnes de phishing simulé pour les PME et ETI. Nos rapports fournissent un plan de remédiation priorisé et des livrables directement réutilisables dans votre démarche de conformité NIS2.
      </p>
    </ArticleLayout>
  );
};

export default Nis2TestsSecurite;
