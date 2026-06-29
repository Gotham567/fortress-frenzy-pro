import ArticleLayout from "@/components/ArticleLayout";

const CartographieSiNis2 = () => {
  return (
    <ArticleLayout
      title="Cartographie du SI pour NIS2 : identifier et protéger vos systèmes critiques"
      description="Cartographie du système d'information pour NIS2 : méthodologie ANSSI, identification des actifs critiques, flux de données, dépendances fournisseurs et outils recommandés."
      date="29 juin 2026"
      dateISO="2026-06-29"
      readTime="12 min"
      tag="NIS2 SI"
      slug="cartographie-si-nis2-methode-anssi"
    >
      <p>
        La cartographie du système d'information est l'une des premières exigences concrètes de NIS2. L'article 21 de la directive impose aux entités de connaître précisément leurs actifs numériques, leurs interdépendances et leurs risques. Sans cartographie à jour, il est impossible d'évaluer les risques, de prioriser les mesures de sécurité ou de répondre aux exigences d'audit de l'ANSSI. Voici la méthode pour la réaliser efficacement.
      </p>

      <h2>Pourquoi NIS2 exige une cartographie du SI</h2>
      <p>
        NIS2 n'utilise pas le terme "cartographie" explicitement, mais toutes ses exigences en découlent. Pour mettre en œuvre les mesures de l'article 21, vous devez nécessairement savoir :
      </p>
      <ul>
        <li><strong>Quels actifs</strong> constituent votre système d'information (serveurs, postes, applications, données, réseaux)</li>
        <li><strong>Quels services critiques</strong> dépendent de quels actifs, pour évaluer l'impact d'une compromission</li>
        <li><strong>Quelles interdépendances</strong> existent avec vos fournisseurs et sous-traitants (sécurité de la chaîne d'approvisionnement)</li>
        <li><strong>Quelles données sensibles</strong> circulent, comment et où elles sont stockées</li>
      </ul>
      <p>
        L'ANSSI a publié plusieurs guides pratiques sur la cartographie des SI, notamment dans le cadre de sa méthode EBIOS RM (Expression des Besoins et Identification des Objectifs de Sécurité, Risk Management), qui constitue le standard de référence en France.
      </p>

      <h2>Étape 1 : inventaire des actifs numériques</h2>
      <p>
        La première étape est de dresser un inventaire exhaustif de tous les composants de votre SI. L'inventaire doit couvrir quatre catégories :
      </p>
      <h3>Actifs matériels (hardware)</h3>
      <ul>
        <li>Serveurs (physiques et virtuels), baies de stockage, équipements réseau (switchs, routeurs, firewalls)</li>
        <li>Postes de travail, laptops, appareils mobiles professionnels</li>
        <li>Équipements IoT, automates industriels (OT), imprimantes connectées</li>
        <li>Pour chaque actif : propriétaire, localisation physique, version firmware, date de fin de support</li>
      </ul>
      <h3>Actifs logiciels (software)</h3>
      <ul>
        <li>Applications métier, ERP, CRM, logiciels de gestion</li>
        <li>Systèmes d'exploitation, middlewares, bases de données</li>
        <li>Applications SaaS et cloud (Microsoft 365, Salesforce, Jira, etc.)</li>
        <li>Pour chaque logiciel : version, éditeur, date de fin de support, données traitées</li>
      </ul>
      <h3>Données et services</h3>
      <ul>
        <li>Données personnelles (base RGPD), données de santé, secrets commerciaux, propriété intellectuelle</li>
        <li>Services numériques exposés (site web, API, extranet client)</li>
        <li>Services critiques pour la continuité d'activité (messagerie, VPN, outils de production)</li>
      </ul>
      <h3>Actifs tiers et cloud</h3>
      <ul>
        <li>Prestataires IT ayant accès à votre SI (infogérance, MSSP, éditeurs avec accès distant)</li>
        <li>Services cloud utilisés (AWS, Azure, GCP, hébergeurs)</li>
        <li>Fournisseurs de logiciels critiques (notamment ceux concernés par la réglementation supply chain NIS2)</li>
      </ul>

      <h2>Étape 2 : modélisation des flux et interdépendances</h2>
      <p>
        L'inventaire seul ne suffit pas. Il faut ensuite modéliser comment les actifs communiquent entre eux et avec l'extérieur :
      </p>
      <ul>
        <li><strong>Flux réseaux</strong> : qui communique avec qui, sur quels ports, avec quelle authentification</li>
        <li><strong>Flux de données</strong> : où sont créées les données, comment elles circulent, où elles sont stockées et sauvegardées</li>
        <li><strong>Dépendances applicatives</strong> : quelles applications dépendent de quelles autres (ex. ERP → base de données → serveur de fichiers)</li>
        <li><strong>Accès tiers</strong> : flux entrants des prestataires et fournisseurs (VPN, accès distant, APIs)</li>
      </ul>
      <p>
        Cette modélisation permet d'identifier les chemins d'attaque potentiels (latéralisation) et les points de défaillance unique (SPOF — Single Point of Failure).
      </p>

      <h2>Étape 3 : classification par criticité</h2>
      <p>
        Une fois l'inventaire et les flux établis, chaque actif doit être classifié selon sa criticité pour les activités de l'organisation. La classification ANSSI recommande trois niveaux :
      </p>
      <ul>
        <li><strong>Critique</strong> : actif dont la compromission ou l'indisponibilité causerait un impact grave sur les activités (arrêt de production, violation massive de données, notification NIS2 obligatoire)</li>
        <li><strong>Sensible</strong> : actif important mais dont la perte serait gérable avec des procédures de continuité</li>
        <li><strong>Standard</strong> : actif sans impact majeur sur la continuité des activités critiques</li>
      </ul>
      <p>
        La criticité détermine les mesures de sécurité à appliquer en priorité : les actifs critiques doivent bénéficier des protections les plus robustes (MFA, chiffrement, sauvegarde déconnectée, monitoring renforcé).
      </p>

      <h2>Outils pour réaliser la cartographie</h2>
      <p>
        Plusieurs outils peuvent faciliter la réalisation et la maintenance de la cartographie :
      </p>
      <ul>
        <li><strong>GLPI</strong> (open source) : CMDB complète pour l'inventaire des actifs matériels et logiciels, avec gestion des licences et suivi de maintenance</li>
        <li><strong>Nmap / Nessus</strong> : scan réseau pour découvrir automatiquement les actifs connectés et leurs ports ouverts</li>
        <li><strong>draw.io / Lucidchart / Miro</strong> : outils de diagramme pour modéliser les flux et architectures</li>
        <li><strong>EBIOS RM</strong> (outil ANSSI gratuit) : logiciel officiel pour formaliser l'analyse de risques en lien avec la cartographie</li>
        <li><strong>ServiceNow / Freshservice</strong> : ITSM avec CMDB pour les organisations plus grandes</li>
      </ul>

      <h2>Livrables attendus pour un audit NIS2</h2>
      <p>
        Lors d'un contrôle ANSSI ou d'un audit de conformité NIS2, les documents suivants sont typiquement demandés :
      </p>
      <ul>
        <li>Inventaire des actifs avec propriétaire, criticité, version et date de fin de support</li>
        <li>Schéma d'architecture réseau (topologie, segmentation, zones de sécurité)</li>
        <li>Cartographie des flux de données sensibles</li>
        <li>Liste des prestataires tiers avec accès au SI et niveau d'accès</li>
        <li>Registre des services externalisés (cloud, SaaS) avec classification des données hébergées</li>
        <li>Date de dernière mise à jour de la cartographie et processus de révision</li>
      </ul>

      <h2>Maintenir la cartographie à jour</h2>
      <p>
        Une cartographie obsolète est aussi dangereuse qu'une absence de cartographie. Pour la maintenir à jour :
      </p>
      <ul>
        <li>Intégrer la mise à jour de la cartographie dans les processus de gestion des changements (ITIL)</li>
        <li>Réaliser un audit de la cartographie au minimum une fois par an</li>
        <li>Automatiser la découverte d'actifs avec des scans réguliers (Nmap planifié)</li>
        <li>Désigner un responsable de la cartographie (RSSI ou DSI) avec des revues trimestrielles</li>
        <li>Inclure la cartographie dans le processus d'intégration de tout nouveau projet SI</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        La cartographie du SI est le socle de toute démarche de cybersécurité structurée. Elle est indispensable pour NIS2, mais aussi pour l'assurance cyber, les audits ISO 27001 et la réponse aux incidents. CyberConform accompagne les PME et ETI dans la réalisation de leur première cartographie SI selon la méthode ANSSI, avec un livrable utilisable immédiatement pour le diagnostic de conformité NIS2.
      </p>
    </ArticleLayout>
  );
};

export default CartographieSiNis2;
