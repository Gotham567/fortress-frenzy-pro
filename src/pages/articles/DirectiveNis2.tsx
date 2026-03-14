import ArticleLayout from "@/components/ArticleLayout";

const DirectiveNis2 = () => {
  return (
    <ArticleLayout
      title="Qu'est-ce que la directive NIS2 ?"
      description="Tout savoir sur la directive européenne NIS2 : objectifs, périmètre d'application, obligations de cybersécurité et calendrier de mise en conformité pour les entreprises françaises."
      date="12 mars 2026"
      dateISO="2026-03-12"
      readTime="15 min"
      tag="NIS2"
      slug="directive-nis2"
    >
      <p>
        La directive NIS2 (Network and Information Security 2) représente une évolution majeure du cadre réglementaire européen en matière de cybersécurité. Adoptée par le Parlement européen le 10 novembre 2022, elle remplace la première directive NIS de 2016 et étend considérablement son périmètre d'application. Pour les entreprises françaises, cette directive constitue un tournant : elle impose de nouvelles obligations de sécurité informatique à un nombre bien plus large d'organisations, y compris les PME opérant dans des secteurs jugés critiques.
      </p>

      <p>
        Comprendre la directive NIS2 est aujourd'hui indispensable pour toute entreprise soucieuse de sa sécurité numérique et de sa conformité réglementaire. Dans cet article, nous vous proposons une analyse complète de cette réglementation : ses origines, ses objectifs, son périmètre, ses obligations concrètes et son calendrier d'application.
      </p>

      <h2>1. Contexte et origines de la directive NIS2</h2>

      <h3>1.1. Les limites de la directive NIS1</h3>
      <p>
        La première directive NIS, adoptée en 2016, fut la première législation européenne dédiée à la cybersécurité. Elle imposait aux opérateurs de services essentiels (OSE) et aux fournisseurs de services numériques (FSN) de mettre en place des mesures de sécurité adaptées et de notifier les incidents de sécurité significatifs aux autorités compétentes.
      </p>
      <p>
        Cependant, NIS1 présentait plusieurs lacunes qui ont motivé sa révision. Premièrement, la définition des entités couvertes variait considérablement d'un État membre à l'autre, créant des disparités de protection au sein du marché unique. Deuxièmement, le périmètre d'application était trop restreint, excluant de nombreux secteurs pourtant essentiels au fonctionnement de l'économie européenne. Troisièmement, les sanctions prévues étaient insuffisantes pour inciter les entreprises à investir sérieusement dans la cybersécurité. Enfin, la coopération entre États membres restait insuffisante face à des menaces cyber de plus en plus transfrontalières.
      </p>

      <h3>1.2. L'évolution du paysage des menaces cyber</h3>
      <p>
        Entre 2016 et 2022, le paysage des cybermenaces a connu une transformation radicale. Les attaques par rançongiciel (ransomware) ont explosé, ciblant aussi bien les grandes entreprises que les PME, les hôpitaux et les collectivités locales. L'attaque SolarWinds en 2020, l'exploitation de la vulnérabilité Log4j en 2021, ou encore les attaques liées au conflit russo-ukrainien en 2022 ont démontré l'ampleur et la sophistication croissante des menaces.
      </p>
      <p>
        Selon l'ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information), les attaques par rançongiciel ont augmenté de plus de 255 % entre 2019 et 2021 en France. Les PME représentent désormais plus de 40 % des victimes d'incidents de cybersécurité. Face à cette réalité, une mise à jour ambitieuse du cadre réglementaire s'imposait.
      </p>

      <h3>1.3. Les objectifs stratégiques de NIS2</h3>
      <p>
        La directive NIS2 poursuit plusieurs objectifs fondamentaux. Elle vise tout d'abord à harmoniser le niveau de cybersécurité à travers l'Union européenne en réduisant les disparités entre États membres. Elle cherche ensuite à élargir considérablement le nombre d'entités couvertes pour mieux refléter la réalité de l'écosystème numérique actuel. Elle renforce par ailleurs les obligations de sécurité et de notification d'incidents. Enfin, elle établit des sanctions dissuasives et un cadre de supervision plus strict.
      </p>

      <h2>2. Périmètre d'application : qui est concerné ?</h2>

      <h3>2.1. La classification en entités essentielles et importantes</h3>
      <p>
        L'une des innovations majeures de NIS2 réside dans sa classification des entités en deux catégories : les entités essentielles et les entités importantes. Cette distinction remplace le système d'OSE et de FSN de NIS1 et étend significativement le nombre d'organisations concernées.
      </p>
      <p>
        <strong>Les entités essentielles</strong> comprennent les organisations opérant dans les secteurs dits « hautement critiques » : énergie (électricité, gaz, pétrole, hydrogène, chauffage et refroidissement urbain), transports (aérien, ferroviaire, maritime, routier), banque et infrastructure des marchés financiers, santé, eau potable et eaux usées, infrastructure numérique (DNS, TLD, cloud computing, centres de données, réseaux de diffusion de contenu, fournisseurs de services de confiance), gestion des services TIC (B2B), administration publique et espace.
      </p>
      <p>
        <strong>Les entités importantes</strong> couvrent des secteurs qualifiés de « critiques » : services postaux et d'expédition, gestion des déchets, fabrication et distribution de produits chimiques, production et distribution alimentaire, fabrication d'équipements (dispositifs médicaux, produits informatiques, équipements électriques, machines, véhicules à moteur), fournisseurs de services numériques (places de marché en ligne, moteurs de recherche, réseaux sociaux) et organismes de recherche.
      </p>

      <h3>2.2. Les critères de taille</h3>
      <p>
        NIS2 utilise également des critères de taille pour déterminer l'applicabilité de la directive. En règle générale, les entreprises de taille moyenne et grande des secteurs concernés sont automatiquement couvertes. Cela inclut les entreprises de plus de 50 salariés ou réalisant un chiffre d'affaires annuel supérieur à 10 millions d'euros.
      </p>
      <p>
        Toutefois, certaines entités sont couvertes quelle que soit leur taille, notamment les fournisseurs de réseaux de communications électroniques publics, les registres de noms de domaine de premier niveau (TLD), les fournisseurs de services DNS et les entités qui sont les seuls fournisseurs d'un service essentiel dans un État membre.
      </p>

      <blockquote>
        <p>
          <strong>Point clé :</strong> Avec NIS2, on estime que plus de 160 000 entités seront concernées à l'échelle européenne, contre environ 15 000 sous NIS1. En France, le nombre d'organisations couvertes devrait passer de quelques centaines à plusieurs milliers.
        </p>
      </blockquote>

      <h3>2.3. L'impact sur les PME françaises</h3>
      <p>
        Pour de nombreuses PME françaises, la directive NIS2 constitue un changement de paradigme. Des entreprises qui n'avaient jusqu'alors aucune obligation réglementaire en matière de cybersécurité se retrouvent désormais soumises à un cadre strict. C'est notamment le cas des PME opérant dans la chaîne d'approvisionnement de secteurs critiques, des sous-traitants industriels, des fournisseurs de services numériques et des prestataires de santé.
      </p>
      <p>
        Les PME doivent donc rapidement évaluer si elles entrent dans le périmètre de NIS2, identifier les obligations qui leur incombent et mettre en place les mesures nécessaires. Ne pas se conformer à ces exigences expose les entreprises à des sanctions financières significatives, mais aussi à des risques réputationnels et opérationnels majeurs.
      </p>

      <h2>3. Les obligations concrètes imposées par NIS2</h2>

      <h3>3.1. Mesures de gestion des risques de cybersécurité</h3>
      <p>
        L'article 21 de la directive NIS2 détaille les mesures de gestion des risques que les entités concernées doivent mettre en œuvre. Ces mesures sont fondées sur une approche « tous risques » et couvrent au minimum les domaines suivants :
      </p>
      <ul>
        <li><strong>Politiques d'analyse des risques et de sécurité des systèmes d'information :</strong> chaque entité doit établir et maintenir une politique de sécurité documentée, basée sur une analyse de risques régulière.</li>
        <li><strong>Gestion des incidents :</strong> mise en place de procédures de détection, d'analyse, de confinement et de réponse aux incidents de cybersécurité.</li>
        <li><strong>Continuité des activités et gestion de crise :</strong> plans de continuité d'activité (PCA), plans de reprise d'activité (PRA), gestion des sauvegardes.</li>
        <li><strong>Sécurité de la chaîne d'approvisionnement :</strong> évaluation et gestion des risques liés aux fournisseurs et prestataires, incluant les aspects de sécurité dans les contrats.</li>
        <li><strong>Sécurité dans l'acquisition, le développement et la maintenance des systèmes :</strong> intégration de la sécurité dès la conception (security by design) et gestion des vulnérabilités.</li>
        <li><strong>Évaluation de l'efficacité des mesures :</strong> audits, tests d'intrusion et évaluations régulières de la posture de sécurité.</li>
        <li><strong>Pratiques de base en matière de cyber-hygiène et formation :</strong> sensibilisation du personnel et formation continue aux bonnes pratiques de cybersécurité.</li>
        <li><strong>Politiques et procédures relatives à l'utilisation de la cryptographie :</strong> chiffrement des données sensibles en transit et au repos.</li>
        <li><strong>Sécurité des ressources humaines, contrôle d'accès et gestion des actifs :</strong> politique de moindre privilège, authentification forte et inventaire des actifs.</li>
        <li><strong>Utilisation de solutions d'authentification multifacteur :</strong> MFA et communications sécurisées au sein de l'entité.</li>
      </ul>

      <h3>3.2. Obligations de notification des incidents</h3>
      <p>
        NIS2 renforce considérablement les obligations de notification des incidents de cybersécurité. Le processus de notification se déroule en plusieurs étapes avec des délais stricts :
      </p>
      <ul>
        <li><strong>Alerte précoce (24 heures) :</strong> dans les 24 heures suivant la prise de connaissance d'un incident significatif, l'entité doit transmettre une première alerte au CSIRT national ou à l'autorité compétente. Cette alerte doit indiquer si l'incident est vraisemblablement d'origine malveillante et s'il pourrait avoir un impact transfrontalier.</li>
        <li><strong>Notification d'incident (72 heures) :</strong> dans les 72 heures suivant la prise de connaissance de l'incident, une notification plus détaillée doit être transmise, incluant une évaluation initiale de la gravité et de l'impact, ainsi que les indicateurs de compromission le cas échéant.</li>
        <li><strong>Rapport final (1 mois) :</strong> au plus tard un mois après la notification initiale, un rapport final complet doit être fourni, détaillant la nature de l'incident, sa cause probable, les mesures d'atténuation prises et l'impact transfrontalier éventuel.</li>
      </ul>

      <h3>3.3. Responsabilité de la direction</h3>
      <p>
        Une innovation majeure de NIS2 concerne la responsabilité directe des dirigeants d'entreprise. La directive prévoit que les organes de direction des entités couvertes doivent approuver les mesures de gestion des risques de cybersécurité, superviser leur mise en œuvre et peuvent être tenus personnellement responsables en cas de manquement. Les dirigeants sont également tenus de suivre des formations en cybersécurité afin de pouvoir appréhender les risques et évaluer les pratiques de gestion de ces risques.
      </p>
      <p>
        Cette disposition constitue un changement culturel majeur : la cybersécurité n'est plus seulement l'affaire du service informatique, mais devient une responsabilité stratégique au plus haut niveau de l'entreprise.
      </p>

      <h2>4. Le régime de sanctions</h2>

      <h3>4.1. Sanctions pour les entités essentielles</h3>
      <p>
        Les entités essentielles s'exposent à des amendes administratives pouvant atteindre le montant le plus élevé entre 10 millions d'euros et 2 % du chiffre d'affaires annuel mondial total de l'exercice précédent. Ces sanctions sont comparables en termes de sévérité à celles prévues par le RGPD et témoignent de la volonté du législateur européen de prendre la cybersécurité aussi au sérieux que la protection des données personnelles.
      </p>

      <h3>4.2. Sanctions pour les entités importantes</h3>
      <p>
        Les entités importantes s'exposent à des amendes pouvant atteindre le montant le plus élevé entre 7 millions d'euros et 1,4 % du chiffre d'affaires annuel mondial total de l'exercice précédent. Bien que légèrement inférieures à celles applicables aux entités essentielles, ces sanctions restent très significatives, en particulier pour les PME.
      </p>

      <h3>4.3. Mesures de supervision</h3>
      <p>
        Au-delà des sanctions financières, NIS2 prévoit un panel de mesures de supervision incluant des audits réguliers et ciblés, des contrôles sur site et à distance, des demandes d'informations et d'accès à la documentation, des injonctions de mise en conformité et la possibilité de suspendre temporairement les certifications ou autorisations d'une entité en cas de manquement grave. Pour les entités essentielles, la supervision est proactive (ex ante), tandis que pour les entités importantes, elle est réactive (ex post), déclenchée par des signalements ou des preuves de non-conformité.
      </p>

      <h2>5. Calendrier de mise en application</h2>

      <h3>5.1. La transposition en droit français</h3>
      <p>
        La directive NIS2 a été publiée au Journal officiel de l'Union européenne le 27 décembre 2022 et est entrée en vigueur le 16 janvier 2023. Les États membres disposaient d'un délai de 21 mois pour transposer la directive en droit national, soit jusqu'au 17 octobre 2024.
      </p>
      <p>
        En France, la transposition est pilotée par l'ANSSI qui travaille en étroite collaboration avec les différents ministères concernés. Le processus comprend l'adaptation du cadre législatif et réglementaire français, la définition précise des entités couvertes sur le territoire national, la mise en place des mécanismes de supervision et de sanction, et le renforcement des capacités du CSIRT national.
      </p>

      <h3>5.2. Les étapes clés pour les entreprises</h3>
      <p>
        Les entreprises françaises potentiellement concernées par NIS2 doivent dès maintenant se préparer à l'application de la directive. Voici les étapes clés recommandées :
      </p>
      <ul>
        <li><strong>Évaluation du périmètre :</strong> déterminer si votre entreprise entre dans le champ d'application de NIS2, en fonction de son secteur d'activité et de sa taille.</li>
        <li><strong>Analyse d'écart (gap analysis) :</strong> évaluer votre niveau actuel de maturité en cybersécurité par rapport aux exigences de NIS2.</li>
        <li><strong>Plan de mise en conformité :</strong> élaborer une feuille de route priorisée pour combler les écarts identifiés.</li>
        <li><strong>Mise en œuvre des mesures :</strong> déployer les mesures techniques et organisationnelles nécessaires.</li>
        <li><strong>Gouvernance et formation :</strong> impliquer la direction et former le personnel.</li>
        <li><strong>Suivi et amélioration continue :</strong> établir des processus d'évaluation régulière et d'amélioration continue.</li>
      </ul>

      <h2>6. NIS2 et les normes existantes</h2>

      <h3>6.1. Lien avec l'ISO 27001</h3>
      <p>
        Les entreprises déjà certifiées ISO 27001 disposent d'un avantage significatif pour se conformer à NIS2. La norme ISO 27001, qui définit les exigences pour un système de management de la sécurité de l'information (SMSI), couvre une grande partie des mesures de gestion des risques exigées par NIS2. Cependant, NIS2 impose des exigences supplémentaires, notamment en matière de notification d'incidents, de sécurité de la chaîne d'approvisionnement et de responsabilité des dirigeants. L'ISO 27001 constitue donc une base solide mais ne garantit pas à elle seule la conformité NIS2.
      </p>

      <h3>6.2. Articulation avec le RGPD</h3>
      <p>
        NIS2 et le RGPD sont deux réglementations complémentaires qui se renforcent mutuellement. Le RGPD se concentre sur la protection des données personnelles, tandis que NIS2 vise la sécurité des réseaux et des systèmes d'information dans leur ensemble. Les mesures de sécurité mises en place pour se conformer à NIS2 contribuent souvent à renforcer la protection des données personnelles, et vice versa. Les entreprises ont intérêt à aborder ces deux réglementations de manière intégrée plutôt que cloisonnée.
      </p>

      <h2>7. Comment se préparer dès maintenant ?</h2>

      <p>
        La préparation à NIS2 ne doit pas être perçue uniquement comme une contrainte réglementaire, mais comme une opportunité de renforcer la résilience de votre entreprise face aux cybermenaces. Les investissements réalisés dans le cadre de la conformité NIS2 contribuent directement à réduire le risque d'incidents coûteux (ransomware, vol de données, interruption d'activité) et à renforcer la confiance de vos clients et partenaires.
      </p>
      <p>
        Chez CyberConform, nous accompagnons les PME françaises dans l'ensemble de leur démarche de mise en conformité NIS2. Notre approche combine expertise réglementaire, compétences techniques et pragmatisme opérationnel pour vous aider à atteindre la conformité de manière efficace et proportionnée à votre contexte.
      </p>
      <p>
        N'attendez pas les derniers délais pour engager votre démarche de conformité. Les entreprises les mieux préparées seront celles qui auront anticipé les exigences de NIS2 et intégré la cybersécurité comme un pilier de leur stratégie de développement.
      </p>
    </ArticleLayout>
  );
};

export default DirectiveNis2;
