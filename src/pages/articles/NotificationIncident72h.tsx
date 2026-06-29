import ArticleLayout from "@/components/ArticleLayout";

const NotificationIncident72h = () => {
  return (
    <ArticleLayout
      title="Notification d'incident NIS2 : procédure alerte 24h, rapport 72h et rapport final"
      description="Procédure de notification d'incident NIS2 : alerte précoce 24h, notification complète 72h, rapport final 1 mois. Seuils de déclenchement, plateforme ANSSI et sanctions en cas de non-notification."
      date="29 juin 2026"
      dateISO="2026-06-29"
      readTime="10 min"
      tag="Gestion incidents"
      slug="notification-incident-nis2-24h-72h"
    >
      <p>
        NIS2 impose un calendrier strict de notification des incidents de sécurité significatifs. Contrairement au RGPD qui prévoit 72 heures pour notifier la CNIL, NIS2 ajoute une étape intermédiaire : une alerte précoce dans les 24 heures, suivie d'une notification complète à 72 heures, puis d'un rapport final dans le mois. Ce triple reporting impose de disposer d'un processus rodé avant qu'un incident survienne.
      </p>

      <h2>Quels incidents doivent être notifiés ?</h2>
      <p>
        Tous les incidents ne doivent pas être notifiés. NIS2 cible les incidents "significatifs", définis comme ceux qui causent ou sont susceptibles de causer :
      </p>
      <ul>
        <li><strong>Une perturbation opérationnelle grave</strong> des services fournis — inaccessibilité prolongée, dégradation significative de la qualité de service</li>
        <li><strong>Des pertes financières importantes</strong> pour l'entité concernée</li>
        <li><strong>Des dommages matériels ou immatériels considérables</strong> pour d'autres personnes physiques ou morales</li>
      </ul>
      <p>
        En pratique, les incidents déclenchant la notification NIS2 incluent : les ransomwares avec chiffrement de systèmes critiques, les exfiltrations massives de données, les attaques DDoS prolongées sur des services essentiels, les compromissions de comptes administrateurs, et les incidents affectant la chaîne d'approvisionnement avec impact sur les clients.
      </p>

      <h2>Étape 1 : alerte précoce dans les 24 heures</h2>
      <p>
        Dans les 24 heures suivant la détection de l'incident, l'entité doit envoyer une alerte précoce à l'autorité compétente (l'ANSSI en France pour la plupart des secteurs). L'alerte précoce doit indiquer :
      </p>
      <ul>
        <li>Si l'incident est présumé être le résultat d'un acte illicite ou malveillant</li>
        <li>S'il est susceptible d'avoir un impact transfrontalier (autres États membres affectés)</li>
        <li>Les informations préliminaires disponibles sur la nature et l'étendue de l'incident</li>
      </ul>
      <p>
        L'alerte précoce n'exige pas encore une analyse complète. Son but est d'informer l'autorité pour qu'elle puisse mobiliser ses ressources si nécessaire. En France, elle se fait via la plateforme MonEspaceNIS2 ou les canaux de signalement du CERT-FR.
      </p>

      <h2>Étape 2 : notification complète dans les 72 heures</h2>
      <p>
        Dans les 72 heures suivant la prise de connaissance de l'incident significatif, l'entité doit soumettre une notification complète comportant :
      </p>
      <ul>
        <li><strong>Une évaluation initiale</strong> de l'incident : gravité et impact estimé</li>
        <li><strong>Les indicateurs de compromission</strong> disponibles (IOC : hash de fichiers malveillants, adresses IP attaquantes, domaines malicieux)</li>
        <li><strong>Les mesures prises</strong> pour répondre à l'incident et les mesures en cours</li>
        <li><strong>Une mise à jour</strong> sur l'évaluation transfrontalière si applicable</li>
        <li><strong>La catégorie de l'incident</strong> selon la classification de l'autorité compétente</li>
      </ul>
      <p>
        Si l'entité n'est pas en mesure de fournir toutes les informations dans les 72 heures, elle peut soumettre une mise à jour dans ce délai en indiquant que des informations complémentaires suivront.
      </p>

      <h2>Étape 3 : rapport final dans le mois</h2>
      <p>
        Au plus tard un mois après la soumission de la notification complète, l'entité doit fournir un rapport final d'incident contenant :
      </p>
      <ul>
        <li><strong>Description détaillée</strong> de l'incident : chronologie, vecteur d'attaque, systèmes affectés</li>
        <li><strong>Type de menace</strong> ou cause profonde probable (malware identifié, vulnérabilité exploitée, insider threat)</li>
        <li><strong>Mesures d'atténuation appliquées</strong> et leur efficacité</li>
        <li><strong>Impact réel</strong> quantifié : durée d'indisponibilité, données compromises, pertes financières estimées</li>
        <li><strong>Plan de remédiation</strong> : mesures correctives à long terme pour éviter la récurrence</li>
      </ul>
      <p>
        Si l'incident est toujours en cours au bout d'un mois, un rapport intermédiaire est soumis, suivi d'un rapport final dans le mois suivant la clôture de l'incident.
      </p>

      <h2>La plateforme MonEspaceNIS2</h2>
      <p>
        En France, l'ANSSI a mis en place la plateforme MonEspaceNIS2 pour centraliser les obligations liées à NIS2 :
      </p>
      <ul>
        <li>Enregistrement de l'entité (obligation initiale sous NIS2)</li>
        <li>Notification des incidents significatifs (alertes 24h, rapports 72h et finaux)</li>
        <li>Communication avec l'ANSSI sur les questions de conformité</li>
        <li>Accès aux guides et ressources ANSSI pour la mise en conformité</li>
      </ul>
      <p>
        L'enregistrement sur MonEspaceNIS2 est obligatoire pour toutes les entités essentielles et importantes avant de pouvoir utiliser le canal de notification. Il est fortement recommandé de s'inscrire avant tout incident.
      </p>

      <h2>Sanctions en cas de non-notification</h2>
      <p>
        Le non-respect des obligations de notification constitue une violation NIS2 sanctionnable :
      </p>
      <ul>
        <li>Amendes administratives jusqu'aux plafonds NIS2 (10 M€ / 2% CA pour les entités essentielles)</li>
        <li>Déclaration publique de non-conformité</li>
        <li>Injonction de mise en conformité avec délai imposé</li>
        <li>En cas de récidive, suspension temporaire de certifications ou autorisations</li>
      </ul>

      <h2>Bonnes pratiques pour être prêt avant l'incident</h2>
      <ul>
        <li><strong>Créer un runbook d'incident</strong> incluant la procédure de notification NIS2 étape par étape</li>
        <li><strong>S'inscrire sur MonEspaceNIS2</strong> dès maintenant, sans attendre un incident</li>
        <li><strong>Former l'équipe d'astreinte</strong> sur les délais et le contenu des notifications</li>
        <li><strong>Préparer des templates</strong> de notification (alerte 24h, rapport 72h) à compléter rapidement</li>
        <li><strong>Tester la procédure</strong> lors d'exercices de crise cyber annuels</li>
        <li><strong>Identifier les contacts ANSSI</strong> à prévenir en cas d'incident (CERT-FR, points de contact NIS2)</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Le triple reporting NIS2 (24h, 72h, 1 mois) impose une maturité opérationnelle dans la gestion des incidents. Sans processus formalisé et testé en amont, respecter ces délais en situation de crise est extrêmement difficile. CyberConform aide les PME et ETI à construire leur procédure de réponse aux incidents conforme à NIS2, incluant les templates de notification et les exercices de crise pour valider le dispositif.
      </p>
    </ArticleLayout>
  );
};

export default NotificationIncident72h;
