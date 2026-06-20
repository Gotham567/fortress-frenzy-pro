import ArticleLayout from "@/components/ArticleLayout";

const GestionCriseCyber = () => {
  return (
    <ArticleLayout
      title="Gestion de crise cyber : plan de communication et cellule de crise"
      description="Comment organiser votre cellule de crise cyber, gérer la communication interne et externe lors d'un incident, et respecter les obligations de notification NIS2 et RGPD."
      date="12 juin 2026"
      dateISO="2026-06-12"
      readTime="12 min"
      tag="Gestion de crise"
      slug="gestion-crise-cyber-plan-communication"
    >
      <p>
        Une cyberattaque majeure est avant tout une crise d'entreprise. Au-delà des aspects techniques — containment, investigation forensique, restauration des systèmes — la dimension humaine, organisationnelle et communicationnelle est souvent sous-estimée. Pourtant, la manière dont une organisation gère la communication pendant et après une crise cyber détermine en grande partie son niveau de réputation, de confiance client et de responsabilité légale. Ce guide vous aide à construire votre plan de gestion de crise cyber et votre stratégie de communication.
      </p>

      <h2>1. La cellule de crise cyber : organisation et rôles</h2>

      <h3>1.1. Composition de la cellule</h3>
      <p>
        Une cellule de crise cyber efficace réunit des profils complémentaires. Le <strong>Directeur Général</strong> assure la responsabilité finale des décisions et la communication externe de haut niveau. Le <strong>DSI/RSSI</strong> pilote la réponse technique. Le <strong>Directeur Juridique</strong> gère la conformité réglementaire (notification RGPD, NIS2, dépôt de plainte). Le <strong>Directeur de la Communication</strong> coordonne les messages internes et externes. Les <strong>RH</strong> gèrent la communication collaborateurs et les mesures d'organisation du travail. Un <strong>prestataire CERT externalisé</strong> complète la cellule avec l'expertise technique nécessaire si l'équipe interne est insuffisante.
      </p>

      <h3>1.2. La salle de crise et les outils</h3>
      <p>
        Anticipez le fait que vos systèmes de communication habituels (messagerie, Teams, Slack) seront peut-être compromis ou indisponibles. Préservez des canaux alternatifs : numéros de téléphone mobiles personnels des membres de la cellule, groupe WhatsApp d'urgence, salle de réunion physique dédiée. Ayez à disposition hors réseau : liste des contacts clés (ANSSI, assureur cyber, avocats, prestataires CERT), procédures d'escalade, liste des systèmes critiques et leurs propriétaires.
      </p>

      <h2>2. Les premières heures : la phase d'urgence</h2>

      <h3>2.1. Décision d'isolation et impact opérationnel</h3>
      <p>
        La décision d'isoler les systèmes compromis est souvent le premier dilemme critique. L'isolation stoppe la propagation mais peut paralyser l'activité. Il faut arbitrer rapidement entre continuité opérationnelle et endiguement de l'attaque. Pour un rançongiciel, l'isolation est impérative et immédiate. Pour une exfiltration de données, l'isolation peut être différée le temps de comprendre le périmètre. Documentez chaque décision avec son heure et sa justification.
      </p>

      <h3>2.2. La communication interne initiale</h3>
      <p>
        Dans les premières heures, les collaborateurs constateront les dysfonctionnements. Un message interne rapide et factuel est nécessaire pour éviter les rumeurs et les comportements contreproductifs (tentatives de reconnexion qui peuvent aggraver la situation, communication sur les réseaux sociaux). Le message initial : "Nous faisons face à un incident informatique. Nos équipes sont mobilisées. Merci de ne pas allumer/éteindre vos postes et d'attendre les consignes. Plus d'information dans [délai]."
      </p>

      <h2>3. Les obligations légales de notification</h2>

      <h3>3.1. Notification ANSSI (NIS2)</h3>
      <p>
        Pour les entités couvertes par NIS2, la notification à l'ANSSI est obligatoire dans des délais stricts. Une <strong>alerte préliminaire</strong> doit être transmise dans les <strong>24 heures</strong> suivant la connaissance de l'incident. Une <strong>notification d'incident</strong> détaillée doit suivre dans les <strong>72 heures</strong>, incluant une évaluation préliminaire de la gravité, des indicateurs de compromission et des mesures prises. Un <strong>rapport final</strong> est attendu dans le mois suivant la résolution. Les sanctions pour non-notification peuvent atteindre 10 millions d'euros ou 2 % du CA mondial pour les entités essentielles.
      </p>

      <h3>3.2. Notification CNIL (RGPD)</h3>
      <p>
        Si l'incident implique une violation de données personnelles susceptible de créer un risque pour les droits et libertés des personnes concernées, la notification à la CNIL est obligatoire dans les <strong>72 heures</strong> après la découverte (article 33 RGPD). Si le risque est élevé (données sensibles, grand nombre de personnes concernées), les personnes elles-mêmes doivent être notifiées "dans les meilleurs délais" (article 34). La CNIL met à disposition un formulaire en ligne et un guide pratique de notification.
      </p>

      <h3>3.3. Dépôt de plainte</h3>
      <p>
        Déposez plainte auprès du parquet spécialisé en cybercriminalité (JUNALCO) ou de la police/gendarmerie (BEFTI, C3N) rapidement. Cette démarche est importante pour déclencher l'éventuelle couverture de votre assurance cyber, documenter l'incident pour votre défense en cas de mise en cause, et contribuer aux statistiques qui alimentent les politiques publiques de cybersécurité.
      </p>

      <h2>4. La communication externe pendant la crise</h2>

      <h3>4.1. Les parties prenantes à informer</h3>
      <p>
        Identifiez en amont vos parties prenantes clés : clients (notamment si leurs données sont exposées), partenaires et fournisseurs dont vous êtes interdépendant, actionnaires et investisseurs (pour les sociétés cotées), médias (communication proactive vs réactive), et régulateurs sectoriels. Préparez des messages adaptés à chaque audience, avec différents niveaux de détail. Le principe : être transparent sur le fait qu'un incident a eu lieu, sans divulguer d'informations qui faciliteraient d'autres attaques.
      </p>

      <h3>4.2. Ce qu'il faut dire — et ne pas dire</h3>
      <p>
        Dites : que vous avez détecté un incident, que vos équipes sont mobilisées, que vous avez pris des mesures de protection, que vous respectez vos obligations légales de notification. Ne dites pas : les vecteurs d'attaque utilisés (information utile pour d'autres attaquants), le nombre exact de données exfiltrées avant investigation complète, des accusations non vérifiées sur l'origine de l'attaque, des estimations d'impact financier avant chiffrage sérieux.
      </p>

      <h2>5. La communication post-crise et le retour d'expérience</h2>
      <p>
        Une fois la crise résolue, une communication de clôture est nécessaire : informer les parties prenantes de la résolution, présenter les mesures correctives mises en place, et, si approprié, publier un bilan transparent. Les entreprises qui communiquent ouvertement sur les leçons apprises bénéficient d'un regain de confiance client plus rapide que celles qui minimisent.
      </p>
      <p>
        Le retour d'expérience (REX) en interne est indispensable : que s'est-il passé exactement ? Comment l'attaque a-t-elle pu réussir ? Quels processus ont bien fonctionné pendant la crise ? Quels points d'amélioration identifier ? Ce REX doit être documenté et ses recommandations tracées jusqu'à leur implémentation. Il constitue également une preuve de diligence en cas de contrôle CNIL ou ANSSI ultérieur.
      </p>
    </ArticleLayout>
  );
};

export default GestionCriseCyber;
