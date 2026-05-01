import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";

const SauvegardesPraPme = () => {
  return (
    <ArticleLayout
      title="Sauvegardes 3-2-1, PRA et PCA : guide pratique pour PME face aux ransomwares"
      description="Stratégie 3-2-1-1-0, sauvegardes immuables, PRA et PCA : guide complet pour protéger votre PME contre ransomwares et incidents majeurs. Méthodologie, RTO/RPO, coûts et conformité NIS2."
      date="2 mai 2026"
      dateISO="2026-05-02"
      readTime="16 min"
      tag="Sauvegardes & PRA"
      slug="sauvegardes-3-2-1-pra-pca-pme"
    >
      <p>
        Quand une attaque par <strong>ransomware</strong> frappe une PME, la qualité des <strong>sauvegardes</strong> et l'existence d'un{" "}
        <strong>plan de reprise d'activité (PRA)</strong> font la différence entre une remise en service en quelques jours et un dépôt de bilan.
        Selon l'ANSSI et le CESIN, près de <strong>40 % des PME victimes</strong> d'un ransomware en 2024–2025 n'ont pas pu restaurer leurs
        données : sauvegardes chiffrées par l'attaquant, supports inaccessibles ou jamais testés. Ce guide explique comment construire une
        stratégie de sauvegarde réellement résiliente.
      </p>

      <h2>La règle 3-2-1, et son évolution moderne 3-2-1-1-0</h2>
      <p>
        La règle <strong>3-2-1</strong> est le standard historique : <strong>3 copies</strong> de chaque donnée, sur <strong>2 supports
        différents</strong>, dont <strong>1 hors site</strong>. Face à la sophistication des ransomwares, elle a évolué vers la règle{" "}
        <strong>3-2-1-1-0</strong> :
      </p>
      <ul>
        <li><strong>3</strong> copies des données.</li>
        <li><strong>2</strong> supports de stockage différents (disque, bande, cloud objet).</li>
        <li><strong>1</strong> copie hors site géographiquement.</li>
        <li><strong>1</strong> copie <strong>immuable ou hors ligne (air-gap)</strong>, inaccessible à un attaquant.</li>
        <li><strong>0</strong> erreur lors du test de restauration.</li>
      </ul>

      <h2>Sauvegardes immuables : le rempart anti-ransomware</h2>
      <p>
        Une sauvegarde <strong>immuable</strong> ne peut être modifiée ni supprimée pendant une période définie, même par un administrateur. Les
        principales technologies en 2026 :
      </p>
      <ul>
        <li><strong>S3 Object Lock</strong> en mode « compliance » (AWS S3, Wasabi, OVHcloud, Scaleway).</li>
        <li><strong>Veeam Hardened Repository</strong> sur Linux avec immutabilité native.</li>
        <li><strong>Bandes LTO</strong> sorties du robot et stockées dans un coffre.</li>
        <li><strong>Sauvegardes air-gap</strong> sur un système physiquement déconnecté.</li>
      </ul>
      <p>
        L'objectif : qu'un attaquant ayant compromis l'Active Directory et le serveur de sauvegarde ne puisse <strong>pas</strong> détruire les
        copies de secours. C'est aujourd'hui une exigence de fait pour décrocher une{" "}
        <Link to="/actualites/cyber-assurance-pme-guide" className="text-primary hover:underline">cyber-assurance</Link> et un point de contrôle
        majeur de NIS2.
      </p>

      <h2>Définir RTO et RPO pour chaque service</h2>
      <p>Avant de choisir une technologie, il faut définir deux indicateurs métier essentiels :</p>
      <ul>
        <li><strong>RTO (Recovery Time Objective)</strong> : durée maximale acceptable d'indisponibilité. Combien de temps mon entreprise peut-elle survivre sans ce service ?</li>
        <li><strong>RPO (Recovery Point Objective)</strong> : perte de données maximale acceptable. Combien d'heures de travail puis-je perdre ?</li>
      </ul>

      <h3>Exemples typiques pour une PME</h3>
      <table>
        <thead>
          <tr><th>Service</th><th>RTO cible</th><th>RPO cible</th><th>Solution adaptée</th></tr>
        </thead>
        <tbody>
          <tr><td>Messagerie M365</td><td>4 h</td><td>15 min</td><td>Sauvegarde tierce SaaS (AvePoint, Veeam M365)</td></tr>
          <tr><td>ERP / production</td><td>4 h</td><td>1 h</td><td>Réplication + sauvegarde immuable</td></tr>
          <tr><td>Bureautique / fichiers</td><td>24 h</td><td>4 h</td><td>Sauvegarde quotidienne + cloud objet</td></tr>
          <tr><td>Archives</td><td>72 h</td><td>24 h</td><td>Bande LTO ou cloud froid (Glacier, S3 Glacier)</td></tr>
        </tbody>
      </table>

      <h2>PRA vs PCA : ne pas confondre</h2>
      <ul>
        <li><strong>PCA (Plan de Continuité d'Activité)</strong> : maintenir l'activité <em>pendant</em> la crise (locaux de repli, mode dégradé, télétravail forcé, communication client).</li>
        <li><strong>PRA (Plan de Reprise d'Activité)</strong> : redémarrer le SI <em>après</em> l'incident (restauration, reconstruction, retour à la normale).</li>
      </ul>
      <p>
        Les deux sont complémentaires et obligatoires au titre de NIS2 (article 21). Pour aller plus loin, consultez notre guide dédié au{" "}
        <Link to="/actualites/plan-continuite-activite-cybersecurite" className="text-primary hover:underline">plan de continuité d'activité</Link>.
      </p>

      <h2>Méthodologie en 7 étapes pour bâtir son PRA</h2>
      <ol>
        <li><strong>Cartographier</strong> les processus métier et leurs dépendances IT (BIA — Business Impact Analysis).</li>
        <li><strong>Définir RTO et RPO</strong> par service avec les directions métier.</li>
        <li><strong>Choisir l'architecture</strong> de sauvegarde et de reprise (sur site, cloud, hybride).</li>
        <li><strong>Documenter les procédures</strong> de bascule et de restauration, étape par étape.</li>
        <li><strong>Sécuriser les sauvegardes</strong> : immuabilité, chiffrement, comptes dédiés non liés à l'AD.</li>
        <li><strong>Tester</strong> au moins une restauration complète par an et un exercice de crise tabletop.</li>
        <li><strong>Améliorer en continu</strong> après chaque test, incident ou changement majeur.</li>
      </ol>

      <h2>Le test de restauration : le seul indicateur qui compte</h2>
      <p>
        Une sauvegarde non testée est une sauvegarde présumée perdue. L'ANSSI recommande au minimum un <strong>test annuel complet</strong> et
        des tests partiels trimestriels. Lors d'un test, mesurez réellement :
      </p>
      <ul>
        <li>Le temps total de restauration (RTO réel vs cible).</li>
        <li>L'intégrité des données restaurées (cohérence applicative, pas seulement fichiers).</li>
        <li>La capacité à restaurer <strong>sans</strong> les comptes admins compromis (scénario ransomware).</li>
        <li>La documentation : un opérateur junior doit pouvoir suivre la procédure.</li>
      </ul>

      <h2>Coûts indicatifs pour une PME de 100 personnes</h2>
      <ul>
        <li>Solution de sauvegarde (Veeam, Nakivo, Acronis) : 4 000 à 10 000 € HT / an.</li>
        <li>Sauvegarde immuable cloud (1 To, S3 Object Lock) : 50 à 200 € HT / mois selon le fournisseur.</li>
        <li>Sauvegarde M365 tierce : 3 à 5 € HT / utilisateur / mois.</li>
        <li>Site de repli froid (cloud) : 500 à 2 000 € HT / mois.</li>
        <li>Élaboration et test du PRA par un expert : 12 000 à 25 000 € HT en année 1.</li>
      </ul>

      <h2>Conformité NIS2, ISO 27001 et cyber-assurance</h2>
      <ul>
        <li><strong>NIS2 (article 21)</strong> : exigence explicite de sauvegardes et de plans de continuité testés.</li>
        <li><strong>ISO 27001:2022</strong> : contrôles A.5.29, A.5.30, A.8.13 (continuité, sauvegardes, redondance).</li>
        <li><strong>DORA</strong> : tests de résilience opérationnelle pour le secteur financier.</li>
        <li><strong>Cyber-assurance</strong> : sauvegardes immuables hors ligne désormais exigées par la majorité des assureurs.</li>
      </ul>

      <h2>10 bonnes pratiques anti-ransomware pour les sauvegardes</h2>
      <ul>
        <li>Comptes de sauvegarde isolés de l'Active Directory de production.</li>
        <li>MFA résistant au phishing sur la console de sauvegarde.</li>
        <li>Au moins une copie immuable ou réellement déconnectée.</li>
        <li>Chiffrement des sauvegardes au repos et en transit.</li>
        <li>Supervision et alerte sur toute suppression ou échec de job.</li>
        <li>Rétention longue (≥ 30 jours) pour détecter les chiffrements lents (slow ransomware).</li>
        <li>Sauvegarde explicite des PRA, des mots de passe et de la documentation.</li>
        <li>Sauvegarde des SaaS critiques (M365, Google Workspace, Salesforce, GitHub).</li>
        <li>Restauration testée hors connexion réseau de production.</li>
        <li>Revue annuelle des accès et des droits sur l'infrastructure de sauvegarde.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Une stratégie de sauvegarde et un PRA solides sont aujourd'hui les <strong>derniers remparts</strong> face aux ransomwares. Pour une PME,
        passer de la règle 3-2-1 à 3-2-1-1-0, intégrer l'immuabilité et tester réellement les restaurations représente un investissement modeste
        au regard des conséquences d'une attaque réussie : <strong>coût moyen 270 000 €</strong> et 21 jours d'indisponibilité.
      </p>

      <p>
        Pour aller plus loin, consultez notre guide{" "}
        <Link to="/actualites/ransomware-pme-protection" className="text-primary hover:underline">Ransomware PME : prévention et réaction</Link>{" "}
        et notre dossier{" "}
        <Link to="/actualites/cyber-assurance-pme-guide" className="text-primary hover:underline">Cyber-assurance pour PME</Link>.
      </p>

      <p>
        <strong>CyberConform</strong> conçoit, déploie et teste vos plans de sauvegarde et de reprise d'activité.{" "}
        <Link to="/#contact" className="text-primary hover:underline">Contactez-nous</Link> pour un audit gratuit de 15 minutes.
      </p>
    </ArticleLayout>
  );
};

export default SauvegardesPraPme;