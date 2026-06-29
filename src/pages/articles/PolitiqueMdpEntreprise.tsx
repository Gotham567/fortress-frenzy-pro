import ArticleLayout from "@/components/ArticleLayout";

const PolitiqueMdpEntreprise = () => {
  return (
    <ArticleLayout
      title="Politique de mots de passe en entreprise : exigences CNIL, ANSSI et bonnes pratiques 2026"
      description="Guide complet sur la politique de mots de passe en entreprise : recommandations CNIL et ANSSI, longueur minimale, complexité, MFA, gestionnaires de mots de passe et erreurs à éviter."
      date="28 juin 2026"
      dateISO="2026-06-28"
      readTime="11 min"
      tag="Bonnes pratiques"
      slug="politique-mots-de-passe-entreprise-cnil-anssi"
    >
      <p>
        La politique de mots de passe est l'une des mesures de sécurité les plus basiques mais aussi l'une des plus mal appliquées en entreprise. En 2026, des dizaines d'entreprises se font encore sanctionner par la CNIL pour des mots de passe insuffisamment robustes ou stockés en clair. Ce guide vous donne les recommandations officielles CNIL et ANSSI et les bonnes pratiques à mettre en place immédiatement.
      </p>

      <h2>Pourquoi la politique de mots de passe est une obligation légale</h2>
      <p>
        L'article 32 du RGPD impose des "mesures techniques appropriées" pour garantir la sécurité des données personnelles. La CNIL considère qu'une politique de mots de passe insuffisante constitue un manquement à l'article 32. Elle a prononcé des dizaines de sanctions liées aux mots de passe : stockage en clair, mots de passe trop courts, absence d'expiration pour les comptes à privilèges, absence de MFA sur les accès aux données personnelles.
      </p>
      <p>
        NIS2 (article 21) impose également des mesures d'authentification renforcées pour les entités essentielles et importantes. Pour les comptes donnant accès à des systèmes critiques, le MFA est désormais une exigence implicite de la directive.
      </p>

      <h2>Les recommandations CNIL et ANSSI 2021 (toujours en vigueur)</h2>
      <p>
        En 2021, la CNIL a mis à jour ses recommandations sur les mots de passe. L'ANSSI a publié un guide complémentaire. Ces recommandations remplacent les règles antérieures (expiration tous les 90 jours, complexité maximale) par une approche plus pragmatique :
      </p>

      <h3>Longueur : le critère le plus important</h3>
      <p>
        La CNIL recommande des minimums de longueur selon le contexte d'authentification :
      </p>
      <ul>
        <li><strong>Sans autre mesure de sécurité :</strong> 12 caractères minimum avec 4 types de caractères (minuscules, majuscules, chiffres, caractères spéciaux), ou 14 caractères minimum avec 3 types</li>
        <li><strong>Avec restriction des tentatives (3-10 essais, puis blocage) :</strong> 8 caractères minimum avec 3 types</li>
        <li><strong>Avec MFA :</strong> Le mot de passe peut être plus court si le second facteur est suffisamment robuste</li>
        <li><strong>Comptes à privilèges (admin, root, DBA) :</strong> 20 caractères minimum recommandés par l'ANSSI, ou utilisation d'une phrase de passe</li>
      </ul>

      <h3>Ce que la CNIL ne recommande PLUS</h3>
      <p>
        L'ancienne recommandation d'expiration systématique tous les 90 jours est abandonnée pour les utilisateurs standards. La CNIL suit désormais les recommandations du NIST américain et de l'ANSSI : le renouvellement forcé régulier conduit les utilisateurs à créer des mots de passe plus faibles (Mot2passe1, Mot2passe2…). La CNIL recommande désormais :
      </p>
      <ul>
        <li>Renouvellement uniquement en cas de suspicion de compromission</li>
        <li>Vérification contre les listes de mots de passe compromis (bases HaveIBeenPwned) lors de la création</li>
        <li>Expiration maintenue pour les comptes à privilèges (12 mois maximum) et les comptes inactifs</li>
      </ul>

      <h2>MFA : de recommandation à obligation</h2>
      <p>
        Le MFA (Multi-Factor Authentication) ou authentification à deux facteurs (2FA) était une recommandation. Il devient une quasi-obligation dans plusieurs contextes :
      </p>
      <ul>
        <li><strong>Accès aux données personnelles :</strong> La CNIL considère le MFA comme "indispensable" pour les accès aux données personnelles en masse (bases de données, backoffice avec données clients)</li>
        <li><strong>Accès administrateur :</strong> MFA obligatoire sur tous les comptes admin (Windows, Linux, Cloud AWS/Azure/GCP, routeurs, pare-feux)</li>
        <li><strong>Accès distants (VPN, RDP, SSH) :</strong> Le MFA est la mesure numéro 1 recommandée par l'ANSSI pour sécuriser les accès distants</li>
        <li><strong>Accès aux outils en ligne critiques :</strong> Messagerie professionnelle, outils collaboratifs (M365, Google Workspace), CRM, logiciels de paie</li>
      </ul>
      <p>
        Les méthodes MFA acceptables selon l'ANSSI : TOTP (Google Authenticator, Authy), clé FIDO2/WebAuthn (YubiKey, clé de sécurité Google), application d'authentification push. Les méthodes à éviter pour les accès très sensibles : SMS (SIM swapping possible), email de confirmation.
      </p>

      <h2>Stockage des mots de passe : obligation de hachage</h2>
      <p>
        La CNIL sanctionne systématiquement le stockage des mots de passe en clair ou avec des algorithmes insuffisants. Les règles :
      </p>
      <ul>
        <li><strong>Interdit :</strong> Stockage en clair, chiffrement réversible (AES, RSA), MD5, SHA-1 sans salt</li>
        <li><strong>Acceptable avec paramètres corrects :</strong> bcrypt (facteur ≥ 10), scrypt, Argon2</li>
        <li><strong>Recommandé :</strong> Argon2id (recommandé par l'OWASP 2023), bcrypt avec facteur de travail ≥ 12, PBKDF2 avec HMAC-SHA-256 et ≥ 600 000 itérations</li>
        <li><strong>Impératif :</strong> Utilisation d'un salt unique par mot de passe (contre les rainbow tables)</li>
      </ul>

      <h2>Gestionnaire de mots de passe : la solution pour les équipes</h2>
      <p>
        L'être humain est incapable de retenir des dizaines de mots de passe de 12+ caractères uniques. La solution : un gestionnaire de mots de passe d'entreprise. Les options :
      </p>
      <ul>
        <li><strong>Bitwarden for Business :</strong> Open source, hébergeable en auto-hébergement, à partir de 3 $/utilisateur/mois. Recommandé pour les PME soucieuses de souveraineté des données</li>
        <li><strong>1Password Business :</strong> Solution mature, très bonne ergonomie, 7,99 $/utilisateur/mois. Intégration SSO, politiques d'entreprise</li>
        <li><strong>Dashlane for Business :</strong> Interface soignée, fonctionnalités de monitoring dark web, 8 $/utilisateur/mois</li>
        <li><strong>HashiCorp Vault :</strong> Pour les secrets applicatifs et les comptes à privilèges en environnement DevOps. Open source, complexité d'administration plus élevée</li>
      </ul>

      <h2>Comment documenter et auditer votre politique</h2>
      <p>
        Pour être opposable à la CNIL, votre politique de mots de passe doit être :
      </p>
      <ul>
        <li><strong>Documentée :</strong> Politique écrite, signée par la direction, intégrée dans la PSSI ou le règlement intérieur numérique</li>
        <li><strong>Communiquée :</strong> Formation de tous les utilisateurs à la politique, avec attestation de prise de connaissance</li>
        <li><strong>Techniquement appliquée :</strong> Configuration GPO Windows ou paramètres d'annuaire imposant les règles (longueur, historique), pas seulement une note de service</li>
        <li><strong>Auditée :</strong> Vérification régulière que les comptes respectent la politique (audit des comptes AD, scan Mimikatz sur un environnement de test)</li>
      </ul>

      <div className="info-box">
        <h4>Audit de votre politique d'authentification</h4>
        <p>CyberConform audite votre politique de mots de passe et d'authentification au regard des recommandations CNIL, ANSSI et NIS2 : vérification de la configuration AD/IdP, stockage des mots de passe applicatifs, déploiement MFA et conformité RGPD. À partir de 1 500 € HT.</p>
      </div>
    </ArticleLayout>
  );
};

export default PolitiqueMdpEntreprise;
