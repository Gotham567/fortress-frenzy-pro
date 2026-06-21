import ArticleLayout from "@/components/ArticleLayout";

const PssiGuide = () => {
  return (
    <ArticleLayout
      title="PSSI : élaborer sa politique de sécurité des SI — guide pratique PME 2026"
      description="Guide complet pour rédiger une PSSI (Politique de Sécurité des Systèmes d'Information) efficace : structure, contenu obligatoire, méthode de rédaction, gouvernance et lien avec NIS2 et ISO 27001."
      date="14 juin 2026"
      dateISO="2026-06-14"
      readTime="15 min"
      tag="PSSI"
      slug="pssi-politique-securite-si-guide-pme"
    >
      <p>
        La <strong>PSSI</strong> (Politique de Sécurité des Systèmes d'Information) est le document
        fondateur de votre dispositif de cybersécurité. Elle définit les règles, responsabilités et
        objectifs de sécurité de votre organisation. Exigée par la norme ISO 27001 (clause 5.2),
        recommandée par l'ANSSI et de facto obligatoire pour les entités NIS2, elle est pourtant
        encore absente dans 60 % des PME françaises (CESIN 2025).
      </p>

      <h2>Qu'est-ce qu'une PSSI et pourquoi en avoir une ?</h2>
      <p>
        Une PSSI est un document <strong>stratégique et décisionnel</strong> qui :
      </p>
      <ul>
        <li>Exprime l'engagement de la direction en matière de sécurité de l'information.</li>
        <li>Définit les objectifs de sécurité alignés avec les enjeux métier.</li>
        <li>Établit le cadre des règles de sécurité applicables à l'ensemble de l'organisation.</li>
        <li>Fixe les rôles et responsabilités (RSSI, DPO, administrateurs système, utilisateurs).</li>
        <li>Démontre la conformité aux exigences réglementaires (NIS2, RGPD, ISO 27001, DORA).</li>
      </ul>
      <p>
        <strong>Ce que la PSSI n'est pas</strong> : une procédure technique détaillée. Elle est un cadre
        de haut niveau qui donne lieu à des procédures et chartes spécifiques (charte utilisateur, procédure
        de gestion des incidents, politique de mots de passe, etc.).
      </p>

      <h2>Structure type d'une PSSI</h2>

      <h3>1. Périmètre et contexte</h3>
      <ul>
        <li>Champ d'application : systèmes, sites, filiales, tiers concernés par la PSSI.</li>
        <li>Contexte organisationnel : activité, taille, secteur, enjeux métier.</li>
        <li>Contexte réglementaire : réglementations applicables (RGPD, NIS2, sectorielles).</li>
        <li>Parties prenantes internes et externes impactées.</li>
      </ul>

      <h3>2. Déclaration de politique (management statement)</h3>
      <p>
        Engagement formel de la direction générale, signé par le DG ou PDG. Ce n'est pas une formalité :
        c'est le signal que la sécurité est une priorité stratégique et non uniquement un sujet technique.
        La déclaration doit mentionner les objectifs de sécurité, l'allocation des ressources et l'engagement
        à la revue régulière de la politique.
      </p>

      <h3>3. Principes directeurs</h3>
      <ul>
        <li>Disponibilité, Intégrité, Confidentialité, Preuve (DICP) — hiérarchisation selon les enjeux métier.</li>
        <li>Défense en profondeur : plusieurs couches de sécurité complémentaires.</li>
        <li>Principe de moindre privilège : accès restreints au strict nécessaire.</li>
        <li>Sécurité by design et by default : sécurité intégrée dès la conception des projets.</li>
        <li>Responsabilité individuelle : chaque utilisateur est responsable de l'usage qu'il fait des SI.</li>
      </ul>

      <h3>4. Organisation de la sécurité</h3>
      <ul>
        <li>Rôles et responsabilités : RSSI, DPO, administrateurs, référents sécurité, utilisateurs.</li>
        <li>Instances de gouvernance : comité de pilotage sécurité, fréquence des revues.</li>
        <li>Gestion des tiers : exigences de sécurité pour les fournisseurs et sous-traitants.</li>
        <li>Sensibilisation et formation : plan annuel de formation à la sécurité.</li>
      </ul>

      <h3>5. Domaines de sécurité couverts</h3>
      <p>La PSSI doit couvrir (au minimum) les domaines suivants :</p>
      <ul>
        <li><strong>Gestion des actifs</strong> : inventaire, classification, ownership des actifs informationnels.</li>
        <li><strong>Contrôle d'accès</strong> : politique IAM, mots de passe, MFA, gestion des habilitations.</li>
        <li><strong>Cryptographie</strong> : algorithmes autorisés, gestion des clés.</li>
        <li><strong>Sécurité physique</strong> : contrôle d'accès aux locaux, sécurité des équipements.</li>
        <li><strong>Sécurité des opérations</strong> : gestion des changements, gestion des vulnérabilités, logs.</li>
        <li><strong>Sécurité des communications</strong> : politique réseau, chiffrement des flux, Wi-Fi.</li>
        <li><strong>Développement et maintenance</strong> : cycle de développement sécurisé (SDLC), tests.</li>
        <li><strong>Gestion des incidents</strong> : processus de détection, réponse, notification, retour d'expérience.</li>
        <li><strong>Continuité d'activité</strong> : PCA, PRA, tests de restauration.</li>
        <li><strong>Conformité</strong> : RGPD, réglementations sectorielles, audits réguliers.</li>
      </ul>

      <h3>6. Gestion des exceptions et des dérogations</h3>
      <p>
        Définir le processus pour les cas où une règle ne peut pas être appliquée :
        formulaire de dérogation, validation par le RSSI et la direction, durée limitée, mesures compensatoires.
      </p>

      <h3>7. Révision et amélioration continue</h3>
      <ul>
        <li>Fréquence de révision : au moins annuelle et après tout incident majeur.</li>
        <li>Processus de mise à jour : qui peut proposer des modifications, qui les approuve.</li>
        <li>Indicateurs de performance (KPIs) de la politique de sécurité.</li>
      </ul>

      <h2>Lien avec NIS2 et ISO 27001</h2>

      <h3>NIS2</h3>
      <p>
        L'article 21 de la directive NIS2 impose aux entités essentielles et importantes d'adopter des
        "politiques de sécurité des réseaux et des systèmes d'information". La PSSI en est la traduction
        directe. Les entités NIS2 doivent pouvoir présenter leur PSSI lors des contrôles de l'ANSSI.
      </p>

      <h3>ISO 27001:2022</h3>
      <p>
        La clause 5.2 de l'ISO 27001:2022 exige une politique de sécurité de l'information approuvée
        par la direction, communiquée en interne et disponible pour les parties intéressées. La PSSI
        est le document de référence pour tout projet de certification ISO 27001.
      </p>

      <h2>Méthode de rédaction en 5 étapes</h2>
      <ol>
        <li><strong>Analyse du contexte</strong> : cartographier les actifs critiques, identifier les menaces et enjeux réglementaires via EBIOS RM ou une analyse de risques simplifiée.</li>
        <li><strong>Atelier de co-construction</strong> : impliquer la direction générale, le RSSI, le DPO, les responsables métier et l'IT — la PSSI n'est pas un document IT.</li>
        <li><strong>Rédaction et revue</strong> : rédiger les chapitres en language accessible (pas de jargon technique dans la PSSI principale), faire relire par des non-techniciens.</li>
        <li><strong>Validation et diffusion</strong> : signature par la direction, communication à l'ensemble des collaborateurs et aux tiers concernés.</li>
        <li><strong>Déclinaison opérationnelle</strong> : rédiger les procédures, chartes et politiques thématiques qui découlent de la PSSI (charte utilisateur, politique de patch, politique de sauvegarde).</li>
      </ol>

      <h2>Pièges à éviter</h2>
      <ul>
        <li><strong>PSSI trop technique</strong> : elle doit être compréhensible par la direction et les utilisateurs, pas seulement par les techniciens.</li>
        <li><strong>PSSI non signée par la direction</strong> : sans signature de la DG, elle n'a pas de force normative.</li>
        <li><strong>PSSI non communiquée</strong> : un document que personne n'a lu n'a aucun effet.</li>
        <li><strong>PSSI jamais révisée</strong> : une PSSI de 2019 non mise à jour ne couvre pas NIS2 ni les menaces actuelles.</li>
        <li><strong>Règles inapplicables</strong> : une PSSI remplie de règles idéales que l'organisation ne peut pas respecter crée un écart dangereux entre politique et pratique.</li>
      </ul>
    </ArticleLayout>
  );
};

export default PssiGuide;
