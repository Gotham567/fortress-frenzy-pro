import ArticleLayout from "@/components/ArticleLayout";

const DoraReglementation = () => {
  return (
    <ArticleLayout
      title="Règlement DORA : guide complet pour le secteur financier en 2026"
      description="Tout savoir sur le règlement DORA (Digital Operational Resilience Act) : périmètre, obligations, gestion des risques TIC, tests de résilience, sanctions et plan de mise en conformité pour banques, assurances et fintechs."
      date="18 avril 2026"
      dateISO="2026-04-18"
      readTime="17 min"
      tag="DORA"
      slug="dora-reglementation-secteur-financier"
    >
      <p>
        Depuis le <strong>17 janvier 2025</strong>, le règlement européen <strong>DORA</strong> (Digital Operational Resilience Act) est pleinement applicable à
        l'ensemble des entités financières opérant dans l'Union européenne. Pourtant, en 2026, de nombreuses banques régionales, compagnies d'assurance,
        sociétés de gestion et fintechs peinent encore à démontrer leur conformité. Cet article fait le point sur les obligations DORA, les sanctions
        encourues et la méthodologie pour réussir sa mise en conformité.
      </p>

      <h2>Qu'est-ce que le règlement DORA ?</h2>
      <p>
        Le <strong>règlement (UE) 2022/2554</strong>, dit <strong>DORA</strong>, est un texte européen visant à renforcer la <strong>résilience opérationnelle
        numérique</strong> du secteur financier face aux risques liés aux technologies de l'information et de la communication (TIC). Il harmonise au niveau
        européen les exigences de cybersécurité, de gestion des incidents, de tests de résilience et de supervision des prestataires informatiques critiques.
      </p>
      <p>
        DORA s'inscrit dans la continuité de la directive NIS2 mais s'applique exclusivement au <strong>secteur financier</strong> avec un niveau d'exigence
        encore plus strict, notamment sur la supervision des fournisseurs cloud et des prestataires informatiques.
      </p>

      <h2>Qui est concerné par DORA ?</h2>
      <p>Le périmètre d'application de DORA couvre plus de <strong>20 catégories d'entités financières</strong>, notamment :</p>
      <ul>
        <li><strong>Établissements de crédit</strong> : banques, banques mutualistes, banques en ligne.</li>
        <li><strong>Entreprises d'investissement</strong> : sociétés de gestion, brokers, conseillers en investissement.</li>
        <li><strong>Assurances et réassurances</strong> : compagnies d'assurance, mutuelles, intermédiaires.</li>
        <li><strong>Établissements de paiement et de monnaie électronique</strong> : fintechs, néobanques, PSP.</li>
        <li><strong>Prestataires de services sur crypto-actifs</strong> (PSAN) sous MiCA.</li>
        <li><strong>Plateformes de financement participatif</strong> (crowdfunding).</li>
        <li><strong>Agences de notation, dépositaires centraux, contreparties centrales.</strong></li>
        <li><strong>Prestataires tiers critiques de services TIC</strong> : fournisseurs cloud, éditeurs SaaS critiques, opérateurs de datacenters.</li>
      </ul>
      <p>
        À noter : les <strong>microentreprises</strong> (moins de 10 salariés et CA &lt; 2 M€) bénéficient d'un régime allégé, mais restent soumises aux principes
        fondamentaux de gestion des risques TIC.
      </p>

      <h2>Les 5 piliers de DORA</h2>

      <h3>1. Gestion des risques liés aux TIC</h3>
      <p>
        Chaque entité doit mettre en place un <strong>cadre de gouvernance et de gestion des risques TIC</strong> sous la responsabilité directe de l'organe de
        direction. Cela comprend :
      </p>
      <ul>
        <li>Une stratégie de résilience numérique formalisée et révisée annuellement.</li>
        <li>Une cartographie des actifs informationnels et des dépendances critiques.</li>
        <li>Des politiques de sécurité (accès, chiffrement, sauvegarde, continuité).</li>
        <li>Une fonction dédiée de gestion des risques TIC, indépendante des opérations.</li>
        <li>Une formation continue de l'organe de direction sur les enjeux cyber.</li>
      </ul>

      <h3>2. Gestion, classification et notification des incidents TIC</h3>
      <p>
        DORA impose un <strong>processus harmonisé</strong> de détection, classification et notification des incidents majeurs aux autorités compétentes (ACPR,
        AMF, BCE selon les cas) :
      </p>
      <ul>
        <li><strong>Notification initiale</strong> sous 4 heures après classification d'un incident majeur.</li>
        <li><strong>Rapport intermédiaire</strong> sous 72 heures.</li>
        <li><strong>Rapport final</strong> sous 1 mois avec analyse des causes racines.</li>
      </ul>

      <h3>3. Tests de résilience opérationnelle numérique</h3>
      <p>
        Toutes les entités doivent réaliser des tests réguliers de leurs systèmes critiques. Les entités les plus importantes (banques systémiques, grandes
        assurances) doivent en plus effectuer tous les <strong>3 ans des tests d'intrusion fondés sur la menace (TLPT)</strong>, basés sur le cadre TIBER-EU.
      </p>

      <h3>4. Gestion des risques liés aux prestataires tiers TIC</h3>
      <p>
        C'est l'un des apports majeurs de DORA. Les entités financières doivent :
      </p>
      <ul>
        <li>Maintenir un <strong>registre détaillé</strong> de tous leurs contrats avec des prestataires TIC.</li>
        <li>Évaluer la criticité de chaque prestataire avant contractualisation.</li>
        <li>Inclure dans les contrats des clauses obligatoires (audit, sortie, sous-traitance, sécurité).</li>
        <li>Surveiller en continu la performance et la sécurité des prestataires critiques.</li>
      </ul>
      <p>
        Les <strong>prestataires tiers critiques</strong> (notamment les hyperscalers cloud comme AWS, Microsoft Azure, Google Cloud) seront directement supervisés
        par les autorités européennes (ESAs).
      </p>

      <h3>5. Partage d'informations sur les cybermenaces</h3>
      <p>
        DORA encourage le partage volontaire d'informations sur les menaces et incidents entre acteurs du secteur financier, dans un cadre sécurisé et conforme
        au RGPD.
      </p>

      <h2>Sanctions en cas de non-conformité</h2>
      <p>
        Les sanctions DORA sont alignées sur les régimes les plus sévères du droit financier européen :
      </p>
      <ul>
        <li><strong>Personnes morales</strong> : amendes administratives jusqu'à <strong>10 % du chiffre d'affaires annuel mondial</strong>.</li>
        <li><strong>Dirigeants</strong> : sanctions personnelles, interdiction d'exercer, amendes pouvant atteindre 5 M€.</li>
        <li><strong>Prestataires TIC critiques</strong> : astreintes journalières jusqu'à 1 % du CA mondial moyen.</li>
        <li>Mesures complémentaires : injonctions, restrictions d'activité, retrait d'agrément.</li>
      </ul>

      <h2>DORA vs NIS2 : quelles différences ?</h2>
      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>DORA</th>
            <th>NIS2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Périmètre</td>
            <td>Secteur financier uniquement</td>
            <td>18 secteurs (énergie, santé, transports, etc.)</td>
          </tr>
          <tr>
            <td>Nature</td>
            <td>Règlement (application directe)</td>
            <td>Directive (transposition nationale)</td>
          </tr>
          <tr>
            <td>Autorité</td>
            <td>ACPR, AMF, BCE, ESAs</td>
            <td>ANSSI</td>
          </tr>
          <tr>
            <td>Notification incident</td>
            <td>4h / 72h / 1 mois</td>
            <td>24h / 72h / 1 mois</td>
          </tr>
          <tr>
            <td>Supervision prestataires TIC</td>
            <td>Directe par les ESAs</td>
            <td>Indirecte via l'entité régulée</td>
          </tr>
        </tbody>
      </table>
      <p>
        Pour les entités relevant des deux régimes (par exemple un opérateur de paiement classé essentiel), la conformité DORA prévaut sur NIS2 sur les points
        spécifiquement traités par DORA.
      </p>

      <h2>Plan de mise en conformité DORA en 6 étapes</h2>

      <h3>Étape 1 : Diagnostic d'écart (gap analysis)</h3>
      <p>
        Évaluez votre conformité actuelle par rapport aux 5 piliers DORA. Identifiez les écarts critiques, en particulier sur la gouvernance, la cartographie
        des prestataires TIC et le dispositif de gestion d'incidents.
      </p>

      <h3>Étape 2 : Gouvernance et nomination des responsables</h3>
      <p>
        Mettez en place une instance dédiée à la résilience opérationnelle numérique, rattachée au conseil d'administration. Désignez un responsable de la
        gestion des risques TIC indépendant.
      </p>

      <h3>Étape 3 : Cartographie des actifs et prestataires critiques</h3>
      <p>
        Constituez le <strong>registre des contrats TIC</strong> exigé par DORA, avec classification de la criticité et identification des concentrations de
        risque (ex : dépendance excessive à un seul cloud).
      </p>

      <h3>Étape 4 : Renforcement des dispositifs techniques</h3>
      <p>
        Renforcez votre socle de cybersécurité : segmentation réseau, EDR/XDR, SOC, sauvegardes immutables, plan de continuité testé. Intégrez la sécurité dès
        la conception (security by design) sur tous les nouveaux projets.
      </p>

      <h3>Étape 5 : Programme de tests de résilience</h3>
      <p>
        Définissez un calendrier annuel de tests : scans de vulnérabilités, tests d'intrusion, exercices de gestion de crise, tests de PCA/PRA. Pour les entités
        importantes, préparez votre premier test TLPT.
      </p>

      <h3>Étape 6 : Documentation et reporting</h3>
      <p>
        Formalisez l'ensemble des politiques, procédures et registres exigés. Préparez les modèles de notification d'incident conformes aux RTS de l'EBA. Mettez
        en place un reporting régulier au conseil d'administration.
      </p>

      <h2>Combien coûte la mise en conformité DORA ?</h2>
      <p>
        Les coûts varient considérablement selon la taille et la complexité de l'entité :
      </p>
      <ul>
        <li><strong>Petite fintech ou cabinet de gestion</strong> : 50 000 à 150 000 € (audit, gouvernance, outillage de base).</li>
        <li><strong>Banque régionale ou assurance moyenne</strong> : 300 000 à 800 000 € (refonte gouvernance, SOC, registre prestataires, tests).</li>
        <li><strong>Banque systémique ou grand assureur</strong> : 2 à 10 M€ sur 2 ans (programme global, TLPT, transformation organisationnelle).</li>
      </ul>
      <p>
        À cela s'ajoutent les coûts récurrents annuels (15 à 25 % de l'investissement initial) pour maintenir le dispositif en condition opérationnelle.
      </p>

      <h2>Erreurs à éviter dans votre projet DORA</h2>
      <ul>
        <li><strong>Confondre DORA et NIS2</strong> : les exigences se recouvrent mais les délais et processus diffèrent.</li>
        <li><strong>Sous-estimer la cartographie des prestataires TIC</strong> : c'est le chantier le plus chronophage.</li>
        <li><strong>Négliger les contrats existants</strong> : les clauses DORA doivent être renégociées avec tous les prestataires critiques.</li>
        <li><strong>Repousser les tests de résilience</strong> : ils nécessitent plusieurs mois de préparation.</li>
        <li><strong>Traiter DORA comme un projet IT</strong> : c'est un programme stratégique qui implique direction générale, juridique, achats et métiers.</li>
      </ul>

      <h2>Conclusion : transformer DORA en avantage compétitif</h2>
      <p>
        Au-delà de la contrainte réglementaire, DORA représente une opportunité de <strong>professionnaliser durablement la gestion des risques numériques</strong>
        dans le secteur financier. Les entités qui anticipent et structurent leur démarche en font un facteur de différenciation auprès de leurs clients, de
        leurs investisseurs et des autorités de supervision.
      </p>
      <p>
        <strong>CyberConform</strong> accompagne banques, assurances, sociétés de gestion et fintechs dans toutes les étapes de leur mise en conformité DORA :
        diagnostic, gouvernance, cartographie des prestataires TIC, refonte contractuelle, tests de résilience et préparation des audits ACPR/AMF.
      </p>
    </ArticleLayout>
  );
};

export default DoraReglementation;
