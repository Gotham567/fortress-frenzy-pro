import ArticleLayout from "@/components/ArticleLayout";

const Nis2SousTraitants = () => {
  return (
    <ArticleLayout
      title="NIS2 et sous-traitants : obligations supply chain et clauses contractuelles 2026"
      description="NIS2 et sécurité de la chaîne d'approvisionnement : obligations des entités essentielles et importantes vis-à-vis de leurs fournisseurs, clauses contractuelles, questionnaires d'évaluation et programme TPRM."
      date="10 juin 2026"
      dateISO="2026-06-10"
      readTime="14 min"
      tag="NIS2"
      slug="nis2-sous-traitants-supply-chain-obligations"
    >
      <p>
        L'article 21 de la directive NIS2 impose aux entités essentielles et importantes de gérer
        les risques de cybersécurité liés à <strong>leur chaîne d'approvisionnement</strong>.
        C'est une rupture majeure avec la directive NIS1 : désormais, vous êtes responsables de
        la sécurité de vos fournisseurs clés. Les attaques supply chain (SolarWinds, Kaseya, MOVEit)
        ont démontré que compromettre un prestataire peut toucher des milliers de clients simultanément.
      </p>

      <h2>Ce que dit l'article 21§2d de la directive NIS2</h2>
      <p>
        L'entité NIS2 doit mettre en place des mesures pour gérer "la sécurité de la chaîne
        d'approvisionnement, y compris les aspects liés à la sécurité concernant les relations entre
        chaque entité et ses fournisseurs ou prestataires de services directs, notamment les fournisseurs
        de services ou produits de sécurité TIC".
      </p>
      <p>
        Concrètement, cela impose :
      </p>
      <ul>
        <li>D'identifier les fournisseurs et prestataires qui accèdent à vos systèmes ou traitent des données critiques.</li>
        <li>D'évaluer leur niveau de sécurité (questionnaires, audits, certifications).</li>
        <li>D'inclure des clauses de sécurité dans vos contrats.</li>
        <li>De surveiller en continu les risques que font peser vos tiers sur votre organisation.</li>
      </ul>

      <h2>Classification des fournisseurs par niveau de risque</h2>
      <p>
        Tous les fournisseurs ne présentent pas le même niveau de risque. Une segmentation s'impose :
      </p>
      <ul>
        <li>
          <strong>Tier 1 — Critique</strong> : fournisseurs avec accès à vos systèmes sensibles ou données critiques (hébergeur, ESN, éditeur de logiciel de gestion, infogéreur SOC, prestataire cloud). Évaluation annuelle approfondie requise.
        </li>
        <li>
          <strong>Tier 2 — Important</strong> : fournisseurs avec accès limité ou traitant des données non critiques. Questionnaire annuel + review des incidents.
        </li>
        <li>
          <strong>Tier 3 — Standard</strong> : fournisseurs sans accès aux systèmes. Clause contractuelle standard + attestation annuelle.
        </li>
      </ul>

      <h2>Les clauses contractuelles NIS2 à exiger</h2>
      <p>
        Vos contrats avec les fournisseurs Tier 1 et Tier 2 doivent inclure a minima :
      </p>
      <ul>
        <li><strong>Clause de sécurité minimale</strong> : le fournisseur s'engage à maintenir un niveau de sécurité conforme à NIS2 et/ou ISO 27001 (ou équivalent).</li>
        <li><strong>Clause de notification d'incident</strong> : obligation de notifier tout incident de sécurité pouvant affecter vos systèmes ou données dans un délai défini (ex: 4 heures pour les incidents critiques, 24 heures pour les incidents significatifs).</li>
        <li><strong>Droit d'audit</strong> : droit de réaliser ou de faire réaliser des audits de sécurité chez le fournisseur, avec préavis raisonnable.</li>
        <li><strong>Chaîne de sous-traitance</strong> : le fournisseur doit répercuter vos exigences de sécurité à ses propres sous-traitants (clauses en cascade).</li>
        <li><strong>Gestion des vulnérabilités</strong> : SLA de correction des vulnérabilités critiques dans les produits ou services fournis.</li>
        <li><strong>Séparation des environnements</strong> : isolation de votre environnement de celui des autres clients de l'infogéreur.</li>
        <li><strong>Plan de continuité</strong> : le fournisseur doit disposer d'un PCA/PRA testé pour les services qu'il vous fournit.</li>
        <li><strong>Résiliation pour cause de sécurité</strong> : droit de résiliation en cas de manquement grave aux obligations de sécurité non corrigé sous X jours.</li>
      </ul>

      <h2>Questionnaire d'évaluation de la sécurité des tiers</h2>
      <p>
        Un questionnaire TPRM (Third-Party Risk Management) doit couvrir les domaines suivants
        pour les fournisseurs Tier 1 :
      </p>
      <ul>
        <li><strong>Gouvernance</strong> : existe-t-il un RSSI dédié ? Une PSSI approuvée par la direction ? Une revue annuelle de la sécurité ?</li>
        <li><strong>Certifications</strong> : ISO 27001, SOC 2 Type II, PCI-DSS, HDS, PASSI ? Date de la dernière certification ? Périmètre couvert ?</li>
        <li><strong>Gestion des accès</strong> : MFA obligatoire sur tous les accès distants ? Gestion des comptes privilégiés (PAM) ? Politique de revue des droits ?</li>
        <li><strong>Gestion des vulnérabilités</strong> : fréquence des scans ? SLA de patch ? Pentest annuel ?</li>
        <li><strong>Incidents passés</strong> : avez-vous subi un incident de sécurité significatif dans les 36 derniers mois ? Si oui, description et mesures correctives ?</li>
        <li><strong>Continuité d'activité</strong> : existence et test régulier d'un PCA/PRA pour les services fournis ?</li>
        <li><strong>Localisation des données</strong> : où sont stockées vos données ? Des transferts hors UE ont-ils lieu ?</li>
        <li><strong>Sous-traitance</strong> : liste des sous-traitants ayant accès à vos données ou systèmes ?</li>
      </ul>

      <h2>Programme TPRM : les 5 étapes</h2>
      <ol>
        <li><strong>Inventaire</strong> : cartographier tous les fournisseurs et les services qu'ils fournissent. Classification Tier 1/2/3.</li>
        <li><strong>Évaluation initiale</strong> : questionnaire + vérification des certifications + analyse des incidents publics (OSINT sur le fournisseur).</li>
        <li><strong>Contractualisation</strong> : intégrer les clauses de sécurité dans tous les contrats et avenants.</li>
        <li><strong>Surveillance continue</strong> : monitoring des scores de sécurité (SecurityScorecard, BitSight), alertes sur les CVE affectant les produits du fournisseur, suivi des incidents.</li>
        <li><strong>Revue périodique</strong> : réévaluation annuelle des Tier 1, tous les 2 ans pour les Tier 2, vérification des certifications à chaque renouvellement.</li>
      </ol>

      <h2>Si vous êtes vous-même un sous-traitant</h2>
      <p>
        NIS2 s'applique également aux sous-traitants qui fournissent des services essentiels à des entités NIS2.
        Si vos clients sont des entités essentielles ou importantes soumises à NIS2, vous devrez :
      </p>
      <ul>
        <li>Répondre à leurs questionnaires de sécurité et accepter des audits.</li>
        <li>Signer des clauses contractuelles de sécurité.</li>
        <li>Notifier vos clients en cas d'incident de sécurité vous affectant.</li>
        <li>Démontrer votre conformité avec des certifications reconnues (ISO 27001, SOC 2, PASSI).</li>
      </ul>
      <p>
        La certification ISO 27001 devient un avantage concurrentiel décisif pour les sous-traitants
        d'entités NIS2 — certains donneurs d'ordre ont commencé à l'exiger contractuellement.
      </p>
    </ArticleLayout>
  );
};

export default Nis2SousTraitants;
