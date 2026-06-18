import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";

const SecuriteMicrosoft365 = () => {
  return (
    <ArticleLayout
      title="Sécurité Microsoft 365 en entreprise : guide complet 2026 pour PME et ETI"
      description="Durcissement Microsoft 365 : MFA, Conditional Access, Defender, Purview, DLP, Secure Score, sauvegardes tierces et conformité NIS2, RGPD et ISO 27001 pour les PME françaises."
      date="10 mai 2026"
      dateISO="2026-05-10"
      readTime="18 min"
      tag="Microsoft 365"
      slug="securite-microsoft-365-entreprise-guide"
    >
      <p>
        <strong>Microsoft 365</strong> est aujourd'hui la plateforme collaborative la plus déployée dans les PME et ETI françaises. Messagerie Exchange Online,
        SharePoint, OneDrive, Teams, Entra ID : un seul compte compromis donne accès à l'ensemble du patrimoine informationnel de l'entreprise. Pourtant,
        la configuration par défaut de Microsoft 365 reste insuffisante pour répondre aux exigences de la <Link to="/actualites/directive-nis2" className="text-primary hover:underline">directive NIS2</Link>,
        du <Link to="/actualites/audit-rgpd-entreprises" className="text-primary hover:underline">RGPD</Link> ou d'une <Link to="/actualites/cyber-assurance-pme-guide" className="text-primary hover:underline">cyber-assurance</Link>. Ce guide
        détaille comment durcir Microsoft 365 de manière pragmatique, sans bloquer la productivité.
      </p>

      <h2>Pourquoi Microsoft 365 est une cible prioritaire</h2>
      <p>
        Les attaquants ciblent massivement Microsoft 365 pour trois raisons : la <strong>centralisation des identités</strong> (Entra ID, anciennement Azure AD),
        la <strong>richesse des données</strong> stockées (e-mails, contrats, fichiers RH, données clients) et le <strong>nombre élevé de configurations laxistes</strong>
        héritées des migrations rapides post-Covid. Les techniques d'attaque les plus fréquentes en 2026 sont :
      </p>
      <ul>
        <li><strong>Phishing AiTM</strong> (Adversary-in-the-Middle) qui contourne la MFA classique via vol de cookies de session.</li>
        <li><strong>Consent phishing</strong> : l'utilisateur accorde à une application malveillante des permissions OAuth sur sa boîte.</li>
        <li><strong>Password spraying</strong> sur les comptes legacy (IMAP, POP, SMTP AUTH) toujours actifs.</li>
        <li><strong>Business Email Compromise</strong> (BEC) : usurpation d'identité pour fraude au virement.</li>
        <li><strong>Ransomware via OneDrive / SharePoint</strong> : chiffrement des fichiers synchronisés depuis un poste compromis.</li>
      </ul>

      <h2>Le socle indispensable : identités et authentification</h2>

      <h3>Activer une MFA résistante au phishing pour 100% des comptes</h3>
      <p>
        La MFA par SMS ou push simple est désormais contournable. Microsoft recommande la <strong>Microsoft Authenticator avec number matching</strong> au minimum, et idéalement
        des clés <strong>FIDO2 / Passkeys</strong> pour les administrateurs et les utilisateurs sensibles (direction, finance, RH). Couplez cette mesure à une approche
        <Link to="/actualites/zero-trust-mfa-pme-guide" className="text-primary hover:underline"> Zero Trust</Link> globale.
      </p>

      <h3>Bloquer l'authentification legacy</h3>
      <p>
        Les protocoles <strong>POP, IMAP, SMTP AUTH, MAPI/Exchange ActiveSync basic</strong> ne supportent pas la MFA et sont la première porte d'entrée du password spraying.
        Désactivez-les via Entra ID Conditional Access (« Block legacy authentication »).
      </p>

      <h3>Conditional Access : la pierre angulaire</h3>
      <ul>
        <li>Imposer la MFA pour toutes les connexions hors réseau de confiance.</li>
        <li>Bloquer les connexions depuis des pays non utilisés (impossible travel, geo-blocking).</li>
        <li>Imposer des appareils conformes (Intune compliance) pour accéder aux données sensibles.</li>
        <li>Forcer la réauthentification pour les opérations à risque (changement de mot de passe, ajout d'un appareil).</li>
        <li>Activer <strong>Token Protection</strong> et <strong>Continuous Access Evaluation</strong> contre le vol de jetons.</li>
      </ul>

      <h3>Protéger les comptes à privilèges</h3>
      <ul>
        <li>Comptes administrateurs séparés (jamais utilisés pour la bureautique courante).</li>
        <li><strong>Privileged Identity Management (PIM)</strong> : élévation Just-In-Time avec validation.</li>
        <li>Clés FIDO2 obligatoires pour les rôles Global Admin, Exchange Admin, SharePoint Admin.</li>
        <li>Revue trimestrielle des rôles privilégiés.</li>
      </ul>

      <h2>Sécuriser Exchange Online et la messagerie</h2>
      <ul>
        <li><strong>SPF, DKIM, DMARC</strong> configurés en mode <code>reject</code> sur tous les domaines (cf. notre guide <Link to="/actualites/phishing-protection-entreprise" className="text-primary hover:underline">phishing</Link>).</li>
        <li><strong>Microsoft Defender for Office 365 (Plan 1 ou 2)</strong> : Safe Links, Safe Attachments, anti-phishing avancé.</li>
        <li>Policies <strong>anti-spoofing</strong> et <strong>impersonation protection</strong> sur les dirigeants.</li>
        <li>Désactiver les <strong>règles de transfert externe automatique</strong> (utilisées dans 80 % des BEC).</li>
        <li>Bandeau « <em>External</em> » sur les e-mails externes.</li>
        <li>Activer <strong>Microsoft Purview Audit (Premium)</strong> pour conserver les logs au-delà de 90 jours.</li>
      </ul>

      <h2>SharePoint, OneDrive et Teams</h2>
      <ul>
        <li>Limiter le partage externe à des domaines autorisés (allow-list).</li>
        <li>Désactiver le partage par lien anonyme « toute personne disposant du lien ».</li>
        <li>Activer la <strong>quarantaine OneDrive</strong> en cas d'activité suspecte (ransomware).</li>
        <li>Politiques de rétention Purview pour conserver les versions et supprimer en fin de cycle de vie.</li>
        <li>Restreindre la création d'équipes et de sites à des utilisateurs habilités.</li>
        <li>Bloquer les invités externes par défaut sur Teams sensibles (direction, finance).</li>
      </ul>

      <h2>DLP, étiquetage et classification avec Microsoft Purview</h2>
      <p>
        <strong>Microsoft Purview</strong> permet de classifier automatiquement les contenus (RGPD, données financières, IP) et d'appliquer des règles <strong>DLP</strong>
        empêchant l'exfiltration. Pour une PME, démarrez avec :
      </p>
      <ul>
        <li>3 à 5 étiquettes de confidentialité maximum (Public, Interne, Confidentiel, Restreint).</li>
        <li>Politiques DLP sur les IBAN, numéros de carte, NIR, données clients exportées massivement.</li>
        <li>Chiffrement automatique des documents « Confidentiel » via Azure Information Protection.</li>
        <li>Alertes vers le SOC ou le RSSI en cas de violation.</li>
      </ul>

      <h2>Detection et réponse : Defender XDR et Sentinel</h2>
      <p>
        Pour une PME, <strong>Microsoft Defender for Business</strong> (inclus dans Microsoft 365 Business Premium) couvre l'EDR sur les postes. Les ETI passent à
        <strong> Microsoft 365 E5 / Defender XDR</strong> pour corréler identités, e-mails, postes et cloud apps. Au-delà, <strong>Microsoft Sentinel</strong> joue le rôle
        de <Link to="/actualites/soc-manage-siem-pme-guide" className="text-primary hover:underline">SIEM</Link> et peut être externalisé à un MSSP.
      </p>

      <h2>Sauvegardes : le mythe du « Microsoft sauvegarde tout »</h2>
      <p>
        Microsoft applique une <strong>responsabilité partagée</strong> : la disponibilité de la plateforme est leur responsabilité, la <strong>protection de vos données
        contre la suppression, le ransomware ou l'erreur humaine est la vôtre</strong>. La corbeille SharePoint/OneDrive est limitée à 93 jours et n'offre pas de protection
        contre un ransomware massif. Une <strong>sauvegarde tierce</strong> (Veeam, Acronis, Hornetsecurity, Synology Active Backup) est indispensable et exigée par la
        plupart des cyber-assurances. Voir notre guide <Link to="/actualites/sauvegardes-3-2-1-pra-pca-pme" className="text-primary hover:underline">sauvegardes 3-2-1 et PRA</Link>.
      </p>

      <h2>Mesurer son niveau : Microsoft Secure Score</h2>
      <p>
        Le <strong>Secure Score</strong> du centre Defender donne une note sur 100 % et une liste priorisée d'actions. Un objectif réaliste pour une PME est
        <strong> 65 à 75 %</strong> ; en dessous de 40 %, l'environnement est anormalement exposé. Suivez l'évolution mensuelle dans votre tableau de bord cyber.
      </p>

      <h2>Conformité : ce que NIS2, RGPD et ISO 27001 exigent</h2>
      <ul>
        <li><strong>NIS2</strong> : gestion des accès, MFA, journalisation, gestion des incidents — directement couverts par les bonnes pratiques ci-dessus.</li>
        <li><strong>RGPD</strong> : localisation des données (EU Data Boundary activé par défaut depuis 2024), DPA Microsoft, durées de conservation Purview.</li>
        <li><strong>ISO 27001</strong> : Microsoft 365 est certifié, mais votre configuration et vos processus doivent l'être également.</li>
        <li><strong>Health Data Hosting (HDS)</strong> : Microsoft est certifié HDS, mais la responsabilité de configuration reste celle du client.</li>
      </ul>

      <h2>Feuille de route 90 jours pour sécuriser Microsoft 365</h2>
      <ol>
        <li><strong>J0 — J30</strong> : audit Secure Score, MFA généralisée, blocage de l'auth legacy, séparation des comptes admin.</li>
        <li><strong>J30 — J60</strong> : Conditional Access (geo, devices, risk-based), Defender for Office 365, DMARC reject, désactivation des règles de forward externe.</li>
        <li><strong>J60 — J90</strong> : Purview (étiquettes, DLP, audit Premium), restrictions de partage SharePoint, sauvegarde tierce, supervision SOC.</li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        Sécuriser Microsoft 365 n'est pas un projet ponctuel mais un <strong>processus continu</strong> : nouvelles fonctionnalités tous les mois, évolution des menaces,
        rotation des collaborateurs. Mettre en place un <strong>plan trimestriel de revue</strong> (Secure Score, Conditional Access, partages externes, comptes inactifs)
        permet de maintenir un niveau de sécurité conforme aux exigences NIS2 et aux attentes d'une cyber-assurance.
      </p>
    </ArticleLayout>
  );
};

export default SecuriteMicrosoft365;