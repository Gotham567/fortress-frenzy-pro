import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";

const SocManageSiemPme = () => {
  return (
    <ArticleLayout
      title="SOC managé et SIEM pour PME : détecter les attaques 24/7 sans recruter une équipe cyber"
      description="Comprendre le SOC managé (MSSP), le SIEM, l'EDR/XDR et le MDR : fonctionnement, KPIs (MTTD, MTTR), prix indicatifs et critères de choix pour une PME française en 2026."
      date="6 mai 2026"
      dateISO="2026-05-06"
      readTime="16 min"
      tag="SOC managé"
      slug="soc-manage-siem-pme-guide"
    >
      <p>
        Avec la directive <Link to="/actualites/directive-nis2" className="text-primary hover:underline">NIS2</Link> et l'explosion des
        attaques par <Link to="/actualites/ransomware-pme-protection" className="text-primary hover:underline">ransomware</Link>, les PME
        françaises doivent désormais être capables de <strong>détecter et répondre à un incident en quelques minutes</strong>, 24h/24 et
        7j/7. Recruter une équipe interne de 5 analystes cyber étant hors de portée pour la plupart des PME, le <strong>SOC managé</strong>
        (Security Operations Center externalisé) couplé à un <strong>SIEM</strong> est devenu la solution de référence.
      </p>

      <h2>SOC, SIEM, EDR, XDR, MDR : démêler le vocabulaire</h2>
      <ul>
        <li><strong>SOC (Security Operations Center)</strong> : équipe humaine + processus + outils chargés de la détection et de la réponse aux incidents.</li>
        <li><strong>SIEM (Security Information and Event Management)</strong> : plateforme qui collecte, corrèle et analyse les logs de tout le SI (pare-feu, AD, cloud, applications).</li>
        <li><strong>EDR (Endpoint Detection and Response)</strong> : agent installé sur les postes et serveurs pour détecter les comportements malveillants.</li>
        <li><strong>XDR (Extended Detection and Response)</strong> : extension de l'EDR à l'email, au cloud, au réseau et à l'identité.</li>
        <li><strong>MDR (Managed Detection and Response)</strong> : service externalisé combinant outils (EDR/XDR) et analystes 24/7. C'est souvent la porte d'entrée des PME vers un SOC managé.</li>
        <li><strong>SOAR</strong> : automatisation des réponses (playbooks) au-dessus du SIEM.</li>
      </ul>

      <h2>Pourquoi un SOC interne est rarement viable en PME</h2>
      <p>
        Pour assurer une couverture <strong>24/7/365</strong>, il faut au minimum <strong>5 à 6 analystes</strong> (3 niveaux × astreintes
        + congés). Coût annuel chargé : <strong>350 000 à 500 000 € HT</strong>, hors outillage SIEM (50 à 150 k€/an), hors threat
        intelligence et hors locaux sécurisés. Inaccessible pour 95 % des PME.
      </p>

      <h3>Le SOC managé : mutualisation et expertise</h3>
      <p>
        Un <strong>MSSP</strong> (Managed Security Service Provider) mutualise ses analystes sur des dizaines de clients et facture
        généralement entre <strong>1 500 et 8 000 € HT par mois</strong> pour une PME, selon le périmètre (nombre d'endpoints, sources de
        logs, niveau de service).
      </p>

      <h2>Les KPIs à exiger d'un SOC managé</h2>
      <ul>
        <li><strong>MTTD (Mean Time To Detect)</strong> : objectif &lt; 15 minutes pour les alertes critiques.</li>
        <li><strong>MTTR (Mean Time To Respond)</strong> : objectif &lt; 60 minutes pour le confinement.</li>
        <li><strong>Couverture MITRE ATT&amp;CK</strong> : pourcentage de techniques détectées (viser &gt; 70 %).</li>
        <li><strong>Taux de faux positifs</strong> : &lt; 5 % pour ne pas saturer vos équipes.</li>
        <li><strong>SLA de réponse</strong> : engagement contractuel par sévérité (P1, P2, P3).</li>
        <li><strong>Rapports mensuels</strong> exploitables par la direction et l'audit NIS2.</li>
      </ul>

      <h2>Architecture type d'un SOC managé pour PME</h2>
      <p>Un déploiement standard combine généralement :</p>
      <ul>
        <li><strong>EDR/XDR</strong> sur 100 % des endpoints (Microsoft Defender XDR, CrowdStrike, SentinelOne, Sophos).</li>
        <li><strong>Collecte de logs</strong> Active Directory / Entra ID, Microsoft 365, pare-feu, VPN, applications métier critiques.</li>
        <li><strong>SIEM cloud</strong> (Microsoft Sentinel, Splunk, Elastic, Sekoia) avec règles de détection MITRE ATT&amp;CK.</li>
        <li><strong>Threat intelligence</strong> intégrée (IOC, IOA, secteurs ciblés).</li>
        <li><strong>Playbooks SOAR</strong> : isolation automatique d'un poste compromis, blocage IP, désactivation de compte.</li>
        <li><strong>Astreinte humaine 24/7</strong> avec procédure d'escalade vers votre DSI/RSSI.</li>
      </ul>

      <h2>Ce que dit NIS2 sur la détection et la réponse</h2>
      <p>
        L'article 21 de <Link to="/actualites/directive-nis2" className="text-primary hover:underline">NIS2</Link> impose des
        « <strong>mesures de détection, traitement et signalement des incidents</strong> ». Les obligations de notification ANSSI sont
        strictes :
      </p>
      <ul>
        <li><strong>Pré-notification : 24 heures</strong> après prise de connaissance d'un incident significatif.</li>
        <li><strong>Notification complète : 72 heures</strong>.</li>
        <li><strong>Rapport final : 1 mois</strong>.</li>
      </ul>
      <p>
        Sans SOC ni SIEM, ces délais sont quasi impossibles à tenir : la majorité des PME découvrent encore une intrusion <strong>plusieurs
        semaines</strong> après le début de l'attaque (rapport Mandiant 2025 : dwell time médian de 10 jours en Europe).
      </p>

      <h2>Combien ça coûte ? Fourchettes 2026</h2>
      <ul>
        <li><strong>MDR endpoints uniquement (50–100 postes)</strong> : 1 500 à 3 000 € HT/mois.</li>
        <li><strong>SOC managé complet (PME 100–250 salariés)</strong> : 3 000 à 6 000 € HT/mois.</li>
        <li><strong>SOC managé ETI (250–1000 salariés)</strong> : 6 000 à 15 000 € HT/mois.</li>
        <li><strong>Frais de mise en service (one-shot)</strong> : 5 000 à 20 000 € HT.</li>
      </ul>
      <p>
        À comparer au coût moyen d'un ransomware sur PME française : <strong>250 000 à 1 200 000 €</strong> tout compris (rançon,
        reconstruction, perte d'exploitation, juridique, communication).
      </p>

      <h2>Comment choisir son SOC managé ? Les 10 critères clés</h2>
      <ol>
        <li>Centre d'opérations <strong>basé en France ou en UE</strong> (souveraineté, RGPD).</li>
        <li>Qualification <strong>PASSI</strong> ou <strong>SecNumCloud</strong> selon le niveau de criticité.</li>
        <li>Couverture <strong>24/7/365 humaine</strong>, pas seulement automatisée.</li>
        <li>SIEM <strong>cloud-natif</strong> ou possibilité de SIEM on-premise selon vos contraintes.</li>
        <li>Compatibilité avec votre stack (Microsoft 365, Google Workspace, AWS, Azure, GCP).</li>
        <li>Intégration des <strong>logs OT/IoT</strong> si environnement industriel.</li>
        <li>SLA contractuels mesurables (MTTD, MTTR, disponibilité).</li>
        <li>Capacité de <strong>réponse à incident</strong> (CSIRT) incluse ou en option.</li>
        <li>Rapports mensuels alignés sur NIS2 / ISO 27001.</li>
        <li>Réversibilité : récupération de vos logs en cas de changement de prestataire.</li>
      </ol>

      <h2>SOC managé ou RSSI externalisé : que choisir ?</h2>
      <p>
        Les deux sont <strong>complémentaires</strong>, pas concurrents. Le{" "}
        <Link to="/actualites/rssi-externalise-guide" className="text-primary hover:underline">RSSI externalisé (vCISO)</Link> pilote la
        gouvernance, la conformité et la stratégie. Le SOC managé opère la détection et la réponse au quotidien. Une PME mature combine
        idéalement les deux : vCISO 1 à 3 jours/mois + SOC managé 24/7.
      </p>

      <h2>Erreurs fréquentes à éviter</h2>
      <ul>
        <li>Acheter un SIEM sans analystes : la donnée s'accumule sans personne pour l'exploiter.</li>
        <li>Ne brancher que les pare-feu : 80 % des attaques modernes passent par l'identité (Entra ID, Active Directory).</li>
        <li>Oublier le <strong>cloud</strong> (Microsoft 365 audit logs, AWS CloudTrail) où se déroulent désormais la majorité des attaques.</li>
        <li>Ne pas tester les playbooks (exercices red team / purple team annuels).</li>
        <li>Confondre antivirus et EDR : un AV traditionnel ne détecte pas un attaquant « living off the land ».</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Un SOC managé n'est plus un luxe réservé aux grands groupes : c'est une <strong>brique essentielle</strong> de la conformité NIS2 et
        de la résilience cyber des PME. Bien choisi, il transforme une organisation aveugle en une organisation capable de détecter et de
        contenir une attaque avant qu'elle ne devienne une crise existentielle.
      </p>

      <p>
        <strong>CyberConform</strong> aide les PME et ETI à cadrer leur besoin SOC, à rédiger l'appel d'offres et à piloter le MSSP retenu.{" "}
        <Link to="/#contact" className="text-primary hover:underline">Contactez nos experts</Link> pour un diagnostic gratuit de 15 minutes.
      </p>
    </ArticleLayout>
  );
};

export default SocManageSiemPme;