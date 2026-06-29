import ArticleLayout from "@/components/ArticleLayout";

const DureeAuditCybersecurite = () => {
  return (
    <ArticleLayout
      title="Combien de temps dure un audit cybersécurité ? Durées par type d'audit"
      description="Durée d'un pentest, d'un audit organisationnel, d'un audit de configuration : toutes les durées par type d'audit cybersécurité, phases de la mission et facteurs qui impactent le calendrier. Guide 2026."
      date="28 juin 2026"
      dateISO="2026-06-28"
      readTime="9 min"
      tag="Guide pratique"
      slug="duree-audit-cybersecurite-combien-de-temps"
    >
      <p>
        "Combien de temps va durer l'audit ?" est l'une des premières questions des dirigeants. La réponse dépend du type d'audit, du périmètre et de la complexité de l'environnement. Ce guide vous donne les durées types pour chaque type de prestation et vous explique ce qui se passe à chaque phase.
      </p>

      <h2>1. Durées par type d'audit cybersécurité</h2>

      <h3>1.1. Pentest externe (test d'intrusion depuis Internet)</h3>
      <p>
        Le pentest externe simule une attaque depuis Internet, sans accès préalable à votre réseau interne. Il cible vos services exposés : site web, VPN, messagerie, API, pare-feu, etc.
      </p>
      <p>
        <strong>Durée typique : 3 à 10 jours</strong> selon le nombre de cibles et la profondeur des tests. Pour une PME avec un site web, un VPN et une dizaine de serveurs exposés, comptez 3 à 5 jours. Pour une ETI avec plusieurs applications web, des API, et une infrastructure cloud complexe, prévoyez 7 à 10 jours.
      </p>

      <h3>1.2. Pentest interne (test depuis l'intérieur du réseau)</h3>
      <p>
        Le pentest interne simule un attaquant déjà présent sur votre réseau (employé malveillant, accès par phishing). Il teste la segmentation réseau, les privilèges, l'Active Directory, les partages de fichiers et les possibilités de déplacement latéral.
      </p>
      <p>
        <strong>Durée typique : 3 à 7 jours.</strong> Un pentest Active Directory approfondi peut prendre 5 à 10 jours. Pour une petite structure avec un réseau simple, 3 jours suffisent généralement.
      </p>

      <h3>1.3. Pentest d'application web</h3>
      <p>
        L'audit de sécurité d'une application web teste les vulnérabilités de l'OWASP Top 10 et au-delà : injection, broken access control, authentification, session, XSS, CSRF, SSRF, etc.
      </p>
      <p>
        <strong>Durée typique : 5 à 15 jours</strong> selon la taille et la complexité de l'application. Une application e-commerce simple : 5 jours. Une plateforme SaaS avec de nombreux rôles, une API REST et des fonctionnalités complexes : 10 à 15 jours. La durée est directement corrélée au nombre de fonctionnalités à tester.
      </p>

      <h3>1.4. Audit de configuration (réseau, systèmes, cloud)</h3>
      <p>
        L'audit de configuration vérifie que vos systèmes sont configurés selon les bonnes pratiques de sécurité (CIS Benchmarks, ANSSI, AWS Well-Architected). Il ne comprend pas de tests d'intrusion actifs.
      </p>
      <p>
        <strong>Durée typique : 2 à 5 jours.</strong> Audit d'une infrastructure cloud AWS complète : 3 à 5 jours. Audit de configuration d'un réseau d'entreprise avec 10 à 20 équipements actifs : 2 à 3 jours. Audit d'un Active Directory : 2 à 3 jours.
      </p>

      <h3>1.5. Audit organisationnel (gouvernance, processus, conformité)</h3>
      <p>
        L'audit organisationnel évalue votre gouvernance cybersécurité : politique de sécurité, processus de gestion des incidents, formation des équipes, gestion des fournisseurs, conformité réglementaire (NIS2, RGPD, ISO 27001).
      </p>
      <p>
        <strong>Durée typique : 5 à 10 jours.</strong> Il se déroule principalement sous forme d'entretiens avec les responsables métier, techniques et la direction, complétés d'une revue documentaire. Une PME de 50 salariés : 4 à 6 jours. Une ETI de 500 salariés multi-sites : 8 à 12 jours.
      </p>

      <h3>1.6. Audit complet (pentest + organisationnel)</h3>
      <p>
        Un audit complet combinant volets techniques et organisationnels offre la vision la plus exhaustive. C'est ce que recommande l'ANSSI pour une conformité NIS2 approfondie.
      </p>
      <p>
        <strong>Durée typique : 10 à 20 jours</strong> selon la taille de l'organisation. La combinaison permet des synergies (réduction des frais de cadrage) mais reste une mission significative à planifier sur 2 à 4 semaines.
      </p>

      <h2>2. Les phases d'un audit : ce qui se passe en détail</h2>

      <h3>2.1. Phase de cadrage (1 à 3 jours)</h3>
      <p>
        Avant le démarrage des tests, une phase de cadrage est indispensable. Elle inclut une réunion de lancement (définition du périmètre, règles d'engagement, contacts d'urgence), la transmission des informations nécessaires (accès de test, schémas réseau, liste des applications), la signature de la lettre d'autorisation d'audit, et la planification des tests en accord avec vos contraintes métier (plages horaires, systèmes critiques à traiter avec précaution).
      </p>
      <p>
        Cette phase n'est pas comptée dans la durée de l'audit proprement dit mais est essentielle. Une mauvaise préparation allonge systématiquement la mission.
      </p>

      <h3>2.2. Phase d'exécution (cœur de l'audit)</h3>
      <p>
        C'est la phase opérationnelle : tests d'intrusion, revue de configuration, entretiens, analyse documentaire. Pour un pentest, elle comprend la reconnaissance, la découverte de vulnérabilités, l'exploitation, l'escalade de privilèges et la documentation des preuves. C'est la phase dont les durées sont indiquées ci-dessus.
      </p>

      <h3>2.3. Phase de rédaction du rapport (2 à 5 jours)</h3>
      <p>
        Souvent sous-estimée, la rédaction du rapport prend autant de temps que les tests eux-mêmes pour une prestation de qualité. Un auditeur sérieux documente chaque vulnérabilité avec sa preuve, son impact, et sa recommandation. Comptez 1 à 2 semaines supplémentaires après la fin des tests avant de recevoir le rapport.
      </p>

      <h3>2.4. Réunion de restitution (0,5 à 1 jour)</h3>
      <p>
        La restitution permet de présenter les résultats, de répondre aux questions et de prioriser les actions. Elle peut se faire en présentiel ou en visioconférence. Elle est généralement incluse dans le prix du forfait.
      </p>

      <h2>3. Facteurs qui allongent (ou raccourcissent) un audit</h2>

      <h3>3.1. Ce qui allonge la durée</h3>
      <p>
        Un environnement peu documenté oblige l'auditeur à passer du temps en phase de découverte — ce temps est compté dans la mission. Une architecture complexe (systèmes hétérogènes, technologies multiples, anciens systèmes) nécessite plus de temps d'analyse. Des systèmes critiques en production exigeant des précautions particulières réduisent la vitesse d'exécution. Enfin, une communication lente avec vos équipes pour obtenir les informations demandées allonge systématiquement la mission.
      </p>

      <h3>3.2. Ce qui accélère la durée</h3>
      <p>
        Une documentation à jour (schémas réseau, inventaire des systèmes, comptes de test créés à l'avance) permet à l'auditeur de démarrer immédiatement les tests. Un environnement homogène et bien connu réduit le temps de reconnaissance. Des équipes internes réactives pour fournir les accès et répondre aux questions accélèrent également la mission.
      </p>

      <h2>4. Planifier l'audit sans perturber votre activité</h2>
      <p>
        Prévoyez l'audit en dehors des périodes de forte activité (pic de commandes, clôture comptable, lancement de produit). Pour les tests les plus intrusifs (pentest interne), certains prestataires proposent des plages de nuit ou de week-end pour éviter tout impact sur la production. Informez vos équipes IT et vos prestataires d'infogérance du planning pour éviter les faux positifs dans leurs alertes de sécurité.
      </p>
      <p>
        Enfin, prévoyez du temps post-audit pour traiter les résultats. Un audit de 5 jours génère en général 3 à 6 mois de travail de remédiation. Intégrez ce délai dans votre planification annuelle de sécurité.
      </p>
    </ArticleLayout>
  );
};

export default DureeAuditCybersecurite;
